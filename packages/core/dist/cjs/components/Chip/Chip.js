"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("@babel/runtime/helpers/objectWithoutProperties")),i=require("react/jsx-runtime"),t=require("react"),o=(e(t),require("@medly-components/icons")),s=require("../Text/Text.js"),a=require("./Chip.styled.js"),l=t.memo(t.forwardRef((function(e,l){var n=e.label,c=e.onDelete,u=r(e,["label","onDelete"]),d=t.useCallback((function(e){e.stopPropagation(),!u.disabled&&c&&c()}),[u.disabled,c]);return i.jsxs(a.Chip,Object.assign({ref:l},u,{children:[i.jsx(s.Text,{children:n},void 0),c&&i.jsx(o.ClearIcon,{size:"S",onClick:d,title:"".concat(n," chip clear icon")},void 0)]}),void 0)})));l.defaultProps={variant:"solid"},l.displayName="Chip";var n=Object.assign(l,{Style:a.Chip});exports.Chip=n;
