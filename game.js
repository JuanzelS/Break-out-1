import Paddle from "./paddle.js";
import Ball from "./ball.js";

class Game {
  constructor(paddle, ball, ctx) {
    this.paddle = paddle;
    this.ball = ball;
    this.ctx = ctx;
  }

  start() {
    this.render();
  }

  render() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paddle.render(this.ctx);
    this.ball.render(this.ctx);
    requestAnimationFrame(() => this.render());
  }
}

export default Game;  // Export the class
