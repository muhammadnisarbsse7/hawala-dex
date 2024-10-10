import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { LineChartIcon } from "../SVG/LineChartIcon";
import { MarketCapIcon } from "../SVG/MarketCapIcon";

const ApexLineCharts = () => {
  const [series] = useState([
    {
      name: "Price",
      data: [
        { x: new Date("2024-10-01T21:00:00").getTime(), y: 62500 },
        { x: new Date("2024-10-02T00:00:00").getTime(), y: 64000 },
        { x: new Date("2024-10-02T03:00:00").getTime(), y: 63500 },
        { x: new Date("2024-10-02T06:00:00").getTime(), y: 63000 },
        { x: new Date("2024-10-02T09:00:00").getTime(), y: 62800 },
        { x: new Date("2024-10-02T12:00:00").getTime(), y: 63700 },
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#22C55E"], // Start with green
    fill: {
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#B8EFDA",
            opacity: 1,
          },
          {
            offset: 50,
            color: "#B8EFDA",
            opacity: 0.7,
          },
          {
            offset: 50,
            color: "#F5D4D4",
            opacity: 0.7,
          },
          {
            offset: 100,
            color: "#F5D4D4",
            opacity: 1,
          },
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#16C784", "#DC2626"], // Green to red
    },
    markers: {
      size: 0, // Hides the markers (points)
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "HH:mm",
      },
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy HH:mm",
      },
    },
  });

  return (
    <div className="w-full mx-auto bg-white shadow-lg p-6 rounded-lg ">
      {/* Title */}
      <div className="flex justify-between mb-4">
        {/* <div className="flex items-center space-x-4 py-1.5 border bg-[#EFF2F5] rounded-[8px] px-2">
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[24px] bg-white rounded-[6px] px-1">
            Price
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-6  ">
            Market Cap
          </button>
        </div> */}
        <div className="flex items-center space-x-4 py-1.5 border bg-[#EFF2F5] rounded-[8px] px-2">
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[24px] bg-white rounded-[6px] px-1">
            <LineChartIcon />
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-6  ">
            <MarketCapIcon />
          </button>
        </div>
        <button className="font-inter font-medium text-[12px] text-[#616E85]  leading-[14.52px] bg-[#EFF2F5] px-10 rounded-lg">
          Compare with the
        </button>
      </div>
      {/* Timeframe buttons */}
      <div className="flex justify-end mt-4 space-x-4">
        {/* <div className="flex items-center space-x-4 py-1.5 border bg-[#EFF2F5] rounded-[8px] px-2">
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[24px] bg-white rounded-[6px] px-1">
            <LineChartIcon />
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-6  ">
            <MarketCapIcon />
          </button>
        </div> */}
        <div className="bg-[#EFF2F5] px-2 rounded-lg space-x-3 py-1">
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px] bg-white p-1.5 rounded-lg">
            1D
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
            7D
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
            1M
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
            1Y
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
            All
          </button>
          <button className="font-inter font-medium text-[12px] text-[#616E85] leading-[18px]">
            Log
          </button>
        </div>
      </div>

      {/* ApexCharts Graph */}
      <div
        id="chart"
        className="apexcharts-canvas apexchartsarea-datetime apexcharts-theme-light mt-4"
      >
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexLineCharts;
