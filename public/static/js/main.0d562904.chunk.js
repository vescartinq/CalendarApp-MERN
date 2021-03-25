(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(64),i=a(4),m="[ui] Open modal",d="[ui] Close modal",f="[event] Set Active",p="[event] Logout event",v="[event] Add new",b="[event] Clear active event",E="[event] Event updated",h="[event] Event deleted",O="[event] Events loaded",g="[auth] Finish checking login state",j="[auth] Login",y="[auth] Logout",N={modalOpen:!1},w=a(54),S={events:[],activeEvent:null},k={checking:!0},x=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O:return Object(i.a)(Object(i.a)({},e),{},{events:Object(w.a)(t.payload)});case p:return Object(i.a)({},S);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case g:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,T=Object(s.e)(x,C(Object(s.a)(u.a))),_=a(35),D=a(9),P=a(13),A=a(24),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(P.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(A.a)({},t.name,t.value)))};return[r,l,o]},L=a(11),R=a.n(L),H=a(20),U=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(U,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(U,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},K=a(17),W=a.n(K),F=function(){return{type:g}},B=function(e){return{type:j,payload:e}},J=function(){return{type:y}},M=(a(76),function(){var e=Object(l.b)(),t=I({lEmail:"",lPassword:""}),a=Object(P.a)(t,2),n=a[0],c=a[1],o=I({rName:"Noa",rEmail:"noa@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(P.a)(o,2),u=s[0],i=s[1],m=n.lEmail,d=n.lPassword,f=u.rName,p=u.rEmail,v=u.rPassword1,b=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(H.a)(R.a.mark((function e(t){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(B({uid:c.uid,name:c.name}))):W.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==b)return W.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;e((a=p,n=v,r=f,function(){var e=Object(H.a)(R.a.mark((function e(t){var c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(B({uid:o.uid,name:o.name}))):W.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),X=a(53),q=a(15),z=a.n(q),Q=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e((function(e){localStorage.clear(),e(J())}))}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},Y={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Z=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},$=a(48),ee=a.n($),te=a(49),ae=a.n(te),ne=function(){return{type:m}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:z()(e.end).toDate(),start:z()(e.start).toDate()})}))},ce=function(e){return{type:v,payload:e}},oe=function(){return{type:b}},le=function(e){return{type:E,payload:e}},se=function(){return{type:h}},ue=function(e){return{type:O,payload:e}},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ee.a.setAppElement("#root");var me=z()().minutes(0).seconds(0).add(1,"hours"),de=me.clone().add(1,"hours"),fe={title:"",notes:"",start:me.toDate(),end:de.toDate()},pe=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(me.toDate()),o=Object(P.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(de.toDate()),f=Object(P.a)(m,2),p=f[0],v=f[1],b=Object(n.useState)(!0),E=Object(P.a)(b,2),h=E[0],O=E[1],g=Object(n.useState)(fe),j=Object(P.a)(g,2),y=j[0],N=j[1],w=y.notes,S=y.title,k=y.start,x=y.end;Object(n.useEffect)((function(){N(t||fe)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object(A.a)({},t.name,t.value)))},T=function(){a({type:d}),a(oe()),N(fe)};return r.a.createElement(ee.a,{isOpen:e,onRequestClose:T,style:ie,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=z()(k),c=z()(x);return r.isSameOrAfter(c)?W.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):S.trim().length<2?O(!1):(a(t?(n=y,function(){var e=Object(H.a)(R.a.mark((function e(t){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(le(n)):W.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(H.a)(R.a.mark((function t(a,n){var r,c,o,l,s;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,G("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:s=t.sent,console.log(s),s.ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),a(ce(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),O(!0),void T())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ae.a,{onChange:function(e){u(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ae.a,{onChange:function(e){v(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:p,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},ve=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ne())}},r.a.createElement("i",{className:"fas fa-plus"}))}),be=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(H.a)(R.a.mark((function e(t,a){var n,r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(se()):W.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};z.a.locale("es");var Ee=Object(X.b)(z.a),he=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(P.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(H.a)(R.a.mark((function e(t){var a,n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=re(n.eventos),t(ue(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(Q,null),r.a.createElement(X.a,{localizer:Ee,events:a,startAccessor:"start",endAccessor:"end",messages:Y,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ne())},onSelectEvent:function(t){e({type:f,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(oe())},selectable:!0,view:i,components:{event:Z}}),r.a.createElement(ve,null),c&&r.a.createElement(be,null),r.a.createElement(pe,null))},Oe=a(39),ge=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(D.a,{to:"/"}):r.a.createElement(a,e)}}))},je=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(D.a,{to:"/login"})}}))},ye=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(H.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(B({uid:n.uid,name:n.name}))):t(F());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(_.a,null,r.a.createElement("div",null,r.a.createElement(D.d,null,r.a.createElement(ge,{exact:!0,path:"/login",component:M,isAuthenticated:!!c}),r.a.createElement(je,{exact:!0,path:"/",component:he,isAuthenticated:!!c}),r.a.createElement(D.a,{to:"/"}))))},Ne=function(){return r.a.createElement(l.a,{store:T},r.a.createElement(ye,null))};a(114);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},76:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.0d562904.chunk.js.map