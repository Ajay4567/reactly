import React, { useState } from "react";

const MyWallet = () => {
    const [balance, setBalance] = useState(50); // Mock balance

    return (
        <div className="wallet-container">
            <h2>My Wallet</h2>
            <p>Available Balance: ${balance}</p>
            <button onClick={() => alert("Add Funds Feature Coming Soon!")}>
                Add Funds
            </button>
        </div>
    );
};

export default MyWallet;
