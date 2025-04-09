import React from "react";

const SignInModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Sign In</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInModal;
