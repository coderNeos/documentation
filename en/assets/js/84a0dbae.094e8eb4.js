"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6279],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2909:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),c=n(2511),s=n(7130),l=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,s.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,s.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,s.I)({id:"shared.wip.var.feedback.base"}),a.createElement(c.Z,{to:t},(0,s.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,s.I)({id:"shared.wip.var.material.base"}),a.createElement(c.Z,{to:"https://t.me/feature_sliced"},(0,s.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,s.I)({id:"shared.wip.var.contribute.base"}),a.createElement(c.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,s.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u=["components"],d={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(l,{ticket:n.ticket,mdxType:"WIP"}))))}p.isMDXComponent=!0},3706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(2909),c=["components"],s={sidebar_position:10,sidebar_class_name:"sidebar-item--wip",pagination_next:"concepts/index"},l="Usage with NextJS",u={unversionedId:"guides/tech/with-nextjs",id:"guides/tech/with-nextjs",isDocsHomePage:!1,title:"Usage with NextJS",description:"About the specifics of the framework and compatibility with the methodology",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",sourceDirName:"guides/tech",slug:"/guides/tech/with-nextjs",permalink:"/en/docs/guides/tech/with-nextjs",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",tags:[],version:"current",lastUpdatedAt:1645616986,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_class_name:"sidebar-item--wip",pagination_next:"concepts/index"},sidebar:"guidesSidebar",previous:{title:"Migration from v1",permalink:"/en/docs/guides/migration/from-v1"},next:{title:"\ud83e\udde9 Concepts",permalink:"/en/docs/concepts"}},d=[{value:"See also",id:"see-also",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-with-nextjs"},"Usage with NextJS"),(0,a.kt)(o.ZP,{ticket:"225",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"About the specifics of the framework and compatibility with the methodology")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3623"},"(Thread) About the pages directory in NextJS"))))}m.isMDXComponent=!0}}]);