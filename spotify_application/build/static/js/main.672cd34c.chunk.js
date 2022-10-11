(this.webpackJsonpspotify_application=this.webpackJsonpspotify_application||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},104:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(17),i=a.n(n),r=(a(100),a(101),a(28)),o=a(45),l=Object(o.b)({name:"authorization",initialState:{loggedIn:!1,accessToken:"",tokenExpiryDate:""},reducers:{setLoggedIn:function(e,t){e.loggedIn=t.payload},setAccessToken:function(e,t){e.accessToken=t.payload},setTokenExpiryDate:function(e,t){var a=new Date;a.setSeconds(a.getSeconds()+t.payload),e.tokenExpiryDate=a.toISOString()}}}),u=l.actions,d=u.setLoggedIn,j=u.setAccessToken,h=(u.setUserId,u.setTokenExpiryDate),b=function(e){return e.authorization.loggedIn},m=l.reducer,p=Object(o.b)({name:"user",initialState:{displayName:"",userId:"",product:""},reducers:{setDisplayName:function(e,t){e.displayName=t.payload},setUserId:function(e,t){e.userId=t.payload},setProduct:function(e,t){e.product=t.payload}}}),O=p.actions,g=O.setDisplayName,x=O.setUserId,f=O.setProduct,v=function(e){return e.user.displayName},y=p.reducer,N=a(7),k=(a(104),a(2)),w=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{}),I=w.access_token,S=w.expires_in;window.history.pushState("",document.title,window.location.pathname+window.location.search);var C=function(){var e=Object(r.c)(b),t=Object(r.b)();return Object(c.useEffect)((function(){var e;I&&(localStorage.setItem("accessToken",I),t(d(!0)),t(j(I)),t(h(Number(S))),t((e=I,function(t){var a=new Headers;a.append("Authorization","Bearer "+e),fetch("https://api.spotify.com/v1/me",{method:"GET",headers:a}).then((function(e){return e.json()})).then((function(e){t(g(e.display_name?e.display_name:"")),t(x(e.id)),localStorage.setItem("userId",e.id),t(f(e.product))})).catch((function(e){console.log(e),e&&401===e.status&&t(d(!1))}))})))}),[]),Object(k.jsxs)("div",{className:"login-page",children:[!e&&Object(k.jsx)("button",{className:"login-button","aria-label":"Log in using OAuth 2.0",onClick:function(){return window.open("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("883cad702d5c446f9f5bfa7637b2997b","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-private","playlist-modify-public","playlist-modify-private"].join("%20"),"&response_type=token"),"_self")},children:"Se connecter"}),e&&Object(k.jsx)(N.a,{replace:!0,to:"/home"})]})},A=a(34),T=a.n(A),E=(a(122),function(){var e=Object(r.c)(v);return Object(k.jsxs)("div",{className:"home-container",children:[Object(k.jsxs)("h1",{className:"home-title",children:["Bienvenue ",e.charAt(0).toUpperCase()+e.slice(1),", vous \xeates bien connect\xe9 sur votre plateforme Spotify"]}),Object(k.jsx)("div",{className:"in-stagging-container",children:Object(k.jsx)("p",{children:"Page Home actuellement en r\xe9novation, ajout des tendances globales et par cat\xe9gories de genre, bient\xf4t disponible"})})]})}),_=a(42),z=a(11),B=a(20),D=a(8),L=a(10),U=a(29),P=a(23),R=a(39),J=a(43),H=a(184),V=a(178),q=function(e){Object(R.a)(a,e);var t=Object(J.a)(a);function a(e){var c;return Object(U.a)(this,a),(c=t.call(this,e)).searchImage=function(){var e=localStorage.accessToken,t={headers:{Authorization:"Bearer ".concat(e)},params:{q:c.state.description,type:"album",limit:3}};T.a.get("https://api.spotify.com/v1/search",t).then((function(e){console.log("create Playlists =",e.data),c.setState({albums:e.data.albums.items[0].images[0].url}),alert(JSON.stringify(c.state.albums))}))},c.create=function(){var e=localStorage.accessToken,t=localStorage.userId;if(e&&t){var a={headers:{Authorization:"Bearer ".concat(e)}};T.a.post("https://api.spotify.com/v1/users/"+t+"/playlists",{name:c.state.name,description:c.state.description,images:[{KEY:"image_description",height:640,url:"".concat(JSON.stringify(c.state.albums)),width:640}]},a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},c.handleChange=function(e){var t;c.setState((t={},Object(L.a)(t,e.target.name,e.target.value),Object(L.a)(t,e.target.description,e.target.value),t))},c.state={name:"",description:"",albums:[]},c}return Object(P.a)(a,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"100px auto"},children:[Object(k.jsx)(H.a,{id:"outlined-basic",label:"Nom de la playlist",name:"name",value:this.state.name,onChange:this.handleChange,style:{}}),Object(k.jsx)(H.a,{id:"outlined-basic",name:"description",label:"Image(Nom d'un album)",value:this.state.description,onChange:this.handleChange,style:{}}),Object(k.jsx)(V.a,{variant:"contained",color:"secondary",onClick:this.searchImage,children:"Valider l'album"}),Object(k.jsx)(V.a,{variant:"contained",color:"secondary",onClick:this.create,children:"Cr\xe9er la playlist"})]}),Object(k.jsxs)("div",{style:{height:"480px"},children:[Object(k.jsx)("h2",{style:{color:"red"},children:"En cours de r\xe9novation"}),this.state.albums.map((function(e,t){return Object(k.jsx)("div",{children:Object(k.jsx)("ul",{children:Object(k.jsxs)(ListItem,{children:[Object(k.jsx)(ListItemAvatar,{children:Object(k.jsx)(Avatar,{alt:"album image",src:e.images[2].url})}),Object(k.jsx)(ListItemText,{primary:e.name})]},t)})})}))]})]})}}]),a}(c.Component),W=a(179),G=a(180),K=a(182),M=a(181),Y=a(183),$=a(85),F=a.n($),Q=(a(123),function(){var e=Object(c.useState)({}),t=Object(D.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(D.a)(n,2),o=i[0],l=i[1];Object(r.c)(v);Object(c.useEffect)((function(){var e=function(){var e=Object(B.a)(Object(z.a)().mark((function e(){var t;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),t=u(),s(t),l(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var u=function(){var e=localStorage.getItem("userId"),t=localStorage.getItem("accessToken"),a={headers:{Authorization:"Bearer ".concat(t)}};T.a.get("https://api.spotify.com/v1/users/"+e+"/playlists",a).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))};return Object(k.jsxs)("div",{className:"playlists-container",children:[o&&Object(k.jsx)("div",{children:"Loading..."}),a&&Object(k.jsxs)("div",{className:"playlists-content",children:[Object(k.jsx)("div",{className:"user-playlists",children:Object(k.jsxs)(W.a,{rowHeight:180,className:"image-list",children:[Object(k.jsx)(G.a,{cols:2,className:"image-list-subheader-item",children:Object(k.jsx)(M.a,{component:"div",children:Object(k.jsx)("h2",{children:"Playlists actuelles"})})},"Subheader"),null!==a&&void 0!==a&&a.items?a.items.map((function(e,t){return Object(k.jsxs)(G.a,{children:[e.images[0]&&Object(k.jsx)("img",{src:e.images[0].url,alt:e.title}),Object(k.jsx)(K.a,{title:e.name,actionIcon:Object(k.jsx)(Y.a,{"aria-label":"Voir titres",className:"icon-button-color",children:Object(k.jsx)(F.a,{onClick:function(){return window.location="/playlists?id="+e.id+"&artist="+e.name}})})})]},t)})):null]})}),Object(k.jsx)("div",{className:"create-playlist-container",children:Object(k.jsx)(q,{})})]})]})}),X=(a(127),a(128),function(e){var t=e.track;return Object(k.jsxs)("div",{className:"search-container",children:[Object(k.jsxs)("span",{className:"image",children:[Object(k.jsx)("img",{src:t.albumUrl})," "]}),Object(k.jsxs)("div",{className:"song",children:[Object(k.jsx)("span",{className:"text",children:t.title}),Object(k.jsx)("span",{className:"artist",children:t.artist})]})]})}),Z=function(e){var t=e.searchResults;return Object(k.jsx)("div",{className:"search-result",children:t.map((function(e){return Object(k.jsx)(X,{track:e},e.uri)}))})},ee=(a(129),function(){var e=localStorage.getItem("accessToken"),t=Object(c.useState)(""),a=Object(D.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),r=Object(D.a)(i,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){if(!s)return l([]);var t={headers:{Authorization:"Bearer ".concat(e)},params:{q:s,type:"track"}};T.a.get("https://api.spotify.com/v1/search",t).then((function(e){l(e.data.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))}))}),[s]),Object(k.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(k.jsx)("input",{className:"search-input",type:"search",placeholder:"Rechercher un titre",value:s,onChange:function(e){return n(e.target.value)}}),";",Object(k.jsx)(Z,{searchResults:o})]})}),te=(a(130),a.p+"static/media/spotify-logo.056948ef.png"),ae=a(60),ce=a(59),se=a(87),ne=a.n(se),ie=a(86),re=a.n(ie);function oe(){var e=Object(c.useState)(!0),t=Object(D.a)(e,2),a=t[0],s=t[1];return Object(k.jsx)("div",{children:Object(k.jsx)("div",{className:a?"sidebar":"sidebar sidebar-closed",children:Object(k.jsxs)("div",{className:"top-links",children:[Object(k.jsx)("div",{className:"logo",children:Object(k.jsx)("img",{src:te,alt:"spotify",className:a?"logo-img":"logo-img-closed"})}),Object(k.jsx)("button",{className:a?"menu-toggle":"menu-toggle menu-toggle-closed",onClick:function(){s(!a)},children:a?Object(k.jsx)(re.a,{}):Object(k.jsx)(ne.a,{})}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsxs)(_.b,{to:"/home",className:"nav-link",children:[Object(k.jsx)("span",{children:Object(k.jsx)(ae.a,{icon:ce.b})}),Object(k.jsx)("span",{className:a?"margin-left":"display-none",children:"Accueil"})]})}),Object(k.jsx)("li",{children:Object(k.jsxs)(_.b,{to:"/search",className:"nav-link",children:[Object(k.jsx)("span",{children:Object(k.jsx)(ae.a,{icon:ce.c})}),Object(k.jsx)("span",{className:a?"margin-left":"display-none",children:"Rechercher"})]})}),Object(k.jsx)("li",{children:Object(k.jsxs)(_.b,{to:"/playlists",className:"nav-link",children:[Object(k.jsx)("span",{children:Object(k.jsx)(ae.a,{icon:ce.a})}),Object(k.jsxs)("span",{className:a?"margin-left":"display-none",children:[" ","Vos playlists"]})]})})]})]})})})}var le=function(){var e=Object(r.c)(b);return Object(k.jsx)(_.a,{children:Object(k.jsxs)("div",{className:"App",children:[e?Object(k.jsx)(oe,{}):null,Object(k.jsxs)(N.d,{children:[Object(k.jsx)(N.b,{exact:!0,path:"/",element:Object(k.jsx)(C,{})}),Object(k.jsx)(N.b,{exact:!0,path:"/playlists",element:Object(k.jsx)(Q,{})}),Object(k.jsx)(N.b,{exact:!0,path:"/home",element:Object(k.jsx)(E,{})}),Object(k.jsx)(N.b,{exact:!0,path:"/search",element:Object(k.jsx)(ee,{})})]})]})})},ue=Object(o.a)({reducer:{authorization:m,user:y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(r.a,{store:ue,children:Object(k.jsx)(le,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.672cd34c.chunk.js.map