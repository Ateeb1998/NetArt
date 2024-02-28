import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <span>
          <i class="fa-solid fa-phone round logo"></i>
        </span>
        <span>Toll free <span className="bold">1800 200 1234</span></span>
      </div>
      <div className="footer-links">
        <i class="fa-brands fa-facebook logo"></i>www.facebook.com/cripumps
      </div>
      <div className="footer-links">
        <i class="fa-solid fa-globe logo"></i>www.crigroups.com
      </div>
    </div>
  );
};
