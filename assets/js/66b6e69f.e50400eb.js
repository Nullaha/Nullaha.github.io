"use strict";(self.webpackChunknullaha_github_io=self.webpackChunknullaha_github_io||[]).push([[3387],{8584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=t(4848),a=t(8453);const s={},r=void 0,c={id:"elementPlus/array",title:"array",description:"\u4e3a\u4ec0\u4e48 \u6267\u884c\u987a\u5e8f\u662f1243 ?",source:"@site/docs/elementPlus/array.mdx",sourceDirName:"elementPlus",slug:"/elementPlus/array",permalink:"/docs/elementPlus/array",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"el-dialog",permalink:"/docs/elementPlus/el-dialog"}},l={},i=[];function u(e){const n={br:"br",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function abc () {\n  console.log('aha---------------1');\n  helper.initialNotes.forEach(async (note) => {\n    console.log('aha---------------2');\n    let noteObject = new Note(note)\n    await noteObject.save()\n    console.log('aha---------------3');\n  })\n  console.log('aha---------------4');\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4ec0\u4e48 \u6267\u884c\u987a\u5e8f\u662f1243 ?",(0,o.jsx)(n.br,{}),"\n","the await commands defined inside of the forEach loop are not in the beforeEach function, but in separate functions that beforeEach will not wait for."]}),"\n",(0,o.jsx)(n.p,{children:"\u600e\u4e48\u4fee\u6539\u5462?\n\u65b9\u5f0f1\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u6309\u987a\u5e8f\nasync function abc(){\n  for (let note of helper.initialNotes) {\n    let noteObject = new Note(note)\n    await noteObject.save()\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u5f0f2\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u4e0d\u6309\u987a\u5e8f\nasync function abc () {\n  const noteObjects = helper.initialNotes\n    .map(note => new Note(note))\n  const promiseArray = noteObjects.map(note => note.save())\n  await Promise.all(promiseArray)\n})\n"})}),"\n",(0,o.jsx)(n.p,{children:"Promise.all()"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);