export class Ball {
    constructor(canvas, paddle) {
        this.canvas = canvas;
        this.paddle = paddle;
        this.radius = 5;
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Wall Collision
        if (this.x < this.radius || this.x > this.canvas.width - this.radius) {
            this.dx *= -1;
        }
        if (this.y < this.radius) {
            this.dy *= -1;
        }

        // Paddle Collision
        if (
            this.y + this.radius >= this.canvas.height - this.paddle.height - 10 &&
            this.x >= this.paddle.x &&
            this.x <= this.paddle.x + this.paddle.width
        ) {
            this.dy *= -1;
        }
    }

    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
    }

    hitBrick(brick) {
        if (
            this.x > brick.x &&
            this.x < brick.x + brick.width &&
            this.y > brick.y &&
            this.y < brick.y + brick.height
        ) {
            this.dy *= -1;
            return true;
        }
        return false;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
