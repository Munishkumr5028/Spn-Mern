const College = require("../models/College");

exports.getAllColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

exports.addCollege = async (req, res) => {
  const newCollege = new College(req.body);
  await newCollege.save();
  res.status(201).json(newCollege);
};
