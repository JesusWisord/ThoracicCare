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

/***/ "./components/Card.jsx":
/*!*****************************!*\
  !*** ./components/Card.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Card.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Card({
  active
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1679272120", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]) + " " + "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/Card/surgeon.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1679272120", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1679272120", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Servicio"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1679272120", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem asperiores voluptatem culpa quidem. Quos aliquid debitis a commodi corrupti placeat repellendus eaque recusandae. Veritatis ex est laborum eos officiis!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1679272120",
    dynamic: [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'],
    __self: this
  }, `.card-container.__jsx-style-dynamic-selector{width:100%;padding-bottom:20px;display:grid;grid-template-rows:minmax(100px,120px) minmax(20px,100px) 1fr;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;justify-items:center;background-color:${active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'};}.card-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-height:100%;max-width:100%;margin-top:10px;}.card-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;margin:0 10px;}@media screen and (max-width:1000px){.card-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:16px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JTLEFBR3NCLEFBU0ssQUFLRyxBQUtGLFdBbEJHLElBbUJwQixDQVZlLEdBS0QsWUFiRCxBQVNHLEVBS2xCLFdBYmtFLEdBU2xFLDJEQVJ1Qiw0RUFDQSxxQkFFeEIsOENBQUMiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9DYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBhY3RpdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL0NhcmQvc3VyZ2Vvbi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDE+U2VydmljaW88L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnBvcmlzXG4gICAgICAgICAgZXhlcmNpdGF0aW9uZW0gYXNwZXJpb3JlcyB2b2x1cHRhdGVtIGN1bHBhIHF1aWRlbS4gUXVvcyBhbGlxdWlkXG4gICAgICAgICAgZGViaXRpcyBhIGNvbW1vZGkgY29ycnVwdGkgcGxhY2VhdCByZXBlbGxlbmR1cyBlYXF1ZSByZWN1c2FuZGFlLlxuICAgICAgICAgIFZlcml0YXRpcyBleCBlc3QgbGFib3J1bSBlb3Mgb2ZmaWNpaXMhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwMHB4LCAxMjBweCkgbWlubWF4KDIwcHgsIDEwMHB4KSAxZnI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7YWN0aXZlID8gJ3ZhcigtLWZpcnN0LWJyYW5kLWNvbG9yKTsnIDogJ3JnYmEoMCwxNDAsMTU3LC42KTsnfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciBpbWd7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1jb250YWluZXIgcHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgIC5jYXJkLWNvbnRhaW5lciBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */
/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Card.jsx */`));
}

/***/ }),

/***/ "./components/CardContainer.jsx":
/*!**************************************!*\
  !*** ./components/CardContainer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardContainer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/CardContainer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CardContainer() {
  return __jsx("div", {
    className: "jsx-4193563496" + " " + "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4193563496",
    __self: this
  }, ".card-container.jsx-4193563496{width:90vw;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;margin-left:50px;top:-150px;}@media screen and (max-width:700px){.card-container.jsx-4193563496{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2FyZENvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1MsQUFHb0IsQUFXSSxXQVZELEVBV2QsWUFWYSxhQUN3QixvQ0FDZCxtR0FDTCxrQkFDRCxpQkFDTixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2FyZENvbnRhaW5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICA8Q2FyZCBhY3RpdmUgLz5cbiAgICAgIDxDYXJkIC8+XG4gICAgICA8Q2FyZCAvPlxuICAgICAgPENhcmQgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAuY2FyZC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogLTE1MHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/CardContainer.jsx */"));
}

/***/ }),

/***/ "./components/Carrousel.jsx":
/*!**********************************!*\
  !*** ./components/Carrousel.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carrousel; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Carrousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const settings = {
  dots: false,
  accesibility: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};
function Carrousel() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2831996392" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/carrousel/carrousel-item-1.jpg",
    alt: "item-1",
    align: "center",
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2831996392" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2831996392" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/carrousel/carrousel-item-2.jpg",
    alt: "item-1",
    align: "center",
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2831996392" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2831996392" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/carrousel/carrousel-item-3.jpg",
    alt: "item-1",
    align: "center",
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2831996392" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2831996392" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/carrousel/carrousel-item-4.jpg",
    alt: "item-1",
    align: "center",
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2831996392" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-2831996392",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2831996392",
    __self: this
  }, ".image-container.jsx-2831996392{max-width:100vw;position:relative;}.image-container.jsx-2831996392 img.jsx-2831996392{width:100%;color:black;object-fit:cover;-webkit-filter:brightness(0.5);filter:brightness(0.5);}.image-container.jsx-2831996392 .text-block.jsx-2831996392{width:80%;position:absolute;font-size:36px;top:10px;left:100px;color:white;padding:20px;}.text-block.jsx-2831996392 p{font-size:28px;padding-top:10px;}@media screen and (max-width:700px){.image-container.jsx-2831996392 .text-block.jsx-2831996392{font-size:28px;left:50px;}.image-container.jsx-2831996392 .text-block.jsx-2831996392 p.jsx-2831996392{font-size:22px;}@media screen and (max-width:500px){.image-container.jsx-2831996392 .text-block.jsx-2831996392{font-size:24px;left:50px;}.image-container.jsx-2831996392 .text-block.jsx-2831996392 p.jsx-2831996392{font-size:18px;}}@media screen and (max-width:450px){.image-container.jsx-2831996392 .text-block.jsx-2831996392{font-size:18px;left:50px;}.image-container.jsx-2831996392 .text-block.jsx-2831996392 p.jsx-2831996392{font-size:12px;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2Fycm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRVMsQUFHMkIsQUFJTCxBQU1ELEFBU0ssQUFLRSxBQUlBLEFBSUEsQUFJQSxBQUtBLEFBSUEsVUFsQ0MsQ0FOTixJQWVLLEFBS0wsQUFJWixBQUlZLEFBSVosQUFLWSxBQUlaLENBN0NrQixPQUtELEVBb0JqQixBQVFBLEFBU0EsR0EvQmUsSUFTakIsRUFuQkEsTUFLeUIsR0FNZCxTQUNFLFdBQ0MsWUFDQyxhQUNmLE1BVEEiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9DYXJyb3VzZWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIGFjY2VzaWJpbGl0eTogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhdXRvcGxheTogdHJ1ZSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJyb3VzZWwoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2Fycm91c2VsL2NhcnJvdXNlbC1pdGVtLTEuanBnXCIgYWx0PVwiaXRlbS0xXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRXN0YW1vcyBjb21wcm9tZXRpZG9zIGNvbiBsYSBzYWx1ZCBkZSBudWVzdHJvcyBwYWNpZW50ZXNcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE51ZXN0cm8gaW50ZXLDqXMgZXMgb2ZyZWNlciB0cmF0YW1pZW50b3MgcXVlIHNhdGlzZmFnYW4gc3VzIGV4cGVjdGF0aXZhcyBcbiAgICAgICAgICAgICAgICBjb24gdHJhdGFtaWVudG9zIGRlIHZhbmd1YXJkaWFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJyb3VzZWwvY2Fycm91c2VsLWl0ZW0tMi5qcGdcIiBhbHQ9XCJpdGVtLTFcIiBhbGlnbj1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICBFc3RhbW9zIGNvbXByb21ldGlkb3MgY29uIGxhIHNhbHVkIGRlIG51ZXN0cm9zIHBhY2llbnRlc1xuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTnVlc3RybyBpbnRlcsOpcyBlcyBvZnJlY2VyIHRyYXRhbWllbnRvcyBxdWUgc2F0aXNmYWdhbiBzdXMgZXhwZWN0YXRpdmFzIFxuICAgICAgICAgICAgICAgIGNvbiB0cmF0YW1pZW50b3MgZGUgdmFuZ3VhcmRpYVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcnJvdXNlbC9jYXJyb3VzZWwtaXRlbS0zLmpwZ1wiIGFsdD1cIml0ZW0tMVwiIGFsaWduPVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEVzdGFtb3MgY29tcHJvbWV0aWRvcyBjb24gbGEgc2FsdWQgZGUgbnVlc3Ryb3MgcGFjaWVudGVzXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBOdWVzdHJvIGludGVyw6lzIGVzIG9mcmVjZXIgdHJhdGFtaWVudG9zIHF1ZSBzYXRpc2ZhZ2FuIHN1cyBleHBlY3RhdGl2YXMgXG4gICAgICAgICAgICAgICAgY29uIHRyYXRhbWllbnRvcyBkZSB2YW5ndWFyZGlhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2Fycm91c2VsL2NhcnJvdXNlbC1pdGVtLTQuanBnXCIgYWx0PVwiaXRlbS0xXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRXN0YW1vcyBjb21wcm9tZXRpZG9zIGNvbiBsYSBzYWx1ZCBkZSBudWVzdHJvcyBwYWNpZW50ZXNcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE51ZXN0cm8gaW50ZXLDqXMgZXMgb2ZyZWNlciB0cmF0YW1pZW50b3MgcXVlIHNhdGlzZmFnYW4gc3VzIGV4cGVjdGF0aXZhcyBcbiAgICAgICAgICAgICAgICBjb24gdHJhdGFtaWVudG9zIGRlIHZhbmd1YXJkaWFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbGlkZXI+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIgLnRleHQtYmxvY2t7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ibG9jayA6Z2xvYmFsKHApe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgLnRleHQtYmxvY2t7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIC50ZXh0LWJsb2NrIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgLnRleHQtYmxvY2t7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIC50ZXh0LWJsb2NrIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgLmltYWdlLWNvbnRhaW5lciAudGV4dC1ibG9ja3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgLnRleHQtYmxvY2sgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Carrousel.jsx */"));
}

/***/ }),

/***/ "./components/Evidencias.jsx":
/*!***********************************!*\
  !*** ./components/Evidencias.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Evidencias; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Evidencias.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Evidencias() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "| Evidencias"), __jsx("div", {
    className: "jsx-2359009350" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/evidence/evidence-1.jpg",
    alt: "",
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-2.jpg",
    alt: "",
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-3.jpg",
    alt: "",
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-4.jpg",
    alt: "",
    className: "jsx-2359009350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2359009350",
    __self: this
  }, "section.jsx-2359009350{margin:50px 0;}.image-container.jsx-2359009350{width:100vw;padding-left:5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:scroll;}img.jsx-2359009350{height:350px;margin-right:20px;border-radius:25px;}@media screen and (max-width:1100px){img.jsx-2359009350{height:250px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvRXZpZGVuY2lhcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJTLEFBRzJCLEFBR0YsQUFNQyxBQU1FLFlBWEUsQ0FNQyxBQU1sQixDQWZGLGVBSWUsRUFNTSxtQkFDckIscURBTmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd2lzb3JkL0RvY3VtZW50cy9UcmFiYWpvL1Rob3JhY2ljQ2FyZS9jb21wb25lbnRzL0V2aWRlbmNpYXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZpZGVuY2lhcygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB8IEV2aWRlbmNpYXNcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9ldmlkZW5jZS9ldmlkZW5jZS0xLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIvZXZpZGVuY2UvZXZpZGVuY2UtMi5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2V2aWRlbmNlL2V2aWRlbmNlLTMuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9ldmlkZW5jZS9ldmlkZW5jZS00LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Evidencias.jsx */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Footer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3737122598" + " " + "logo-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/logoCirculo.png",
    alt: "",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3737122598" + " " + "sitios-interes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Sitios de Inter\xE9s"), __jsx("ul", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "T\xE9rminos y condiciones")), __jsx("li", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Acerca de")), __jsx("li", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Servicios")), __jsx("li", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Sucursales")), __jsx("li", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Aviso de Privacidad")))), __jsx("div", {
    className: "jsx-3737122598" + " " + "follow-us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "S\xEDguenos en redes"), __jsx("div", {
    className: "jsx-3737122598" + " " + "social-media-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.reactIcon
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrTwitter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrInstagram"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "jsx-3737122598" + " " + "direccion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Direcci\xF3n"), __jsx("p", {
    className: "jsx-3737122598",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum sit repellendus alias debitis provident nesciunt, quos ipsum nulla fugit magnam tempora eum corporis, soluta esse! Aperiam, illum ipsum. Corrupti!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3737122598",
    __self: this
  }, "footer.jsx-3737122598{height:300px;background-color:var(--second-brand-color);display:grid;grid-template-columns:1fr 1fr 1fr 1fr;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;padding-top:30px;color:white;}.logo-container.jsx-3737122598{height:250px;}.logo-container.jsx-3737122598 img.jsx-3737122598{height:100%;}.social-media-container.jsx-3737122598{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}ul.jsx-3737122598{list-style:none;margin:0;padding:0;}li.jsx-3737122598{padding-bottom:10px;}h2.jsx-3737122598{border-bottom:1px solid white;width:80%;}a.jsx-3737122598{-webkit-text-decoration:none;text-decoration:none;color:white;}.direccion.jsx-3737122598{margin:0 20px;}@media screen and (max-width:1100px){h2.jsx-3737122598{font-size:24px;}}@media screen and (max-width:700px){.logo-container.jsx-3737122598 img.jsx-3737122598{height:80%;}}@media screen and (max-width:700px){.logo-container.jsx-3737122598 img.jsx-3737122598{height:60%;}h2.jsx-3737122598{font-size:16px;}}@media screen and (max-width:550px){footer.jsx-3737122598{grid-template-rows:repeat(2,minmax(100px,150px));grid-template-columns:1fr 1fr;height:auto;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-gap:0;}h2.jsx-3737122598{font-size:14px;}p.jsx-3737122598,a.jsx-3737122598{font-size:10px;}.sitios-interes.jsx-3737122598 h2.jsx-3737122598{border-bottom:0;border-right:solid 1px white;}.sitios-interes.jsx-3737122598{display:grid;padding-right:20px;grid-template-columns:1fr 1fr;}.logo-container.jsx-3737122598{height:100%;}.logo-container.jsx-3737122598 img.jsx-3737122598{height:100%;}}@media screen and (max-width:350px){footer.jsx-3737122598{grid-template-rows:repeat(4,minmax(100px,150px));grid-template-columns:1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRFMsQUFHMEIsQUFTQSxBQUloQixBQUVhLEFBS00sQUFLSSxBQUdVLEFBSVQsQUFJUCxBQUlHLEFBS0osQUFLQSxBQUdJLEFBS29DLEFBUXBDLEFBR0EsQUFHQyxBQUlILEFBS0QsQUFHQSxBQUt1QyxVQXpFeEMsQ0E4QmIsQUFLQSxDQXRDRixBQXFFRSxBQUdBLENBcEYyQyxBQVM3QyxBQW1FdUIsQ0F4Q3ZCLENBSUUsQUFhQSxBQWFBLEFBR0EsQ0FqRFMsQUFvRHNCLElBL0NqQyxLQUpZLEtBT0EsRUFpRHNCLEdBdkRsQyxLQU9BLEtBNENFLElBZmdDLEFBK0JKLENBekRqQixNQS9CRSxNQWdDZixBQTZDRSxPQTVFc0MsTUF3RnRDLElBL0JjLEtBM0NlLE9BNENOLGdCQXpEUCxLQTBESyw0RUF6REosaUJBQ0wsQUF5REMsRUE3Q2YsU0E4Q0UsQ0F6REYiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgR3JUd2l0dGVyLCBHckluc3RhZ3JhbSwgR3JGYWNlYm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvQ2lyY3Vsby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRpb3MtaW50ZXJlc1wiPlxuICAgICAgICAgIDxoMj5TaXRpb3MgZGUgSW50ZXLDqXM8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5BY2VyY2EgZGU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPlNlcnZpY2lvczwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+U3VjdXJzYWxlczwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+QXZpc28gZGUgUHJpdmFjaWRhZDwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGxvdy11c1wiPlxuICAgICAgICAgIDxoMj5Tw61ndWVub3MgZW4gcmVkZXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnJlYWN0SWNvbiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyRmFjZWJvb2sgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIj5cbiAgICAgICAgICAgICAgICA8R3JJbnN0YWdyYW0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWNjaW9uXCI+XG4gICAgICAgICAgPGgyPkRpcmVjY2nDs248L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaVxuICAgICAgICAgICAgaGFydW0gc2l0IHJlcGVsbGVuZHVzIGFsaWFzIGRlYml0aXMgcHJvdmlkZW50IG5lc2NpdW50LCBxdW9zXG4gICAgICAgICAgICBpcHN1bSBudWxsYSBmdWdpdCBtYWduYW0gdGVtcG9yYSBldW0gY29ycG9yaXMsIHNvbHV0YSBlc3NlIVxuICAgICAgICAgICAgQXBlcmlhbSwgaWxsdW0gaXBzdW0uIENvcnJ1cHRpIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1icmFuZC1jb2xvcik7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogdG9wO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpcmVjY2lvbntcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAubG9nby1jb250YWluZXIgaW1ne1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciBpbWd7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgICAgICAgIGZvb3RlcntcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwLCBhe1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0aW9zLWludGVyZXMgaDJ7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGlvcy1pbnRlcmVze1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nby1jb250YWluZXJ7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciBpbWd7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgICAgICAgIGZvb3RlcntcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Footer.jsx */"));
}

/***/ }),

/***/ "./components/Footer.module.css":
/*!**************************************!*\
  !*** ./components/Footer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reactIcon": "Footer_reactIcon__7980w"
};


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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    id: "header",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-876705575" + " " + "top-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-876705575" + " " + "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "(52) 55 054 548 064")), __jsx("div", {
    className: "jsx-876705575" + " " + "social-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.reactIcon
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrTwitter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrInstagram"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })))), __jsx("a", {
    href: "/",
    className: "jsx-876705575" + " " + "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Cita")), __jsx("div", {
    className: "jsx-876705575" + " " + "bottom-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/logoHorizontal.jpg",
    alt: "Logo Horizontal",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("nav", {
    className: "jsx-876705575" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#header",
    className: "jsx-876705575" + " " + "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Inicio")), __jsx("li", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#servicios",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, "Servicios")), __jsx("li", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#nosotros",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "Nosotros")), __jsx("li", {
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contacto",
    className: "jsx-876705575",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Contacto")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "876705575",
    __self: this
  }, "header.jsx-876705575{height:100%;}.button.jsx-876705575{height:100%;background-color:#C90D37;color:white;border:none;cursor:pointer;width:120px;font-size:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;-webkit-text-decoration:none;text-decoration:none;}.top-section.jsx-876705575{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:50px;color:white;background-color:var(--second-brand-color);}.social-media.jsx-876705575{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.bottom-section.jsx-876705575{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.bottom-section.jsx-876705575 img.jsx-876705575{height:90px;display:inline;}.menu.jsx-876705575{width:100%;}.menu.jsx-876705575 ul.jsx-876705575{height:100%;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style:none;}li.jsx-876705575 a.jsx-876705575{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;color:black;font-weight:500;cursor:pointer;}li.jsx-876705575 a.active.jsx-876705575{background-color:var(--first-brand-color);color:white;}li.jsx-876705575{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;color:black;width:150px;}@media screen and (max-width:1100px){.bottom-section.jsx-876705575 img.jsx-876705575{height:60px;}.button.jsx-876705575{font-size:24px;}li.jsx-876705575{width:auto;min-width:100px;}}@media screen and (max-width:800px){.bottom-section.jsx-876705575 img.jsx-876705575{height:40px;}}@media screen and (max-width:700px){.bottom-section.jsx-876705575 img.jsx-876705575{height:30px;}}@media screen and (max-width:600px){nav.jsx-876705575{display:none;}.top-section.jsx-876705575{padding-left:10px;}.bottom-section.jsx-876705575{background-color:var(--second-brand-color);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ1MsQUFHdUIsQUFHQSxBQWNBLEFBU0MsQUFLQSxBQUdELEFBSUQsQUFHQyxBQVFBLEFBVzhCLEFBSTdCLEFBU0MsQUFHRyxBQUdKLEFBTUMsQUFLQSxBQUtDLEFBR0ssQUFHeUIsV0E5RC9DLEFBeUNvQixDQS9FcEIsQUFHMkIsQUFjWixBQWlCRSxBQU9OLEFBUUUsQUF3QlgsQUFZQSxBQUtBLENBS0EsRUFuQkEsR0FzQkEsR0F4RFUsRUFRRyxJQWZmLEFBNkNFLElBckNhLE1BdkNELEtBd0RBLENBeUNaLE1BaEdZLEtBd0RkLE9BdkRpQixhQW9CSSxBQUtyQixBQWlDeUIsRUF6RFgsVUFXaUIsRUFWZCxTQTJDUSxNQTFDVixFQW1DaUIsOERBakJsQixNQXNDTyxJQXZEQSxFQWtCckIsaUJBd0JxQixhQWpDQSxXQTBCSCxnQkFDbEIsOEJBb0J5QixJQXZEQSxtQkEwQ0YsQUFjVCxZQUNBLENBaERNLFdBaURwQixPQWhEYyxZQUMrQixPQWdDL0IsWUFDSSxnQkFDRCxFQTVDTCxNQVdaLElBVnVCLEdBNEN2QiwrQ0EzQ0EiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgR3JUd2l0dGVyLCBHckluc3RhZ3JhbSwgR3JGYWNlYm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPig1MikgNTUgMDU0IDU0OCAwNjQ8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5yZWFjdEljb24gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiPlxuICAgICAgICAgICAgICAgIDxHckZhY2Vib29rIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiPlxuICAgICAgICAgICAgICAgIDxHclR3aXR0ZXIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdySW5zdGFncmFtIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj1cIi9cIj5DaXRhPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tc2VjdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvSG9yaXpvbnRhbC5qcGdcIiBhbHQ9XCJMb2dvIEhvcml6b250YWxcIiAvPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNoZWFkZXJcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5JbmljaW88L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljaW9zXCI+U2VydmljaW9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI25vc290cm9zXCI+Tm9zb3Ryb3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdG9cIj5Db250YWN0bzwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIGhlYWRlcntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbntcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M5MEQzNztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudG9wLXNlY3Rpb257XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1icmFuZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1tZWRpYXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tc2VjdGlvbntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20tc2VjdGlvbiBpbWd7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgICAgICAubWVudXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWVudSB1bHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBhIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYS5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWJyYW5kLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgIC5ib3R0b20tc2VjdGlvbiBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuYm90dG9tLXNlY3Rpb24gaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuYm90dG9tLXNlY3Rpb24gaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1zZWN0aW9ue1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm90dG9tLXNlY3Rpb257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtYnJhbmQtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Header.jsx */"));
}

/***/ }),

/***/ "./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reactIcon": "Header_reactIcon__1GF9r"
};


/***/ }),

/***/ "./components/ListItem.jsx":
/*!*********************************!*\
  !*** ./components/ListItem.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/ListItem.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ListItem({
  listText
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2738549577",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-2738549577",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "40",
    height: "40",
    rx: "20",
    fill: "#008C9D",
    className: "jsx-2738549577",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M34.5606 11.4236C33.9749 10.8378 33.0252 10.8378 32.4393 11.4236L14.4684 29.3947L7.56065 22.487C6.97489 21.9012 6.0252 21.9012 5.43932 22.487C4.8535 23.0728 4.8535 24.0224 5.43932 24.6083L13.4077 32.5766C13.9933 33.1623 14.9437 33.1619 15.529 32.5766L34.5606 13.5449C35.1465 12.9592 35.1464 12.0094 34.5606 11.4236Z",
    fill: "white",
    className: "jsx-2738549577",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "jsx-2738549577",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, listText || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2738549577",
    __self: this
  }, "div.jsx-2738549577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}svg.jsx-2738549577{height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTGlzdEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFTLEFBRzBCLEFBSUQsWUFDZCw4REFKcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEl0ZW0oe2xpc3RUZXh0fSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiByeD1cIjIwXCIgZmlsbD1cIiMwMDhDOURcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzQuNTYwNiAxMS40MjM2QzMzLjk3NDkgMTAuODM3OCAzMy4wMjUyIDEwLjgzNzggMzIuNDM5MyAxMS40MjM2TDE0LjQ2ODQgMjkuMzk0N0w3LjU2MDY1IDIyLjQ4N0M2Ljk3NDg5IDIxLjkwMTIgNi4wMjUyIDIxLjkwMTIgNS40MzkzMiAyMi40ODdDNC44NTM1IDIzLjA3MjggNC44NTM1IDI0LjAyMjQgNS40MzkzMiAyNC42MDgzTDEzLjQwNzcgMzIuNTc2NkMxMy45OTMzIDMzLjE2MjMgMTQuOTQzNyAzMy4xNjE5IDE1LjUyOSAzMi41NzY2TDM0LjU2MDYgMTMuNTQ0OUMzNS4xNDY1IDEyLjk1OTIgMzUuMTQ2NCAxMi4wMDk0IDM0LjU2MDYgMTEuNDIzNlpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHA+e2xpc3RUZXh0IHx8ICdMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4nfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/ListItem.jsx */"));
}

/***/ }),

/***/ "./components/MiniCard.jsx":
/*!*********************************!*\
  !*** ./components/MiniCard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function MiniCard() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2236885984" + " " + "mini-card-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2236885984" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Card/pill.png",
    alt: "Mini-card",
    className: "jsx-2236885984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2236885984" + " " + "text-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2236885984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Calidad"), __jsx("p", {
    className: "jsx-2236885984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Utilizamos material y medicamentos de primera calidad, aunados a los m\xE9todos m\xE1s modernos y m\xE1xima seguridad."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2236885984",
    __self: this
  }, ".mini-card-item.jsx-2236885984{min-height:150px;max-width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0px 4px 10px rgba(0,0,0,0.25);}.image-container.jsx-2236885984{background:linear-gradient(to right,rgba(29,139,159,1) 0%,rgba(0,141,157,1) 50%,rgba(52,91,131,1) 50%);height:90%;display:grid;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-2236885984{height:100px;margin:10px;}.text-container.jsx-2236885984{margin-left:10px;}@media screen and (max-width:1100px){h1.jsx-2236885984{font-size:24px;}p.jsx-2236885984{font-size:14px;}}@media screen and (max-width:700px){.mini-card-item.jsx-2236885984{display:block;}}@media screen and (max-width:500px){img.jsx-2236885984{height:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CUyxBQUc4QixBQU95RixBQU83RixBQUlJLEFBSUEsQUFHQSxBQUtELEFBS0YsWUFDZCxDQXJCWSxDQWdCWixDQVJBLEFBR0EsRUF6QmdCLEFBa0JsQixRQUhBLFFBZGUsc0VBTUYsSUFMUSxPQU1OLGFBQ1UseUVBTnFCLDBCQU96QixlQU5yQiw4RUFPQSIsImZpbGUiOiIvVXNlcnMvd2lzb3JkL0RvY3VtZW50cy9UcmFiYWpvL1Rob3JhY2ljQ2FyZS9jb21wb25lbnRzL01pbmlDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbmlDYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmktY2FyZC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvQ2FyZC9waWxsLnBuZ1wiIGFsdD1cIk1pbmktY2FyZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgQ2FsaWRhZFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVdGlsaXphbW9zIG1hdGVyaWFsIHkgbWVkaWNhbWVudG9zIGRlIHByaW1lcmEgY2FsaWRhZCxcbiAgICAgICAgICAgIGF1bmFkb3MgYSBsb3MgbcOpdG9kb3MgbcOhcyBtb2Rlcm5vcyB5IG3DoXhpbWEgc2VndXJpZGFkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1pbmktY2FyZC1pdGVte1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyOSwxMzksMTU5LDEpIDAlLCByZ2JhKDAsMTQxLDE1NywxKSA1MCUsIHJnYmEoNTIsOTEsMTMxLDEpIDUwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgLm1pbmktY2FyZC1pdGVte1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCard.jsx */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MiniCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniCard */ "./components/MiniCard.jsx");
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCardContainer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MiniCardContainer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3986968067" + " " + "mini-card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_MiniCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(_MiniCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(_MiniCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx(_MiniCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3986968067",
    __self: this
  }, ".mini-card-container.jsx-3986968067{width:80vw;margin:50px auto 0 auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmRDb250YWluZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFTLEFBR3NCLFdBQ2Esd0JBQ1gsYUFDaUIsOEJBQ2hCLGNBQ08scUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmRDb250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNaW5pQ2FyZCBmcm9tICcuL01pbmlDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWluaUNhcmRDb250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaS1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICA8TWluaUNhcmQgLz5cbiAgICAgICAgPE1pbmlDYXJkIC8+XG4gICAgICAgIDxNaW5pQ2FyZCAvPlxuICAgICAgICA8TWluaUNhcmQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLm1pbmktY2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCardContainer.jsx */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "./components/ListItem.jsx");
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/components/Servicios.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Servicios() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    id: "Servicios",
    className: "jsx-1696766082" + " " + "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1696766082" + " " + "especialidades",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1696766082",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "| Especialidades"), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1696766082" + " " + "servicios",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1696766082",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "| Servicios"), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1696766082",
    __self: this
  }, "section.jsx-1696766082{width:90vw;margin:100px auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvU2VydmljaW9zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHd0IsV0FDTyxrQkFDTCxhQUNpQiw4QkFDaEIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9TZXJ2aWNpb3MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljaW9zKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIiBpZD1cIlNlcnZpY2lvc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzcGVjaWFsaWRhZGVzXCI+XG4gICAgICAgICAgPGgxPnwgRXNwZWNpYWxpZGFkZXM8L2gxPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNpb3NcIj5cbiAgICAgICAgICA8aDE+fCBTZXJ2aWNpb3M8L2gxPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICAgIDxMaXN0SXRlbSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc2VjdGlvbntcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Servicios.jsx */"));
}

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
/* harmony import */ var _components_Carrousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Carrousel */ "./components/Carrousel.jsx");
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardContainer */ "./components/CardContainer.jsx");
/* harmony import */ var _components_MiniCardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MiniCardContainer */ "./components/MiniCardContainer.jsx");
/* harmony import */ var _components_Servicios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Servicios */ "./components/Servicios.jsx");
/* harmony import */ var _components_Evidencias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Evidencias */ "./components/Evidencias.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/wisord/Documents/Trabajo/ThoracicCare/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_components_Carrousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_components_MiniCardContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_components_Servicios__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_components_Evidencias__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map