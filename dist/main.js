/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactspageload.js":
/*!*********************************!*\
  !*** ./src/contactspageload.js ***!
  \*********************************/
/*! namespace exports */
/*! export contactPageLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageLoad\": () => /* binding */ contactPageLoad\n/* harmony export */ });\nconst contactPageLoad = () => {\r\n    let contentDiv = document.getElementById('content');\r\n\r\n    let contactImage = document.createElement('img')\r\n    contactImage.setAttribute('src','https://www.ipcaweb.org/images/IPC_Contact_Us.jpg');\r\n    contactImage.setAttribute('id','contactImage')\r\n    contentDiv.appendChild(contactImage)\r\n\r\n    let highVille = document.createElement('div')\r\n    highVille.setAttribute('id', 'highVilleContact')\r\n    let highVilleText = document.createElement('p')\r\n    highVilleText.setAttribute('class', 'contactText')\r\n    let highVillePhone = document.createElement('p')\r\n    highVilleText.textContent = 'Baitursynova 5/1'\r\n    highVillePhone.textContent = '+7 707 4534 922'\r\n    highVille.appendChild(highVilleText)\r\n    highVille.appendChild(highVillePhone)\r\n    contentDiv.appendChild(highVille)\r\n\r\n    let expo = document.createElement('div')\r\n    expo.setAttribute('id', 'expoContact')\r\n    let expoText = document.createElement('p')\r\n    expoText.setAttribute('class', 'contactText')\r\n    let expoPhone = document.createElement('p')\r\n    expoText.textContent = 'Expo Boulevard 44/7'\r\n    expoPhone.textContent = '+7 707 4433 212'\r\n    expo.appendChild(expoText)\r\n    expo.appendChild(expoPhone)\r\n    contentDiv.appendChild(expo)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-1/./src/contactspageload.js?");

/***/ }),

/***/ "./src/homepageload.js":
/*!*****************************!*\
  !*** ./src/homepageload.js ***!
  \*****************************/
/*! namespace exports */
/*! export homePageLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageLoad\": () => /* binding */ homePageLoad\n/* harmony export */ });\nconst homePageLoad = () => {\r\n\r\nlet contentDiv = document.getElementById('content')\r\n\r\nlet header = document.createElement('h1');\r\nheader.textContent = 'Kakao Dak - Finest Korean Cuisine';\r\nheader.style = 'font-family: Vampiro One, cursive; font-size: 50px;'\r\n\r\nlet image = document.createElement('img');\r\nimage.setAttribute(\"src\", 'https://weproject.media/upload/medialibrary/cc9/cc9c84c0902181b01e39916304fcf3cb.jpeg');\r\n\r\nlet blurb = document.createElement('p');\r\nblurb.textContent = 'We put the Seoul into Nur-Seoul-Tan'\r\n\r\ncontentDiv.appendChild(header);\r\ncontentDiv.appendChild(image);\r\ncontentDiv.appendChild(blurb);\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-1/./src/homepageload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepageload.js */ \"./src/homepageload.js\");\n/* harmony import */ var _menupageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupageload.js */ \"./src/menupageload.js\");\n/* harmony import */ var _contactspageload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactspageload.js */ \"./src/contactspageload.js\");\n\r\n\r\n\r\n//import two other functions from two modules\r\n\r\nconst homeTab = document.getElementById('homeTab');\r\nconst menuTab = document.getElementById('menuTab');\r\nconst contactsTab = document.getElementById('contactsTab');\r\nlet contentDiv = document.getElementById('content')\r\n;(0,_homepageload_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\r\n\r\nconst clearDiv = () => {\r\n    contentDiv.textContent = '';\r\n}\r\n\r\n//when tab clicked, delete content from div\r\n//repopulate div with appropriate content\r\n\r\nhomeTab.addEventListener('click', function(){\r\n    clearDiv();\r\n    (0,_homepageload_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\r\n})\r\n\r\nmenuTab.addEventListener('click', function(){\r\n    clearDiv();\r\n    (0,_menupageload_js__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();\r\n})\r\n\r\ncontactsTab.addEventListener('click', function(){\r\n    clearDiv();\r\n    (0,_contactspageload_js__WEBPACK_IMPORTED_MODULE_2__.contactPageLoad)();\r\n})\n\n//# sourceURL=webpack://restaurant-1/./src/index.js?");

/***/ }),

/***/ "./src/menupageload.js":
/*!*****************************!*\
  !*** ./src/menupageload.js ***!
  \*****************************/
/*! namespace exports */
/*! export menuPageLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageLoad\": () => /* binding */ menuPageLoad\n/* harmony export */ });\nconst menuPageLoad = () => {\r\n    let contentDiv = document.getElementById('content');\r\n    let menuImage = document.createElement('img')\r\n    menuImage.setAttribute('src','https://astana.restolife.kz/upload/information_system_26/5/4/0/group_5400/information_groups_property_12382.jpg');\r\n    menuImage.setAttribute('id', 'menuImage') \r\n    contentDiv.appendChild(menuImage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-1/./src/menupageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;