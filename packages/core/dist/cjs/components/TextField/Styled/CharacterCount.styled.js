"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("styled-components"),t=function(e){var r=e.size;if(e.multiline)return".1rem";switch(r){case"S":return"1.5rem";case"M":default:return"1.2rem"}},n=function(e){var r=e.maxLength,t=e.characterCount,n=e.theme,o=e.variant,i=t/r*100;return 100===i?n.colors.red[500]:i>=80?n.colors.heartbeat[500]:"fusion"===o?n.colors.grey[600]:n.colors.grey[500]},o=function(e){return function(r){return"fusion"===r.variant?"transform: translate(".concat(e,", -167%)"):"transform: translateX(".concat(e,")")}},i=((e=r)&&"object"==typeof e&&"default"in e?e.default:e).div.withConfig({componentId:"sc-1i29ttz-0"})(["@keyframes wiggle{0%{",";}25%{",";}50%{",";}75%{",";}100%{",";}}font-size:1rem;line-height:1rem;position:absolute;top:0;right:0;color:",";align-self:flex-start;z-index:1;transition:all 150ms cubic-bezier(0.4,0,0.2,1);margin-top:",";margin-left:",";margin-right:",";animation:",";"],o("0.1rem"),o("-0.2rem"),o("0.2rem"),o("-0.1rem"),o("0"),n,t,(function(e){return"S"===e.size&&"1.2rem"}),(function(e){return e.showTooltipForHelperAndErrorText&&".8rem"}),(function(e){return e.characterCount===e.maxLength&&"0.2s wiggle ease-in-out"}));exports.CharacterCount=i;
