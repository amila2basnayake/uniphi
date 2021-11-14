exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 4685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function LI({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
    children: children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (LI);

/***/ }),

/***/ 5385:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function List({
  children,
  classes
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
    className: classes,
    children: children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (List);

/***/ }),

/***/ 6989:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_LayoutOne; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Header/Header.js





const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "header_topbar",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header_top_right list-unstyled",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-phone"
              }), "+61 407 247 886"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-globe"
              }), "132 Springbank Rd, Clapham 5062"]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "header_socil list-inline pull-left",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-envelope"
              }), "connect2.rahan.rahman@gmail.com"]
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-facebook"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-twitter"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-linkedin"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-google-plus"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./data/Navbar/navbar.json
var navbar_namespaceObject = JSON.parse('[{"id":1,"title":"Home","link":"/"},{"id":1,"title":"Services & Product","link":[{"id":7.1,"title":"Gallery One","link":"/gallery"},{"id":7.2,"title":"Gallery Two","link":"/gallery-two"},{"id":7.4,"title":"Service Page","link":"/service"},{"id":7.5,"title":"Single Service","link":"/service/1"},{"id":7.7,"title":"About Page","link":"/about"}]},{"id":6,"title":"Gallery","link":"/gallery-two"},{"id":6,"title":"Contact","link":"/contact"}]');
;// CONCATENATED MODULE: ./components/Header/Navbar/NavbarItem.js






function NavbarItem(props) {
  return navbar_namespaceObject.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: item.subMenu || item.megaMenu ? 'menuItemHasChildren' : '',
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: item.link,
      children: item.title
    }), (() => {
      if (item.subMenu) {
        return /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "subMenu",
          children: item.subMenu.map((subItem, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: subItem.link,
                children: subItem.title
              })
            }, index);
          })
        });
      }
    })()]
  }, item.id));
}

/* harmony default export */ var Navbar_NavbarItem = (NavbarItem);
;// CONCATENATED MODULE: ./components/mobile-menu/MobileMenu.js





const MobileMenu = () => {
  (0,external_react_.useEffect)(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", `<span class="menuExpand"><i></i></span>`);
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.remove("active");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "offcanvasMobileMenu",
    id: "offcanvas-mobile-menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "offcanvasMenuClose",
      id: "mobile-menu-close-trigger",
      onClick: () => closeMobileMenu(),
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "icon_close"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "offcanvasWrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "offcanvasInnerContent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: "offcanvasNavigation",
          id: "offcanvas-navigation",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Navbar_NavbarItem, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "offcanvasMobileSearchArea",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            action: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "search",
              placeholder: "Search ..."
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "submit"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header_top_right list-unstyled",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-phone"
              }), " +234 567 234 875"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-envelope"
              }), " info@yourdomain.com"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-globe"
              }), " 1st Avenue, Boston"]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header_top_left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "header_socil list-inline",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-facebook"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-twitter"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "fa fa-linkedin"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#/",
                className: "fa fa-google-plus"
              })
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var mobile_menu_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./components/mobile-menu/MobileBtn.js



const HeaderBtn = () => {
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.add("active");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "header-btn-wrapper",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mobile-button-wrapper d-block d-lg-none text-right",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "mobile-aside-button",
        onClick: () => triggerMobileMenu(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "icon_menu"
        })
      })
    })
  });
};

/* harmony default export */ var MobileBtn = (HeaderBtn);
;// CONCATENATED MODULE: ./components/Header/Navbar/Navbar.js








function Navbar(props) {
  const triggerSearch = () => {
    const searchToggle = document.querySelector(".search_icon_inr");
    searchToggle.classList.toggle("active");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "navigation",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo col-md-2 col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "../../../assets/images/logo.png",
                alt: "",
                style: {
                  width: 326,
                  marginTop: -6
                }
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(MobileBtn, {}), /*#__PURE__*/jsx_runtime_.jsx(mobile_menu_MobileMenu, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-10 col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "navigation",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Navbar_NavbarItem, {})
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ var Navbar_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/UI/Widget/index.js




function Widget({
  title,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "widget",
    children: [title ? /*#__PURE__*/jsx_runtime_.jsx("h5", {
      children: title
    }) : '', children]
  });
}

/* harmony default export */ var UI_Widget = (Widget);
// EXTERNAL MODULE: ./components/UI/List/index.js
var List = __webpack_require__(5385);
// EXTERNAL MODULE: ./components/UI/List/Item.js
var Item = __webpack_require__(4685);
;// CONCATENATED MODULE: ./components/Footer/footer.js








const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "footer-section",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(UI_Widget, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "../../assets/images/logo2.png",
              alt: "",
              style: {
                width: 100
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "footer_p",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "footer_para",
                children: "We have been in business for 5 years now and have designed car cleaning protocols for over 20 dealerships in South Australia."
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "footer_socil",
              style: {
                fontSize: 12
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "list-icons link-list footer_soc",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "//facebook.com",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-facebook"
                    })
                  }), " "]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "//twitter.com",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-twitter"
                    })
                  }), " "]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "//instagram.com",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-instagram"
                    })
                  }), " "]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "//pinterest.com",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-pinterest"
                    })
                  }), " "]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "//behance.com",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fa fa-behance"
                    })
                  }), " "]
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-12 quick_lnk",
          children: /*#__PURE__*/jsx_runtime_.jsx(UI_Widget, {
            title: "Our Services",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
              classes: "list-icons link-list footer_soc",
              style: {
                fontSize: 12
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Cleaning Service "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Soaping Service "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Tyre Service - Alloys "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/4",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Tyre Service \u2013 Tyre Shine "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/5",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Detailing Service "
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-12 quick_lnk",
          children: /*#__PURE__*/jsx_runtime_.jsx(UI_Widget, {
            title: "Quick Links",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
              classes: "list-icons link-list footer_soc",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Cleaning Service "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Soaping Service "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Tyre Service - Alloys "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/4",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Yard Tyre Service \u2013 Tyre Shine "
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Item/* default */.Z, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/service/5",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: " Car Detailing Service "
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "scrollup",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "icon-glyph-203"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-12",
          children: /*#__PURE__*/jsx_runtime_.jsx(UI_Widget, {
            title: "contact info",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    class: "wrap",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Call us now:"
                    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "1-800-123-4567"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: "5604 Willow Crossing Ct,"
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: "Clifton, VA, 20124"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  c: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("time", {
                        datetime: "2019-07-15",
                        children: "Mon-Sat: 7:00am-6:00pm"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("time", {
                        datetime: "2019-07-15",
                        children: "Sun: 8:00am-5:00pm"
                      })
                    })]
                  })
                })]
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "subfooter",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [new Date().getFullYear(), " \xA9 Design And Developed by  ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/www.linkedin.com/in/amilabasnayake",
          children: " "
        }), "."]
      })
    })]
  });
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layouts/LayoutOne.js








const LayoutOne = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: props.pageTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "layoutOne",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Navbar_Navbar, {}), props.children, /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    })]
  });
};

/* harmony default export */ var layouts_LayoutOne = (LayoutOne);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;