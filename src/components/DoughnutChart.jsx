import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import logo from "../assets/earth_Guardian_bg_w.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ setLegend }) => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      ` plantation arbres`,
      ` programme de propreté`,
      ` aider les personnes`,
      ` sécurité des animaux`,
      ` nourrir les pauvres`,
    ],
    datasets: [
      {
        label: "%",
        data: [40, 35, 10, 10, 5],
        backgroundColor: [
          "rgb(243,143,191)",
          "rgb(190,243,192)",
          "rgb(172,148,241)",
          "rgb(255,240,202)",
          "rgb(249,207,100)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const plugins = [
    {
      id: "center-image",
      afterDraw: (chart) => {
        const {
          ctx,
          chartArea: { width, height },
        } = chart;
        const image = new Image();
        image.src = logo;

        image.onload = function () {
          const size = 70; // Taille de l'image augmentée
          const centerX =
            chart.chartArea.left +
            (chart.chartArea.right - chart.chartArea.left) / 2;
          let centerY =
            chart.chartArea.top +
            (chart.chartArea.bottom - chart.chartArea.top) / 2;
          const yOffset = 5; // Déplacer l'image vers le bas
          centerY += yOffset;
          ctx.drawImage(
            image,
            centerX - size / 2,
            centerY - size / 2,
            size,
            size
          );
        };
      },
    },
  ];

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const legendData = chart.data.labels.map((label, index) => ({
        text: label,
        fillStyle: chart.data.datasets[0].backgroundColor[index],
        percentage: chart.data.datasets[0].data[index],
      }));
      setLegend(legendData);
    }
  }, [setLegend]);

  return (
    <div className="">
      <Doughnut
        data={data}
        ref={chartRef}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false, // Masquer la légende par défaut
            },
          },
        }}
        plugins={plugins}
      />
    </div>
  );
};

export default DoughnutChart;
