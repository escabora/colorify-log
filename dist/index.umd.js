(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(e=typeof globalThis<"u"?globalThis:e||self,e.consolelog=o())})(this,function(){"use strict";const e={Reset:"\x1B[0m",Bright:"\x1B[1m",Dim:"\x1B[2m",Underscore:"\x1B[4m",Blink:"\x1B[5m",Reverse:"\x1B[7m",Hidden:"\x1B[8m",FgBlack:"\x1B[30m",FgRed:"\x1B[31m",FgGreen:"\x1B[32m",FgYellow:"\x1B[33m",FgBlue:"\x1B[34m",FgMagenta:"\x1B[35m",FgCyan:"\x1B[36m",FgWhite:"\x1B[37m",FgGray:"\x1B[90m",BgBlack:"\x1B[40m",BgRed:"\x1B[41m",BgGreen:"\x1B[42m",BgYellow:"\x1B[43m",BgBlue:"\x1B[44m",BgMagenta:"\x1B[45m",BgCyan:"\x1B[46m",BgWhite:"\x1B[47m",BgGray:"\x1B[100m",error:"\x1B[1m\x1B[41m\x1B[37m",success:"\x1B[1m\x1B[42m",warning:"\x1B[1m\x1B[43m\x1B[37m"},o=["success","warning","error"],s=B=>B.charAt(0).toUpperCase()+B.slice(1);function t(B,n,g){const m=B.toLowerCase(),i=s(B);o.includes(m)?console.log(`${[m].map(l=>e[l]).join("")}${i}\x1B[0m`,n):console.log(`${g.map(x=>e[x]).join("")}${B}\x1B[0m`,n)}return t});
