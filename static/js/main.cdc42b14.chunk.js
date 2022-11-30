(this.webpackJsonpspotify_application=this.webpackJsonpspotify_application||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(34),a=n.n(c),i=(n(65),n(66),n(13)),o=n(19),l=o.create({baseURL:"https://api.spotify.com/v1/"}),u=function(e){return{name:e.track.name,artist:e.track.artists[0].name,album:e.track.album.name,albumArt:e.track.album.images[0].url}},d=function(e){return l.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),l.get("me").then((function(e){return e.data})).then((function(e){return e}))},j=function(){var e=function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")}();return l.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),l.get("me/player/recently-played").then((function(e){return e.data.items})).then((function(e){return e.map(u)}))},b="fetch user infos",f="fetch user infos success",p="fetch user infos error",h=function(e){return function(t){return t({type:b}),d(e).then((function(e){return t(function(e){return{type:f,userInfos:e}}(e))}),(function(e){return t(function(e){return{type:p,error:e}}(e))}))}},m="fetch last activity",O="fetch last activity success",y="fetch last activity error",g=o.create({baseURL:"https://api.spotify.com/v1/"}),x=function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")},_=function(){if(localStorage.getItem("userId"))return localStorage.getItem("userId")},v=function(e){var t;return{image:null!==(t=e.images[0])&&void 0!==t&&t.url?e.images[0].url:"",uri:e.uri,name:e.name,description:e.description,id:e.id}},N=function(){var e=x(),t=_();return g.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),g.get("users/".concat(t,"/playlists")).then((function(e){return e.data.items})).then((function(e){return e.map(v)}))},k=function(e){var t=e.name,n=e.description,r=x(),s=_();return g.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(r),e})),g.post("users/".concat(s,"/playlists"),{name:t,description:n}).then((function(e){return e.data})).then((function(e){return{uri:e.uri,name:e.name,description:e.description,id:e.id}}))},w=function(e){var t=e.uri,n=e.id,r=x();return g.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(r),e})),g.post("https://api.spotify.com/v1/playlists/".concat(n,"/tracks?uris=").concat(t)).then((function(e){return e}))},I="request get user playlists",L="request fetch user playlists success",T="request fetch user playlists error",C="request post user playlist",P="request post user playlist success",R="request post user playlist error",S="request post track to user playlist success",A="request post track to user playlist error",q="request post track to user playlist",E=function(){return function(e){return e({type:I}),N().then((function(t){return e(function(e){return{type:L,userPlaylists:e}}(t))}),(function(t){return e(function(e){return{type:T,error:e}}(t))}))}},U=function(e){return function(t){return t({type:C}),k(e).then((function(e){return t({type:P})}),(function(e){return t(function(e){return{type:R,error:e}}(e))}))}},B=function(e){return function(t){return t({type:q}),w(e).then((function(){return t({type:S})}),(function(e){return t(function(e){return{type:A,error:e}}(e))}))}},F="set tokens infos",z=function(e,t){return function(n){n(function(e,t){return{type:F,token:e,expireDate:t}}(e,t))}},D=o.create({baseURL:"https://api.spotify.com/v1/"}),G=function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")},V=function(){var e=G();return D.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),D.get("browse/new-releases").then((function(e){return e.data.albums.items}))},H=function(){var e=G();return D.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),D.get("browse/categories").then((function(e){return e.data}))},M=function(){var e=G();return D.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e),t})),D.get("browse/featured-playlists").then((function(e){return e.data}))},J="request fetch new releases success",W="request fetch new releases error",Y="request fetch categories success",$="request fetch categories error",K="request fetch featured success",Q="request fetch featured error",X="request update categories type",Z=function(){return function(e){return V().then((function(t){return e(function(e){return{type:J,newReleases:e}}(t))}),(function(t){return e(function(e){return{type:W,error:e}}(t))}))}},ee=function(){return function(e){return H().then((function(t){return e(function(e){return{type:Y,categories:e}}(t.categories))}),(function(t){return e(function(e){return{type:$,error:e}}(t))}))}},te=function(){return function(e){return M().then((function(t){return e(function(e){return{type:K,featured:e}}(t.playlists))}),(function(t){return e({type:Q})}))}},ne=function(e){return{type:X,category:e}},re=n(14),se=function(e){return e.user},ce=Object(re.a)([se],(function(e){return e.isLoading})),ae=Object(re.a)([se],(function(e){return e.lastActivityList})),ie=Object(re.a)([se],(function(e){return e.userInfosIsLoading})),oe=Object(re.a)([se],(function(e){return e.userInfos})),le=Object(re.a)([se],(function(e){return e.isUserLoggedIn})),ue=function(e){return e.playlists},de=Object(re.a)([ue],(function(e){return e.isLoading})),je=Object(re.a)([ue],(function(e){return e.data})),be=function(e){return e.authentication},fe=Object(re.a)([be],(function(e){return e.tokenInfos.token})),pe=(Object(re.a)([be],(function(e){return e.tokenInfos.expires})),Object(re.a)([function(e){return e.browse}],(function(e){return e.view}))),he={url:{API_URL:"https://mathieu94110.github.io/My_spotify-app/",REACT_APP_SPOTIFY_CLIENT_ID:"230be2f46909426b8b80cac36446b52a"}},me=n(4),Oe=(n(86),n(1)),ye=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{}),ge=ye.access_token,xe=ye.expires_in;window.history.pushState("",document.title,window.location.pathname+window.location.search);var _e=Object(i.b)((function(e){return{isLoggedIn:le(e)}}),{})((function(e){var t=Object(i.c)();return Object(r.useEffect)((function(){if(ge&&xe){var e=(new Date).getTime()/1e3+3600,n=new Date(1e3*e);localStorage.setItem("accessToken",ge),localStorage.setItem("spotifyExpiresIn",n),t(z(ge,n)),t(h(ge))}else console.error("There was an error during the authentication")}),[]),Object(Oe.jsx)("div",{className:"login",children:e.isLoggedIn?Object(Oe.jsx)(me.a,{replace:!0,to:"/home"}):Object(Oe.jsx)("button",{className:"login__button","aria-label":"Log in using OAuth 2.0",onClick:function(){return window.open("".concat("https://accounts.spotify.com/authorize","?client_id=").concat(he.url.REACT_APP_SPOTIFY_CLIENT_ID,"&scope=").concat(["user-read-private","playlist-read-private","playlist-read-collaborative","playlist-modify-public","user-read-recently-played","playlist-modify-private","ugc-image-upload","user-follow-modify","user-follow-read","user-library-read","user-library-modify","user-top-read","user-read-email","user-read-playback-state"].join("%20"),"&response_type=token&redirect_uri=").concat(he.url.API_URL),"_self")},children:"Se connecter"})})})),ve=(n(88),n(89),function(e){return Object(Oe.jsxs)("div",{className:"recently-played",children:[Object(Oe.jsx)("h2",{className:"recently-played__title",children:"\xc9cout\xe9 derni\xe8rement"}),Object(Oe.jsx)("div",{className:"recently-played__content",children:e.songs&&e.songs.map((function(e,t){return Object(Oe.jsxs)("div",{className:"recently-played__items",children:[Object(Oe.jsx)("p",{children:Object(Oe.jsx)("img",{src:e.albumArt,alt:"{track.album}",style:{width:"60px"}})}),Object(Oe.jsx)("p",{className:"recently-played__track-name",children:e.name}),Object(Oe.jsx)("p",{className:"recently-played__track-artist",children:e.artist}),Object(Oe.jsx)("p",{className:"recently-played__track-album",children:e.album})]},t)}))})]})}),Ne=(n(90),Object(i.b)((function(e){return{viewType:e.browse.viewType}}),{getCategories:ee,getNewReleases:Z,updateCategoryType:ne,getFeatured:te})((function(e){var t=e.getCategories,n=e.getNewReleases,r=e.getFeatured,s=e.updateCategoryType,c=e.viewType;return Object(Oe.jsx)("div",{className:"section-title",children:Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("h3",{className:"header-title",children:"Cat\xe9gories: "}),Object(Oe.jsxs)("div",{className:"browse-headers",children:[Object(Oe.jsx)("p",{className:"New Releases"===c?"active":"",onClick:function(){n(),s("New Releases")},children:"New Releases"}),Object(Oe.jsx)("p",{className:"Genres"===c?"active":"",onClick:function(){t(),s("Genres")},children:"Genres"}),Object(Oe.jsx)("p",{className:"Featured"===c?"active":"",onClick:function(){r(),s("Featured")},children:"Featured"})]})]})})}))),ke=(n(91),function(e){var t=e.newReleases;return Object(Oe.jsx)("div",{className:"browse-content",children:t&&t.map((function(e,t){return Object(Oe.jsx)("li",{className:"browse-content-item",children:Object(Oe.jsxs)("div",{className:"browse-content-image",children:[Object(Oe.jsx)("img",{alt:e.name,src:e.icons?e.icons[0].url:e.images[0].url,className:"browse-content__album-img"}),Object(Oe.jsx)("p",{className:"browse-content-name",children:e.name})]})},t)}))})}),we=function(){return Object(Oe.jsx)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},children:Object(Oe.jsx)("img",{alt:"loading gif",src:"https://i.redd.it/ounq1mw5kdxy.gif"})})},Ie=Object(i.b)((function(e){return{isLoading:ce(e),recentlyPlayed:ae(e),userInfos:oe(e),userInfosIsLoading:ie(e),view:pe(e)}}),{fetchRecentlyPlayed:function(){return function(e){return e({type:m}),j().then((function(t){return e(function(e){return{type:O,recentlyPlayed:e}}(t))}),(function(t){return e(function(e){return{type:y,error:e}}(t))}))}},getNewReleases:Z,getCategories:ee,getFeatured:te,updateCategoryType:ne})((function(e){var t=e.isLoading,n=e.recentlyPlayed,s=e.userInfos,c=e.userInfosIsLoading,a=e.view,i=e.fetchRecentlyPlayed,o=e.getNewReleases;return Object(r.useEffect)((function(){i(),o()}),[]),Object(Oe.jsx)(Oe.Fragment,{children:t||c?Object(Oe.jsx)(we,{}):Object(Oe.jsxs)("div",{className:"home",children:[Object(Oe.jsx)("h1",{className:"home__title",children:"Bienvenue ".concat(s.display_name.charAt(0).toUpperCase()+s.display_name.slice(1)," vous\n            \xeates bien connect\xe9 sur votre plateforme Spotify ")}),Object(Oe.jsxs)("div",{className:"home__rubriks-container",children:[Object(Oe.jsx)("div",{className:"home__recent-container",children:Object(Oe.jsx)(ve,{songs:n})}),Object(Oe.jsxs)("div",{className:"home__recent-container",children:[Object(Oe.jsx)(Ne,{}),Object(Oe.jsx)(ke,{newReleases:a})]})]})]})})})),Le=n(5),Te=(n(92),n(93),n(94),function(e){var t=e.image,n=e.uri,r=e.name,s=e.description,c=e.details,a={background:"url("+t+") center center no-repeat",maxWidth:"100%"};return Object(Oe.jsxs)("div",{className:"card",children:[Object(Oe.jsx)("header",{style:a,id:t,className:"card__header"}),Object(Oe.jsxs)("div",{className:"card__body",children:[Object(Oe.jsxs)("p",{className:"card__date",children:["Lien: ",Object(Oe.jsx)("a",{href:n,children:n})]}),Object(Oe.jsx)("h2",{children:r}),Object(Oe.jsx)("p",{className:"card__content",children:s||"Aucune description"}),c&&Object(Oe.jsxs)("button",{className:"button card__button-primary",children:[Object(Oe.jsx)("i",{className:"fa fa-chevron-right"})," Voir le d\xe9tail"]})]})]})}),Ce=function(e){return Object(Oe.jsxs)("div",{className:"user-playlists",children:[Object(Oe.jsxs)("div",{className:"user-playlists__title",children:[" ",Object(Oe.jsx)("h2",{children:"Vos playlists"})]}),Object(Oe.jsx)("div",{className:"user-playlists__content",children:e.playlists&&e.playlists.map((function(e,t){return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(Te,{image:e.images,uri:e.uri,name:e.name,description:e.description,details:"true"})},t)}))})]})};n(95);function Pe(e){var t=e.createPlayList,n=e.cancelPlaylistCreation,s=e.confirmPlaylistCreation,c=Object(r.useState)(""),a=Object(Le.a)(c,2),i=a[0],o=a[1],l=Object(r.useState)(""),u=Object(Le.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(!1),f=Object(Le.a)(b,2),p=f[0],h=f[1],m=function(){o(""),j(""),n(),h(!1)};return Object(Oe.jsxs)("div",{className:"create-playlist",children:[Object(Oe.jsx)("div",{className:"create-playlist__title",children:Object(Oe.jsx)("h2",{children:"Cr\xe9er une playlist"})}),Object(Oe.jsx)("div",{className:"create-playlist__form-container",children:Object(Oe.jsxs)("form",{className:"create-playlist__form",onSubmit:function(e){e.preventDefault(),t({name:i,description:d}),h(!0)},children:[Object(Oe.jsxs)("label",{className:"create-playlist__form-label",children:["Nom:",Object(Oe.jsx)("input",{type:"text",id:"outlined-basic",className:"create-playlist__form-inputs",name:"name",value:i,onChange:function(e){return o(e.target.value)},disabled:p})]}),Object(Oe.jsxs)("label",{className:"create-playlist__form-label",children:["Description:",Object(Oe.jsx)("textarea",{type:"text",id:"outlined-basic",className:"create-playlist__form-inputs",name:"description",value:d,onChange:function(e){return j(e.target.value)},disabled:p})]}),p?Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)("input",{className:"create-playlist__button create-playlist__button-validate",type:"button",value:"Valider la playlist",onClick:function(){return s(),void m()}}),Object(Oe.jsx)("input",{className:"create-playlist__button create-playlist__button-cancel",type:"button",value:"Annuler",onClick:function(){return m()}})]}):Object(Oe.jsx)("input",{className:"create-playlist__button create-playlist__button-create",type:"submit",value:"Cr\xe9er la playlist",disabled:!i||!d})]})})]})}n(96);var Re=function(e){var t=e.name,n=e.description,r=e.image,s=e.uri,c=e.details;return Object(Oe.jsxs)("div",{className:"create-playlist-model",children:[Object(Oe.jsxs)("div",{className:"create-playlist-model__title",children:[" ",Object(Oe.jsx)("h2",{children:"R\xe9capitulatif"})]}),Object(Oe.jsx)("div",{className:"create-playlist-model__content",children:Object(Oe.jsx)(Te,{image:r,uri:s,name:t,description:n,details:c})})]})},Se=n(17),Ae=(n(52),Object(i.b)((function(e){return{isLoading:de(e),userPlaylists:je(e)}}),{getPlaylists:E})((function(e){var t=Object(r.useState)({}),n=Object(Le.a)(t,2),s=n[0],c=n[1],a=Object(i.c)();Object(r.useEffect)((function(){e.getPlaylists()}),[]);return Object(Oe.jsxs)("div",{className:"playlists",children:[Object(Oe.jsxs)("div",{className:"playlists__content",children:[e.isLoading?Object(Oe.jsx)(we,{}):Object(Oe.jsx)(Ce,{playlists:e.userPlaylists}),Object(Oe.jsx)(Pe,{createPlayList:function(e){c(e)},cancelPlaylistCreation:function(){c({})},confirmPlaylistCreation:function(){a(U(s)).then((function(){Se.b.success("La playlist a bien \xe9t\xe9 cr\xe9ee !",{position:Se.b.POSITION.TOP_RIGHT})})).catch((function(e){Se.b.error("".concat(e.message," !"),{position:Se.b.POSITION.TOP_CENTER})}))}}),s.name&&Object(Oe.jsx)(Re,{name:s.name,description:s.description})]}),Object(Oe.jsx)(Se.a,{})]})}))),qe=n(26),Ee=(n(97),n(98),function(e){var t=e.track,n=e.modalCallback;return Object(Oe.jsxs)("div",{className:"search-result-item",children:[Object(Oe.jsxs)("span",{className:"search-result-item__image",children:[Object(Oe.jsx)("img",{src:t.albumUrl})," "]}),Object(Oe.jsxs)("div",{children:[Object(Oe.jsxs)("div",{children:[" ",Object(Oe.jsx)("span",{className:"search-result-item__text",children:t.title})]}),Object(Oe.jsxs)("div",{children:[" ",Object(Oe.jsx)("span",{className:"search-result-item__artist",children:t.artist})]}),Object(Oe.jsx)("button",{className:"search-result-item__button",onClick:function(){n(t)},children:"+"})]})]})}),Ue=function(e){var t=e.searchResults,n=e.modalCallback;return Object(Oe.jsx)("div",{className:"search-result",children:t.map((function(e,t){return Object(Oe.jsx)(Ee,{track:e,modalCallback:n},t)}))})},Be=(n(99),function(e){var t=e.setIsOpen,n=e.playlists,s=e.track,c=e.addTrackToPlaylist,a=Object(r.useState)(!1),i=Object(Le.a)(a,2),o=i[0],l=i[1];return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)("div",{className:"add-track-modal",children:Object(Oe.jsxs)("div",{className:"add-track-modal__modal",children:[Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("h2",{className:"add-track-modal__title",children:"Ajouter le titre \xe0 une playlist"}),Object(Oe.jsx)("div",{className:"add-track-modal__subtitle",children:"S\xe9lectionner la playlist"})]}),Object(Oe.jsx)("div",{className:"add-track-modal__playlists",children:n&&n.map((function(e,t){return Object(Oe.jsxs)("div",{className:"add-track-modal__playlists-items",children:[Object(Oe.jsx)("span",{children:e.name})," ",Object(Oe.jsx)("input",{type:"checkbox",value:e.id,checked:o===e,onChange:function(){l(e)}})]},t)}))}),Object(Oe.jsx)("div",{children:Object(Oe.jsxs)("div",{className:"add-track-modal__actions",children:[Object(Oe.jsx)("button",{className:"cancel-button",onClick:function(){return t(!1)},children:"Annuler"}),Object(Oe.jsx)("button",{className:"validate-button",onClick:function(){c(s,o)},children:"Valider"})]})})]})})})}),Fe=o.create({baseURL:"https://api.spotify.com/v1/"}),ze=function(e){var t=function(){if(localStorage.getItem("accessToken"))return localStorage.getItem("accessToken")}();return Fe.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(t),e})),Fe.get("search",e).then((function(e){return e}))},De=(n(100),["title","uri"]),Ge=["id","name"],Ve=Object(i.b)((function(e){return{userPlaylists:je(e)}}),{getPlaylists:E})((function(e){var t=Object(i.d)(fe),n=Object(r.useState)(""),s=Object(Le.a)(n,2),c=s[0],a=s[1],o=Object(r.useState)([]),l=Object(Le.a)(o,2),u=l[0],d=l[1],j=Object(r.useState)(!1),b=Object(Le.a)(j,2),f=b[0],p=b[1],h=Object(r.useState)(""),m=Object(Le.a)(h,2),O=m[0],y=m[1],g=Object(i.c)();Object(r.useEffect)((function(){e.getPlaylists()}),[]);var x=function(e){return y(e),p(!f)};Object(r.useEffect)((function(){if(!c)return d([]);var e={headers:{Authorization:"Bearer ".concat(t)},params:{q:c,type:"track"}};ze(e).then((function(e){d(e.data.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))}))}),[c]);return Object(Oe.jsxs)("div",{className:"search",children:[Object(Oe.jsx)("input",{className:"search__input",type:"search",placeholder:"Rechercher un titre",value:c,onChange:function(e){return a(e.target.value)}}),Object(Oe.jsx)(Ue,{searchResults:u,modalCallback:x}),f&&Object(Oe.jsx)(Be,{setIsOpen:x,playlists:e.userPlaylists,track:O,addTrackToPlaylist:function(e,t){var n=e.title,r=e.uri,s=(Object(qe.a)(e,De),t.id),c=t.name;Object(qe.a)(t,Ge);g(B({uri:r,id:s})).then((function(){Se.b.success("".concat(n," a bien \xe9t\xe9 ajout\xe9 \xe0 ").concat(c," !"),{position:Se.b.POSITION.TOP_RIGHT})})).catch((function(e){Se.b.error("".concat(e.message," !"),{position:Se.b.POSITION.TOP_CENTER})})).finally((function(){x()}))}}),Object(Oe.jsx)(Se.a,{})]})})),He=(n(101),n.p+"static/media/spotify-logo.056948ef.png"),Me=n(38),Je=n(37),We=n(21),Ye=n(57),$e=n.n(Ye),Ke=n(56),Qe=n.n(Ke);function Xe(){var e=Object(r.useState)(!0),t=Object(Le.a)(e,2),n=t[0],s=t[1];return Object(Oe.jsx)("div",{children:Object(Oe.jsx)("div",{className:n?"sidebar":"sidebar sidebar--closed",children:Object(Oe.jsxs)("div",{className:"sidebar__top-links",children:[Object(Oe.jsx)("div",{className:"sidebar__logo",children:Object(Oe.jsx)("img",{src:He,alt:"spotify",className:n?"sidebar__logo-img":"sidebar__logo-img sidebar__logo-img--closed"})}),Object(Oe.jsx)("button",{className:n?"sidebar__menu-toggle":"sidebar__menu-toggle sidebar__menu-toggle--closed",onClick:function(){s(!n)},children:n?Object(Oe.jsx)(Qe.a,{}):Object(Oe.jsx)($e.a,{})}),Object(Oe.jsxs)("ul",{className:"sidebar__list-items",children:[Object(Oe.jsx)("li",{children:Object(Oe.jsxs)(We.b,{to:"/home",className:"sidebar__nav-link",children:[Object(Oe.jsx)("span",{children:Object(Oe.jsx)(Me.a,{icon:Je.b})}),Object(Oe.jsx)("span",{className:n?"sidebar__text-display":"sidebar__text-display-none",children:"Accueil"})]})}),Object(Oe.jsx)("li",{children:Object(Oe.jsxs)(We.b,{to:"/search",className:"sidebar__nav-link",children:[Object(Oe.jsx)("span",{children:Object(Oe.jsx)(Me.a,{icon:Je.c})}),Object(Oe.jsx)("span",{className:n?"sidebar__text-display":"sidebar__text-display-none",children:"Rechercher"})]})}),Object(Oe.jsx)("li",{children:Object(Oe.jsxs)(We.b,{to:"/playlists",className:"nav-link",children:[Object(Oe.jsx)("span",{children:Object(Oe.jsx)(Me.a,{icon:Je.a})}),Object(Oe.jsxs)("span",{className:n?"sidebar__text-display":"sidebar__text-display-none",children:[" ","Vos playlists"]})]})})]})]})})})}var Ze=Object(i.b)((function(e){return{isLoggedIn:le(e)}}),{})((function(e){return Object(Oe.jsx)(We.a,{children:Object(Oe.jsxs)("div",{className:"App",children:[e.isLoggedIn?Object(Oe.jsx)(Xe,{}):null,Object(Oe.jsxs)(me.d,{children:[Object(Oe.jsx)(me.b,{exact:!0,path:"/",element:Object(Oe.jsx)(_e,{})}),Object(Oe.jsx)(me.b,{exact:!0,path:"/playlists",element:Object(Oe.jsx)(Ae,{})}),Object(Oe.jsx)(me.b,{exact:!0,path:"/home",element:Object(Oe.jsx)(Ie,{})}),Object(Oe.jsx)(me.b,{exact:!0,path:"/search",element:Object(Oe.jsx)(Ve,{})})]})]})})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=n(15),tt=n(2),nt=n(11),rt=n(58),st=Object(rt.a)({name:"artists",initialState:{topUserArtist:[]},reducers:{setTopUserArtist:function(e,t){e.topUserArtist=t.payload}}}),ct=(st.actions.setTopUserArtist,{authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tokenInfos:{}},t=arguments.length>1?arguments[1]:void 0;return t.type===F?Object(tt.a)(Object(tt.a)({},e),{},{tokenInfos:{token:t.token,expires:t.expireDate}}):e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userInfos:{},lastActivityList:[],userInfosIsLoading:!1,isUserLoggedIn:!1,isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(tt.a)(Object(tt.a)({},e),{},{userInfosIsLoading:!0});case f:return Object(tt.a)(Object(tt.a)({},e),{},{userInfosIsLoading:!1,error:null,userInfos:Object(tt.a)({},t.userInfos),isUserLoggedIn:!0});case p:return Object(tt.a)(Object(tt.a)({},e),{},{userInfosIsLoading:!1,error:t.error});case m:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!0});case O:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:null,lastActivityList:Object(nt.a)(t.recentlyPlayed)});case y:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!0});case L:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:null,data:Object(nt.a)(t.userPlaylists)});case T:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:t.error});case C:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!0});case P:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:null,data:[].concat(Object(nt.a)(e.data),[t.createdPlaylist])});case R:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:t.error});case S:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1});case A:return Object(tt.a)(Object(tt.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},artists:st.reducer,browse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{view:[],fetchNewReleasesError:!1,viewType:"New Releases"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(tt.a)(Object(tt.a)({},e),{},{view:t.newReleases,fetchNewReleasesError:!1});case W:return Object(tt.a)(Object(tt.a)({},e),{},{fetchNewReleasesError:!0});case Y:return Object(tt.a)(Object(tt.a)({},e),{},{view:t.categories.items,fetchCategoriesError:!1});case $:return Object(tt.a)(Object(tt.a)({},e),{},{fetchCategoriesError:!0});case K:return Object(tt.a)(Object(tt.a)({},e),{},{view:t.featured.items,fetchFeaturedError:!1});case Q:return Object(tt.a)(Object(tt.a)({},e),{},{fetchFeaturedError:!0});case X:return Object(tt.a)(Object(tt.a)({},e),{},{viewType:t.category});default:return e}}}),at=n(59),it=n(31),ot=Object(et.combineReducers)(ct),lt=[it.a],ut=Object(et.createStore)(ot,Object(at.composeWithDevTools)(et.applyMiddleware.apply(void 0,lt)));a.a.render(Object(Oe.jsx)(s.a.StrictMode,{children:Object(Oe.jsx)(i.a,{store:ut,children:Object(Oe.jsx)(Ze,{})})}),document.getElementById("root"))},65:function(e,t,n){},66:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.cdc42b14.chunk.js.map