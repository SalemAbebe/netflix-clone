(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},50:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(18),a=c.n(n),o=(c(28),c(29),c(4)),s=c.n(o),r=c(6),l=c(5),d=(c(31),c(19)),h=c.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),v="01c52602ae8817d2ea09b9bb353339c8",u={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=123"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99"),fetchAnimationMovies:"/discover/movie?api_key=".concat(v,"&with_genres=16"),fetchScienceFictionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=878"),fetchFamilyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10751")},b=c(0);var j=function(){var e,t,c=Object(i.useState)([]),n=Object(l.a)(c,2),a=n[0],o=n[1];return Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(u.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||a.original_name}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(b.jsxs)("h1",{className:"banner__description",children:[(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)," "]})]}),Object(b.jsx)("div",{className:"banner__fadeBottom"})]})},f=(c(50),c(20)),m=c(23),p=c.n(m);var g=function(e){var t=e.title,c=e.fetchUrl,n=e.isLargeRow,a=Object(i.useState)([]),o=Object(l.a)(a,2),d=o[0],v=o[1],u=Object(i.useState)(""),j=Object(l.a)(u,2),m=j[0],g=j[1];return Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(c);case 2:return t=e.sent,v(null===t||void 0===t?void 0:t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:d.map((function(e){return Object(b.jsx)("img",{onClick:function(){return function(e){m?g(""):p()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||e.original_name).then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(n&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(n?e.poster_path:e.backdrop_path),alt:e.name})}))}),Object(b.jsx)("div",{style:{padding:"40px"},children:m&&Object(b.jsx)(f.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})})]})};c(72);var _=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(b.jsxs)("div",{className:"nav ".concat(c&&"nav__black"),children:[Object(b.jsx)("img",{className:"nav__logo",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI",alt:"Netflix Logo"}),Object(b.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar Logo"})]})};var O=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(_,{}),Object(b.jsx)(j,{}),Object(b.jsx)(g,{title:"NETFLIX ORIGINALS",fetchUrl:u.fetchNetflixOriginals,isLargeRow:!0}),Object(b.jsx)(g,{title:"Trending Now",fetchUrl:u.fetchTrending}),Object(b.jsx)(g,{title:"Top Rated",fetchUrl:u.fetchTopRatedMovies}),Object(b.jsx)(g,{title:"Action Movies",fetchUrl:u.fetchActionMovies}),Object(b.jsx)(g,{title:"Comedy movies",fetchUrl:u.fetchComedyMovies}),Object(b.jsx)(g,{title:"Horror Movies",fetchUrl:u.fetchHorrorMovies}),Object(b.jsx)(g,{title:"Romance Movies",fetchUrl:u.fetchRomanceMovies}),Object(b.jsx)(g,{title:"Documentaries",fetchUrl:u.fetchDocumentaries}),Object(b.jsx)(g,{title:"Animation Movies",fetchUrl:u.fetchAnimationMovies}),Object(b.jsx)(g,{title:"Scientific Fiction",fetchUrl:u.fetchScienceFictionMovies}),Object(b.jsx)(g,{title:"Family Movies",fetchUrl:u.fetchFamilyMovies})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),i(e),n(e),a(e),o(e)}))};a.a.render(Object(b.jsx)(O,{}),document.getElementById("root")),x()}},[[73,1,2]]]);
//# sourceMappingURL=main.953e6716.chunk.js.map