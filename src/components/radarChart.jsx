import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = () => {
  const data = {
    labels: [
      "HTML",
      "css",
      "js",
      "Typescript",
      "Next",
      "React",
      "tailwind",
      "Restapis",
      "Github",
      "prettier",
      "MaterialUI",
      "ShadcnUI",
      "figma",
    ],
    datasets: [
      {
        label: "Skill Proficiency (100%)",
        // Ensure values don't exceed 100 and number of data points matches labels (13)
        data: [80, 100, 90, 100, 100, 100, 70, 200, 100, 100, 60, 90, 100],
        backgroundColor: "rgba(128, 255, 210, 0.3)",
        borderColor: "#80ffd2",
        borderWidth: 2,
        pointBackgroundColor: "#80ffd2",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#80ffd2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: "rgba(128, 255, 210, 0.2)", // Color of angle lines
        },
        grid: {
          color: "rgba(128, 255, 210, 0.2)", // Color of grid lines
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: "#80ffd2",
        },
        ticks: {
          beginAtZero: true,
          color: "#666", // Tick mark color
          stepSize: 20, // Increment for tick values
          min: 0,
          max: 100, // Fix the radial scale to 0-100 so changing one value doesn't rescale the chart
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#80ffd2",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      className="flex justify-center mt-5 h-full bg-cover"
      style={{ width: "100%", height: "100%" }}
    >
      <Radar className="md:w-radarWidth" data={data} options={options} />
    </div>
  );
};
