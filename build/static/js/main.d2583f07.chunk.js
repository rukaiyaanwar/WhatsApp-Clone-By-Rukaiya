(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(85)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(24),r=t.n(l),o=(t(64),t(10)),s=(t(65),t(66),t(99)),i=t(97),m=t(49),u=t.n(m),d=t(50),p=t.n(d),h=t(35),E=t.n(h),f=t(36),v=t.n(f),b=(t(67),t(26)),g=t.n(b),_=g.a.initializeApp({apiKey:"AIzaSyCMAGnyv-WkiSGLZvWiM5J1nVEwzKOWRP0",authDomain:"whatsapp-clone-b94c7.firebaseapp.com",databaseURL:"https://whatsapp-clone-b94c7.firebaseio.com",projectId:"whatsapp-clone-b94c7",storageBucket:"whatsapp-clone-b94c7.appspot.com",messagingSenderId:"631038255204",appId:"1:631038255204:web:bd0f81606327bede9a7f71",measurementId:"G-9D0S361SZG"}).firestore(),j=g.a.auth(),O=new g.a.auth.GoogleAuthProvider,N=_,w=t(27);var S=function(e){var a,t=e.id,l=e.name,r=e.addNewChat,i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&N.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),r?c.a.createElement("div",{onClick:function(){var e=prompt("Please Enter name for chat room..");e&&N.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add New Chat")):c.a.createElement(w.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,l),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.messages))))},y=Object(n.createContext)(),C=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},l)},k=function(){return Object(n.useContext)(y)};var I=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=k(),m=Object(o.a)(r,2),d=m[0].user;return m[1],Object(n.useEffect)((function(){var e=N.collection("rooms").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{placeholder:"Serach out Here..",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(S,{addNewChat:!0}),t.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,name:e.data.name})}))))},R=(t(83),t(98)),x=t(51),A=t.n(x),D=t(52),M=t.n(D),W=t(54),B=t.n(W),G=t(53),T=t.n(G),P=t(5);var U=function(){var e,a,t=Object(n.useState)(""),l=Object(o.a)(t,2),r=l[0],m=l[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],h=d[1],f=Object(P.f)().roomId,b=Object(n.useState)(""),_=Object(o.a)(b,2),j=_[0],O=_[1],w=Object(n.useState)([]),S=Object(o.a)(w,2),y=S[0],C=S[1],I=k(),x=Object(o.a)(I,2),D=x[0].user;return x[1],Object(n.useEffect)((function(){f&&(N.collection("rooms").doc(f).onSnapshot((function(e){return O(e.data().name)})),N.collection("rooms").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return C(e.docs.map((function(e){return e.data()})))})))}),[f]),Object(n.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[f]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(p,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,j),c.a.createElement("p",null,"last seen"," ",new Date(null===(e=y[y.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(v.a,null)),c.a.createElement(i.a,null,c.a.createElement(A.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"chat__body"},y.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===D.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(M.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:r,onChange:function(e){return m(e.target.value)},placeholder:"Type a message",type:"text"}),c.a.createElement(R.a,{onClick:function(e){e.preventDefault(),console.log("You Typed >>>>",r),N.collection("rooms").doc(f).collection("messages").add({message:r,name:D.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),m("")},type:"submit"},"Send a message")),c.a.createElement(i.a,null,c.a.createElement(T.a,null)),c.a.createElement(i.a,null,c.a.createElement(B.a,null))))},z=(t(84),t(40)),J="SET_USER",L=function(e,a){switch(console.log(a),a.type){case J:return Object(z.a)(Object(z.a)({},e),{},{user:a.user});default:return e}};var K=function(){var e=k(),a=Object(o.a)(e,2),t=(a[0].user,a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://seeklogo.net/wp-content/uploads/2013/04/whatsapp-vector-logo-400x400.png",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign In to WhatsApp"),c.a.createElement("h6",null,"Brought you by Rukaiya Anwar")),c.a.createElement(R.a,{onClick:function(){j.signInWithPopup(O).then((function(e){t({type:J,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign in with Google")))};var V=function(){var e=k(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(w.a,null,c.a.createElement(I,null),c.a.createElement(P.c,null,c.a.createElement(P.a,{path:"/rooms/:roomId"},c.a.createElement(U,null)),c.a.createElement(P.a,{path:"/"},c.a.createElement(U,null))))):c.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,{initialState:{user:null},reducer:L},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.d2583f07.chunk.js.map