import{useEffect as n}from"react";import{useKeyPress as r}from"@medly-components/utils";var t=function(t){var o=t.isParentCursorEnabled,e=t.setCursor,i=t.options,u=t.handleOuterClick,c=t.ref,f=r("ArrowUp",!1,c),l=r("ArrowDown",!1,c),s=r("Escape",!0,c);n((function(){o&&i.length&&f&&e((function(n){return n>0?n-1:i.length-1}))}),[f,i,o]),n((function(){o&&i.length&&l&&e((function(n){return n<i.length-1?n+1:0}))}),[l,i,o]),n((function(){s&&u()}),[s])};export{t as useKeyboardNavigation};
