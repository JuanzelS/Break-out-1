import { Game } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas")as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const game = new Game(canvas, ctx);
    game.start();
});
