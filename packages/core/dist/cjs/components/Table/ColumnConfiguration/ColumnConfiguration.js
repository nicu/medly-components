"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("react/jsx-runtime"),n=require("react"),i=(e(n),e(require("@babel/runtime/helpers/toConsumableArray"))),t=require("../../Checkbox/Checkbox.js"),l=require("../../CheckboxGroup/CheckboxGroup.js"),u=require("./helpers.js"),o=n.memo((function(e){var n,o=e.columns,a=e.onChange,c=function(e){return function(){return a(u.updateConfig(o,e))}};return r.jsx(r.Fragment,{children:(n=o,n.map((function(e){return e.children?r.jsx(l.CheckboxGroup,{fullWidth:!0,showSelectAll:!0,label:e.title,labelWeight:"Strong",values:u.createValues(e.children,e.field),onChange:(n=e.field,function(e){var r=i(o),t=o.findIndex((function(e){return e.field===n}));r.splice(t,1,u.updateColumns([o[t]],e)[0]),a(r)}),options:u.createOptions(e.children,e.field)},e.field):r.jsx(t.Checkbox,{fullWidth:!0,label:e.title,checked:e.hidden,onChange:c(e.field)},e.field);var n})))},void 0)}));o.displayName="ColumnConfiguration",module.exports=o;
