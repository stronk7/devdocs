"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93793],{62394:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),s=["components"],i={title:"Moodle 3.0",tags:["Release notes","Moodle 3.0"],sidebar_position:-300,moodleVersion:"3.0"},p=void 0,m={unversionedId:"releases/3.0",id:"releases/3.0",title:"Moodle 3.0",description:"Release date: Monday, 16th November 2015",source:"@site/general/releases/3.0.md",sourceDirName:"releases",slug:"/releases/3.0",permalink:"/devdocs/general/releases/3.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.0.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.0",permalink:"/devdocs/general/tags/moodle-3-0"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655187100,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:-300,frontMatter:{title:"Moodle 3.0",tags:["Release notes","Moodle 3.0"],sidebar_position:-300,moodleVersion:"3.0"},sidebar:"releaseNotes",previous:{title:"Moodle 3.1.18",permalink:"/devdocs/general/releases/3.1/3.1.18"},next:{title:"Moodle 3.0.1",permalink:"/devdocs/general/releases/3.0/3.0.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Forum",id:"forum",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Other activity modules",id:"other-activity-modules",level:3},{value:"User interface and usability improvements",id:"user-interface-and-usability-improvements",level:3},{value:"Atto editor",id:"atto-editor",level:3},{value:"Enrolments",id:"enrolments",level:3},{value:"Administration",id:"administration",level:3},{value:"Other improvements",id:"other-improvements",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Translations",id:"translations",level:2}],k={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: Monday, 16th November 2015"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.0%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.0"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/30/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.0 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/30/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.2 or later (if upgrading from earlier versions, you must upgrade to 2.2.11 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.4.4 (always use latest PHP 5.4.x or 5.5.x on Windows - ",(0,l.kt)("a",{parentName:"li",href:"http://windows.php.net/download/"},"http://windows.php.net/download/"),"). For PHP 7.0.x support, upgrade to ",(0,l.kt)("a",{parentName:"li",href:"/general/releases/3.0/3.0.1"},"Moodle 3.0.1")," or later. PHP 7.1.x is not supported by Moodle 3.0."),(0,l.kt)("li",{parentName:"ul"},"Ghostscript should be installed for pdf annotation.")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Browser"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended version"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.google.com/intl/en_au/chrome/browser/"},"Google Chrome")),(0,l.kt)("td",{parentName:"tr",align:null},"30.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mozilla.org/en-US/"},"Mozilla Firefox")),(0,l.kt)("td",{parentName:"tr",align:null},"25.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.apple.com/safari/"},"Apple Safari")),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie"},"Microsoft Internet Explorer")),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null},"Version 10 is required for drag-and-drop upload of content from outside the browser into Moodle")))),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29801"},"MDL-29801")," - Allow users to delete personal messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27177"},"MDL-27177")," - Allow students to see each other's contact details in full profile without global permission if they are able to see each other's course profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46455"},"MDL-46455")," - Backup/restore functionality with new logging system"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46878"},"MDL-46878")," - Reset Dashboard for all users after changing the default Dashboard")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47494"},"MDL-47494")," - New question types from the UK Open University - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Select_missing_words_question_type"},"Select missing words"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Drag_and_drop_into_text_question_type"},"Drag and drop into text"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Drag_and_drop_onto_image_question_type"},"Drag and drop onto image")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Drag_and_drop_markers_question_type"},"Drag and drop markers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38214"},"MDL-38214")," - New Cloze subquestion types with shuffling of answers - MCS, MCVS, MCHS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50217"},"MDL-50217")," - Question types sorted with common ones at the top"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29771"},"MDL-29771")," - Interactive behaviour should show number of tries left in the Try again state")),(0,l.kt)("h3",{id:"forum"},"Forum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49682"},"MDL-49682")," - Make forum email template editable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46321"},"MDL-46321")," - Uninformative error when moving forum without first selecting destination"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50993"},"MDL-50993")," - Timed discussions are now displayed to students in a logical order"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50430"},"MDL-50430")," - Number of subscribers specified in forum subscriber list")),(0,l.kt)("h3",{id:"assignment"},"Assignment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49176"},"MDL-49176")," - Assignment marking guide 'flattens' instructions for markers and students"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49515"},"MDL-49515")," - Upgrade FPDI library in assignfeedback_editpdf to 1.5.4 to fix problems with PDF annotator on some files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50283"},"MDL-50283")," - Improve Rubric interface to include the ability to duplicate rows")),(0,l.kt)("h3",{id:"other-activity-modules"},"Other activity modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49028"},"MDL-49028")," - Wiki: Option to delete pages during course reset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40836"},"MDL-40836")," - File resource: New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/File_resource_settings"},"file resource setting")," option to display upload/modified date"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26501"},"MDL-26501")," - Glossary: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Glossary_settings"},"New setting for specifying visible tabs for each display format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50673"},"MDL-50673"),' - Workshop: display all participants on "Submission phase" page in a table'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50664"},"MDL-50664")," - Database activity: add setting to disallow managing of own entries after approval"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50658"},"MDL-50658")," - External tool: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/External_tool_settings"},"New 'Memberships' service")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49581"},"MDL-49581")," - Lesson: Remove high scores list feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49882"},"MDL-49882")," - Lesson: Essay questions are not imported into the lesson Module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50720"},"MDL-50720")," - Database activity: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Using_Database"},"Highlight database entries")," that are not yet approved.")),(0,l.kt)("h3",{id:"user-interface-and-usability-improvements"},"User interface and usability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51051"},"MDL-51051")," - Rename 'Categories and items' to 'Gradebook setup' and add link"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51250"},"MDL-51250")," - Show default section name when editing section details with default checkbox being checked"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49984"},"MDL-49984")," - Add visual blocks outlines to My profile page to help separate information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48947"},"MDL-48947"),' - Collect all course section editing buttons under one "Edit" dropdown'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51087"},"MDL-51087")," - Use client-side validation in the signup form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50113"},"MDL-50113")," - Improve display of long user and course names in Messaging"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50919"},"MDL-50919")," - Simplify the Manage tags page, allow to quickly change name, flag and official status of the tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51013"},"MDL-51013")," - Navbar button should appear for smaller screens only when the custom menu or language menu is not empty"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51260"},"MDL-51260")," - Use the new autocomplete form field for tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51296"},"MDL-51296")," - Add title to page when adding blog post"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38763"},"MDL-38763")," - Permission override UI should use JS confirmation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29763"},"MDL-29763")," - Add description to Portfolio settings page")),(0,l.kt)("h3",{id:"atto-editor"},"Atto editor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45515"},"MDL-45515")," - New table editing features in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Text_editor"},"Atto editor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49732"},"MDL-49732")," - Keyboard interaction for hyperlink in Atto (Ctrl+K)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50936"},"MDL-50936")," - More ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Text_editor"},"Atto editor")," Maths equation buttons (sum, sqrt, int, etc.)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50142"},"MDL-50142")," - Text editor preferences help pop-up")),(0,l.kt)("h3",{id:"enrolments"},"Enrolments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30674"},"MDL-30674")," - Set guest access key from enrolment methods page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30157"},"MDL-30157")," - Allow users to start manual enrolments right now"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49746"},"MDL-49746")," - Allow to sort enrolled users page by last course access"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48074"},"MDL-48074"),' - Group filter in enrolments list should have option "not in any group"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50890"},"MDL-50890")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Flat_file"},"Flat file enrolment")," scheduled task")),(0,l.kt)("h3",{id:"administration"},"Administration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49329"},"MDL-49329")," - Multiple improvements in the plugins installation/update system including ability to install several plugins at the same time"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49280"},"MDL-49280")," - New configuration setting to allow duplicate email addresses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51330"},"MDL-51330")," - Show scheduled tasks component in the cron log"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51261"},"MDL-51261")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Upgrade_key"},"Upgrade key")," - mechanism to protect anonymous web access to upgrade screens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50602"},"MDL-50602")," - New settings in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Automated_course_backup"},"Automated backup setup")," for deleting older backups and keeping a minimum number of backups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48438"},"MDL-48438")," - Add real name to email about login failures"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30960"},"MDL-30960")," - New option in email settings to specify SSL or TLS (SMTPSecure property of PHPMailer)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46623"},"MDL-46623"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51824"},"MDL-51824")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/CAS_server_%28SSO%29_authentication"},"CAS server")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/LDAP_authentication"},"LDAP authentication"),": Replace CLI scripts to synchronise users with scheduled tasks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39319"},"MDL-39319")," - Allow administrator to uninstall several languages in one single action"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50155"},"MDL-50155"),' - Move and rename "Common activities settings" link to be under "Manage activities" for consistency'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50631"},"MDL-50631")," - Display Moodle ASCII logo in CLI installer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46167"},"MDL-46167")," - New option for CLI installation: skip database"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50572"},"MDL-50572")," - Disable YouTube repository by default since it requires setting up"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51739"},"MDL-51739")," - Lock theme selector UI when $CFG->theme is hardcoded in config.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51478"},"MDL-51478")," - Enable Mobile services by default for sites with https"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19748"},"MDL-19748")," - Do not allow to edit tags in the default authenticated user role"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46398"},"MDL-46398")," - Make HTML5 video the default player for capable videos")),(0,l.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51132"},"MDL-51132"),' - Introduce course tagging as a replacement for user-course-tagging in the "Tags" block. See ',(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/30/en/Tags_block#Course_tagging_changes_in_Moodle_3.0"},"upgrade documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41042"},"MDL-41042")," - Course contacts shown in course listings no longer lag by an hour"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44273"},"MDL-44273")," - Back-off strategy for RSS feeds"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45981"},"MDL-45981")," - CAS Auth Config needs way to specify that curl should use SSLv3."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49891"},"MDL-49891")," - Add description meta to frontpage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25451"},"MDL-25451"),' - Go straight to "Permissions" from block context menu instead of "Assign roles" if they are not available'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50647"},"MDL-50647")," - Add 'not in group' section to group overview page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50956"},"MDL-50956"),' - Allow main menu block to be displayed "throughout the entire site"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28954"},"MDL-28954")," - Allow images and embedded files in the cohort descriptions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50371"},"MDL-50371")," - Use $CFG->gradepointdefault for new manual gradeitems and grade categories")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("p",null,"There are no new security issues since the ",(0,l.kt)("a",{parentName:"p",href:"/general/releases/2.9/2.9.3#security-issues"},"Moodle 2.9.3 release")," on 9 November 2015."),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46455"},"MDL-46455")," - Events must define fields mappings in order to be correctly restored (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Event_2#Backup.2Frestore"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50125"},"MDL-50125")," - Allow all plugins to inject links in the preferences page (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Navigation_API#Course_settings"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51247"},"MDL-51247")," - Revive / refresh / rebuild the autocomplete mform element (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#autocomplete"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50839"},"MDL-50839")," - Allow themes to set User menu avatar size (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Customising_the_theme_user_menu"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51458"},"MDL-51458")," - Allow for Travis-CI integration in community moodle.git clones (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Travis_Integration"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48494"},"MDL-48494")," - Make $plugin->component required for all plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43896"},"MDL-43896")," - Drop support for $module in version.php files for Moodle 3.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50645"},"MDL-50645")," - Cache the list of available callbacks per plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33564"},"MDL-33564")," - rss_error() should return a proper HTTP response code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37864"},"MDL-37864")," - New method to add help icons to the sortable table headers (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/tablelib.php"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51737"},"MDL-51737")," - Add ability to detect MS Edge in our browser sniffing code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51213"},"MDL-51213")," - external_format_text should be safe to call from web or webservice (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/How_to_contribute_a_web_service_function_to_core"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51413"},"MDL-51413")," - Add an additional return field in get_forums_by_courses in order to specify if the current user can create discussions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51217"},"MDL-51217")," - Using recaptcha is not possible outside auth_email plugin."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51107"},"MDL-51107")," - Add a callback to inject nodes in the category settings navigation (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Navigation_API#Category_settings"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50891"},"MDL-50891")," - is_web_crawler should be moved to useragent class"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50453"},"MDL-50453")," - Replace reserved word usage from \\core\\progress\\null (PHP7)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50009"},"MDL-50009")," - Prevent scheduled tasks from leaving unfinished db transactions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49821"},"MDL-49821")," - Some Web Services miss checks for guest and deleted users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50926"},"MDL-50926")," - Upgrade to phpunit 4.x"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50491"},"MDL-50491")," - New format_text option to exclude particular filters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50783"},"MDL-50783")," - Allow some ajax external functions to be called without a session (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/AJAX"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50150"},"MDL-50150"),' - Add "Blocks" feature to JS and PHP mustache engines (',(0,l.kt)("a",{parentName:"li",href:"/docs/guides/templates#blocks"},"documentation"),")")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.0"},"Notes de mise \xe0 jour de Moodle 3.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.0"},"Notas de Moodle 3.0"))))}h.isMDXComponent=!0}}]);