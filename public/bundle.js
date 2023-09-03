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

/***/ "./src/ui/client/LocalizedDate.tsx":
/*!*****************************************!*\
  !*** ./src/ui/client/LocalizedDate.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/// <reference lib=\"dom\" />\n/// <reference lib=\"dom.iterable\" />\nclass LocalizedDate extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.innerHTML = this.getFormattedDate();\n    }\n    getFormattedDate = () => {\n        return new Intl.DateTimeFormat(\"en-US\", {\n            weekday: \"short\",\n            month: \"short\",\n            day: \"numeric\",\n        }).format(new Date());\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalizedDate);\n\n\n//# sourceURL=webpack://htmx-hn/./src/ui/client/LocalizedDate.tsx?");

/***/ }),

/***/ "./src/ui/client/RelativeTime.tsx":
/*!****************************************!*\
  !*** ./src/ui/client/RelativeTime.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/// <reference lib=\"dom\" />\n/// <reference lib=\"dom.iterable\" />\nconst DAY_MILLISECONDS = 1000 * 60 * 60 * 24;\nclass RelativeTime extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        const timestamp = this.getAttribute(\"data-timestamp\");\n        if (!timestamp)\n            return;\n        this.innerHTML = this.getRelativeTime(timestamp);\n    }\n    getRelativeTime = (timestamp) => {\n        // Date from hacker news is in seconds\n        const date = parseInt(timestamp, 10);\n        const now = Math.floor(new Date().getTime() / 1000);\n        const rtf = new Intl.RelativeTimeFormat(\"en\", {\n            numeric: \"auto\",\n        });\n        const hoursDifference = Math.floor((date - now) / 3600) + 1;\n        const daysDifference = Math.floor(Math.abs(hoursDifference) / 24);\n        if (daysDifference > 0) {\n            return rtf.format(-daysDifference, \"day\");\n        }\n        if (hoursDifference < 24) {\n            return rtf.format(hoursDifference, \"hours\");\n        }\n        return \"\";\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelativeTime);\n\n\n//# sourceURL=webpack://htmx-hn/./src/ui/client/RelativeTime.tsx?");

/***/ }),

/***/ "./src/ui/client/index.ts":
/*!********************************!*\
  !*** ./src/ui/client/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LocalizedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalizedDate */ \"./src/ui/client/LocalizedDate.tsx\");\n/* harmony import */ var _RelativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelativeTime */ \"./src/ui/client/RelativeTime.tsx\");\n\n\nwindow.customElements.define(\"localized-date\", _LocalizedDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.customElements.define(\"relative-time\", _RelativeTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://htmx-hn/./src/ui/client/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui/client/index.ts");
/******/ 	
/******/ })()
;