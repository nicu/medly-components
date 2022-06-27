"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react/jsx-runtime"),r=require("react"),n=(e(r),e(require("@babel/runtime/helpers/slicedToArray"))),o=require("@medly-components/icons"),i=require("../../../Text/Text.js"),s=require("./HeadCell.styled.js"),a=r.memo((function(e){var a=e.defaultSortOrder,l=e.sortField,d=e.onSortChange,c=e.withWhiteBackground,u=e.column,v=u.field,f=u.sortable,j=u.title,p=u.align,x=r.useState(a),C=n(x,2),h=C[0],b=C[1];r.useEffect((function(){l!==v&&b("none")}),[l]);var m=r.useCallback((function(){var e="asc"===h?"desc":"asc";b(e),d&&d(v,e)}),[h,d,v]),g=r.useMemo((function(){return l!==v?t.jsx(o.DropdownIcon,{size:"S"},void 0):"desc"===h?t.jsx(o.ChevronDownIcon,{size:"M"},void 0):t.jsx(o.ChevronUpIcon,{size:"M"},void 0)}),[m,l,v,h]);return t.jsx(s.HeadCell,Object.assign({isActive:l===v},{align:p,sortable:f,withWhiteBackground:c},{children:t.jsxs(s.HeadCellContent,Object.assign({onClick:f?m:void 0},{children:[t.jsx(i.Text,Object.assign({uppercase:!0,textVariant:"h5"},{children:j}),void 0),f&&g]}),void 0)}),void 0)}));a.defaultProps={defaultSortOrder:"none"},a.displayName="HeadCell";var l=Object.assign(a,{Style:s.HeadCell});exports.Component=a,exports.HeadCell=l;
