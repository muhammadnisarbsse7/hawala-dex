import React from "react";
import { TelegramIcon } from "../SVG/SocialLinks/TelegramIcon";
import { TwitterIcon } from "../SVG/SocialLinks/TwitterIcon";
import { DiscordIcon } from "../SVG/SocialLinks/DiscordIcon";
import { MediumIcon } from "../SVG/SocialLinks/MediumIcon";

const Footer = () => {
  return (
    <main>
      <div className="h-full w-full bg-white drop-shadow-2xl ">
        <div className="flex flex-wrap justify-center  sm:justify-between items-center border-b-2 py-7 mx-5 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 gap-4">
          <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10">
            <p className="font-inter font-medium text-[12px] sm:text-[14px] lg:text-[16px] text-[#494949] leading-7">
              WhitePaper
            </p>
            <p className="font-inter font-medium text-[12px] sm:text-[14px] lg:text-[16px] text-[#494949] leading-7">
              Terms And Condition
            </p>
            <p className="font-inter font-medium text-[12px] sm:text-[14px] lg:text-[16px] text-[#494949] leading-7">
              FAQ
            </p>
          </div>

          <div className="flex gap-5 sm:gap-7 md:gap-9 lg:gap-10 items-center">
            <a
              href="https://t.me/HawalaDEX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="w-4 sm:w-5 md:w-6 lg:w-7" />
            </a>
            <a
              href="https://x.com/hawaladex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="w-4 sm:w-5 md:w-6 lg:w-7" />
            </a>
            <a
              href="https://discord.gg/RDPEuE6X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon className="w-4 sm:w-5 md:w-6 lg:w-7" />
            </a>
            <a
              href="https://medium.com/@Hawaladex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon className="w-4 sm:w-5 md:w-6 lg:w-7" />
            </a>
          </div>
        </div>

        <div className="flex justify-center py-3  font-inter font-medium text-[12px] text-[#494949] leading-[14.52px] gap-1 ">
          Copyright{" "}
          <span className="font-inter font-medium text-[12px] leading-[14.52px] text-[#FF3389]">
            {" "}
            @HawalaDEX20245
          </span>
        </div>
      </div>
    </main>
  );
};

export default Footer;
