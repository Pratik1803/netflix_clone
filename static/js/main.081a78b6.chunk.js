(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),r=c(16),a=c.n(r),s=(c(22),c(7),c(3)),o=c.n(s),l=c(4),h=c(5),f=c(17),j=c.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(c(42),c(0)),u=function(e){var t=e.title,c=e.fetchUrl,i=e.isLargeRow,r=Object(n.useState)([]),a=Object(h.a)(r,2),s=a[0],f=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(c);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{style:{padding:"10px"},children:t}),Object(d.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(d.jsx)("img",{className:"row_poster ".concat(i&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},p="babbd749e2966717e763c62258478005",b={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixoriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=")},v=(c(44),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(b.fetchNetflixoriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)+1]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsxs)("div",{className:"random_info",children:[Object(d.jsx)("h1",{children:c.name}),Object(d.jsx)("p",{children:c.overview}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Rating: ",c.vote_average]})]}),Object(d.jsx)("img",{className:"banner_img",src:"https://image.tmdb.org/t/p/original/".concat(c.backdrop_path),alt:"this is banner."}),Object(d.jsx)("div",{className:"fade"})]})}),g=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{style:{color:"red",background:"transparent"},children:"NETFLIX"})})};var m=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(g,{}),Object(d.jsx)(v,{}),Object(d.jsx)(u,{isLargeRow:!0,title:"Netflix Originals!",fetchUrl:b.fetchNetflixoriginals}),Object(d.jsx)(u,{title:"Trending Now!",fetchUrl:b.fetchTrending}),Object(d.jsx)(u,{title:"Top Rated",fetchUrl:b.fetchTopRated}),Object(d.jsx)(u,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),Object(d.jsx)(u,{title:"Comedy Movies!",fetchUrl:b.fetchComedyMovies}),Object(d.jsx)(u,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),Object(d.jsx)(u,{title:"Romantic Movies",fetchUrl:b.fetchRomanceMovies}),Object(d.jsx)(u,{title:"Documentaries",fetchUrl:b.fetchDocumentaries})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()},7:function(e,t,c){}},[[45,1,2]]]);
//# sourceMappingURL=main.081a78b6.chunk.js.map