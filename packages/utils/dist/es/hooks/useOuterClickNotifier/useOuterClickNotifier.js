import{useEffect as e}from"react";var t=function(t,n){var r=function(e){var r=e.target.closest('[data-testid = "Day"]');n.current&&e.target.isConnected&&!n.current.contains(e.target)&&!r&&t(e)},c=function(e){27===e.keyCode&&t(e)};e((function(){return n.current&&(document.addEventListener("click",r),document.addEventListener("keydown",c)),function(){document.removeEventListener("click",r),document.removeEventListener("keydown",c)}}),[t,n])};export{t as useOuterClickNotifier};
