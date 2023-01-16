console.log("hello world");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const config = {
  canvasWidth: 800,
  canvasHeight: 500,
  paddleWidth: 10,
  paddleHeight: 80,
  paddleSpeed: 8, /*8*/
  ballXSpeed: 4,    /*9*/
  ballYSpeed: 2,    /*3*/
  ballSlice: 4, /*4*/
};

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

const paddle1 = new Paddle(1);
const paddle2 = new Paddle(-1);

const controller = {
  87: { pressed: false, func: paddle1.moveUp },
  83: { pressed: false, func: paddle1.moveDown },
  38: { pressed: false, func: paddle2.moveUp },
  40: { pressed: false, func: paddle2.moveDown },
};

const ball = {
  r: 10,
};

const resetBall = () => {
  (ball.x = canvas.width / 2),
    (ball.y = canvas.height / 2),
    // let's delay before starting each round
    (ball.dx = 0);
  ball.dy = 0;
  setTimeout(() => {
    // Math.sign shoots it in a random direction
    ball.dx = config.ballXSpeed * Math.sign(Math.random() - 0.5);
    ball.dy = config.ballYSpeed * Math.sign(Math.random() - 0.5);
  }, 1000);
};
resetBall();

const handleKeyDown = (e) => {
  controller[e.keyCode] && (controller[e.keyCode].pressed = true);
};

const handleKeyUp = (e) => {
  controller[e.keyCode] && (controller[e.keyCode].pressed = false);
};

const runPressedButtons = () => {
  Object.keys(controller).forEach((key) => {
    controller[key].pressed && controller[key].func();
  });
};

const moveBall = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;
};

const checkWallCollisions = () => {
  (ball.y - ball.r <= 0 || ball.y + ball.r >= canvas.height) &&
    (ball.dy = ball.dy * -1);
};

const reverseDirection = (paddle) => {
  ball.dx = -1 * ball.dx;
  // added this after lecture to make sure that if you clipped it while the ball was several pixels past the border, it wouldn't reverse direction twice.
  ball.x += Math.sign(ball.dx) * 8;
  // added this after lecture to add a slice to the hit.
  ball.dy = (ball.y - (paddle.y + config.paddleHeight / 2)) / config.ballSlice;
};

const checkPaddleCollisions = () => {
  if (ball.x - ball.r <= config.paddleWidth) {
    if (paddle1.checkCollision(ball)) {
      reverseDirection(paddle1);
    }
  }
  if (ball.x + ball.r >= canvas.width - config.paddleWidth) {
    if (paddle2.checkCollision(ball)) {
      reverseDirection(paddle2);
    }
  }
};

const checkWin = () => {
  ball.x + ball.r <= 0 && win(paddle1);
  ball.x - ball.r >= canvas.width && win(paddle2);
};

const win = (paddle) => {
  resetBall();
  paddle.win();
};

const paintBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#003300";
  ctx.stroke();
};

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paddle1.render();
  paddle2.render();
  paintBall();
};

const animate = () => {
  render();
  runPressedButtons();
  checkWallCollisions();
  checkPaddleCollisions();
  moveBall();
  checkWin();
  window.requestAnimationFrame(animate);
};

animate();