/*****
 * Simple JavaScript UI framework.
 * Copyright 2015 Mikael Torvinen - mikael.torvinen@gmail.com
 */
var FW=function(){function n(n){return o[n]?o[n]:r[n]?(o[n]=r[n].q.call(null,e(r[n].z)),o[n]):(console.error("FW: No such service - "+n),null)}function e(e){if(e){for(var i={},l=0;l<e.length;l++)i[e[l]]=n(e[l]);return i}return null}var i={},l={};i.addController=function(n,e,i){l[n]={q:i,z:e}},i.initController=function(n,i){return l[n]?l[n].q.call(null,i,e(l[n].z)):(console.error("FW: No such module - "+n),null)};var r={},o={};return i.addService=function(n,e,i){r[n]={q:i,z:e}},i}();