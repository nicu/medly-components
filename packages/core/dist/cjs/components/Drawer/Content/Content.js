"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react/jsx-runtime"),r=require("react"),n=((e=r)&&"object"==typeof e&&"default"in e&&e.default,require("../../Modal/useScrollState.js")),o=require("../Drawer.context.js"),s=require("./Content.styled.js"),a=r.memo((function(e){var a=r.useRef(null),l=r.useContext(o.DrawerContext),c=l.id,i=l.dispatch,u=l.scrollState,d=n.useScrollState({ref:a,scrollState:u,dispatch:i});return t.jsx(s.ContentStyled,Object.assign({ref:a,onScroll:d},e,{id:"".concat(c,"-content")}),void 0)}));a.displayName="DrawerContent";var l=Object.assign(a,{Style:s.ContentStyled});exports.Content=l;
