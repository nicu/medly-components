import{jsx as e}from"react/jsx-runtime";import{memo as t,useMemo as i,useCallback as o}from"react";import{Text as r}from"../../Text/Text.js";import{Cell as n}from"./Cell/Cell.js";import{NoResult as a,Row as c}from"./Row/Row.styled.js";var l=t((function(t){var l=t.data,u=t.columns,d=t.onRowClick,s=t.rowClickDisableKey,m=t.uniqueKeyName,f=t.withWhiteBackground,h=i((function(){return u.reduce((function(e,t){return e.concat("".concat(t.fraction||1,"fr "))}),"")}),[u]),p=o((function(e){return d&&!e[s]?function(){return d(e)}:void 0}),[d,s]);return 0===l.length?e(a,Object.assign({withWhiteBackground:f,gridTemplateColumns:h},{children:e(r,Object.assign({textVariant:"body2",textWeight:"Strong"},{children:"No Result"}),void 0)}),void 0):e("tbody",{children:l.map((function(t,i){return e(c,Object.assign({onClick:p(t),withWhiteBackground:f,isRowClickDisabled:t[s],gridTemplateColumns:h},{children:u.map((function(i){return e(n,{isRowClickDisabled:t[s],data:t[i.field],column:i,rowId:t[m],rowData:t},i.field)}))}),t[m]||i)}))},void 0)}));l.defaultProps={uniqueKeyName:"id",rowClickDisableKey:""},l.displayName="Body";export{l as Body};
