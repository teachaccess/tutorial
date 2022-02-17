"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8816:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={title:"Color meaning",sidebar_label:"3.3. Color meaning",id:"color-meaning"},c=void 0,s={unversionedId:"design/color-meaning",id:"design/color-meaning",title:"Color meaning",description:"Color blindness is the inability or decreased ability to see color or perceive",source:"@site/../docs/design/color-meaning.md",sourceDirName:"design",slug:"/design/color-meaning",permalink:"/tutorial/design/color-meaning",tags:[],version:"current",lastUpdatedBy:"Rachel Ruderman",lastUpdatedAt:1645081201,formattedLastUpdatedAt:"2/17/2022",frontMatter:{title:"Color meaning",sidebar_label:"3.3. Color meaning",id:"color-meaning"},sidebar:"docs",previous:{title:"3.2. Color contrast",permalink:"/tutorial/design/color-contrast"},next:{title:"3.4. Text",permalink:"/tutorial/design/text"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Color blindness is the inability or decreased ability to see color or perceive\ncolor differences. ",(0,i.kt)("a",{parentName:"p",href:"https://nei.nih.gov/health/color_blindness/facts_about"},"Approximately 4.5% of the world's population")," are color blind to some degree. In order to ensure that someone with color blindness can\nsuccessfully use your product, you cannot rely completely on color alone to\ncommunicate information. By extension, using colors or patterns alone to\nindicate something will not be accessible to blind users. In instances where\nyou are using color as an indicator (for instance, green for something active\nand grey for something inactive), include a text equivalent description for the\nstate."),(0,i.kt)("p",null,"Here's an example where providing a very simple texture to a bar chart will aid in readability and understanding for someone with decreased color perception."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/tutorial/img/color-meaning-solid.png",alt:"Chart showing bar graph without texture"}),(0,i.kt)("figcaption",null,"Figure A: Chart without Texture")),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/tutorial/img/color-meaning-texture.png",alt:"Chart showing bar graph with distinct textures for each bar"}),(0,i.kt)("figcaption",null,"Figure B: Chart with Texture ")))}d.isMDXComponent=!0}}]);