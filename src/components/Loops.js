import React from 'react';
import Loop from '../graphics/Loop.js';

export default class Loops extends React.Component {
  componentDidMount() {
    initialize();
    this.setState({
      interval: setInterval(function() {
        initialize();
      }, 275)
    });
    window.onresize = initialize;
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div id="canvasContainer">
        <canvas id="canvas" height="800px" width="100%"></canvas>
        <div className="cards">
          <a style={{textDecoration: "none"}} href="/will">
            <div className="card" id="will">
              <p>
                William Klingler
              </p>
              <h2>
                UWaterloo Computer Science
              </h2>
            </div>
          </a>
          <a style={{textDecoration: "none"}} href="/kosta">
          <div className="card" id="kosta">
            <p>
              Kosta Gianicos
            </p>
            <h2>
              McMaster Engineering Physics
            </h2>
          </div>
          </a>
        </div>
      </div>
    )}
  }

  function initialize() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      drawLoops(canvas);
    }
  }

  function drawLoops(canvas) {
    var ctx = canvas.getContext('2d');

    var count = 0;
    let myLoop = new Loop(0, 0, 100, 100, ctx);
    for (var j = -2000; j < canvas.width - myLoop.width; j += myLoop.width * 2) {
      for (var i = 0; j + i < canvas.width - myLoop.width + 100; i += myLoop.width * 1.2) {
        if (i + j < canvas.width + 100 && i + j > -100 && i / 2 > -100 && i / 2 < canvas.height) {
          count++
          myLoop.translate(i + j + (Math.random() * (14 - -14) - 14), i / 2 - 30 + (Math.random() * (14 - -14) - 14));
          myLoop.draw();
        }
      }
    }
    console.log(count);
  }

  /*function draw() {
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
  ctx.restore();
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
  }*/
