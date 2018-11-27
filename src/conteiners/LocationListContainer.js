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
        return (
            <LocationList  cities={this.props.cities} onSelectedLocation={this.handledSelectedLocationClick}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities:PropTypes.isArray
}


const mapDispatchToPropsAction = dispatch =>(
    {
    setCity : value => dispatch(setCity(value))
    }
  );
  
export default connect(null,mapDispatchToPropsAction)(LocationListContainer);