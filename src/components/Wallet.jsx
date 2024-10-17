import React, { useState } from "react";
import { ethers } from "ethers"; // Import ethers.js
import { BtcIcon } from "../SVG/WhiteBTCIcon";
import { UsdtIcon } from "../SVG/USDTIcon";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null); // Store connected wallet address
  const [provider, setProvider] = useState(null); // Store the provider instance
  const [errorMessage, setErrorMessage] = useState(null); // Error handling

  // Function to connect to MetaMask wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum); // Initialize provider
        await provider.send("eth_requestAccounts", []); // Request account access
        const signer = provider.getSigner(); // Get the signer
        const address = await signer.getAddress(); // Get user's address
        setWalletAddress(address); // Save the address in state
        setProvider(provider); // Set the provider for future transactions
        setErrorMessage(null); // Clear any error message
      } catch (err) {
        console.error("Error connecting to wallet:", err);
        setErrorMessage("Failed to connect to MetaMask.");
      }
    } else {
      setErrorMessage(
        "MetaMask is not installed. Please install it to use this feature."
      );
    }
  };

  // Function to disconnect the wallet (optional)
  const disconnectWallet = () => {
    setWalletAddress(null);
    setProvider(null);
  };

  return (
    <div className="wallet-connect">
      <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>

      {walletAddress ? (
        <div>
          <p className="mb-2">Connected Wallet Address: {walletAddress}</p>
          <button
            onClick={disconnectWallet}
            className="p-2 rounded bg-red-600 text-white"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={connectWallet}
            className="p-3 rounded-xl bg-[#FF3389] text-white hover:bg-[#FF2070]"
          >
            Connect MetaMask Wallet
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
