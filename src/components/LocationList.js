import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropType from 'prop-types';


const LocationList = ({cities,onSelectedLocation}) =>{
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map((city,index) => 
        (
            <WeatherLocation 
            onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
            city={city} 
            key={city}>
            </WeatherLocation>
        ))
    );
    return(<div>
        {strToComponents(cities)}
    </div>);
};
LocationList.PropTypes = {
    cities : PropType.array.isRequired,
    onSelectedLocation: PropType.func,
}
export default LocationList;