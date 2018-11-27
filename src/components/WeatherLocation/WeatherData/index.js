import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';

import './style.css';


const WeatherData = ({data : {temperatura,weatherState,humidity,wind}}) =>{
    return <div className="weatherDataCont">
        <WeatherTemperature tempeture={temperatura} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>;
};

WeatherData.prototype={
    data:PropTypes.shape({
        tempeture : PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    })
};
export default WeatherData;