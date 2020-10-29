import React from 'react';
import Particles from "react-tsparticles";
import options from '../graphics/particleOptions.js'


export default class Will extends React.Component{
  render(){
    return(
      <div>
        <title>William Klingler 💚</title>
        <Particles height="100vh" options={options} />
        <h1 className="coolText centerTextOverDiv"> William Klingler</h1>
      </div>
    )}
  }
