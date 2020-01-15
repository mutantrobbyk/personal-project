import React, { useState, useEffect } from "react";
import "./Services.css";
import Engine from '../Engine/Engine'
import Suspension from '../Suspension/Suspension'
import ECU from '../ECU/ECU'

const Services = () => {
  const hide = () => {
    const drop = document.getElementById("dropdown");
    if (!drop.classList.contains("hide")) {
      drop.classList.add("hide");
    }
  };
  return (
    <div onClick={hide} className="services-room">
      <div className="Suspension">
        <div className="todd-pic" />
        <h1>SERVICES.</h1>
      </div>
      <Engine/>
      <Suspension/>
      <ECU/>
    </div>
  );
};

export default Services;
