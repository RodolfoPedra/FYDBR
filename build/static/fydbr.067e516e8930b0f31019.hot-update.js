webpackHotUpdate("fydbr",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var blogListHandler={pattern:\"/\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,params,state,libraries}=_ref;var per_page=4;var{api,populate,getTotalPages}=libraries.source;var response=yield api.get({endpoint:\"posts\",params:{per_page}});var firstItems=yield populate({response,state});var pages=getTotalPages(response);var requests=[];for(var page=1;page<=pages;page++){requests.push(api.get({endpoint:\"posts\",params:{per_page,page}}));}var responses=yield Promise.all(requests);var newItems=yield Promise.all(responses.map(response=>populate({state,response})));var items=firstItems.concat(newItems);// 4. add data to source\nvar currentPageData=state.source.data[\"/\"];var newPageData={isBlogList:true,items};Object.assign(currentPageData,newPageData);});function func(_x){return _func.apply(this,arguments);}return func;}()};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\r\n     * In Frontity, any package can add React components to the site.\r\n     * We use roots for that, scoped to the `theme` namespace.\r\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\r\n     * State is where the packages store their default settings and other\r\n     * relevant state. It is scoped to the `theme` namespace.\r\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:true,showOnPost:false}}},/**\r\n   * Actions are functions that modify the state or deal with other parts of\r\n   * Frontity like libraries.\r\n   */actions:{theme:{// init: ({ libraries }) => {\n//   libraries.source.handlers.push(blogListHandler);\n// },\ntoggleMobileMenu:(_ref2)=>{var{state}=_ref2;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref3)=>{var{state}=_ref3;state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\r\n       * Add a processor to `html2react` so it processes the `<img>` tags\r\n       * and internal link inside the content HTML.\r\n       * You can add your own processors too.\r\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImJsb2dMaXN0SGFuZGxlciIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsInBlcl9wYWdlIiwiYXBpIiwicG9wdWxhdGUiLCJnZXRUb3RhbFBhZ2VzIiwic291cmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmRwb2ludCIsImZpcnN0SXRlbXMiLCJwYWdlcyIsInJlcXVlc3RzIiwicGFnZSIsInB1c2giLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwibmV3SXRlbXMiLCJtYXAiLCJpdGVtcyIsImNvbmNhdCIsImN1cnJlbnRQYWdlRGF0YSIsImRhdGEiLCJuZXdQYWdlRGF0YSIsImlzQmxvZ0xpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXJzVGhlbWUiLCJuYW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwiYXV0b1ByZWZldGNoIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIiwiaWZyYW1lIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7bWtCQUtBLEdBQU1BLGdCQUFlLENBQUcsQ0FDdEJDLE9BQU8sQ0FBRSxHQURhLENBRXRCQyxJQUFJLHdDQUFFLGVBQStDLElBQXhDLENBQUVDLEtBQUYsQ0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsQ0FBd0JDLFNBQXhCLENBQXdDLE1BQ25ELEdBQU1DLFNBQVEsQ0FBRyxDQUFqQixDQUNBLEdBQU0sQ0FBRUMsR0FBRixDQUFPQyxRQUFQLENBQWlCQyxhQUFqQixFQUFtQ0osU0FBUyxDQUFDSyxNQUFuRCxDQUNBLEdBQU1DLFNBQVEsTUFBU0osSUFBRyxDQUFDSyxHQUFKLENBQVEsQ0FDN0JDLFFBQVEsQ0FBRSxPQURtQixDQUU3QlYsTUFBTSxDQUFFLENBQ05HLFFBRE0sQ0FGcUIsQ0FBUixDQUF2QixDQU1BLEdBQU1RLFdBQVUsTUFBU04sU0FBUSxDQUFDLENBQ2hDRyxRQURnQyxDQUVoQ1AsS0FGZ0MsQ0FBRCxDQUFqQyxDQUlBLEdBQU1XLE1BQUssQ0FBR04sYUFBYSxDQUFDRSxRQUFELENBQTNCLENBQ0EsR0FBTUssU0FBUSxDQUFHLEVBQWpCLENBRUEsSUFBSyxHQUFJQyxLQUFJLENBQUcsQ0FBaEIsQ0FBbUJBLElBQUksRUFBSUYsS0FBM0IsQ0FBa0NFLElBQUksRUFBdEMsQ0FBMEMsQ0FDeENELFFBQVEsQ0FBQ0UsSUFBVCxDQUNFWCxHQUFHLENBQUNLLEdBQUosQ0FBUSxDQUNOQyxRQUFRLENBQUUsT0FESixDQUVOVixNQUFNLENBQUUsQ0FDTkcsUUFETSxDQUVOVyxJQUZNLENBRkYsQ0FBUixDQURGLEVBU0QsQ0FDRCxHQUFNRSxVQUFTLE1BQVNDLFFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaLENBQXhCLENBRUEsR0FBTU0sU0FBUSxNQUFTRixRQUFPLENBQUNDLEdBQVIsQ0FDckJGLFNBQVMsQ0FBQ0ksR0FBVixDQUFlWixRQUFELEVBQWNILFFBQVEsQ0FBQyxDQUFFSixLQUFGLENBQVNPLFFBQVQsQ0FBRCxDQUFwQyxDQURxQixDQUF2QixDQUdBLEdBQU1hLE1BQUssQ0FBR1YsVUFBVSxDQUFDVyxNQUFYLENBQWtCSCxRQUFsQixDQUFkLENBRUE7QUFDQSxHQUFNSSxnQkFBZSxDQUFHdEIsS0FBSyxDQUFDTSxNQUFOLENBQWFpQixJQUFiLENBQWtCLEdBQWxCLENBQXhCLENBQ0EsR0FBTUMsWUFBVyxDQUFHLENBQ2xCQyxVQUFVLENBQUUsSUFETSxDQUVsQkwsS0FGa0IsQ0FBcEIsQ0FLQU0sTUFBTSxDQUFDQyxNQUFQLENBQWNMLGVBQWQsQ0FBK0JFLFdBQS9CLEVBQ0QsQ0ExQ0csdUVBRmtCLENBQXhCLENBK0NBLEdBQU1JLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJoQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJK0IsS0FBSyxDQUFFLENBQ0xFLFlBQVksQ0FBRSxTQURULENBRUxDLElBQUksQ0FBRSxFQUZELENBR0xDLGdCQUFnQixDQUFFLEtBSGIsQ0FJTEMsUUFBUSxDQUFFLENBQ1JDLFVBQVUsQ0FBRSxJQURKLENBRVJDLFVBQVUsQ0FBRSxLQUZKLENBSkwsQ0FMRixDQVRTLENBeUJoQjtBQUNGO0FBQ0E7QUFDQSxLQUNFQyxPQUFPLENBQUUsQ0FDUFIsS0FBSyxDQUFFLENBQ0w7QUFDQTtBQUNBO0FBQ0FTLGdCQUFnQixDQUFFLFNBQWUsSUFBZCxDQUFFeEMsS0FBRixDQUFjLE9BQy9CQSxLQUFLLENBQUMrQixLQUFOLENBQVlJLGdCQUFaLENBQStCLENBQUNuQyxLQUFLLENBQUMrQixLQUFOLENBQVlJLGdCQUE1QyxDQUNELENBTkksQ0FPTE0sZUFBZSxDQUFFLFNBQWUsSUFBZCxDQUFFekMsS0FBRixDQUFjLE9BQzlCQSxLQUFLLENBQUMrQixLQUFOLENBQVlJLGdCQUFaLENBQStCLEtBQS9CLENBQ0QsQ0FUSSxDQURBLENBN0JPLENBMENoQmxDLFNBQVMsQ0FBRSxDQUNUeUMsVUFBVSxDQUFFLENBQ1Y7QUFDTjtBQUNBO0FBQ0E7QUFDQSxTQUNNQyxVQUFVLENBQUUsQ0FBQ0MsNkVBQUQsQ0FBUUMsOEVBQVIsQ0FBZ0JDLDRFQUFoQixDQU5GLENBREgsQ0ExQ0ssQ0FBbEIsQ0FzRGVsQix3RUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGltYWdlIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2ltYWdlXCI7XHJcbmltcG9ydCBpZnJhbWUgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaWZyYW1lXCI7XHJcbmltcG9ydCBsaW5rIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2xpbmtcIjtcclxuXHJcbmNvbnN0IGJsb2dMaXN0SGFuZGxlciA9IHtcclxuICBwYXR0ZXJuOiBcIi9cIixcclxuICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IHBlcl9wYWdlID0gNDtcclxuICAgIGNvbnN0IHsgYXBpLCBwb3B1bGF0ZSwgZ2V0VG90YWxQYWdlcyB9ID0gbGlicmFyaWVzLnNvdXJjZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCh7XHJcbiAgICAgIGVuZHBvaW50OiBcInBvc3RzXCIsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHBlcl9wYWdlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmaXJzdEl0ZW1zID0gYXdhaXQgcG9wdWxhdGUoe1xyXG4gICAgICByZXNwb25zZSxcclxuICAgICAgc3RhdGUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBhZ2VzID0gZ2V0VG90YWxQYWdlcyhyZXNwb25zZSk7XHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHBhZ2UgPSAxOyBwYWdlIDw9IHBhZ2VzOyBwYWdlKyspIHtcclxuICAgICAgcmVxdWVzdHMucHVzaChcclxuICAgICAgICBhcGkuZ2V0KHtcclxuICAgICAgICAgIGVuZHBvaW50OiBcInBvc3RzXCIsXHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgcGVyX3BhZ2UsXHJcbiAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XHJcblxyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgcmVzcG9uc2VzLm1hcCgocmVzcG9uc2UpID0+IHBvcHVsYXRlKHsgc3RhdGUsIHJlc3BvbnNlIH0pKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gZmlyc3RJdGVtcy5jb25jYXQobmV3SXRlbXMpO1xyXG5cclxuICAgIC8vIDQuIGFkZCBkYXRhIHRvIHNvdXJjZVxyXG4gICAgY29uc3QgY3VycmVudFBhZ2VEYXRhID0gc3RhdGUuc291cmNlLmRhdGFbXCIvXCJdO1xyXG4gICAgY29uc3QgbmV3UGFnZURhdGEgPSB7XHJcbiAgICAgIGlzQmxvZ0xpc3Q6IHRydWUsXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwgbmV3UGFnZURhdGEpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBtYXJzVGhlbWUgPSB7XHJcbiAgbmFtZTogXCJAZnJvbnRpdHkvbWFycy10aGVtZVwiLFxyXG4gIHJvb3RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEluIEZyb250aXR5LCBhbnkgcGFja2FnZSBjYW4gYWRkIFJlYWN0IGNvbXBvbmVudHMgdG8gdGhlIHNpdGUuXHJcbiAgICAgKiBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXHJcbiAgICAgKi9cclxuICAgIHRoZW1lOiBUaGVtZSxcclxuICB9LFxyXG4gIHN0YXRlOiB7XHJcbiAgICAvKipcclxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxyXG4gICAgICogcmVsZXZhbnQgc3RhdGUuIEl0IGlzIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXHJcbiAgICAgKi9cclxuICAgIHRoZW1lOiB7XHJcbiAgICAgIGF1dG9QcmVmZXRjaDogXCJpbi12aWV3XCIsXHJcbiAgICAgIG1lbnU6IFtdLFxyXG4gICAgICBpc01vYmlsZU1lbnVPcGVuOiBmYWxzZSxcclxuICAgICAgZmVhdHVyZWQ6IHtcclxuICAgICAgICBzaG93T25MaXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dPblBvc3Q6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBBY3Rpb25zIGFyZSBmdW5jdGlvbnMgdGhhdCBtb2RpZnkgdGhlIHN0YXRlIG9yIGRlYWwgd2l0aCBvdGhlciBwYXJ0cyBvZlxyXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxyXG4gICAqL1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIHRoZW1lOiB7XHJcbiAgICAgIC8vIGluaXQ6ICh7IGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICAgIC8vICAgbGlicmFyaWVzLnNvdXJjZS5oYW5kbGVycy5wdXNoKGJsb2dMaXN0SGFuZGxlcik7XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHRvZ2dsZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcclxuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gIXN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW47XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaWJyYXJpZXM6IHtcclxuICAgIGh0bWwycmVhY3Q6IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEFkZCBhIHByb2Nlc3NvciB0byBgaHRtbDJyZWFjdGAgc28gaXQgcHJvY2Vzc2VzIHRoZSBgPGltZz5gIHRhZ3NcclxuICAgICAgICogYW5kIGludGVybmFsIGxpbmsgaW5zaWRlIHRoZSBjb250ZW50IEhUTUwuXHJcbiAgICAgICAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIHByb2Nlc3NvcnMgdG9vLlxyXG4gICAgICAgKi9cclxuICAgICAgcHJvY2Vzc29yczogW2ltYWdlLCBpZnJhbWUsIGxpbmtdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFyc1RoZW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})