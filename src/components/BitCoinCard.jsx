// src/components/BitcoinCard.jsx
import React from "react";
import { StarIcon } from "../SVG/StarIcon";
import { ShareIcon } from "../SVG/ShareIcon";
import { ExclamationIcon } from "../SVG/ExclamationIcon";
import { DownIcon } from "../SVG/DownIcon";
import { GreaterIcon } from "../SVG/GreaterIcon";
import { VerifiedIcon } from "../SVG/VerifiedIcon";

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
    <div className="w-full mx-auto bg-none  rounded-lg p-2 sm:p-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Bitcoin"
            className="w-8 h-8 mr-2"
          />
          <h1 className="font-inter font-semibold text-[18px] text-[#0D1421] dark:text-white leading-[21.78px] ">
            Bitcoin
            <span className="font-inter font-normal text-[12px] text-[#616E85] dark:text-white leading-[18px]">
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
      <div className="flex items-center justify-between my-4 ">
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
      <div className="space-y-2  mt-16">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <p className="font-inter font-medium text-[12px] text-[#616E85]   dark:text-white leading-[18px]">
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
                  : "font-inter font-semibold text-[12px] text-[#0D1421]  dark:text-white leading-[18px]"
              }`}
            >
              ${marketCap.toLocaleString()}
            </p>
          </div>
        </div>

        <div className=" flex flex-row justify-between items-center">
          <div className="w-[283px] h-1 rounded-[7px] bg-[#EFF2F5] border"></div>
          <div className="font-inter font-normal text-[11px] text-[#616E85] dark:text-white leading-[16.5px]">
            #1
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Volume (24h)
            </p>
            <ExclamationIcon />
            <GreaterIcon />
          </div>
          <p
            className={`${
              volumeChange > 0
                ? "font-inter font-semibold text-[11px] text-[#16C784]  leading-[16px]"
                : "text-red-500"
            }`}
          >
            (+{volumeChange}%) ${volume24h.toLocaleString()}
          </p>
        </div>

        <div className=" flex flex-row justify-between items-center">
          <div className="w-[283px] h-1 rounded-[7px] bg-[#EFF2F5] border"></div>
          <div className="font-inter font-normal text-[11px] text-[#616E85] dark:text-white leading-[16.5px]">
            #2
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Volume/Market cap (24h)
            </p>
            <ExclamationIcon />
            {/* <GreaterIcon /> */}
          </div>
          <p className="font-inter font-semibold text-[12px] text-[#0D1421] dark:text-white leading-[18px]">
            3.65%
          </p>
        </div>

        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Circulating supply
            </p>
            <VerifiedIcon />
            <ExclamationIcon />
          </div>
          <p className="font-inter font-semibold text-[12px] text-[#0D1421] dark:text-white leading-[18px]">
            19,761,509 BTC
          </p>
        </div>

        <div className=" flex flex-row justify-between items-center">
          <div className="w-[283px] h-1 rounded-[7px] bg-[#EFF2F5] border"></div>
          <div className="font-inter font-normal text-[11px] text-[#616E85] dark:text-white leading-[16.5px]">
            04.10%
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Total supply
            </p>
            <ExclamationIcon />
          </div>
          <p className="font-inter font-semibold text-[12px] text-[#0D1421] dark:text-white leading-[18px]">
            19,761,509 BTC
          </p>
        </div>

        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Max. supply
            </p>
            <ExclamationIcon />
          </div>
          <p className="font-inter font-semibold text-[12px] text-[#0D1421] dark:text-white leading-[18px]">
            21,000,000 BTC
          </p>
        </div>
        <div className="flex justify-between">
          <div className=" flex items-center gap-[3px]">
            <p className="font-inter font-medium text-[12px] text-[#616E85] dark:text-white leading-[18px]">
              Fully diluted market cap
            </p>
            <ExclamationIcon />
          </div>
          <p className="font-inter font-semibold text-[12px] text-[#0D1421] dark:text-white leading-[18px]">
            $1,302,769,739,543
          </p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCard;
