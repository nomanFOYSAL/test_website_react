import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Row,Col } from 'react-bootstrap';

import {Animated} from "react-animated-css";

import imageName1 from '../images/screen01.png';
import imageName2 from '../images/screen02.png';
import imageName3 from '../images/SL2.png';
import imageName4 from '../images/SL3.png';
import imageName5 from '../images/SL4.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Awesome apps for your modern lifestyle" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <div className="container">
         
        </div>
        
        <footer className="App-footer">
             <p id="bigText"> Introducing with Peep The Place</p>
             <p id="smallText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <Row className="show-grid">
                  <Col md={6} md={4}>
                    <div className="card">
                        <p id="bigText">Easy to use</p> 
                        <p id="smallText_card">Lorem ipsum dolor sit amet, at nec sanctus delicatissimi. Sed no praesent iudicabit euripidis</p> 
                    </div>
                  </Col>
                  <Col md={6} md={4}>
                    <div className="card">
                        <p id="bigText">Awesome Interface</p> 
                        <p id="smallText_card">Lorem ipsum dolor sit amet, at nec sanctus delicatissimi. Sed no praesent iudicabit euripidis</p> 
                    </div>
                  </Col>
                  <Col md={6} md={4}>
                    <div className="card">
                        <p id="bigText">Great Support</p> 
                        <p id="smallText_card">Lorem ipsum dolor sit amet, at nec sanctus delicatissimi. Sed no praesent iudicabit euripidis</p> 
                    </div>
                  </Col>
             </Row>
          </footer>
          <footer className="App-footer1">
                <Row className="show-grid">
                <Col md={6} mdPush={6}>
                  <img src={imageName1} />
                </Col>
                <Col md={6} mdPull={6}>
                  <Animated className="col-md-6" animationIn="slideInRight" isVisible={true}>
                    <img src={imageName3} />
                    <div className="home_btns">
                      <button className="myButton_red" type="button">Details</button>
                    </div>
                  </Animated>
                </Col>
                <Col md={6} mdPush={6}>
                  <Animated className="col-md-6" animationIn="slideInLeft" isVisible={true}>
                    <img src={imageName4} />
                    <div className="home_btns">
                      <button className="myButton_green" type="button">My place</button>
                      <button className="myButton_white" type="button">Open place</button>
                      <button className="myButton_white" type="button">Events</button>
                    </div>
                    <img src={imageName5} />
                  </Animated>
                </Col>
                <Col md={6} mdPull={6}>
                  <img src={imageName2} />
                </Col>
              </Row>
             
          </footer>
      </div>
    );
  }
}

export default Home
