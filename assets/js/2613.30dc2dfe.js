"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2613],{6875:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},5094:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},1610:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=t(9962),o=t(6875);function u(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=u()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},1048:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o=t(508);function u(){return(0,r.useContext)(o._)}},3167:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(5094);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},3256:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(655),o=t(5094),u=(0,r.__importStar)(t(1610)),i=t(3167),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,i.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},7849:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},gA:function(){return r.gA},WS:function(){return r.WS},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=t(3256)},2613:function(e,n,t){t.d(n,{pl:function(){return Le},zF:function(){return Z},HX:function(){return m},PO:function(){return Q},L5:function(){return le},Cv:function(){return re},Cn:function(){return ee},OC:function(){return Me},kM:function(){return pe},WA:function(){return l},os:function(){return p},lx:function(){return me},Mg:function(){return w},_f:function(){return s},bc:function(){return g},l5:function(){return d},nT:function(){return Pe},uR:function(){return H},J:function(){return ve},Oh:function(){return ge},ed:function(){return k},Rb:function(){return Se},be:function(){return Ce},SL:function(){return A},g8:function(){return te},c2:function(){return R},D9:function(){return D},RF:function(){return Ne},o5:function(){return ze},DA:function(){return Ve},Si:function(){return De},LU:function(){return o},pe:function(){return E}});var r=t(9962);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,l=a===i?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function p(e,n){return"docs-"+e+"-"+n}var h=t(7849),b=!!h._r,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},E=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},y=t(7294),L=["zero","one","two","few","many","other"];function P(e){return L.filter((function(n){return e.includes(n)}))}var C={locale:"en",pluralForms:P(["one","other"]),select:function(e){return 1===e?"one":"other"}};function S(){var e=(0,r.Z)().i18n.currentLocale;return(0,y.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),C;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:P(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),C}var n,t}),[e])}function R(){var e=S();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}var x="undefined"!=typeof window?y.useLayoutEffect:y.useEffect;function k(e){var n=(0,y.useRef)(e);return x((function(){n.current=e}),[e]),(0,y.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function D(e){var n=(0,y.useRef)();return x((function(){n.current=e})),n.current}function A(e){var n=(0,f.TH)(),t=D(n),r=k(e);(0,y.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var V=t(102),O=t(6136),M=["collapsed"],I=["lazy"];function H(e){var n=e.initialState,t=(0,y.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,y.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var N={display:"none",overflow:"hidden",height:"0px"},z={display:"block",overflow:"visible",height:"auto"};function T(e,n){var t=n?N:z;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function B(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,y.useRef)(!1);(0,y.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return T(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=N.height,u.style.overflow=N.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function F(e){if(!O.default.canUseDOM)return e?N:z}function j(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,y.useRef)(null);return B({collapsibleRef:l,collapsed:r,animation:u}),y.createElement(t,{ref:l,style:c?void 0:F(r),onTransitionEnd:function(e){"height"===e.propertyName&&(T(l.current,r),null==i||i(r))},className:a},o)}function _(e){var n=e.collapsed,t=(0,V.Z)(e,M),r=(0,y.useState)(!n),o=r[0],u=r[1];(0,y.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,y.useState)(n),a=i[0],c=i[1];return(0,y.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?y.createElement(j,Object.assign({},t,{collapsed:a})):null}function Z(e){var n=e.lazy,t=(0,V.Z)(e,I),r=n?_:j;return y.createElement(r,Object.assign({},t))}var U=t(1048),W=t(6010),q="details_2Ziz",J="isBrowser_2j9b",X="collapsibleContent_3OHp",Y=["summary","children"];function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function K(e,n){return!!e&&(e===n||K(e.parentElement,n))}var Q=function(e){var n,t=e.summary,r=e.children,o=(0,V.Z)(e,Y),u=(0,U.Z)(),i=(0,y.useRef)(null),a=H({initialState:!o.open}),c=a.collapsed,l=a.setCollapsed,s=(0,y.useState)(o.open),f=s[0],d=s[1];return y.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,W.Z)(q,(n={},n[J]=u,n),o.className),onMouseDown:function(e){G(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;G(n)&&K(n,i.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,y.createElement(Z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},y.createElement("div",{className:X},r)))};var $=(0,y.createContext)(null);function ee(e){var n=e.children;return y.createElement($.Provider,{value:(0,y.useState)(null)},n)}function ne(){var e=(0,y.useContext)($);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function te(){var e=ne()[0];if(e){var n=e.component;return function(t){return y.createElement(n,Object.assign({},e.props,t))}}return function(){}}function re(e){var n,t=e.component,r=e.props,o=ne()[1],u=(n=r,(0,y.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,y.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,y.useEffect)((function(){return function(){return o(null)}}),[o]),null}var oe=function(e){return"docs-preferred-version-"+e},ue={save:function(e,n,t){l(oe(e),{persistence:n}).set(t)},read:function(e,n){return l(oe(e),{persistence:n}).get()},clear:function(e,n){l(oe(e),{persistence:n}).del()}};function ie(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ue.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ue.clear(e,t),{preferredVersionName:null})}(e)})),o}function ae(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,y.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,y.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,y.useEffect)((function(){i(ie({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,y.useMemo)((function(){return{savePreferredVersion:function(e,t){ue.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var ce=(0,y.createContext)(null);function le(e){var n=e.children;return b?y.createElement(se,null,n):y.createElement(y.Fragment,null,n)}function se(e){var n=e.children,t=ae();return y.createElement(ce.Provider,{value:t},n)}function fe(){var e=(0,y.useContext)(ce);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}var de=t(6875);function ve(e){void 0===e&&(e=de.m);var n=(0,h.zh)(e),t=fe(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,y.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}function ge(){var e=(0,h._r)(),n=fe()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}function me(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var pe={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},he=l("docusaurus.announcement.dismiss"),be=l("docusaurus.announcement.id"),we=function(){return"true"===he.get()},Ee=function(e){return he.set(String(e))},ye=(0,y.createContext)(null),Le=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,U.Z)(),t=(0,y.useState)((function(){return!!n&&we()})),r=t[0],u=t[1];(0,y.useEffect)((function(){u(we())}),[]);var i=(0,y.useCallback)((function(){Ee(!0),u(!0)}),[]);return(0,y.useEffect)((function(){if(e){var n=e.id,t=be.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;be.set(n),r&&Ee(!1),!r&&we()||u(!1)}}),[e]),(0,y.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return y.createElement(ye.Provider,{value:t},n)},Pe=function(){var e=(0,y.useContext)(ye);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function Ce(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}t(7130);function Se(e){!function(e){var n=(0,f.k6)().block,t=(0,y.useRef)(e);(0,y.useEffect)((function(){t.current=e}),[e]),(0,y.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Re(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Re(e.parentNode):n}function xe(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Re(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Re(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function ke(){var e=(0,y.useRef)(0),n=o().navbar.hideOnScroll;return(0,y.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var De=function(e){var n=(0,y.useRef)(void 0),t=ke();(0,y.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=xe(a,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Ae(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Ae({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Ve(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,y.useMemo)((function(){return Ae({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Oe=(0,y.createContext)(void 0);function Me(e){var n,t=e.children;return y.createElement(Oe.Provider,{value:(n=(0,y.useRef)(!0),(0,y.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ie(){var e=(0,y.useContext)(Oe);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var He=function(){return O.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function Ne(e,n){void 0===n&&(n=[]);var t=Ie().scrollEventsEnabledRef,r=(0,y.useRef)(He()),o=k(e);(0,y.useEffect)((function(){var e=function(){if(t.current){var e=He();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function ze(){var e,n,t,r=Ie(),o=(e=(0,y.useRef)({elem:null,top:0}),n=(0,y.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,y.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,y.useMemo)((function(){return{save:n,restore:t}}),[t,n])),u=(0,y.useRef)(void 0),i=(0,y.useCallback)((function(e){o.save(e),r.disableScrollEvents(),u.current=function(){var e=o.restore().restored;if(u.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r,o]);return(0,y.useLayoutEffect)((function(){var e;null===(e=u.current)||void 0===e||e.call(u)})),{blockElementScrollPositionUntilNextRender:i}}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);