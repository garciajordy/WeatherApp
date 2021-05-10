/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var getData = function getData(city) {\n  var data = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \"&APPID=9ce157141208c7f7d8b28e7e79719ed2&units=metric\")).then(function (res) {\n    return res.json();\n  });\n  return data;\n};\n\nfunction weather() {\n  var city = document.getElementById('city').value;\n  getData(city).then(function (data) {\n    var temp = document.getElementById('temp');\n    var minTemp1 = document.getElementById('min-temp');\n    var maxTemp = document.getElementById('max-temp');\n    var city1 = document.getElementById('city-1');\n    var weatherCast = document.getElementById('weather-cast');\n    city1.innerHTML = data.name;\n    weatherCast.innerHTML = data.weather[0].description;\n    temp.innerHTML = \"Temp = \".concat(data.main.temp, \" Celsius\");\n    minTemp1.innerHTML = \"Min-temp = \".concat(data.main.temp_min, \" Celsius\");\n    maxTemp.innerHTML = \"Max-temp = \".concat(data.main.temp_max, \" Celsius\");\n  });\n}\n\nvar btn = document.getElementById('btn');\nbtn.addEventListener('click', weather);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;