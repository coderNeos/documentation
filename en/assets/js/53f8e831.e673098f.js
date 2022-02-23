"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5066],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6644:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=n(4463),c=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,(0,r.Z)({},n,{mdxType:"Row"})))}l.isMDXComponent=!0},4367:function(e,t,n){n.d(t,{ga:function(){return r}});var r={};n.r(r),n.d(r,{CATEGORIES:function(){return i},sendEvent:function(){return o}});var o=function(e){var t=e.category,n=e.action,r=e.label,o=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:o})},i={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},4463:function(e,t,n){n.d(t,{X:function(){return s},Z:function(){return u}});var r=n(7294),o=n(6010),i=n(2511),a=n(4367),c={root:"root_3See",rootDisabled:"rootDisabled_1JKe",details:"details_4eET",detailsTags:"detailsTags_1PjI",icon:"icon_3Id-",title:"title_35mm",description:"description_1Z1k"},s=function(e){var t=e.title,n=e.description,s=e.to,u=e.Icon,d=e.tags,p=e.className,m=e.disabled,f=(0,r.useCallback)((function(){a.ga.sendEvent({category:a.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(i.Z,{className:(0,o.Z)(c.root,p,m&&c.rootDisabled),to:s,onClick:f},r.createElement(l,{Icon:u}),r.createElement("div",{className:c.details},r.createElement("div",{className:c.detailsMain},r.createElement("span",{className:c.title},t),r.createElement("p",{className:c.description},n)),d&&r.createElement("div",{className:c.detailsTags},d.join(" \u2022 "))))},l=function(e){var t=e.Icon;return t?"string"==typeof t?r.createElement("span",{className:c.icon},t):r.createElement(t,{className:c.icon}):null},u=s},9780:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return h}});var r=n(3117),o=n(102),i=n(7294),a=n(4137),c=n(6644),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},l=n(755),u=function(e,t){return i.createElement(l.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="ToolOutlined";var d=i.forwardRef(u),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"import",theme:"outlined"},m=function(e,t){return i.createElement(l.Z,Object.assign({},e,{ref:t,icon:p}))};m.displayName="ImportOutlined";var f=i.forwardRef(m),g=["components"],v={sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/guides",pagination_prev:"get-started/index"},y="\ud83c\udfaf Guides",b={unversionedId:"guides/index",id:"guides/index",isDocsHomePage:!1,title:"\ud83c\udfaf Guides",description:"PRACTICE-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/index.mdx",sourceDirName:"guides",slug:"/guides",permalink:"/en/docs/guides",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/index.mdx",tags:[],version:"current",lastUpdatedAt:1645616986,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/guides",pagination_prev:"get-started/index"},sidebar:"guidesSidebar",previous:{title:"\ud83d\ude80 Get Started",permalink:"/en/docs/get-started"},next:{title:"\ud83d\udee0 Overview",permalink:"/en/docs/guides/examples"}},h=[{value:"Main",id:"main",children:[],level:2}],w={toc:h};function O(e){var t=e.components,n=(0,o.Z)(e,g);return(0,a.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-guides"},"\ud83c\udfaf Guides"),(0,a.kt)("span",{class:"badge badge--primary margin-bottom--md"},"PRACTICE-ORIENTED"),(0,a.kt)("p",{class:"summary"},'Practical guides and examples on the use of Feature Sliced. There is also describe migration guides and a handbook of harmful practices. It is most useful when you are trying to implement something specific or want to look at the methodology "in battle"'),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)(c.ZP,{title:"Usage examples",description:"Practical examples on the application of the methodology",to:"/docs/guides/examples",Icon:d,mdxType:"Row"}),(0,a.kt)(c.ZP,{title:"Migration from V1",description:"Migration Guide and comparison with FeatureSlices (v1)",to:"/docs/guides/migration/from-v1",Icon:f,mdxType:"Row"}),(0,a.kt)(c.ZP,{title:"Migration from legacy",description:"Step-by-step implementation of practices in legacy projects",to:"/docs/guides/migration/from-legacy",Icon:f,mdxType:"Row"}))}O.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);