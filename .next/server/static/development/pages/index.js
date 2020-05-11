module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CarouselContainer.jsx":
/*!******************************************!*\
  !*** ./components/CarouselContainer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Carousel.module.css */ "./components/styles/Carousel.module.css");
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/CarouselContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CarouselContainer() {
  return __jsx("div", {
    id: "carousel",
    className: "container-fluid pr-0 pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      filter: 'opacity(0.7)'
    },
    alt: "carousel-item",
    className: `${_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg} d-block w-100`,
    src: "carrousel/carrousel-item-1.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Caption, {
    style: {
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Estamos para servirte"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      filter: 'opacity(0.7)'
    },
    alt: "carousel-item",
    className: `${_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg} d-block w-100`,
    src: "carrousel/carrousel-item-2.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Caption, {
    style: {
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Estamos para servirte"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.")))));
}

/***/ }),

/***/ "./components/EspecialidadItem.jsx":
/*!*****************************************!*\
  !*** ./components/EspecialidadItem.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EspecialidadItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Especialidades.module.css */ "./components/styles/Especialidades.module.css");
/* harmony import */ var _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/EspecialidadItem.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function EspecialidadItem({
  title,
  description,
  buttonText
}) {
  return __jsx("div", {
    className: _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), __jsx("p", {
    className: _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, description), __jsx("button", {
    type: "button",
    className: "btn btn-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, buttonText));
}

/***/ }),

/***/ "./components/Especialidades.jsx":
/*!***************************************!*\
  !*** ./components/Especialidades.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Especialidades; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EspecialidadItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EspecialidadItem */ "./components/EspecialidadItem.jsx");
/* harmony import */ var _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Especialidades.module.css */ "./components/styles/Especialidades.module.css");
/* harmony import */ var _styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Especialidades.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Especialidades() {
  return __jsx("div", {
    className: `${_styles_Especialidades_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container} container-fluid bg-first-color`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_EspecialidadItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Neumolog\xEDa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Click Me",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_EspecialidadItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Cirug\xEDa de T\xF3rax",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Click Me",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_EspecialidadItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Traumatolog\xEDa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Click Me",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_EspecialidadItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Cardiolog\xEDa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Click Me",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Footer.module.css */ "./components/styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer() {
  return __jsx("footer", {
    className: `container-fluid ${_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/logoCirculo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrFacebook"], {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrTwitter"], {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrInstagram"], {
    className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/Galeria.jsx":
/*!********************************!*\
  !*** ./components/Galeria.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Galeria; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Galeria_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Galeria.module.css */ "./components/styles/Galeria.module.css");
/* harmony import */ var _styles_Galeria_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Galeria_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Galeria.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Galeria() {
  return __jsx("div", {
    className: _styles_Galeria_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.galeriaContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "evidence/evidence-1.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "evidence/evidence-2.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("img", {
    src: "evidence/evidence-3.jpg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MiniCardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniCardContainer */ "./components/MiniCardContainer.jsx");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Header.module.css */ "./components/styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container d-flex justify-content-end align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "icons-container mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrFacebook"], {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrTwitter"], {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__["GrInstagram"], {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "btn btn-info pl-4 pr-4",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Click Me"))), __jsx("div", {
    className: "bottomHeader mt-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-in-line col-lg-4 mt-auto mb-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/logoHorizontal.jpg",
    alt: "Logo",
    className: "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  })), __jsx(_MiniCardContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./components/Map.jsx":
/*!****************************!*\
  !*** ./components/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Map_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Map.module.css */ "./components/styles/Map.module.css");
/* harmony import */ var _styles_Map_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Map_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Map.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Map() {
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("iframe", {
    title: "ubicacion",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15064.566514699183!2d-99.66754930211609!3d19.27620623314464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89b1b817cc07%3A0xbf089bc2b5ec3321!2sClinica%20Integral%20Humana!5e0!3m2!1ses!2smx!4v1589138708187!5m2!1ses!2smx",
    width: "800",
    height: "600",
    className: _styles_Map_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.map,
    frameBorder: "0",
    allowFullScreen: "",
    "aria-hidden": "false",
    tabIndex: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/MiniCardContainer.jsx":
/*!******************************************!*\
  !*** ./components/MiniCardContainer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniCardContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/MiniCardInfo.module.css */ "./components/styles/MiniCardInfo.module.css");
/* harmony import */ var _styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCardContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function MiniCardContainer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.miniCardContainer} col-lg-3 col-4 offset-lg-0 offset-1 d-flex align-items-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiClock"], {
    className: _styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer} ml-2`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "S\xE1bado y Domingo CERRADO"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Lunes a Viernes 09:00 - 16:00"))), __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.miniCardContainer} col-lg-2 col-3 d-flex align-items-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiPhone"], {
    className: _styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer} ml-2`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "\xA1Ll\xE1manos!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "(55) 52 567 539"))), __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.miniCardContainer} col-lg-2 col-3 d-flex align-items-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiMap"], {
    className: _styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `${_styles_MiniCardInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer} ml-2`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Direcci\xF3n"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Estado"))));
}

/***/ }),

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "react-bootstrap/NavDropdown");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/NavBar.module.css */ "./components/styles/NavBar.module.css");
/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/NavBar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NavBar() {
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: `${_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerNav} navbar navbar-dark pt-3 pb-3`,
    expand: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
    id: "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Inicio"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: "#link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Servicios"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: "#link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Nosotros"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: "#link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Especialidades"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: "#link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Ubicaci\xF3n"))));
}

/***/ }),

/***/ "./components/Nosotros.jsx":
/*!*********************************!*\
  !*** ./components/Nosotros.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nosotros; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Nosotros.module.css */ "./components/styles/Nosotros.module.css");
/* harmony import */ var _styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Nosotros.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Nosotros() {
  return __jsx("section", {
    className: `${_styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nosotrosSection} container-fluid d-flex bg-third-color`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nosotrosContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Nosotros"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "\xBFPor qu\xE9 elegirnos?"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper. Est, enim facilisis senectus lacus, felis sed nascetur tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper."), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/icons/icons8-hospital-100.png",
    alt: "health Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper. Est, enim facilisis senectus lacus, felis sed nascetur tellus. Lorem ipsum dolor sit")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/icons/icons8-hospital-100.png",
    alt: "health Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper. Est, enim facilisis senectus lacus, felis sed nascetur tellus. Lorem ipsum dolor sit")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/icons/icons8-hospital-100.png",
    alt: "health Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper. Est, enim facilisis senectus lacus, felis sed nascetur tellus. Lorem ipsum dolor sit")))), __jsx("div", {
    className: `${_styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.horariosContainer} bg-first-color`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/icons/icons8-protection-mask-100.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Horarios"), __jsx("div", {
    className: _styles_Nosotros_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Lunes 08:30 am - 18 pm"))));
}

/***/ }),

/***/ "./components/Servicios.jsx":
/*!**********************************!*\
  !*** ./components/Servicios.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Servicios; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Servicios.module.css */ "./components/styles/Servicios.module.css");
/* harmony import */ var _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Servicios.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Servicios() {
  return __jsx("section", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.serviciosContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Servicios"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\xBFQu\xE9 es lo que hacemos?"), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut.")), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut.")), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut.")), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut.")), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut.")), __jsx("div", {
    className: _styles_Servicios_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/icons/icons8-medical-symbol-100.png",
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Servicio"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mollis dictum facilisis placerat congue ut."))));
}

/***/ }),

/***/ "./components/styles/Carousel.module.css":
/*!***********************************************!*\
  !*** ./components/styles/Carousel.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"carouselImg": "Carousel_carouselImg__1kvsW"
};


/***/ }),

/***/ "./components/styles/Especialidades.module.css":
/*!*****************************************************!*\
  !*** ./components/styles/Especialidades.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Especialidades_container__3tM2T",
	"itemContainer": "Especialidades_itemContainer__DgYnY",
	"title": "Especialidades_title__sL6-p",
	"description": "Especialidades_description__3MAM6"
};


/***/ }),

/***/ "./components/styles/Footer.module.css":
/*!*********************************************!*\
  !*** ./components/styles/Footer.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3vQKR",
	"iconsContainer": "Footer_iconsContainer__1FBuT",
	"icon": "Footer_icon__2nNEn"
};


/***/ }),

/***/ "./components/styles/Galeria.module.css":
/*!**********************************************!*\
  !*** ./components/styles/Galeria.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"galeriaContainer": "Galeria_galeriaContainer__2hsOA"
};


/***/ }),

/***/ "./components/styles/Header.module.css":
/*!*********************************************!*\
  !*** ./components/styles/Header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"icon": "Header_icon__kgNS5",
	"header": "Header_header__CSn5y"
};


/***/ }),

/***/ "./components/styles/Map.module.css":
/*!******************************************!*\
  !*** ./components/styles/Map.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"map": "Map_map__6R2HR"
};


/***/ }),

/***/ "./components/styles/MiniCardInfo.module.css":
/*!***************************************************!*\
  !*** ./components/styles/MiniCardInfo.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContainer": "MiniCardInfo_textContainer__3v18o",
	"icon": "MiniCardInfo_icon__2ibi5",
	"miniCardContainer": "MiniCardInfo_miniCardContainer__3FGYg"
};


/***/ }),

/***/ "./components/styles/NavBar.module.css":
/*!*********************************************!*\
  !*** ./components/styles/NavBar.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerNav": "NavBar_headerNav__XYPJh"
};


/***/ }),

/***/ "./components/styles/Nosotros.module.css":
/*!***********************************************!*\
  !*** ./components/styles/Nosotros.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nosotrosContainer": "Nosotros_nosotrosContainer__1GO_U",
	"horariosContainer": "Nosotros_horariosContainer__bSqBD",
	"nosotrosSection": "Nosotros_nosotrosSection__1IgKT",
	"textContainer": "Nosotros_textContainer__18cfx"
};


/***/ }),

/***/ "./components/styles/Servicios.module.css":
/*!************************************************!*\
  !*** ./components/styles/Servicios.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"serviciosContainer": "Servicios_serviciosContainer__JVBQi",
	"cardContainer": "Servicios_cardContainer__Xk0ar",
	"cardItem": "Servicios_cardItem__12fEz"
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.jsx");
/* harmony import */ var _components_CarouselContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CarouselContainer */ "./components/CarouselContainer.jsx");
/* harmony import */ var _components_Especialidades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Especialidades */ "./components/Especialidades.jsx");
/* harmony import */ var _components_Nosotros__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nosotros */ "./components/Nosotros.jsx");
/* harmony import */ var _components_Galeria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Galeria */ "./components/Galeria.jsx");
/* harmony import */ var _components_Servicios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Servicios */ "./components/Servicios.jsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Map */ "./components/Map.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_components_CarouselContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_components_Especialidades__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_Nosotros__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_Galeria__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_Servicios__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wisord/Documents/Trabajo/ThoracicCare/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/NavDropdown":
/*!**********************************************!*\
  !*** external "react-bootstrap/NavDropdown" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map