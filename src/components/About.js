import React from "react";
import {image} from "../data/data.js";

function About() {
  return <div id = 'about'>
    <h2>About Me</h2>
    <p>I made this</p>
    <img src={image} alt ="I made This"/>  
  </div>;
}

export default About;
