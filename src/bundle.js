/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, exports) {

// File: src/index.js
console.log("Breakout Game Loaded!");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// File: src/game.js
class Game {
    constructor() {
        // Game initialization logic
    }

    start() {
        console.log("Game started!");
    }
}

module.exports = { Game };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// File: src/ball.js
class Ball {
    constructor() {
        // Ball initialization logic
    }
}

module.exports = { Ball };

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	if (__webpack_module_cache__[moduleId]) {
/******/ 		return __webpack_module_cache__[moduleId].exports;
/******/ 	}
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		i: moduleId,
/******/ 		l: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	module.l = true;
/******/ 
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // Load entry module
/******/ __webpack_require__(0);
/******/ })();
