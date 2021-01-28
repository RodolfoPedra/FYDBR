webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/components/link.js":
/*!****************************************************!*\
  !*** ./packages/mars-theme/src/components/link.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/**\r\n * The MarsLink component, which is a wrapper on top of the {@link Link}\r\n * component.\r\n *\r\n * @param props - It accepts the same props than the {@link Link} component.\r\n *\r\n * @example\r\n * ```js\r\n * <MarsLink link=\"/some-post\">\r\n *   <div>Some Post</div>\r\n * </MarsLink>\r\n * ```\r\n *\r\n * @returns A {@link Link} component, which returns an HTML anchor element.\r\n */var MarsLink=(_ref)=>{var{children}=_ref,props=_objectWithoutProperties(_ref,[\"children\"]);var{state,actions}=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"useConnect\"])();/**\r\n   * A handler that closes the mobile menu when a link is clicked.\r\n   */var onClick=()=>{if(state.theme.isMobileMenuOpen){actions.theme.closeMobileMenu();}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_extends({},props,{onClick:onClick}),children);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(MarsLink,{injectProps:true}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpbmsuanM/OWYzOCJdLCJuYW1lcyI6WyJNYXJzTGluayIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1c2VDb25uZWN0Iiwib25DbGljayIsInRoZW1lIiwiaXNNb2JpbGVNZW51T3BlbiIsImNsb3NlTW9iaWxlTWVudSIsImNvbm5lY3QiLCJpbmplY3RQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzsrOUJBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsU0FBUSxDQUFHLFFBQTRCLElBQTNCLENBQUVDLFFBQUYsQ0FBMkIsTUFBWkMsS0FBWSw2Q0FDM0MsR0FBTSxDQUFFQyxLQUFGLENBQVNDLE9BQVQsRUFBcUJDLDJEQUFVLEVBQXJDLENBRUE7QUFDRjtBQUNBLEtBQ0UsR0FBTUMsUUFBTyxDQUFHLElBQU0sQ0FDcEIsR0FBSUgsS0FBSyxDQUFDSSxLQUFOLENBQVlDLGdCQUFoQixDQUFrQyxDQUNoQ0osT0FBTyxDQUFDRyxLQUFSLENBQWNFLGVBQWQsR0FDRCxDQUNGLENBSkQsQ0FNQSxNQUNFLDJEQUFDLGlFQUFELGFBQVVQLEtBQVYsRUFBaUIsT0FBTyxDQUFFSSxPQUExQixHQUNHTCxRQURILENBREYsQ0FLRCxDQWpCRCxDQW1CZVMsdUhBQU8sQ0FBQ1YsUUFBRCxDQUFXLENBQUVXLFdBQVcsQ0FBRSxJQUFmLENBQVgsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpbmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZUNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgTWFyc0xpbmsgY29tcG9uZW50LCB3aGljaCBpcyBhIHdyYXBwZXIgb24gdG9wIG9mIHRoZSB7QGxpbmsgTGlua31cclxuICogY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSBJdCBhY2NlcHRzIHRoZSBzYW1lIHByb3BzIHRoYW4gdGhlIHtAbGluayBMaW5rfSBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGpzXHJcbiAqIDxNYXJzTGluayBsaW5rPVwiL3NvbWUtcG9zdFwiPlxyXG4gKiAgIDxkaXY+U29tZSBQb3N0PC9kaXY+XHJcbiAqIDwvTWFyc0xpbms+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBIHtAbGluayBMaW5rfSBjb21wb25lbnQsIHdoaWNoIHJldHVybnMgYW4gSFRNTCBhbmNob3IgZWxlbWVudC5cclxuICovXHJcbmNvbnN0IE1hcnNMaW5rID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB1c2VDb25uZWN0KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgaGFuZGxlciB0aGF0IGNsb3NlcyB0aGUgbW9iaWxlIG1lbnUgd2hlbiBhIGxpbmsgaXMgY2xpY2tlZC5cclxuICAgKi9cclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4pIHtcclxuICAgICAgYWN0aW9ucy50aGVtZS5jbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgey4uLnByb3BzfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcnNMaW5rLCB7IGluamVjdFByb3BzOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/link.js\n");

/***/ })

})