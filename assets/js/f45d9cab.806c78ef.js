"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[919],{5312:(e,t,a)=>{a.d(t,{ML:()=>c});a(3117),a(102);var n=a(7294),l=a(3905),r=a(4456),s=a(2202),i=a(8120),d=a(4669),o=(a(5935),a(8378)),c=function(e){var t=e.checkExercise,a=e.children,c=void 0===a?"":a,u=n.useState(Math.round(1e5*Math.random()))[0],m=n.useState(),b=(m[0],m[1]),h=n.useState(c),k=h[0],p=h[1],v=n.useRef();n.useEffect((function(){var e=new r.tk({state:i.yy.create({doc:c,extensions:[s.Xy,(0,d.dy)(),r.tk.updateListener.of((function(e){e.docChanged&&p(e.state.doc.toString())}))]}),parent:document.querySelector("#editor-"+u)});b(e)}),[]);var y=(0,l.kt)("div",null,(0,l.kt)("div",{className:"playground-header"},"Live editor"),(0,l.kt)("div",{id:"editor-"+u,className:"npm__react-simple-code-editor__textarea"})),f=(0,l.kt)("div",null,(0,l.kt)("div",{className:"playground-header"},"Result"),(0,l.kt)("div",{id:t?"exercise":"",className:"html-output",ref:v,dangerouslySetInnerHTML:{__html:k}})),g=t&&(0,l.kt)(o.Ep,{checkExercise:function(){return t(v.current)},mdxType:"VerifyButton"});return(0,l.kt)(n.Fragment,null,(0,l.kt)("div",{className:"editor-container"},y,f),g)}},8378:(e,t,a)=>{a.d(t,{Ep:()=>r});a(3117),a(102);var n=a(7294),l=a(3905),r=function(e){var t=e.checkExercise,a=(0,n.useState)(null),r=a[0],s=a[1],i="Well done!",d=function(){var e=t();s(e||i)};return(0,l.kt)("div",{className:"verify"},(0,l.kt)("button",{type:"button",className:"button",onClick:d},"Verify"),function(){if(r){var e=r===i;return(0,l.kt)("div",{className:e?"success":"error",role:"alert"},r)}}())}},3665:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>b});var n=a(3117),l=a(102),r=(a(7294),a(3905)),s=(a(8378),a(5312)),i=["components"],d={title:"Tables",sidebar_label:"2.8. Tables",id:"tables"},o=void 0,c={unversionedId:"code/tables",id:"code/tables",title:"Tables",description:"Tables help screen readers process information presented in a tabular format.",source:"@site/../docs/code/tables.mdx",sourceDirName:"code",slug:"/code/tables",permalink:"/tutorial/code/tables",tags:[],version:"current",lastUpdatedBy:"Rachel Ruderman",lastUpdatedAt:1645081201,formattedLastUpdatedAt:"2/17/2022",frontMatter:{title:"Tables",sidebar_label:"2.8. Tables",id:"tables"},sidebar:"docs",previous:{title:"2.7. Dialogs",permalink:"/tutorial/code/dialogs"},next:{title:"2.9. Menus",permalink:"/tutorial/code/menus"}},u=[{value:"Semantic table",id:"semantic-table",children:[],level:2},{value:"Exercise: Unsemantic table",id:"exercise-unsemantic-table",children:[],level:2}],m={toc:u};function b(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tables help screen readers process information presented in a tabular format.\nWhen information is presented using table markup, screen reader users can read down columns and across rows, and even hear column and row headings as they do so."),(0,r.kt)("h2",{id:"semantic-table"},"Semantic table"),(0,r.kt)("p",null,"The following table uses semantic ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," markup. HTML provides many elements and attributes to create fully\naccessible tables. Note: ARIA 1.0 does not include HTML table equivalence; that is coming in ARIA 1.1. So\nit is best to stick to native HTML unless you are building an interactive grid that includes two-dimensional\narrow key navigation of the table content. To test the table below with VoiceOver:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Opt")," + ",(0,r.kt)("kbd",null,"Cmd")," + ",(0,r.kt)("kbd",null,"h"),' repeatedly until you reach the "Editor Output" region.'),(0,r.kt)("li",{parentName:"ol"},"Now press ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Opt")," + ",(0,r.kt)("kbd",null,"Right Arrow")," repeatedly to navigate the table cells.")),(0,r.kt)("p",null,"At this time, VoiceOver does not read the column headers in Chrome. However, VoiceOver does read them in Safari. Windows screen readers typically read column and row headers as well."),(0,r.kt)(s.ML,{mdxType:"Editor"},"<table>\n  <thead>\n    <tr>\n      <td></td>\n      <th>Week1</th>\n      <th>Week2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>Clicks</th>\n      <td>100</td>\n      <td>90</td>\n    </tr>\n    <tr>\n      <th>Likes</th>\n      <td>60</td>\n      <td>55</td>\n    </tr>\n  </tbody>\n</table>"),";",(0,r.kt)("h2",{id:"exercise-unsemantic-table"},"Exercise: Unsemantic table"),(0,r.kt)("p",null,"If the information is tabular, using CSS to create the appearance of a table makes the information\nalmost impossible for a screen reader user to understand and use. Convert the following tabular data\ninto an accessible HTML table."),(0,r.kt)(s.ML,{checkExercise:function(e){return e.querySelector("table")?e.querySelectorAll("tr").length?e.querySelectorAll("th").length?e.querySelectorAll("td").length?void 0:"Are you using semantic td tags?":"Are you using semantic th tags?":"Are you using semantic tr tags?":"Use a semantic table element."},mdxType:"Editor"},'<div className="table">\n  <div className="tableHeading">\n    <div className="tableHead">Month</div>\n    <div className="tableHead">Mood</div>\n  </div>\n  <div className="tableBody">\n    <div className="tableRow">\n      <div className="tableCell">January</div>\n      <div className="tableCell">happy</div>\n    </div>\n  </div>\n</div>'))}b.isMDXComponent=!0}}]);