import React, { Component } from 'react';
import Header from './header'
import {MDBIcon} from 'mdbreact';
import Galeries from './Galerie'



// import Header from './Header';
// import Galeries from './About-us';


class Home extends Component {
  render() {
    return (
    
      <div className="home">
 
         <Header/> 
         <div className='proverbe'>
             <h3><MDBIcon icon="quote-left" /> Le difficile dans le désert, c’est de trouver la sortie<MDBIcon icon="quote-right" /></h3>
             <h4>Philippe Alexandre.</h4>
         </div>
        <Galeries/>
        
         
      </div>
    
     
     
    );
  }
}



export default Home
