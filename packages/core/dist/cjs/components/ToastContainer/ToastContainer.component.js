"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react/jsx-runtime"),r=require("react"),o=((e=r)&&"object"==typeof e&&"default"in e&&e.default,require("./ToastStore.js")),a=require("../Toast/Toast.js"),s=require("effector-react"),i=require("./ToastContainer.styled.js"),n=r.memo(r.forwardRef((function(e,r){var n=s.useStore(o.toastStore);return n.length>0?t.jsx(i.Container,Object.assign({ref:r},e,{children:n.map((function(e){return t.jsx(a.Toast,Object.assign({},e),e.id)}))}),void 0):null})));n.defaultProps={position:"top"},n.displayName="ToastContainer";var u=Object.assign(n,{Style:i.Container});exports.ToastContainer=u;
