(this["webpackJsonpproedge-client"]=this["webpackJsonpproedge-client"]||[]).push([[0],{25:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),i=n(17),j=n.n(i),l=(n(25),n(7)),a=n(18),b=n.n(a),o=(n(43),n(48)),u=(n(44),function(e){var t=e.result;return console.log(t),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("center",{children:Object(r.jsx)("h1",{children:"Results"})}),Object(r.jsx)("center",{children:Object(r.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Roll Number"}),Object(r.jsx)("th",{children:"Result"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.data.rollnumber}),Object(r.jsx)("td",{children:e.data.result})]},e.data.rollnumber)}))})]})})]})}),d=n(49),h=(n(45),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"loaderDisplay",children:[Object(r.jsx)("h1",{children:"Loading..."}),Object(r.jsx)(d.a,{animation:"border",variant:"primary"})]})})});var O=function e(){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],j=Object(c.useState)(null),a=Object(l.a)(j,2),o=a[0],d=a[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),m=x[0],f=x[1],p=[];return"set"===m?Object(r.jsx)(h,{}):o?Object(r.jsx)(u,{result:o}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("center",{children:Object(r.jsx)("h1",{children:"Get Your Results !"})}),Object(r.jsx)("div",{className:"formdiv",children:Object(r.jsx)("center",{children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=s.trim().split(",");f("set"),n.forEach((function(t){if(isNaN(parseInt(t)))return alert(t+" is not valid Roll Number"),Object(r.jsx)(e,{});!function(e){p.push(b.a.post("http://localhost:9000/",{rollnumber:e}))}(parseInt(t))})),Promise.all(p).then((function(e){d(e),f("unset")}))},children:[Object(r.jsx)("input",{type:"text",name:"name",onChange:function(e){return i(e.target.value)},placeholder:"Enter roll numbers"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",value:"Submit",style:{display:"block"},className:"btn btn-info"})]})})})]})};var x=function(){return Object(r.jsx)(O,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};n(46);j.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),m()}},[[47,1,2]]]);
//# sourceMappingURL=main.20ba9c27.chunk.js.map