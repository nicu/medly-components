"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react/jsx-runtime"),r=require("react"),i=((e=r)&&"object"==typeof e&&"default"in e&&e.default,require("@medly-components/utils")),n=require("../../Text/Text.js"),s=require("../Modal.context.js"),a=require("./Header.styled.js"),o=r.memo((function(e){var o,u=e.children,c=r.useContext(s.ModalContext),d=c.id,l=c.headerHeight,f=c.setHeaderHeight,h=c.isSmallScreen,x=c.scrollState,j=r.useRef(null);return r.useLayoutEffect((function(){j.current&&l!==j.current.offsetHeight&&f(j.current.offsetHeight)}),[j.current,null===(o=j.current)||void 0===o?void 0:o.offsetHeight,h,x.scrollPosition]),t.jsx(a.Header,Object.assign({id:"".concat(d,"-header"),ref:j,scrollState:x},{children:r.Children.map(u,(function(e){return i.isValidStringOrNumber(e)?t.jsx(n.Text,Object.assign({textVariant:h?"h3":"h2"},{children:e}),void 0):e}))}),void 0)}));o.displayName="Header";var u=Object.assign(o,{Style:a.Header});exports.Header=u;
