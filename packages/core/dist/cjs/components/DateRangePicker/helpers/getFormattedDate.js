"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("date-fns");exports.getFormattedDate=function(t,r){return e.format(t,r).replace(new RegExp("\\/|\\-","g")," $& ")};
