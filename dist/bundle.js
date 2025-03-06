/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ball.ts":
/*!*********************!*\
  !*** ./src/ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ball: () => (/* binding */ Ball)\n/* harmony export */ });\nvar Ball = /** @class */ (function () {\n    function Ball(canvas, paddle) {\n        this.canvas = canvas;\n        this.paddle = paddle;\n        this.radius = 5;\n        this.x = canvas.width / 2;\n        this.y = canvas.height - 30;\n        this.dx = 2;\n        this.dy = -2;\n    }\n    Ball.prototype.update = function () {\n        this.x += this.dx;\n        this.y += this.dy;\n        // Wall Collision\n        if (this.x < this.radius || this.x > this.canvas.width - this.radius) {\n            this.dx *= -1;\n        }\n        if (this.y < this.radius) {\n            this.dy *= -1;\n        }\n        // Paddle Collision\n        if (this.y + this.radius >= this.canvas.height - this.paddle.height - 10 &&\n            this.x >= this.paddle.x &&\n            this.x <= this.paddle.x + this.paddle.width) {\n            this.dy *= -1;\n        }\n    };\n    Ball.prototype.reset = function () {\n        this.x = this.canvas.width / 2;\n        this.y = this.canvas.height - 30;\n        this.dx = 2;\n        this.dy = -2;\n    };\n    Ball.prototype.hitBrick = function (brick) {\n        if (this.x > brick.x &&\n            this.x < brick.x + brick.width &&\n            this.y > brick.y &&\n            this.y < brick.y + brick.height) {\n            this.dy *= -1;\n            return true;\n        }\n        return false;\n    };\n    Ball.prototype.draw = function (ctx) {\n        ctx.fillStyle = \"white\";\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Ball;\n}());\n\n\n\n//# sourceURL=webpack://class-6/./src/ball.ts?");

/***/ }),

/***/ "./src/brick.ts":
/*!**********************!*\
  !*** ./src/brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Brick: () => (/* binding */ Brick)\n/* harmony export */ });\nvar Brick = /** @class */ (function () {\n    function Brick(x, y, width, height) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n    }\n    Brick.prototype.draw = function (ctx) {\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(this.x, this.y, this.width, this.height);\n    };\n    return Brick;\n}());\n\n\n\n//# sourceURL=webpack://class-6/./src/brick.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.ts\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/ball.ts\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brick */ \"./src/brick.ts\");\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas, ctx) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__.Paddle(canvas);\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__.Ball(canvas, this.paddle);\n        this.bricks = [];\n        this.lives = 3;\n        this.score = 0;\n        this.createBricks();\n        this.handleInput();\n    }\n    Game.prototype.createBricks = function () {\n        var rowCount = 5;\n        var colCount = 7;\n        var brickWidth = 60;\n        var brickHeight = 20;\n        var padding = 10;\n        var offsetX = 30;\n        var offsetY = 30;\n        for (var r = 0; r < rowCount; r++) {\n            for (var c = 0; c < colCount; c++) {\n                var x = c * (brickWidth + padding) + offsetX;\n                var y = r * (brickHeight + padding) + offsetY;\n                this.bricks.push(new _brick__WEBPACK_IMPORTED_MODULE_2__.Brick(x, y, brickWidth, brickHeight));\n            }\n        }\n    };\n    Game.prototype.handleInput = function () {\n        var _this = this;\n        document.addEventListener(\"keydown\", function (event) {\n            if (event.key === \"ArrowLeft\")\n                _this.paddle.moveLeft();\n            if (event.key === \"ArrowRight\")\n                _this.paddle.moveRight();\n        });\n        document.addEventListener(\"keyup\", function () {\n            _this.paddle.stop();\n        });\n    };\n    Game.prototype.update = function () {\n        this.ball.update();\n        this.paddle.update();\n        this.checkCollisions();\n    };\n    Game.prototype.checkCollisions = function () {\n        var _this = this;\n        // Ball & Wall Collision\n        if (this.ball.y + this.ball.radius > this.canvas.height) {\n            this.lives--;\n            if (this.lives === 0) {\n                alert(\"Game Over!\");\n                document.location.reload();\n            }\n            else {\n                this.ball.reset();\n            }\n        }\n        // Ball & Bricks Collision\n        this.bricks = this.bricks.filter(function (brick) {\n            if (_this.ball.hitBrick(brick)) {\n                _this.score += 10;\n                return false;\n            }\n            return true;\n        });\n        // Win Condition\n        if (this.bricks.length === 0) {\n            alert(\"You Win!\");\n            document.location.reload();\n        }\n    };\n    Game.prototype.draw = function () {\n        var _this = this;\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.paddle.draw(this.ctx);\n        this.ball.draw(this.ctx);\n        this.bricks.forEach(function (brick) { return brick.draw(_this.ctx); });\n        // Score & Lives\n        this.ctx.fillStyle = \"white\";\n        this.ctx.fillText(\"Score: \".concat(this.score), 20, 20);\n        this.ctx.fillText(\"Lives: \".concat(this.lives), this.canvas.width - 70, 20);\n    };\n    Game.prototype.loop = function () {\n        var _this = this;\n        this.update();\n        this.draw();\n        requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.start = function () {\n        this.loop();\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://class-6/./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\nvar canvas = document.getElementById('gameCanvas');\nvar ctx = canvas.getContext('2d');\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas, ctx);\ngame.start();\n\n\n//# sourceURL=webpack://class-6/./src/index.ts?");

/***/ }),

/***/ "./src/paddle.ts":
/*!***********************!*\
  !*** ./src/paddle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Paddle: () => (/* binding */ Paddle)\n/* harmony export */ });\nvar Paddle = /** @class */ (function () {\n    function Paddle(canvas) {\n        this.canvas = canvas;\n        this.width = 75;\n        this.height = 10;\n        this.x = (canvas.width - this.width) / 2;\n        this.speed = 5;\n        this.dx = 0;\n    }\n    Paddle.prototype.moveLeft = function () {\n        this.dx = -this.speed;\n    };\n    Paddle.prototype.moveRight = function () {\n        this.dx = this.speed;\n    };\n    Paddle.prototype.stop = function () {\n        this.dx = 0;\n    };\n    Paddle.prototype.update = function () {\n        this.x += this.dx;\n        if (this.x < 0)\n            this.x = 0;\n        if (this.x + this.width > this.canvas.width)\n            this.x = this.canvas.width - this.width;\n    };\n    Paddle.prototype.draw = function (ctx) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(this.x, this.canvas.height - this.height - 10, this.width, this.height);\n    };\n    return Paddle;\n}());\n\n\n\n//# sourceURL=webpack://class-6/./src/paddle.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;