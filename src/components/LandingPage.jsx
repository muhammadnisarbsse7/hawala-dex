import React from "react";
import BitcoinCard from "./BitCoinCard";
import SwapCard from "./SwapBtc";
import LineChart from "./MarketCapGraph";
import ApexLineCharts from "./ChartOne";
import SparklineChart from "./ChartTwo";
import BgImage from "../assets/BgImage.png";

const LandingPage = () => {
  const bitcoinData = {
    price: 61988.4,
    priceChange: -2.3,
    marketCap: 1225937901567,
    volume24h: 44723413616,
    volumeChange: 27.06,
    circulatingSupply: 19761509,
    totalSupply: 19761509,
    maxSupply: 21000000,
    fullyDilutedMarketCap: 1302769739543,
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center  bg-no-repeat border-t-2 border-white dark:border-[#00000040] "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="grid lg:grid-cols-10  lg:gap-7 my-28 ">
        <div className="grid lg:col-span-3  min-h-[450px] ">
          <BitcoinCard {...bitcoinData} />
        </div>
        <div className="grid lg:col-span-3 min-h-[450px]">
          <SwapCard />
        </div>
        <div className="grid lg:col-span-4  min-h-[450px]">
          {/* <LineChart /> */}
          {/* <SparklineChart />/ */}
          <ApexLineCharts />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
