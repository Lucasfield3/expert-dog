"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 4905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ChangeSizeContext),
/* harmony export */   "K": () => (/* binding */ ChangeSizeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ChangeSizeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ChangeSizeProvider = ({
  children
}) => {
  const {
    0: match,
    1: setMatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  let checkMatchesLarge;
  let checkMatchesSmall;

  const checkSize = () => {
    if (false) {}
  };

  const setSize = (small, large, defaultSize) => {
    if (match === 'large') {
      return large;
    }

    if (match === 'small') {
      return small;
    }

    if (match === 'default') {
      return defaultSize;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkSize(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ChangeSizeContext.Provider, {
    value: {
      setSize,
      match
    },
    children: children
  });
};

/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ChangeThemesContext),
/* harmony export */   "y": () => (/* binding */ ChangeThemesProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ChangeThemesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ChangeThemesProvider = props => {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const ChangeTheme = e => {
    setTheme(theme === "" ? e.currentTarget.value : e.currentTarget.value);
  };

  const changeColor = (padrao, purpleWhiteGradiente, purpleBlackGradiente, purpleBlackWhite, whiteRedGradiente, whiteRed, whiteRedPurple, whiteRedPurpleGradiente) => {
    if (theme === 'padrão' || theme === '') {
      return padrao;
    }

    if (theme === 'roxo-branco-gradiente') {
      return purpleWhiteGradiente;
    }

    if (theme === 'roxo-preto-gradiente') {
      return purpleBlackGradiente;
    }

    if (theme === 'roxo-preto-branco') {
      return purpleBlackWhite;
    }

    if (theme === 'branco-vermelho-gradiente') {
      return whiteRedGradiente;
    }

    if (theme === 'branco-vermelho') {
      return whiteRed;
    }

    if (theme === 'branco-vermelho-roxo') {
      return whiteRedPurple;
    }

    if (theme === 'branco-vermelho-roxo-gradiente') {
      return whiteRedPurpleGradiente;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTheme(theme); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ChangeThemesContext.Provider, {
    value: {
      ChangeTheme,
      theme,
      changeColor
    },
    children: props.children
  });
};

/***/ })

};
;