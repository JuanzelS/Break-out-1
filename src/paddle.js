export class Paddle {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = 75;
        this.height = 10;
        this.x = (canvas.width - this.width) / 2;
        this.speed = 5;
        this.dx = 0;
    }

    moveLeft() {
        this.dx = -this.speed;
    }

    moveRight() {
        this.dx = this.speed;
    }

    stop() {
        this.dx = 0;
    }

    update() {
        this.x += this.dx;
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > this.canvas.width) this.x = this.canvas.width - this.width;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.canvas.height - this.height - 10, this.width, this.height);
    }
}
