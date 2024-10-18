// Chatgpt Navbar

import React, { useState } from "react";
import { HawalaLogo, UpdatedLogo } from "../assets";
import { BnbIcon } from "../SVG/BnbIcon";
import { ArrowUpIcon } from "../SVG/ArrowUpIcon";
import { SunIcon } from "../SVG/SunIcon";
import { MoonIcon } from "../SVG/MoonIcon";
import { NavLink } from "react-router-dom";
import { EthIcon } from "../SVG/ETHIcon";
import { TonIcon } from "../SVG/TonIcon";
import { CrossIcon } from "../SVG/CrossIcon";
import { TickIcon } from "../SVG/TickIcon";
import { BitCoinIcon } from "../SVG/BitCoinIcon";
import { BtcIcon } from "../SVG/WhiteBTCIcon";
import { UsdtIcon } from "../SVG/USDTIcon";

function Navbar({ darkMode, setDarkMode }) {
  const [isUsdtOpen, setIsUsdtOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false); // State for Wallet Modal
  const [isWalletView, setIsWalletView] = useState(true); // State for toggling between wallet and transactions

  const transactions = [
    "Swap $120,000 USDT for 2 BTC",
    "Approve USDT",
    "Swap $180,000 USDT for 3 BTC",
    "Approve USDT",
    "Swap $1,200,000 USDT for 20 BTC",
    "Approve USDT",
    "Swap $180,000 USDT for 3 BTC",
    "Approve USDT",
  ];

  return (
    <>
      {/* Navbar */}
      {/* Navbar */}
      <nav className="flex items-center gap-2 sm:gap-10  justify-between p-2 drop-shadow-lg border-b-4 border-white dark:border-[#0D1421] dark:bg-[#0D1421]">
        {/* Left side: Logo */}
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/">
            <img src={UpdatedLogo} className="w-auto h-16 mr-2" alt="Logo" />
          </NavLink>
          <div className="font-poppins font-semibold text-[10px] sm:text-[18px] lg:text-[24px] text-[#494949] lg:leading-9 dark:text-white">
            Hawala
            <span className="font-poppins font-semibold text-[10px] sm:text-[18px] lg:text-[24px] text-[#FF3389] lg:leading-9">
              DEX
            </span>
          </div>
        </div>

        {/* Right side: Buttons and Dark Mode Toggle */}
        <div className="flex items-center space-x-2 lg:space-x-5">
          {/* Connect BTC Wallet Button */}
          <button
            onClick={() => setIsUsdtOpen(!isUsdtOpen)}
            className=" p-1 sm:p-3 rounded-xl bg-[#FF3389] hover:bg-[#FF2070] text-white flex items-center space-x-0.5 sm:space-x-2 transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <BtcIcon />
            <span className="text-[6px] sm:text-[12px] lg:text-[16px]">
              Connect BTC
            </span>
          </button>

          {isUsdtOpen && (
            <div className="absolute top-[65px] right-[125px] sm:right-[198px] sm:top-[80px] w-[72px]  sm:w-[130px]  lg:w-[154px] lg:right-[250px] bg-white rounded-xl shadow-lg">
              <button className="w-full px-2 py-1  sm:p-3 rounded-xl font-inter font-normal text-[10px] sm:text-[16px] text-[#494949] leading-[19.36px] flex items-start justify-start gap-2 hover:bg-[#FF2070]">
                <TonIcon />
                USDT
              </button>
            </div>
          )}

          {/* Connect USDT Wallet Button */}
          <button
            onClick={() => setIsWalletModalOpen(!isWalletModalOpen)}
            className="p-1 sm:p-3 rounded-xl bg-[#FF3389] hover:bg-[#FF2070] text-white flex items-center space-x-0.5 sm:space-x-2 transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <UsdtIcon />
            <span className="text-[6px] sm:text-[12px] lg:text-[16px]">
              Connect USDT
            </span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1.5 sm:p-3 bg-[#FF3389] hover:bg-[#FF2070] rounded-full text-white transition-transform duration-500 ease-in-out hover:scale-105"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* Wallet Modal */}
      {isWalletModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsWalletModalOpen(false)}
          ></div>

          {/* Modal content */}
          <div className="relative w-[255px] bg-white rounded-[20px] shadow-lg p-6 z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-inter font-semibold text-[20px] leading-[12.6px] text-[#FF3389]">
                Your Wallet
              </h2>
              <button onClick={() => setIsWalletModalOpen(false)}>
                <CrossIcon />
              </button>
            </div>

            <div className="flex justify-between items-center mb-5 rounded-[6.3px] border border-[#FF3389]">
              <button
                className={`transition-all duration-500 ease-in-out py-[6px] px-7 rounded-[6.3px] ${
                  isWalletView
                    ? "bg-[#FF3389] font-inter font-medium text-[13.5px] leading-[12.6px] text-white scale-105 shadow-lg"
                    : "font-inter font-medium text-[13.5px] leading-[12.6px] text-[#9A9FBF]  hover:text-[#FF3389] hover:scale-105"
                }`}
                onClick={() => setIsWalletView(true)}
              >
                Wallet
              </button>
              <button
                className={`transition-all duration-500 ease-in-out py-[6px] px-2 rounded-[6.3px] ${
                  !isWalletView
                    ? "bg-[#FF3389] font-inter font-medium text-[13.5px] leading-[12.6px] text-white scale-105 shadow-lg"
                    : "font-inter font-medium text-[13.5px] leading-[12.6px] text-[#9A9FBF]  hover:text-[#FF3389] hover:scale-105"
                }`}
                onClick={() => setIsWalletView(false)}
              >
                Transactions
              </button>
            </div>

            {!isWalletView && (
              <div className="space-y-1">
                {transactions.map((transaction, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="h-5 w-8 rounded-full flex items-center justify-center">
                      <TickIcon />
                    </div>
                    <p className="font-inter font-normal text-[10px] text-[#000000] leading-[7.26px]">
                      {transaction}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {isWalletView && (
              <div>
                <div className="mb-5">
                  <div className="flex justify-between items-center bg-[#F7F8FD] border border-[#FF3389] rounded-lg p-2">
                    <span className="font-inter font-semibold text-[10.4px] text-[#4A4A4A] leading-[11.2px]">
                      0xec7842178520bb71f30523
                    </span>
                    <button
                      className="font-inter font-medium text-[10px] text-[#FF3389] leading-[8.4px]"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "0xec7842178520bb71f30523"
                        )
                      }
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-5">
                  <button className="flex font-inter font-medium text-[12.5px] leading-[12.71px] items-center bg-[#26A17B] text-white rounded-full px-4 py-1">
                    <TonIcon />
                    USDT Chain
                  </button>
                  <a
                    href="#"
                    className="font-inter font-medium text-[12.4px] text-[#126FB2] leading-[10.17px]"
                  >
                    ETHScan
                  </a>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-inter font-medium text-[12.5px] text-[#4A4A4A] leading-[12.71px]">
                      Balance
                    </span>
                    <span className="font-inter font-medium text-[12.5px] text-[#4A4A4A] leading-[12.71px]">
                      0.114965
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter font-medium text-[12.5px] text-[#4A4A4A] leading-[12.71px]">
                      HawalaDEX
                    </span>
                    <span className="font-inter font-medium text-[12.5px] text-[#4A4A4A] leading-[12.71px]">
                      0
                    </span>
                  </div>
                </div>
              </div>
            )}
            <button className="transition-transform duration-500 ease-in-out mt-6 w-full font-inter font-semibold text-[12.5px] leading-[12.6px] py-1 border border-[#999999] text-[#999999] rounded-[5.6px] hover:scale-105 hover:text-[#FF3389] hover:border-[#FF3389]">
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
