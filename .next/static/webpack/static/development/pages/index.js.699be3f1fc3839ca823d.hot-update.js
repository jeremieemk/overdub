webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hamburger.js":
/*!*********************************!*\
  !*** ./components/Hamburger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamburgerOpenMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HamburgerOpenMenu */ "./components/HamburgerOpenMenu.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Hamburger.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Hamburger() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var handleHamburgerClick = function handleHamburgerClick() {
    return setOpen(!isOpen);
  };

  return __jsx("div", {
    className: "hamburger-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "lines",
    onClick: handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "line upper-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "line lower-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), isOpen ? __jsx(_HamburgerOpenMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleHamburgerClick: handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }) : null, style, isOpen ? openStyle : null);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "\n    .lines {\n      margin-top: var(--global-margin);\n      margin-right: var(--global-margin);\n    }\n\n    .line {\n      margin-bottom: 0.5rem;\n      width: 2rem;\n      border-bottom: 0.2rem solid white;\n      position: relative;\n      transition: transform 0.3s;\n    }\n  ");

var openStyle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "\n    .line {\n      border-bottom: 0.2rem solid black;\n      z-index: 100;\n      margin-bottom: 0;\n      transition: transform 0.3s;\n    }\n    .lower-line {\n      transform: rotate(-45deg) translateY(-0.15rem);\n      transform-origin: center;\n    }\n    .upper-line {\n      transform: rotate(45deg) translateY(0.15rem);\n      transform-origin: center;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./components/HamburgerOpenMenu.js":
/*!*****************************************!*\
  !*** ./components/HamburgerOpenMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/HamburgerOpenMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HamburgerOpenMenu(props) {
  var test = function test() {
    return console.log("ça marche");
  };

  return __jsx("div", {
    className: "hamburger-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "nested-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "ABOUT ME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "PORTFOLIO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SKILLS")), __jsx("a", {
    href: "https://res.cloudinary.com/dbslwolfi/image/upload/v1578760331/rss/CV2020_gsc1gi.pdf",
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "CV"), __jsx("div", {
    className: "get-in-touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("div", {
    className: "social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/jeremieemk",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/fb.png",
    alt: "fb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/jeremiemoussaidkerouanton/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/linkedin.png",
    alt: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("a", {
    href: "mailto:jeremieemk@gmail.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/mail.png",
    alt: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))))), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "\n    .hamburger-menu-container {\n      height: 100vh;\n      width: 100vw;\n      left: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n    }\n    .nested-menu-container {\n      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      height: 100%;\n      width: 100%;\n      padding: 2rem;\n      font-size: 1.05rem;\n      font-family: var(--font3);\n      letter-spacing: 0.1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n    }\n    .nested-menu-container > a {\n      padding: 1rem;\n    }\n    .social-icon-pic {\n      width: 1.5rem;\n      padding: 1rem;\n      height: auto;\n    }\n    .get-in-touch {\n      text-align: center;\n      transform: translateY(8rem);\n    }\n    .get-in-touch > p {\n      color: black;\n\n      font-size: 0.8rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (HamburgerOpenMenu);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.js */ "./components/Logo.js");
/* harmony import */ var _Hamburger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hamburger.js */ "./components/Hamburger.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  return __jsx("div", {
    className: "header-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_Logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx(_Hamburger_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "\n    .header-container {\n      height: 5rem;\n      display: flex;\n      justify-content: space-between;\n      position: fixed;\n      top: 0;\n      width: 100%;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Hello.js":
/*!*****************************!*\
  !*** ./components/Hello.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _text_HelloText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/HelloText */ "./components/text/HelloText.js");
/* harmony import */ var _LinkBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkBox */ "./components/LinkBox.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Hello.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hello = function Hello() {
  return __jsx("div", {
    className: "hello-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Hey, Hi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "under-the-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_text_HelloText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/about",
    name: "about me",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/portfolio",
    name: "portfolio",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "skills",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cv",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\n    .hello-container {\n      height: 100vh;\n      margin-bottom: 5rem;\n    }\n\n    .under-the-title {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-bottom: 5rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/GlobalStyles */ "./style/GlobalStyles.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), props.children), _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "\n    .container {\n      position: relative;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LinkBox.js":
/*!*******************************!*\
  !*** ./components/LinkBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/LinkBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LinkBox(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "text-box-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.name)), props.showArrow ? __jsx("div", {
    className: "arrow-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/whitearrow3.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })) : null))), style, !props.showArrow ? centeredTitle : null);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "\n    .text-box-container {\n      margin-top: 1rem;\n      display: flex;\n      cursor: \"pointer\";\n    }\n    .text-box {\n      color: white;\n      font-family: var(--font3);\n      border: var(--line-width) solid white;\n      font-size: 1.3rem;\n      width: 11rem;\n      height: 3rem;\n      display: flex;\n      align-items: center;\n    }\n    .arrow-box {\n      border-width: var(--line-width) var(--line-width) var(--line-width) 0;\n      width: 5rem;\n      border-style: solid;\n      border-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      padding-left: 2rem;\n    }\n    .arrow {\n      width: 2rem;\n      height: auto;\n    }\n  ");

var centeredTitle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "\n    .text-box {\n      justify-content: center;\n      width: 80vw;\n    }\n    .text {\n      padding-left: 0;\n      font-size: 1.2rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (LinkBox);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Logo = function Logo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    style: {
      fontFamily: "Sectra"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    className: "logo-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "O"))), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\n    .logo-letter {\n      color: var(--color2);\n    }\n    .logo {\n      font-size: 3rem;\n      color: var(--color2);\n      margin-left: var(--global-margin);\n      margin-top: 1rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/PageTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PageTitle(props) {
  return __jsx("div", {
    className: "page-title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "page-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "title-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\n    .page-title-container {\n      padding-top: 30%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .page-title {\n      color: var(--color2);\n      font-family: var(--font3);\n      text-align: center;\n      font-size: 1.3rem;\n    }\n    .title-line {\n      margin-bottom: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 3.3rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/text/HelloText.js":
/*!**************************************!*\
  !*** ./components/text/HelloText.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/text/HelloText.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var HelloText = function HelloText() {
  return __jsx("div", {
    className: "hello-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("p", {
    className: "upper-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "I\u2019m J\xE9r\xE9mie. I am a ", __jsx("span", {
    className: "yellow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "coder"), " , a music producer ", __jsx("span", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "and a goofy polyglot. "), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("p", {
    className: "smaller2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "I was born in France and I live in Lisbon, Portugal."), __jsx("div", {
    className: "img-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    className: "sardine",
    src: "/img/toilet.png",
    alt: "sardine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\n  .hello-text {\n    width: 16rem;\n    color: white;\n    font-family: var(--font2);\n    margin-top: 2rem;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    text-align: left;\n    \n  }\n      .sardine {\n        margin-top: 2rem;\n      width: 12rem;\n      height: auto;\n    }\n  .img-container {\n    display : flex;\n    justify-content: center;\n  }\n  .upper-text {\n    font-size: 1.6rem;\n  }\n  .smaller {\n    font-size: 1.1rem;\n  }\n  .smaller2{\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n    font-family: var(--font5);\n  }\n  .yellow {\n    color: var(--color2);\n    font-size: 2rem;\n    font-family: var(--font3);\n  }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (HelloText);

/***/ }),

/***/ "./pages/components/Hamburger.js":
false,

/***/ "./pages/components/HamburgerOpenMenu.js":
false,

/***/ "./pages/components/Header.js":
false,

/***/ "./pages/components/Hello.js":
false,

/***/ "./pages/components/Layout.js":
false,

/***/ "./pages/components/LinkBox.js":
false,

/***/ "./pages/components/Logo.js":
false,

/***/ "./pages/components/PageTitle.js":
false,

/***/ "./pages/components/text/HelloText.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hello */ "./components/Hello.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  var handleScroll = function handleScroll() {
    return console.log("scrolled");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "landing-logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: "avatar",
    src: "/img/avatar1.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("h1", {
    className: "over",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "over-"), __jsx("h1", {
    className: "dub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "duB"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("h2", {
    className: "web",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "WEB DEV."))), __jsx(_components_Hello__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "\n    .landing-logo-container {\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .avatar {\n      width: 5.5rem;\n      height: auto;\n      margin-left: -0.5rem;\n    }\n\n    .over {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 3.5rem;\n\n      margin-top: -1rem;\n    }\n    .dub {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 6rem;\n      margin-top: -1.6rem;\n    }\n    h1,\n    h2 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n    }\n    hr {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      border-color: white;\n      width: 5.5rem;\n      border-top: 1px solid white;\n      margin-inline-start: 5rem;\n      margin-top: -1.3rem;\n      margin-inline-end: 0;\n    }\n    .web {\n      font-family: var(--font3);\n      color: white;\n      font-size: 1.15rem;\n      margin-left: 5.2rem;\n      margin-top: 0.1rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/style/GlobalStyles.js":
false,

/***/ "./style/GlobalStyles.js":
/*!*******************************!*\
  !*** ./style/GlobalStyles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var GlobalStyles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2126316238",
  __self: undefined
}, "@font-face{font-family:\"PxGroteskBold\";src:url(\"fonts/PxGrotesk-Bold.woff2\") format(\"woff2\");src:url(\"fonts/PxGrotesk-Bold.woff\") format(\"woff\");src:url(\"fonts/PxGroteskBold.ttf\") format(\"truetype\");}@font-face{font-family:\"Sectra\";src:url(\"fonts/Sectra.woff2\") format(\"woff2\");src:url(\"fonts/Sectra.woff\") format(\"woff\");src:url(\"fonts/Sectra.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Bold\";src:url(\"fonts/WorkSans-Bold.woff2\") format(\"woff2\");src:url(\"fonts/WorkSans-Bold.woff\") format(\"woff\");src:url(\"fonts/WorkSans-Bold.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Regular\";src:url(\"fonts/WorkSans-Regular.ttf\") format(\"truetype\");}:root{--global-margin:2rem;--color1:#f85e3c;--color2:#fff55a;--font1:\"Sectra\";--font2:\"PxGroteskBold\";--font3:\"WorkSans-Bold\";--font4:\"WorkSans-Regular\";--line-width:0.1rem;}body{background-color:var(--color1);margin:0;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8yOF9wb3J0Zm9saW8vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNxQixBQUdtQyxBQU1QLEFBTU8sQUFNRyxBQUtWLEFBVVUsQUFJVixxQkE5QnlCLEFBaUI3QixPQXZCcUMsQUFZRCxHQU1JLEFBZWhELE9BVFEsRUFVbkIsVUFHZ0IsS0FaRyxTQWFuQixHQS9COEMsS0FtQnBCLFNBYjJCLENBWkMsTUFrQnRELFFBUTBCLGVBbkJ1QixTQW9CcEIsWUFkMkIsRUFaQSxhQTJCbEMsV0FwQnRCLFNBcUJBLG1CQWZBLEVBWkEiLCJmaWxlIjoiL1VzZXJzL2plcmVtaWUvd2ViLzI4X3BvcnRmb2xpby9zdHlsZS9HbG9iYWxTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHbG9iYWxTdHlsZXMgPSAoXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogXCJQeEdyb3Rlc2tCb2xkXCI7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1B4R3JvdGVzay1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9QeEdyb3Rlc2stQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1B4R3JvdGVza0JvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlY3RyYVwiO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9TZWN0cmEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1NlY3RyYS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1NlY3RyYS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiV29ya1NhbnMtQm9sZFwiO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9Xb3JrU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9Xb3JrU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiV29ya1NhbnMtUmVndWxhclwiO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9Xb3JrU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG5cbiAgICA6cm9vdCB7XG4gICAgICAtLWdsb2JhbC1tYXJnaW46IDJyZW07XG4gICAgICAtLWNvbG9yMTogI2Y4NWUzYztcbiAgICAgIC0tY29sb3IyOiAjZmZmNTVhO1xuICAgICAgLS1mb250MTogXCJTZWN0cmFcIjtcbiAgICAgIC0tZm9udDI6IFwiUHhHcm90ZXNrQm9sZFwiO1xuICAgICAgLS1mb250MzogXCJXb3JrU2Fucy1Cb2xkXCI7XG4gICAgICAtLWZvbnQ0OiBcIldvcmtTYW5zLVJlZ3VsYXJcIjtcbiAgICAgIC0tbGluZS13aWR0aDogMC4xcmVtO1xuICAgIH1cbiAgICBib2R5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XG4iXX0= */\n/*@ sourceURL=/Users/jeremie/web/28_portfolio/style/GlobalStyles.js */");

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ })

})
//# sourceMappingURL=index.js.699be3f1fc3839ca823d.hot-update.js.map