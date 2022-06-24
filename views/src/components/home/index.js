import React, { Component } from "react";
import axios from 'axios';
import './index.css';


import Image from "./section/frame";  


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: {},
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/')
      .then(res => {
        this.setState({
          setting: res.data,
        })
      })
      .catch(err => {
        console.log('Error: ' + err);
      });
  };

  render() {
    return (
      <>
        
        <Image />
      </>
    );
  };
}