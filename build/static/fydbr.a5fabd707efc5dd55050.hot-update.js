webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\r\n * Navigation Component\r\n *\r\n * It renders the navigation links\r\n */ // const [dstate, setDstate] = React.useState(null);\n// React.useEffect(() => {\n//   console.log(\"state nav: \", dstate);\n// }, [dstate]);\nvar Nav=(_ref)=>{var{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,console.log(\"state nav ret: \",state),state.theme.menu.map((_ref2)=>{var[name,link]=_ref2;console.log(\"name link\",name,link);// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===link;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?\"page\":undefined},name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"b1zxbh\",styles:\"list-style:none;display:flex;align-items:center;width:1270px;height:68px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;background:#000;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9kb2xcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcZnJlZWxhc1xcRllEQlIgLSBNYXJpbmFcXEZZREJSXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUMrQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJvZG9sXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXGZyZWVsYXNcXEZZREJSIC0gTWFyaW5hXFxGWURCUlxccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XHJcbiAqXHJcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcclxuICovXHJcblxyXG4vLyBjb25zdCBbZHN0YXRlLCBzZXREc3RhdGVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4vLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwic3RhdGUgbmF2OiBcIiwgZHN0YXRlKTtcclxuLy8gfSwgW2RzdGF0ZV0pO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxyXG4gIDxOYXZDb250YWluZXI+XHJcbiAgICB7Y29uc29sZS5sb2coXCJzdGF0ZSBuYXYgcmV0OiBcIiwgc3RhdGUpfVxyXG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJuYW1lIGxpbmtcIiwgbmFtZSwgbGluayk7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcclxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XHJcbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxyXG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KX1cclxuICA8L05hdkNvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyNzBweDtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xyXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavItem\"})( false?undefined:{name:\"1wyirlq\",styles:\"padding:0;margin:0 16px;color:#fff;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9kb2xcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcZnJlZWxhc1xcRllEQlIgLSBNYXJpbmFcXEZZREJSXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0QwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJvZG9sXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXGZyZWVsYXNcXEZZREJSIC0gTWFyaW5hXFxGWURCUlxccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XHJcbiAqXHJcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcclxuICovXHJcblxyXG4vLyBjb25zdCBbZHN0YXRlLCBzZXREc3RhdGVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4vLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwic3RhdGUgbmF2OiBcIiwgZHN0YXRlKTtcclxuLy8gfSwgW2RzdGF0ZV0pO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxyXG4gIDxOYXZDb250YWluZXI+XHJcbiAgICB7Y29uc29sZS5sb2coXCJzdGF0ZSBuYXYgcmV0OiBcIiwgc3RhdGUpfVxyXG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJuYW1lIGxpbmtcIiwgbmFtZSwgbGluayk7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcclxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XHJcbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxyXG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KX1cclxuICA8L05hdkNvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyNzBweDtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xyXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInRoZW1lIiwibWVudSIsIm1hcCIsIm5hbWUiLCJsaW5rIiwiaXNDdXJyZW50UGFnZSIsInJvdXRlciIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJOYXZDb250YWluZXIiLCJOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEcsQ0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLEdBQU1BLElBQUcsQ0FBRyxZQUFDLENBQUVDLEtBQUYsQ0FBRCxZQUNWLDJEQUFDLFlBQUQsTUFDR0MsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosQ0FBK0JGLEtBQS9CLENBREgsQ0FFR0EsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEdBQWpCLENBQXFCLFNBQWtCLElBQWpCLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFpQixPQUN0Q04sT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixDQUF5QkksSUFBekIsQ0FBK0JDLElBQS9CLEVBQ0E7QUFDQSxHQUFNQyxjQUFhLENBQUdSLEtBQUssQ0FBQ1MsTUFBTixDQUFhRixJQUFiLEdBQXNCQSxJQUE1QyxDQUNBLE1BQ0UsMkRBQUMsT0FBRCxFQUFTLEdBQUcsQ0FBRUQsSUFBZCxFQUVFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFQyxJQUFaLENBQWtCLGVBQWNDLGFBQWEsQ0FBRyxNQUFILENBQVlFLFNBQXpELEVBQ0dKLElBREgsQ0FGRixDQURGLENBUUQsQ0FaQSxDQUZILENBRFUsRUFBWixDQW1CZUssdUhBQU8sQ0FBQ1osR0FBRCxDQUF0QixFQUVBLEdBQU1hLGFBQVksOHFIQUFsQixDQWlCQSxHQUFNQyxRQUFPLG96SEFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XHJcbiAqXHJcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcclxuICovXHJcblxyXG4vLyBjb25zdCBbZHN0YXRlLCBzZXREc3RhdGVdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4vLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwic3RhdGUgbmF2OiBcIiwgZHN0YXRlKTtcclxuLy8gfSwgW2RzdGF0ZV0pO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxyXG4gIDxOYXZDb250YWluZXI+XHJcbiAgICB7Y29uc29sZS5sb2coXCJzdGF0ZSBuYXYgcmV0OiBcIiwgc3RhdGUpfVxyXG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJuYW1lIGxpbmtcIiwgbmFtZSwgbGluayk7XHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcclxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XHJcbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxyXG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KX1cclxuICA8L05hdkNvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcclxuXHJcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyNzBweDtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xyXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})