const express = require("express");
const router = express.Router();
const {
  login,
  verifyOtp,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController.js");

router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
