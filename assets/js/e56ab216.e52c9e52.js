"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1691],{62245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=t(83117),a=t(80102),i=(t(67294),t(3905)),l=t(13904),r=["components"],s={title:"Troubleshooting on Moodle App Plugins development guide",sidebar_label:"Troubleshooting",sidebar_position:2,tags:["Moodle App"]},d=void 0,p={unversionedId:"moodleapp/development/plugins-development-guide/troubleshooting",id:"moodleapp/development/plugins-development-guide/troubleshooting",title:"Troubleshooting on Moodle App Plugins development guide",description:"Invalid response received",source:"@site/docs/moodleapp/development/plugins-development-guide/troubleshooting.md",sourceDirName:"moodleapp/development/plugins-development-guide",slug:"/moodleapp/development/plugins-development-guide/troubleshooting",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/troubleshooting",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/plugins-development-guide/troubleshooting.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655187100,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:2,frontMatter:{title:"Troubleshooting on Moodle App Plugins development guide",sidebar_label:"Troubleshooting",sidebar_position:2,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Plugins development guide",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/"},next:{title:"Examples",permalink:"/devdocs/docs/category/examples"}},u={},m=[{value:"Invalid response received",id:"invalid-response-received",level:2},{value:"Values of <code>ion-radio</code>, <code>ion-checkbox</code> or <code>ion-select</code> aren&#39;t sent to my WS",id:"values-of-ion-radio-ion-checkbox-or-ion-select-arent-sent-to-my-ws",level:2},{value:"Sending the data manually",id:"sending-the-data-manually",level:3},{value:"Using a hidden input",id:"using-a-hidden-input",level:3},{value:"I can&#39;t return an object or array in <code>otherdata</code>",id:"i-cant-return-an-object-or-array-in-otherdata",level:2}],c={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,o.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"invalid-response-received"},"Invalid response received"),(0,i.kt)("p",null,"You might receive this error when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"core-site-plugins-call-ws")," directive or similar. By default, the app expects all Web Service calls to return an object, if your Web Service returns another type (string, boolean, etc.) then you need to specify it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"preSets")," attribute of the directive. For example, if your WS returns a boolean value, then you should specify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},"[preSets]=\"{typeExpected: 'boolean'}\"\n")),(0,i.kt)("p",null,"In a similar way, if your Web Service returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," you need to tell the app not to expect any result using ",(0,i.kt)("inlineCode",{parentName:"p"},"preSets"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'[preSets]="{responseExpected: false}"\n')),(0,i.kt)("h2",{id:"values-of-ion-radio-ion-checkbox-or-ion-select-arent-sent-to-my-ws"},"Values of ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-radio"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-checkbox")," or ",(0,i.kt)("inlineCode",{parentName:"h2"},"ion-select")," aren't sent to my WS"),(0,i.kt)("p",null,"Some directives allow you to specify a form id or name to send the data from the form to a certain WS. These directives look for HTML inputs to retrieve the data to send. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-radio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-checkbox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-select")," don't use HTML inputs, they simulate them, so the directive isn't going to find their data and so it won't be sent to the Web Service."),(0,i.kt)("p",null,"There are 2 workarounds to fix this problem."),(0,i.kt)("h3",{id:"sending-the-data-manually"},"Sending the data manually"),(0,i.kt)("p",null,"The first solution is to send the missing params manually using the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," property. We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to store the input value in a variable, and this variable will be passed to the parameters. Please notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," requires the element to have a name, so if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to a certain element you need to add a name too."),(0,i.kt)("p",null,"For example, if you have a template like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-list radio-group name="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</ion-list>\n\n<ion-button expand="block" type="submit" core-site-plugins-call-ws name="myws" [params]="{id: <% id %>}" form="myform">\n    {{ \'plugin.mycomponent.save\' | translate }}\n</ion-button>\n')),(0,i.kt)("p",null,"Then you should modify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<ion-list radio-group [(ngModel)]="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</ion-list>\n\n<ion-button expand="block" type="submit" core-site-plugins-call-ws name="myws" [params]="{id: <% id %>, responses: responses}" form="myform">\n    {{ \'plugin.mycomponent.save\' | translate }}\n</ion-button>\n')),(0,i.kt)("p",null,"Basically, you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to the affected element (in this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"radio-group"),'). You can put whatever name you want as the value, we used "responses". With this, every time the user selects a radio button the value will be stored in a variable called "responses". Then, in the button we are passing this variable to the parameters of the Web Service.'),(0,i.kt)("p",null,"Please notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"form")," attribute has priority over ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),", so if you have an input with ",(0,i.kt)("inlineCode",{parentName:"p"},'name="responses"')," it will override what you're manually passing to ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,i.kt)("h3",{id:"using-a-hidden-input"},"Using a hidden input"),(0,i.kt)("p",null,"Since the directive is looking for HTML inputs, you need to add one with the value to send to the server. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to synchronise your radio/checkbox/select with the new hidden input. Please notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," requires the element to have a name, so if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"ngModel")," to a certain element you need to add a name too."),(0,i.kt)("p",null,"For example, if you have a radio button like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<div radio-group name="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n</div>\n')),(0,i.kt)("p",null,"Then you should modify it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"ng2",ng2:!0},'<div radio-group name="responses" [(ngModel)]="responses">\n    <ion-item>\n        <ion-label>First value</ion-label>\n        <ion-radio value="1"></ion-radio>\n    </ion-item>\n\n    <ion-input type="hidden" [ngModel]="responses" name="responses"></ion-input>\n</div>\n')),(0,i.kt)("p",null,'In the example above, we\'re using a variable called "responses" to synchronise the data between the ',(0,i.kt)("inlineCode",{parentName:"p"},"radio-group")," and the hidden input. You can use whatever name you want."),(0,i.kt)("h2",{id:"i-cant-return-an-object-or-array-in-otherdata"},"I can't return an object or array in ",(0,i.kt)("inlineCode",{parentName:"h2"},"otherdata")),(0,i.kt)("p",null,"If you try to return an object or an array in any field inside ",(0,i.kt)("inlineCode",{parentName:"p"},"otherdata"),", the Web Service call will fail with the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Scalar type expected, array or object received\n")),(0,i.kt)("p",null,"Each field in ",(0,i.kt)("inlineCode",{parentName:"p"},"otherdata")," must be a string, number or boolean; it cannot be an object or array. To make it work, you need to encode your object or array into a JSON string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"'otherdata' => ['data' => json_encode($data)],\n")),(0,i.kt)("p",null,"The app will automatically parse this JSON and convert it back into an array or object."))}h.isMDXComponent=!0}}]);