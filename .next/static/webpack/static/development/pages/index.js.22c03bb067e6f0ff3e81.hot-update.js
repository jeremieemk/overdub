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
}, "\n    .lines {\n      padding-top: 2.3rem;\n      margin-right: var(--global-margin);\n      width: 100%;\n      height: 40%;\n    }\n\n    .line {\n      margin-bottom: 0.5rem;\n      width: 2rem;\n      border-bottom: 0.2rem solid white;\n      position: relative;\n      transition: transform 0.3s;\n    }\n    @media (min-width: 801px) {\n      .hamburger-container {\n        display: none;\n      }\n    }\n  ");

var openStyle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "\n    body {\n      overflow: hidden;\n    }\n    .line {\n      border-bottom: 0.2rem solid black;\n      z-index: 400;\n      margin-bottom: 0;\n      transition: transform 0.3s;\n    }\n    .lower-line {\n      transform: rotate(-45deg) translateY(-0.15rem);\n      transform-origin: center;\n    }\n    .upper-line {\n      transform: rotate(45deg) translateY(0.15rem);\n      transform-origin: center;\n    }\n  ");

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
  return __jsx("div", {
    className: "hamburger-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "nested-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "HELLO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "ABOUT ME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "PORTFOLIO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "SKILLS")), __jsx("a", {
    href: "https://res.cloudinary.com/dbslwolfi/image/upload/v1578760331/rss/CV2020_gsc1gi.pdf",
    target: "_blank",
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "CV"), __jsx("div", {
    className: "get-in-touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("div", {
    className: "social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/jeremieemk",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/fb.png",
    alt: "fb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/jeremiemoussaidkerouanton/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/linkedin.png",
    alt: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("a", {
    href: "mailto:jeremieemk@gmail.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/mail.png",
    alt: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))))), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "\n    .hamburger-menu-container {\n      height: 100vh;\n      width: 100vw;\n      left: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      z-index:300;\n    }\n    .nested-menu-container {\n      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      height: 100%;\n      width: 100%;\n      padding: 2rem;\n      font-size: 1.05rem;\n      font-family: var(--font3);\n      letter-spacing: 0.1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n    }\n    .nested-menu-container > a {\n      padding: 1rem;\n    }\n    .social-icon-pic {\n      width: 1.5rem;\n      padding: 1rem;\n      height: auto;\n    }\n    .get-in-touch {\n      text-align: center;\n      transform: translateY(5rem);\n    }\n    .get-in-touch > p {\n      color: black;\n\n      font-size: 0.8rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (HamburgerOpenMenu);

/***/ })

})
//# sourceMappingURL=index.js.22c03bb067e6f0ff3e81.hot-update.js.map