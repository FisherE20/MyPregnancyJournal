(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},50:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(25),r=t.n(c),m=t(26),s=t(3),i=t(2),o=t(9),u=t.n(o);var E=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),m=Object(i.a)(r,2),s=m[0],o=m[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"mt-4"},l.a.createElement("h2",null,"Sign In")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("username is "+t),console.log("password is "+s)}},l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Username",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Username",name:"username",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Password",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Password",name:"password",onChange:function(e){return o(e.target.value)}}))),l.a.createElement("a",{href:"/home",className:"button",onClick:function(e){e.preventDefault(),u.a.post("/api/signin",{username:t,password:s}).then(function(e){return console.log(e)})}},"Submit"),l.a.createElement("p",null,"Not Registered? ",l.a.createElement("a",{href:"/SignUp"},"Create an Account"))))))};var d=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),m=Object(i.a)(r,2),s=m[0],o=m[1],E=Object(n.useState)(),d=Object(i.a)(E,2),p=d[0],g=d[1],f=Object(n.useState)(),v=Object(i.a)(f,2),h=v[0],b=v[1],N=Object(n.useState)(),w=Object(i.a)(N,2),j=w[0],y=w[1],O=function(e){e.preventDefault(),u.a.post("/api/signup",{username:t,email:s,password:p,duedate:h,nickname:j}).then(function(e){return console.log(e)})};return l.a.createElement("div",null,l.a.createElement("div",{className:"mt-4"},l.a.createElement("h2",null,"Sign Up")),l.a.createElement("form",{onSubmit:O},l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Username",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Username",name:"username",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Email",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Email",name:"email",onChange:function(e){return o(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Password",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Password",name:"password",onChange:function(e){return g(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Baby's Nickname",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Optional",name:"nickname",onChange:function(e){return y(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Due Date",l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Optional",name:"duedate",onChange:function(e){return b(e.target.value)}})))),l.a.createElement("a",{href:"/signin",className:"button",onClick:O},"Submit"))))};t(50);var p=function(){return l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"/home"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/gallery"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Gallery"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/journal"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Journal"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/registry"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Registry"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/contact"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Contact"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"fi-list"})," ",l.a.createElement("span",null,"Logout"))))};var g=function(){return l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"cell small-12 align-self-top"},l.a.createElement("h2",null,"My Pregnancy Journey")))};var f=function(){var e=Object(n.useState)("00"),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)("00"),m=Object(i.a)(r,2),s=m[0],o=m[1],u=Object(n.useState)("00"),E=Object(i.a)(u,2),d=E[0],f=E[1],v=Object(n.useState)("00"),h=Object(i.a)(v,2),b=h[0],N=h[1],w=Object(n.useRef)();return Object(n.useEffect)(function(){return function(){var e=new Date("May 13, 2021 00:00:00").getTime();w=setInterval(function(){var a=(new Date).getTime(),t=e-a,n=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),r=Math.floor(t/36e5/6e4),m=Math.floor(t/6e4/1e3);t<0?clearInterval(w.current):(c(n),o(l),f(r),N(m))},1e3)}(),function(){clearInterval(w.current)}}),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement("section",{className:"timer-container"},l.a.createElement("section",{className:"timer"},l.a.createElement("div",null,l.a.createElement("span",{className:"mdi mdi-calendar-clock"}),l.a.createElement("h2",null,"Our little Mino is due to arrive in:")),l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement("p",null,t),l.a.createElement("p",null,l.a.createElement("small",null,"Days"))),l.a.createElement("span",null,":"),l.a.createElement("section",null,l.a.createElement("p",null,s),l.a.createElement("p",null,l.a.createElement("small",null,"Hours"))),l.a.createElement("span",null,":"),l.a.createElement("section",null,l.a.createElement("p",null,d),l.a.createElement("p",null,l.a.createElement("small",null,"Minutes"))),l.a.createElement("span",null,":"),l.a.createElement("section",null,l.a.createElement("p",null,b),l.a.createElement("p",null,l.a.createElement("small",null,"Seconds")))))))};var v=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),m=Object(i.a)(r,2),s=m[0],o=m[1],E=Object(n.useState)(),d=Object(i.a)(E,2),f=d[0],v=d[1];return Object(n.useEffect)(function(){var e=(new Date).getDate(),a=(new Date).getMonth()+1,t=(new Date).getYear();o(a+"/"+e+"/"+t)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement("div",null,l.a.createElement("h2",null,"Journal Entry"),l.a.createElement("form",null,l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"grid-x grid-padding-x"},l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Title",l.a.createElement("input",{type:"text",placeholder:"",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Date",l.a.createElement("div",null,s))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Post",l.a.createElement("textarea",{placeholder:"",onChange:function(e){return v(e.target.value)}})))),l.a.createElement("a",{className:"button primary",href:"/journal",onClick:function(e){e.preventDefault(),u.a.post("/api/posts",{title:t,body:f}).then(function(e){console.log(e),u.a.get("/api/posts").then(function(e){return console.log(e)})})}},"Save")))))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement("div",{className:"columns"},l.a.createElement("h2",null,"Photo Gallery")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/View1.jpg",alt:"First Ultra Sound."})),l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/View3.jpg",alt:"First Ultra Sound."})),l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/HeartBeat.jpg",alt:"First Ultra Sound."}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/PumpkinPatch.jpg",alt:"Pumpkin Patch 2020."})),l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/mask.jpg",alt:"Pumpkin Patch 2020."})),l.a.createElement("div",{className:"small-4 columns"},l.a.createElement("img",{className:"thumbnail",src:"./Images/PumpkinPatch.jpg",alt:"Pumpkin Patch 2020."}))))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"grid-x grid-margin-x small-up-2 medium-up-3"},l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"./Images/Amazon.jpg",alt:"baby"}),l.a.createElement("div",{className:"card-section"},l.a.createElement("p",null,"You'll find our registry by clicking on the button below."),l.a.createElement("a",{className:"button primary",href:"HTTPS://www.amazon.com"},"View")))),l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"./Images/BuyBuyBaby.jpg",alt:"baby"}),l.a.createElement("div",{className:"card-section"},l.a.createElement("p",null,"You'll find our registry by clicking on the button below."),l.a.createElement("a",{className:"button primary",href:"HTTPS://www.buybuybaby.com"},"View")))),l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"./Images/Target.jpg",alt:"baby"}),l.a.createElement("div",{className:"card-section"},l.a.createElement("p",null,"You'll find our registry by clicking on the button below."),l.a.createElement("a",{className:"button primary",href:"HTTPS://www.target.com"},"View")))))))};var N=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),m=Object(i.a)(r,2),s=m[0],o=m[1],E=Object(n.useState)(),d=Object(i.a)(E,2),f=d[0],v=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement("div",null,l.a.createElement("h2",null,"Contact")),l.a.createElement("form",null,l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"grid-x grid-padding-x"},l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"text",placeholder:"",onChange:function(e){return c(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Subject",l.a.createElement("input",{type:"text",placeholder:"",onChange:function(e){return o(e.target.value)}}))),l.a.createElement("div",{className:"medium-6 cell"},l.a.createElement("label",null,"Message:",l.a.createElement("textarea",{placeholder:"None",onChange:function(e){return v(e.target.value)}})))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"primary button",onClick:function(e){e.preventDefault(),u.a.post("/api/contact",{email:t,subject:s,message:f}).then(function(e){return console.log(e)})}},"Send")))))};var w=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{exact:!0,path:"/signin",component:E}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:d}),l.a.createElement(s.a,{exact:!0,path:"/home",component:f}),l.a.createElement(s.a,{exact:!0,path:"/gallery",component:h}),l.a.createElement(s.a,{exact:!0,path:"/journal",component:v}),l.a.createElement(s.a,{exact:!0,path:"/registry",component:b}),l.a.createElement(s.a,{exact:!0,path:"/contact",component:N}))))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.ea5776bd.chunk.js.map