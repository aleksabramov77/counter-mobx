(this["webpackJsonpcounter-mobx"]=this["webpackJsonpcounter-mobx"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),i=n(4),d=n.n(i),u=(n(15),n(16),n(7)),s=n(5),r=n(6),l=n(3),h=n(1),j=new(function(){function t(){Object(s.a)(this,t),Object(l.a)(this,"count",0),Object(l.a)(this,"timer",60),Object(h.l)(this)}return Object(r.a)(t,[{key:"decrement",value:function(){this.count--,console.log("decrement ",this.count)}},{key:"increment",value:function(){this.count++,console.log("increment ",this.count)}},{key:"total",get:function(){return"Count + Timer = "+this.count+this.timer}}]),t}()),a=n(2),b=Object(u.a)((function(){return Object(a.jsxs)("div",{className:"Counter",children:[j.total,Object(a.jsx)("h1",{children:j.count}),Object(a.jsx)("button",{onClick:function(){j.decrement()},children:"-1"}),Object(a.jsx)("button",{onClick:function(){return j.increment()},children:"+1"})]})})),f=n(10),O=n(9),m=new(function(){function t(){Object(s.a)(this,t),Object(l.a)(this,"todos",[{id:1,title:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d",completed:!1},{id:2,title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0438\u043d\u043e",completed:!0},{id:3,title:"\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0443\u043b\u0438\u0446\u0443",completed:!1}]),Object(h.l)(this)}return Object(r.a)(t,[{key:"nextId",get:function(){return this.todos.reduce((function(t,e){return+t.id>+e.id?t:e})).id+1}},{key:"addTodo",value:function(t){console.log("addTodo ",t,this.nextId),this.todos.push(Object(O.a)(Object(O.a)({},t),{},{id:this.nextId}))}},{key:"removeTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}},{key:"completeTodo",value:function(t){t.completed=!t.completed}},{key:"fetchTodo",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos/"+this.nextId).then((function(t){return t.json()})).then((function(e){Object(h.o)((function(){t.todos.push({id:e.id,title:e.title,completed:e.completed})}))}))}}]),t}()),p=Object(u.a)((function(){var t=Object(o.useState)("New todo"),e=Object(f.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){m.fetchTodo()},children:"Fetch todo"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)},placeholder:"new todo"}),Object(a.jsx)("button",{onClick:function(){m.addTodo({title:n,completed:!1})},children:"Add Todo"}),m.todos.map((function(t){return Object(a.jsxs)("div",{className:"todo",children:[Object(a.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){m.completeTodo(t)}}),t.title,Object(a.jsx)("button",{onClick:function(){m.removeTodo(t.id)},children:"x"})]},t.id)}))]})}));var x=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)(p,{})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,d=e.getTTFB;n(t),o(t),c(t),i(t),d(t)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.ce6d6f6d.chunk.js.map