"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n,r=require("styled-components"),e=(n=r)&&"object"==typeof n&&"default"in n?n.default:n,t=require("@medly-components/icons"),o=require("../Text/Text.js"),c=function(n){return n?"calc(".concat(n," * 0.25rem)"):0},i=function(){return r.css(["opacity:0;display:none;"])},u=e("div").withConfig({componentId:"sc-12ecrgm-0"})(["width:",";color:",";height:",";background-color:",";display:",";border-radius:",";padding:",";margin:",";border:",";box-shadow:",";&,",",",","," *{transition:",";}& > *:not(:last-child){","}&:focus{outline:none;}"],(function(n){return n.width}),(function(n){return n.color}),(function(n){return n.height}),(function(n){return n.bg}),(function(n){return n.display}),(function(n){var r=n.borderRadius;return"".concat(c(r))}),(function(n){var r=n.px,e=n.py;return"".concat(c(e)," ").concat(c(r))}),(function(n){var r=n.mx,e=n.my;return"".concat(c(e)," ").concat(c(r))}),(function(n){var r=n.borderColor,e=n.borderWidth;return r&&e&&"".concat(c(e)," solid ").concat(r)}),(function(n){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba(0, 0, 0, 0.2)";switch(n){case"S":return"0rem 0.1rem 0.3rem ".concat(r);case"M":return"0rem 0.4rem 0.6rem ".concat(r);case"L":return"0rem 0.8rem 0.9rem ".concat(r);case"XL":return"0rem 1.2rem 1.2rem ".concat(r);default:return"none"}}(n.shadowSize,n.shadowColor)}),o.Text.Style,t.SvgIcon,t.SvgIcon,(function(n){return n.isLoading?"all 200ms ease-out":"all 100ms ease-out"}),(function(n){return n.isLoading&&i}));exports.BoxStyled=u;
