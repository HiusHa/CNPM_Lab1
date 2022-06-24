import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/index";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    );
  }
}
