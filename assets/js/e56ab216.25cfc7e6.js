"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1691],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"Troubleshooting on Moodle App Plugins development guide",sidebar_label:"Troubleshooting",sidebar_position:2,tags:["Moodle App"]},s=void 0,p={unversionedId:"moodleapp/development/plugins-development-guide/troubleshooting",id:"moodleapp/development/plugins-development-guide/troubleshooting",title:"Troubleshooting on Moodle App Plugins development guide",description:"Invalid response received",source:"@site/docs/moodleapp/development/plugins-development-guide/troubleshooting.md",sourceDirName:"moodleapp/development/plugins-development-guide",slug:"/moodleapp/development/plugins-development-guide/troubleshooting",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/troubleshooting",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/plugins-development-guide/troubleshooting.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652269935,formattedLastUpdatedAt:"11/05/2022",sidebarPosition:2,frontMatter:{title:"Troubleshooting on Moodle App Plugins development guide",sidebar_label:"Troubleshooting",sidebar_position:2,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Plugins development guide",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/"},next:{title:"Examples",permalink:"/devdocs/docs/category/examples"}},d={},u=[{value:"Invalid response received",id:"invalid-response-received",level:2},{value:"Values of <code>ion-radio</code>, <code>ion-checkbox</code> or <code>ion-select</code> aren&#39;t sent to my WS",id:"values-of-ion-radio-ion-checkbox-or-ion-select-arent-sent-to-my-ws",level:2},{value:"Sending the data manually",id:"sending-the-data-manually",level:3},{value:"Using a hidden input",id:"using-a-hidden-input",level:3},{value:"I can&#39;t return an object or array in <code>otherdata</code>",id:"i-cant-return-an-object-or-array-in-otherdata",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"invalid-response-received"},"Invalid response received"),(0,i.kt)("p",null,"You might receive this error when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"core-site-plugins-call-ws")," directive or similar. By default, the app expects all Web Service calls to return an object, if your Web Service returns another type (string, boolean, etc.) then you need to specify it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"preSets")," attribute of the directive. For example, if your WS returns a boolean value, then you should specify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},"[preSets]=\"{typeExpected: 'boolean'}\"\n")),(0,i.kt)("p",null,"In a similar way, if your Web Service returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," you need to tell the app not to expect any result using ",(0,i.kt)("inlineCode",{parentName:"p"},"preSets"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'[preSets]="{responseExpected: false}"\n')),(0,i.kt)("h2",{id:"values-of-ion-radio-ion-checkbox-or-ion-select-arent-sent-to-my-ws"},"Values of ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-radio"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-checkbox")," or ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-select")," aren't sent to my WS"),(0,i.kt)("p",null,"Some directives allow you to specify a form id or name to send the data from the form to a certain WS. These directives look for HTML inputs to retrieve the data to send. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-radio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-checkbox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-select")," don't use HTML inputs, they simulate them, so the directive isn't going to find their data and so it won't be sent to the Web Service."),(0,i.kt)("p",null,"There are 2 workarounds to fix this problem."),(0,i.kt)("h3",{id:"sending-the-data-manually"},"Sending the data manually"),(0,i.kt)("p",null,"The first solution is to send the missing params manually using the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," property. We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to store the input value in a variable, and this variable will be passed to the parameters. Please notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," requires the element to have a name, so if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to a certain element you need to add a name too."),(0,i.kt)("p",null,"For example, if you have a template like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-list radio-group name="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</ion-list>\n\n<ion-button expand="block" type="submit" core-site-plugins-call-ws name="myws" [params]="{id: <% id %>}" form="myform">\n    {{ \'plugin.mycomponent.save\' | translate }}\n</ion-button>\n')),(0,i.kt)("p",null,"Then you should modify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-list radio-group [(ngModel)]="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</ion-list>\n\n<ion-button expand="block" type="submit" core-site-plugins-call-ws name="myws" [params]="{id: <% id %>, responses: responses}" form="myform">\n    {{ \'plugin.mycomponent.save\' | translate }}\n</ion-button>\n')),(0,i.kt)("p",null,"Basically, you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to the affected element (in this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"radio-group"),'). You can put whatever name you want as the value, we used "responses". With this, every time the user selects a radio button the value will be stored in a variable called "responses". Then, in the button we are passing this variable to the parameters of the Web Service.'),(0,i.kt)("p",null,"Please notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"form")," attribute has priority over ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),", so if you have an input with ",(0,i.kt)("inlineCode",{parentName:"p"},'name="responses"')," it will override what you're manually passing to ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,i.kt)("h3",{id:"using-a-hidden-input"},"Using a hidden input"),(0,i.kt)("p",null,"Since the directive is looking for HTML inputs, you need to add one with the value to send to the server. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to synchronise your radio/checkbox/select with the new hidden input. Please notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," requires the element to have a name, so if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to a certain element you need to add a name too."),(0,i.kt)("p",null,"For example, if you have a radio button like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<div radio-group name="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</div>\n')),(0,i.kt)("p",null,"Then you should modify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<div radio-group name="responses" [(ngModel)]="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n\n    <ion-input type="hidden" [ngModel]="responses" name="responses"></ion-input>\n</div>\n')),(0,i.kt)("p",null,'In the example above, we\'re using a variable called "responses" to synchronise the data between the ',(0,i.kt)("inlineCode",{parentName:"p"},"radio-group")," and the hidden input. You can use whatever name you want."),(0,i.kt)("h2",{id:"i-cant-return-an-object-or-array-in-otherdata"},"I can't return an object or array in ",(0,i.kt)("inlineCode",{parentName:"h2"},"otherdata")),(0,i.kt)("p",null,"If you try to return an object or an array in any field inside ",(0,i.kt)("inlineCode",{parentName:"p"},"otherdata"),", the Web Service call will fail with the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Scalar type expected, array or object received\n")),(0,i.kt)("p",null,"Each field in ",(0,i.kt)("inlineCode",{parentName:"p"},"otherdata")," must be a string, number or boolean; it cannot be an object or array. To make it work, you need to encode your object or array into a JSON string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"'otherdata' => ['data' => json_encode($data)],\n")),(0,i.kt)("p",null,"The app will automatically parse this JSON and convert it back into an array or object."))}m.isMDXComponent=!0}}]);