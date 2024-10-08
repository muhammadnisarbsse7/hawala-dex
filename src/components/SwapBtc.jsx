// src/components/SwapCard.jsx
import React, { useState } from "react";
import { BitCoinIcon } from "../SVG/BitCoinIcon";
import { SwaperIcon } from "../SVG/SwaperIcon";
import { TonIcon } from "../SVG/TonIcon";
import { SwapArrowIcon } from "../SVG/SwapArrowIcon";

const SwapCard = () => {
  const [btcAmount, setBtcAmount] = useState(0.0);
  const exchangeRate = 63863.56; // Exchange rate for BTC to USDT
  const currentRate = 0.99999; // Exchange rate display for USDT
  const usdtAmount = (btcAmount * exchangeRate).toFixed(2);

  return (
    <div className="w-full  bg-white shadow-lg rounded-lg p-6">
      <h2 className="font-montserrat  text-center text-2xl text-[#494949] font-bold mt-10 ">
        Swap USDT / BTC
      </h2>

      {/* Input field for Amount to Swap */}
      <div className="relative mt-10">
        {/* <label className="block text-gray-700">Amount to Swap</label> */}
        <input
          type="number"
          value={btcAmount}
          onChange={(e) => setBtcAmount(parseFloat(e.target.value))}
          className="w-full p-2.5  mt-1 font-montserrat font-medium text-[16px] text-[#595959] leading-[24px] border border-[#595959] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#595959]"
          placeholder="Amount to Swap $0.00"
        />
        <span className="absolute right-7  top-4 text-gray-400 font-medium">
          <BitCoinIcon />
        </span>
        <p className="text-right mt-1 text-pink-600">
          {(btcAmount || 0.00101).toFixed(5)} BTC
        </p>
      </div>
      <div className="flex  justify-center">
        <SwaperIcon />
      </div>

      {/* Display for Amount to Receive */}
      <div className="relative mb-4">
        {/* <label className="block text-gray-700">Amount to Receive</label> */}
        <div className="flex justify-end items-center gap-2 w-full p-2.5 mt-1 font-montserrat font-normal text-[16px] text-[#494949] leading-[24px] border border-[#595959]  rounded-3xl text-right">
          {usdtAmount} USDT <TonIcon />
        </div>
        {/* <span className="absolute right-4 top-10 text-gray-400 font-medium">
          USDT
        </span> */}
        <p className="text-right mt-1 text-pink-600">
          {exchangeRate.toFixed(2)} USDT
        </p>
      </div>

      {/* Display for Current Exchange Rate */}
      <div className="relative mb-6">
        {/* <label className="block text-gray-700">Current Exchange Rate</label> */}
        <div className="flex w-full p-2.5 mt-1 font-montserrat font-bold  text-[16px] text-[#595959] opacity-50 gap-2 leading-[24px] text-center border border-[#595959] rounded-3xl  ">
          <div>Current Exchange Rate </div>${currentRate}
        </div>
      </div>

      {/* Swap Button */}
      <button
        className="flex justify-center gap-2 w-full bg-gradient-to-l  from-[#F64F59] to-[#FF3389] text-white font-semibold py-2.5 rounded-3xl text-lg transition hover:opacity-90"
        onClick={() =>
          alert(`Swapping ${btcAmount} BTC for ${usdtAmount} USDT`)
        }
      >
        SWAP BTC <SwapArrowIcon />
      </button>
    </div>
  );
};

export default SwapCard;
