// src/utils/exportToExcel.js

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * Exports JSON data to an Excel (.xlsx) file with better formatting.
 *
 * @param {Array} data - The data to export (array of objects)
 * @param {string} filename - The name of the exported file (default: "export.xlsx")
 * @param {string} sheetName - Optional Excel sheet name (default: "Sheet1")
 */
export const exportToExcel = (
  data,
  filename = "export.xlsx",
  sheetName = "Sheet1"
) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.warn("No data provided for Excel export.");
    return;
  }

  try {
    // Step 1: Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Step 2: Auto-adjust column widths
    const columnWidths = Object.keys(data[0]).map((key) => {
      const maxLength = Math.max(
        key.length,
        ...data.map((item) => (item[key] ? item[key].toString().length : 0))
      );
      return { wch: maxLength + 2 }; // +2 for padding
    });
    worksheet["!cols"] = columnWidths;

    // Step 3: Create workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Step 4: Write workbook and trigger download
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, filename);
  } catch (error) {
    console.error("Failed to export data to Excel:", error);
  }
};
