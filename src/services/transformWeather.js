
import converts from 'convert-units';

import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from '../constants/weather';

const getTemp = kelvin =>{
    return Number(converts(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState =  weather => {
    const {id} = weather;
    if(id<300){
        return THUNDER;
    }else if (id<400){
        return DRIZZLE;
    }else if(id < 600){
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id < 500){
        return SUN;
    }else{
        return CLOUD;
    }
}

const transformWeather  =  weather_data =>{

    const {humidity,temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    
    const data = {
        temperatura: getTemp(temp),
        weatherState,
        humidity,
        wind: speed +' m/s'
    }

    return data;
}

export default transformWeather;