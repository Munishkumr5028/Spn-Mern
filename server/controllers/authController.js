const User = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  verifyAccount,
  forgotPassword: sendForgotOtp,
} = require("../middleware/mailer");

// Token expiry in seconds
const TOKEN_EXPIRY = 60 * 60 * 8; // 8 hours

// 🔐 LOGIN CONTROLLER
exports.login = async (req, res) => {
  try {
    const { email, password, isTrustedDevice } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    // Trusted Device check
    if (isTrustedDevice && user.trustedDeviceToken) {
      try {
        const decoded = jwt.verify(
          user.trustedDeviceToken,
          process.env.JWT_SECRET
        );
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp > now) {
          return res.status(200).json({
            message: "Login successful (Trusted Device)",
            token: user.trustedDeviceToken,
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
            },
            skipOtp: true,
          });
        }
      } catch (err) {
        console.log("Trusted token expired or invalid, fallback to OTP.");
      }
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    await verifyAccount(user.email, otp, user.name);

    return res.status(200).json({
      message: "OTP sent to email",
      userId: user._id,
      email: user.email,
      requireOtp: true,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🔐 OTP VERIFICATION CONTROLLER
exports.verifyOtp = async (req, res) => {
  try {
    const { userId, otp, isTrustedDevice } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.otp || user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // Clear OTP
    user.otp = null;
    user.otpExpiry = null;

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY } // 8h
    );

    if (isTrustedDevice) {
      user.trustedDeviceToken = token;
    } else {
      user.trustedDeviceToken = null;
    }

    await user.save();

    return res.status(200).json({
      message: "OTP verified. Login successful.",
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("OTP verification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🔐 FORGOT PASSWORD - OTP SENDER
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    await sendForgotOtp(user.email, user.name, otp);

    return res.status(200).json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🔐 RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.otp || user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.otp = null;
    user.otpExpiry = null;
    user.trustedDeviceToken = null; // invalidate trusted device
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
