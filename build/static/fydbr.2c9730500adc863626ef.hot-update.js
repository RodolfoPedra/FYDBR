webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\n// const blogListHandler = {\n//   pattern: \"/\",\n//   func: async ({ route, params, state, libraries }) => {\n//     const per_page = 4;\n//     const { api, populate, getTotalPages } = libraries.source;\n//     const response = await api.get({\n//       endpoint: \"posts\",\n//       params: {\n//         per_page,\n//       },\n//     });\n//     const firstItems = await populate({\n//       response,\n//       state,\n//     });\n//     const pages = getTotalPages(response);\n//     const requests = [];\n//     for (let page = 1; page <= pages; page++) {\n//       requests.push(\n//         api.get({\n//           endpoint: \"posts\",\n//           params: {\n//             per_page,\n//             page,\n//             _embed: true,\n//           },\n//         })\n//       );\n//     }\n//     const responses = await Promise.all(requests);\n//     const newItems = await Promise.all(\n//       responses.map((response) => populate({ state, response }))\n//     );\n//     const items = firstItems.concat(newItems);\n//     // 4. add data to source\n//     const currentPageData = state.source.data[\"/\"];\n//     const newPageData = {\n//       isBlogList: true,\n//       items,\n//     };\n//     Object.assign(currentPageData, newPageData);\n//   },\n// };\nvar marsTheme={name:\"@frontity/mars-theme\",roots:{/**\r\n     * In Frontity, any package can add React components to the site.\r\n     * We use roots for that, scoped to the `theme` namespace.\r\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\r\n     * State is where the packages store their default settings and other\r\n     * relevant state. It is scoped to the `theme` namespace.\r\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\r\n   * Actions are functions that modify the state or deal with other parts of\r\n   * Frontity like libraries.\r\n   */actions:{theme:{// init: ({ libraries }) => {\n//   libraries.source.handlers.push(blogListHandler);\n// },\ntoggleMobileMenu:(_ref)=>{var{state}=_ref;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref2)=>{var{state}=_ref2;state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\r\n       * Add a processor to `html2react` so it processes the `<img>` tags\r\n       * and internal link inside the content HTML.\r\n       * You can add your own processors too.\r\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbIm1hcnNUaGVtZSIsIm5hbWUiLCJyb290cyIsInRoZW1lIiwiVGhlbWUiLCJzdGF0ZSIsImF1dG9QcmVmZXRjaCIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwiZmVhdHVyZWQiLCJzaG93T25MaXN0Iiwic2hvd09uUG9zdCIsImFjdGlvbnMiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwibGlicmFyaWVzIiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJpbWFnZSIsImlmcmFtZSIsImxpbmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLEdBQU1BLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJDLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lGLEtBQUssQ0FBRSxDQUNMRyxZQUFZLENBQUUsU0FEVCxDQUVMQyxJQUFJLENBQUUsRUFGRCxDQUdMQyxnQkFBZ0IsQ0FBRSxLQUhiLENBSUxDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsS0FESixDQUVSQyxVQUFVLENBQUUsS0FGSixDQUpMLENBTEYsQ0FUUyxDQXlCaEI7QUFDRjtBQUNBO0FBQ0EsS0FDRUMsT0FBTyxDQUFFLENBQ1BULEtBQUssQ0FBRSxDQUNMO0FBQ0E7QUFDQTtBQUNBVSxnQkFBZ0IsQ0FBRSxRQUFlLElBQWQsQ0FBRVIsS0FBRixDQUFjLE1BQy9CQSxLQUFLLENBQUNGLEtBQU4sQ0FBWUssZ0JBQVosQ0FBK0IsQ0FBQ0gsS0FBSyxDQUFDRixLQUFOLENBQVlLLGdCQUE1QyxDQUNELENBTkksQ0FPTE0sZUFBZSxDQUFFLFNBQWUsSUFBZCxDQUFFVCxLQUFGLENBQWMsT0FDOUJBLEtBQUssQ0FBQ0YsS0FBTixDQUFZSyxnQkFBWixDQUErQixLQUEvQixDQUNELENBVEksQ0FEQSxDQTdCTyxDQTBDaEJPLFNBQVMsQ0FBRSxDQUNUQyxVQUFVLENBQUUsQ0FDVjtBQUNOO0FBQ0E7QUFDQTtBQUNBLFNBQ01DLFVBQVUsQ0FBRSxDQUFDQyw2RUFBRCxDQUFRQyw4RUFBUixDQUFnQkMsNEVBQWhCLENBTkYsQ0FESCxDQTFDSyxDQUFsQixDQXNEZXBCLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcclxuaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcclxuaW1wb3J0IGxpbmsgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGlua1wiO1xyXG5cclxuLy8gY29uc3QgYmxvZ0xpc3RIYW5kbGVyID0ge1xyXG4vLyAgIHBhdHRlcm46IFwiL1wiLFxyXG4vLyAgIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4vLyAgICAgY29uc3QgcGVyX3BhZ2UgPSA0O1xyXG4vLyAgICAgY29uc3QgeyBhcGksIHBvcHVsYXRlLCBnZXRUb3RhbFBhZ2VzIH0gPSBsaWJyYXJpZXMuc291cmNlO1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcclxuLy8gICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuLy8gICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgcGVyX3BhZ2UsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGNvbnN0IGZpcnN0SXRlbXMgPSBhd2FpdCBwb3B1bGF0ZSh7XHJcbi8vICAgICAgIHJlc3BvbnNlLFxyXG4vLyAgICAgICBzdGF0ZSxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgY29uc3QgcGFnZXMgPSBnZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuLy8gICAgIGNvbnN0IHJlcXVlc3RzID0gW107XHJcblxyXG4vLyAgICAgZm9yIChsZXQgcGFnZSA9IDE7IHBhZ2UgPD0gcGFnZXM7IHBhZ2UrKykge1xyXG4vLyAgICAgICByZXF1ZXN0cy5wdXNoKFxyXG4vLyAgICAgICAgIGFwaS5nZXQoe1xyXG4vLyAgICAgICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuLy8gICAgICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgICAgICBwZXJfcGFnZSxcclxuLy8gICAgICAgICAgICAgcGFnZSxcclxuLy8gICAgICAgICAgICAgX2VtYmVkOiB0cnVlLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xyXG5cclxuLy8gICAgIGNvbnN0IG5ld0l0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbi8vICAgICAgIHJlc3BvbnNlcy5tYXAoKHJlc3BvbnNlKSA9PiBwb3B1bGF0ZSh7IHN0YXRlLCByZXNwb25zZSB9KSlcclxuLy8gICAgICk7XHJcbi8vICAgICBjb25zdCBpdGVtcyA9IGZpcnN0SXRlbXMuY29uY2F0KG5ld0l0ZW1zKTtcclxuXHJcbi8vICAgICAvLyA0LiBhZGQgZGF0YSB0byBzb3VyY2VcclxuLy8gICAgIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW1wiL1wiXTtcclxuLy8gICAgIGNvbnN0IG5ld1BhZ2VEYXRhID0ge1xyXG4vLyAgICAgICBpc0Jsb2dMaXN0OiB0cnVlLFxyXG4vLyAgICAgICBpdGVtcyxcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgT2JqZWN0LmFzc2lnbihjdXJyZW50UGFnZURhdGEsIG5ld1BhZ2VEYXRhKTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuY29uc3QgbWFyc1RoZW1lID0ge1xyXG4gIG5hbWU6IFwiQGZyb250aXR5L21hcnMtdGhlbWVcIixcclxuICByb290czoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxyXG4gICAgICogV2UgdXNlIHJvb3RzIGZvciB0aGF0LCBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxyXG4gICAgICovXHJcbiAgICB0aGVtZTogVGhlbWUsXHJcbiAgfSxcclxuICBzdGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGF0ZSBpcyB3aGVyZSB0aGUgcGFja2FnZXMgc3RvcmUgdGhlaXIgZGVmYXVsdCBzZXR0aW5ncyBhbmQgb3RoZXJcclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxyXG4gICAgICovXHJcbiAgICB0aGVtZToge1xyXG4gICAgICBhdXRvUHJlZmV0Y2g6IFwiaW4tdmlld1wiLFxyXG4gICAgICBtZW51OiBbXSxcclxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgIGZlYXR1cmVkOiB7XHJcbiAgICAgICAgc2hvd09uTGlzdDogZmFsc2UsXHJcbiAgICAgICAgc2hvd09uUG9zdDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXHJcbiAgICogRnJvbnRpdHkgbGlrZSBsaWJyYXJpZXMuXHJcbiAgICovXHJcbiAgYWN0aW9uczoge1xyXG4gICAgdGhlbWU6IHtcclxuICAgICAgLy8gaW5pdDogKHsgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgLy8gICBsaWJyYXJpZXMuc291cmNlLmhhbmRsZXJzLnB1c2goYmxvZ0xpc3RIYW5kbGVyKTtcclxuICAgICAgLy8gfSxcclxuICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSAhc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbjtcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpYnJhcmllczoge1xyXG4gICAgaHRtbDJyZWFjdDoge1xyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIGEgcHJvY2Vzc29yIHRvIGBodG1sMnJlYWN0YCBzbyBpdCBwcm9jZXNzZXMgdGhlIGA8aW1nPmAgdGFnc1xyXG4gICAgICAgKiBhbmQgaW50ZXJuYWwgbGluayBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC5cclxuICAgICAgICogWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b28uXHJcbiAgICAgICAqL1xyXG4gICAgICBwcm9jZXNzb3JzOiBbaW1hZ2UsIGlmcmFtZSwgbGlua10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXJzVGhlbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})