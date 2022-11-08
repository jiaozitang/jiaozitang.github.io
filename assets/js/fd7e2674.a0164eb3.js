"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4280],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=l,f=d["".concat(u,".").concat(s)]||d[s]||c[s]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},u="\u6d45\u5b66\u4e00\u4e0b webpack5 module federation",p={permalink:"/blog/2022/06/13/module-federation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-13-module-federation.md",source:"@site/blog/2022-06-13-module-federation.md",title:"\u6d45\u5b66\u4e00\u4e0b webpack5 module federation",description:"\u80cc\u666f",date:"2022-06-13T00:00:00.000Z",formattedDate:"June 13, 2022",tags:[],readingTime:2.925,truncated:!1,authors:[],prevItem:{title:"\u6d45\u5b66\u4e00\u4e0b storybook",permalink:"/blog/2022/06/24/storybook"},nextItem:{title:"Typescript \u5e38\u7528\u7279\u6027\u5c0f\u7ed3",permalink:"/blog/2022/05/23/ts"}},m={authorsImageUrls:[]},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"module federation \u662f\u4ec0\u4e48",id:"module-federation-\u662f\u4ec0\u4e48",children:[],level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[],level:2},{value:"\u539f\u7406",id:"\u539f\u7406",children:[],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u5927\u4e2d\u53f0\u9879\u76ee\u4e2d\uff0c\u600e\u4e48\u9ad8\u6548\u9ad8\u6027\u80fd\u7684\u5c06\u591a\u4e2a\u5b50\u9879\u76ee\u4e92\u76f8\u5d4c\u5165\uff1f"),(0,a.kt)("p",null,"\u719f\u77e5\u7684\u5fae\u524d\u7aef\u89e3\u51b3\u65b9\u6848\u6709 micro-app\u3001qiankun\u3001webpack5 module federation \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u90a3 webpack5 module federation \u662f\u4ec0\u4e48\u3001\u5982\u4f55\u4f7f\u7528\u3001\u5b83\u7684\u539f\u7406\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4e00\u4e00\u63ed\u6653\u3002"),(0,a.kt)("h2",{id:"module-federation-\u662f\u4ec0\u4e48"},"module federation \u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"module federation \u8bd1\u4e3a\u6a21\u5757\u8054\u90a6\uff0c\u610f\u601d\u662f\u6a21\u5757\u53ef\u4ee5\u5728\u591a\u4e2a\u5e94\u7528\u4e4b\u95f4\u4e92\u76f8\u4f7f\u7528\uff0c\u5e94\u7528 a \u53ef\u4ee5\u5bfc\u51fa\u6a21\u5757\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5e94\u7528 b \u5bfc\u51fa\u7684\u8fdc\u7a0b\u6a21\u5757\u3002"),(0,a.kt)("p",null,"module federation \u5c31\u662f\u5fae\u524d\u7aef\u7684\u4e00\u79cd\uff0c\u800c\u8fd9\u79cd\u5fae\u524d\u7aef\u548c micro-app\u3001qiankun \u7b49\u5fae\u524d\u7aef\u6846\u67b6\u786e\u6709\u672c\u8d28\u7684\u533a\u522b\u3002"),(0,a.kt)("p",null,"\u9897\u7c92\u5ea6\u7684\u5b9a\u4e49\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"module federation\uff1a\u591a\u4e2a\u4e92\u76f8\u72ec\u7acb\u7684\u6a21\u5757\u805a\u5408\uff1b"),(0,a.kt)("li",{parentName:"ul"},"qiankun\uff1a\u591a\u4e2a\u4e92\u76f8\u72ec\u7acb\u7684\u5e94\u7528\u805a\u5408\u3002")),(0,a.kt)("p",null,"\u6280\u672f\u5b9e\u73b0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"module federation\uff1a\u6253\u5305\u7684 chunk \u7684\u805a\u5408\uff1b"),(0,a.kt)("li",{parentName:"ul"},"qiankun\uff1a\u6253\u5305\u7684 main.js \u7684\u805a\u5408\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728 webpack5 \u9879\u76ee\u4e2d\u65b0\u589e module federation plugin \u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name\uff1a\u5e94\u7528\u540d\u79f0\uff0c\u5f53\u4f5c\u4e3a remote \u5f15\u7528\u65f6\uff0c\u8def\u5f84\u4e3a name/expose\uff1b"),(0,a.kt)("li",{parentName:"ul"},"library\uff1a\u58f0\u660e\u5168\u5c40\u53d8\u91cf\u7684\u65b9\u5f0f\uff0cname \u4e3a umd \u7684 name\uff1b"),(0,a.kt)("li",{parentName:"ul"},"filename\uff1a\u6784\u5efa\u8f93\u51fa\u7684\u6587\u4ef6\u540d\uff1b"),(0,a.kt)("li",{parentName:"ul"},"remotes\uff1a\u8fdc\u7a0b\u5f15\u7528\u7684\u5e94\u7528\u540d\u53ca\u5176\u522b\u540d\u7684\u6620\u5c04\uff0c\u4f7f\u7528\u65f6\u4ee5 key \u503c\u4f5c\u4e3a name\uff1b"),(0,a.kt)("li",{parentName:"ul"},"exposes\uff1a\u88ab\u8fdc\u7a0b\u5f15\u7528\u65f6\u53ef\u66b4\u9732\u7684\u8d44\u6e90\u8def\u5f84\u53ca\u5176\u522b\u540d\uff1b"),(0,a.kt)("li",{parentName:"ul"},"shared\uff1a\u4e0e\u5176\u4ed6\u5e94\u7528\u4e4b\u95f4\u53ef\u4ee5\u5171\u4eab\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"requiredVersion: \u4f9d\u8d56\u7684\u7248\u672c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"singleton: \u4ec5\u5141\u8bb8\u5171\u4eab\u8303\u56f4\u5185\u7684\u5355\u4e2a\u7248\u672c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"eager: \u5141\u8bb8\u5728\u521d\u59cb\u5757\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5171\u4eab\u6a21\u5757\u3002")))),(0,a.kt)("p",null,"\u9879\u76ee 1 \u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ModuleFederationPlugin({\n      name: 'host',\n      remotes: {\n        remote1: 'remote1@[remote1Url]/remoteEntry.js',\n        libs: 'libs@[libsUrl]/remoteEntry.js',\n      },\n    })\n")),(0,a.kt)("p",null,"\u9879\u76ee 2 \u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ModuleFederationPlugin({\n  name: 'remote1',\n  filename: 'remoteEntry.js',\n  exposes: {\n    './Button': './src/Button',\n  },\n  remotes: {\n    libs: 'libs@[libsUrl]/remoteEntry.js',\n  },\n})\n")),(0,a.kt)("p",null,"\u901a\u8fc7 module federation \u5b9e\u73b0\u4e86\u9879\u76ee 1 \u7684 Button \u7ec4\u4ef6\u5728\u9879\u76ee 2 \u7684\u805a\u5408\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b demo \u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jiaozitang/mf-demo"},"https://github.com/jiaozitang/mf-demo"),"\u3002"),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"module federation \u8fdc\u7a0b\u6a21\u5757 remotes \u548c\u5171\u4eab\u6a21\u5757 shared \u90fd\u662f\u5f02\u6b65 chunk\uff0c\u901a\u8fc7 import \u52a8\u6001\u5f15\u5165\uff0c\u5b9e\u73b0\u6309\u9700\u52a0\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"module federation \u7684\u5e94\u7528\u573a\u666f\u6709\u9650\uff0c\u56e0\u4e3a\u5b83\u4ec5\u4ec5\u662f\u6a21\u5757\u7684\u805a\u5408\uff0c\u4e0d\u5177\u5907\u5e94\u7528\u4e4b\u95f4\u7684\u9694\u79bb\u6027\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u9002\u7528\u4e8e\u591a\u4e2a\u5e94\u7528\u4f9d\u8d56\u4e0d\u540c\u7ec4\u4ef6\u5e93\u7684\u7ec4\u4ef6\u7684\u573a\u666f\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7ec4\u4ef6\u5e93\u5c06\u7ec4\u4ef6\u901a\u8fc7 module federation \u66b4\u9732\uff0c\u5e94\u7528\u901a\u8fc7 module federation \u5f15\u5165\u8fdc\u7a0b\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/352936804"},"Module Federation \u6ca1\u6709\u9b54\u6cd5\u4ec5\u4ec5\u662f\u5f02\u6b65chunk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/breakdown/p/15336672.html"},"ModuleFederation-\u6a21\u5757\u8054\u90a6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.docschina.org/concepts/module-federation/"},"https://webpack.docschina.org/concepts/module-federation/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.docschina.org/plugins/module-federation-plugin"},"https://webpack.docschina.org/plugins/module-federation-plugin"))))}s.isMDXComponent=!0}}]);