import { Game } from "./game.js";
import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const paddle = new Paddle(canvas);
    const ball = new Ball(canvas);
    const game = new Game(canvas, paddle, ball, ctx);

    game.start();
});
