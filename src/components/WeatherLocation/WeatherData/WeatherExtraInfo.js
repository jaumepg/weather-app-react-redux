import React from 'react';
import './style.css';

const WeatherExtraInfo = ({humidity,wind}) =>(
    <div className="weatherExtraInfoCont">
        <span>Humedad: {` ${humidity} %`}</span>
        <span>Viento: {wind}</span>
    </div>
);
export default WeatherExtraInfo;