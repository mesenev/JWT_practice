webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/About.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var _Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n\n\n\n\n\n\n\n\n\nvar About = /*#__PURE__*/function (_Vue) {\n  Object(_Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(About, _Vue);\n\n  var _super = Object(_Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(About);\n\n  function About() {\n    var _this;\n\n    Object(_Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, About);\n\n    _this = _super.apply(this, arguments);\n    _this.posts = [];\n    _this.computed = Object(vuex__WEBPACK_IMPORTED_MODULE_8__[\"mapState\"])(['APIData']);\n    return _this;\n  }\n\n  Object(_Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(About, [{\n    key: \"created\",\n    value: function () {\n      var _created = Object(_Users_ivan_Desktop_egor_learning_github_JWT_practice_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _this2 = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('/about', {\n                  headers: {\n                    Authorization: 'Bearer ${ '\n                  }\n                }).then(function (response) {\n                  console.log(response.data);\n                  _this2.posts = response.data;\n                }).catch(function (error) {\n                  console.log(error);\n                });\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function created() {\n        return _created.apply(this, arguments);\n      }\n\n      return created;\n    }()\n  }]);\n\n  return About;\n}(vue_class_component__WEBPACK_IMPORTED_MODULE_6__[\"Vue\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPyEuL3NyYy92aWV3cy9BYm91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQWJvdXQudnVlP2IwZTIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IFZ1ZSB9IGZyb20gXCJ2dWUtY2xhc3MtY29tcG9uZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge21hcFN0YXRlfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFZ1ZSB7XG4gIHBvc3RzID0gW107XG4gIGNvbXB1dGVkID0gbWFwU3RhdGUoWydBUElEYXRhJ10pXG5cbiAgYXN5bmMgY3JlYXRlZCgpe1xuICAgICAgYXhpb3MuZ2V0KCcvYWJvdXQnLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAkeyAnIH0gfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmRhdGFcbiAgICB9KS5jYXRjaChlcnJvciA9PntcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfSlcbiAgfVxuXG5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBRkE7QUFlQTtBQUNBOzs7O0FBWkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUxBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=script&lang=ts\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/About.vue?vue&type=template&id=039c5b43&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"about\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"This is an about page\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = {\n  style: {\n    \"border\": \"2px solid red\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [_hoisted_2, (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.posts, function (post) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: post.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(post.title), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h2\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(post.content), 1\n    /* TEXT */\n    )])]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPyEuL3NyYy92aWV3cy9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM5YzViNDMmdHM9dHJ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9BYm91dC52dWU/MGNlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImFib3V0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiaDFcIiwgbnVsbCwgXCJUaGlzIGlzIGFuIGFib3V0IHBhZ2VcIiwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IHN0eWxlOiB7XCJib3JkZXJcIjpcIjJweCBzb2xpZCByZWRcIn0gfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9ob2lzdGVkXzIsXG4gICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdChfY3R4LnBvc3RzLCAocG9zdCkgPT4ge1xuICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICBrZXk6IHBvc3QuaWRcbiAgICAgIH0sIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgxXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcocG9zdC50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcocG9zdC5jb250ZW50KSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKVxuICAgICAgXSkpXG4gICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gIF0pKVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFUQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43&ts=true\n");

/***/ })

})