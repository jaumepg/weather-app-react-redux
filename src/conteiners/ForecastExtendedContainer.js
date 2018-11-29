import React, { Component } from 'react';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
                <ForecastExtended city={city} forecastData={forecastData}/>
        );
    }
}
const mapStateProps = ({city}) => ({city});
export default connect(mapStateProps,null)(ForecastExtendedContainer);