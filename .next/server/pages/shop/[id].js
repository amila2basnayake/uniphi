(function() {
var exports = {};
exports.id = 973;
exports.ids = [973];
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

/***/ 3050:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./layouts/LayoutOne.js + 8 modules
var LayoutOne = __webpack_require__(6989);
// EXTERNAL MODULE: ./components/PageHeader/index.js
var PageHeader = __webpack_require__(9981);
// EXTERNAL MODULE: ./components/PageWrapper/index.js
var PageWrapper = __webpack_require__(2529);
// EXTERNAL MODULE: ./components/UI/Carousel/slick.js
var slick = __webpack_require__(4430);
// EXTERNAL MODULE: ./components/SectionTitles/SectionTitle.js
var SectionTitle = __webpack_require__(4003);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/RelatedProduct/RelatedProductList.js





const ProductItem = ({
  product
}) => {
  const {
    name,
    image,
    id,
    orginalPrice
  } = product;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "item",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "product_wrp",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "product_img",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: '/assets/images/' + image,
          alt: "product"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "product_info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/shop/${id}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [" ", name, " "]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "product_rating",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon_star"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon_star"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon_star"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon_star"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon_star-half_alt"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "product_price",
          children: orginalPrice
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "project_view",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "project-link",
          href: "images/work-1.jpg",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-glyph-13"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "project-link",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-glyph-52"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var RelatedProductList = (ProductItem);
;// CONCATENATED MODULE: ./data/RelatedProduct/related-product.json
var related_product_namespaceObject = JSON.parse('[{"id":1,"name":"Dell Laptop","image":"product01.png","discountPrice":"$76.00","orginalPrice":"$62.00","discountRate":"6%"},{"id":2,"name":"Monitor","image":"product02.png","discountPrice":"$96.00","orginalPrice":"$87.00","discountRate":"6%"},{"id":3,"name":"Computer","image":"product03.png","discountPrice":"$56.00","orginalPrice":"$45.00","discountRate":"6%"},{"id":4,"name":"Mac Book ","image":"product04.png","discountPrice":"$76.00","orginalPrice":"$72.00","discountRate":"6%"},{"id":5,"name":"Iphone ","image":"product03.png","discountPrice":"$36.00","orginalPrice":"$34.00","discountRate":"6%"}]');
;// CONCATENATED MODULE: ./components/RelatedProduct/index.js








const RelatedProduct = () => {
  const settings = {
    dots: false,
    arrows: false,
    margin: 0,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // Responsive breakpoints
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `related_product_section`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
        title: "Related Products",
        subTitle: " Service features tended no do thoughts me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col",
          children: /*#__PURE__*/jsx_runtime_.jsx(slick/* default */.Z, {
            settings: settings,
            children: related_product_namespaceObject.map((product, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(RelatedProductList, {
                product: product
              }, product.id)
            }, i))
          })
        })
      })]
    })
  });
};

/* harmony default export */ var components_RelatedProduct = (RelatedProduct);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./data/Products/products.json
var products = __webpack_require__(8296);
;// CONCATENATED MODULE: ./pages/shop/[id].js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SingleServicePage = ({
  name,
  imageGallery,
  modelNumber,
  orginalPrice,
  discountPrice,
  brand,
  categories,
  tags,
  description,
  additionalInfo,
  review
}) => {
  const settings = {
    customPaging: function (i) {
      return /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: `/assets/images/product_${i + 1}.jpg`,
        alt: ""
      });
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; // Product Tabs

  const {
    0: productTabs,
    1: setProductTabs
  } = (0,external_react_.useState)(1); // Product Tabs

  const toggleTab = index => {
    setProductTabs(index);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutOne/* default */.Z, {
      pageTitle: "UNIPHI Car wash and Detailing",
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageHeader/* default */.Z, {
        bgImg: '/assets/images/header.jpg',
        title: name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageWrapper/* default */.Z, {
        classes: "shop-product-area",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-6 col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "shop-products",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "single-item-detail",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "product-thumbnail",
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
                  children: imageGallery.map((gallery, indx) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: '/assets/images/' + gallery,
                      alt: "gallery"
                    })
                  }, indx))
                }))
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-6 col-sm-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "allproduct-info",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "tittle_product",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "single-shop",
                children: [" ", name, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "next_prev",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "single-shop",
                  className: "next",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "icon-glyph-205"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "single-shop",
                  className: "prev",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "icon-glyph-204"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "allproduct-price-area",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: "price",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "n-amt",
                  children: discountPrice
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("del", {
                    children: [" ", orginalPrice, " "]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "star-rating rating2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "star yes",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-star"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "star yes",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-star"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "star yes",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-star"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "star yes",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-star"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "star no",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-star"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "reviews",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "single-shop",
                      children: "12 Reviews(s)"
                    }), " "]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: " | "
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "add-reviews",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "single-shop",
                      children: "Add Your Review"
                    })
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product_model",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "prd_model",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Model Number:"
                    }), "\xA0"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: "model_no",
                    children: [" ", modelNumber, " "]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "prd_brand",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Brand:"
                    }), "\xA0"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: brand
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "p-content",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "d-content",
                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. "
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cart-quantity",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "cart-plus-minus",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "cart-plus-minus-box",
                  type: "text",
                  name: "qtybutton",
                  placeholder: "1"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "dec qtybutton",
                  children: "-"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "inc qtybutton",
                  children: "+"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "allchoices",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "choice-icon",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "single-shop",
                      className: "text-uppercase adtocart",
                      children: "add to cart"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "single-shop",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "heart",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "icon-glyph-52"
                        })
                      })
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "categories-area",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "category",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Categories :"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: categories.map((cat, indx) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "single-shop",
                    children: [" ", cat, ", "]
                  })
                }, indx))
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "categories-area",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "category",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Tags :"
                }), " "]
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: tags.map((tag, indx) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "single-shop",
                    children: [" ", tag, ", "]
                  })
                }, indx))
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "share-area",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "single-shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-instagram"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "single-shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-pinterest"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "single-shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-linkedin"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "single-shop",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-dribbble"
                    })
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cust-reviews-area",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "product-tab",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product-tabs-btn",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: productTabs === 1 ? "tabs active-tabs" : "tabs",
                  onClick: () => toggleTab(1),
                  children: "Product Description"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: productTabs === 2 ? "tabs active-tabs" : "tabs",
                  onClick: () => toggleTab(2),
                  children: "Additional Information"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: productTabs === 3 ? "tabs active-tabs" : "tabs",
                  onClick: () => toggleTab(3),
                  children: "Review (1)"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product-content-tabs",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: productTabs === 1 ? "content  active-content" : "content",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    dangerouslySetInnerHTML: {
                      __html: description
                    }
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: productTabs === 2 ? "content  active-content" : "content",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product_aditi_cont",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: additionalInfo.des
                    }), /*#__PURE__*/jsx_runtime_.jsx("table", {
                      className: "prod_attributes",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                            children: "Color"
                          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                            children: additionalInfo.color
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                          className: "attri",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                            children: "Weight"
                          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                            children: additionalInfo.weight
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                          className: "attri",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                            children: "Condition"
                          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                            children: additionalInfo.condition
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                          className: "attri",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                            children: "Product"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                            children: [" ", additionalInfo.product]
                          })]
                        })]
                      })
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: productTabs === 3 ? "content  active-content" : "content",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product_revi",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      alt: "",
                      src: '/assets/images/' + review.img
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "revi_text",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: "revi_nam",
                        children: [" ", review.name, " - "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "revi_dat",
                        children: review.date
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: "revi_rating",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-star"
                        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-star"
                        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-star"
                        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-star"
                        }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-star"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "rat_des",
                        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: review.text
                        })
                      })]
                    })]
                  })
                })]
              })]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_RelatedProduct, {})]
    })
  });
};

/* harmony default export */ var _id_ = (SingleServicePage);
async function getStaticProps(context) {
  const {
    params
  } = context;
  return {
    props: products.find(item => item.id.toString() === params.id)
  };
}
async function getStaticPaths() {
  return {
    paths: products.map(item => ({
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

/***/ 9080:
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,810,647,430,296], function() { return __webpack_exec__(3050); });
module.exports = __webpack_exports__;

})();