import React from "react";
import ReactApexChart from "react-apexcharts";

const SparklineChart = () => {
  const series = [
    {
      data: [63500, 63800, 64000, 63300, 62800, 63000, 63500, 63100, 63900],
    },
  ];

  const options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true, // This makes it a sparkline
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.2,
      },
    },
    colors: ["#FF3366"], // Customize color for sparkline
    tooltip: {
      enabled: true,
      followCursor: true,
      x: {
        show: false,
      },
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg p-4 rounded-lg">
      <div className="text-center mb-2 text-lg font-semibold text-gray-600">
        Sparkline Chart
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={80}
      />
    </div>
  );
};

export default SparklineChart;
