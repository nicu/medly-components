import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function l(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.685 1.27l20.04 20.04c.39.39.39 1.03 0 1.42a.996.996 0 0 1-1.41 0l-1.3-1.3H4.565c-1.1 0-2-.9-2-2V3.98l-1.29-1.3a.996.996 0 1 1 1.41-1.41zm5.88 2.16v.89l2 2V3.43h4v4h-2.89l2 2h.89v.89l2 2V9.43h4v4h-2.89l2 2h.89v.89l2 2V3.43c0-1.1-.9-2-2-2H5.675l2 2h.89zm8 0h3c.55 0 1 .45 1 1v3h-4v-4zm-6 8.55l1.45 1.45h-1.45v-1.45zm-4.55-4.55l-1.45-1.45v1.45h1.45zm2.55 12h-3c-.55 0-1-.45-1-1v-3h4v4zm-4-6h4V9.98l-.55-.55h-3.45v4zm10 6h-4v-4h3.45l.55.55v3.45zm2-1.45v1.45h1.45l-1.45-1.45z",fill:"#000",fillOpacity:".54"})}))};c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var h=o((function(r){var o=r.size,l=r.variant,h=r.iconColor,v=r.bgColor,a=r.hoverBgColor,f=r.hoverIconColor,p=r.withHoverEffect,m=r.margin,s=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:l,iconColor:h,bgColor:v,hoverBgColor:a,hoverIconColor:f,withHoverEffect:p,margin:m,fillOpacity:s},g),{children:t(c,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));h.displayName="GridOffIcon";var v=Object.assign(h,{Style:i});export default v;
