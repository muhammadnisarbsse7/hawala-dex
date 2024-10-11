import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="h-full w-full bg-white drop-shadow-2xl ">
        <div className="lg:flex lg:flex-row flex border-b-2 gap-4 flex-wrap justify-between sm:justify-between md:justify-between lg:justify-between py-7 mx-5 md:mx-40 lg:mx-80">
          <div className="flex flex-col border ">
            <h1 className="font-inter font-bold text-[14px] text-[#494949] leading-7 ">
              Legal Docs
            </h1>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              WhitePaper
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Tokenomics
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              RoadMap
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Privacy Document
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Terms And Condition
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-inter font-bold text-[14px] text-[#494949] leading-7">
              Useful Links{" "}
            </h1>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              CMC
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Uniswap
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              FAQ
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="font-inter font-bold text-[14px] text-[#494949] leading-7">
              Contact Us
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              info@HawalaDEX.com
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Telegram{" "}
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              X/Twitter
            </p>
            <p className="font-inter font-medium text-[14px] text-[#494949] leading-7">
              Discord
            </p>
          </div>
        </div>
        <div className="flex justify-center py-3  font-inter font-medium text-[12px] text-[#494949] leading-[14.52px] gap-1 ">
          Copyright{" "}
          <span className="font-inter font-medium text-[12px] leading-[14.52px] text-[#FF3389]">
            {" "}
            @HawalaDEX2024
          </span>
        </div>
      </div>
    </main>
  );
};

export default Footer;
