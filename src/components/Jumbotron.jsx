import React, { Component } from 'react';
import './Jumbotron.css';
import {Animated} from "react-animated-css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid ">
        <div className="container ">
          <Animated className="col-md-6" animationIn="slideInLeft" isVisible={true}>
            <p className="display-4">{this.props.title}</p>
            <p className="lead">{this.props.subtitle}</p>
            <div className="home_btns">
              <button className="myButton_red" type="button">View  more</button>
              
              <button className="myButton_white" type="button">Download app</button>
            </div>
          </Animated>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
