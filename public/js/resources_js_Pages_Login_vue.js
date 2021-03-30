(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_Slayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout/Slayout */ "./resources/js/Pages/Layout/Slayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["errors", "flash"],
  data: function data() {
    return {
      loadingState: false,
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loadingState = true, this.flash.errorMessage = null;
      this.$inertia.post('/userLogin', this.form, {
        onFinish: function onFinish() {
          _this.loadingState = false, _this.form.email = "", _this.form.password = "";
        },
        onSuccess: function onSuccess() {
          if (_this.flash.errorMessage == null) {
            _this.$toaster.success('You have successfully logged in.');
          }
        }
      });
    }
  },
  components: {
    Slayout: _Layout_Slayout__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/js/Pages/Layout/Slayout.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Layout/Slayout.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slayout.vue?vue&type=template&id=4a462d7e& */ "./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/Slayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0004d9e0& */ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slayout_vue_vue_type_template_id_4a462d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Slayout.vue?vue&type=template&id=4a462d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e&");


/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0004d9e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Slayout.vue?vue&type=template&id=4a462d7e& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    [
      _c(
        "nav",
        {
          staticClass:
            "navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
        },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse justify-content-end",
                attrs: { id: "navbarNavAltMarkup" }
              },
              [
                _c(
                  "div",
                  { staticClass: "navbar-nav" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-item nav-link",
                        attrs: { href: "/" }
                      },
                      [_vm._v("Home")]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
      _c("img", { attrs: { src: "icon/pizza.svg", height: "20px" } }),
      _c("b", [_vm._v("  PizzaMaster")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNavAltMarkup",
          "aria-controls": "navbarNavAltMarkup",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("slayout", [
    _c("div", [
      _c("section", [
        _c("div", { staticClass: "row p-0 m-0" }, [
          _c(
            "div",
            {
              staticClass:
                "col-lg p-0 m-0 login-img d-flex justify-content-center align-items-center"
            },
            [
              _c("div", { staticClass: "login-text" }, [
                _c("h1", { staticClass: "text-center text-light" }, [
                  _vm._v("Welcome back!")
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "text-center text-light" }, [
                  _vm._v("To keep connected with us "),
                  _c("br"),
                  _vm._v(
                    " please login with your\n                            personal info."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "overlay-login bg-orange" }),
              _vm._v(" "),
              _c("div", { staticClass: "bg-img" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm p-0 m-0 bg-white" }, [
            _c("div", { staticStyle: { height: "100vh" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "justify-content-center align-items-center d-flex",
                  staticStyle: { height: "inherit" }
                },
                [
                  _c("div", { staticStyle: { width: "400px" } }, [
                    _c("h3", { staticClass: "text-center mb-5" }, [
                      _vm._v("Welcome back, please login")
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submit()
                          }
                        }
                      },
                      [
                        _vm.flash.errorMessage
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "alert alert-danger alert-dismissible fade show",
                                attrs: { role: "alert" }
                              },
                              [
                                _c("strong", [_vm._v("Error:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.flash.errorMessage) +
                                    "\n                                    "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "exampleInputEmail1" }
                            },
                            [_vm._v("Email address")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "exampleInputEmail1",
                              "aria-describedby": "emailHelp"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-text",
                              attrs: { id: "emailHelp" }
                            },
                            [
                              _vm._v(
                                "We'll never share your email with\n                                            anyone else."
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors.email
                            ? _c("p", { staticClass: "text-danger" }, [
                                _vm._v("* " + _vm._s(_vm.errors.email))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "exampleInputPassword1" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "exampleInputPassword1"
                            },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.password
                            ? _c("p", { staticClass: "text-danger" }, [
                                _vm._v("* " + _vm._s(_vm.errors.password))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm.loadingState == false
                          ? _c(
                              "button",
                              {
                                staticClass: "btn bg-orange text-light w-100",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Login")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.loadingState == true
                          ? _c(
                              "button",
                              {
                                staticClass: "btn bg-orange text-light w-100",
                                attrs: { type: "button", disabled: "" }
                              },
                              [
                                _c("span", {
                                  staticClass:
                                    "spinner-border spinner-border-sm",
                                  attrs: {
                                    role: "status",
                                    "aria-hidden": "true"
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "txt-orange",
                                attrs: { href: "/register" }
                              },
                              [
                                _vm._v(
                                  "Your first time here?\n                                            Please register."
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);