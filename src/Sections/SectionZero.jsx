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
        DEVELOPER <br /> FOR <span className="no-span headline-blue" >WEB</span> <br />EXPERIENCES
      </h1>
    </section>
  );
};