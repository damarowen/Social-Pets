(this["webpackJsonpsocial-pets"]=this["webpackJsonpsocial-pets"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(4),i=c.n(o),s=(c(9),c(2)),a={cat:{name:"Kitty Cat",bio:"I'm the coolest cat around. I'm the cat's meow!",profilePictureUrl:"https://content.codecademy.com/courses/React/react_lifecycle_cat_profile_picture.jpg",friends:["komodo"]},dog:{name:"Doggy Dog",bio:"I'm the doggity dog! Woof woof!",profilePictureUrl:"https://content.codecademy.com/courses/React/react_lifecycle_dog_profile_picture.jpg",friends:["komodo"]},komodo:{name:"Lizard Lady",bio:"I'm a Komodo dragon. You'll love me.",profilePictureUrl:"https://content.codecademy.com/courses/React/react_lifecycle_komodo_profile_picture.jpg",friends:["cat","dog"]}},l=function(e,t){var c=Math.floor(1e3*Math.random())+500;return setTimeout((function(){t(a[e])}),c)},u=c(0),d=function(e){var t=e.usernames,c=e.passFromProfileAndDirectory,n=function(e){c(e.target.dataset.username),console.log(e.target)};return Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("button",{"data-username":e,onClick:n,children:["@",e]})},e)}))})},j=function(e){var t=e.userData,c=e.pilih,n=e.username,r=t.name,o=t.bio,i=t.friends;return Object(u.jsxs)("div",{className:"ProfileBody",children:[Object(u.jsx)("div",{className:"profile-picture",children:Object(u.jsx)("img",{src:t.profilePictureUrl,alt:""})}),Object(u.jsxs)("div",{className:"profile-body",children:[Object(u.jsx)("h2",{children:r}),Object(u.jsxs)("h3",{children:["@",n]}),Object(u.jsx)("p",{children:o}),Object(u.jsx)("h3",{children:"My friends"}),Object(u.jsx)(d,{usernames:i,passFromProfileAndDirectory:c})]})]})},m=function(e){var t=e.username,c=e.pilih,r=Object(n.useState)(null),o=Object(s.a)(r,2),i=o[0],a=o[1];Object(n.useEffect)((function(){a(null),l(t,(function(e){a(e)}))}),[t]);var d=null==i,m="Profile",h=Object(u.jsx)(j,{pilih:c,username:t,userData:i});return d&&(m+=" loading",h=Object(u.jsx)("h2",{children:"Tunggu dulu gannnn ..."})),Object(u.jsx)("div",{className:m,children:h})},h=function(e){var t=e.pilih;return Object(u.jsxs)("div",{className:"Directory",children:[Object(u.jsx)("h2",{children:"User directory"}),Object(u.jsx)(d,{usernames:["dog","cat","komodo"],passFromProfileAndDirectory:t})]})},f=function(){var e,t=Object(n.useState)(null),c=Object(s.a)(t,2),r=c[0],o=c[1],i=function(e){o(e)};return e=r?Object(u.jsx)(m,{username:r,pilih:i}):Object(u.jsx)(h,{pilih:i}),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[console.log("current Username ",r),Object(u.jsx)("h1",{children:"PetBook"}),Object(u.jsx)("nav",{children:r&&Object(u.jsx)("button",{onClick:function(){o(null)},children:"Return to directory ( set username to null)"})})]}),Object(u.jsx)("main",{children:e})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.8e1fee0a.chunk.js.map