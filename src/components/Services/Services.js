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
      <hr/>
      <h2 className='services-statement'>Wether you are an enthusiast wanting a simple suspension setup for you local track or a pro getting ready for the biggest race of your life, we can get you dialed in.  We can coordinate services from anywhere nation wide. Send us a message and we'll get started!</h2>
      <hr/>
      <Engine/>
      <Suspension/>
      <ECU/>
    </div>
  );
};

export default Services;
