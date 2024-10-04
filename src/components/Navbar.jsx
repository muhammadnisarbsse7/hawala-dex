import React, { useState } from "react";
import { HawalaLogo } from "../assets";
import { BnbIcon } from "../SVG/BnbIcon";
import { ArrowUpIcon } from "../SVG/ArrowUpIcon";
import { SunIcon } from "../SVG/SunIcon";
import { MoonIcon } from "../SVG/MoonIcon";
import { NavLink } from "react-router-dom";
import { EthIcon } from "../SVG/ETHIcon";
import { TonIcon } from "../SVG/TonIcon";
import { CrossIcon } from "../SVG/CrossIcon";
import { TickIcon } from "../SVG/TickIcon";
// import { CrossIcon } from "../SVG/CrossIcon"; // Assuming CrossIcon exists

function App() {
  const [isOpen, setIsOpen] = useState(false);
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
      <nav className="flex items-center justify-between flex-wrap p-2 drop-shadow-lg border-b-4 border-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          <NavLink to="/">
            <img
              src={HawalaLogo}
              className="block  sm:block w-auto h-20 mr-2"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            {/* Hamburger Menu */}
            <svg
              className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H25.1111M2 10H25.1111M2 18H25.1111"
                stroke="#FE3782"
                stroke-width="3.55556"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              className={`fill-current  h-4 w-4 ${isOpen ? "block" : "hidden"}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5735 2.42596C15.7068 2.29689 15.8132 2.14246 15.8864 1.97171C15.9597 1.80095 15.9982 1.61727 15.9999 1.43139C16.0016 1.24552 15.9664 1.06116 15.8963 0.889084C15.8262 0.717008 15.7227 0.560657 15.5917 0.429155C15.4608 0.297653 15.305 0.193632 15.1335 0.123162C14.9621 0.0526925 14.7783 0.0171858 14.593 0.0187128C14.4077 0.0202398 14.2246 0.0587703 14.0543 0.132056C13.884 0.205342 13.73 0.311916 13.6012 0.445559L8.0079 6.05452L2.4165 0.445559C2.28874 0.30802 2.13468 0.197703 1.9635 0.12119C1.79231 0.0446766 1.60752 0.00353431 1.42014 0.000217862C1.23276 -0.00309858 1.04664 0.0314789 0.872873 0.101887C0.699106 0.172295 0.541256 0.277091 0.40874 0.410024C0.276223 0.542956 0.171755 0.701301 0.101568 0.875614C0.0313803 1.04993 -0.00308888 1.23664 0.00021718 1.4246C0.00352324 1.61257 0.0445368 1.79794 0.12081 1.96966C0.197084 2.14138 0.307055 2.29593 0.444164 2.42409L6.03184 8.03492L0.440443 13.6439C0.193938 13.9093 0.0597379 14.2603 0.0661168 14.6229C0.0724956 14.9856 0.218955 15.3316 0.474639 15.5881C0.730323 15.8446 1.07527 15.9915 1.4368 15.9979C1.79834 16.0043 2.14824 15.8697 2.41278 15.6224L8.0079 10.0135L13.5993 15.6243C13.8638 15.8716 14.2137 16.0062 14.5753 15.9998C14.9368 15.9934 15.2818 15.8465 15.5374 15.59C15.7931 15.3335 15.9396 14.9875 15.946 14.6248C15.9523 14.2621 15.8181 13.9111 15.5716 13.6457L9.98396 8.03492L15.5735 2.42596Z"
                fill="#FE3782"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-end lg:items-center lg:flex-grow ">
            <div className="relative">
              <button
                onClick={() => setIsUsdtOpen(!isUsdtOpen)}
                className="w-[127px] lg:w-auto block mt-4 p-3 rounded-xl space-x-3 bg-[#FF3389] hover:bg-[#FF2070] lg:inline-block lg:mt-0 lg:mr-4"
              >
                <div className="flex font-inter text-[12px] lg:text-[16px] leading-[19.36px] text-white flex-row items-center gap-2">
                  <EthIcon />
                  ETH Chain
                  <ArrowUpIcon />
                </div>
              </button>
              {isUsdtOpen && (
                <div className="absolute mt-2 w-[127px] lg:w-[140px] bg-white rounded-xl shadow-lg">
                  <button className="w-full p-3 rounded-xl font-inter font-normal text-[16px] text-[#494949] leading-[19.36px] flex items-start justify-start gap-2 hover:bg-[#FF2070]">
                    <TonIcon />
                    USDT
                  </button>
                </div>
              )}
            </div>

            {/* Wallet Modal Button */}
            <button
              onClick={() => setIsWalletModalOpen(!isWalletModalOpen)}
              className="w-[127px] lg:w-auto lg:py-3 lg:mr-4 block mt-4 py-3 px-4 font-inter font-medium text-[12px] lg:text-[16px] leading-[14.52px] lg:leading-[19.36px] text-white rounded-xl bg-[#FF3389] hover:bg-[#FF2070] lg:inline-block lg:mt-0"
            >
              <div className="flex flex-row items-center gap-2">
                Connect Wallet
              </div>
            </button>

            <button
              href="#"
              className="w-[127px] lg:w-auto lg:px-0 block mt-4 py-2.5 px-2 rounded-xl bg-[#FF3389] hover:bg-[#FF2070] lg:inline-block lg:mt-0 text-white-200 lg:mr-4"
            >
              <div className="flex flex-row px-3 justify-between items-center gap-2">
                <SunIcon />
                <MoonIcon />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Wallet Modal (Positioned right below the navbar) */}
      {isWalletModalOpen && (
        <div
          className={`absolute top-[192px]  lg:top-[70px] mt-2 left-1/2 transform -translate-x-1/2 mx-auto w-[235px] bg-white rounded-[20px] shadow-lg p-6 z-50 
      transition-all duration-300 ease-out scale-95 opacity-0 
      ${isWalletModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      lg:left-auto lg:transform-none lg:right-6`}
        >
          {" "}
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-inter font-semibold text-[14px] leading-[12.6px] text-[#FF3389]">
              Your Wallet
            </h2>
            <button onClick={() => setIsWalletModalOpen(false)}>
              <CrossIcon />
            </button>
          </div>
          {/* Toggle Button (Wallet / Transactions) */}
          <div className="flex justify-between items-center mb-4 rounded-[6.3px] border border-[#FF3389]">
            <button
              className={`py-[6px] px-7 rounded-[6.3px] ${
                isWalletView
                  ? "bg-[#FF3389] font-inter font-medium text-[10.5px] leading-[12.6px] text-white"
                  : " font-inter font-medium text-[10.5px] leading-[12.6px] text-[#9A9FBF]"
              }`}
              onClick={() => setIsWalletView(true)}
            >
              Wallet
            </button>
            <button
              className={`py-[6px] px-2 rounded-[6.3px] ${
                !isWalletView
                  ? "bg-[#FF3389] font-inter font-medium text-[10.5px] leading-[12.6px] text-white"
                  : " font-inter font-medium text-[10.5px] leading-[12.6px] text-[#9A9FBF]"
              }`}
              onClick={() => setIsWalletView(false)}
            >
              Transactions
            </button>
          </div>
          {/* Recent Transactions and Clear All */}
          {!isWalletView && (
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-iner  font-semibold text-[11.2px] text-[#FF3389] leading-[12.6px]">
                Recent Transactions
              </h3>
              <button className="font-inter font-semibold text-[8.4px] text-[#126FB2] leading-[12.6px]  hover:underline">
                Clear All
              </button>
            </div>
          )}
          {/* Transaction List */}
          {!isWalletView && (
            <div className="space-y-1">
              {/* Transaction Items */}
              {transactions.map((transaction, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="h-4 w-4  rounded-full flex items-center justify-center">
                    <TickIcon />
                  </div>
                  <p className="font-inter font-normal text-[6px] text-[#000000] leading-[7.26px]">
                    {transaction}
                  </p>
                </div>
              ))}
            </div>
          )}
          {/* Wallet */}
          {isWalletView && (
            <div>
              {/* Wallet Address with Copy Button */}
              <div className="mb-5">
                <div className="flex justify-between items-center bg-[#F7F8FD] border border-[#FF3389] rounded-lg p-2">
                  <span className="font-inter font-semibold text-[8.4px] text-[#4A4A4A] leading-[11.2px] ">
                    0xec7842178520bb71f30523
                  </span>
                  <button
                    className="font-inter font-medium text-[7px] text-[#FF3389] leading-[8.4px] "
                    onClick={() =>
                      navigator.clipboard.writeText("0xec7842178520bb71f30523")
                    }
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-5">
                <button className="flex font-inter font-medium text-[10.5px] leading-[12.71px] items-center bg-[#26A17B] text-white rounded-full px-4 py-1">
                  <TonIcon />
                  USDT Chain
                </button>
                <a
                  href="#"
                  className="font-inter font-medium text-[8.4px] text-[#126FB2] leading-[10.17px] "
                >
                  ETHScan
                </a>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between mb-2">
                  <span className="font-inter font-medium text-[10.5px] text-[#4A4A4A] leading-[12.71px]">
                    Balance
                  </span>
                  <span className="font-inter font-medium text-[10.5px] text-[#4A4A4A] leading-[12.71px]">
                    0.114965
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-inter font-medium text-[10.5px] text-[#4A4A4A] leading-[12.71px]">
                    HawalaDEX
                  </span>
                  <span className="font-inter font-medium text-[10.5px] text-[#4A4A4A] leading-[12.71px]">
                    0
                  </span>
                </div>
              </div>
            </div>
          )}
          <button className="mt-6 w-full font-inter font-semibold text-[10.5px] leading-[12.6px] py-1 border border-[#999999] text-[#999999] rounded-[5.6px] hover:bg-[#eeeeee]">
            Disconnect Wallet
          </button>
        </div>
      )}
    </>
  );
}

export default App;
