const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    // Common: used to identify the type of entry
    type: {
      type: String,
      required: true,
      enum: ["basic", "details", "fee", "calendar"],
    },

    // --------- BASIC COURSE INFO ---------
    courseTitle: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    image: {
      type: String,
    },

    // --------- COURSE DETAILS ---------
    programmeTitle: {
      type: String,
    },
    introduction: {
      type: String,
    },
    objectives: {
      type: [String], // array of objectives
    },
    duration: {
      min: Number,
      max: Number,
    },
    feesStructure: [
      {
        semester: Number,
        amount: Number,
      },
    ],

    // --------- FEE STRUCTURE PAGE ---------
    courseName: {
      type: String,
    },
    tuitionFee: {
      type: Number,
    },
    additionalFees: {
      type: Number,
    },

    // --------- ACADEMIC CALENDAR ---------
    eventTitle: {
      type: String,
    },
    eventDate: {
      type: Date,
    },
    eventTime: {
      type: String,
    },
    eventMessage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
