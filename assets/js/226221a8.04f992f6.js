"use strict";(self.webpackChunknullaha_github_io=self.webpackChunknullaha_github_io||[]).push([[555],{1109:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(6540),o=i(9522);const r=()=>{const[e,t]=(0,a.useState)("defaultAlgorithm");return(0,a.useEffect)((()=>{const e=()=>{const e=localStorage.getItem("theme");t("light"===e?"defaultAlgorithm":"darkAlgorithm")};return e(),window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[]),{curTheme:o.A[e]}}},8056:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(4586),o=i(781),r=(i(6540),i(3287)),s=i(7589),n=i(2607),l=i(8366),d=i(717);const c="tabContentBox_FOjk",h="demoBox_nfnh",m="demoCard_DMic",u="demoCardBody_zOaS",g="demoCardHeader_MmpP";var x=i(4848);const p=e=>{let{name:t,demos:i}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:c,children:(0,x.jsx)(n.A,{gutter:[16,16],children:i.map((e=>(0,x.jsx)(l.A,{span:6,className:h,children:(0,x.jsx)(d.A,{title:e.title,extra:(0,x.jsx)("a",{href:e.link,target:"_blank",children:"\u6253\u5f00"}),bordered:!0,className:m,style:{height:400,overflow:"hidden"},classNames:{body:u,header:g},children:(0,x.jsx)("span",{children:e.description})})},e.title)))},t)})})};var f=i(1109);const j={gis:[{title:"arcgis4-vue3-demo",time:"2024-7-25",link:"https://nullaha.github.io/deploy-repo/arcgis-demo",description:"1.\u52a0\u8f7d\u5404\u79cd\u5730\u56fe\u670d\u52a1\u3002"}],three:[{title:"test",time:"2024-7-21"}]},A=Object.keys(j),b={demoBox:"demoBox_mWhI"};function v(){const{siteConfig:e}=(0,a.A)(),{curTheme:t}=(0,f.A)();return(0,x.jsx)(o.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:(0,x.jsx)(r.Ay,{theme:{algorithm:t},children:(0,x.jsx)("div",{className:b.demoBox,children:(0,x.jsx)(s.A,{defaultActiveKey:"2",tabPosition:"left",onChange:e=>{console.log(e)},type:"card",items:A.map(((e,t)=>({key:e,label:e,children:(0,x.jsx)(p,{name:e,demos:j[e]||[]})})))})})})})}}}]);