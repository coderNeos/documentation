"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8891],{4137:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5167:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=a(3117),n=a(102),o=(a(7294),a(4137)),i=["components"],l={sidebar_position:5},s="Public API",p={unversionedId:"concepts/public-api",id:"concepts/public-api",isDocsHomePage:!1,title:"Public API",description:"Each entity of the methodology is designed as a user-friendly and integrable module.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/public-api.md",sourceDirName:"concepts",slug:"/concepts/public-api",permalink:"/en/docs/concepts/public-api",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/public-api.md",tags:[],version:"current",lastUpdatedAt:1645616986,formattedLastUpdatedAt:"2/23/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"conceptsSidebar",previous:{title:"Low Coupling & High Cohesion",permalink:"/en/docs/concepts/low-coupling"},next:{title:"Decouple entities",permalink:"/en/docs/concepts/decouple-entities"}},m=[{value:"Goals",id:"goals",children:[],level:2},{value:"Requirements for the public API",id:"requirements-for-the-public-api",children:[{value:"1. Access Control",id:"1-access-control",children:[{value:"Examples",id:"examples",children:[{value:"Suspension from private imports",id:"suspension-from-private-imports",children:[],level:5}],level:4}],level:3},{value:"2. Sustainability for changes",id:"2-sustainability-for-changes",children:[{value:"Examples",id:"examples-1",children:[{value:"Abstracting from the implementation",id:"abstracting-from-the-implementation",children:[],level:5}],level:4}],level:3},{value:"3. Integrability",id:"3-integrability",children:[{value:"Examples",id:"examples-2",children:[{value:"Name collision",id:"name-collision",children:[],level:5},{value:"Flexible use",id:"flexible-use",children:[],level:5},{value:"Resolution of collisions",id:"resolution-of-collisions",children:[],level:5}],level:4}],level:3}],level:2},{value:"About re-exports",id:"about-re-exports",children:[{value:"Disadvantages",id:"disadvantages",children:[],level:3},{value:"Possible solutions",id:"possible-solutions",children:[],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"public-api"},"Public API"),(0,o.kt)("p",null,"Each entity of the methodology is designed as a ",(0,o.kt)("strong",{parentName:"p"},"user-friendly and integrable ",(0,o.kt)("a",{parentName:"strong",href:"/docs/reference/glossary"},"module"),".")),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("p",null,"The convenience of using and integrating the module is achieved through the fulfillment of ",(0,o.kt)("em",{parentName:"p"},"a number of goals"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The application must be ",(0,o.kt)("strong",{parentName:"li"},"protected from changes")," to the internal structure of individual modules"),(0,o.kt)("li",{parentName:"ol"},"The processing of the internal structure of the module ",(0,o.kt)("strong",{parentName:"li"},"should not affect")," other modules"),(0,o.kt)("li",{parentName:"ol"},"Significant changes in the behavior of the module should be ",(0,o.kt)("strong",{parentName:"li"},"easily detectable"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Significant changes in the behavior of the module")," - changes that break the expectations of the user entities of the module.")))),(0,o.kt)("p",null,"These goals can be achieved by introducing a public interface (Public API), which is a single access point to the module's capabilities and defines the \"contract\" of the module's interaction with the outside world."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The entity structure must have a single entry point that provides a public interface"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 features/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0#\xa0\n       \u251c\u2500\u2500 auth-form /      # Internal structure of the feature\n       |     \u251c\u2500\u2500 ui/\xa0 \xa0 \xa0 \xa0 #\n       |     \u251c\u2500\u2500 model/\xa0 \xa0 \xa0#\n       |     \u251c\u2500\u2500 {...}/\xa0 \xa0 \xa0#\n       \u251c\u2500\u2500 index.ts         # Entrypoint features with its public API\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/index.ts",title:"**/**/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n')),(0,o.kt)("h2",{id:"requirements-for-the-public-api"},"Requirements for the public API"),(0,o.kt)("p",null,"Meeting these requirements allows you to reduce interaction with the module to ",(0,o.kt)("strong",{parentName:"p"},"the implementation of a public interface-contract")," and, thereby, achieve reliability and ease of use of the module."),(0,o.kt)("h3",{id:"1-access-control"},"1. Access Control"),(0,o.kt)("p",null,"The public API must ",(0,o.kt)("strong",{parentName:"p"},"control access")," to the contents of the module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Other parts of the application can use ",(0,o.kt)("strong",{parentName:"li"},"only those module entities that are presented in the public interface")),(0,o.kt)("li",{parentName:"ul"},"The internal part of the module outside the public interface ",(0,o.kt)("strong",{parentName:"li"},"is accessible only to the module itself"),".")),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("h5",{id:"suspension-from-private-imports"},"Suspension from private imports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bad"),": There is a direct access to the internal parts of the module, bypassing the public access interface - it is dangerous, especially when refactoring the module"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form } from "features/auth-form/components/view/form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Good:")," The API exports only what is necessary and allowed in advance, the module developer now needs to think only about not breaking the Public API when refactoring"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm } from "features/auth-form"\n')))),(0,o.kt)("h3",{id:"2-sustainability-for-changes"},"2. Sustainability for changes"),(0,o.kt)("p",null,"The public API should be sustainable for changes inside the module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Breaking changes in the behavior of the module are reflected in the change of the Public API")),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("h5",{id:"abstracting-from-the-implementation"},"Abstracting from the implementation"),(0,o.kt)("p",null,"Changing the internal structure should not lead to a change in the Public API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bad:")," moving or renaming this component inside the feature will lead to the need to refactor imports in all places where the component is used."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form } from "features/auth-form/ui/form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Good:"),' the interface of the feature does not display its internal structure, external "users" of the feature will not suffer from moving or renaming the component inside the feature'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm } from "features/auth-form"\n')))),(0,o.kt)("h3",{id:"3-integrability"},"3. Integrability"),(0,o.kt)("p",null,"The public API should facilitate ",(0,o.kt)("strong",{parentName:"p"},"easy and flexible integration")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should be convenient for use by the rest of the application, in particular, to solve the problem of name collisions")),(0,o.kt)("h4",{id:"examples-2"},"Examples"),(0,o.kt)("h5",{id:"name-collision"},"Name collision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bad:")," there will be a name collision"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form } from "./ui"\nexport * as model from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form } from "./ui"\nexport * as model from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form, model } from "features/auth-form"\n- import { Form, model } from "features/post-form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Good:")," the collision is solved at the interface level"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form as PostForm } from "./ui"\nexport * as postFormModel from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm, authFormModel } from "features/auth-form"\n+ import { PostForm, postFormModel } from "features/post-form"\n')))),(0,o.kt)("h5",{id:"flexible-use"},"Flexible use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bad:"),' it is inconvenient to write, it is inconvenient to read, the" user " of the feature suffers'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { storeActionUpdateUserDetails } from "features/auth-form"\n- dispatch(storeActionUpdateUserDetails(...))\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Good:"),' the "user" of the feature gets access to the necessary things iteratively and flexibly'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { authFormModel } from "features/auth-form"\n+ dispatch(authFormModel.effects.updateUserDetails(...)) // redux\n+ authFormModel.updateUserDetailsFx(...) // effector\n')))),(0,o.kt)("h5",{id:"resolution-of-collisions"},"Resolution of collisions"),(0,o.kt)("p",null,"Name collisions should be resolved at the level of the public interface, not the implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bad:")," name collisions are resolved at the implementation level"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { AuthForm } from "./ui"\nexport { authFormActions, authFormReducer } from "model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { PostForm } from "./ui"\nexport { postFormActions, postFormReducer } from "model"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Good:")," name collisions are resolved at the interface level"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/model.ts",title:"features/auth-form/model.ts"},"export { actions, reducer }\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/model.ts",title:"features/post-form/model.ts"},"export { actions, reducer }\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form as PostForm } from "./ui"\nexport * as postFormModel from "./model"\n')))),(0,o.kt)("h2",{id:"about-re-exports"},"About re-exports"),(0,o.kt)("p",null,"In JavaScript, the public interface of a module is created by re-exporting entities from inside the module in an ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/index.ts",title:"**/**/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authModel from "./model"\n')),(0,o.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In most popular bundlers, due to re-exports, ",(0,o.kt)("strong",{parentName:"p"},"the code-splitting works worse"),", because ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/tree-shaking/"},"tree-shaking")," with this approach, it is safe to discard only the entire module, but not part of it."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For example, importing ",(0,o.kt)("inlineCode",{parentName:"p"},"authModel")," into the page model will cause the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthForm")," component to get into the chunk of this page, even if this component is not used there."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'As a result, initialization of the chunk becomes more expensive, because the browser must process all the modules in it, including those that got into the bundle "for the company"'))),(0,o.kt)("h3",{id:"possible-solutions"},"Possible solutions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," allows you to mark re-export files as ",(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free"},(0,o.kt)("strong",{parentName:"a"},"side effects free"))," - this allows ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," to use more aggressive optimizations when working with such a file")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/41"},"(Discussion) Public Abstraction API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/SOLID"},"Principles ",(0,o.kt)("strong",{parentName:"a"},"SOLID"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GRASP"},"Patterns ",(0,o.kt)("strong",{parentName:"a"},"GRASP")))))}c.isMDXComponent=!0}}]);