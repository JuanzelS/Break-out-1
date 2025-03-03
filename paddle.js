export class Paddle {
  constructor(canvas) {
    this.width = 75;
    this.height = 10;
    this.x = (canvas.width - this.width) / 2;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillRect(this.x, this.canvas.height - this.height - 10, this.width, this.height);
  }
}
