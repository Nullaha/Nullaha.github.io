"use strict";(self.webpackChunknullaha_github_io=self.webpackChunknullaha_github_io||[]).push([[6414],{6352:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(4586),l=i(781),s=i(1642),r=i(2607),n=i(8366),d=i(717);const a="yearBox_Q_Hd",c="monthBox_VyD6",m="todoCard_BNYu",h="todoCardHeader_tBW0",p="todoCardBody_Tfhl";var u=i(4848);const x=e=>{let{item:t}=e;return(0,u.jsxs)("li",{children:["done"===t.state?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.A,{placement:"bottom",title:"\u5b8c\u6210\u65f6\u95f4: "+t.doneTime,children:"\u2714"}),(0,u.jsx)(s.A,{placement:"right",title:"todo\u65f6\u95f4: "+t.time,children:(0,u.jsx)("del",{children:t.title})})]}):(0,u.jsx)(s.A,{placement:"right",title:"todo\u65f6\u95f4: "+t.time,children:t.title}),t.children&&t.children.length>0&&(0,u.jsx)("ol",{children:t.children.map(((e,t)=>(0,u.jsx)(x,{item:e},t)))})]})},g=e=>{let{groupedTodos:t}=e;return(0,u.jsx)(u.Fragment,{children:Object.keys(t).map((e=>(0,u.jsx)("div",{className:a,children:(0,u.jsx)(r.A,{gutter:[16,16],children:Object.keys(t[e]).map((i=>(0,u.jsx)(n.A,{span:8,className:c,children:(0,u.jsx)(d.A,{title:i,bordered:!0,className:m,style:{height:400,overflow:"hidden"},classNames:{body:p,header:h},children:(0,u.jsx)("ol",{children:t[e][i].map(((e,t)=>(0,u.jsx)(x,{item:e},t)))})})},i)))},e)},e)))})},j={todoBox:"todoBox_GoID"},b=[{title:"ArcGISServer/GeoServer\u5207\u7247\u670d\u52a1\u89c4\u5219",time:"2024-7-21",refer:["ArcGISServer/GeoServer\u5207\u7247\u670d\u52a1\u89c4\u5219\uff1ahttps://blog.csdn.net/mxy2572185/article/details/86691005","\u74e6\u7247\u5730\u56fe\u539f\u7406\uff1ahttps://segmentfault.com/a/1190000011276788","\u74e6\u7247(Tile)\u5730\u56fe\u539f\u7406: https://xcsf.github.io/blog/2020/06/12/%E7%93%A6%E7%89%87Tile%E5%9C%B0%E5%9B%BE%E5%8E%9F%E7%90%86/"]},{title:"arcgis/core css \u672c\u5730\u5316",time:"2024-7-22",state:"done",doneTime:"2024-7-23"},{title:"vue vite public \u8d44\u6e90\u7684\u4f7f\u7528(img,css,js,json...)",time:"2024-7-22"},{title:"arcgis\u5207\u7247\uff0c\u901a\u8fc7nginx\u8f6c\u53d1\uff0c\u9879\u76ee\u91cc\u8bbf\u95ee\uff08\u8981\u6539WebTileLayer\u6e90\u7801\uff09",time:"2024-7-22",state:"done",doneTime:"2024-7-23"},{title:"\u4e3a\u4ec0\u4e48\u6211\u628amapview\u4fdd\u5b58\u5230pinia\u4e2d\uff0c\u7136\u540e\u6211\u62ff\u51fa\u6765\u7528\u52a0\u4e86\u4e2apopup\uff0c\u6211\u53bb\u62ffpinia\u91cc\u7684view\u5b83\u91cc\u9762\u6ca1\u6709\u3002\u3002\u3002",time:"2024-7-22"},{title:"\u79bb\u7ebf\u4f7f\u7528arcgis/core\uff0c\u4f1a\u78b0\u5230\u5f88\u591a\u7528\u5230\u5728\u7ebf\u8d44\u6e90\u7684\u60c5\u51b5\uff0c",time:"2024-7-22",state:"done",doneTime:"2024-7-23"},{title:"arcgis/core popup\u82e5\u5e72\u95ee\u9898",time:"2024-7-24",children:[{title:"moveable popups",time:"2024-7-24",state:"done",doneTime:"2024-7-24"},{title:"popup collapse",time:"2024-7-24"},{title:"popup style",time:"2024-7-24"}]},{title:"vue\u5916\u90e8\u4fee\u6539#shadow-root (open)\u7684\u6837\u5f0f",time:"2024-7-24"}],v=e=>{const t={};return e.forEach((e=>{const[i,o]=e.time.split("-");t[i]||(t[i]={}),t[i][o]||(t[i][o]=[]),t[i][o].push(e)})),t};function f(){const{siteConfig:e}=(0,o.A)(),t=v(b);return(0,u.jsx)(l.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:(0,u.jsx)("div",{className:j.todoBox,children:(0,u.jsx)(g,{groupedTodos:t})})})}}}]);