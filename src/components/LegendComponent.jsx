import React from "react";

const LegendComponent = ({ legend }) => {
  const legendStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    color: "white",
  };

  const colorBoxStyle = (color) => ({
    width: "20px",
    height: "10px",
    backgroundColor: color,
    marginRight: "8px",
  });

  // Diviser la légende en deux parties
  const topLegends = legend.slice(0, 3); // Les trois premières légendes
  const bottomLegends = legend.slice(3); // Les deux dernières légendes

  return (
    <div className="w-full">
      <ul
        className="flex lg:flex-row flex-col lg:text-left text-center"
        style={{ listStyleType: "none", padding: 0 }}
      >
        {/* Afficher les légendes du haut */}
        {topLegends.map((item, index) => (
          <li className="lg:w-1/3 w-full " key={index} style={legendStyle}>
            <div style={colorBoxStyle(item.fillStyle)}></div>
            <span className="font-roboto">
              {item.percentage}% {item.text}
            </span>
          </li>
        ))}
      </ul>
      <ul
        className="flex lg:flex-row flex-col"
        style={{ listStyleType: "none", padding: 0 }}
      >
        {/* Afficher les légendes du bas */}
        {bottomLegends.map((item, index) => (
          <li className="lg:w-1/3 w-full" key={index} style={legendStyle}>
            <div style={colorBoxStyle(item.fillStyle)}></div>
            <span>
              {item.percentage}% {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegendComponent;
