import{useState as e,useEffect as r}from"react";import n from"@babel/runtime/helpers/slicedToArray";var t=function(t){var i=t.replace("@media ",""),a=e("undefined"!=typeof window&&!!window.matchMedia(i).matches),o=n(a,2),c=o[0],d=o[1];return r((function(){var e=window.matchMedia(i),r=function(){return d(e.matches)};return e.addListener(r),r(),function(){return e.removeListener(r)}}),[i]),c};export{t as useMediaQuery};
