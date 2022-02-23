/*! For license information please see 755.ddf4527f.js.LICENSE.txt */
(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[755],{755:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o=[],i=!0,f=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(c){f=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(f)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{Z:function(){return ie}});var i=r(102);function f(e,n){if(null==e)return{};var r,t,a=(0,i.Z)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=r(7294),l=r(4184),u=r.n(l),s=(0,c.createContext)({});function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,n){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:e=360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n))}function h(e){return e<=1?100*Number(e)+"%":e}function m(e){return 1===e.length?"0"+e:String(e)}function y(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(n-e):r<.5?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function v(e){return w(e)/255}function w(e){return parseInt(e,16)}var k={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function x(e){var n,r,t,a={r:0,g:0,b:0},o=1,i=null,f=null,c=null,l=!1,u=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var n=!1;if(k[e])e=k[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=S.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=S.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=S.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=S.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=S.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=S.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=S.hex8.exec(e))return{r:w(r[1]),g:w(r[2]),b:w(r[3]),a:v(r[4]),format:n?"name":"hex8"};if(r=S.hex6.exec(e))return{r:w(r[1]),g:w(r[2]),b:w(r[3]),format:n?"name":"hex"};if(r=S.hex4.exec(e))return{r:w(r[1]+r[1]),g:w(r[2]+r[2]),b:w(r[3]+r[3]),a:v(r[4]+r[4]),format:n?"name":"hex8"};if(r=S.hex3.exec(e))return{r:w(r[1]+r[1]),g:w(r[2]+r[2]),b:w(r[3]+r[3]),format:n?"name":"hex"};return!1}(e)),"object"==typeof e&&(j(e.r)&&j(e.g)&&j(e.b)?(n=e.r,r=e.g,t=e.b,a={r:255*p(n,255),g:255*p(r,255),b:255*p(t,255)},l=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):j(e.h)&&j(e.s)&&j(e.v)?(i=h(e.s),f=h(e.v),a=function(e,n,r){e=6*p(e,360),n=p(n,100),r=p(r,100);var t=Math.floor(e),a=e-t,o=r*(1-n),i=r*(1-a*n),f=r*(1-(1-a)*n),c=t%6;return{r:255*[r,i,o,o,f,r][c],g:255*[f,r,r,i,o,o][c],b:255*[o,o,f,r,r,i][c]}}(e.h,i,f),l=!0,u="hsv"):j(e.h)&&j(e.s)&&j(e.l)&&(i=h(e.s),c=h(e.l),a=function(e,n,r){var t,a,o;if(e=p(e,360),n=p(n,100),r=p(r,100),0===n)a=r,o=r,t=r;else{var i=r<.5?r*(1+n):r+n-r*n,f=2*r-i;t=y(f,i,e+1/3),a=y(f,i,e),o=y(f,i,e-1/3)}return{r:255*t,g:255*a,b:255*o}}(e.h,i,c),l=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(o=e.a)),o=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(o),{ok:l,format:e.format||u,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o}}var C="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",A="[\\s|\\(]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")\\s*\\)?",O="[\\s|\\(]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")[,|\\s]+("+C+")\\s*\\)?",S={CSS_UNIT:new RegExp(C),rgb:new RegExp("rgb"+A),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+A),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+A),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function j(e){return Boolean(S.CSS_UNIT.exec(String(e)))}var F=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function E(e){var n=function(e,n,r){e=p(e,255),n=p(n,255),r=p(r,255);var t=Math.max(e,n,r),a=Math.min(e,n,r),o=0,i=t,f=t-a,c=0===t?0:f/t;if(t===a)o=0;else{switch(t){case e:o=(n-r)/f+(n<r?6:0);break;case n:o=(r-e)/f+2;break;case r:o=(e-n)/f+4}o/=6}return{h:o,s:c,v:i}}(e.r,e.g,e.b);return{h:360*n.h,s:n.s,v:n.v}}function M(e){var n=e.r,r=e.g,t=e.b;return"#".concat(function(e,n,r,t){var a=[m(Math.round(e).toString(16)),m(Math.round(n).toString(16)),m(Math.round(r).toString(16))];return t&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}(n,r,t,!1))}function T(e,n,r){var t=r/100;return{r:(n.r-e.r)*t+e.r,g:(n.g-e.g)*t+e.g,b:(n.b-e.b)*t+e.b}}function N(e,n,r){var t;return(t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-2*n:Math.round(e.h)+2*n:r?Math.round(e.h)+2*n:Math.round(e.h)-2*n)<0?t+=360:t>=360&&(t-=360),t}function I(e,n,r){return 0===e.h&&0===e.s?e.s:((t=r?e.s-.16*n:4===n?e.s+.16:e.s+.05*n)>1&&(t=1),r&&5===n&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function P(e,n,r){var t;return(t=r?e.v+.05*n:e.v-.15*n)>1&&(t=1),Number(t.toFixed(2))}function q(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=x(e),a=5;a>0;a-=1){var o=E(t),i=M(x({h:N(o,a,!0),s:I(o,a,!0),v:P(o,a,!0)}));r.push(i)}r.push(M(t));for(var f=1;f<=4;f+=1){var c=E(t),l=M(x({h:N(c,f),s:I(c,f),v:P(c,f)}));r.push(l)}return"dark"===n.theme?F.map((function(e){var t=e.index,a=e.opacity;return M(T(x(n.backgroundColor||"#141414"),x(r[t]),100*a))})):r}var D={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},R={},_={};Object.keys(D).forEach((function(e){R[e]=q(D[e]),R[e].primary=R[e][5],_[e]=q(D[e],{theme:"dark",backgroundColor:"#141414"}),_[e].primary=_[e][5]}));R.red,R.volcano,R.gold,R.orange,R.yellow,R.lime,R.green,R.cyan,R.blue,R.geekblue,R.purple,R.magenta,R.grey;var L={};function B(e,n){0}function $(e,n,r){n||L[r]||(e(!1,r),L[r]=!0)}var z=function(e,n){$(B,e,n)};function H(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}var U="rc-util-key";function W(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function Z(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!H())return null;var t,a=document.createElement("style");(null===(n=r.csp)||void 0===n?void 0:n.nonce)&&(a.nonce=null===(t=r.csp)||void 0===t?void 0:t.nonce);a.innerHTML=e;var o=W(r),i=o.firstChild;return r.prepend&&o.prepend?o.prepend(a):r.prepend&&i?o.insertBefore(a,i):o.appendChild(a),a}var Y=new Map;function G(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=W(r);if(!Y.has(t)){var a=Z("",r),o=a.parentNode;Y.set(t,o),o.removeChild(a)}var i=Array.from(Y.get(t).children).find((function(e){return"STYLE"===e.tagName&&e[U]===n}));if(i){var f,c,l;if((null===(f=r.csp)||void 0===f?void 0:f.nonce)&&i.nonce!==(null===(c=r.csp)||void 0===c?void 0:c.nonce))i.nonce=null===(l=r.csp)||void 0===l?void 0:l.nonce;return i.innerHTML!==e&&(i.innerHTML=e),i}var u=Z(e,r);return u[U]=n,u}function J(e){return"object"===b(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===b(e.icon)||"function"==typeof e.icon)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,r){var t=e[r];if("class"===r)n.className=t,delete n.class;else n[r]=t;return n}),{})}function Q(e,n,r){return r?c.createElement(e.tag,g(g({key:n},K(e.attrs)),r),(e.children||[]).map((function(r,t){return Q(r,"".concat(n,"-").concat(e.tag,"-").concat(t))}))):c.createElement(e.tag,g({key:n},K(e.attrs)),(e.children||[]).map((function(r,t){return Q(r,"".concat(n,"-").concat(e.tag,"-").concat(t))})))}function V(e){return q(e)[0]}function X(e){return e?Array.isArray(e)?e:[e]:[]}var ee="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",ne={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var re=function(e){var n,r,t=e.icon,a=e.className,o=e.onClick,i=e.style,l=e.primaryColor,u=e.secondaryColor,d=f(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),b=ne;if(l&&(b={primaryColor:l,secondaryColor:u||V(l)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=(0,c.useContext)(s).csp;(0,c.useEffect)((function(){G(e,"@ant-design-icons",{prepend:!0,csp:n})}),[])}(),n=J(t),r="icon should be icon definiton, but got ".concat(t),z(n,"[@ant-design/icons] ".concat(r)),!J(t))return null;var p=t;return p&&"function"==typeof p.icon&&(p=g(g({},p),{},{icon:p.icon(b.primaryColor,b.secondaryColor)})),Q(p.icon,"svg-".concat(p.name),g({className:a,onClick:o,style:i,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d))};re.displayName="IconReact",re.getTwoToneColors=function(){return g({},ne)},re.setTwoToneColors=function(e){var n=e.primaryColor,r=e.secondaryColor;ne.primaryColor=n,ne.secondaryColor=r||V(n),ne.calculated=!!r};var te=re;function ae(e){var n=a(X(e),2),r=n[0],t=n[1];return te.setTwoToneColors({primaryColor:r,secondaryColor:t})}ae("#1890ff");var oe=c.forwardRef((function(e,n){var r,t=e.className,i=e.icon,l=e.spin,d=e.rotate,g=e.tabIndex,b=e.onClick,p=e.twoToneColor,h=f(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),m=c.useContext(s).prefixCls,y=void 0===m?"anticon":m,v=u()(y,(o(r={},"".concat(y,"-").concat(i.name),!!i.name),o(r,"".concat(y,"-spin"),!!l||"loading"===i.name),r),t),w=g;void 0===w&&b&&(w=-1);var k=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,x=a(X(p),2),C=x[0],A=x[1];return c.createElement("span",Object.assign({role:"img","aria-label":i.name},h,{ref:n,tabIndex:w,onClick:b,className:v}),c.createElement(te,{icon:i,primaryColor:C,secondaryColor:A,style:k}))}));oe.displayName="AntdIcon",oe.getTwoToneColor=function(){var e=te.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},oe.setTwoToneColor=ae;var ie=oe},4184:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var f in r)t.call(r,f)&&r[f]&&e.push(f);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()}}]);