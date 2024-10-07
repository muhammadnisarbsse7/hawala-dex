import React from "react";
import BitcoinCard from "./BitCoinCard";

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
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/asset/BgImage.png')" }}
    >
      <div className="grid lg:grid-cols-10 bg-black lg:gap-7 my-28 ">
        <div className="grid lg:col-span-3 bg-red-800 min-h-[450px] ">
          <BitcoinCard {...bitcoinData} />
        </div>
        <div className="grid lg:col-span-4 bg-green-900 min-h-[450px]">
          Graph
        </div>
        <div className="grid lg:col-span-3 bg-yellow-700 min-h-[450px]">
          Swap
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
