import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {SaturationSlider, LightnessSlider } from "./Sliders";
import Routes from './Routes'
import Navbartop from './navbar'
import FooterPage from './footer'

import './App.css';

class App extends Component {
  state = {
    h: 340,
    s: 80,
    l: 80,
    a: 100
  };
  
  handleSaturation = value => {
    this.setState({
      s: value,
    });
  };

  handleLightness = value => {
    this.setState({
      l: value,
      linve:100-value
    });
  };
  render() {
    const {s,l,a,linve}=this.state 

    return (
      <div className="App" style={{ paddingTop: "105px"}}>
      <BrowserRouter>
        <div>
        <Navbartop s={s} l={l} a={a} linve={linve}/>
        <SaturationSlider
          {...this.state}
          config={{ start: 0, end: 100, value: this.state.s }}
          handleChange={this.handleSaturation}
        />
        <LightnessSlider
          {...this.state}
          config={{ start: 0, end: 100, value: this.state.l }}
          handleChange={this.handleLightness}
        />
        <Routes s={s} l={l} a={a} linve={linve}/>
        <FooterPage/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
