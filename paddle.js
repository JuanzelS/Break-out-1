class Paddle {
  constructor(canvas) {
    this.width = 75;
    this.height = 10;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height - 20;
    this.speed = 5;
    this.dx = 0;
    this.canvas = canvas;

    // Event listeners for paddle movement
    document.addEventListener("keydown", (e) => this.handleKeyDown(e));
    document.addEventListener("keyup", (e) => this.handleKeyUp(e));
  }

  handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      this.dx = this.speed;
    } else if (e.key === "ArrowLeft") {
      this.dx = -this.speed;
    }
  }

  handleKeyUp(e) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      this.dx = 0;
    }
  }

  move() {
    if (this.x + this.dx > 0 && this.x + this.width + this.dx < this.canvas.width) {
      this.x += this.dx;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

