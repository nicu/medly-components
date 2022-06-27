"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("@babel/runtime/helpers/objectWithoutProperties")),r=require("react/jsx-runtime"),a=require("react"),i=(e(a),e(require("@babel/runtime/helpers/defineProperty"))),n=require("../Tabs.context.js"),o=require("./Tab.styled.js");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var b=a.memo((function(e){var b=e.id,l=e.active,s=e.label,d=e.icon,u=void 0===d?null:d,p=e.helperText,j=e.count,v=e.disabled,O=e.disabledLabel,f=t(e,["id","active","label","icon","helperText","count","disabled","disabledLabel"]),x=a.useContext(n.TabsContext),y=x.tabSize,h=x.tabBackground,g=x.variant;return r.jsxs(o.TabWrapper,Object.assign({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:b,active:l,tabSize:y,disabled:v,variant:g,tabBackground:h},f),{type:"button",role:"tab","aria-selected":l?"true":"false","aria-controls":"panel-".concat(b),tabIndex:l?0:-1},{children:[u&&r.jsx(u,{variant:"S"===y?"flat":"solid"},void 0),r.jsxs(o.LabelAndDetailsWrapper,{children:[r.jsxs(o.LabelWrapper,{children:[r.jsx(o.Label,Object.assign({tabSize:y,id:"".concat(b,"-label")},{children:s}),void 0),void 0!==j&&r.jsx(o.Count,Object.assign({id:"".concat(b,"-label"),tabSize:y},{children:j}),void 0)]},void 0),p&&"L"===y&&r.jsx(o.HelperText,Object.assign({id:"".concat(b,"-helperText"),textVariant:"body2"},{children:p}),void 0),"solid"===g&&v&&r.jsx(o.DisabledLabel,Object.assign({tabSize:y,id:"".concat(b,"-disabledLabel")},{children:O}),void 0)]},void 0)]}),void 0)}));b.displayName="Tab";var l=Object.assign(b,{Style:o.TabWrapper});exports.Tab=l;
