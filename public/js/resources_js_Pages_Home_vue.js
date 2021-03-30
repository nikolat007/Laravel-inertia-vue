(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout/Layout */ "./resources/js/Pages/Layout/Layout.vue");
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
  props: ["product"],
  components: {
    Layout: _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      responsive: false
    };
  },
  methods: {
    responsiveToggle: function responsiveToggle() {
      if (this.responsive == false) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    logout: function logout() {
      this.$toaster.success('You have successfully logged out.');
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layout/Layout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Layout/Layout.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=44efcb76& */ "./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layout/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&");


/***/ }),

/***/ "./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_44efcb76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=44efcb76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("layout", [
    _c("div", [
      _c("header", [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c(
          "video",
          {
            attrs: {
              playsinline: "playsinline",
              autoplay: "autoplay",
              muted: "muted",
              loop: "loop"
            },
            domProps: { muted: true }
          },
          [
            _c("source", {
              attrs: { src: "/video/video.mp4", type: "video/mp4" }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "container h-100" }, [
          _c(
            "div",
            { staticClass: "d-flex h-100 text-center align-items-center" },
            [
              _c("div", { staticClass: "w-100 text-white" }, [
                _c("h1", { staticClass: "display-3" }, [
                  _vm._v("Pizza Master")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "lead mb-0" }, [
                  _vm._v("The best pizzeria in the world!")
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-light-custom", attrs: { id: "welcome" } }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg" }, [
              _c("h1", [_vm._v("Welcome")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", { staticClass: "my-5 text-center" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                            deserunt mollit anim id est laborum."
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg" }, [
              _c("img", {
                staticClass: "d-block w-100 rounded",
                attrs: {
                  src: "/img/home/menu-restaurant-vintage-table.jpg",
                  alt: ""
                }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white", attrs: { id: "menu" } }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("h1", { staticClass: "pb-5 text-center" }, [_vm._v("Menu")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-group justify-content-center" },
            _vm._l(_vm.product, function(product) {
              return _c(
                "div",
                {
                  key: product.id,
                  staticClass:
                    "card mx-1 border-0 shadow p-3 col-xl-3 col-lg mb-5 bg-white rounded"
                },
                [
                  _c("img", {
                    staticClass: "card-img-top",
                    attrs: {
                      src: "/storage/product_covers/" + product.cover,
                      alt: "Card image cap"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body d-flex flex-column" },
                    [
                      _c("h5", { staticClass: "card-title text-center" }, [
                        _vm._v(_vm._s(product.productName))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v(_vm._s(product.description))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v("Price: " + _vm._s(product.price) + " €")
                      ]),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass: "btn bg-orange mt-auto text-light",
                          attrs: { href: "/cartadd/" + product.product_id }
                        },
                        [_vm._v("Add to cart")]
                      )
                    ],
                    1
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-light-custom", attrs: { id: "gallery" } }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("h1", { staticClass: "my-5 text-center" }, [_vm._v("Gallery")]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/1.jpg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/2.jpg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/3.jpg" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/4.jpg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/5.jpg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "col-md-4",
                attrs: {
                  href: "",
                  "data-toggle": "lightbox",
                  "data-gallery": "gallery"
                }
              },
              [
                _c("img", {
                  staticClass: "img-fluid rounded",
                  attrs: { src: "/img/gallery/6.jpg" }
                })
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white", attrs: { id: "aboutus" } }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("h1", { staticClass: "text-center" }, [_vm._v("About Us")]),
          _vm._v(" "),
          _c("p", { staticClass: "my-5 text-center" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti\n                    reiciendis, veniam eveniet inventore. Ab magni, qui magnam ipsam obcaecati minus perferendis non\n                    suscipit, illum ducimus laborum recusandae vitae natus quia incidunt quo sit! Pariatur quae\n                    atque architecto natus saepe nemo adipisci laborum earum reiciendis et libero harum, quod,\n                    expedita optio sit voluptatem cum cupiditate dolorem vitae! A expedita maxime doloremque, fugit\n                    provident quasi, vel officiis exercitationem, ut soluta doloribus aliquid, id in accusamus nam\n                    dolorum architecto praesentium voluptate. Accusamus corporis velit consequatur, rerum tempore\n                    impedit quas eaque eveniet, quia nesciunt, consectetur neque, eos voluptates perspiciatis.\n                    Deserunt corporis sequi labore dignissimos dolor quasi, ex ut libero fugit explicabo nesciunt,\n                    saepe debitis nam qui sapiente id accusantium. Eius, officia! Iure sit quos repellendus id harum\n                    praesentium atque ea nostrum explicabo doloremque amet facere eaque, earum. At, repellendus\n                    aliquam dignissimos! Quos, optio a atque cum dolor voluptatum, in quidem, nihil saepe harum\n                    expedita. Provident, totam doloribus omnis quas magni repellat, odit eveniet atque dolores sit\n                    dolore vel, nesciunt accusamus, nisi. Enim quod officia officiis doloribus fugiat voluptatibus\n                    error doloremque et, voluptatem assumenda perferendis soluta qui molestiae quidem! Tenetur sed\n                    dolorem, vel fugit quod dolor quisquam, error labore asperiores cumque in doloremque molestiae\n                    nisi."
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "team-section text-center py-5 bg-light-custom" },
        [
          _c("div", { staticClass: "container" }, [
            _c("h2", { staticClass: "h1-responsive font-weight-bold my-5" }, [
              _vm._v("Our amazing team")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "grey-text w-responsive mx-auto mb-5" }, [
              _vm._v(
                "Lorem ipsum dolor sit amet, consectetur adipisicing\n                    elit.\n                    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum\n                    quisquam\n                    eum porro a pariatur veniam."
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/First.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("Mario Donn")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Pizza man")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/Second.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("Jeremy Doe")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Chief")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/Third.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("John Doe")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Boss")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/Fourth.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("Anna Williams")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Waiter")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/Fifth.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("Maria Williams")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Waiter")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 mb-lg-0 mb-5" }, [
                _c("div", { staticClass: "avatar mx-auto" }, [
                  _c("img", {
                    staticClass: "rounded-circle z-depth-1 w-100",
                    attrs: { src: "/img/home/Sixth.png", alt: "Sample avatar" }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "font-weight-bold mt-4 mb-3" }, [
                  _vm._v("Jason Dorn")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase blue-text" }, [
                  _c("strong", [_vm._v("Chief")])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "grey-text mb-5" }, [
                  _vm._v(
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\n                            consectetur,\n                            adipisci sed quia non numquam modi tempora eius."
                  )
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "bg-orange", attrs: { id: "contact" } }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("h1", { staticClass: "text-light my-5 text-center" }, [
            _vm._v("Contact")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg p-5" }, [
              _c("h2", { staticClass: "text-light text-center pb-5" }, [
                _vm._v("Our Location")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center text-light my-3" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing\n                            elit. Est assumenda, quas quasi sapiente repellat dolorum, culpa, aliquam consequatur\n                            recusandae ex, quo tenetur in nam explicabo excepturi ullam. Est nemo laudantium fuga ea\n                            eum enim deleniti vel vero alias corporis odio officia, voluptatibus perspiciatis\n                            tempora, amet quos deserunt commodi, adipisci magnam et in? Deleniti sequi dignissimos\n                            perferendis alias ea libero aspernatur minima quos veritatis asperiores saepe quisquam\n                            ducimus illo dolorum, optio voluptatibus nihil quas deserunt eveniet dolores aliquam\n                            excepturi? Nulla accusantium perferendis repellat nobis, id quibusdam debitis eum\n                            nesciunt quia non fugit dolor provident quae in velit? Corporis nostrum quas ex."
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg p-5" }, [
              _c("form", [
                _c("div", { staticClass: "form-outline mb-4 form-white" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label text-light",
                      attrs: { for: "form6Example3" }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", id: "form6Example3" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-outline mb-4 form-white" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label text-light",
                      attrs: { for: "form6Example4" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", id: "form6Example4 " }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-outline mb-4 form-white" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label text-light",
                      attrs: { for: "form6Example5" }
                    },
                    [_vm._v("Subject")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "email", id: "form6Example5" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-outline mb-4 form-white" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label text-light",
                      attrs: { for: "form6Example7" }
                    },
                    [_vm._v("Message")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    staticClass: "form-control",
                    attrs: { id: "form6Example7", rows: "4" }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-block mb-4",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                )
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layout/Layout.vue?vue&type=template&id=44efcb76& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("main", [
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
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { href: "#menu" }
                    },
                    [_vm._v("Menu")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { href: "#gallery" }
                    },
                    [_vm._v("Gallery")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { href: "#aboutus" }
                    },
                    [_vm._v("About Us")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-item nav-link",
                      attrs: { href: "#contact" }
                    },
                    [_vm._v("Contact")]
                  ),
                  _vm._v(" "),
                  _vm.$page.props.auth.user
                    ? _c(
                        "inertia-link",
                        {
                          staticClass: "nav-item nav-link",
                          attrs: { type: "button", href: "/cart" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-shopping-cart" }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "badge bg-orange text-light p-1" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$page.props.auth.user.numberOfCartItems
                                )
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$page.props.auth.user
                    ? _c(
                        "inertia-link",
                        {
                          staticClass: "nav-item nav-link",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$page.props.auth.user.firstName) +
                              " " +
                              _vm._s(_vm.$page.props.auth.user.lastName)
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$page.props.auth.user
                    ? _c(
                        "inertia-link",
                        {
                          staticClass:
                            "nav-item nav-link btn text-light bg-orange",
                          attrs: { href: "/logout" },
                          on: {
                            click: function($event) {
                              return _vm.logout()
                            }
                          }
                        },
                        [_vm._v("Logout")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$page.props.auth.user == null
                    ? _c(
                        "inertia-link",
                        {
                          staticClass:
                            "nav-item nav-link btn text-light bg-orange",
                          attrs: { href: "/login" }
                        },
                        [_vm._v("Login")]
                      )
                    : _vm._e()
                ],
                1
              )
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("article", [_vm._t("default")], 2),
    _vm._v(" "),
    _vm._m(3)
  ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-item nav-link", attrs: { href: "#" } }, [
      _vm._v("Home "),
      _c("span", { staticClass: "sr-only" }, [_vm._v("(current)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "bg-dark d-flex justify-content-center" },
      [
        _c("div", [
          _c("p", { staticClass: "text-light my-3" }, [
            _vm._v("PizzaMaster All Rights Reserved.")
          ])
        ])
      ]
    )
  }
]
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