import e from"@babel/runtime/helpers/slicedToArray";import{jsx as i,jsxs as o}from"react/jsx-runtime";import{memo as t,useRef as a,useState as r,useCallback as d}from"react";import{NavList as n}from"./NavList/NavList.styled.js";import s from"./SideNav.context.js";import{NavGroup as l}from"./NavGroup/NavGroup.js";import{NavItem as c}from"./NavItem/NavItem.js";import{Aside as v,Nav as m}from"./SideNav.styled.js";import{ToggleSwitch as p}from"./ToggleSwitch/ToggleSwitch.js";var u=t((function(t){var n=t.id,l=t.active,c=t.children,u=t.defaultActive,g=t.onChange,f=t.hideShadow,h=t.defaultOpen,N=t.className,x=t.collapsedToggleText,j=t.expandedToggleText,T=a(null),w=r(!1),S=e(w,2),b=S[0],y=S[1],O=r(null!=h?h:"undefined"!=typeof window&&window.innerWidth>1024),I=e(O,2),C=I[0],E=I[1],G=r(u||""),H=e(G,2),L=H[0],A=H[1],M=d((function(){return!C&&y(!0)}),[C]),P=d((function(){return!C&&y(!1)}),[C]),k=d((function(){return E(!0)}),[]),W=d((function(){E(!1),y(!1)}),[]),q=d((function(e){!l&&A(e),g&&g(e)}),[l,g]);return i(s.Provider,Object.assign({value:{isHovered:b,isExpanded:C,activeItem:l||L,activeItemChangeHandler:q}},{children:i(v,Object.assign({ref:T,position:"left",id:n,isExpanded:C,isHovered:b,hideShadow:f,className:N},{children:o(m,Object.assign({isHovered:b,hideShadow:f,isExpanded:C,onMouseEnter:M,onMouseLeave:P},{children:[c,i(p,Object.assign({id:"".concat(n,"-toggle"),isActive:C,onClick:C?W:k},{expandedToggleText:j,collapsedToggleText:x}),void 0)]}),void 0)}),void 0)}),void 0)}));u.displayName="SideNav",u.defaultProps={id:"medly-sidenav",hideShadow:!1};var g=Object.assign(u,{List:n,Nav:c,Group:l,Context:s,Style:v});export{u as Component,g as SideNav};
