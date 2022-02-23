"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9148],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2909:function(e,t,n){n.d(t,{ZP:function(){return d}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),s=n(2511),l=n(7130),c=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),a.createElement(s.Z,{to:t},(0,l.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),a.createElement(s.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),a.createElement(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(c,{ticket:n.ticket,mdxType:"WIP"}))))}d.isMDXComponent=!0},953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(2909),s=["components"],l={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},c="Routing",u={unversionedId:"concepts/issues/routes",id:"concepts/issues/routes",isDocsHomePage:!1,title:"Routing",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/issues/routes.mdx",sourceDirName:"concepts/issues",slug:"/concepts/issues/routes",permalink:"/en/docs/concepts/issues/routes",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/issues/routes.mdx",tags:[],version:"current",lastUpdatedAt:1645616986,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"conceptsSidebar",previous:{title:"Desegemented",permalink:"/en/docs/concepts/issues/desegmented"},next:{title:"Cross-imports",permalink:"/en/docs/concepts/issues/cross-imports"}},p=[{value:"Situation",id:"situation",children:[],level:2},{value:"Problem",id:"problem",children:[],level:2},{value:"If you ignore it",id:"if-you-ignore-it",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routing"},"Routing"),(0,a.kt)(o.ZP,{ticket:"169",mdxType:"WIP"}),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("p",null,"Urls to pages are hardcoded in the layers below pages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=entities/post/card",title:"entities/post/card"},"\n<Card>\n    <Card.Title \n        href={`/post/${data.id}`}\n        title={data.name}\n    />\n    ...\n</Card>\n")),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Urls are not concentrated in the page layer, where they belong according to the scope of responsibility"),(0,a.kt)("h2",{id:"if-you-ignore-it"},"If you ignore it"),(0,a.kt)("p",null,"Then, when changing urls, you will have to keep in mind that these urls (and the logic of urls/redirects) can be in all layers except pages"),(0,a.kt)("p",null,"And it also means that now even a simple product card takes part of the responsibility from the pages, which smears the logic of the project"),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Determine how to work with urls/redirects from the page level and above"),(0,a.kt)("p",null,"Transfer to the layers below via composition/props/factories"),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4389"},'(Thread) What if I "sew up" routing in entities/features/widgets')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3756"},"(Thread) Why does it smear the logic of routes only in pages"))))}m.isMDXComponent=!0}}]);