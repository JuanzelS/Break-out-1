export class Ball {
  constructor(canvas) {
    this.radius = 10;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
