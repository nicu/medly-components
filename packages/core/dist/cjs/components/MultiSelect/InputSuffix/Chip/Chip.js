"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("@babel/runtime/helpers/objectWithoutProperties")),i=require("react/jsx-runtime"),r=require("react"),a=(e(r),require("@medly-components/icons")),o=require("../../../Text/Text.js"),n=require("./Chip.styled.js"),s=r.memo((function(e){var s=e.id,l=e.label,c=e.onClear,d=e.state,u=t(e,["id","label","onClear","state"]),p=r.useCallback((function(e){return e.stopPropagation()}),[]),b=r.useCallback((function(e){e.stopPropagation(),!u.disabled&&c&&c(l)}),[u.disabled,c]);return i.jsxs(n.Chip,Object.assign({id:s,state:d},u,{onClick:p},{children:[i.jsx(o.Text,Object.assign({textWeight:"Medium",textVariant:"S"===u.size?"body2":"body1"},{children:l}),void 0),!u.hideClearIcon&&i.jsx(a.ClearIcon,{id:"".concat(s,"-clear"),title:"".concat(s,"-clear-icon"),onClick:b},void 0)]}),void 0)}));s.displayName="Chip",s.defaultProps={state:"default",variant:"outlined"};var l=Object.assign(s,{Style:n.Chip});exports.Chip=l;
