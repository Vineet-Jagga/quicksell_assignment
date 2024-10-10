import React from "react";
import "./Loading.css";

const Loading = ({
  size = 80,
  color = "#3498db",
  text = "Please wait...",
  showLoader = true,
  loaderSize = 100,
  loaderColor = "#3498db",
  textColor = "#2c3e50",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}>
      {showLoader && (
        <div
          className="ring-loader"
          style={{
            width: `${loaderSize}px`,
            height: `${loaderSize}px`,
            border: `8px solid rgba(0, 0, 0, 0.1)`,
            borderTopColor: loaderColor,
          }}></div>
      )}
      <span
        style={{
          fontSize: `${size}px`,
          color: textColor,
          fontWeight: "bold",
          letterSpacing: "1px",
          ...textStyle,
        }}>
        {text}
      </span>
    </div>
  );
};

export default Loading;
