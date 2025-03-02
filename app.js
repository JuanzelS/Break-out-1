import Paddle from "./paddle.js";
import Ball from "./ball.js";
import Game from "./game.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const paddle = new Paddle(canvas);
const ball = new Ball(canvas);
const game = new Game(paddle, ball, ctx);

game.start();
