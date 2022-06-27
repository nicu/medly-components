import r from"@babel/runtime/helpers/defineProperty";import e from"@babel/runtime/helpers/objectWithoutProperties";import{memo as o}from"react";import{jsx as t}from"react/jsx-runtime";import{SvgIconStyled as i}from"../../SvgIcon/SvgIcon.styled.js";function c(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(r){return t("svg",n(n({},r),{},{children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.23 4.035a7.007 7.007 0 0 1 7.112-2.907c2.88.53 5.16 2.92 5.58 5.82.58 3.99-2.2 7.43-5.92 7.97v3.08c0 .88-.39 1.67-1 2.22v1.28c0 .83-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5v-.5h-8v.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.28c-.61-.55-1-1.34-1-2.22v-10c0-3.5 3.58-4 8-4 .42 0 .84 0 1.24.02a.052.052 0 0 0-.01.015l-.001.002zM3.003 17.498c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-4.5v-5h6c0 1.96.81 3.73 2.11 5h-8.11zm9 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm4-4.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-1-8.25c0-.41.34-.75.75-.75s.75.34.75.75v3.5l2.24 1.32c.35.2.46.65.25.99-.2.33-.64.44-.98.24l-2.52-1.51c-.3-.18-.49-.51-.49-.86v-3.68z",fill:"#000",fillOpacity:".54"})}))};l.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var a=o((function(r){var o=r.size,c=r.variant,a=r.iconColor,v=r.bgColor,s=r.hoverBgColor,f=r.hoverIconColor,p=r.withHoverEffect,h=r.margin,m=r.fillOpacity,g=e(r,["size","variant","iconColor","bgColor","hoverBgColor","hoverIconColor","withHoverEffect","margin","fillOpacity"]);return t(i,Object.assign({},n({size:o,variant:c,iconColor:a,bgColor:v,hoverBgColor:s,hoverIconColor:f,withHoverEffect:p,margin:h,fillOpacity:m},g),{children:t(l,Object.assign({},g,{width:"1em",height:"1em"}),void 0)}),void 0)}));a.displayName="DepartureBoardIcon";var v=Object.assign(a,{Style:i});export default v;
