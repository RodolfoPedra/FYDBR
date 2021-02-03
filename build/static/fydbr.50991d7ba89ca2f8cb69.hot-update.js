webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var blogListHandler={pattern:\"/\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;var per_page=4;var{api,populate,getTotalPages}=libraries.source;var response=yield api.get({endpoint:\"posts\",params:{per_page}});var firstItems=yield populate({response,state});var pages=getTotalPages(response);var requests=[];for(var page=1;page<=pages;page++){requests.push(api.get({endpoint:\"posts\",params:{per_page,page}}));}var responses=yield Promise.all(requests);var newItems=yield Promise.all(responses.map(response=>populate({state,response})));var items=firstItems.concat(newItems);// 4. add data to source\nvar currentPageData=state.source.data[\"/\"];var newPageData={isBlogList:true,items};Object.assign(currentPageData,newPageData);});function func(_x){return _func.apply(this,arguments);}return func;}()};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\r\n     * In Frontity, any package can add React components to the site.\r\n     * We use roots for that, scoped to the `theme` namespace.\r\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\r\n     * State is where the packages store their default settings and other\r\n     * relevant state. It is scoped to the `theme` namespace.\r\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\r\n   * Actions are functions that modify the state or deal with other parts of\r\n   * Frontity like libraries.\r\n   */actions:{theme:{init:(_ref2)=>{var{state,libraries}=_ref2;libraries.source.handlers.push(blogListHandler);state.source.mydatas=blogListHandler;},toggleMobileMenu:(_ref3)=>{var{state}=_ref3;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref4)=>{var{state}=_ref4;state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\r\n       * Add a processor to `html2react` so it processes the `<img>` tags\r\n       * and internal link inside the content HTML.\r\n       * You can add your own processors too.\r\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImJsb2dMaXN0SGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInBlcl9wYWdlIiwiYXBpIiwicG9wdWxhdGUiLCJnZXRUb3RhbFBhZ2VzIiwic291cmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmRwb2ludCIsImZpcnN0SXRlbXMiLCJwYWdlcyIsInJlcXVlc3RzIiwicGFnZSIsInB1c2giLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwibmV3SXRlbXMiLCJtYXAiLCJpdGVtcyIsImNvbmNhdCIsImN1cnJlbnRQYWdlRGF0YSIsImRhdGEiLCJuZXdQYWdlRGF0YSIsImlzQmxvZ0xpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXJzVGhlbWUiLCJuYW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwiYXV0b1ByZWZldGNoIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsImluaXQiLCJoYW5kbGVycyIsIm15ZGF0YXMiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJpbWFnZSIsImlmcmFtZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7O21rQkFLQSxHQUFNQSxnQkFBZSxDQUFHLENBQ3RCQyxPQUFPLENBQUUsR0FEYSxDQUV0QkMsSUFBSSx3Q0FBRSxlQUErQyxJQUF4QyxDQUFFQyxLQUFGLENBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLENBQXdCQyxTQUF4QixDQUF3QyxNQUNuRCxHQUFNQyxTQUFRLENBQUcsQ0FBakIsQ0FDQSxHQUFNLENBQUVDLEdBQUYsQ0FBT0MsUUFBUCxDQUFpQkMsYUFBakIsRUFBbUNKLFNBQVMsQ0FB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RUFBUixDQUFnQkMsNEVBQWhCLENBTkYsQ0FESCxDQTNDSyxDQUFsQixDQXVEZXJCLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcclxuaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcclxuaW1wb3J0IGxpbmsgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGlua1wiO1xyXG5cclxuY29uc3QgYmxvZ0xpc3RIYW5kbGVyID0ge1xyXG4gIHBhdHRlcm46IFwiL1wiLFxyXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgcGVyX3BhZ2UgPSA0O1xyXG4gICAgY29uc3QgeyBhcGksIHBvcHVsYXRlLCBnZXRUb3RhbFBhZ2VzIH0gPSBsaWJyYXJpZXMuc291cmNlO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcclxuICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgcGVyX3BhZ2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZpcnN0SXRlbXMgPSBhd2FpdCBwb3B1bGF0ZSh7XHJcbiAgICAgIHJlc3BvbnNlLFxyXG4gICAgICBzdGF0ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGFnZXMgPSBnZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgcGFnZSA9IDE7IHBhZ2UgPD0gcGFnZXM7IHBhZ2UrKykge1xyXG4gICAgICByZXF1ZXN0cy5wdXNoKFxyXG4gICAgICAgIGFwaS5nZXQoe1xyXG4gICAgICAgICAgZW5kcG9pbnQ6IFwicG9zdHNcIixcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBwZXJfcGFnZSxcclxuICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcclxuXHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICByZXNwb25zZXMubWFwKChyZXNwb25zZSkgPT4gcG9wdWxhdGUoeyBzdGF0ZSwgcmVzcG9uc2UgfSkpXHJcbiAgICApO1xyXG4gICAgY29uc3QgaXRlbXMgPSBmaXJzdEl0ZW1zLmNvbmNhdChuZXdJdGVtcyk7XHJcblxyXG4gICAgLy8gNC4gYWRkIGRhdGEgdG8gc291cmNlXHJcbiAgICBjb25zdCBjdXJyZW50UGFnZURhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9cIl07XHJcbiAgICBjb25zdCBuZXdQYWdlRGF0YSA9IHtcclxuICAgICAgaXNCbG9nTGlzdDogdHJ1ZSxcclxuICAgICAgaXRlbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oY3VycmVudFBhZ2VEYXRhLCBuZXdQYWdlRGF0YSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IG1hcnNUaGVtZSA9IHtcclxuICBuYW1lOiBcIkBmcm9udGl0eS9tYXJzLXRoZW1lXCIsXHJcbiAgcm9vdHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogSW4gRnJvbnRpdHksIGFueSBwYWNrYWdlIGNhbiBhZGQgUmVhY3QgY29tcG9uZW50cyB0byB0aGUgc2l0ZS5cclxuICAgICAqIFdlIHVzZSByb290cyBmb3IgdGhhdCwgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cclxuICAgICAqL1xyXG4gICAgdGhlbWU6IFRoZW1lLFxyXG4gIH0sXHJcbiAgc3RhdGU6IHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhdGUgaXMgd2hlcmUgdGhlIHBhY2thZ2VzIHN0b3JlIHRoZWlyIGRlZmF1bHQgc2V0dGluZ3MgYW5kIG90aGVyXHJcbiAgICAgKiByZWxldmFudCBzdGF0ZS4gSXQgaXMgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cclxuICAgICAqL1xyXG4gICAgdGhlbWU6IHtcclxuICAgICAgYXV0b1ByZWZldGNoOiBcImluLXZpZXdcIixcclxuICAgICAgbWVudTogW10sXHJcbiAgICAgIGlzTW9iaWxlTWVudU9wZW46IGZhbHNlLFxyXG4gICAgICBmZWF0dXJlZDoge1xyXG4gICAgICAgIHNob3dPbkxpc3Q6IGZhbHNlLFxyXG4gICAgICAgIHNob3dPblBvc3Q6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBBY3Rpb25zIGFyZSBmdW5jdGlvbnMgdGhhdCBtb2RpZnkgdGhlIHN0YXRlIG9yIGRlYWwgd2l0aCBvdGhlciBwYXJ0cyBvZlxyXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxyXG4gICAqL1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIHRoZW1lOiB7XHJcbiAgICAgIGluaXQ6ICh7IHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgICAgIGxpYnJhcmllcy5zb3VyY2UuaGFuZGxlcnMucHVzaChibG9nTGlzdEhhbmRsZXIpO1xyXG4gICAgICAgIHN0YXRlLnNvdXJjZS5teWRhdGFzID0gYmxvZ0xpc3RIYW5kbGVyO1xyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGVNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9ICFzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuO1xyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcclxuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlicmFyaWVzOiB7XHJcbiAgICBodG1sMnJlYWN0OiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXHJcbiAgICAgICAqIGFuZCBpbnRlcm5hbCBsaW5rIGluc2lkZSB0aGUgY29udGVudCBIVE1MLlxyXG4gICAgICAgKiBZb3UgY2FuIGFkZCB5b3VyIG93biBwcm9jZXNzb3JzIHRvby5cclxuICAgICAgICovXHJcbiAgICAgIHByb2Nlc3NvcnM6IFtpbWFnZSwgaWZyYW1lLCBsaW5rXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcnNUaGVtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})