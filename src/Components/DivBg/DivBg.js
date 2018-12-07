import React, { Component } from 'react';
import SelectorsDiv from '../SelectorsDiv/SelectorsDiv'
import './DivBg.css'
class DivBg extends Component {

  render() { 
    return (
      <div className='DivBg'>
        <div className='Divleft'>
          <div className='img'>
            <img id="raindrop" src="https://www.camelbak.com/designs/camelbak/HydratED/HydrationCalculator/img/img_drop.png"/>
          </div>
          <h1 className='divbgtitle'>Quelle est la quantité d'eau que vous devez boire?</h1>
          <h3 className='divbgsmall'>Determinez combien d'eau est necessaire pour votre parcours</h3>
        </div>
        <SelectorsDiv/>
      </div>
      );
  }
}
 
export default DivBg;