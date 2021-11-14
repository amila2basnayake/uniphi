(function() {
var exports = {};
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 3525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const SidebarItem = ({
  title,
  classes,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classes ? classes : 'sidebar-single',
    children: [title ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: "widget-title",
      children: title
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "sidebar-body",
      children: children
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SidebarItem);

/***/ }),

/***/ 8468:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Sidebar = ({
  classes,
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classes,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Sidebar);

/***/ }),

/***/ 7837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6989);
/* harmony import */ var _components_PageHeader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9981);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2529);
/* harmony import */ var _data_Services_service_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3642);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8468);
/* harmony import */ var _components_Sidebar_SidebarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3525);
/* harmony import */ var _components_UI_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5385);
/* harmony import */ var _components_UI_List_Item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4685);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);













const SingleServicePage = ({
  title,
  singleThumb,
  descriptionTwo,
  titleTwo
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      pageTitle: "UNIPHI Car wash and Detailing",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageHeader_index__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        bgImg: '/assets/images/img98.jpg',
        title: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        classes: "single_service",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          classes: 'col-md-4 col-sm-12 single_service_right',
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar_SidebarItem__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            classes: "single_service_cat",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_List__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
              children: _data_Services_service_json__WEBPACK_IMPORTED_MODULE_5__.map(serviceItem => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_List_Item__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_10__.default, {
                  href: `/service/${serviceItem.id}`,
                  children: serviceItem.title
                })
              }, serviceItem.id))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Sidebar_SidebarItem__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            classes: "service_contact",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
              children: "Contact "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "serv_contact_wrp",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "single-contact-info",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "fa fa-phone"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  children: "+61 407 247 886"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "single-contact-info",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "fa fa-envelope"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["132 Springbank Rd,  ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " Clapham 5062"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "single-contact-info",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "fa fa-globe"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                  children: ["132 Springbank Rd,  ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " Clapham 5062"]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-8 col-sm-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "single_service_left",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: '/assets/images/' + singleThumb,
              alt: "service",
              className: "sng_service_img"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
              children: titleTwo
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              dangerouslySetInnerHTML: {
                __html: descriptionTwo
              }
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleServicePage);
async function getStaticProps(context) {
  const {
    params
  } = context;
  return {
    props: _data_Services_service_json__WEBPACK_IMPORTED_MODULE_5__.find(item => item.id.toString() === params.id)
  };
}
async function getStaticPaths() {
  return {
    paths: _data_Services_service_json__WEBPACK_IMPORTED_MODULE_5__.map(item => ({
      params: {
        id: item.id.toString()
      }
    })),
    fallback: false
  };
}

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,810,647,642], function() { return __webpack_exec__(7837); });
module.exports = __webpack_exports__;

})();