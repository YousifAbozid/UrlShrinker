(this["webpackJsonpurl-shrinker"]=this["webpackJsonpurl-shrinker"]||[]).push([[0],{22:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(2),s=r(15),l=r.n(s),i=(r(22),r(6)),a=r(4),u=r.n(a),j=r(16),h=r(5),o=r.n(h),b="/links",d=function(e){var t=e.input,r=e.setInput,c=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,(c={full:t},o.a.post(b,c)).then((function(){return r("")})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("h1",{children:"URL Shrinker"}),Object(n.jsxs)("form",{className:"my-4 row",onSubmit:c,children:[Object(n.jsx)("label",{htmlFor:"fullUrl",className:"sr-only",children:"Url"}),Object(n.jsx)("input",{required:!0,type:"url",name:"fullUrl",id:"fullUrl",value:t,onChange:function(e){return r(e.target.value)},placeholder:"Url",className:"form-control col mr-2"}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"Shrink"})]})]})},f=function(e){var t=e.links;return Object(n.jsx)("div",{children:Object(n.jsxs)("table",{className:"table table-striped table-responsive",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{style:{width:"50%"},children:"Full URL"}),Object(n.jsx)("th",{style:{width:"100%"},children:"Short URL"}),Object(n.jsx)("th",{style:{width:"100%"},children:"Clicks"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:e.full,rel:"noreferrer",target:"_blank",children:e.full})}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:e.short,rel:"noreferrer",target:"_blank",children:e.short})}),Object(n.jsx)("td",{children:e.clicks})]},e._id)}))})]})})},O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),r=t[0],s=t[1],l=Object(c.useState)([]),a=Object(i.a)(l,2),u=a[0],j=a[1];return Object(c.useEffect)((function(){o.a.get(b).then((function(e){j(e.data)}))}),[r]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(d,{input:r,setInput:s}),Object(n.jsx)(f,{links:u})]})};l.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a42366b6.chunk.js.map