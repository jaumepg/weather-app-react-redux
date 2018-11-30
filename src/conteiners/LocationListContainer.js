import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {setCity} from './../actions';
import {connect} from 'react-redux';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handledSelectedLocationClick = city =>{
        this.props.setCity(city);
    }

    render() {
        console.log(this.props.cities);
        return (
            <LocationList  cities={this.props.cities} onSelectedLocation={this.handledSelectedLocationClick}></LocationList>
        );
    }
}


const mapDispatchToPropsAction = dispatch =>(
    {
    setCity : value => dispatch(setCity(value))
    }
  );
  
export default connect(null,mapDispatchToPropsAction)(LocationListContainer);