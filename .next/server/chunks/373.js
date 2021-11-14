exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 4373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ About; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/About/AboutList.js




const AboutItem = ({
  about
}) => {
  const {
    icon,
    title,
    text
  } = about;
  return /*#__PURE__*/_jsxs("div", {
    className: "about_item",
    children: [/*#__PURE__*/_jsx("div", {
      className: "abt_icon",
      children: /*#__PURE__*/_jsx("i", {
        className: `${icon}`
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "about_item_text",
      children: [/*#__PURE__*/_jsx("h4", {
        children: title
      }), /*#__PURE__*/_jsxs("p", {
        children: [" ", text, " "]
      })]
    })]
  });
};

/* harmony default export */ var AboutList = ((/* unused pure expression or super */ null && (AboutItem)));
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitleTwo.js
var SectionTitleTwo = __webpack_require__(1479);
;// CONCATENATED MODULE: ./data/About/about.json
var about_namespaceObject = [];
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(6616);
;// CONCATENATED MODULE: ./components/About/index.js








const AboutContent = () => {
  const {
    0: modalStatus,
    1: isOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "about-section",
    id: "about",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "about_img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/assets/images/howweareimg/aa.jpg",
              alt: "about"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-sm-12 about_why_choose",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "about_item_tb",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about_item_tbcell",
              children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitleTwo/* default */.Z, {
                title: "Who We Are ?"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "We here at UniPhi Car Cleaning are a newly established business and are committed to providing the optimal solution for your dealerships car cleaning needs. We have been in business for 5 years now and have designed car cleaning protocols for over 20 dealerships in South Australia."
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  style: {
                    marginTop: 82
                  },
                  children: "Our Goal"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Our Goal is to provide the most optimal and cost-effective solution for your dealerships car cleaning needs. We provide a cleaning service that is tailored to the unique circumstances of your dealership and take many factors into consideration when designing a cleaning protocol."
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var About = (AboutContent);

/***/ })

};
;