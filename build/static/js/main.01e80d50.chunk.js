(this["webpackJsonpreact-practices"]=this["webpackJsonpreact-practices"]||[]).push([[0],{184:function(e,t,a){e.exports=a(370)},189:function(e,t,a){},190:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(62),c=a.n(r),o=(a(189),a(8)),m=a(9),s=(a(190),function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"logo"},l.a.createElement(o.a,null,l.a.createElement(o.b,{to:"/"},"React Practices"))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/basic",activeClassName:"active"},"Basic"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/basic/first-code",activeClassName:"active"},"First Code")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/basic/functional-component",activeClassName:"active"},"Functional Component")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/basic/class-component",activeClassName:"active"},"Class Component")))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/props",activeClassName:"active"},"Props"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/props/functional-person",activeClassName:"active"},"Functional Person")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/props/class-person",activeClassName:"active"},"Class Person")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/props/products",activeClassName:"active"},"Products")))),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/state",activeClassName:"active"},"State"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/state/counter",activeClassName:"active"},"Counter")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/state/user",activeClassName:"active"},"User")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/state/my-state",activeClassName:"active"},"My State")))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/recharts",activeClassName:"active"},"Recharts")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/state-share",activeClassName:"active"},"State Share")),l.a.createElement("li",{className:"menu-item-has-children"},l.a.createElement(o.b,{to:"/reducer",activeClassName:"active"},"Reducer"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reducer/reducer-count",activeClassName:"active"},"Reducer Count")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/reducer/patient-management",activeClassName:"active"},"Patient Management")))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contact",activeClassName:"active"},"Contact"))))))}),u="Wasek Bellah",i=21,E={color:"blue",backgroundColor:"yellow",padding:"10px"};var p=function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",null,"React JSX(JavaScript XML)"),l.a.createElement("h2",null,"My Name is ",u,". And I am ",i," years old."),l.a.createElement("h2",{style:E},"Create by Wasek Bellah"),l.a.createElement("p",{style:{color:"blue",backgroundColor:"yellow",padding:"10px",fontWeight:"bold"}},"Sum of 5 and 6: ",11))},d=function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",null,"My First Function Component"),l.a.createElement("button",{onClick:function(e){return alert(e)}.bind(void 0,"Button Clicked form Function Component"),className:"button"},"Function Button"))},b=a(33),h=a(34),v=a(40),f=a(39),C=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"classClick",value:function(e){alert(e)}},{key:"render",value:function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",null,"My First Class Component"),l.a.createElement("button",{onClick:this.classClick.bind(this,"Button Clicked form Class Component"),className:"button"},"Class Button"))}}]),a}(n.Component);var y=function(e){var t={backgroundColor:e.color,padding:"0 10px"};return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("div",{style:{padding:"10px 30px",margin:"10px 0",border:"1px solid orangered"}},l.a.createElement("h3",null,"Function Props"),l.a.createElement("h2",null,"Name: ",e.name),l.a.createElement("h3",null,"Age: ",e.age," years old."),l.a.createElement("h4",null,"Favorite color: ",l.a.createElement("span",{style:t},e.color))))},g=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e={backgroundColor:this.props.color,padding:"0 10px"};return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("div",{style:{padding:"10px 30px",margin:"10px 0",border:"1px solid orangered"}},l.a.createElement("h3",null,"Class Props"),l.a.createElement("h2",null,"Name: ",this.props.name),l.a.createElement("h3",null,"Age: ",this.props.age," years old."),l.a.createElement("h4",null,"Favorite color: ",l.a.createElement("span",{style:e},this.props.color))))}}]),a}(n.Component),N={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:"30px"},x={backgroundColor:"#666",padding:"20px",border:"1px solid gray",borderRadius:"5px"},k=[{name:"PhotoShop",price:"$99.99"},{name:"Illustrator",price:"$79.99"},{name:"Acrobat Reader",price:"Free"},{name:"Adobe XD",price:"Free"}];function O(e){var t=e.product,a=t.name,n=t.price;return l.a.createElement("div",{style:x},l.a.createElement("h2",null,a),l.a.createElement("h1",null,n),l.a.createElement("button",{className:"button buttonRadius"},"ENROLL NOW"))}var j=function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h2",null,"All Product Lists"),l.a.createElement("ul",{style:{listStyleType:"none"}},k.map((function(e){return l.a.createElement("li",{key:e.name},e.name)}))),l.a.createElement("div",{style:N},k.map((function(e){return l.a.createElement(O,{product:e,key:e.name})}))))},R=a(12);var P=function(e){var t=Object(n.useState)(0),a=Object(R.a)(t,2),r=a[0],c=a[1],o=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(r);return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h2",null,"Count: ",r,". Previous: ",o),l.a.createElement("button",{onClick:function(){return c(r+1)},className:"button buttonRadius"},"+ Increase Count"),l.a.createElement("button",{onClick:function(){return c(r-1)},className:"button buttonRadius"},"- Decrease Count"))},S={borderCollapse:"collapse",width:"100%",marginBottom:"30px"},w={border:"1px solid #dddddd",textAlign:"left",padding:"10px"},A={border:"1px solid #dddddd",textAlign:"center",padding:"10px"};var M=function(){var e=Object(n.useState)([]),t=Object(R.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h2",null,"Dynamic Users from server"),l.a.createElement("table",{style:S},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:A},"Name"),l.a.createElement("th",{style:A},"E-mail"),l.a.createElement("th",{style:A},"Website"),l.a.createElement("th",{style:A},"Company"),l.a.createElement("th",{style:A},"City"),l.a.createElement("th",{style:A},"Zip Code"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",{style:w},e.name),l.a.createElement("td",{style:w},e.email),l.a.createElement("td",{style:w},e.website),l.a.createElement("td",{style:w},e.company.name),l.a.createElement("td",{style:w},e.address.city),l.a.createElement("td",{style:w},e.address.zipcode))}))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("th",{style:w,colspan:"4"},"Total Users: "),l.a.createElement("th",{style:w,colspan:"2"},a.length)))))},D=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(b.a)(this,a),(e=t.call(this)).state={name:"Wasek Bellah",age:21},e}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h2",null,"My name: ",this.state.name),l.a.createElement("h2",null,"I am ",this.state.age," years old."))}}]),a}(n.Component),F=a(20),T=function(){return l.a.createElement("div",null,l.a.createElement(F.d,{width:600,height:300,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(F.f,{dataKey:"name"}),l.a.createElement(F.g,null),l.a.createElement(F.a,{strokeDasharray:"3 3"}),l.a.createElement(F.e,null),l.a.createElement(F.b,null),l.a.createElement(F.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),l.a.createElement(F.c,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})))},B=function(){return l.a.createElement("section",{className:"flexCenter"},l.a.createElement(T,null))},I=function(){var e=Object(n.useContext)(_),t=Object(R.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"From Header: ",a),l.a.createElement("button",{onClick:function(){return r("Laptop")},className:"button buttonRadius"},"Laptop"),l.a.createElement("button",{onClick:function(){return r("Mobile")},className:"button buttonRadius"},"Mobile"),l.a.createElement("button",{onClick:function(){return r("Camera")},className:"button buttonRadius"},"Camera"))},W=function(e){var t=e.product,a=t.name,n=t.category;return l.a.createElement("div",null,l.a.createElement("h3",null,n," category product: ",a))},L=[{name:"Dell",category:"laptop"},{name:"Apple",category:"laptop"},{name:"HP",category:"laptop"},{name:"Apple",category:"mobile"},{name:"Huawei",category:"mobile"},{name:"Samsung",category:"mobile"},{name:"Nikon",category:"camera"},{name:"Sony",category:"camera"},{name:"Canon",category:"camera"}],J=function(){var e=Object(n.useContext)(_),t=Object(R.a)(e,1)[0],a=Object(n.useState)(),r=Object(R.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var e=L.filter((function(e){return e.category===t.toLowerCase()}));o(e)}),[t]),l.a.createElement("div",null,l.a.createElement("h1",null,"Category: ",t),c&&c.map((function(e){return l.a.createElement(W,{key:e.name,product:e})})))},_=Object(n.createContext)(),H=function(){var e=Object(n.useState)("Laptop"),t=Object(R.a)(e,2),a=t[0],r=t[1];return l.a.createElement("section",{className:"flexCenter"},l.a.createElement(_.Provider,{value:[a,r]},l.a.createElement("h1",null,"State Category: ",a),l.a.createElement(I,null),l.a.createElement(J,null)))},K={count:0},U=function(e,t){switch(t.type){case"INCREMENT":return{count:e.count+1};case"DECREMENT":return{count:e.count-1};default:return e}},X=function(){var e=Object(n.useReducer)(U,K),t=Object(R.a)(e,2),a=t[0],r=t[1];return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",null,"Reducer Count: ",a.count),l.a.createElement("button",{onClick:function(){return r({type:"INCREMENT"})},className:"button buttonRadius"},"Increment"),l.a.createElement("button",{onClick:function(){return r({type:"DECREMENT"})},className:"button buttonRadius"},"Decrement"))},$=a(154),z={patients:[]},G=function(e,t){switch(t.type){case"ADD_PATIENT":var a={id:t.id,name:t.name};return{patients:[].concat(Object($.a)(e.patients),[a])};case"REMOVE_PATIENT":return{patients:e.patients.filter((function(e){return e.id!==t.id}))};default:return e}},V=function(){var e=Object(n.useRef)(),t=Object(n.useReducer)(G,z),a=Object(R.a)(t,2),r=a[0],c=a[1];return l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",null,"Patient Management: ",r.patients.length),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c({type:"ADD_PATIENT",id:r.patients.length+1,name:e.current.value}),e.current.value=""}},l.a.createElement("input",{type:"text",ref:e})),r.patients.map((function(e){return l.a.createElement("li",{key:e.id},e.name,l.a.createElement("span",{onClick:function(){return c({type:"REMOVE_PATIENT",id:e.id})},style:{cursor:"pointer"}},"\xd7"))})))};var Z=function(){return l.a.createElement(o.a,null,l.a.createElement(s,null),l.a.createElement("main",{id:"mainPage"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/basic/first-code"},l.a.createElement(p,null)),l.a.createElement(m.a,{path:"/basic/functional-component"},l.a.createElement(d,null)),l.a.createElement(m.a,{path:"/basic/class-component"},l.a.createElement(C,null)),l.a.createElement(m.a,{path:"/props/functional-person"},l.a.createElement(y,{name:"Wasek Bellah",age:"21",color:"blue"})),l.a.createElement(m.a,{path:"/props/class-person"},l.a.createElement(g,{name:"Wasek Bellah",age:"21",color:"blue"})),l.a.createElement(m.a,{path:"/props/products"},l.a.createElement(j,null)),l.a.createElement(m.a,{path:"/state/counter"},l.a.createElement(P,null)),l.a.createElement(m.a,{path:"/state/user"},l.a.createElement(M,null)),l.a.createElement(m.a,{path:"/state/my-state"},l.a.createElement(D,null)),l.a.createElement(m.a,{path:"/recharts"},l.a.createElement(B,null)),l.a.createElement(m.a,{path:"/state-share"},l.a.createElement(H,null)),l.a.createElement(m.a,{path:"/reducer/reducer-count"},l.a.createElement(X,null)),l.a.createElement(m.a,{path:"/reducer/patient-management"},l.a.createElement(V,null)),l.a.createElement(m.a,{path:"contact"}),l.a.createElement(m.a,{path:"/"},l.a.createElement("section",{className:"flexCenter"},l.a.createElement("h1",{style:{fontSize:"65px"}},"Welcome",l.a.createElement("br",null),"to React Practices"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.01e80d50.chunk.js.map