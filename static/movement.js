var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    character = new Image(),
    player = {
      x: 0,
      y: 50,
      w: 104,
      h: 149,
      sx: 0,
      sy: 301,
      faceRight: true,
      faceLeft: false,
      counter: 0,
      step: 15,
      nextStep: 0,
      endStep: 90,
      start: {
        rightX: 0,
        leftX: 100,
        y: 301
      }
    },
    key = {
      right: false,
      left: false
    };

function move(yPos, right, left) {
  player.faceRight = right;
  player.faceLeft = left;
  if (player.counter === player.endStep) {
    player.sx = 0;
    player.counter = 0;
    player.nextStep = player.step;
  } else if (player.counter === player.nextStep) {
    if (player.sy === player.start.y) {
      player.sx = 0;
    } else if (player.sy === yPos) {
      player.sx += player.w;
    }
    player.sy = yPos;
    player.nextStep += player.step;
  }
  player.counter += 1;
}

function reset() {
  player.sy = player.start.y;
  player.counter = 0;
  player.nextStep = 0;
}

function drawPlayer() {
  if (key.right === true && player.x < canvas.width) {
    move(0, true, false);
    player.x += 1;
    if (player.x > canvas.width + player.w + 1) {
      player.x = -player.w;
    }
  }
  if (key.left === true) {
    move(150, false, true);
    player.x -= 1;
    if (player.x < -player.w - 1) {
      player.x = canvas.width + player.w;
    }
  }
  if (key.right === false && player.faceRight === true && player.x < ctx.width) {
    player.sx = player.start.rightX;
    reset();
  }
  if (key.left === false && player.faceLeft === true) {
    player.sx = player.start.leftX;
    reset();
  }
  ctx.drawImage(character, player.sx, player.sy, player.w, player.h, player.x, player.y + canvas.height - 285, player.w, player.h);
}

function keyDown(e) {
  if (e.keyCode === 39) {
    key.right = true;
  } else if (e.keyCode === 37) {
    key.left = true;
  }
}

function keyUp(e) {
  if (e.keyCode === 39) {
    key.right = false;
  } else if (e.keyCode === 37) {
    key.left = false;
  }
}

function drawBG() {
 //ctx.fillStyle = '#fff';
 //ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
  ctx.clearRect(-100, 300, canvas.width, canvas.height);
}

function loop() {
  clearCanvas();
  //drawBG();
  drawPlayer();
  requestAnimFrame(loop);
}

function init() {
  character.src = '/gb_walk.png';

  window.addEventListener('keydown', keyDown, false);
  window.addEventListener('keyup', keyUp, false);

  loop();
}

init();