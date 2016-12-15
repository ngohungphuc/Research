/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./app */1);
	module.exports = __webpack_require__(/*! ./util.js */3);


/***/ },
/* 1 */
/*!*****************!*\
  !*** ./app.es6 ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _login = __webpack_require__(/*! ./login */ 2);
	
	(0, _login.login)('admin', 'password'); /**
	                                         * Created by phuc.ngo on 9/12/2016.
	                                         */
	
	document.write("Something to test!asdasdas");
	console.log("All loaded");

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./login.es6 ***!
  \*******************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by phuc.ngo on 9/12/2016.
	 */
	var login = function login(username, password) {
	    if (username !== 'admin' || password !== 'admin') {
	        console.log('incorrect login');
	    }
	};
	
	exports.login = login;

/***/ },
/* 3 */
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ function(module, exports) {

	/**
	 * Created by phuc.ngo on 9/12/2016.
	 */
	console.log("log in util.js file");

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map