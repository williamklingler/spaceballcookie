import React from 'react';
import Particles from "react-tsparticles";
import options from '../graphics/particleOptionsKosta.js'


export default class Kosta extends React.Component{
  render(){
    return(
      <div>
        <title>Kosta Gianicos 💚</title>
        <Particles height="100vh" options={options} />
        <div id="willHeader">
        KOSTA GIANICOS
        </div>
      </div>
    )}
  }
