// src/components/BitcoinCard.jsx
import React from "react";
import { StarIcon } from "../SVG/StarIcon";
import { ShareIcon } from "../SVG/ShareIcon";
import { ExclamationIcon } from "../SVG/ExclamationIcon";
import { DownIcon } from "../SVG/DownIcon";

const BitcoinCard = ({
  price,
  priceChange,
  marketCap,
  volume24h,
  volumeChange,
  circulatingSupply,
  totalSupply,
  maxSupply,
  fullyDilutedMarketCap,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p- border-2 border-gray-800">
      <div className="flex items-center justify-between border border-green-800">
        <div className="flex items-center">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Bitcoin"
            className="w-8 h-8 mr-2"
          />
          <h1 className="font-inter font-semibold text-[18px] text-[#0D1421] leading-[21.78px] ">
            Bitcoin{" "}
            <span className="font-inter font-normal text-[12px] text-[#616E85] leading-[18px]">
              BTC
            </span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-1 bg-[#EFF2F5] p-2 rounded-[7.92px]">
            <StarIcon />{" "}
            <h1 className="font-inter font-normal text-[#616E85] text-[12px] leading-[18px]">
              5M
            </h1>
          </div>
          <div className="bg-[#EFF2F5] p-2 rounded-[7.92px]">
            <ShareIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-4 border">
        <h2 className="font-inter font-bold text-[36px] text-[#FF3389] leading-[52px]">
          ${price}
        </h2>
        <p
          className={`font-inter font-semibold text-[14px] leading-7  ${
            priceChange > 0 ? "text-green-500" : "text-[#EA3943]"
          }`}
        >
          {priceChange > 0 ? `+${priceChange}% (1d)` : `${priceChange}% (1d)`}
        </p>
      </div>

      {/* Market Cap and Volume */}
      <div className="space-y-2 border-4 mt-16">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <p className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
              Market Cap
            </p>
            <div>
              <ExclamationIcon />
            </div>
          </div>
          <div className="flex items-center">
            <DownIcon />
            <p className="font-inter font-semibold text-[11px] text-[#EA3943] leading-[16.5px]">
              2.11%
            </p>
            <p
              className={`${
                marketCap < 0
                  ? "text-red-500"
                  : "font-inter font-semibold text-[12px] text-[#0D1421] leading-[18px]"
              }`}
            >
              ${marketCap.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="border justify-between">
          <div className="max-w-[23px] h-1 bg-slate-800 border"></div>
          <div>#1</div>
        </div>
        <div className="flex justify-between">
          <p>Volume (24h)</p>
          <p
            className={`${
              volumeChange > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ${volume24h.toLocaleString()} (+{volumeChange}%)
          </p>
        </div>
        <div className="flex justify-between">
          <p>Volume/Market Cap (24h)</p>
          <p>3.65%</p>
        </div>
        <div className="flex justify-between">
          <p>Circulating Supply</p>
          <p>{circulatingSupply.toLocaleString()} BTC</p>
        </div>
        <div className="flex justify-between">
          <p>Total Supply</p>
          <p>{totalSupply.toLocaleString()} BTC</p>
        </div>
        <div className="flex justify-between">
          <p>Max Supply</p>
          <p>{maxSupply.toLocaleString()} BTC</p>
        </div>
        <div className="flex justify-between">
          <p>Fully Diluted Market Cap</p>
          <p>${fullyDilutedMarketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCard;
