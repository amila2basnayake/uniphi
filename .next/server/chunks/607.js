exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 4003:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const SectionTitle = ({
  title,
  subTitle
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `base-header`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      children: title
    }), subTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: subTitle
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SectionTitle);

/***/ }),

/***/ 9607:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Team; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(4003);
;// CONCATENATED MODULE: ./components/Team/TeamList.js




const TeamList = ({
  team
}) => {
  const {
    img,
    name,
    designation,
    facebookUrl,
    twitterUrl
  } = team;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-md-4 col-sm-12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "team_wrp",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "team_img",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: 'assets/images/' + img,
          alt: "team"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team_info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: designation
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "social list-inline",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: `${facebookUrl}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-facebook"
              }), " "]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: `${twitterUrl}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-twitter"
              }), " "]
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var Team_TeamList = (TeamList);
;// CONCATENATED MODULE: ./data/Team/team.json
var team_namespaceObject = JSON.parse('[{"id":1,"name":"Adam Gilcrist ","img":"team1.jpg","designation":"Engineer","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":2,"name":"Kristen Crew ","img":"team2.jpg","designation":"Founder","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":3,"name":"Robert Doe ","img":"team3.jpg","designation":"Chairman","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":4,"name":"Jon Gilcrist ","img":"team2.jpg","designation":"Sinior manager","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":5,"name":"Jon Gilcrist ","img":"team3.jpg","designation":"Engineer","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":6,"name":"Jon Gilcrist ","img":"team1.jpg","designation":"Sinior manager","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":7,"name":"Jon Gilcrist ","img":"team2.jpg","designation":"Sinior manager","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"},{"id":8,"name":"Jon Gilcrist ","img":"team1.jpg","designation":"Sinior manager","facebookUrl":"//www.facebook.com","twitterUrl":"//www.twitter.com","linkedinUrl":"//www.facebook.com","instagramUrl":"//www.instagram.com","text":"Norem Ipsum is simply dummy text of the printing and types etting industry. Lorem Ipsum has been the indu stry\'s standard dummy text ever since the 1500s, when an unk nown printer took a galley of type Norem Ipsum is simply dummy text offiner  theprin at ting Norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type Norem Ipsum is simply dummy text of the printing"}]');
;// CONCATENATED MODULE: ./components/Team/index.js







function TeamSection({
  classes
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `team-section`,
    style: {
      backgroundImage: `url("${'/assets/images/bg_3.jpg'}")`
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
        title: "Our team Member",
        subTitle: "Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: team_namespaceObject.slice(0, 3).map(team => /*#__PURE__*/jsx_runtime_.jsx(Team_TeamList, {
          team: team
        }, team.id))
      })]
    })
  });
}

/* harmony default export */ var Team = (TeamSection);

/***/ })

};
;