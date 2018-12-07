import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';
import Materiel from './Button2Collapse';
import Medicaments from './Medicaments'
import    DivBg from '../DivBg/DivBg'
import Conseils from './Conseils'
class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
      collapse1:false,
      collapse2:false,
      collapse3:false,
    };
  }

  toggle=()=> {
    this.setState({ collapse:!this.state.collapse,
    
    collapse1: false,
       //collapse: !this.state.collapse,
       collapse2: false,
      collapse3: false});
  }
  toggle1=() =>{
    this.setState({
      collapse:false,
      collapse1: !this.state.collapse1,
      collapse2: false,
      collapse3:false
     });
  }
  toggle2=() =>{
    this.setState({
      collapse:false,
      collapse1: false,
      collapse3:false,
      collapse2: !this.state.collapse2
     });
  }
  toggle3=() =>{
    this.setState({
      collapse1: false,
      collapse: false,
       collapse2: false,
      collapse3: !this.state.collapse3 });
  }

  render() {
    return (
      <div>
        <div style={{ paddingTop: "105px"
}}>
          <div style={{display:'flex', width:'80%',justifyContent: 'space-around', marginLeft:'10%', marginTop:'5%'}}> 
          <Button color="warning"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Materiels Necessaires</Button>
          <Button color="warning" onClick={this.toggle1} style={{ marginBottom: "1rem" }}>Besoins D'Eau</Button>
          <Button color="warning"  onClick={this.toggle2} style={{ marginBottom: "1rem" }}>Medicaments</Button>
          <Button color="warning" onClick={this.toggle3} style={{ marginBottom: "1rem" }}>Conseil General</Button>
          </div>
          <Collapse isOpen={this.state.collapse} >
          <Materiel/>
          </Collapse>
          <Collapse isOpen={this.state.collapse1 }>
          <DivBg/>
          </Collapse>
          <Collapse isOpen={this.state.collapse2}>
          <Medicaments/>
          </Collapse>
          <Collapse isOpen={this.state.collapse3} >
          <Conseils/>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default Example;