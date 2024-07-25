"use strict";(self.webpackChunknullaha_github_io=self.webpackChunknullaha_github_io||[]).push([[4469],{5975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var l=t(4848),o=t(8453);const a={sidebar_position:1,title:"el-upload",description:"\u76f8\u5173\u5185\u5bb9",date:"2024-7-19",tags:["elementPlus","upload"]},r=void 0,s={id:"frontend/elementPlus/el-upload",title:"el-upload",description:"\u76f8\u5173\u5185\u5bb9",source:"@site/docs/frontend/elementPlus/el-upload.mdx",sourceDirName:"frontend/elementPlus",slug:"/frontend/elementPlus/el-upload",permalink:"/docs/frontend/elementPlus/el-upload",draft:!1,unlisted:!1,tags:[{label:"elementPlus",permalink:"/docs/tags/element-plus"},{label:"upload",permalink:"/docs/tags/upload"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"el-upload",description:"\u76f8\u5173\u5185\u5bb9",date:"2024-7-19",tags:["elementPlus","upload"]},sidebar:"frontendSidebar",previous:{title:"el-dialog",permalink:"/docs/frontend/elementPlus/el-dialog"},next:{title:"vite",permalink:"/docs/category/vite"}},i={},d=[{value:"\u70b9\u51fb\u6309\u94ae\uff0c\u5148\u5224\u65ad\uff0c\u518d\u51b3\u5b9a\u662f\u5426\u5f39\u51fa\u6587\u6863\u9009\u62e9\u6846?",id:"\u70b9\u51fb\u6309\u94ae\u5148\u5224\u65ad\u518d\u51b3\u5b9a\u662f\u5426\u5f39\u51fa\u6587\u6863\u9009\u62e9\u6846",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u70b9\u51fb\u6309\u94ae\u5148\u5224\u65ad\u518d\u51b3\u5b9a\u662f\u5426\u5f39\u51fa\u6587\u6863\u9009\u62e9\u6846",children:"\u70b9\u51fb\u6309\u94ae\uff0c\u5148\u5224\u65ad\uff0c\u518d\u51b3\u5b9a\u662f\u5426\u5f39\u51fa\u6587\u6863\u9009\u62e9\u6846?"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://blog.csdn.net/weixin_43908123/article/details/124858555",children:"\u53c2\u8003: upload \u4e0a\u4f20\u6587\u4ef6\u4e4b\u524d\u5224\u65ad\uff0c\u5148\u5224\u65ad\u518d\u5f39\u51fa\u6587\u6863\u9009\u62e9\u6846"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-vue",children:'<el-upload ref="uploadRef" class="upload-btn" :limit="1" :on-exceed="handleExceed" :on-change="handleChange" :auto-upload="false" :show-file-list="false">\n    <template #trigger>\n        <el-button type="primary" @click="handleButtonClick">\u5bfc\u5165\u6587\u4ef6</el-button>\n    </template>\n</el-upload>\n<script setup>\n\nconst uploadRef = ref<UploadInstance>();\nconst currentDirId = ref(\'\');\nconst handleButtonClick = (e) => {\n    if (!dataStore.currentDirId) {\n        ElMessage.info(\'\u8bf7\u5148\u9009\u62e9\u5de6\u4fa7dirId\uff01\');\n        e.stopPropagation(); // \u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1d\n        return;\n    }\n    uploadRef.value!.clearFiles();\n};\n<\/script>\n'})}),"\n",(0,l.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var l=t(6540);const o={},a=l.createContext(o);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);