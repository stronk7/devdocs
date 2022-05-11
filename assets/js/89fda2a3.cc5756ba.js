"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Moodle App Deep Linking",sidebar_label:"Deep Linking",sidebar_position:4,tags:["Moodle App"]},p=void 0,s={unversionedId:"moodleapp/development/deep-linking",id:"moodleapp/development/deep-linking",title:"Moodle App Deep Linking",description:"Overview",source:"@site/docs/moodleapp/development/deep-linking.md",sourceDirName:"moodleapp/development",slug:"/moodleapp/development/deep-linking",permalink:"/devdocs/docs/moodleapp/development/deep-linking",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/deep-linking.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652269935,formattedLastUpdatedAt:"11/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle App Deep Linking",sidebar_label:"Deep Linking",sidebar_position:4,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Sending custom Push Notifications",permalink:"/devdocs/docs/moodleapp/development/custom-push-notifications"},next:{title:"Debugging network requests",permalink:"/devdocs/docs/moodleapp/development/network-debug"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Format",id:"format",level:2},{value:"Site URL",id:"site-url",level:3},{value:"Username",id:"username",level:3},{value:"Token and Private token",id:"token-and-private-token",level:3},{value:"Redirect",id:"redirect",level:3},{value:"Before 3.7",id:"before-37",level:2},{value:"See also",id:"see-also",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Moodle App supports being launched using a Custom URL Scheme. It lets you specify the URL to open, the username to use and also a token to authenticate the user."),(0,r.kt)("p",null,"Please notice that these links will only work if the app is installed in the device. For example, if you click one of these links in Safari in an iOS device without the app installed, an error will be displayed."),(0,r.kt)("p",null,"If you are using a custom Moodle App you have to change ",(0,r.kt)("inlineCode",{parentName:"p"},"moodlemobile://")," to your custom URL scheme. If you are using a ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.com/branded-app"},"BMA (Branded Moodle App)"),", please contact your ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.com/services"},"Moodle Service Provider (Moodle partner)")," for this information."),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"The format to create the links is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://username@domain.com?token=TOKEN&privatetoken=PRIVATETOKEN&redirect=http://domain.com/course/view.php?id=2\n")),(0,r.kt)("p",null,"The only data required is the base URL of your site (in the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"<https://domain.com>"),")."),(0,r.kt)("h3",{id:"site-url"},"Site URL"),(0,r.kt)("p",null,"As mentioned above, this is the only required parameter. It should be the base URL of the site (wwwroot). For example, you can use this URL to open your site in the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com\n")),(0,r.kt)("p",null,"In the example above, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"<https://domain.com>")," site isn't stored in the app, the user will be redirected to the credentials screen to access the site."),(0,r.kt)("h3",{id:"username"},"Username"),(0,r.kt)("p",null,"If you want the app to be opened with a certain username you can specify it in the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://username@domain.com\n")),(0,r.kt)("p",null,"In the example above, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," user and the ",(0,r.kt)("inlineCode",{parentName:"p"},"<https://domain.com>"),' site aren\'t stored in the app, the user will be sent to the credentials screen to access the site (the username input will be pre-populated, but the user will be able to change it if he wants to). If the app has several users of this site stored, including "username", the right user will be loaded.'),(0,r.kt)("h3",{id:"token-and-private-token"},"Token and Private token"),(0,r.kt)("p",null,"If you specify a token in the URL, the user will be authenticated automatically in the app. This is really useful for external apps and systems. For example, you can use this feature for SSO systems. The user token can be found in the database table ",(0,r.kt)("inlineCode",{parentName:"p"},"mdl_external_tokens"),"."),(0,r.kt)("p",null,"The private token is used by the app to auto-login the user in the browser, and it will only be used if you also specify a token in the URL. If you specify a private token but not a token, the private token will be ignored. The private token can also be found in the database table ",(0,r.kt)("inlineCode",{parentName:"p"},"mdl_external_tokens"),"."),(0,r.kt)("p",null,"It isn't recommended to include the token and private token in links that will be rendered by a browser or apps that can be inspected. Please notice that anyone with the token will be able to authenticate as the user the token belongs to."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?token=TOKEN&privatetoken=PRIVATETOKEN\n")),(0,r.kt)("p",null,'The token has priority over the username parameter. For example, if you specify username "u1" but the token belongs to user "u2", the user u2 will be authenticated in the app.'),(0,r.kt)("h3",{id:"redirect"},"Redirect"),(0,r.kt)("p",null,"The redirect parameter indicates which page you want to open in the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?redirect=http://domain.com/course/view.php?id=2\n")),(0,r.kt)("p",null,"This link will open the course with id 2 in the app. Please notice that the app doesn't support all Moodle URLs, only some of them are supported."),(0,r.kt)("p",null,"The redirect URL should belong to the same site as the base URL. For example, if the base URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"<http://domain.com>")," but the redirect is ",(0,r.kt)("inlineCode",{parentName:"p"},"<http://anothersite.com/>..."),", an error will be displayed."),(0,r.kt)("p",null,"The redirect parameter can be a relative URL based on the base URL. The example above can also be written like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?redirect=/course/view.php?id=2\n")),(0,r.kt)("h2",{id:"before-37"},"Before 3.7"),(0,r.kt)("p",null,"Deep linking was introduced in version 3.6.1, but it had a different format that was updated in 3.7.0 to the one we use today."),(0,r.kt)("p",null,"This is an example of the previous format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://link=https://mysite.es/mod/choice/view.php?id=8\n")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EddyVerbruggen/Custom-URL-scheme"},"Custom URL Scheme Cordova plugin used by the app"),".")))}m.isMDXComponent=!0}}]);