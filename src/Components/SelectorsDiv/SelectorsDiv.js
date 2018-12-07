import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SelectorsDiv.css'

  


class SelectorsDiv extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      height:1.50,
      weight:60,
      age: 20,
      gender:'',
      duration: 5,
      distance: 10,
      qtt:null
     }
  }
  weightchange=(value)=>{
    this.setState({weight: value});
  }
  agechange=(value)=>{
    this.setState({age: value});
  }
  heightchange=(value)=>{
    this.setState({height: value});
  }
  male=()=>{
    this.setState({gender: 'male'})
  }
  female=()=>{
    this.setState({gender: 'female'});
  }
  distchange=(value)=>{
    this.setState({distance: value});
  }
  durchange=(value)=>{
    this.setState({duration: value});
  }
  calculate=()=>{    
    let ge=0;
    if (this.state.gender=='male'){ge=200;}
    let qtt=Math.ceil(((((this.state.distance*this.state.duration)/10)*this.state.weight)+ge)/1000);
    this.setState({qtt:"Vous devez prendre avec vous "+qtt+" litres d'eau"})
    //console.log(qtt);
  }

  render() { 
    return ( 
      <div className='container'>
        <h1 className='qtt'>{this.state.qtt}</h1>
        <h1 className='containerHead'>Donnez-nous quelques informations</h1>
        <hr/>
        <div className='above'>
          <div className='ablft'>
            <h3>Gender</h3>
            <div className='male'>
              <img src='https://www.freeiconspng.com/uploads/account-boy-human-male-man-person-profile-icon--icon-search--13.png' onClick={this.male} style={{borderColor:(this.state.gender=='male')?'green':'white'}}/>
            </div>
            <div className='female'>
              <img src='https://cdn1.iconfinder.com/data/icons/amenities/500/woman-512.png'onClick={this.female} style={{borderColor:(this.state.gender=='female')?'green':'white'}}/>
            </div>
          </div>
          <div className='abrgt'>
            <h3>Hauteur: {this.state.height} m</h3>
            <Slider
            min={1.50}
            max={2.3}
        defaultValue={1.75}
        step={0.01}
        onChange={this.heightchange}
        trackStyle={{ backgroundColor: 'yellow', height: 7 }}
        handleStyle={{
          borderColor: 'yellow',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'pink',
        }}
        railStyle={{ backgroundColor: 'darkorange', height: 7 }}
      />
          </div>
        </div>
        <div className='bottom'>
        <div className='botlft'>
            <h3>Poids: {this.state.weight}</h3>
            <Slider
        defaultValue={50}
        onChange={this.weightchange}
        trackStyle={{ backgroundColor: 'blue', height: 7 }}
        handleStyle={{
          borderColor: 'blue',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'black',
        }}
        railStyle={{ backgroundColor: 'red', height: 7}}
      />
      <h3>Durée: {this.state.duration} heures</h3>
      <Slider
            min={1}
        defaultValue={5}
        onChange={this.durchange}
        trackStyle={{ backgroundColor: 'yellow', height: 7 }}
        handleStyle={{
          borderColor: 'yellow',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'pink',
        }}
        railStyle={{ backgroundColor: 'darkorange', height: 7 }}
      />
          </div>
          <div className='botrgt'>
            <h3>Age: {this.state.age}</h3>
            <Slider
        defaultValue={20}
        onChange={this.agechange}
        trackStyle={{ backgroundColor: 'green', height: 7 }}
        handleStyle={{
          borderColor: 'green',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'black',
        }}
        railStyle={{ backgroundColor: 'purple', height: 7 }}
      />
      <h3>Distance: {this.state.distance} km</h3>
      <Slider
            min={1}
        defaultValue={10}
        onChange={this.distchange}
        trackStyle={{ backgroundColor: 'yellow', height: 7 }}
        handleStyle={{
          borderColor: 'yellow',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'pink',
        }}
        railStyle={{ backgroundColor: 'darkorange', height: 7 }}
      />
          </div>
        </div>
        <button className='submit' onClick={this.calculate}>Calculer</button>
        
      </div>
     );
  }
}
 
export default SelectorsDiv;