import t,{css as o}from"styled-components";import{centerAligned as n}from"@medly-components/utils";var a=function(){return o(["justify-content:space-between;align-items:stretch;padding:",";box-sizing:border-box;border-radius:",";position:relative;color:red;background-color:",";"],(function(t){var o=t.theme,n=t.tabSize;return o.tabs.solid.tabList.padding[n]}),(function(t){return t.theme.tabs.solid.tabList.borderRadius}),(function(t){return t.theme.tabs.solid.tabList.color}))},r=t.div.withConfig({componentId:"sc-12mpb33-0"})([""," flex-direction:row;justify-content:flex-start;overflow-x:auto;background-color:transparent;",""],n("flex"),(function(t){return"solid"===t.variant&&a})),i=function(t){var o=t.theme,n=t.tabSize,a=t.active;return"transform: translateX(".concat("calc(".concat(100*a,"% + calc(").concat(a," * ").concat(o.tabs.solid.tabList.padding[n],")"),"));")},e=function(t){var o=t.totalTabs,n=t.theme,a=t.tabSize,r="calc(".concat(n.tabs.solid.tabList.padding[a]," + ").concat(n.tabs.solid.tabList.padding[a]," / ").concat(o,")");return"calc(".concat(100/o,"% - ").concat(r,")")},c=t.div.withConfig({componentId:"sc-12mpb33-1"})(["background-color:",";width:",";height:",";position:absolute;border-radius:",";box-shadow:0 0.1rem 0.4rem rgba(96,120,144,0.1);transition:transform 0.3s ease-out;transform-box:content-box;box-sizing:border-box;",""],(function(t){return t.theme.tabs.bgColor.active}),e,(function(t){var o=t.theme,n=t.tabSize;return"calc(100% - calc(".concat(o.tabs.solid.tabList.padding[n]," * 2)) ")}),(function(t){return t.theme.tabs.solid.tabBorderRadius}),i);export{c as Slider,r as TabList};
