import{jsx as t}from"react/jsx-runtime";import{memo as o,forwardRef as r,useContext as e,useCallback as p}from"react";import i from"@babel/runtime/helpers/slicedToArray";import{PopoverContext as l}from"../Popover.context.js";import{PopupStyled as a}from"./styled/Popup.styled.js";var m=o(r((function(o,r){var m=e(l),n=i(m,1)[0],s=p((function(t){return t.stopPropagation()}),[]);return n?t(a,Object.assign({ref:r,onClick:s,placement:o.placement},o),void 0):null})));m.displayName="Popup",m.defaultProps={id:"medly-popover-popup",bgColor:"white",distance:"0px",placement:"bottom",withArrow:!1,fullWidth:!1,fullHeight:!1};var n=Object.assign(m,{Style:a});export{n as Popup};
