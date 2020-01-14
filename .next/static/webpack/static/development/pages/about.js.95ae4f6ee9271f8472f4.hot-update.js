webpackHotUpdate("static/development/pages/about.js",{

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
  id: "3021869892",
  __self: undefined
}, "@font-face{font-family:\"PxGroteskBold\";src:url(\"fonts/PxGrotesk-Bold.woff2\") format(\"woff2\");src:url(\"fonts/PxGrotesk-Bold.woff\") format(\"woff\");src:url(\"fonts/PxGroteskBold.ttf\") format(\"truetype\");}@font-face{font-family:\"Sectra\";src:url(\"fonts/Sectra.woff2\") format(\"woff2\");src:url(\"fonts/Sectra.woff\") format(\"woff\");src:url(\"fonts/Sectra.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Bold\";src:url(\"fonts/WorkSans-Bold.woff2\") format(\"woff2\");src:url(\"fonts/WorkSans-Bold.woff\") format(\"woff\");src:url(\"fonts/WorkSans-Bold.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Regular\";src:url(\"fonts/WorkSans-Regular.ttf\") format(\"truetype\");}:root{--global-margin:2rem;--desktop-padding:25rem;--color1:#f85e3c;--color2:#fff55a;--font1:\"Sectra\";--font2:\"PxGroteskBold\";--font3:\"WorkSans-Bold\";--font4:\"WorkSans-Regular\";--line-width:0.1rem;}body{background-color:var(--color1);margin:0;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8yOF9wb3J0Zm9saW8vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNxQixBQUdtQyxBQU1QLEFBTU8sQUFNRyxBQUtWLEFBV1UsQUFJVixxQkEvQnlCLEFBaUJ0QixPQXZCOEIsQUFZRCxHQU1JLEFBZ0JoRCxTQUNYLEtBWG1CLEtBY0gsWUFiRyxFQWNuQixHQWhDOEMsWUFtQjNCLEVBYmtDLENBWkMsTUFrQnRELFFBUTBCLGVBbkJ1QixTQW9CdkIsWUFkOEIsRUFaQSxVQTJCM0IsY0FwQjdCLGFBcUJzQixlQWZ0QixFQVpBLEdBNEJBIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8yOF9wb3J0Zm9saW8vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2xvYmFsU3R5bGVzID0gKFxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiUHhHcm90ZXNrQm9sZFwiO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9QeEdyb3Rlc2stQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvUHhHcm90ZXNrLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9QeEdyb3Rlc2tCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogXCJTZWN0cmFcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvU2VjdHJhLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9TZWN0cmEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9TZWN0cmEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zLUJvbGRcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1dvcmtTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zLVJlZ3VsYXJcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuXG4gICAgOnJvb3Qge1xuICAgICAgLS1nbG9iYWwtbWFyZ2luOiAycmVtO1xuICAgICAgLS1kZXNrdG9wLXBhZGRpbmc6IDI1cmVtO1xuICAgICAgLS1jb2xvcjE6ICNmODVlM2M7XG4gICAgICAtLWNvbG9yMjogI2ZmZjU1YTtcbiAgICAgIC0tZm9udDE6IFwiU2VjdHJhXCI7XG4gICAgICAtLWZvbnQyOiBcIlB4R3JvdGVza0JvbGRcIjtcbiAgICAgIC0tZm9udDM6IFwiV29ya1NhbnMtQm9sZFwiO1xuICAgICAgLS1mb250NDogXCJXb3JrU2Fucy1SZWd1bGFyXCI7XG4gICAgICAtLWxpbmUtd2lkdGg6IDAuMXJlbTtcbiAgICB9XG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIl19 */\n/*@ sourceURL=/Users/jeremie/web/28_portfolio/style/GlobalStyles.js */");

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ })

})
//# sourceMappingURL=about.js.95ae4f6ee9271f8472f4.hot-update.js.map