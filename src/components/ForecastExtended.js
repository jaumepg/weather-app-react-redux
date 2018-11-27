import React, { Component } from 'react';
import Forecastitem from './Forecastitem';
import {url_base_forecast, api_key} from './../constants/api_url';
import transformForecast from './../services/transformForecast';


class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData: null}
    }
    //solo una vez el ciclo de vida
    componentDidMount(){
        this.updateCity(this.props.city);
    }
    //cada vez que haya una actualizacion
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(this.props.city);
        }
    }

    updateCity = city =>{
        const url_forecast = url_base_forecast+'?q='+city+"&appid="+api_key;
        fetch(url_forecast).then(resolve =>{
            
            return resolve.json();
        }).then(
            weather_data => {
                const forecastData =   transformForecast(weather_data);
                this.setState({forecastData : forecastData })
            }
        );
    }
    renderForecastItemDays(forecastData){
        return forecastData.map(forecast=> ( 
            <Forecastitem key={forecast.weekDay+''+forecast.hour} weekday={forecast.weekDay} hour={forecast.hour} data={forecast.data}></Forecastitem>
        ));
    }

    renderProfress(){
        return ('Cargando');
    }

    render(){
        const forecastData = this.state.forecastData;
        const {city} = this.props;
        return (
        <div>
            <h2 className="forecast_title">Pronostico de la ciudad de: {city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProfress()}
        </div>
        );
    }
}

export default ForecastExtended;