import React from "react";
import "./MidSectionHead.css";
import _image3 from "../assets/3.png";

export const MidSectionHead = () => {
  return (
    <div className="mid-section">
      <div className="mid-section-head-text">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </div>

      <div className="image-container">
        <img src={_image3} alt="No" />
        <p className="para">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>

        <div className="line"></div>
      </div>
    </div>
  );
};
