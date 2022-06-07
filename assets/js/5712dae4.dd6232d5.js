"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20129],{64417:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=a(13904),l=["components"],o={title:"Tracker tips and tricks",sidebar_label:"Tips & tricks",tags:["Tracker"]},d=void 0,p={unversionedId:"development/tracker/tips/index",id:"development/tracker/tips/index",title:"Tracker tips and tricks",description:"Searching",source:"@site/general/development/tracker/tips/index.md",sourceDirName:"development/tracker/tips",slug:"/development/tracker/tips/",permalink:"/devdocs/general/development/tracker/tips/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tracker/tips/index.md",tags:[{label:"Tracker",permalink:"/devdocs/general/tags/tracker"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654599861,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"Tracker tips and tricks",sidebar_label:"Tips & tricks",tags:["Tracker"]},sidebar:"process",previous:{title:"Issue labels",permalink:"/devdocs/general/development/tracker/labels"}},u={},c=[{value:"Searching",id:"searching",level:2},{value:"Quick search",id:"quick-search",level:3},{value:"Advanced search",id:"advanced-search",level:3},{value:"Using filters",id:"using-filters",level:2},{value:"Creating a filter",id:"creating-a-filter",level:3},{value:"Adding a filter in a gadget to your dashboard",id:"adding-a-filter-in-a-gadget-to-your-dashboard",level:3},{value:"Useful queries",id:"useful-queries",level:3}],m={toc:c};function k(e){var t=e.components,d=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,n.Z)({frontMatter:o},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"searching"},"Searching"),(0,i.kt)("h3",{id:"quick-search"},"Quick search"),(0,i.kt)("p",null,"On every tracker page you can find search box. Quick search is much more powerful than you might think."),(0,i.kt)("p",null,"Examples of the quick searches:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Quick search"),(0,i.kt)("th",{parentName:"tr",align:null},"Advanced search equivalent"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MDL Unresolved Bug abra cadabra")," ",(0,i.kt)("img",{src:a(72344).Z,width:"254",height:"49"})),(0,i.kt)("td",{parentName:"tr",align:null},"Find all unresolved Bugs in Moodle project that contain words ",(0,i.kt)("inlineCode",{parentName:"td"},"abra cadabra")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'project = MDL AND issuetype = Bug AND resolution = Unresolved AND text ~ "abra cadabra"')," ",(0,i.kt)("img",{src:a(9975).Z,width:"666",height:"41"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"my Unresolved")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resolution = Unresolved AND assignee = currentUser()")),(0,i.kt)("td",{parentName:"tr",align:null},"Find all ongoing issues assigned to me")))),(0,i.kt)("p",null,"Quick search can pick up many other keywords, see more information on page ",(0,i.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/display/JIRA062/Using+Quick+Search"},"Using quick search")),(0,i.kt)("h3",{id:"advanced-search"},"Advanced search"),(0,i.kt)("p",null,"To get here either enter something in quick search or go to the link ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql="},"Tracker search page"),' and switch it to "Advanced" mode.\nNow you can enter queries in the Jira Query Language (JQL). Use as many AND, OR and parenthesis as you want. Some examples and interesting subqueries:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"JQL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"project = MDL")),(0,i.kt)("td",{parentName:"tr",align:null},"only issues inside project Moodle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resolution = Unresolved")),(0,i.kt)("td",{parentName:"tr",align:null},"Best way to search for open issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'type in (Improvement, "New Feature")')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"votes > 50")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"component in (Assignment, Gradebook)")),(0,i.kt)("td",{parentName:"tr",align:null},"where component is either Assignment or Gradebook")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"component = Assignment AND component = Gradebook")),(0,i.kt)("td",{parentName:"tr",align:null},"where both Assignment and Gradebook are listed as components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"labels = patch")),(0,i.kt)("td",{parentName:"tr",align:null},"issues containing particular label")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"labels is empty OR labels not in (triaged, triaging_in_progress)")),(0,i.kt)("td",{parentName:"tr",align:null},"issues NOT containing particular label(s)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=updatedDate%20%3E%20-7d"},(0,i.kt)("inlineCode",{parentName:"a"},"updatedDate > -7d"))),(0,i.kt)("td",{parentName:"tr",align:null},"updated in the last week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=assignee%20%3D%20currentUser%28%29%20AND%20resolution%20%3D%20Unresolved"},(0,i.kt)("inlineCode",{parentName:"a"},"assignee = currentUser() AND resolution = Unresolved"))),(0,i.kt)("td",{parentName:"tr",align:null},"open issues where you are an assignee")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=reporter%20%3D%20currentUser%28%29"},(0,i.kt)("inlineCode",{parentName:"a"},"reporter = currentUser()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues reported by you")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=Participants%20%20%3D%20currentUser()"},(0,i.kt)("inlineCode",{parentName:"a"},"Participants  = currentUser()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues where you commented, edited or otherwise participated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=%22Component%20watchers%22%20%3D%20currentUser()%20and%20resolution%20%3D%20Unresolved"},(0,i.kt)("inlineCode",{parentName:"a"},'"Component watchers" = currentUser() and resolution = Unresolved'))),(0,i.kt)("td",{parentName:"tr",align:null},"open issues in the components where you are an automatic watcher (only tracker admins can assign automatic watchers)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'assignee in membersOf("hq-developers"'),")"),(0,i.kt)("td",{parentName:"tr",align:null},"issues assigned to members of hq-developers group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=status%20changed%20to%20%22Waiting%20for%20peer%20review%22%20before%20startofday%28-7%29%20and%20status%20%3D%20%22Waiting%20for%20peer%20review%22%60"},(0,i.kt)("inlineCode",{parentName:"a"},'status changed to "Waiting for peer review" before startofday(-7) and status = "Waiting for peer review"')),"`"),(0,i.kt)("td",{parentName:"tr",align:null},"issues waiting for peer review for over a week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'status WAS NOT "Development in progress"  BEFORE "2011/02/02"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'issue in linkedIssues("MDL-12345")')),(0,i.kt)("td",{parentName:"tr",align:null},"issues linked to particular issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'issue in linkedIssues("MDL-12345","duplicated by")')),(0,i.kt)("td",{parentName:"tr",align:null},"Returns all the issues directly and indirectly duplicated by 'MDL-12345'. i.e. if there is 'MDL-12222'\u2009\u2009duplicated by 'MDL-12345'\u2009\u2009\u2009and 'MDL-11111'\u2009 duplicated by 'MDL-12222', both 'MDL-11111'\u2009and 'MDL-12222'\u2009will be returned as search results.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/issues/?jql=issue%20in%20favouriteIssues%28%29"},(0,i.kt)("inlineCode",{parentName:"a"},"issue in favouriteIssues()"))),(0,i.kt)("td",{parentName:"tr",align:null},"issues that you marked as favourite")))),(0,i.kt)("p",null,"More documentation on ","[https://confluence.atlassian.com/jirasoftwareserver071/advanced-searching-800707146.html Advanced searching]"),(0,i.kt)("h2",{id:"using-filters"},"Using filters"),(0,i.kt)("h3",{id:"creating-a-filter"},"Creating a filter"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In tracker, select ",(0,i.kt)("strong",{parentName:"p"},"Issues")," > ",(0,i.kt)("strong",{parentName:"p"},"Search for Issues"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a search and run the search query by pressing ",(0,i.kt)("strong",{parentName:"p"},"Enter")," or clicking the ",(0,i.kt)("strong",{parentName:"p"},"Search")," button to the right of the search box. For example, this is the query for untriaged issues in your component:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"component in (Assignment) AND resolution = Unresolved AND (labels is EMPTY OR labels not in (triaged)) ORDER BY created DESC\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the search query results are displayed, click the ",(0,i.kt)("strong",{parentName:"p"},"Save as"),' button and give it an appropriate name. For instance, for the previous query you can use "Untriaged Assignment issues".\n',(0,i.kt)("img",{src:a(13272).Z,width:"875",height:"109"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you can quickly access your filters but also you can subscribe to it, Click on ",(0,i.kt)("strong",{parentName:"p"},"Details"),":\n",(0,i.kt)("img",{src:a(37764).Z,width:"796",height:"411"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can also add ",(0,i.kt)("strong",{parentName:"p"},"New subscription")," if you want to be notified periodically about new issues in any of the filters you've created.\n",(0,i.kt)("img",{src:a(80689).Z,width:"616",height:"286"})))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Manage filters and subscriptions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can manage your filters and subscriptions on ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/ManageFilters.jspa"},"Manage filters")," page."),(0,i.kt)("p",{parentName:"div"},"Watchers automatically receive notifications about the updates of the issues they are watching. Using filter subscription you can either monitor issues that you are not watching or monitor issues that are in particular state and were not updated."))),(0,i.kt)("h3",{id:"adding-a-filter-in-a-gadget-to-your-dashboard"},"Adding a filter in a gadget to your dashboard"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In tracker, click ",(0,i.kt)("strong",{parentName:"li"},"Dashboards")," > ",(0,i.kt)("strong",{parentName:"li"},"Manage Dashboards")," and access to any of your dashboards or create one."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add gadget"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("strong",{parentName:"li"},"Filter Results")," gadget."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add it Now"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Finished"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Saved Filter")," input, search for and select your newly created filter."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using the previous query for untriaged assignment issues, the most recent untriaged issues should appear in reverse-date order."))),(0,i.kt)("h3",{id:"useful-queries"},"Useful queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20and%20resolution%20%3D%20unresolved%20and%20type%20in%20%28bug%29%20and%20%22Affected%20Branches%22%20!~%20MOODLE_310_STABLE%20and%20%22Affected%20Branches%22%20!~%20MOODLE_311_STABLE%20and%20reporter%20%3D%20currentUser%28%29"},"Issues reported by me not against current versions")," - make sure that you keep track of your own issues!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=component%20in%20%28componentsLeadByUser%28%29%29%20AND%20resolution%20%3D%20Unresolved%20AND%20updatedDate%20%3E%20-14d%20AND%20project%20%3D%20MDL%20AND%20%28%20labels%20is%20EMPTY%20OR%20labels%20not%20in%20%28triaged%2C%20triaging_in_progress%29%29%20ORDER%20BY%20updatedDate%20ASC"},"Untriaged issues in my components")," (works only for component leads)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=status%20changed%20to%20%22Waiting%20for%20peer%20review%22%20before%20startofday(-21)%20and%20status%20%3D%20%22Waiting%20for%20peer%20review%22"},"Waiting for peer review for 21 days")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?filter=19324"},"Integrated this week")," - subscribe to this filter on Fridays and keep yourself up-to-date with what is happening in Moodle")))}k.isMDXComponent=!0},9975:function(e,t){t.Z="data:image/png;base64,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"},13272:function(e,t,a){t.Z=a.p+"assets/images/savefilter1-3f83f592d9d0a243c50b8a64fb15b246.png"},37764:function(e,t,a){t.Z=a.p+"assets/images/savefilter2-771672b43018400ef76c8acb542fa5cc.png"},80689:function(e,t,a){t.Z=a.p+"assets/images/savefilter3-c1469f7725d361a0a14f699eca3bbc82.png"},72344:function(e,t){t.Z="data:image/png;base64,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"}}]);