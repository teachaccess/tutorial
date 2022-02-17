"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[328],{5312:(e,t,i)=>{i.d(t,{ML:()=>u});i(3117),i(102);var o=i(7294),n=i(3905),s=i(4456),r=i(2202),a=i(8120),l=i(4669),d=(i(5935),i(8378)),u=function(e){var t=e.checkExercise,i=e.children,u=void 0===i?"":i,c=o.useState(Math.round(1e5*Math.random()))[0],h=o.useState(),m=(h[0],h[1]),p=o.useState(u),f=p[0],x=p[1],g=o.useRef();o.useEffect((function(){var e=new s.tk({state:a.yy.create({doc:u,extensions:[r.Xy,(0,l.dy)(),s.tk.updateListener.of((function(e){e.docChanged&&x(e.state.doc.toString())}))]}),parent:document.querySelector("#editor-"+c)});m(e)}),[]);var w=(0,n.kt)("div",null,(0,n.kt)("div",{className:"playground-header"},"Live editor"),(0,n.kt)("div",{id:"editor-"+c,className:"npm__react-simple-code-editor__textarea"})),v=(0,n.kt)("div",null,(0,n.kt)("div",{className:"playground-header"},"Result"),(0,n.kt)("div",{id:t?"exercise":"",className:"html-output",ref:g,dangerouslySetInnerHTML:{__html:f}})),k=t&&(0,n.kt)(d.Ep,{checkExercise:function(){return t(g.current)},mdxType:"VerifyButton"});return(0,n.kt)(o.Fragment,null,(0,n.kt)("div",{className:"editor-container"},w,v),k)}},8378:(e,t,i)=>{i.d(t,{Ep:()=>s});i(3117),i(102);var o=i(7294),n=i(3905),s=function(e){var t=e.checkExercise,i=(0,o.useState)(null),s=i[0],r=i[1],a="Well done!",l=function(){var e=t();r(e||a)};return(0,n.kt)("div",{className:"verify"},(0,n.kt)("button",{type:"button",className:"button",onClick:l},"Verify"),function(){if(s){var e=s===a;return(0,n.kt)("div",{className:e?"success":"error",role:"alert"},s)}}())}},7703:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>u,toc:()=>c,default:()=>m});var o=i(3117),n=i(102),s=(i(7294),i(3905)),r=i(5312),a=["components"],l={title:"Text",sidebar_label:"3.4. Text",id:"text"},d=void 0,u={unversionedId:"design/text",id:"design/text",title:"Text",description:"People with low vision use browser zoom tools and assistive technology such as",source:"@site/../docs/design/text-size.mdx",sourceDirName:"design",slug:"/design/text",permalink:"/tutorial/design/text",tags:[],version:"current",lastUpdatedBy:"Rachel Ruderman",lastUpdatedAt:1645081201,formattedLastUpdatedAt:"2/17/2022",frontMatter:{title:"Text",sidebar_label:"3.4. Text",id:"text"},sidebar:"docs",previous:{title:"3.3. Color meaning",permalink:"/tutorial/design/color-meaning"},next:{title:"3.5. Site copy",permalink:"/tutorial/design/site-copy"}},c=[{value:"Text size",id:"text-size",children:[],level:2}],h={toc:c};function m(e){var t=e.components,i=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"People with low vision use browser zoom tools and assistive technology such as\n",(0,s.kt)("a",{parentName:"p",href:"http://www.aisquared.com/products/zoomtext/"},"ZoomText")," to increase the size of\ncontent on the screen. This exercise shows you the difference between zooming\nall the content versus zooming just the text on the page."),(0,s.kt)("h2",{id:"text-size"},"Text size"),(0,s.kt)("p",null,"For people with low vision, it is important to support the ability to increase\ntext size without text overlapping or getting truncated. To test, use your browser's\nbuilt-in zoom or text-resize feature to zoom and make sure text is still readable.\nIf you are building for the mobile web, please don't disable pinch and zoom."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale"},"WCAG guidelines recommend allowing zooming up to 200% without loss of\ncontent.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://webaim.org/techniques/fonts/#font_size"},"More on fonts and accessibility in the WebAIM\nsite.")),(0,s.kt)("p",null,"For the exercise below, you will need a browser like Safari that allows you to\nincrease just the text size instead of zooming in the whole page. On Safari,\ngo to View and Zoom Text Only and then select Zoom In from the same menu. You\nwill notice that the words bleed outside the box below. Try fixing this example\nby specifying the width and height as relative units, such as ems. Set the height\nto 3em and width to 10em and verify your answers."),(0,s.kt)(r.ML,{checkExercise:function(e){var t=e.querySelector("#container");if(!("3em"===t.style.height&&"10em"===t.style.width))return"It doesn't seem like the height and width are set to the right ems"},mdxType:"Editor"},'<div \n  id="container"\n  style="width: 80px; height: 50px;"\n>\n  Lorem ipsum dolor sit amet\n</div>'))}m.isMDXComponent=!0}}]);