import{jsx as t}from"react/jsx-runtime";import{memo as e,useContext as o,useRef as r}from"react";import{useScrollState as a}from"../useScrollState.js";import{ModalContext as l}from"../Modal.context.js";import{Content as i}from"./Content.styled.js";var s=e((function(e){var s=o(l),n=s.id,c=s.dispatch,m=s.scrollState,d=s.headerHeight,f=s.overflowVisible,p=r(null),S=a({ref:p,scrollState:m,dispatch:c});return t(i,Object.assign({ref:p,onScroll:S},{headerHeight:d,scrollState:m,id:"".concat(n,"-content"),overflowVisible:f},e),void 0)}));s.displayName="Content";var n=Object.assign(s,{Style:i});export{n as Content};
