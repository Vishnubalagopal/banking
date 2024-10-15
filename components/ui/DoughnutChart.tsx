"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        backgroundColor: ["#0179FE", "#4893FF", "#85B7FF"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Doughnut
        data={data}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};

export default DoughnutChart;
