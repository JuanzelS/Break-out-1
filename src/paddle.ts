export class Paddle {
    height:number
    width:number
    x:number
    speed:number
    dx:number
    canvas:HTMLCanvasElement
    constructor(canvas:HTMLCanvasElement) {
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

    draw(ctx:CanvasRenderingContext2D) {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.canvas.height - this.height - 10, this.width, this.height);
    }
}
