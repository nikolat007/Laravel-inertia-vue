(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Cart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["cartItem", "flash", "errors"],
  data: function data() {
    return {
      itemid: null,
      items: this.cartItem,
      loadingState: false,
      form: {
        price: null,
        physicalAddress: null
      }
    };
  },
  components: {
    Slayout: _Layout_Slayout__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loadingState = true;
      this.$inertia.post('/order', this.form, {
        onFinish: function onFinish() {
          _this.loadingState = false, _this.form.physicalAddress = "";
        }
      });
    },
    incrementQuantity: function incrementQuantity(index) {
      this.items[index].quantity++;
    },
    decrementQuantity: function decrementQuantity(index) {
      if (this.items[index].quantity != 1) {
        this.items[index].quantity--;
      }
    }
  },
  computed: {
    total: function total() {
      var _this2 = this;

      this.form.price = 0;
      this.items.forEach(function (element) {
        _this2.form.price = _this2.form.price + element.quantity * element.product.price;
      });
      return this.form.price;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    background-color: #f5f5f5;\n}\n.bg-light-custom {\n    background-color: #f5f5f5;\n}\n.bg-orange {\n    background-color: #FF9800;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Pages/Cart.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Cart.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=f07b3b6e& */ "./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Cart.vue?vue&type=script&lang=js&");
/* harmony import */ var _Cart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Cart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/Pages/Cart.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Cart.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_f07b3b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=template&id=f07b3b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cart.vue?vue&type=template&id=f07b3b6e& ***!
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
  return _c("slayout", [
    _c("div", [
      _c(
        "section",
        {
          staticClass: "bg-light-custom",
          staticStyle: { margin: "150px 0px" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _vm.flash.errorMessage
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-danger m-2",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("strong", [_vm._v("Error:")]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.flash.errorMessage) +
                        "\n                "
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row m-0" }, [
              _c("div", { staticClass: "col-lg-8" }, [
                _c(
                  "div",
                  { staticClass: "card wish-list mb-3 border-0 shadow-sm" },
                  [
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c("h5", { staticClass: "mb-4" }, [
                          _vm._v("Your shopping cart")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.items, function(item, index) {
                          return _c("div", { key: item.id }, [
                            _c("div", { staticClass: "row mb-4" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-5 col-lg-3 col-xl-3" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "view zoom overlay z-depth-1 rounded mb-3 mb-md-0"
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "img-fluid w-100",
                                        attrs: {
                                          src:
                                            "/storage/product_covers/" +
                                            item.product.cover,
                                          alt: "Sample"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("a", { attrs: { href: "#!" } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "mask waves-effect waves-light"
                                          },
                                          [
                                            _c("div", {
                                              staticClass:
                                                "mask rgba-black-slight waves-effect waves-light"
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-7 col-lg-9 col-xl-9" },
                                [
                                  _c("div", [
                                    _c(
                                      "div",
                                      {
                                        staticClass: " justify-content-between"
                                      },
                                      [
                                        _c("div", [
                                          _c("h4", { staticClass: "my-3" }, [
                                            _vm._v(
                                              _vm._s(item.product.productName)
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "def-number-input number-input safari_only my-3 w-100"
                                            },
                                            [
                                              _c(
                                                "inertia-link",
                                                {
                                                  staticClass:
                                                    "btn btn-secondary",
                                                  attrs: {
                                                    href:
                                                      "/cartDecreaseQuantity/" +
                                                      item.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.decrementQuantity(
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "-\n                                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "text-center",
                                                staticStyle: { width: "50px" },
                                                attrs: {
                                                  min: "0",
                                                  name: "quantity",
                                                  type: "number",
                                                  disabled: "true"
                                                },
                                                domProps: {
                                                  value: item.quantity
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "inertia-link",
                                                {
                                                  staticClass:
                                                    "btn btn-secondary",
                                                  attrs: {
                                                    href:
                                                      "/cartIncreaseQuantity/" +
                                                      item.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.incrementQuantity(
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "+\n                                                            "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between align-items-center"
                                      },
                                      [
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                staticClass: "btn btn-danger",
                                                attrs: {
                                                  href:
                                                    "/removeitem/" + item.id,
                                                  type: "button"
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-trash-alt mr-1"
                                                }),
                                                _vm._v(
                                                  " Remove item\n                                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("h4", { staticClass: "mb-0" }, [
                                          _c("span", [
                                            _c("strong", [
                                              _vm._v(
                                                "Subtotal:\n                                                                " +
                                                  _vm._s(
                                                    item.product.price *
                                                      item.quantity
                                                  ) +
                                                  "\n                                                                €"
                                              )
                                            ])
                                          ])
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr")
                          ])
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-primary mb-0" }, [
                          _c("i", { staticClass: "fas fa-info-circle mr-1" }),
                          _vm._v(
                            " Do not delay\n                                    the purchase, adding\n                                    items to your cart does not mean booking them."
                          )
                        ])
                      ],
                      2
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c("div", { staticClass: "card mb-3 border-0 shadow-sm" }, [
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
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c("h5", { staticClass: "mb-3" }, [
                            _vm._v("The total amount of")
                          ]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "list-group list-group-flush" },
                            [
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Temporary amount\n                                            "
                                  ),
                                  _c("span", [_vm._v(_vm._s(_vm.total) + " €")])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "list-group-item d-flex justify-content-between align-items-center px-0"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Shipping\n                                            "
                                  ),
                                  _c("span", [_vm._v("0 €")])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass:
                                    "list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                                },
                                [
                                  _c("div", [
                                    _c("h4", [
                                      _c("strong", [
                                        _vm._v("The total amount of")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(_vm._s(_vm.total) + " €")
                                      ])
                                    ])
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "btn btn-secondary btn-block w-100 waves-effect waves-light",
                              attrs: { href: "/#menu" }
                            },
                            [
                              _vm._v(
                                "Continue\n                                        shopping"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm.errors.physicalAddress ? _c("br") : _vm._e(),
                          _vm._v(" "),
                          _vm.errors.physicalAddress
                            ? _c(
                                "div",
                                {
                                  staticClass: "alert alert-danger",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.errors.physicalAddress) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "physicalAddress" } }, [
                              _vm._v("Physical address")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.physicalAddress,
                                  expression: "form.physicalAddress"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                "aria-describedby": "phyhelp"
                              },
                              domProps: { value: _vm.form.physicalAddress },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "physicalAddress",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "small",
                              {
                                staticClass: "form-text text-muted",
                                attrs: { id: "phyhelp" }
                              },
                              [
                                _vm._v(
                                  "Before checkout, we need\n                                            your physical adress."
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm.loadingState == false
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary btn-block w-100 waves-effect waves-light",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "Go to\n                                        checkout"
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loadingState == true
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary btn-block w-100 waves-effect waves-light",
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
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
            "navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top",
          staticStyle: { height: "70px" }
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
                        staticClass: "nav-item nav-link active",
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