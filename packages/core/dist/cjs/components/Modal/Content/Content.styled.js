"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("styled-components"),r=(e=t)&&"object"==typeof e&&"default"in e?e.default:e,o=require("../helpers.js"),n=function(e){var r=e.scrollState,n=e.headerHeight,i=r.scrollPosition,c=o.getRemFromPx(i),a=o.getRemFromPx(n),s=6.6-c>2.1;return t.css(["padding:",";@media (max-width:767px){padding:",";}@media (min-width:768px) and (max-height:700px){padding-bottom:",";}"],(function(e){var t=e.theme;return"".concat(t.spacing.S2," ").concat(t.spacing.M2," ").concat(t.spacing.M1)}),(function(e){var t=e.theme;return"".concat(s?"".concat(t.spacing.S2):"".concat(4.5+a,"rem")," ").concat(t.spacing.S4," ").concat(t.spacing.M1)}),(function(e){return e.theme.spacing.S1}))},i=r("div").withConfig({componentId:"sc-1dfqrlx-0"})(["flex:1;box-sizing:border-box;overflow:",";"," @media (min-width:768px){overflow:",";&::-webkit-scrollbar{width:0.5rem;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-thumb{border-radius:1rem;background-color:",";}}"],(function(e){return e.overflowVisible&&"visible"}),n,(function(e){return e.overflowVisible?"visible":"auto"}),(function(e){return e.theme.modal.scrollbarThumbColor}));exports.Content=i;
