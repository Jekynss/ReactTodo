(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),i=n.n(o),r=(n(13),n(5)),l=n(1);n(14),n(15);function s(e){var t=e.addTodo,n=c.a.useState({content:"",id:""}),a=Object(l.a)(n,2),o=a[0],i=a[1];return c.a.createElement("form",{id:"addTodoForm",className:"main__container__input-add",onSubmit:function(e){e.preventDefault(),t(o),i({content:""})}},c.a.createElement("input",{type:"text",name:"add_string_input",className:"main__container__input-add__input",placeholder:"What needs to be done?",onChange:function(e){i({content:"".concat(e.target.value)})},value:o.content}),c.a.createElement("button",{className:"main__container__input-add__button"},"Add"))}var d=n(4),m=n.n(d);function u(e){var t=e.content,n=e.id,a=e.deleteTodoItem,o=e.setComplitedBoxes,i=e.completed.includes(n);return c.a.createElement("li",{className:m()("main__container__item__todo-list__li",{completed:i})},c.a.createElement("input",{type:"checkbox",id:n,className:"todo-list__li__checkbox",name:"todo-list",value:t,onChange:function(){return o(n)},checked:i}),c.a.createElement("label",{htmlFor:n,className:"main__container__item__todo-list__li__label"}),t,c.a.createElement("button",{onClick:function(){return a(n)},className:"todo-list__li__destroy"}))}n(16);function _(e){var t=e.todos,n=e.deleteTodoItem,a=e.setComplitedBoxes,o=e.completed,i=e.search_string,r=e.activeFilter;return c.a.createElement("div",{id:"options"},c.a.createElement("ul",{className:"main__container__item__todo-list"},t.map((function(e){return e.content.toLowerCase().includes(i.toLowerCase())&&(t=e.id,"All"===r||"Active"===r&&!o.includes(t)||"Completed"===r&&o.includes(t))?c.a.createElement(u,{key:e.id,content:e.content,id:e.id,deleteTodoItem:n,setComplitedBoxes:a,completed:o}):null;var t}))))}n(17);function f(e){var t=e.setSearchString,n=function(e){t(e.target.value)};return c.a.createElement("form",{className:"search-form",id:"search-form",onSubmit:n},c.a.createElement("div",{className:"input-search__icon"},">"),c.a.createElement("input",{type:"text",name:"search_string",className:"search_string",placeholder:"Search...",onChange:n}))}n(18);function p(e){var t=e.filters,n=e.setActiveFilter,a=e.activeFilter;return c.a.createElement("div",{className:"filters-block"},t.map((function(e,t){return c.a.createElement("button",{className:m()("filters-block__filter",{activated:a===e}),key:"".concat(e,"_").concat(t),value:e,onClick:function(){return n(e)}},e)})))}function v(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],o=c.a.useState([]),i=Object(l.a)(o,2),d=i[0],m=i[1],u=c.a.useState("All"),v=Object(l.a)(u,2),h=v[0],E=v[1],b=c.a.useState([{content:"Hello",id:"checkbox-1"},{content:"Word",id:"checkbox-2"},{content:"World",id:"checkbox-3"}]),N=Object(l.a)(b,2),g=N[0],k=N[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main"},c.a.createElement("h1",{className:"header"},"todos"),c.a.createElement("div",{className:"container"},c.a.createElement(f,{setSearchString:a}),c.a.createElement(_,{todos:g,deleteTodoItem:function(e){k(g.filter((function(t){return t.id!==e}))),m(d.filter((function(t){return t!==e})))},setComplitedBoxes:function(e){var t=d.filter((function(t){return t!==e}));d.includes(e)?m(t):m([].concat(Object(r.a)(d),[e]))},completed:d,activeFilter:h,search_string:n}),c.a.createElement(s,{addTodo:function(e){e.id=Math.random().toString(),k([].concat(Object(r.a)(g),[e]))}}),c.a.createElement(p,{filters:["All","Active","Completed"],activeFilter:h,setActiveFilter:E}))))}i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.c97bf054.chunk.js.map