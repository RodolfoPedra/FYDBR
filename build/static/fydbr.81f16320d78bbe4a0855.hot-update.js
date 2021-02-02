webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var blogListHandler={pattern:\"/\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;var per_page=4;var{api,populate,getTotalPages}=libraries.source;var response=yield api.get({endpoint:\"posts\",params:{per_page}});var firstItems=yield populate({response,state});var pages=getTotalPages(response);var requests=[];for(var page=2;page<=pages;page++){requests.push(api.get({endpoint:\"posts\",params:{per_page,page,_embed:true}}));}var responses=yield Promise.all(requests);var newItems=yield Promise.all(responses.map(response=>populate({state,response})));var items=firstItems.concat(newItems);// 4. add data to source\nvar currentPageData=state.source.data[\"/\"];var newPageData={isBlogList:true,items};Object.assign(currentPageData,newPageData);});function func(_x){return _func.apply(this,arguments);}return func;}()};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\r\n     * In Frontity, any package can add React components to the site.\r\n     * We use roots for that, scoped to the `theme` namespace.\r\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\r\n     * State is where the packages store their default settings and other\r\n     * relevant state. It is scoped to the `theme` namespace.\r\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\r\n   * Actions are functions that modify the state or deal with other parts of\r\n   * Frontity like libraries.\r\n   */actions:{theme:{init:(_ref2)=>{var{libraries}=_ref2;libraries.source.handlers.push(blogListHandler);},toggleMobileMenu:(_ref3)=>{var{state}=_ref3;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref4)=>{var{state}=_ref4;state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\r\n       * Add a processor to `html2react` so it processes the `<img>` tags\r\n       * and internal link inside the content HTML.\r\n       * You can add your own processors too.\r\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImJsb2dMaXN0SGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInBlcl9wYWdlIiwiYXBpIiwicG9wdWxhdGUiLCJnZXRUb3RhbFBhZ2VzIiwic291cmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmRwb2ludCIsImZpcnN0SXRlbXMiLCJwYWdlcyIsInJlcXVlc3RzIiwicGFnZSIsInB1c2giLCJfZW1iZWQiLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwibmV3SXRlbXMiLCJtYXAiLCJpdGVtcyIsImNvbmNhdCIsImN1cnJlbnRQYWdlRGF0YSIsImRhdGEiLCJuZXdQYWdlRGF0YSIsImlzQmxvZ0xpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXJzVGhlbWUiLCJuYW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwiYXV0b1ByZWZldGNoIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsImluaXQiLCJoYW5kbGVycyIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIiwiaWZyYW1lIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7bWtCQUtBLEdBQU1BLGdCQUFlLENBQUcsQ0FDdEJDLE9BQU8sQ0FBRSxHQURhLENBRXRCQyxJQUFJLHdDQUFFLGVBQStDLElBQXhDLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQXdDLE1BQ25ELEdBQU1DLFNBQVEsQ0FBRyxDQUFqQixDQUNBLEdBQU0sQ0FBRUMsR0FBRixDQUFPQyxRQUFQLENBQWlCQyxhQUFqQixFQUFtQ0osU0FBUyxDQUFD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QixDQXNEZXBCLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcclxuaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcclxuaW1wb3J0IGxpbmsgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGlua1wiO1xyXG5cclxuY29uc3QgYmxvZ0xpc3RIYW5kbGVyID0ge1xyXG4gIHBhdHRlcm46IFwiL1wiLFxyXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgcGVyX3BhZ2UgPSA0O1xyXG4gICAgY29uc3QgeyBhcGksIHBvcHVsYXRlLCBnZXRUb3RhbFBhZ2VzIH0gPSBsaWJyYXJpZXMuc291cmNlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcclxuICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgcGVyX3BhZ2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZpcnN0SXRlbXMgPSBhd2FpdCBwb3B1bGF0ZSh7XHJcbiAgICAgIHJlc3BvbnNlLFxyXG4gICAgICBzdGF0ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGFnZXMgPSBnZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgcGFnZSA9IDI7IHBhZ2UgPD0gcGFnZXM7IHBhZ2UrKykge1xyXG4gICAgICByZXF1ZXN0cy5wdXNoKFxyXG4gICAgICAgIGFwaS5nZXQoe1xyXG4gICAgICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBwZXJfcGFnZSxcclxuICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgX2VtYmVkOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xyXG5cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIHJlc3BvbnNlcy5tYXAoKHJlc3BvbnNlKSA9PiBwb3B1bGF0ZSh7IHN0YXRlLCByZXNwb25zZSB9KSlcclxuICAgICk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGZpcnN0SXRlbXMuY29uY2F0KG5ld0l0ZW1zKTtcclxuXHJcbiAgICAvLyA0LiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW1wiL1wiXTtcclxuICAgIGNvbnN0IG5ld1BhZ2VEYXRhID0ge1xyXG4gICAgICBpc0Jsb2dMaXN0OiB0cnVlLFxyXG4gICAgICBpdGVtcyxcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihjdXJyZW50UGFnZURhdGEsIG5ld1BhZ2VEYXRhKTtcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgbWFyc1RoZW1lID0ge1xyXG4gIG5hbWU6IFwiQGZyb250aXR5L21hcnMtdGhlbWVcIixcclxuICByb290czoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxyXG4gICAgICogV2UgdXNlIHJvb3RzIGZvciB0aGF0LCBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxyXG4gICAgICovXHJcbiAgICB0aGVtZTogVGhlbWUsXHJcbiAgfSxcclxuICBzdGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGF0ZSBpcyB3aGVyZSB0aGUgcGFja2FnZXMgc3RvcmUgdGhlaXIgZGVmYXVsdCBzZXR0aW5ncyBhbmQgb3RoZXJcclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxyXG4gICAgICovXHJcbiAgICB0aGVtZToge1xyXG4gICAgICBhdXRvUHJlZmV0Y2g6IFwiaW4tdmlld1wiLFxyXG4gICAgICBtZW51OiBbXSxcclxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXHJcbiAgICAgIGZlYXR1cmVkOiB7XHJcbiAgICAgICAgc2hvd09uTGlzdDogZmFsc2UsXHJcbiAgICAgICAgc2hvd09uUG9zdDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXHJcbiAgICogRnJvbnRpdHkgbGlrZSBsaWJyYXJpZXMuXHJcbiAgICovXHJcbiAgYWN0aW9uczoge1xyXG4gICAgdGhlbWU6IHtcclxuICAgICAgaW5pdDogKHsgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgICBsaWJyYXJpZXMuc291cmNlLmhhbmRsZXJzLnB1c2goYmxvZ0xpc3RIYW5kbGVyKTtcclxuICAgICAgfSxcclxuICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSAhc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbjtcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpYnJhcmllczoge1xyXG4gICAgaHRtbDJyZWFjdDoge1xyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIGEgcHJvY2Vzc29yIHRvIGBodG1sMnJlYWN0YCBzbyBpdCBwcm9jZXNzZXMgdGhlIGA8aW1nPmAgdGFnc1xyXG4gICAgICAgKiBhbmQgaW50ZXJuYWwgbGluayBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC5cclxuICAgICAgICogWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b28uXHJcbiAgICAgICAqL1xyXG4gICAgICBwcm9jZXNzb3JzOiBbaW1hZ2UsIGlmcmFtZSwgbGlua10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXJzVGhlbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})