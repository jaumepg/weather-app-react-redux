import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem = ({weekday,hour,data}) => {
    return(
    <div className="pt-15">
        <div>{weekday} {hour}h</div>
        <WeatherData data={data}></WeatherData>
    </div>)
}

export default ForecastItem;