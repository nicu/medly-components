"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("@babel/runtime/helpers/objectWithoutProperties")),t=require("react/jsx-runtime"),i=require("react"),u=(e(i),require("@medly-components/utils")),d=require("../../Text/Text.js"),s=require("./Item.styled.js"),a=i.memo(i.forwardRef((function(e,i){var a=e.children,c=r(e,["children"]);return t.jsx(s.BreadcrumbItemStyled,Object.assign({ref:i},c,{children:u.isValidStringOrNumber(a)?t.jsx(d.Text,{children:a},void 0):a}),void 0)})));a.displayName="BreadcrumbItem";var c=Object.assign(a,{Style:s.BreadcrumbItemStyled});exports.BreadcrumbItem=c;
