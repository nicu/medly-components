"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("@babel/runtime/helpers/slicedToArray")),t=e(require("@babel/runtime/helpers/objectWithoutProperties")),i=require("react/jsx-runtime"),n=require("@medly-components/theme"),a=require("react"),o=require("./Header.context.js"),u=require("./Header.styled.js"),s=require("./Nav/Nav.js"),l=require("./NavItem/NavItem.styled.js"),d=function(e){var s=e.children,l=e.withNav,d=t(e,["children","withNav"]),c=a.useState(!1),v=r(c,2),h=v[0],m=v[1];return i.jsx(u.Container,Object.assign({},d,{children:i.jsxs(u.Content,{children:[l&&i.jsx(u.HamburgerIcon,{"data-testid":"hamburger-icon",iconColor:n.layoutDefaultTheme.header.navItem.textColor.default,onClick:function(){return m(!0)},size:"L"},void 0),i.jsx(o.Provider,Object.assign({value:{isOpen:h,onClose:function(){return m(!1)}}},{children:s}),void 0)]},void 0)}),void 0)};d.Context=o,d.Nav=s,d.NavItem=l.NavItem,d.Style=u.Container,d.defaultProps={withNav:!0},module.exports=d;
