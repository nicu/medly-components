"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("react"),t=(e=require("@babel/runtime/helpers/slicedToArray"))&&"object"==typeof e&&"default"in e?e.default:e;exports.useMediaQuery=function(e){var n=e.replace("@media ",""),i=r.useState("undefined"!=typeof window&&!!window.matchMedia(n).matches),u=t(i,2),a=u[0],d=u[1];return r.useEffect((function(){var e=window.matchMedia(n),r=function(){return d(e.matches)};return e.addListener(r),r(),function(){return e.removeListener(r)}}),[n]),a};
