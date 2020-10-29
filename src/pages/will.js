import React from 'react';
import Particles from "react-tsparticles";
import options from '../graphics/particleOptions.js'


export default class Will extends React.Component{
  render(){
    return(
      <div>
        <title>William Klingler 💚</title>
        <Particles height="100vh" options={options} />
        <div id="willHeader"> WILLIAM KLINGLER </div>
      </div>
    )}
  }
