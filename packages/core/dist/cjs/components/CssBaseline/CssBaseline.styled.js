"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("styled-components"),t=(e(n),require("@medly-components/utils")),r=e(require("@babel/runtime/helpers/taggedTemplateLiteral")),o=require("./fonts.js");function i(){var e=r(["\n    "," \n    html {\n        height: 100%;\n        width: 100%;\n        font-size: 62.5%;\n        scroll-behavior: smooth;\n    }\n    body {\n        margin: 0;\n        height: 100%;\n        width: 100%;\n       \n       ","\n\n        #root, .root{\n            height: 100%;\n            width: 100%;\n        }\n    }\n"]);return i=function(){return e},e}var l=function(e){var r=e.theme.font.defaults;return n.css(["font-family:",";color:",";",""],r.fontFamily,r.color,t.getFontStyle)},s=n.createGlobalStyle(i(),o,l);s.displayName="CssBaseline",exports.CssBaseline=s;
