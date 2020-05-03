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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456771138", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]) + " " + "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/Card/surgeon.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456771138", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456771138", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Servicio"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456771138", [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);']]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem asperiores voluptatem culpa quidem. Quos aliquid debitis a commodi corrupti placeat repellendus eaque recusandae. Veritatis ex est laborum eos officiis!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1456771138",
    dynamic: [active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'],
    __self: this
  }, `.card-container.__jsx-style-dynamic-selector{width:300px;height:450px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:${active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'};}.card-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-height:120px;max-width:120px;margin-top:10px;}.card-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{text-align:justify;margin:0 10px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JTLEFBR3VCLEFBUUssQUFLRSxZQVpOLEtBUUcsRUFLRixNQVpELFFBUUcsQUFLbEIsZ0JBSkEsa0RBUndCLDhFQUNILDZGQUV0Qiw4Q0FBQyIsImZpbGUiOiIvVXNlcnMvd2lzb3JkL0RvY3VtZW50cy9UcmFiYWpvL1Rob3JhY2ljQ2FyZS9jb21wb25lbnRzL0NhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGFjdGl2ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvQ2FyZC9zdXJnZW9uLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMT5TZXJ2aWNpbzwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29ycG9yaXNcbiAgICAgICAgICBleGVyY2l0YXRpb25lbSBhc3BlcmlvcmVzIHZvbHVwdGF0ZW0gY3VscGEgcXVpZGVtLiBRdW9zIGFsaXF1aWRcbiAgICAgICAgICBkZWJpdGlzIGEgY29tbW9kaSBjb3JydXB0aSBwbGFjZWF0IHJlcGVsbGVuZHVzIGVhcXVlIHJlY3VzYW5kYWUuXG4gICAgICAgICAgVmVyaXRhdGlzIGV4IGVzdCBsYWJvcnVtIGVvcyBvZmZpY2lpcyFcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHthY3RpdmUgPyAndmFyKC0tZmlyc3QtYnJhbmQtY29sb3IpOycgOiAncmdiYSgwLDE0MCwxNTcsLjYpOyd9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIGltZ3tcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */
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
    className: "jsx-1992215078" + " " + "card-container",
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
    id: "1992215078",
    __self: this
  }, ".card-container.jsx-1992215078{width:90vw;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;margin-left:50px;top:-50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2FyZENvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1MsQUFHb0IsV0FDRixTQUNJLDBFQUNVLG1HQUNMLGtCQUNELGlCQUNQLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9DYXJkQ29udGFpbmVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQ29udGFpbmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxDYXJkIGFjdGl2ZSAvPlxuICAgICAgPENhcmQgLz5cbiAgICAgIDxDYXJkIC8+XG4gICAgICA8Q2FyZCAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgIC5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogLTUwcHg7XG4gICAgICB9XG4gICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/CardContainer.jsx */"));
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
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1818414481" + " " + "image-container",
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
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1818414481" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1818414481" + " " + "image-container",
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
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1818414481" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1818414481" + " " + "image-container",
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
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1818414481" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia")))), __jsx("div", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1818414481" + " " + "image-container",
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
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1818414481" + " " + "text-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Estamos comprometidos con la salud de nuestros pacientes"), __jsx("p", {
    className: "jsx-1818414481",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Nuestro inter\xE9s es ofrecer tratamientos que satisfagan sus expectativas con tratamientos de vanguardia"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1818414481",
    __self: this
  }, ".image-container.jsx-1818414481{max-width:100vw;height:500px;position:relative;}.image-container.jsx-1818414481 img.jsx-1818414481{width:100%;color:black;object-fit:cover;-webkit-filter:brightness(0.5);filter:brightness(0.5);}.image-container.jsx-1818414481 .text-block.jsx-1818414481{width:80%;position:absolute;font-size:36px;top:10px;left:100px;color:white;padding:20px;}.text-block.jsx-1818414481 p{font-size:28px;padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvQ2Fycm91c2VsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRVMsQUFHMkIsQUFLTCxBQU1ELEFBU0ssVUFSRyxDQU5OLElBZUssQ0FwQkosT0FNSSxLQU1GLENBWEcsR0FvQnBCLFFBZHlCLEdBTWQsSUFYWCxLQVlhLFdBQ0MsWUFDQyxhQUNmLE1BVEEiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9DYXJyb3VzZWwuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIGFjY2VzaWJpbGl0eTogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhdXRvcGxheTogdHJ1ZSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJyb3VzZWwoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2Fycm91c2VsL2NhcnJvdXNlbC1pdGVtLTEuanBnXCIgYWx0PVwiaXRlbS0xXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRXN0YW1vcyBjb21wcm9tZXRpZG9zIGNvbiBsYSBzYWx1ZCBkZSBudWVzdHJvcyBwYWNpZW50ZXNcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE51ZXN0cm8gaW50ZXLDqXMgZXMgb2ZyZWNlciB0cmF0YW1pZW50b3MgcXVlIHNhdGlzZmFnYW4gc3VzIGV4cGVjdGF0aXZhcyBcbiAgICAgICAgICAgICAgICBjb24gdHJhdGFtaWVudG9zIGRlIHZhbmd1YXJkaWFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJyb3VzZWwvY2Fycm91c2VsLWl0ZW0tMi5qcGdcIiBhbHQ9XCJpdGVtLTFcIiBhbGlnbj1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICBFc3RhbW9zIGNvbXByb21ldGlkb3MgY29uIGxhIHNhbHVkIGRlIG51ZXN0cm9zIHBhY2llbnRlc1xuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTnVlc3RybyBpbnRlcsOpcyBlcyBvZnJlY2VyIHRyYXRhbWllbnRvcyBxdWUgc2F0aXNmYWdhbiBzdXMgZXhwZWN0YXRpdmFzIFxuICAgICAgICAgICAgICAgIGNvbiB0cmF0YW1pZW50b3MgZGUgdmFuZ3VhcmRpYVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcnJvdXNlbC9jYXJyb3VzZWwtaXRlbS0zLmpwZ1wiIGFsdD1cIml0ZW0tMVwiIGFsaWduPVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEVzdGFtb3MgY29tcHJvbWV0aWRvcyBjb24gbGEgc2FsdWQgZGUgbnVlc3Ryb3MgcGFjaWVudGVzXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBOdWVzdHJvIGludGVyw6lzIGVzIG9mcmVjZXIgdHJhdGFtaWVudG9zIHF1ZSBzYXRpc2ZhZ2FuIHN1cyBleHBlY3RhdGl2YXMgXG4gICAgICAgICAgICAgICAgY29uIHRyYXRhbWllbnRvcyBkZSB2YW5ndWFyZGlhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2Fycm91c2VsL2NhcnJvdXNlbC1pdGVtLTQuanBnXCIgYWx0PVwiaXRlbS0xXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRXN0YW1vcyBjb21wcm9tZXRpZG9zIGNvbiBsYSBzYWx1ZCBkZSBudWVzdHJvcyBwYWNpZW50ZXNcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE51ZXN0cm8gaW50ZXLDqXMgZXMgb2ZyZWNlciB0cmF0YW1pZW50b3MgcXVlIHNhdGlzZmFnYW4gc3VzIGV4cGVjdGF0aXZhcyBcbiAgICAgICAgICAgICAgICBjb24gdHJhdGFtaWVudG9zIGRlIHZhbmd1YXJkaWFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbGlkZXI+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciAudGV4dC1ibG9ja3tcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJsb2NrIDpnbG9iYWwocCl7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Carrousel.jsx */"));
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
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "| Evidencias"), __jsx("div", {
    className: "jsx-745316935" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/evidence/evidence-1.jpg",
    alt: "",
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-2.jpg",
    alt: "",
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-3.jpg",
    alt: "",
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/evidence/evidence-4.jpg",
    alt: "",
    className: "jsx-745316935",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "745316935",
    __self: this
  }, "section.jsx-745316935{margin:50px 0;}.image-container.jsx-745316935{width:90vw;margin-left:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:scroll;}img.jsx-745316935{height:350px;margin-right:20px;border-radius:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvRXZpZGVuY2lhcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJTLEFBRzJCLEFBR0gsQUFNRSxXQUxLLEVBTUEsQ0FUcEIsZUFJZSxFQU1NLG1CQUNyQixxREFOa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvRXZpZGVuY2lhcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmlkZW5jaWFzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHwgRXZpZGVuY2lhc1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2V2aWRlbmNlL2V2aWRlbmNlLTEuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9ldmlkZW5jZS9ldmlkZW5jZS0yLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIvZXZpZGVuY2UvZXZpZGVuY2UtMy5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2V2aWRlbmNlL2V2aWRlbmNlLTQuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZS1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Evidencias.jsx */"));
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
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3196175142" + " " + "logo-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/logoCirculo.png",
    alt: "",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3196175142" + " " + "sitios-interes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Sitios de Inter\xE9s"), __jsx("ul", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "T\xE9rminos y condiciones")), __jsx("li", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Acerca de")), __jsx("li", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Servicios")), __jsx("li", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Sucursales")), __jsx("li", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Aviso de Privacidad")))), __jsx("div", {
    className: "jsx-3196175142" + " " + "follow-us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "S\xEDguenos en redes"), __jsx("div", {
    className: "jsx-3196175142" + " " + "social-media-container",
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
    className: "jsx-3196175142",
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
    className: "jsx-3196175142",
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
    className: "jsx-3196175142",
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
    className: "jsx-3196175142" + " " + "direccion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Direcci\xF3n"), __jsx("p", {
    className: "jsx-3196175142",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum sit repellendus alias debitis provident nesciunt, quos ipsum nulla fugit magnam tempora eum corporis, soluta esse! Aperiam, illum ipsum. Corrupti!"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3196175142",
    __self: this
  }, "footer.jsx-3196175142{height:300px;background-color:var(--second-brand-color);display:grid;grid-template-columns:1fr 1fr 1fr 1fr;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;padding-top:30px;color:white;}.logo-container.jsx-3196175142{height:250px;}.logo-container.jsx-3196175142 img.jsx-3196175142{height:100%;}.social-media-container.jsx-3196175142{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}ul.jsx-3196175142{list-style:none;}li.jsx-3196175142{padding-bottom:10px;}h2.jsx-3196175142{border-bottom:1px solid white;width:80%;}a.jsx-3196175142{-webkit-text-decoration:none;text-decoration:none;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRFMsQUFHMEIsQUFTQSxBQUloQixBQUVhLEFBS00sQUFHSSxBQUdVLEFBSVQsVUFkUixFQUhmLENBWjZDLEFBUzdDLEdBV0EsSUFHQSxVQUdZLFVBQ1osVUFHYSxNQTdCRSxNQThCZixPQTdCd0MsZUFjVCx1QkFiYixpRkFDQyxpQkFDTCxFQVlkLFVBWEEiLCJmaWxlIjoiL1VzZXJzL3dpc29yZC9Eb2N1bWVudHMvVHJhYmFqby9UaG9yYWNpY0NhcmUvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgR3JUd2l0dGVyLCBHckluc3RhZ3JhbSwgR3JGYWNlYm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvQ2lyY3Vsby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRpb3MtaW50ZXJlc1wiPlxuICAgICAgICAgIDxoMj5TaXRpb3MgZGUgSW50ZXLDqXM8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5BY2VyY2EgZGU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPlNlcnZpY2lvczwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+U3VjdXJzYWxlczwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+QXZpc28gZGUgUHJpdmFjaWRhZDwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbGxvdy11c1wiPlxuICAgICAgICAgIDxoMj5Tw61ndWVub3MgZW4gcmVkZXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnJlYWN0SWNvbiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyRmFjZWJvb2sgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIj5cbiAgICAgICAgICAgICAgICA8R3JJbnN0YWdyYW0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWNjaW9uXCI+XG4gICAgICAgICAgPGgyPkRpcmVjY2nDs248L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaVxuICAgICAgICAgICAgaGFydW0gc2l0IHJlcGVsbGVuZHVzIGFsaWFzIGRlYml0aXMgcHJvdmlkZW50IG5lc2NpdW50LCBxdW9zXG4gICAgICAgICAgICBpcHN1bSBudWxsYSBmdWdpdCBtYWduYW0gdGVtcG9yYSBldW0gY29ycG9yaXMsIHNvbHV0YSBlc3NlIVxuICAgICAgICAgICAgQXBlcmlhbSwgaWxsdW0gaXBzdW0uIENvcnJ1cHRpIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1icmFuZC1jb2xvcik7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogdG9wO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Footer.jsx */"));
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





const handleClick = e => {
  e.target.classList.add('active');
};

function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    id: "header",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2174310477" + " " + "top-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2174310477" + " " + "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "(52) 55 054 548 064")), __jsx("div", {
    className: "jsx-2174310477" + " " + "social-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.reactIcon
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrTwitter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__["GrInstagram"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "jsx-2174310477" + " " + "bottom-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/logoHorizontal.jpg",
    alt: "Logo Horizontal",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("nav", {
    className: "jsx-2174310477" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#header",
    className: "jsx-2174310477" + " " + "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Inicio")), __jsx("li", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#servicios",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, "Servicios")), __jsx("li", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#nosotros",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "Nosotros")), __jsx("li", {
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contacto",
    className: "jsx-2174310477",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, "Contacto")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2174310477",
    __self: this
  }, "header.jsx-2174310477{height:100%;}.top-section.jsx-2174310477{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:50px;color:white;background-color:var(--second-brand-color);}.social-media.jsx-2174310477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.bottom-section.jsx-2174310477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.bottom-section.jsx-2174310477 img.jsx-2174310477{height:90px;display:inline;}.menu.jsx-2174310477{width:100%;}.menu.jsx-2174310477 ul.jsx-2174310477{height:100%;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;list-style:none;}li.jsx-2174310477 a.jsx-2174310477{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;color:black;font-weight:500;cursor:pointer;}li.jsx-2174310477 a.active.jsx-2174310477{background-color:var(--first-brand-color);color:white;}li.jsx-2174310477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;color:black;width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1MsQUFHdUIsQUFHQSxBQVNDLEFBS0EsQUFHRCxBQUlELEFBR0MsQUFRQSxBQVc4QixBQUk3QixXQXpCZixDQXhCQSxBQUdlLEFBaUJFLEFBT04sQUFRRSxTQVBELEVBUUcsSUFmZixJQVFlLFdBaUJELFlBQ2Qsb0JBbkNxQixBQUtyQixBQWlDeUIsWUE5Q00sV0FpQ04sUUFQTyw4REFqQmxCLE1Bc0NPLE1BckNyQixpQkF3QnFCLGFBakNBLFdBMEJILGdCQUNsQiw4QkFvQnlCLHVCQWJGLEFBY1QsWUFDQSxDQWhETSxXQWlEcEIsT0FoRGMsWUFDK0IsT0FnQy9CLFlBQ0ksZ0JBQ0QsUUFqQ2pCLE9Ba0NBIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gJ3JlYWN0LWljb25zJztcbmltcG9ydCB7IEdyVHdpdHRlciwgR3JJbnN0YWdyYW0sIEdyRmFjZWJvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9ncic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgPHNwYW4+KDUyKSA1NSAwNTQgNTQ4IDA2NDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnJlYWN0SWNvbiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyRmFjZWJvb2sgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+XG4gICAgICAgICAgICAgICAgPEdyVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIj5cbiAgICAgICAgICAgICAgICA8R3JJbnN0YWdyYW0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nb0hvcml6b250YWwuanBnXCIgYWx0PVwiTG9nbyBIb3Jpem9udGFsXCIgLz5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjaGVhZGVyXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+SW5pY2lvPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2lvc1wiPlNlcnZpY2lvczwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNub3NvdHJvc1wiPk5vc290cm9zPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RvXCI+Q29udGFjdG88L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50b3Atc2VjdGlvbntcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWJyYW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLW1lZGlhe1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbS1zZWN0aW9ue1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbS1zZWN0aW9uIGltZ3tcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHVse1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaSBhLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtYnJhbmQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/Header.jsx */"));
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
    className: "jsx-4133956740" + " " + "mini-card-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4133956740" + " " + "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Card/pill.png",
    alt: "Mini-card",
    className: "jsx-4133956740",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-4133956740" + " " + "text-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-4133956740",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Calidad"), __jsx("p", {
    className: "jsx-4133956740",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Utilizamos material y medicamentos de primera calidad, aunados a los m\xE9todos m\xE1s modernos y m\xE1xima seguridad."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4133956740",
    __self: this
  }, ".mini-card-item.jsx-4133956740{height:150px;width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0px 4px 10px rgba(0,0,0,0.25);}.image-container.jsx-4133956740{background:linear-gradient(to right,rgba(29,139,159,1) 0%,rgba(0,141,157,1) 50%,rgba(52,91,131,1) 50%);height:90%;display:grid;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-4133956740{height:100px;margin:10px;}.text-container.jsx-4133956740{margin-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CUyxBQUcwQixBQU82RixBQU83RixBQUlJLGFBakJMLEFBY0EsSUFJZCxRQWpCZSxBQWNmLDBFQWJxQixJQUtSLFdBQ0UsYUFDVSxpRUFOcUIsa0NBT3pCLE9BTnJCLHNGQU9BIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWluaUNhcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaS1jYXJkLWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9DYXJkL3BpbGwucG5nXCIgYWx0PVwiTWluaS1jYXJkXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBDYWxpZGFkXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFV0aWxpemFtb3MgbWF0ZXJpYWwgeSBtZWRpY2FtZW50b3MgZGUgcHJpbWVyYSBjYWxpZGFkLFxuICAgICAgICAgICAgYXVuYWRvcyBhIGxvcyBtw6l0b2RvcyBtw6FzIG1vZGVybm9zIHkgbcOheGltYSBzZWd1cmlkYWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWluaS1jYXJkLWl0ZW17XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyOSwxMzksMTU5LDEpIDAlLCByZ2JhKDAsMTQxLDE1NywxKSA1MCUsIHJnYmEoNTIsOTEsMTMxLDEpIDUwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC1jb250YWluZXJ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCard.jsx */"));
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
    className: "jsx-3726331016" + " " + "mini-card-container",
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
    id: "3726331016",
    __self: this
  }, ".mini-card-container.jsx-3726331016{width:80vw;margin:50px auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmRDb250YWluZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFTLEFBR3NCLFdBQ00saUJBQ0osYUFDaUIsOEJBQ2hCLGNBQ08scUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy93aXNvcmQvRG9jdW1lbnRzL1RyYWJham8vVGhvcmFjaWNDYXJlL2NvbXBvbmVudHMvTWluaUNhcmRDb250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNaW5pQ2FyZCBmcm9tICcuL01pbmlDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWluaUNhcmRDb250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaS1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICA8TWluaUNhcmQgLz5cbiAgICAgICAgPE1pbmlDYXJkIC8+XG4gICAgICAgIDxNaW5pQ2FyZCAvPlxuICAgICAgICA8TWluaUNhcmQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLm1pbmktY2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/wisord/Documents/Trabajo/ThoracicCare/components/MiniCardContainer.jsx */"));
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

/***/ 3:
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