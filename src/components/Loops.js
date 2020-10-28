import React from 'react';
import Loop from '../graphics/Loop.js';

export default class Loops extends React.Component{
  componentDidMount() {
    draw();
    initialize();
    window.onresize = initialize;
  }
  render(){
    return(
      <div id="canvasContainer">
        <canvas id="canvas" height="800px" width="100%"></canvas>
      </div>
    )
  }
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;


    /*ctx.translate(170,170);
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.restore();*/

    //drawGrid(ctx);

    /*ctx.save();
    ctx.fillStyle = 'rgb(255,255,255)';
    drawGridSquare(100,100,ctx);
    ctx.restore();*/
  }
}

const gridSquareWidth = 6;
const gridSquareHeight = 6;

function drawGridSquare(x,y, ctx){
  ctx.fillRect(x,y,gridSquareWidth,gridSquareHeight)
}

function drawGrid(ctx){
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;
  for (let i=0;i<width; i+= gridSquareWidth){
    for (let j=0; j<height; j+= gridSquareHeight){
      drawGridSquare(i, j, ctx);
    }
  }
}

function initialize(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    let myLoop = new Loop(0,0,ctx);
    for(var i = 0; i < canvas.width - 100; i+= 120){
      myLoop.translate(i + (Math.random() * (14 - -14) -14),i/2 + (Math.random() * (14 - -14) -14));
      myLoop.draw();
    }
  }
}
