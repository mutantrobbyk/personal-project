import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./Services.css";
import Engine from "../Engine/Engine";
import Suspension from "../Suspension/Suspension";
import ECU from "../ECU/ECU";

const Services = () => {
  const [serviceHeadline, getServiceHeadline] = useState('')
  useEffect(() => {
    axios.get('/api/services/headline').then(result => {
      console.log(result)
      getServiceHeadline(result.data[0].headline);
    });
  }, []);
  return (
    <div className="services-room">
      <div className="Suspension">
        <div className="todd-pic" />
        <h1>SERVICES.</h1>
      </div>
      <hr />
      <h2 className="services-statement">
        {serviceHeadline}
      </h2>
      <hr />

      {/* <Engine />
      <Suspension />
      <ECU /> */}
    </div>
  );
};

export default Services;
