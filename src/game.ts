import { Paddle } from "./paddle";
import { Ball } from "./ball";
import { Brick } from "./brick";

export class Game {
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    paddle:Paddle
    ball:Ball
    bricks:Brick[][]
    lives:number
    score:number
    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.paddle = new Paddle(canvas);
        this.ball = new Ball(canvas, this.paddle);
        this.bricks = [];
        this.lives = 3;
        this.score = 0;
        this.createBricks();
        this.handleInput();
    }

    createBricks() {
        const rowCount = 5;
        const colCount = 7;
        const brickWidth = 60;
        const brickHeight = 20;
        const padding = 10;
        const offsetX = 30;
        const offsetY = 30;

        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                let x = c * (brickWidth + padding) + offsetX;
                let y = r * (brickHeight + padding) + offsetY;
                this.bricks.push(new Brick(x, y, brickWidth, brickHeight));
            }
        }
    }

    handleInput() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") this.paddle.moveLeft();
            if (event.key === "ArrowRight") this.paddle.moveRight();
        });

        document.addEventListener("keyup", () => {
            this.paddle.stop();
        });
    }

    update() {
        this.ball.update();
        this.paddle.update();
        this.checkCollisions();
    }

    checkCollisions() {
        // Ball & Wall Collision
        if (this.ball.y + this.ball.radius > this.canvas.height) {
            this.lives--;
            if (this.lives === 0) {
                alert("Game Over!");
                document.location.reload();
            } else {
                this.ball.reset();
            }
        }

        // Ball & Bricks Collision
        this.bricks = this.bricks.filter((brick) => {
            if (this.ball.hitBrick(brick)) {
                this.score += 10;
                return false;
            }
            return true;
        });

        // Win Condition
        if (this.bricks.length === 0) {
            alert("You Win!");
            document.location.reload();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.paddle.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.bricks.forEach((brick) => brick.draw(this.ctx));

        // Score & Lives
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Score: ${this.score}`, 20, 20);
        this.ctx.fillText(`Lives: ${this.lives}`, this.canvas.width - 70, 20);
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    start() {
        this.loop();
    }
}
