exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 7384:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ gallery_one; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./data/Gallery/gallery.json
var gallery = __webpack_require__(4465);
;// CONCATENATED MODULE: ./components/Gallery/gallery-one/GalleryItems.js





const GalleryItems = ({
  gallery
}) => {
  const {
    title,
    thumb,
    id
  } = gallery;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-md-12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "project-item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "project_slide_img",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `assets/images/${thumb}`,
          alt: "product"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "project_text",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/gallery/${id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            children: [" ", title, " "]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/single-shop",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "project_link",
            children: "View details"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var gallery_one_GalleryItems = (GalleryItems);
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitleTwo.js
var SectionTitleTwo = __webpack_require__(1479);
;// CONCATENATED MODULE: ./components/Gallery/gallery-one/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GalleryContent = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '200px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '80px',
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '40px',
        centerMode: false,
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        dots: false
      }
    }]
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "project-section",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx(SectionTitleTwo/* default */.Z, {
          subTitle: "OUR LATEST WORK",
          title: "Special Gallery"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        children: gallery.map(gallery => /*#__PURE__*/jsx_runtime_.jsx(gallery_one_GalleryItems, {
          gallery: gallery
        }, gallery.id))
      })), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "project_btn text-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/gallery-two",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "more-link",
            children: " View More "
          })
        })
      })]
    })
  });
};

/* harmony default export */ var gallery_one = (GalleryContent);

/***/ }),

/***/ 1479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const SectionTitleTwo = ({
  title,
  subTitle
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `base-header base-header-left`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
      children: subTitle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      children: title
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SectionTitleTwo);

/***/ })

};
;