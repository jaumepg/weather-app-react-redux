import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../../../constants/weather';

const icons = {
    [SUN]:"cloud",
    [CLOUD]:"cloudy",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    const sizeicon = "4x";
    if(icon){
        return <WeatherIcons name={icon} size={sizeicon}></WeatherIcons>
    }else{
        return <WeatherIcons name="day-sunny" size={sizeicon}></WeatherIcons>
    }
}

const WeatherTemperature = ({tempeture , weatherState}) =>(
    <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{tempeture}</span>
        <span className="temperatureType"> ºC</span>
    </div>
);

WeatherTemperature.propTypes = {
    tempeture : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired,
}
export default WeatherTemperature;