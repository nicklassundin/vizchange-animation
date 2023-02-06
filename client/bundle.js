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

/***/ "./src/browning/discovery.js":
/*!***********************************!*\
  !*** ./src/browning/discovery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Discovery\": () => (/* binding */ Discovery)\n/* harmony export */ });\n\nconst {verticalAnimation} = __webpack_require__(/*! ../phrase */ \"./src/phrase.js\");\nclass Discovery {\n    constructor() {\n        //let dive_yester = new Phrase('#lake', 'landscape', '#d1', '#bg2', '#fg1', '#fg2', '#fg3', '#title')\n\n        let dive = new verticalAnimation('#dive-intro',\n            'landscape',\n            ['#title'],\n            ['#bg2'],\n            ['#fg1', '#fg2', '#fg3'],\n            ['#D1', '#D2', '#D3'],\n            '#dive-tomorrow',\n            {\n                1: ['#bubbles', '#carbon', '#extra', '#fishes', '#people'],\n                2: ['#fishes2', '#people2', '#zoom'],\n                3: ['#fishes3', '#people3', '#nutri1', '#nutri2', '#nutri3', '#ice']\n            },\n            {\n                1: '#dive-yesterday',\n                2: '#dive-today',\n                3: '#dive-tomorrow',\n            })\n\n        //let dive_yester = new verticalAnimation('#dive-yesterday', 'landscape', ['#title'], ['#bg2'], ['#fg1', '#fg2', '#fg3'], ['#d1', '#d2', '#d3'])\n        dive.addLakeAlign(0);\n\n        dive.addVertical('>');\n        dive.addVertical('>');\n        dive.addVertical('>');\n\n        dive.fadeOut('>');\n\n\n    }\n}\n\n//# sourceURL=webpack://vizchange-animation-story/./src/browning/discovery.js?");

/***/ }),

/***/ "./src/browning/fishes.js":
/*!********************************!*\
  !*** ./src/browning/fishes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fishes\": () => (/* binding */ Fishes)\n/* harmony export */ });\n\nconst {Phrase} = __webpack_require__(/*! ../phrase */ \"./src/phrase.js\");\nclass Fishes {\n    constructor () {\n\n    }\n}\n\n\n\n//# sourceURL=webpack://vizchange-animation-story/./src/browning/fishes.js?");

/***/ }),

/***/ "./src/browning/imersive.js":
/*!**********************************!*\
  !*** ./src/browning/imersive.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Imersive\": () => (/* binding */ Imersive)\n/* harmony export */ });\n\nconst {Phrase} = __webpack_require__(/*! ../phrase */ \"./src/phrase.js\");\nclass Imersive {\n    constructor () {\n\n        let highPhrase = new Phrase('#high', 'title_horizontal','#a3', '#a2', '#a1')\n        highPhrase.addTitle()\n        highPhrase.fadeText()\n        highPhrase.addHorizontalOut(0.5)\n        let timeline = highPhrase.timeline\n\n        let rainPhrase = new Phrase( '#rain', 'landscape', '#b4', '#b2', '#b1')\n        rainPhrase.addHorizontal()\n        let rain = rainPhrase.timeline\n\n        let mudPhrase = new Phrase( '#mud', 'landscape', '#c1', '#c4', '#c2')\n        mudPhrase.addHorizontal(1, 0.75);\n        let mud = mudPhrase.timeline\n\n\n        let lakePhrase = new Phrase( '#lake', 'landscape', '#d1', '#d3', '#d2', '#bg2')\n        lakePhrase.addHorizontal(1, 0);\n\n        let lake = lakePhrase.timeline\n\n    }\n}\n\n\n\n//# sourceURL=webpack://vizchange-animation-story/./src/browning/imersive.js?");

/***/ }),

/***/ "./src/browning/story.js":
/*!*******************************!*\
  !*** ./src/browning/story.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Discovery\": () => (/* binding */ Discovery),\n/* harmony export */   \"Fishes\": () => (/* binding */ Fishes),\n/* harmony export */   \"Imersive\": () => (/* binding */ Imersive),\n/* harmony export */   \"Phrase\": () => (/* binding */ Phrase)\n/* harmony export */ });\n// Animation Project\n// TODO webpack this to client\n\n\n// or get other plugins:\n\n\nconst {Phrase} = __webpack_require__(/*! ../phrase.js */ \"./src/phrase.js\")\nconst {Imersive} = __webpack_require__(/*! ./imersive */ \"./src/browning/imersive.js\");\nconst {Discovery} = __webpack_require__(/*! ./discovery */ \"./src/browning/discovery.js\");\nconst {Fishes} = __webpack_require__(/*! ./fishes */ \"./src/browning/fishes.js\");\n\nwindow.Imersive = Imersive;\nwindow.Discovery = Discovery;\nwindow.Fishes = Fishes;\n\n\n\n//# sourceURL=webpack://vizchange-animation-story/./src/browning/story.js?");

/***/ }),

/***/ "./src/phrase.js":
/*!***********************!*\
  !*** ./src/phrase.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Phrase\": () => (/* binding */ Phrase),\n/* harmony export */   \"verticalAnimation\": () => (/* binding */ verticalAnimation)\n/* harmony export */ });\nconst snap = {\n    snapTo: \"labels\", // snap to the closest label in the timeline\n    directional: true,\n    duration: {min: 5, max: 30}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)\n    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping\n    ease: \"power3.inOut\", // the ease of the snap animation (\"power3\" by default)\n    onComplete: (value) => {\n        console.log(value)\n    }\n}\n\nconst options = {\n    'title_horizontal': {\n        scrollTrigger:{\n            start: \"top center\",\n            end: \"bottom top\",\n            //markers: true,\n            //pin: true,\n            //pinnedContainer: true,\n            scrub: true,\n         //   snap: snap\n        }\n    },\n    'landscape': {\n        scrollTrigger:{\n            start: \"top bottom\",\n            end: \"bottom top\",\n            //markers: true,\n            //pin: true,\n            //pinnedContainer: true,\n            scrub: 1,\n         //   snap: snap\n        },\n    },\n    'master': {\n        scrollTrigger:{\n            start: \"top top\",\n            end: \"bottom top\",\n            //toggleActions: \"play none none reverse\",\n            //markers: true,\n            //pin: true,\n            //pinnedContainer: true,\n            scrub: 1,\n            //snap: snap\n        }\n    },\n}\n\nclass Phrase {\n    constructor(id, type, detail, foreground, background) {\n        this.config = options[type]\n        this.config.scrollTrigger.trigger = id\n        this.timeline = gsap.timeline(this.config)\n        this.ids = {};\n        this.ids.detail = detail\n        this.ids.text = gsap.utils.toArray(`${id}-text`)\n        this.ids.foreground = foreground\n        this.ids.background = background\n        this.ids.more = Object.values(arguments).slice(5);\n    }\n    addTitle () {\n        this.timeline.from(this.ids.background, { y: '25%', duration: 1  },0)\n        this.timeline.from(this.ids.foreground, { y: '15%', duration: 1  },'<')\n        this.timeline.from(this.ids.detail, { y: '10%', duration: 1  },'<')\n        this.timeline.from(this.ids.more, { y: '10%', duration: 1  },'<')\n        return this\n    }\n    addHorizontalIn (factor = 1 ) {\n        this.timeline.from(this.ids.background, { y: `${factor*75}%`, duration: 1  },0)\n        this.timeline.from(this.ids.foreground, { y: `${factor*85}%`, duration: 1  },'<')\n        this.timeline.from(this.ids.detail, { y: `${factor*90}%`, duration: 1  },'<')\n        this.timeline.from(this.ids.more, { y: `${factor*90}%`, duration: 1  },'<')\n    }\n    fadeText() {\n        this.ids.text.map((each, i) => {\n            this.timeline.from(each, {opacity: 0, duration: 1}, '>')\n            this.timeline.to(each, {opacity: 0, duration: 1}, '>')\n        })\n    }\n    addHorizontal (infactor, outfactor) {\n        this.addHorizontalIn(infactor)\n        this.fadeText();\n        this.addHorizontalOut(outfactor)\n    }\n    addHorizontalOut (factor = 1) {\n        this.timeline.to(this.ids.background, { y: `${factor*75}%`, duration: 1  },'>')\n        this.timeline.to(this.ids.foreground, { y: `${factor*60}%`, x: '-3%', duration: 1  },'<')\n        this.timeline.to(this.ids.detail, { y: `${factor*50}%`, x: '-5%', duration: 1  },'<')\n        this.timeline.to(this.ids.more, { y: `${factor*50}%`, duration: 1  },'<')\n    }\n}\n\nclass verticalAnimation {\n    //constructor(id, type, detail, foreground, background) {\n    constructor(id, type, detail = [], background, foreground, alignBackground, endId = id, popup, text) {\n        this.config = options[type]\n        this.config.scrollTrigger.trigger = id\n        this.config.scrollTrigger.endTrigger = endId\n        this.timeline = gsap.timeline(this.config)\n        this.timeline.addLabel('intro', 0)\n        this.ids = {};\n        this.ids.detail = detail\n        this.ids.foreground = foreground\n        this.ids.background = background\n        this.ids.alignBackground = alignBackground;\n        this.ids.popup = Object.values(popup);\n\n        Object.keys(text).forEach(key => {\n            text[key] = gsap.utils.toArray(`${text[key]}-text`)\n        })\n        this.ids.text = Object.values(text);\n        //this.ids.more = Object.values(arguments).slice(5);\n        this.times = 0;\n    }\n    fromRaise(object, config, position) {\n        object.forEach((each, index) => {\n            let conf = JSON.parse(JSON.stringify(config))\n            config.y = `${conf.y*(10-index)/10}%`\n            this.timeline.to(each, conf, position)\n            position = '<';\n        })\n    }\n    addLakeAlign (start = 0) {\n        //this.timeline.from(this.ids.alignBackground, {opacity: 0, duration: 1}, start)\n\n        this.timeline.to(this.ids.alignBackground, { x: '-15.6%', duration: 2}, start)\n\n        this.timeline.from(this.ids.background, { x: '15.6%', duration: 2}, '>')\n        this.timeline.from(this.ids.foreground, { x: '15.6%', duration: 2}, '<')\n\n        this.timeline.from(this.ids.foreground, {opacity: 0, duration: 1}, '>')\n\n\n        //this.timeline.to(this.ids.alignBackground, {y: '-19.7%',  duration: 1}, '>')\n        this.fromRaise(this.ids.alignBackground, {y: -19.7, duration: 1}, '>')\n\n        this.timeline.from(this.ids.background, {y: '19.7%', duration: 1}, '<')\n        this.timeline.from(this.ids.foreground, {y: '19.7%', duration: 1}, '<')\n\n        this.timeline.from(this.ids.background, {opacity: 0, duration: 1}, '>')\n        this.timeline.from(this.ids.detail, {opacity: 0, duration: 1}, '<')\n\n        let keeper = this.ids.alignBackground.shift()\n        this.timeline.to(this.ids.alignBackground, {opacity: 0, duration: 0}, '>')\n        this.ids.alignBackground = keeper;\n        // after\n\n    }\n    addVertical (start = '>') {\n        let value = 20\n        this.times += 1;\n        this.timeline.to(this.ids.background, {x: `-${value/2*this.times}%`, duration: 1}, start)\n        this.timeline.from(this.ids.popup[this.times-1], {opacity: 0, duration: 1}, '<')\n\n        this.timeline.to(this.ids.alignBackground, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.foreground, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.detail, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[0], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[1], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[2], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n\n        this.ids.text[this.times-1].map((each, i) => {\n            this.timeline.from(each, {opacity: 0, duration: 3}, '>-1')\n        })\n        this.ids.text[this.times-1].map((each, i) => {\n            this.timeline.to(each, {opacity: 0, duration: 3}, '>-2')\n        })\n\n        this.timeline.to(this.ids.background, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.alignBackground, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.foreground, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.detail, {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[0], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[1], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[2], {x: `-${value/2*this.times}%`, duration: 1}, '<')\n\n    }\n    fadeOut (start = '>') {\n        this.timeline.to(this.ids.popup[0], {opacity: 0, duration: 1}, start)\n        this.timeline.to(this.ids.popup[1], {opacity: 0, duration: 1}, '<')\n        this.timeline.to(this.ids.popup[2], {opacity: 0, duration: 1}, '<')\n        this.timeline.to(this.ids.detail, {opacity: 0, duration: 1}, '<')\n    }\n}\n\n//# sourceURL=webpack://vizchange-animation-story/./src/phrase.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/browning/story.js");
/******/ 	
/******/ })()
;