import r from"@babel/runtime/helpers/toConsumableArray";export default function e(u){return u.reduce((function(u,a){return[].concat(r(u),r(Array.isArray(a.value)?e(a.value):[a.value]))}),[])}
