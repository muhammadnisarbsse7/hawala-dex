// src/components/SwapCard.jsx
import React, { useState } from "react";

const SwapCard = () => {
  const [btcAmount, setBtcAmount] = useState(0.0);
  const exchangeRate = 63863.56; // Exchange rate for BTC to USDT
  const currentRate = 0.99999; // Exchange rate display for USDT
  const usdtAmount = (btcAmount * exchangeRate).toFixed(2);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Swap USDT / BTC
      </h2>

      {/* Input field for Amount to Swap */}
      <div className="relative mb-4">
        <label className="block text-gray-700">Amount to Swap</label>
        <input
          type="number"
          value={btcAmount}
          onChange={(e) => setBtcAmount(parseFloat(e.target.value))}
          className="w-full p-3 mt-1 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="0.00"
        />
        <span className="absolute right-4 top-10 text-gray-400 font-medium">
          ₿
        </span>
        <p className="text-right mt-1 text-pink-600">
          {(btcAmount || 0.00101).toFixed(5)} BTC
        </p>
      </div>

      {/* Display for Amount to Receive */}
      <div className="relative mb-4">
        <label className="block text-gray-700">Amount to Receive</label>
        <div className="w-full p-3 mt-1 text-lg border rounded-lg bg-gray-100 text-right">
          {usdtAmount} USDT
        </div>
        <span className="absolute right-4 top-10 text-gray-400 font-medium">
          USDT
        </span>
        <p className="text-right mt-1 text-pink-600">
          {exchangeRate.toFixed(2)} USDT
        </p>
      </div>

      {/* Display for Current Exchange Rate */}
      <div className="relative mb-6">
        <label className="block text-gray-700">Current Exchange Rate</label>
        <div className="w-full p-3 mt-1 text-lg border rounded-lg bg-gray-100 text-center">
          ${currentRate}
        </div>
      </div>

      {/* Swap Button */}
      <button
        className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg text-lg transition hover:opacity-90"
        onClick={() =>
          alert(`Swapping ${btcAmount} BTC for ${usdtAmount} USDT`)
        }
      >
        SWAP BTC ↔
      </button>
    </div>
  );
};

export default SwapCard;
