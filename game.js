export class Game {
  constructor(canvas, paddle, ball, ctx) {
    this.canvas = canvas;
    this.paddle = paddle;
    this.ball = ball;
    this.ctx = ctx;
  }

  start() {
    this.update();
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddle.draw();
    this.ball.draw();
    this.ball.update();

    requestAnimationFrame(() => this.update());
  }
}
