"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7187],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=c,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6644:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(3117),c=n(102),o=(n(7294),n(4137)),a=n(4463),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,(0,r.Z)({},n,{mdxType:"Row"})))}l.isMDXComponent=!0},4367:function(e,t,n){n.d(t,{ga:function(){return r}});var r={};n.r(r),n.d(r,{CATEGORIES:function(){return o},sendEvent:function(){return c}});var c=function(e){var t=e.category,n=e.action,r=e.label,c=e.value;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:r,eventValue:c})},o={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},4463:function(e,t,n){n.d(t,{X:function(){return s},Z:function(){return u}});var r=n(7294),c=n(6010),o=n(2511),a=n(4367),i={root:"root_3See",rootDisabled:"rootDisabled_1JKe",details:"details_4eET",detailsTags:"detailsTags_1PjI",icon:"icon_3Id-",title:"title_35mm",description:"description_1Z1k"},s=function(e){var t=e.title,n=e.description,s=e.to,u=e.Icon,d=e.tags,f=e.className,m=e.disabled,p=(0,r.useCallback)((function(){a.ga.sendEvent({category:a.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return r.createElement(o.Z,{className:(0,c.Z)(i.root,f,m&&i.rootDisabled),to:s,onClick:p},r.createElement(l,{Icon:u}),r.createElement("div",{className:i.details},r.createElement("div",{className:i.detailsMain},r.createElement("span",{className:i.title},t),r.createElement("p",{className:i.description},n)),d&&r.createElement("div",{className:i.detailsTags},d.join(" \u2022 "))))},l=function(e){var t=e.Icon;return t?"string"==typeof t?r.createElement("span",{className:i.icon},t):r.createElement(t,{className:i.icon}):null},u=s},5301:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return O},default:function(){return k},frontMatter:function(){return h},metadata:function(){return w},toc:function(){return E}});var r=n(3117),c=n(102),o=n(7294),a=n(4137),i=n(6644),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"}}]},name:"read",theme:"outlined"},l=n(755),u=function(e,t){return o.createElement(l.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="ReadOutlined";var d=o.forwardRef(u),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},m=function(e,t){return o.createElement(l.Z,Object.assign({},e,{ref:t,icon:f}))};m.displayName="MenuOutlined";var p=o.forwardRef(m),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128zm2.5 282.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5z"}}]},name:"gold",theme:"outlined"},g=function(e,t){return o.createElement(l.Z,Object.assign({},e,{ref:t,icon:v}))};g.displayName="GoldOutlined";var y=o.forwardRef(g),b=["components"],h={sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/reference",pagination_prev:"concepts/index"},O="\ud83d\udcda Reference",w={unversionedId:"reference/index",id:"reference/index",isDocsHomePage:!1,title:"\ud83d\udcda Reference",description:"INFORMATION-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/index.mdx",sourceDirName:"reference",slug:"/reference",permalink:"/en/docs/reference",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/index.mdx",tags:[],version:"current",lastUpdatedAt:1645616986,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_class_name:"sidebar-item--root",hide_table_of_contents:!0,slug:"/reference",pagination_prev:"concepts/index"},sidebar:"referenceSidebar",previous:{title:"\ud83e\udde9 Concepts",permalink:"/en/docs/concepts"},next:{title:"Glossary",permalink:"/en/docs/reference/glossary"}},E=[{value:"Main",id:"main",children:[],level:2}],x={toc:E};function k(e){var t=e.components,n=(0,c.Z)(e,b);return(0,a.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-reference"},"\ud83d\udcda Reference"),(0,a.kt)("span",{class:"badge badge--danger margin-bottom--md"},"INFORMATION-ORIENTED"),(0,a.kt)("p",{class:"summary"},"A detailed description of the concepts on which the methodology is based."),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)(i.ZP,{title:"Glossary",description:"Basic concepts of methodology",to:"/docs/reference/glossary",Icon:d,mdxType:"Row"}),(0,a.kt)(i.ZP,{title:"Layers",description:"Reference information about layers",to:"/docs/reference/layers/overview",Icon:p,mdxType:"Row"}),(0,a.kt)(i.ZP,{title:"Segments",description:"Reference information about segments",to:"/docs/reference/segments",Icon:y,mdxType:"Row"}))}k.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}function c(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(c&&(c+=" "),c+=t);return c}n.d(t,{Z:function(){return c}})}}]);