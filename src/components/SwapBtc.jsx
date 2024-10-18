import React, { useState } from "react";
import { BitCoinIcon } from "../SVG/BitCoinIcon";
import { SwaperIcon } from "../SVG/SwaperIcon";
import { TonIcon } from "../SVG/TonIcon";
import { SwapArrowIcon } from "../SVG/SwapArrowIcon";
import { SwapTonIcon } from "../SVG/SwapTonIcon";
import { BtcIcon } from "../SVG/WhiteBTCIcon";
import { UsdtIcon } from "../SVG/USDTIcon";
// import { BitCoinIconUpdated } from "../SVG/BitcoinIconUpdated";

const SwapCard = () => {
  const [btcAmount, setBtcAmount] = useState(0.0); // BTC input amount
  const [usdtAmount, setUsdtAmount] = useState(0.0); // USDT input amount
  const [isSwapped, setIsSwapped] = useState(false); // State to track whether fields are swapped
  const exchangeRate = 62217.1; // Exchange rate for BTC to USDT

  // Update BTC and USDT amounts based on whether inputs are swapped
  const handleBtcInputChange = (e) => {
    const btcValue = parseFloat(e.target.value) || 0.0;
    setBtcAmount(btcValue);
    if (!isSwapped) {
      setUsdtAmount(btcValue * exchangeRate);
    } else {
      setUsdtAmount(btcValue);
    }
  };

  const handleUsdtInputChange = (e) => {
    const usdtValue = parseFloat(e.target.value) || 0.0;
    setUsdtAmount(usdtValue);
    if (!isSwapped) {
      setBtcAmount(usdtValue / exchangeRate);
    } else {
      setBtcAmount(usdtValue);
    }
  };

  // Swap input fields when the icon is clicked
  const handleSwap = () => {
    setIsSwapped((prevState) => !prevState);
  };

  return (
    <div className="w-full bg-none rounded-lg p-6 dark:bg-[#0D1421] dark:drop-shadow-xl dark:opacity-70 ">
      <h2 className="font-montserrat text-center text-2xl text-[#494949] dark:text-white font-bold mt-10">
        Swap {isSwapped ? "USDT / BTC" : "BTC / USDT"}
      </h2>

      {/* Input field for BTC or USDT Amount */}
      <div className="relative mt-10">
        {isSwapped ? (
          // USDT as input when swapped
          <input
            type="number"
            value={usdtAmount}
            onChange={handleUsdtInputChange}
            className="w-full p-2.5 mt-1 font-montserrat font-medium text-[16px] text-[#595959] dark:text-white dark:border-white dark:bg-[#0D1421] leading-[24px] border border-[#595959] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#595959]"
            placeholder="Amount to Swap $0.0"
          />
        ) : (
          // BTC as input by default

          <input
            type="number"
            value={btcAmount}
            onChange={handleBtcInputChange}
            className="w-full p-2.5 mt-1 font-montserrat font-medium text-[16px] text-[#595959] dark:text-white leading-[24px] border border-[#595959]  dark:bg-[#0D1421] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#595959]"
            placeholder="Amount to Swap $0.00"
          />
        )}
        <span className="absolute right-7 top-4 text-gray-400 font-medium">
          {isSwapped ? <UsdtIcon /> : <BtcIcon />}
        </span>
        <p className="text-right text-[12px] mt-1 text-pink-600">
          {isSwapped ? `$000000 USDT` : `BTC ${btcAmount.toFixed(5)}`}
        </p>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-start  items-center mb-5 ">
        <div className="relative ">
          <div className="flex w-2\80 p-2.5 mt-1 font-montserrat font-bold text-[16px] text-[#FF3389] dark:tex-[#FF3389]  dark:opacity-100  gap-2 leading-[24px] text-center ">
            BTC ${exchangeRate}
          </div>
        </div>
        <div
          className="flex justify-center cursor-pointer ml-8"
          onClick={handleSwap}
        >
          <SwaperIcon />
        </div>
      </div>

      {/* Display for Amount to Receive */}
      <div className="relative mb-4">
        <div className="flex justify-between items-center gap-2 w-full p-2.5 mt-1 font-montserrat font-normal text-[16px] text-[#494949] dark:text-white leading-[24px] border border-[#595959] dark:bg-[#0D1421] rounded-3xl text-right">
          {isSwapped ? btcAmount.toFixed(5) : usdtAmount.toFixed(2)}{" "}
          {isSwapped ? "BTC" : "USDT"}{" "}
          <span className="absolute right-7  text-gray-400 font-medium ">
            {isSwapped ? <BtcIcon /> : <UsdtIcon />}
          </span>
        </div>
        <p className="text-right text-[12px] mt-1 text-pink-600">
          {isSwapped ? `BTC ${btcAmount.toFixed(5)}` : `$000000 USDT`}
        </p>
      </div>

      {/* Current Exchange Rate Display */}
      {/* <div className="relative mb-6">
        <div className="flex w-full p-2.5 mt-1 font-montserrat font-bold text-[16px] text-[#595959] opacity-50 gap-2 leading-[24px] text-center border border-[#595959] rounded-3xl">
          <div>Current Exchange Rate</div> ${exchangeRate}
        </div>
      </div> */}

      {/* Swap Button */}
      <button
        className="flex justify-center gap-2 w-full bg-gradient-to-l from-[#F64F59] to-[#FF3389] text-white font-semibold py-2.5 rounded-3xl text-lg  hover:opacity-90 transition-transform duration-500 ease-in-out hover:scale-105"
        onClick={() =>
          alert(
            `Swapping ${btcAmount.toFixed(5)} BTC for ${usdtAmount.toFixed(
              2
            )} USDT`
          )
        }
      >
        SWAP
      </button>
    </div>
  );
};

export default SwapCard;
