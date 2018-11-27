import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

//import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data : null,
        };
    }

    //Fa despres de cargar tot, s'hauria de fer les peticions post i posar un loading
    componentDidMount(){
        this.handleUpClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }
    
    handleUpClick =() =>{
       fetch(getUrlWeatherByCity(this.state.city)).then(resolve =>{
            
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            this.setState ({
                data : newWeather,
            });
        });

    }

    render(){
        const {onWeatherLocationClick} = this.props;
        const {city,data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                
                {data ?  
                
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }
    
}



export default WeatherLocation;