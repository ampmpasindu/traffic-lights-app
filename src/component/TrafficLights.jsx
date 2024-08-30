import React from 'react';
import './TrafficLights.css';

const TrafficLights = ({ color }) => {
  
  let redLight;
  let orangeLight;
  let greenLight;

  if ( color.red ) {
    redLight = "#c12525";
  }

  if ( color.orange  ) {
    orangeLight = "#f58300";
  }

  if ( color.green ) {
    greenLight = "#31a72f";
  }

  return (
    <>
      <div id='TrafficLights_Body'>
        <div className='TrafficLights_Lights' style={{ backgroundColor: redLight }}></div>
        <div className='TrafficLights_Lights' style={{ backgroundColor: orangeLight }}></div>
        <div className='TrafficLights_Lights' style={{ backgroundColor: greenLight }}></div>
      </div>
    </>
  )
}

export default TrafficLights
