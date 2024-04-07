import React, { useEffect, useState } from "react";

export const SectionZero = () => {

  return (
    <section className="intro">
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/logo.png" alt="Small Logo" />
          </div>
          <div class="center">
              <h1>RAINER AHI</h1>
          </div>
      </div>
      <h1 className="title">
        <span className="exp">DEV</span>ELOPER <br /> FOR WEB <br />
        <span className="exp">EXPERIENCES</span>
      </h1>
    </section>
  );
};