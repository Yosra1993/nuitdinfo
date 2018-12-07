import React from "react";
import { MDBInput } from "mdbreact";
import './Form.css'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter,Input,FormInline } from 'mdbreact';
class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          modal14: false,
          radio: 2
        };
      }
   
      toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      onClick = (nr) => {
        this.setState({
          radio: nr
        });
      }
      render() {
  return (
      <div>
    <Container>
    <Button color="primary" onClick={() => this.toggle(14)} >Questionnaire</Button>
    <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
      <ModalHeader toggle={() => this.toggle(14)}>Questionnaire</ModalHeader>
      <ModalBody>
    <div className="form-group">
     <MDBInput label="Pourqu'elles raisons vous allez sortir Au desert" size="md" />
     <MDBInput label="Si vous avez déjà une maladie, laquelle?" size="md"  />
   
     <p  className="Designation">Vous Allez sortir Seul / En Couple / En excursion ?  </p>
     <div className="d-flex justify-content-around">
        <div className="Check1" >
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
            <label className="form-check-label" for="materialLoginFormRemember">Seul</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
            <label className="form-check-label" for="materialLoginFormRemember">En Couple</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
            <label className="form-check-label" for="materialLoginFormRemember"> En excursion </label>
          </div>
    </div>
    </div>
    <br/>
    <p  className="Designation">Vous avez preparez vos besoin en respectant nos normes ?  </p>

     <div className="d-flex justify-content-around">
        <div className="Check1">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
            <label className="form-check-label" for="materialLoginFormRemember">Oui</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
            <label className="form-check-label" for="materialLoginFormRemember">Non</label>
          </div>
    </div>
    </div>
  
      

    </div>
    </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={() => this.toggle(14)}>Annuler</Button>
            <Button color="success">Valider</Button>
          </ModalFooter>
        </Modal>
      </Container>
      </div>
  );
}
}
export default Form;