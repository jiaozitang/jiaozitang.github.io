"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9817],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=c(n),k=o,f=m["".concat(i,".").concat(k)]||m[k]||s[k]||a;return n?l.createElement(f,p(p({ref:t},u),{},{components:n})):l.createElement(f,p({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,p[1]=r;for(var c=2;c<a;c++)p[c]=n[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return k}});var l=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],r={},i=void 0,c={permalink:"/blog/2022.07.30-devtools1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022.07.30-devtools1.md",source:"@site/blog/2022.07.30-devtools1.md",title:"2022.07.30-devtools1",description:"\u672c\u6587\u5206\u4eab\u4e00\u4e9b\u4e0d\u5e38\u89c1\u4f46\u5f88\u6709\u7528\u7684JavaScript \u8c03\u8bd5\u6280\u5de7\uff0c\u80fd\u591f\u6709\u6548\u63d0\u9ad8\u6d4f\u89c8\u5668\u5f00\u53d1\u5de5\u5177\u7684\u4f7f\u7528\u6548\u7387\u3002",date:"2022-10-12T07:21:45.905Z",formattedDate:"October 12, 2022",tags:[],readingTime:5.07,truncated:!1,authors:[],prevItem:{title:"\u6d45\u5b66\u4e00\u4e0b storybook",permalink:"/blog/2022.06.24-storybook"},nextItem:{title:"Typescript \u5e38\u7528\u7279\u6027\u5c0f\u7ed3",permalink:"/blog/2022/05/23/ts"}},u={authorsImageUrls:[]},s=[{value:"\u4e00\u3001\u5143\u7d20\u9762\u677f",id:"\u4e00\u5143\u7d20\u9762\u677f",children:[{value:"1. \u91cd\u65b0\u6392\u5217\u5143\u7d20\u7684\u4f4d\u7f6e",id:"1-\u91cd\u65b0\u6392\u5217\u5143\u7d20\u7684\u4f4d\u7f6e",children:[],level:3},{value:"2. \u5728\u5143\u7d20\u9762\u677f\u4e2d\u5f15\u7528\u8282\u70b9",id:"2-\u5728\u5143\u7d20\u9762\u677f\u4e2d\u5f15\u7528\u8282\u70b9",children:[],level:3},{value:"3. \u7528\u4e00\u4e2a DOM \u8282\u70b9\u505a\u5f88\u591a\u4e8b\u60c5\uff0c\u6bd4\u5982\u622a\u5c4f\uff1f",id:"3-\u7528\u4e00\u4e2a-dom-\u8282\u70b9\u505a\u5f88\u591a\u4e8b\u60c5\u6bd4\u5982\u622a\u5c4f",children:[],level:3}],level:2},{value:"\u4e8c\u3001\u63a7\u5236\u53f0\u9762\u677f",id:"\u4e8c\u63a7\u5236\u53f0\u9762\u677f",children:[{value:"1. \u591a\u884c console",id:"1-\u591a\u884c-console",children:[],level:3},{value:"2. \u63a7\u5236\u53f0\u65e5\u5fd7\u683c\u5f0f\u5316",id:"2-\u63a7\u5236\u53f0\u65e5\u5fd7\u683c\u5f0f\u5316",children:[],level:3},{value:"3. \u5b58\u50a8\u4e3a\u5168\u5c40\u53d8\u91cf",id:"3-\u5b58\u50a8\u4e3a\u5168\u5c40\u53d8\u91cf",children:[],level:3},{value:"4. \u63a7\u5236\u53f0\u9762\u677f\u4e2d\u7684\u9ad8\u7ea7\u65e5\u5fd7\u8bb0\u5f55",id:"4-\u63a7\u5236\u53f0\u9762\u677f\u4e2d\u7684\u9ad8\u7ea7\u65e5\u5fd7\u8bb0\u5f55",children:[{value:"4.1 console.dir",id:"41-consoledir",children:[],level:4},{value:"4.2 console.table",id:"42-consoletable",children:[],level:4}],level:3},{value:"5.\u4fdd\u5b58\u63a7\u5236\u53f0\u65e5\u5fd7",id:"5\u4fdd\u5b58\u63a7\u5236\u53f0\u65e5\u5fd7",children:[],level:3},{value:"6. console.group",id:"6-consolegroup",children:[],level:3},{value:"7. console.time",id:"7-consoletime",children:[],level:3},{value:"8. $_ \u83b7\u53d6\u4e0a\u4e00\u4e2a\u7684\u6267\u884c\u8f93\u51fa",id:"8-_-\u83b7\u53d6\u4e0a\u4e00\u4e2a\u7684\u6267\u884c\u8f93\u51fa",children:[],level:3}],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2},{value:"\u5f80\u671f\u7cbe\u5f69",id:"\u5f80\u671f\u7cbe\u5f69",children:[],level:2}],m={toc:s};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5206\u4eab\u4e00\u4e9b\u4e0d\u5e38\u89c1\u4f46\u5f88\u6709\u7528\u7684JavaScript \u8c03\u8bd5\u6280\u5de7\uff0c\u80fd\u591f\u6709\u6548\u63d0\u9ad8\u6d4f\u89c8\u5668\u5f00\u53d1\u5de5\u5177\u7684\u4f7f\u7528\u6548\u7387\u3002")),(0,a.kt)("h2",{id:"\u4e00\u5143\u7d20\u9762\u677f"},"\u4e00\u3001\u5143\u7d20\u9762\u677f"),(0,a.kt)("p",null,"\u9996\u5148\u4ecb\u7ecd\u7684\u662f Elements \u9762\u677f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/248a4723f47f45fab794841b22ad6775~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u5143\u7d20.png"})),(0,a.kt)("h3",{id:"1-\u91cd\u65b0\u6392\u5217\u5143\u7d20\u7684\u4f4d\u7f6e"},"1. \u91cd\u65b0\u6392\u5217\u5143\u7d20\u7684\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u53ef\u4ee5\u62d6\u653e\u5143\u7d20\u4ee5\u5728\u4f4d\u7f6e\u4e0a\u4e0a\u4e0b\u79fb\u52a8\uff0c\u53ef\u7528\u4e8e\u7f16\u8f91/\u8c03\u8bd5 HTML \u7ed3\u6784\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baed937d71fc46ca8e9e32034b0a3975~tplv-k3u1fbpfcp-zoom-1.image",alt:"dom_move.gif"})),(0,a.kt)("h3",{id:"2-\u5728\u5143\u7d20\u9762\u677f\u4e2d\u5f15\u7528\u8282\u70b9"},"2. \u5728\u5143\u7d20\u9762\u677f\u4e2d\u5f15\u7528\u8282\u70b9"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"$0")," \u8c03\u8bd5\u5143\u7d20\u9762\u677f\u9009\u4e2d\u7684 DOM \u8282\u70b9\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 jQuery\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"$($0)"),"jQuery API \u6765\u8bbf\u95ee\u548c\u5e94\u7528\u8fd9\u4e2a\u5143\u7d20\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9776839a6f1c4acbb5c8b319f9de2ad2~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u53c2\u8003\u5143\u7d20.gif"})),(0,a.kt)("h3",{id:"3-\u7528\u4e00\u4e2a-dom-\u8282\u70b9\u505a\u5f88\u591a\u4e8b\u60c5\u6bd4\u5982\u622a\u5c4f"},"3. \u7528\u4e00\u4e2a DOM \u8282\u70b9\u505a\u5f88\u591a\u4e8b\u60c5\uff0c\u6bd4\u5982\u622a\u5c4f\uff1f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u4e0d\u9000\u51fa\u8c03\u8bd5\u5668\u5de5\u5177\u7684\u60c5\u51b5\u4e0b\u622a\u53d6 DOM \u8282\u70b9\u7684\u5c4f\u5e55\u622a\u56fe\u3002"),(0,a.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl-shift-p"),"\uff08Mac \u5feb\u6377\u952e\uff09\uff0c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"screen")," \u641c\u7d22\u622a\u56fe\u529f\u80fd\uff0c\u5b8c\u6210 DOM \u8282\u70b9\u7684\u5c4f\u5e55\u622a\u56fe\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58a03aa60040442f99acf7b2c2a78c5b~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u622a\u56fe.gif"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u540c\u65f6\uff0c\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl-shift-p")," \u540e\u8fd8\u6709\u5f88\u591a\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u53ef\u4ee5\u81ea\u884c\u63a2\u7d22\u3002")),(0,a.kt)("h2",{id:"\u4e8c\u63a7\u5236\u53f0\u9762\u677f"},"\u4e8c\u3001\u63a7\u5236\u53f0\u9762\u677f"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4ecb\u7ecd\u7684\u662f console \u9762\u677f\u7684\u4f7f\u7528\u6280\u5de7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eac15ffa6be54cd0bea5310806c2e24b~tplv-k3u1fbpfcp-zoom-1.image",alt:"cosnole.png"})),(0,a.kt)("h3",{id:"1-\u591a\u884c-console"},"1. \u591a\u884c console"),(0,a.kt)("p",null,"\u6309\u4f4f",(0,a.kt)("inlineCode",{parentName:"p"},"shift-enter"),"\u4ee5\u7ee7\u7eed\u6267\u884c\u6bcf\u4e00\u884c\uff0c\u5b8c\u6210\u540e\uff0c\u6309",(0,a.kt)("inlineCode",{parentName:"p"},"enter"),"\u952e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u591a\u884c\u65e5\u5fd7\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/310a18a94c9e4a60bcc8a6b2591c0185~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u591a\u884c\u63a7\u5236\u53f0.gif"})),(0,a.kt)("h3",{id:"2-\u63a7\u5236\u53f0\u65e5\u5fd7\u683c\u5f0f\u5316"},"2. \u63a7\u5236\u53f0\u65e5\u5fd7\u683c\u5f0f\u5316"),(0,a.kt)("p",null,"\u9664\u4e86\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"console.log('Hi')"),"\uff0c\u8fd8\u6709\u4e00\u4e9b\u66f4\u6709\u7528\u7684\u683c\u5f0f\u5316\u7248\u672c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"%s \u5c06\u53d8\u91cf\u683c\u5f0f\u5316\u4e3a\u5b57\u7b26\u4e32\uff1b"),(0,a.kt)("li",{parentName:"ul"},"%d \u5c06\u53d8\u91cf\u683c\u5f0f\u5316\u4e3a\u6574\u6570\uff1b"),(0,a.kt)("li",{parentName:"ul"},"%f \u5c06\u53d8\u91cf\u683c\u5f0f\u5316\u4e3a\u6d6e\u70b9\u6570\uff1b"),(0,a.kt)("li",{parentName:"ul"},"%o \u53ef\u7528\u4e8e\u6253\u5370 DOM \u5143\u7d20\uff1b"),(0,a.kt)("li",{parentName:"ul"},"%O \u7528\u4e8e\u6253\u5370\u5bf9\u8c61\u8868\u793a\uff1b"),(0,a.kt)("li",{parentName:"ul"},"%c \u7528\u4e8e\u4f20\u9012 CSS \u6765\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u3002")),(0,a.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u9762\u677f\u4e2d\u4e0b\u5217\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"console.log(\n  '%c I have %d %s',\n  'color: green; background:black; font-size: 20pt',\n  3,\n  'Bikes!'\n)\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8788f2edd2b439082f90cfa6ef63aeb~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u683c\u5f0f\u63a7\u5236\u53f0.png"})),(0,a.kt)("h3",{id:"3-\u5b58\u50a8\u4e3a\u5168\u5c40\u53d8\u91cf"},"3. \u5b58\u50a8\u4e3a\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06 JSON \u5bf9\u8c61\u7684\u4efb\u4f55\u90e8\u5206\u4fdd\u5b58\u4e3a\u53ef\u5728\u63a7\u5236\u53f0\u9762\u677f\u4e2d\u8bbf\u95ee\u7684\u5168\u5c40\u53d8\u91cf\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/921d432878774428bad600b5083546da~tplv-k3u1fbpfcp-zoom-1.image",alt:"global_var_console.gif"})),(0,a.kt)("h3",{id:"4-\u63a7\u5236\u53f0\u9762\u677f\u4e2d\u7684\u9ad8\u7ea7\u65e5\u5fd7\u8bb0\u5f55"},"4. \u63a7\u5236\u53f0\u9762\u677f\u4e2d\u7684\u9ad8\u7ea7\u65e5\u5fd7\u8bb0\u5f55"),(0,a.kt)("h4",{id:"41-consoledir"},"4.1 console.dir"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(['Apple', 'Orange]);\n")),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e9b295a0c10454eb97137ce5dda426f~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u9ad8\u7ea7\u65e5\u5fd71.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.dir(['Apple', 'Orange'])\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u4e0e\u4e0a\u9762\u51e0\u4e4e\u76f8\u540c\uff0c\u4f46\u5b83\u660e\u786e\u8868\u793a\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e867a004c63a4fd28aaea721ee9e5063~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u9ad8\u7ea7\u65e5\u5fd72.png"})),(0,a.kt)("h4",{id:"42-consoletable"},"4.2 console.table"),(0,a.kt)("p",null,"console.table \u4f1a\u5728\u63a7\u5236\u53f0\u4e2d\u6253\u5370\u4e00\u4e2a\u8868\u683c\u3002"),(0,a.kt)("p",null,"\u5f53\u60a8\u5904\u7406\u590d\u6742\u7684\u5bf9\u8c61\u65f6\uff0c\u53ea\u9700\u5c06\u5176\u6253\u5370\u4e3a table \u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u770b\u770b\u5b83\u7684\u5b9e\u9645\u6548\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/624acad3b0074a33b5b4f7ade00e75e1~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u63a7\u5236\u53f0\u8868.gif"})),(0,a.kt)("h3",{id:"5\u4fdd\u5b58\u63a7\u5236\u53f0\u65e5\u5fd7"},"5.\u4fdd\u5b58\u63a7\u5236\u53f0\u65e5\u5fd7"),(0,a.kt)("p",null,"\u53ea\u9700\u9009\u4e2d\u56fe\u793a\u590d\u9009\u6846\uff0c\u5373\u53ef\u5728\u5bfc\u822a\u5230\u5176\u4ed6\u9875\u9762\u65f6\u4fdd\u7559\u63a7\u5236\u53f0\u4e2d\u7684\u65e5\u5fd7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a688435122c41ab9b583e6331018493~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u4fdd\u5b58\u65e5\u5fd7.gif"})),(0,a.kt)("h3",{id:"6-consolegroup"},"6. console.group"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u4fdd\u6301\u65e5\u5fd7\u677e\u6563\u4f1a\u5bfc\u81f4\u8c03\u8bd5\u5ef6\u8fdf\u3002"),(0,a.kt)("p",null,"console.group \u53ef\u4ee5\u5c06\u6240\u6709\u65e5\u5fd7\u7ec4\u5408\u5728\u4e00\u8d77\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.group('Testing my calc function');\nconsole.log('adding 1 + 1 is', 1 + 1);\nconsole.log('adding 1 - 1 is', 1 - 1);\nconsole.log('adding 2 * 3 is', 2 * 3);\nconsole.log('adding 10 / 2 is', 10 / 2);\nconsole.groupEnd();\n`\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u662f\u4e00\u4e2a\u5206\u7ec4\u7684\u65e5\u5fd7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17499251ce2b4dadaa8b491c998b4a5a~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u5206\u7ec4\u65e5\u5fd7.png"})),(0,a.kt)("h3",{id:"7-consoletime"},"7. console.time"),(0,a.kt)("p",null,"console.time \u53ef\u4ee5\u6d4b\u91cf\u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u9700\u8981\u591a\u957f\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function test time() {\n  var users= [\n    {\n      firstname: "Tapas",\n      lastname: "Adhikary",\n      hobby: "Blogging"\n    },\n    {\n      firstname: "David",\n      lastname: "Williams",\n      hobby: "Chess"\n    },\n    {\n      firstname: "Brad",\n      lastname: "Crets",\n      hobby: "Swimming"\n    },\n    {\n      firstname: "James",\n      lastname: "Bond",\n      hobby: "Spying"\n    },\n    {\n      firstname: "Steve",\n      lastname: "S",\n      hobby: "Talking"\n    }\n  ];\n\n  var getName = function (user) {\n    return user.lastname;\n  }\n\n  // Start the time which will be bound to the string \'loopTime\' \n  console.time("loopTime");\n\n  for (let counter = 0; counter < 1000 * 1000 * 1000; counter++) {\n    getName(users[counter & 4]);\n  }\n\n  // End the time tick for \'loopTime\n  console.timeEnd("loopTime");\n}\n')),(0,a.kt)("p",null,"\u4ece\u63a7\u5236\u53f0\u9762\u677f\u6216\u8282\u70b9\u73af\u5883\u4e2d\u8fd0\u884c\u4e0a\u8ff0\u4ee3\u7801\u540e\uff0c\u60a8\u5c06\u83b7\u5f97\u5982\u4e0b\u8f93\u51fa\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"loopTime: 2234.032958984375ms\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u8ba1\u7b97\u5341\u4ebf\u7528\u6237\u7684\u59d3\u6c0f\u6240\u9700\u7684\u603b\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002"),(0,a.kt)("h3",{id:"8-_-\u83b7\u53d6\u4e0a\u4e00\u4e2a\u7684\u6267\u884c\u8f93\u51fa"},"8. $_ \u83b7\u53d6\u4e0a\u4e00\u4e2a\u7684\u6267\u884c\u8f93\u51fa"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$_")," \u53ef\u4ee5\u83b7\u53d6\u4e0a\u4e00\u4e2a\u7684\u6267\u884c\u8f93\u51fa\uff0c\u4f5c\u4e3a\u8f93\u5165\u63d0\u4f9b\u7ed9\u60a8\u7684\u4e0b\u4e00\u4e2a\u6267\u884c\u903b\u8f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/250fb34985384f23a45b21965194bb75~tplv-k3u1fbpfcp-zoom-1.image",alt:"last_ref.gif"})),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u662f\u6211\u6574\u7406\u7684\u4e00\u5c0f\u90e8\u5206 DevTools \u4f7f\u7528\u6280\u5de7\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/"},"Google \u7684 Web \u5f00\u53d1\u4eba\u5458\u5de5\u5177")," \u4e2d\u627e\u5230\u5b8c\u6574\u4f7f\u7528\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u5f80\u671f\u7cbe\u5f69"},"\u5f80\u671f\u7cbe\u5f69"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7126455415394713631/"},"\u4e00\u4e9b\u6709\u7528\u7684 JavaScript \u8c03\u8bd5\u6280\u5de7\uff08\u4e8c\uff09"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u672c\u6587\u7ffb\u8bd1\u81ea Tapas Adhikary \u7684\u539f\u521b\u6587\u7ae0\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u8005\uff1aTapas Adhikary"),(0,a.kt)("li",{parentName:"ul"},"\u8bd1\u8005\uff1a\u6e05\u6c64\u997a\u5b50"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u6587\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://blog.greenroots.info/devtools-my-favorite-tips-and-tricks"},"https://blog.greenroots.info/devtools-my-favorite-tips-and-tricks"))),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);