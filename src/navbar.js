import React, { Component } from 'react';
import {HashRouter } from 'react-router-dom'
import { MDBInput } from "mdbreact";
import {Link, Redirect} from 'react-router-dom'
import {Container,Input, Fa ,Button, Modal, ModalBody, ModalHeader, ModalFooter,  Row, Col } from 'mdbreact';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
    } from 'reactstrap';





class Navbartop extends Component {
    
    constructor(props) {
        super(props);
    
        
        this.state = {
        modal: false,
        modal2:false,
        isOpen: false,
        fname: '',
        lname: '',
        tel: '',
        depart: '',
        arrive: '',
        modal14: false,
          radio: 2
        };
        this.togglelogin = this.togglelogin.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      togglenour(nr) {
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

      submitHandler = (event) => {
        event.preventDefault();
      }
      secondemodel=()=>
      {
        if(this.submitHandler)
        {
            this.setState({
                modal2: !this.state.modal2,
                modal: false,

              });
        }}

      changeHandler = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
      }
      onChange = e => {
        this.setState ({
          [e.target.name] : e.target.value
        })
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      togglelogin() {
        this.setState({
          modal: !this.state.modal
        });
      }
      togglelogin2() {
        this.setState({
          modal2: !this.state.modal2
        });
      }
      
      render() {
        return (
         
          <div>
            <Navbar color="light" fixed={`top`} light expand="md">
              <NavbarBrand href="/"><img className='logo' src="https://i1.wp.com/easylifesolutions.cm/wp-content/uploads/2018/08/logo-Easy-life-Web.png?fit=410%2C250"/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                   <Link to='/'> <NavLink  href="#" onClick={this.togglelogin} >Log in</NavLink></Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/conseil"><NavLink >Conseils</NavLink></Link>
                  </NavItem>
                  <NavItem>
                  <Link to='/votre-localisation'> <NavLink >Votre Localisation</NavLink></Link>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
            <Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} onClick={this.togglelogin}>Modal title</ModalHeader>
          <ModalBody>
          <Row className="mt-6">
              <Col md="">
                <form onSubmit={this.submitHandler}>
                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">First name</label>
                    <input className='information' style={{width: '300%' }}  value={this.state.fname} name='fname' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="First name" required/>
                  </div>
                  </Row>
                  <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">Last name</label>
                    <input className='information' style={{width: '300%' }}  value={this.state.lname} name='lname' onChange={this.changeHandler} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Last name" required/>
                  </div>
                  
                </Row>
                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Telephone</label>
                    <input className='information' style={{width: '300%' }}  value={this.state.city} onChange={this.changeHandler} type="numero" id="defaultFormRegisterPasswordEx4" className="form-control" name='city' placeholder="City" required/>
                  </div>
                  </Row>
                  <Row>
                  <div className="col-md-4 mb-3 date">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Depare</label>
                    <input value={this.state.state} style={{width: '120%' }} onChange={this.changeHandler} type="date" id="defaultFormRegisterPasswordEx4" className="form-control" name='state' placeholder="State" required/>
                  </div>
                  <div className="col-md-4 mb-3 date">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Arrive</label>
                    <input value={this.state.zip} style={{width: "120%" }} onChange={this.changeHandler} type="date" id="defaultFormRegisterPasswordEx4" className="form-control" name='zip' placeholder="Zip" required/>
                  </div>
                </Row>
                <button className="btn btn-unique" type="submit" onClick={this.secondemodel}>Submit Form</button>
                </form>
              </Col>
            </Row>
          </ModalBody>
          
        </Modal>
      </Container>
      <Modal isOpen={this.state.modal2} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} onClick={this.togglelogin2}>Modal title</ModalHeader>
          <ModalBody>

              <Container>
    <Button color="primary" onClick={() => this.togglenour(14)} >Questionnaire</Button>
    <Modal style={{    height: "627PX"
}} isOpen={this.state.modal14} togglenour={() => this.togglenour(14)} centered>
      <ModalHeader togglenour={() => this.togglenour(14)}>Questionnaire</ModalHeader>
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
          </ModalBody>
          
          </Modal>
            </div>
        );
      }

  }
  class Navbar1 extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( <div>
        jfldjif
      </div> );
    }
  }
   
 
  export default Navbartop