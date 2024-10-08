import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);

  // Data for the chart (replicating green-to-red effect)
  const data = {
    labels: ["9:00 PM", "12:00 AM", "3:00 AM", "6:00 AM", "9:00 AM"],
    datasets: [
      {
        label: "Price",
        data: [63500, 63800, 64000, 63300, 62800, 63000],
        borderColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasContext, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = canvasContext.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );
          gradient.addColorStop(0, "#22C55E"); // Green for increasing
          gradient.addColorStop(0.5, "#22C55E"); // Keep green until midpoint
          gradient.addColorStop(0.5, "#DC2626"); // Red for decreasing
          gradient.addColorStop(1, "#DC2626");

          return gradient;
        },
        backgroundColor: "rgba(220, 38, 38, 0.1)", // Light background fill
        fill: true,
        tension: 0.1, // Curve on the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Arial",
          },
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString(); // Add $ sign and commas
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg relative">
      {/* Title */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 font-semibold">Price</button>
          <button className="text-gray-500 font-semibold">Market Cap</button>
        </div>
        <button className="text-gray-500 font-semibold">Compare with</button>
      </div>

      {/* Chart Container */}
      <div className="relative" style={{ height: "300px" }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>

      {/* Timeframe buttons */}
      <div className="flex justify-end mt-4 space-x-4">
        <button className="text-gray-500 font-semibold">1D</button>
        <button className="text-gray-500 font-semibold">7D</button>
        <button className="text-gray-500 font-semibold">1M</button>
        <button className="text-gray-500 font-semibold">1Y</button>
        <button className="text-gray-500 font-semibold">All</button>
      </div>
    </div>
  );
};

export default LineChart;
