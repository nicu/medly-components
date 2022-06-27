"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("styled-components"),t=(e=r)&&"object"==typeof e&&"default"in e?e.default:e,i=r.keyframes(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),n=r.keyframes(["0%{transform:translateY(0);}100%{transform:translateY(100%);}"]),o=r.keyframes(["0%{opacity:0;transform:translateY(-2rem);}100%{opacity:1;transform:translateY(0);}"]),a=r.keyframes(["0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(-2rem);}"]),m=t("div").withConfig({componentId:"bu1pt3-0"})(["background:",";display:flex;flex-direction:column;position:relative;min-height:",";box-shadow:0 0.4rem 3.2 ",";box-sizing:border-box;border-top-left-radius:1.6rem;border-top-right-radius:1.6rem;overflow:",";@media (max-width:767px){width:100%;height:calc(100% - 2.4rem);animation:"," 0.4s cubic-bezier(0,0,0.33,1);}@media (min-width:768px) and (max-width:1439px){border-radius:",";max-width:72%;min-width:",";max-height:80%;}@media (min-width:1440px){border-radius:",";min-width:",";max-width:103.6rem;max-height:80%;}@media (min-width:768px){animation:"," 0.2s cubic-bezier(0,0,0.33,1);}"],(function(e){return e.theme.modal.backgroundColor}),(function(e){return e.minHeight||"25.6rem"}),(function(e){return e.theme.modal.shadowColor}),(function(e){return!e.overflowVisible&&"hidden"}),(function(e){return e.open?i:n}),(function(e){return e.theme.modal.borderRadius}),(function(e){return e.minWidth||"42%"}),(function(e){return e.theme.modal.borderRadius}),(function(e){return e.minWidth||"60.5rem"}),(function(e){return e.open?o:a}));exports.Popup=m;
