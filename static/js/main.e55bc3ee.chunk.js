(this.webpackJsonpspotify_application=this.webpackJsonpspotify_application||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(34),n=a.n(s),i=(a(65),a(66),a(13)),r=a(18),l=Object(r.a)({name:"authorization",initialState:{loggedIn:!1,accessToken:"",tokenExpiryDate:""},reducers:{setLoggedIn:function(e,t){e.loggedIn=t.payload},setAccessToken:function(e,t){e.accessToken=t.payload},setTokenExpiryDate:function(e,t){var a=new Date;a.setSeconds(a.getSeconds()+t.payload),e.tokenExpiryDate=a.toISOString()}}}),o=l.actions,d=o.setLoggedIn,u=o.setAccessToken,j=(o.setUserId,o.setTokenExpiryDate),b=function(e){return e.authorization.loggedIn},m=l.reducer,p=Object(r.a)({name:"user",initialState:{displayName:"",userId:"",product:"",recentlyPlayed:[]},reducers:{setDisplayName:function(e,t){e.displayName=t.payload},setUserId:function(e,t){e.userId=t.payload},setProduct:function(e,t){e.product=t.payload},setRecentlyPlayed:function(e,t){e.recentlyPlayed=t.payload}}}),h=p.actions,O=h.setDisplayName,f=h.setUserId,y=h.setProduct,x=(h.setRecentlyPlayed,p.reducer,a(3)),_=(a(70),a(1)),g=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{}),v=g.access_token,N=g.expires_in;window.history.pushState("",document.title,window.location.pathname+window.location.search);var k=function(){var e=Object(i.d)(b),t=Object(i.c)();return Object(c.useEffect)((function(){var e;v&&(localStorage.setItem("accessToken",v),t(d(!0)),t(u(v)),t(j(Number(N))),t((e=v,function(t){var a=new Headers;a.append("Authorization","Bearer "+e),fetch("https://api.spotify.com/v1/me",{method:"GET",headers:a}).then((function(e){return e.json()})).then((function(e){t(O(e.display_name?e.display_name:"")),t(f(e.id)),localStorage.setItem("userId",e.id),t(y(e.product))})).catch((function(e){console.log(e),e&&401===e.status&&t(d(!1))}))})))}),[]),Object(_.jsxs)("div",{className:"login",children:[!e&&Object(_.jsx)("button",{className:"login__button","aria-label":"Log in using OAuth 2.0",onClick:function(){return window.open("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("883cad702d5c446f9f5bfa7637b2997b","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-private","playlist-modify-public","playlist-modify-private","user-read-recently-played","user-top-read"].join("%20"),"&response_type=token"),"_self")},children:"Se connecter"}),e&&Object(_.jsx)(x.a,{replace:!0,to:"/home"})]})},I=(a(72),a(20)),S=function(e){return e.user},T=Object(I.a)([S],(function(e){return e.isLoading})),w=Object(I.a)([S],(function(e){return e.data})),C=a(37),P=a.n(C),A=C.create({baseURL:"https://api.spotify.com/v1/"}),E=function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")}();A.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(E),e}));var L=function(){return A.get("me/player/recently-played").then((function(e){return e.data.items?e.data.items:[]}))},R="request last activity",D="fetch last activity success",U="fetch last activity error",z=(a(89),function(e){Object(c.useEffect)((function(){console.log(e)}),[]);return Object(_.jsxs)("div",{className:"recently-played",children:[Object(_.jsx)("h2",{className:"recently-played__title",children:"\xc9cout\xe9 derni\xe8rement"}),Object(_.jsx)("div",{className:"recently-played__content",children:e.songs&&e.songs.map((function(e){return Object(_.jsxs)("div",{className:"recently-played__items",children:[Object(_.jsx)("p",{children:Object(_.jsx)("img",{src:e.track.album.images[2].url,alt:"",style:{width:"60px"}})}),Object(_.jsx)("p",{className:"recently-played__track-name",children:e.track.name}),Object(_.jsx)("p",{children:(t=e.track.duration_ms,Math.floor(t/6e4)+":"+t%60)}),Object(_.jsx)("p",{children:new Date(e.played_at).toLocaleDateString("fr")})]},e.track.id);var t}))})]})}),B=function(){return Object(_.jsx)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},children:Object(_.jsx)("img",{alt:"loading gif",src:"https://i.redd.it/ounq1mw5kdxy.gif"})})},H=Object(i.b)((function(e){return{isLoading:T(e),user:w(e)}}),{getLastActivity:function(){return function(e){return e({type:R}),L().then((function(t){return e(function(e){return{type:D,user:e}}(t))}),(function(t){return e(function(e){return{type:U,error:e}}(t))}))}}})((function(e){return Object(c.useEffect)((function(){e.getLastActivity()}),[]),Object(_.jsx)(_.Fragment,{children:e.isLoading?Object(_.jsx)(B,{}):Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("h1",{className:"home__title",children:["Bienvenue"," ",", vous \xeates bien connect\xe9 sur votre plateforme Spotify"]}),Object(_.jsx)(z,{songs:e.user})]})})})),q=a(21),V=a(4),G=(a(90),function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")}),W=function(){if(localStorage.getItem("userId"))return localStorage.getItem("userId")},F=Object(r.a)({name:"playlists",initialState:{playlistsItems:[],total:0},reducers:{setPlaylistsItem:function(e,t){e.playlistsItems=t.payload},setTotal:function(e,t){e.total=t.payload}}}),J=F.actions,M=J.setPlaylistsItem,$=J.setTotal,K=function(e){return e.playlists.playlistsItems},Q=function(){return function(e){var t=G(),a=W(),c=new Headers;c.append("Authorization","Bearer "+t),fetch("https://api.spotify.com/v1/users/"+a+"/playlists",{method:"GET",headers:c}).then((function(e){return e.json()})).then((function(t){e(M(t.items)),e($(t.total))})).catch((function(e){console.log(e)}))}},X=F.reducer,Y=(a(91),a(92),function(e){var t=e.image,a=e.uri,c=e.name,s=e.description,n=e.details,i={background:"url("+t+") center center no-repeat",maxWidth:"100%"};return Object(_.jsxs)("div",{className:"card",children:[Object(_.jsx)("header",{style:i,id:t,className:"card__header"}),Object(_.jsxs)("div",{className:"card__body",children:[Object(_.jsxs)("p",{className:"card__date",children:["Lien: ",Object(_.jsx)("a",{href:a,children:a})]}),Object(_.jsx)("h2",{children:c}),Object(_.jsx)("p",{className:"card__content",children:s||"Aucune description"}),n&&Object(_.jsxs)("button",{className:"button card__button-primary",children:[Object(_.jsx)("i",{className:"fa fa-chevron-right"})," Voir le d\xe9tail"]})]})]})}),Z=function(){var e=Object(i.d)(K),t=Object(i.c)();return Object(c.useEffect)((function(){t(Q())}),[]),Object(_.jsxs)("div",{className:"user-playlists",children:[Object(_.jsxs)("div",{className:"user-playlists__title",children:[" ",Object(_.jsx)("h2",{children:"Vos playlists"})]}),Object(_.jsx)("div",{className:"user-playlists__content",children:e&&e.map((function(e,t){return Object(_.jsx)("div",{children:Object(_.jsx)(Y,{image:e.images[0]&&e.images[0].url,uri:e.uri,name:e.name,description:e.description,details:"true"})},t)}))})]})};a(93);function ee(e){var t=e.createPlayList,a=e.cancelPlaylistCreation,s=e.confirmPlaylistCreation,n=Object(c.useState)(""),i=Object(V.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)(""),d=Object(V.a)(o,2),u=d[0],j=d[1],b=Object(c.useState)(!1),m=Object(V.a)(b,2),p=m[0],h=m[1],O=function(){l(""),j(""),a(),h(!1)};return Object(_.jsxs)("div",{className:"create-playlist",children:[Object(_.jsx)("div",{className:"create-playlist__title",children:Object(_.jsx)("h2",{children:"Cr\xe9er une playlist"})}),Object(_.jsx)("div",{className:"create-playlist__form-container",children:Object(_.jsxs)("form",{className:"create-playlist__form",onSubmit:function(e){e.preventDefault(),t({name:r,description:u}),h(!0)},children:[Object(_.jsxs)("label",{className:"create-playlist__form-label",children:["Nom:",Object(_.jsx)("input",{type:"text",id:"outlined-basic",className:"create-playlist__form-inputs",name:"name",value:r,onChange:function(e){return l(e.target.value)},disabled:p})]}),Object(_.jsxs)("label",{className:"create-playlist__form-label",children:["Description:",Object(_.jsx)("textarea",{type:"text",id:"outlined-basic",className:"create-playlist__form-inputs",name:"description",value:u,onChange:function(e){return j(e.target.value)},disabled:p})]}),p?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",{className:"create-playlist__button create-playlist__button-validate",type:"button",value:"Valider la playlist",onClick:function(){return s(),void O()}}),Object(_.jsx)("input",{className:"create-playlist__button create-playlist__button-cancel",type:"button",value:"Annuler",onClick:function(){return O()}})]}):Object(_.jsx)("input",{className:"create-playlist__button create-playlist__button-create",type:"submit",value:"Cr\xe9er la playlist",disabled:!r||!u})]})})]})}a(94);var te=function(e){var t=e.name,a=e.description,c=e.image,s=e.uri,n=e.details;return Object(_.jsxs)("div",{className:"create-playlist-model",children:[Object(_.jsxs)("div",{className:"create-playlist-model__title",children:[" ",Object(_.jsx)("h2",{children:"R\xe9capitulatif"})]}),Object(_.jsx)("div",{className:"create-playlist-model__content",children:Object(_.jsx)(Y,{image:c,uri:s,name:t,description:a,details:n})})]})},ae=a(16),ce=(a(53),function(){var e=Object(c.useState)({}),t=Object(V.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(V.a)(n,2),l=r[0],o=(r[1],Object(i.c)());return Object(_.jsxs)("div",{className:"playlists",children:[Object(_.jsxs)("div",{className:"playlists__content",children:[Object(_.jsx)(Z,{}),Object(_.jsx)(ee,{createPlayList:function(e){s(e)},cancelPlaylistCreation:function(){s({})},setCreateDisabled:l,confirmPlaylistCreation:function(){var e;o((e=a,function(t){var a=e.name,c=e.description,s=G(),n=W(),i=new Headers;return i.append("Authorization","Bearer "+s),fetch("https://api.spotify.com/v1/users/".concat(n,"/playlists"),{method:"POST",headers:i,body:JSON.stringify({name:a,description:c})}).then((function(e){if(e.ok)return e.json();throw new Error("Request failed!")}),(function(e){console.log(e.message)}))})).then((function(){ae.b.success("La playlist a bien \xe9t\xe9 cr\xe9ee !",{position:ae.b.POSITION.TOP_RIGHT})})).catch((function(e){ae.b.error("".concat(e.message," !"),{position:ae.b.POSITION.TOP_CENTER})}))}}),a.name&&Object(_.jsx)(te,{name:a.name,description:a.description})]}),Object(_.jsx)(ae.a,{})]})}),se=a(26),ne=(a(95),a(96),function(e){var t=e.track,a=e.modalCallback;return Object(_.jsxs)("div",{className:"search-result-item",children:[Object(_.jsxs)("span",{className:"search-result-item__image",children:[Object(_.jsx)("img",{src:t.albumUrl})," "]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[" ",Object(_.jsx)("span",{className:"search-result-item__text",children:t.title})]}),Object(_.jsxs)("div",{children:[" ",Object(_.jsx)("span",{className:"search-result-item__artist",children:t.artist})]}),Object(_.jsx)("button",{className:"search-result-item__button",onClick:function(){a(t)},children:"+"})]})]})}),ie=function(e){var t=e.searchResults,a=e.modalCallback;return Object(_.jsx)("div",{className:"search-result",children:t.map((function(e,t){return Object(_.jsx)(ne,{track:e,modalCallback:a},t)}))})},re=(a(97),function(e){var t=e.setIsOpen,a=e.playlists,s=e.track,n=e.addTrackToPlaylist,i=Object(c.useState)(!1),r=Object(V.a)(i,2),l=r[0],o=r[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"add-track-modal",children:Object(_.jsxs)("div",{className:"add-track-modal__modal",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:"add-track-modal__title",children:"Ajouter le titre \xe0 une playlist"}),Object(_.jsx)("div",{className:"add-track-modal__subtitle",children:"S\xe9lectionner la playlist"})]}),Object(_.jsx)("div",{className:"add-track-modal__playlists",children:a&&a.map((function(e,t){return Object(_.jsxs)("div",{className:"add-track-modal__playlists-items",children:[Object(_.jsx)("span",{children:e.name})," ",Object(_.jsx)("input",{type:"checkbox",value:e.id,checked:l===e,onChange:function(){o(e)}})]},t)}))}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"add-track-modal__actions",children:[Object(_.jsx)("button",{className:"cancel-button",onClick:function(){return t(!1)},children:"Annuler"}),Object(_.jsx)("button",{className:"validate-button",onClick:function(){n(s,l)},children:"Valider"})]})})]})})})}),le=(a(98),["title","uri"]),oe=["id","name"],de=function(){var e=localStorage.getItem("accessToken"),t=Object(c.useState)(""),a=Object(V.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),l=Object(V.a)(r,2),o=l[0],d=l[1],u=Object(c.useState)(!1),j=Object(V.a)(u,2),b=j[0],m=j[1],p=Object(c.useState)(""),h=Object(V.a)(p,2),O=h[0],f=h[1],y=Object(i.d)(K),x=Object(i.c)();Object(c.useEffect)((function(){x(Q())}),[]);var g=function(e){return f(e),m(!b)};Object(c.useEffect)((function(){if(!s)return d([]);var t={headers:{Authorization:"Bearer ".concat(e)},params:{q:s,type:"track"}};P.a.get("https://api.spotify.com/v1/search",t).then((function(e){d(e.data.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))}))}),[s]);return Object(_.jsxs)("div",{className:"search",children:[Object(_.jsx)("input",{className:"search__input",type:"search",placeholder:"Rechercher un titre",value:s,onChange:function(e){return n(e.target.value)}}),Object(_.jsx)(ie,{searchResults:o,modalCallback:g}),b&&Object(_.jsx)(re,{setIsOpen:g,playlists:y,track:O,addTrackToPlaylist:function(e,t){var a,c=e.title,s=e.uri,n=(Object(se.a)(e,le),t.id),i=t.name;Object(se.a)(t,oe);x((a={uri:s,id:n},function(e){var t=a.uri,c=a.id,s=G(),n=new Headers;return n.append("Authorization","Bearer "+s),fetch("https://api.spotify.com/v1/playlists/".concat(c,"/tracks?uris=").concat(t),{method:"POST",headers:n}).then((function(e){if(e.ok)return e.json();throw new Error("Request failed!")}),(function(e){console.log(e.message)}))})).then((function(){ae.b.success("".concat(c," a bien \xe9t\xe9 ajout\xe9 \xe0 ").concat(i," !"),{position:ae.b.POSITION.TOP_RIGHT})})).catch((function(e){ae.b.error("".concat(e.message," !"),{position:ae.b.POSITION.TOP_CENTER})})).finally((function(){g()}))}}),Object(_.jsx)(ae.a,{})]})},ue=(a(99),a.p+"static/media/spotify-logo.056948ef.png"),je=a(39),be=a(38),me=a(58),pe=a.n(me),he=a(57),Oe=a.n(he);function fe(){var e=Object(c.useState)(!0),t=Object(V.a)(e,2),a=t[0],s=t[1];return Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:a?"sidebar":"sidebar sidebar--closed",children:Object(_.jsxs)("div",{className:"sidebar__top-links",children:[Object(_.jsx)("div",{className:"sidebar__logo",children:Object(_.jsx)("img",{src:ue,alt:"spotify",className:a?"sidebar__logo-img":"sidebar__logo-img sidebar__logo-img--closed"})}),Object(_.jsx)("button",{className:a?"sidebar__menu-toggle":"sidebar__menu-toggle sidebar__menu-toggle--closed",onClick:function(){s(!a)},children:a?Object(_.jsx)(Oe.a,{}):Object(_.jsx)(pe.a,{})}),Object(_.jsxs)("ul",{className:"sidebar__list-items",children:[Object(_.jsx)("li",{children:Object(_.jsxs)(q.b,{to:"/home",className:"sidebar__nav-link",children:[Object(_.jsx)("span",{children:Object(_.jsx)(je.a,{icon:be.b})}),Object(_.jsx)("span",{className:a?"sidebar__text-display":"sidebar__text-display-none",children:"Accueil"})]})}),Object(_.jsx)("li",{children:Object(_.jsxs)(q.b,{to:"/search",className:"sidebar__nav-link",children:[Object(_.jsx)("span",{children:Object(_.jsx)(je.a,{icon:be.c})}),Object(_.jsx)("span",{className:a?"sidebar__text-display":"sidebar__text-display-none",children:"Rechercher"})]})}),Object(_.jsx)("li",{children:Object(_.jsxs)(q.b,{to:"/playlists",className:"nav-link",children:[Object(_.jsx)("span",{children:Object(_.jsx)(je.a,{icon:be.a})}),Object(_.jsxs)("span",{className:a?"sidebar__text-display":"sidebar__text-display-none",children:[" ","Vos playlists"]})]})})]})]})})})}var ye=function(){var e=Object(i.d)(b);return Object(_.jsx)(q.a,{children:Object(_.jsxs)("div",{className:"App",children:[e?Object(_.jsx)(fe,{}):null,Object(_.jsxs)(x.d,{children:[Object(_.jsx)(x.b,{exact:!0,path:"/",element:Object(_.jsx)(k,{})}),Object(_.jsx)(x.b,{exact:!0,path:"/playlists",element:Object(_.jsx)(ce,{})}),Object(_.jsx)(x.b,{exact:!0,path:"/home",element:Object(_.jsx)(H,{})}),Object(_.jsx)(x.b,{exact:!0,path:"/search",element:Object(_.jsx)(de,{})})]})]})})},xe=a(14),_e=a(11),ge=a(6),ve=Object(r.a)({name:"artists",initialState:{topUserArtist:[]},reducers:{setTopUserArtist:function(e,t){e.topUserArtist=t.payload}}}),Ne=(ve.actions.setTopUserArtist,{authorization:m,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!0});case D:return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,error:null,data:Object(_e.a)(t.user)});case U:return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},playlists:X,artists:ve.reducer}),ke=a(59),Ie=a(28),Se=Object(xe.combineReducers)(Ne),Te=[Ie.a],we=Object(xe.createStore)(Se,Object(ke.composeWithDevTools)(xe.applyMiddleware.apply(void 0,Te)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(_.jsx)(i.a,{store:we,children:Object(_.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.e55bc3ee.chunk.js.map