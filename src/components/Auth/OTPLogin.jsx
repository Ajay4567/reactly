import React, { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app from "../../firebaseConfig";

const auth = getAuth(app);

const OTPLogin = ({ onLoginSuccess }) => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [error, setError] = useState("");

    const sendOTP = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
            });

            const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
            setConfirmation(confirmationResult);
            alert("OTP Sent!");
        } catch (err) {
            setError(err.message);
        }
    };

    const verifyOTP = async () => {
        try {
            await confirmation.confirm(otp);
            alert("Login Successful!");
            onLoginSuccess({ name: phone });
        } catch (err) {
            setError("Invalid OTP. Try Again.");
        }
    };

    return (
        <div className="otp-container">
            <h3>Sign in with OTP</h3>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOTP}>Send OTP</button>

            {confirmation && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOTP}>Verify OTP</button>
                </>
            )}
            <div id="recaptcha-container"></div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default OTPLogin;
