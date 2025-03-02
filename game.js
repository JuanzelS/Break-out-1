class Game {
  constructor(paddle, ball, ctx) {
    this.paddle = paddle;
    this.ball = ball;
    this.ctx = ctx;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60); // 60 FPS
  }

  stop() {
    clearInterval(this.intervalId);
  }

  update() {
    this.ball.move();
    this.paddle.move();
    this.ball.checkCollision(this.paddle);
  }

  draw() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    this.ball.draw(this.ctx);
    this.paddle.draw(this.ctx);
  }
}
