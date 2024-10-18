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
      className="min-h-screen bg-cover bg-center bg-no-repeat border-t-2 border-white dark:border-[#0D1421]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Mobile layout */}
      <div className="grid lg:hidden  gap-7 my-28">
        {/* Swap Card - Displayed first on mobile */}

        {/* Bitcoin Data - Displayed second on mobile */}
        {/* <div className="grid min-h-[450px]">
          <BitcoinCard {...bitcoinData} />
        </div> */}

        <div className="grid min-h-[450px]">
          <SwapCard />
        </div>

        {/* Price Chart - Displayed last on mobile */}
        {/* <div className="grid min-h-[450px]">
          <ApexLineCharts />
        </div> */}
      </div>

      {/* Larger screen layout (unchanged from original) */}
      <div className="hidden lg:grid lg:grid-cols-11 lg:gap-7 my-28">
        <div className="grid lg:col-span-3 min-h-[450px]">
          {/* <BitcoinCard {...bitcoinData} /> */}
        </div>
        <div className="grid lg:col-span-5 min-h-[450px]">
          <SwapCard />
        </div>
        <div className="grid lg:col-span-3 min-h-[450px]">
          {/* <ApexLineCharts /> */}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
