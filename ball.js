class Ball {
  constructor(canvas) {
    this.radius = 10;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.canvas = canvas;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    // Ball wall collision
    if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    }
    if (this.y + this.dy > this.canvas.height - this.radius) {
      if (this.x > paddle.x && this.x < paddle.x + paddle.width) {
        this.dy = -this.dy;
      } else {
        // Ball hits the bottom (game over or restart logic can go here)
      }
    }
  }

  checkCollision(paddle) {
    if (
      this.y + this.dy > paddle.y - this.radius &&
      this.y + this.dy < paddle.y + paddle.height &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width
    ) {
      this.dy = -this.dy;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}

