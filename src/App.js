import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid , Row , Col} from 'react-flexbox-grid';
import './App.css';
import LocationListContainer from './conteiners/LocationListContainer';
import ForecastExtenden from './components/ForecastExtended';
import {store} from './store';
import {connect} from 'react-redux';


const cities = [
  'Barcelona,es',
  'Tremp,es',
  'Washington,us',
  'Paris,fr',
];



class App extends Component {

  constructor(){
    super();
    this.state = {city : null};
  }

  render() {
    return (
      <Grid>
        <Row >
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row >
          <Col xs={12} md={6} className="locations">
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
              { this.state.city ?
                <ForecastExtenden city={this.state.city}></ForecastExtenden>
                : ''}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid> 
    );
  }
}

export default App;