if(!self.define){let o,l={};const n=(n,f)=>(n=new URL(n+".js",f).href,l[n]||new Promise((l=>{if("document"in self){const o=document.createElement("script");o.src=n,o.onload=l,document.head.appendChild(o)}else o=n,importScripts(n),l()})).then((()=>{let o=l[n];if(!o)throw new Error(`Module ${n} didn’t register its module`);return o})));self.define=(f,i)=>{const e=o||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let r={};const s=o=>n(o,e),u={module:{uri:e},exports:r,require:s};l[e]=Promise.all(f.map((o=>u[o]||s(o)))).then((o=>(i(...o),r)))}}define(["./workbox-db5fc017"],(function(o){"use strict";o.setCacheNameDetails({prefix:"facturerojba"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/.htaccess",revision:"4fa01a0ae725963f4f46401dc162ea69"},{url:"/css/app.b730f636.css",revision:null},{url:"/css/chunk-vendors.3b28b527.css",revision:null},{url:"/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/fonts/fa-brands-400.82e70052.eot",revision:null},{url:"/fonts/fa-brands-400.978e1bac.woff2",revision:null},{url:"/fonts/fa-brands-400.ab3d7e06.ttf",revision:null},{url:"/fonts/fa-brands-400.db6a2b33.woff",revision:null},{url:"/fonts/fa-regular-400.4cec6fbf.eot",revision:null},{url:"/fonts/fa-regular-400.7361a6d4.woff",revision:null},{url:"/fonts/fa-regular-400.79d5399a.ttf",revision:null},{url:"/fonts/fa-regular-400.dc79ceeb.woff2",revision:null},{url:"/fonts/fa-solid-900.08b6866d.eot",revision:null},{url:"/fonts/fa-solid-900.2ec7abb9.ttf",revision:null},{url:"/fonts/fa-solid-900.6a636d7e.woff",revision:null},{url:"/fonts/fa-solid-900.6bcd6c9c.woff2",revision:null},{url:"/img/fa-brands-400.9ed39b3d.svg",revision:null},{url:"/img/fa-regular-400.8be8f21f.svg",revision:null},{url:"/img/fa-solid-900.9d21645b.svg",revision:null},{url:"/index.html",revision:"fe97e9413f585d089cdd4b5813ca8120"},{url:"/js/app.314b4d28.js",revision:null},{url:"/js/chunk-vendors.58903d59.js",revision:null},{url:"/manifest.json",revision:"ed7b4302d16bb007fb29351545e2efb7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
