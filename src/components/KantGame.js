import React from 'react';
import Walk from "../components/walk";

export default class Loops extends React.Component {
  constructor(props){
    super(props);
    this.state ={ms: 1608224400000, loaded:false}
  }
  componentDidMount() {
    setTimeout(() => {
      let background = document.getElementById("townBackground")
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.canvas.width  = window.innerWidth;
      console.log(document.getElementById("townBackground").height);
      ctx.canvas.height = background.height;
      var radius = canvas.width / 18;
      ctx.translate(radius, radius);
      radius = radius * 0.90
      var that = this;
      this.setState({ctx: ctx, radius: radius, loaded: true});
    }, 1000);
  }
  updateTime = (stop) => {
    //this.setState({ms: this.state.ms + 2000});
  }
  componentWillUnmount() {
  }
  render() {
    if(this.state.loaded){
    //drawClock(this.state.ctx, this.state.radius, this.state.ms);
  }
    return (
      <div>
        <canvas id="canvas" height="800px" width="100%" style={{position: 'absolute', zIndex:1}}></canvas>
      <img src="/town.png" id="townBackground" style={{width:"100vw"}} />
      {this.state.loaded && <Walk/> }
      </div>
    )}
  }



  function drawClock(ctx, radius, ms) {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius, ms);
}

function drawTime(ctx, radius, ms){
  var now = new Date(ms);
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawFace(ctx, radius) {
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

