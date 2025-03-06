import { Game } from './game';

const canvas :HTMLCanvasElement = document.getElementById('gameCanvas')as HTMLCanvasElement;
const ctx :CanvasRenderingContext2D= canvas.getContext('2d')as CanvasRenderingContext2D;

const game = new Game(canvas, ctx);
game.start();
