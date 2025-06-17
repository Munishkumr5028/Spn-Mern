const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  name: String,
  department: String,
  establishedYear: Number,
});

module.exports = mongoose.model("College", collegeSchema);
