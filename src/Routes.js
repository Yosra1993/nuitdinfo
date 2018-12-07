import React from 'react';
import {Route} from 'react-router-dom'
import Home from './home'
import GoogleApiWrapper from './GoogleMap'
import Example from './Components/Collapses/Button1Collapse'

const Routes = ({s,l,a,linve}) => {
    
    return (
        <div>
            <Route exact path="/" component={Home}/>
             <Route exact path="/votre-localisation" component={GoogleApiWrapper}/>
            <Route exact path="/conseil" component={Example}/>
            {/*<Route exact path="/Salle-De-Sport/:NomSalledeSport" */}
          
        </div>
    );
};

export default Routes;