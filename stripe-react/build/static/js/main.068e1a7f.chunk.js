(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(18),a(3)),l=function(e){return r.a.createElement("li",{onClick:function(t){return e.toggleClass(t)},className:"nav__item","data-active":e.isActive==e.data?"true":"false","data-dropdown":e.data},e.title)},s=function(e){return r.a.createElement(i.b,{to:e.content.url},r.a.createElement("h3",null,e.content.heading),r.a.createElement("p",null,e.content.text))},u=function(e){return r.a.createElement("div",{ref:function(t){t&&e.resize(e.data,t.getBoundingClientRect(),e.isActive)},className:"dropdown__container__group","data-active":e.isActive==e.data?"true":"false","data-dropdown":e.data},Object.values(e.content).map(function(t,a){return r.a.createElement(s,{content:t,key:"".concat(e.data,"-").concat(a)})}))},d={products:{title:"Products"},developers:{title:"Developers"},company:{title:"Company"}},m={products:[{heading:"Payments",url:"payments",text:"A complete payments platform engineered for growth."},{heading:"Billing",url:"billing",text:"Build and scale your recurring business model."},{heading:"Connect",url:"connect",text:"Everything platforms need to get sellers paid."}],developers:[{heading:"Documentation",url:"documentation",text:"Start integrating Stripe\u2019s products."},{heading:"Full API reference",url:"api",text:""},{heading:"API Status",url:"api-status",text:""},{heading:"Open source",url:"open-source",text:""}],company:[{heading:"About Stripe",url:"about",text:"Start integrating Stripe\u2019s products and tools."},{heading:"Customers",url:"customers",text:""},{heading:"Partner program",url:"partner-program",text:""},{heading:"Jobs",url:"jobs",text:""}]},p=a(1),g=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(p.a)(o,2),i=c[0],l=c[1];return{toggleClass:function(e){e.persist(),l(e.target.getBoundingClientRect());var t=e.target.dataset.dropdown;a.includes(t)?r(""):r(t)},active:a,elemData:i}},h=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),c=Object(p.a)(o,2),i=c[0],l=c[1],s=Object(n.useState)(0),u=Object(p.a)(s,2),d=(u[0],u[1]);return{resize:function(e,t,a){a===e&&i!==t.width&&(l(t.width),d(t.height),r({width:"".concat(t.width,"px"),height:"".concat(t.height,"px")}))},style:a}},v=function(e){var t=g(),a=t.active,o=t.elemData,c=t.toggleClass,i=h(),s=i.style,p=i.resize,v=Math.round(Math.max(o.left+o.width/2,10)),f={transform:"translateX(".concat(v,"px)")};return r.a.createElement(n.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav__items"},Object.values(d).map(function(e){return r.a.createElement(l,{isActive:a,toggleClass:c,title:e.title,data:e.title.toLowerCase(),key:e.title})}))),r.a.createElement("div",{className:"dropdown",style:f,"data-active":""!==a?"true":"false"},r.a.createElement("div",{className:"dropdown__background",style:s}),r.a.createElement("div",{className:"dropdown__container"},Object.entries(m).map(function(e){return r.a.createElement(u,{resize:p,isActive:a,content:e[1],data:e[0].toLowerCase(),key:e[0].toLowerCase()})}))))},f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.068e1a7f.chunk.js.map