(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c.n(n),a=c(6),i=(c(19),c(3)),r=c(4),o=(c(20),c(1)),j=c(8),l=c.n(j),u=c(9),d=c(7),b=c.n(d);function m(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Server error");case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("".concat("https://api.tvmaze.com/schedule","?country=").concat("US","&date=").concat(t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(c(22),c.p+"static/media/con-video-camera.4dbb78ca.png"),p=c(2),x=function(e){var t=e.movie;return Object(p.jsxs)("div",{className:"movie-card",children:[Object(p.jsx)("img",{className:"movie-card__img",src:null===t.show.image?v:t.show.image.medium,alt:"MovieImage"}),Object(p.jsxs)("div",{className:"movie-card__content",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"movie-card__name",children:t.name}),Object(p.jsx)("p",{className:"movie-card__airdate",children:t.airdate.slice(0,4)})]}),Object(p.jsxs)("div",{className:"movie-card__description",children:[Object(p.jsxs)("p",{className:"movie-card__description--season",children:["Season:",t.season]}),Object(p.jsxs)("p",{className:"movie-card__description--episode",children:["Episode:",t.number]})]})]})]})},f=(c(24),function(){return Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),_=(c(25),c(26),c(14)),g=c.p+"static/media/arrow_icon.14f1d3c7.svg",N=c.p+"static/media/TV-set.3bca90b2.png",w=function(){return Object(p.jsx)("img",{src:g,alt:"Icon"})},S=function(e){var t=e.getMonth()+1,c=e.getDate();return[e.getFullYear(),t<10?"0".concat(t):"".concat(t),c<10?"0".concat(c):"".concat(c)].join("-")},M=function(){var e=Object(o.useState)(new Date),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.f)();return Object(p.jsxs)("div",{className:"home-page",children:[Object(p.jsxs)("div",{className:"home-page__content",children:[Object(p.jsx)("img",{src:N,alt:"TVset",className:"home-page__img"}),Object(p.jsxs)("p",{className:"home-page__description",children:["For the list of serials, please, choose the necessary",Object(p.jsx)("br",{}),"month and day."]})]}),Object(p.jsx)(_.a,{formatMonthYear:function(e,t){return l()(t).format("MMMM")},onChange:n,value:c,onClickDay:function(e){return s("/movies-list/".concat(S(e)))},nextLabel:Object(p.jsx)(w,{}),prevLabel:Object(p.jsx)(w,{})})]})},y=function(e){var t=+e.slice(0,4),c=+e.slice(5,7),n=+e.slice(8,10),s=new Date(t,c-1,n-1);return S(s)},k=function(e,t){switch(!0){case e:return Object(p.jsx)("p",{children:"Server Error"});case t:return Object(p.jsx)("p",{children:"Date Error"});default:return""}},Y=c.p+"static/media/arrow_icon-red.d42fff8b.svg",D=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),j=Object(r.a)(s,2),u=j[0],d=j[1],b=Object(o.useState)(!1),m=Object(r.a)(b,2),h=m[0],v=m[1],_=Object(o.useState)(!1),g=Object(r.a)(_,2),N=g[0],w=g[1],S=Object(o.useState)(!1),M=Object(r.a)(S,2),D=M[0],E=M[1],A=Object(o.useState)(!1),C=Object(r.a)(A,2),F=C[0],L=C[1],T=Object(o.useState)(!0),I=Object(r.a)(T,2),J=I[0],V=I[1],z=Object(i.g)().date,B=Object(o.useState)(!1),P=Object(r.a)(B,2),U=P[0],q=P[1],G=Object(o.useState)(!1),H=Object(r.a)(G,2),K=H[0],Q=H[1];return Object(o.useEffect)((function(){void 0===z?w(!0):(O(z).then((function(e){return 0===(t=e).length&&E(!0),t;var t})).then((function(e){return n(e)})).catch((function(){return v(!0)})).finally((function(){return V(!1)})),O(y(z)).then((function(e){return 0===(t=e).length&&L(!0),t;var t})).then((function(e){return d(e)})).catch((function(){return v(!0)})).finally((function(){return V(!1)})))}),[z]),Object(p.jsxs)("div",{className:"movie-list__wrap",children:[Object(p.jsx)("div",{className:"movie-list__link-wrap",children:Object(p.jsx)(a.b,{to:"/",className:"movie-list__link",children:Object(p.jsx)("img",{src:Y,alt:"arrow"})})}),k(h,N),J?Object(p.jsx)(f,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"movie-list",id:"list-top",children:[Object(p.jsx)("div",{className:"movie-list__date",children:Object(p.jsx)("h2",{className:"movie-list__date-title",children:l()(z).format("DD MMMM YYYY")})}),Object(p.jsx)("ul",{children:U?c.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(x,{movie:e})},e.id)})):c.slice(0,2).map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(x,{movie:e})},e.id)}))}),Object(p.jsx)("button",{type:"button",className:"movie-list__button",onClick:function(){q(!U)},children:U?"Show short list":"All ".concat(c.length," movies")}),D&&Object(p.jsx)("p",{className:"movie-list__error",children:"There are no movies to this date"})]}),Object(p.jsxs)("div",{className:"movie-list",id:"list-buttom",children:[Object(p.jsx)("div",{className:"movie-list__date",children:Object(p.jsx)("h2",{className:"movie-list__date-title",children:z&&l()(y(z)).format("DD MMMM YYYY")})}),Object(p.jsx)("ul",{children:K?u.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(x,{movie:e})},e.id)})):u.slice(0,2).map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(x,{movie:e})},e.id)}))}),Object(p.jsx)("button",{type:"button",className:"movie-list__button",onClick:function(){Q(!K)},children:K?"Show short list":"All ".concat(u.length," movies")}),F&&Object(p.jsx)("p",{className:"movie-list__error",children:"There are no movies to this date"})]})]})]})},E=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"App__header",children:Object(p.jsx)("h1",{className:"App__title",children:"Super film"})}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/",element:Object(p.jsx)(M,{})}),Object(p.jsx)(i.a,{path:"/movies-list/:date",element:Object(p.jsx)(D,{})}),Object(p.jsx)(i.a,{path:"*",element:Object(p.jsx)("h3",{children:"Page not found"})})]})]})})};s.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.72dbc56e.chunk.js.map