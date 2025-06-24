import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  login,
  verifyOtp,
  forgotPassword,
  resetPassword,
} from "../../api/authApi";
import { toast } from "react-toastify";
import "./authlogin.css";

const AuthLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [trustedDevice, setTrustedDevice] = useState(false);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return toast.error("Please fill all fields");

    try {
      const res = await login({
        email,
        password,
        isTrustedDevice: trustedDevice,
      });
      if (res.data.requireOtp) {
        setUserId(res.data.userId);
        setShowOtpModal(true);
        toast.success("OTP sent to your email.");
      } else if (res.data.skipOtp) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful");
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return toast.error("Please enter OTP");
    try {
      const res = await verifyOtp({
        userId,
        otp,
        isTrustedDevice: trustedDevice,
      });
      localStorage.setItem("token", res.data.token);
      toast.success("OTP verified, login successful");
      setShowOtpModal(false);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleForgot = async () => {
    if (!email) return toast.error("Please enter your email");
    try {
      await forgotPassword({ email });
      toast.success("OTP sent to your email.");
      setShowForgotModal(false);
      setShowResetModal(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending OTP");
    }
  };

  const handleReset = async () => {
    if (!otp || !newPassword || !confirmPassword)
      return toast.error("Please fill all fields");
    if (newPassword !== confirmPassword)
      return toast.error("Passwords do not match");
    try {
      await resetPassword({ email, otp, newPassword });
      toast.success("Password reset successfully");
      setShowResetModal(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="box">
      <div className="auth-wrapper">
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={trustedDevice}
            onChange={() => setTrustedDevice(!trustedDevice)}
          />
          <span>Trusted Device</span>
        </label>

        <button onClick={handleLogin}>Login</button>
        <p className="link-text" onClick={() => setShowForgotModal(true)}>
          Forgot Password?
        </p>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Enter OTP</h3>
              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
              />
              <button onClick={handleVerifyOtp}>Verify OTP</button>
              <p className="link-text" onClick={() => setShowOtpModal(false)}>
                Close
              </p>
            </div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {showForgotModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Forgot Password</h3>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleForgot}>Send OTP</button>
              <p
                className="link-text"
                onClick={() => setShowForgotModal(false)}
              >
                Close
              </p>
            </div>
          </div>
        )}

        {/* Reset Password Modal */}
        {showResetModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Reset Password</h3>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={handleReset}>Reset Password</button>
              <p className="link-text" onClick={() => setShowResetModal(false)}>
                Close
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLogin;
