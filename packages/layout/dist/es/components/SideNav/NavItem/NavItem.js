import e from"@babel/runtime/helpers/objectWithoutProperties";import{jsx as t}from"react/jsx-runtime";import{useContext as r,useMemo as o,useCallback as n}from"react";import i from"../SideNav.context.js";import c from"@babel/runtime/helpers/defineProperty";import{NavItemStyled as p}from"./NavItem.styled.js";function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(c){var a=r(i),m=a.activeItem,f=a.activeItemChangeHandler,b=a.isHovered,u=a.isExpanded,l=c.path,O=c.onClick,j=c.to,v=e(c,["path","onClick","to"]),y=o((function(){return l===m||j===m}),[j,l,m]),d=n((function(e){var t=l||j;e.stopPropagation(),O&&O(e),t&&f(t)}),[O,l]);return t(p,Object.assign({},s(s({},v),{},{isHovered:b,isExpanded:u,isActive:y}),{onClick:d}),void 0)};m.displayName="NavItem",m.Style=p;export{m as NavItem};
