(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/mee2baa/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4131:function(e,t,a){"use strict";var n=a("ba66"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.peerOpened?e._e():a("hero-bar"),e.peerOpened?e._e():a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"}),a("div",{staticClass:"column is-6"},[a("login-form",{on:{"apikey-ok":e.peerConnect}})],1),a("div",{staticClass:"column is-3"})]),e.peerOpened?a("section",{staticClass:"section"},["Speaker"===e.role?a("main-room",{attrs:{con:e.peer}}):e._e(),"IP"===e.role?a("ip-room",{attrs:{con:e.peer}}):e._e()],1):e._e(),a("footer-bar")],1)},i=[],r=a("0b69"),o=a.n(r),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-dark"},[a("div",{staticClass:"hero-body"},[a("h1",{staticClass:"title"},[e._v("\n      MEE to BAA Meet\n    ")])])])}],u={},d=u,p=a("2877"),m=Object(p["a"])(d,c,l,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"hero is-dark"},[a("p",[e._v('"MEE to BAA" developed by GoldenBridge Inc. All rights reserved. Product powered by Skyway, Vue & Bulma')])])}],k={},g=k,b=Object(p["a"])(g,h,v,!1,null,null,null),y=b.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"field is-horizontal"},[e._m(0),a("div",{staticClass:"field-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.meetingID,expression:"meetingID"}],staticClass:"input",attrs:{name:"meeting-ID",type:"text",placeholder:"Meeting ID"},domProps:{value:e.meetingID},on:{input:function(t){t.target.composing||(e.meetingID=t.target.value)}}})])]),a("div",{staticClass:"field is-horizontal"},[e._m(1),a("div",{staticClass:"field-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input",attrs:{name:"user-name",type:"text",placeholder:"Your Name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})])]),a("div",{staticClass:"field is-horizontal"},[e._m(2),a("div",{staticClass:"field-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{name:"password",type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("div",{staticClass:"field is-horizontal"},[e._m(3),a("div",{staticClass:"field-body"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],staticClass:"select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.language=t.target.multiple?a:a[0]}}},e._l(e.$store.state.langDisp,(function(t){return a("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])})),0)])]),a("p",{staticClass:"label"},[e._v("\n      Microphone: "+e._s(e.foundAudioInput)+" / Camera: "+e._s(e.foundVideoInput)+"\n    ")]),a("div",{staticClass:"is-horizontal has-text-centered"},[a("button",{staticClass:"button is-info is-small is-fullwidth",attrs:{disabled:e.canOpen},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getApiKey(e.langVal)}}},[e._v("\n        "+e._s(e.buttonDisp)+"\n      ")]),a("button",{staticClass:"button is-success is-small is-fullwidth",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getApiKey("IP")}}},[e._v("\n        Im an interpreter\n      ")]),a("hr"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.devCode,expression:"devCode"}],attrs:{type:"password"},domProps:{value:e.devCode},on:{input:function(t){t.target.composing||(e.devCode=t.target.value)}}}),a("button",{staticClass:"button is-warning is-small is-fullwidth",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.superEnter(t)}}},[e._v("\n        Im a developer\n      ")])])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label is-large",attrs:{for:"meeting-ID"}},[e._v("Meeting ID")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label is-normal",attrs:{for:"user-name"}},[e._v("Your Name")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label is-normal",attrs:{for:"password"}},[e._v("Password")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-label"},[a("label",{staticClass:"label is-normal"},[e._v("Your Language")])])}];a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54");function C(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=I(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw i}}}}function I(e,t){if(e){if("string"===typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var O={props:{reqDevs:{type:String,default:""}},data:function(){return{result:"Please input your meeting-ID, name and password for login",meetingID:"test2",userName:"",password:"",language:"Japanese",foundAudioInput:"None",foundVideoInput:"None",canOpen:!0,canStart:!0,buttonDisp:"OPEN",devCode:""}},created:function(){var e=this,t={audio:!1,video:!1};navigator.mediaDevices.enumerateDevices().then((function(a){var n,s=C(a);try{for(s.s();!(n=s.n()).done;){var i=n.value;"audioinput"===i.kind?(e.foundAudioInput="OK",t.audio=!0):"videoinput"===i.kind&&(e.foundVideoInput="OK",t.video={width:{min:160,max:640},height:{min:120,max:480},frameRate:{min:5,max:15}})}}catch(r){s.e(r)}finally{s.f()}switch(e.$store.commit("setAvGetter",t),e.reqDevs){case"av":e.canOpen=!("OK"===e.foundVideoInput&&"OK"===e.foundAudioInput);break;case"a":e.canOpen=!("OK"===e.foundAudioInput);break;case"v":e.canOpen=!("OK"===e.foundVideoInput);break;default:e.canOpen=!1;break}}))},computed:{langVal:function(){return this.language===this.$store.state.langDisp.L1?"L1":"L2"}},methods:{superEnter:function(){var e=Math.random().toString(36).substring(2);this.$store.commit("setApiKey",this.devCode),this.$store.commit("setPeerName","dev-".concat(e)),this.$emit("apikey-ok")},ipEnter:function(){this.$store.commit("setPeerName","IP-".concat(this.userName)),this.$emit("apikey-ok")},getApiKey:function(e){var t=this,a=this,n={name:a.meetingID,user:a.userName,pw:a.password};fetch(a.$store.state.loginEndpoint,{method:"POST",headers:{"Content-Type":"text/plain"},mode:"cors",body:JSON.stringify(n)}).then((function(n){200===n.status?(a.buttonDisp=" Please wait...",n.text().then((function(n){a.$store.commit("setApiKey",n),t.$store.commit("setPeerName","".concat(e,"-").concat(t.userName)),t.$emit("apikey-ok")}))):console.log("login failed")}))}}},j=O,A=Object(p["a"])(j,S,w,!1,null,null,null),B=A.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-gapless"},[a("div",{staticClass:"column is-1"},[a("video",{staticClass:"sub",attrs:{id:"mine",controls:"",autoplay:"",playsinline:"",muted:""},domProps:{muted:!0,srcObject:e.myStream}})]),e._l(e.remoteStreamIds,(function(t){return a("div",{key:t.peerId,staticClass:"column is-1"},[a("video",{staticClass:"sub",attrs:{id:t.peerId+"-vd",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:e.main.remoteStreams[t.streamId]}})])}))],2),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e._v("\n            Speaker: "+e._s(e.$store.state.peerName)+"\n          ")])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"columns is-gapless"},[a("div",{staticClass:"column is-half"},[a("ul",[a("li",[a("button",{staticClass:"button is-primary is-fullwidth",on:{click:e.raiseToSpeak}},[e._v(e._s(e.speakBtn))])]),a("li",[a("button",{staticClass:"button is-warning is-fullwidth",on:{click:e.shareScreen}},[e._v("Share Screen")])]),a("li",[a("button",{staticClass:"button is-black is-fullwidth",on:{click:e.freeDiscussion}},[e._v(e._s(e.discBtn))])])])]),a("div",{staticClass:"column is-half"},[a("pre",[e._v(e._s(e.speakStack.join("\n")))])])])]),a("div",{staticClass:"card-footer"},[a("h3",[e._v(e._s(e.ipStatus))]),a("audio",{attrs:{id:"ip-voice",controls:""}})])])]),a("div",{staticClass:"column is-10"},[e.speakStack.length>0?a("h3",[e._v(e._s(e.speakStack[0])+" is speaking")]):e._e(),a("video",{staticClass:"top-video",attrs:{id:"top",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:null===e.broadcasting?e.mock:e.broadcasting}})])])])},E=[],T=a("2909"),$=(a("96cf"),a("1da1"));a("f559");function x(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=N(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw i}}}}function N(e,t){if(e){if("string"===typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var M=function(e,t){var a,n=void 0===t?1:t,s=void 0===t?.1:t,i=document.querySelectorAll("video"),r=document.getElementById("ip-voice"),o=x(i);try{for(o.s();!(a=o.n()).done;){var c=a.value;"mine"===c.id?(r.volume=0,r.pause()):c.id.startsWith(e)?(c.volume=n,r.volume=0,r.pause()):(c.volume=s,r.volume=1,r.play())}}catch(l){o.e(l)}finally{o.f()}},R={props:["con"],data:function(){return{speakBtn:"Speak",discBtn:"Free Disc.",speakMode:"watching",speakStack:[],myStream:null,mock:null,broadcasting:null,main:null,remoteStreamIds:[],ip:null}},computed:{ipStatus:function(){var e="No Ip.";if(null!==this.ip){var t,a=x(this.ip.members);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.startsWith("IP")){e="Ip. OK";break}}}catch(s){a.e(s)}finally{a.f()}}return e}},methods:{raiseToSpeak:function(){switch(this.speakMode){case"discussion":switch(this.speakBtn){case"Speak":this.bookSpeak();break;case"Please wait":this.withdrawSpeak();break;case"End":this.closeSpeak();break;default:break}break;case"watching":this.bookSpeak();break;case"waiting":this.withdrawSpeak();break;case"speaking":this.speakMode="watching",this.closeSpeak();break;default:break}},startSpeak:function(){this.speakMode="speaking",this.speakBtn="End",this.broadcasting=this.myStream,this.myStream.getAudioTracks()[0].enabled=!0,document.getElementById("top").volume=0,document.getElementById("ip-voice").volume=0,document.getElementById("ip-voice").pause()},bookSpeak:function(){this.main.send({type:"book-speak"}),"discussion"!==this.speakMode&&(this.speakMode="waiting"),this.speakBtn="Please wait",this.speakStack.push(this.$store.state.peerName),1===this.speakStack.length&&this.startSpeak()},closeSpeak:function(){var e=this;this.main.send({type:"close-speak"}),this.speakStack=this.speakStack.filter((function(t){return t!==e.$store.state.peerName})),"discussion"!==this.speakMode&&(this.speakMode="watching"),this.speakBtn="Speak",this.myStream.getAudioTracks()[0].enabled=!1,0===this.speakStack.length?this.broadcasting=null:this.setBroadcastStream(this.speakStack[0])},withdrawSpeak:function(){var e=this;this.main.send({type:"withdraw-speak"}),this.speakStack=this.speakStack.filter((function(t){return t!==e.$store.state.peerName})),"discussion"!==this.speakMode&&(this.speakMode="watching"),this.speakBtn="Speak"},shareScreen:function(){var e=this;navigator.mediaDevices.getDisplayMedia({audio:!0,video:{frameRate:10}}).then(function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new MediaStream([].concat(Object(T["a"])(a.getTracks()),Object(T["a"])(e.myStream.getAudioTracks()))),e.myStream=n,e.main.replaceStream(n),"speaking"===e.speakMode&&(document.getElementById("top").srcObject=n),a.getVideoTracks()[0].onended=Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia(e.$store.state.avGetter);case 2:e.myStream=t.sent,document.getElementById("top").srcObject=e.myStream,e.main.replaceStream(e.myStream),a=null;case 6:case"end":return t.stop()}}),t)})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},freeDiscussion:function(){"discussion"===this.speakMode?(this.main.send({type:"close-discussion"}),this.closeDiscussion()):(this.main.send({type:"free-discussion"}),this.startDiscussion())},startDiscussion:function(){this.broadcasting=null,this.speakStack.unshift("Free Disc."),this.speakMode="discussion",this.discBtn="Close Disc.",this.myStream.getAudioTracks()[0].enabled=!0,M("all",1)},closeDiscussion:function(){this.speakStack.shift(0),this.discBtn="Free Disc.",this.myStream.getAudioTracks()[0].enabled=!1,M("all",0),0===this.speakStack.length?(this.speakMode="watching",this.broadcasting=null):this.speakStack[0]===this.$store.state.peerName?this.startSpeak():(this.setBroadcastStream(this.speakStack[0]),"Please wait"===this.speakBtn?this.speakMode="waiting":this.speakMode="watching")},setBroadcastStream:function(e){var t,a=x(this.remoteStreamIds);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.peerId===e){this.broadcasting=this.main.remoteStreams[n.streamId],n.lang!==this.$store.state.myLang?(document.getElementById("top").volume=.1,document.getElementById("ip-voice").volume=1):(document.getElementById("top").volume=1,document.getElementById("ip-voice").volume=.1);break}}}catch(s){a.e(s)}finally{a.f()}}},created:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){var t,a,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,a=document.createElement("canvas"),n=a.getContext("2d"),n.fillText("No image...",0,100),t.mock=a.captureStream(1),e.next=7,navigator.mediaDevices.getUserMedia(this.$store.state.avGetter);case 7:t.myStream=e.sent,t.main=t.con.joinRoom("main",{mode:"sfu",stream:null!==t.myStream?t.myStream:t.mock}),t.myStream.getAudioTracks()[0].enabled=!1,t.main.on("open",(function(){t.main.members.length>0&&t.main.send({type:"ask-stack",info:t.main.members[0]})})),t.main.on("peerJoin",(function(e){console.log(e)})),t.main.on("stream",(function(e){t.remoteStreamIds.push({streamId:e.id,peerId:e.peerId,lang:e.peerId.substr(0,2)}),t.$nextTick().then((function(){M(s.$store.state.myLang)}))})),t.main.on("peerLeave",(function(e){t.remoteStreamIds=t.remoteStreamIds.filter((function(t){return t.peerId!==e})),e===s.speakStack[0]?(s.speakStack.shift(0),s.speakStack.length>0?s.setBroadcastStream(s.speakStack[0]):s.broadcasting=null):s.speakStack=s.speakStack.filter((function(t){return t!==e}))})),t.main.on("data",(function(e){var a=e.src,n=e.data;switch(n.type){case"ask-stack":n.info===s.$store.state.peerName&&t.main.send({type:"ans-stack",info:t.speakStack});break;case"ans-stack":t.speakStack=n.info;break;case"book-speak":s.speakStack.push(a),1===s.speakStack.length&&s.setBroadcastStream(a);break;case"close-speak":s.speakStack=s.speakStack.filter((function(e){return e!==a})),0===s.speakStack.length?s.broadcasting=null:s.speakStack[0]===s.$store.state.peerName?s.startSpeak():s.setBroadcastStream(s.speakStack[0]);break;case"withdraw-speak":s.speakStack=s.speakStack.filter((function(e){return e!==a}));break;case"free-discussion":s.startDiscussion();break;case"close-discussion":s.closeDiscussion();break;default:break}})),t.ip=t.con.joinRoom("ip",{mode:"sfu",stream:null}),t.ip.on("stream",(function(e){var t=document.getElementById("ip-voice");t.srcObject=e,t.play()}));case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},L=R,K=(a("dd41"),Object(p["a"])(L,D,E,!1,null,"fb2bcb32",null)),q=K.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-gapless"},e._l(e.remoteStreamIds,(function(t){return a("div",{key:t.peerId,staticClass:"column is-1"},[a("video",{staticClass:"sub",attrs:{id:t.peerId+"-vd",controls:"",autoplay:"",playsinline:"",muted:""},domProps:{muted:!0,srcObject:e.main.remoteStreams[t.streamId]}})])})),0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e._v("\n            Interpreter: "+e._s(e.$store.state.peerName)+" \n            "),a("span",{staticClass:"has-text-red"},[e._v(e._s(e.ipStatus))])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"columns is-gapless"},[a("div",{staticClass:"column is-half"},[a("ul",[a("li",[a("button",{staticClass:"button is-primary is-fullwidth",attrs:{disabled:!e.canHandover},on:{click:e.handOver}},[e._v(e._s(e.handoverBtn))])])])]),a("div",{staticClass:"column is-half"},[a("pre",[e._v(e._s(e.speakStack.join("\n")))])])]),a("div",{staticClass:"card-footer"},[a("audio",{attrs:{id:"ip-voice",muted:"",controls:""}}),e.handOverRequested?a("div",[a("h4",[e._v("交代可能ですか？ 残り："+e._s(e.handOverTime/1e3))]),a("ul",{staticClass:"is-inline-flex"},[a("li",[a("button",{staticClass:"button is-success is-small",on:{click:e.acceptHandOver}},[e._v("\n                    ACCEPT\n                  ")])]),a("li",[a("button",{staticClass:"button is-danger is-small",on:{click:e.rejectHandOver}},[e._v("\n                    REJECT NOW\n                  ")])])])]):e._e(),e.handOverRequesting?a("div",[a("h4",[e._v("交代確認中...")])]):e._e()])])])]),a("div",{staticClass:"column is-10"},[e.speakStack.length>0?a("h3",[e._v(e._s(e.speakStack[0])+" is speaking")]):e._e(),a("video",{staticClass:"top-video",attrs:{id:"top",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:null===e.broadcasting?e.mock:e.broadcasting}})])])])},J=[];function V(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=G(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw i}}}}function G(e,t){if(e){if("string"===typeof e)return F(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var U=function(e){var t,a=document.querySelectorAll("video"),n=V(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.volume=e}}catch(i){n.e(i)}finally{n.f()}},z={props:["con"],data:function(){return{speakStack:[],myStream:null,mock:null,broadcasting:null,main:null,remoteStreamIds:[],ip:null,canHandover:!1,myTurn:!1,handoverBtn:"HAND",handOverRequested:!1,handOverRequesting:!1,handOverTime:0,handingOver:null}},computed:{ipStatus:function(){return this.myTurn?"〇":""}},methods:{startDiscussion:function(){this.speakStack.unshift("Free Discussion"),U(1)},closeDiscussion:function(){this.speakStack.shift(0),U(0),0===this.speakStack.length?this.broadcasting=null:this.setBroadcastStream(this.speakStack[0])},setBroadcastStream:function(e){var t,a=V(this.remoteStreamIds);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.peerId===e){this.broadcasting=this.main.remoteStreams[n.streamId];break}}}catch(s){a.e(s)}finally{a.f()}},handOver:function(){this.ip.send({type:"handover"}),this.canHandover=!1,this.handOverRequesting=!0},acceptHandOver:function(){clearInterval(this.handingOver),this.ip.send({type:"accept-hand"}),this.canHandover=!0,this.handOverRequested=!1,this.handOverTime=0,this.myTurn=!0,this.processTurn()},rejectHandOver:function(){clearInterval(this.handingOver),this.ip.send({type:"reject-hand"}),this.handOverRequested=!1,this.handOverTime=0,this.myTurn=!1,this.processTurn()},processTurn:function(){this.myTurn?(this.myStream.getAudioTracks()[0].enabled=!0,document.getElementById("ip-voice").volume=0,document.getElementById("ip-voice").pause()):(this.myStream.getAudioTracks()[0].enabled=!1,document.getElementById("ip-voice").volume=1,document.getElementById("ip-voice").play())}},created:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 3:t.myStream=e.sent,t.main=t.con.joinRoom("main",{mode:"sfu",stream:null}),t.main.on("open",(function(){t.main.members.length>0&&t.main.send({type:"ask-stack",info:t.main.members[0]})})),t.main.on("peerJoin",(function(e){console.log(e)})),t.main.on("stream",(function(e){t.remoteStreamIds.push({streamId:e.id,peerId:e.peerId,lang:e.peerId.substr(0,2)})})),t.main.on("peerLeave",(function(e){t.remoteStreamIds=t.remoteStreamIds.filter((function(t){return t.peerId!==e})),e===a.speakStack[0]?(a.speakStack.shift(0),a.speakStack.length>0?a.setBroadcastStream(a.speakStack[0]):a.broadcasting=null):a.speakStack=a.speakStack.filter((function(t){return t!==e}))})),t.main.on("data",(function(e){var n=e.src,s=e.data;switch(s.type){case"ask-stack":s.info===a.$store.state.peerName&&t.main.send({type:"ans-stack",info:t.speakStack});break;case"ans-stack":t.speakStack=s.info;break;case"book-speak":a.speakStack.push(n),1===a.speakStack.length&&a.setBroadcastStream(n);break;case"close-speak":a.speakStack=a.speakStack.filter((function(e){return e!==n})),0===a.speakStack.length?a.broadcasting=null:a.setBroadcastStream(a.speakStack[0]);break;case"withdraw-speak":a.speakStack=a.speakStack.filter((function(e){return e!==n}));break;case"free-discussion":a.startDiscussion();break;case"close-discussion":a.closeDiscussion();break;default:break}})),t.ip=t.con.joinRoom("ip",{mode:"sfu",stream:t.myStream}),t.ip.on("open",(function(){0===t.ip.members.length&&(t.myTurn=!0),t.processTurn()})),t.ip.on("peerJoin",(function(){t.canHandover=!0})),t.ip.on("peerLeave",(function(){0===t.ip.members.length?(t.myTurn=!0,t.canHandover=!1):t.ip.members[0]===a.$store.state.peerName&&(t.myTurn=!0)})),t.ip.on("stream",(function(e){document.getElementById("ip-voice").srcObject=e,t.myTurn||(document.getElementById("ip-voice").volume=1)})),t.ip.on("data",(function(e){var a=e.src,n=e.data;switch(console.log(a),console.log(n),n.type){case"handover":t.handOverTime=1e4,t.handOverRequested=!0,t.handingOver=setInterval((function(){t.handOverTime-=1e3,t.handOverTime<0&&clearInterval(t.handingOver)}),1e3);break;case"accept-hand":t.handOverRequesting=!1,t.myTurn=!1,t.processTurn();break;case"reject-hand":t.handOverRequesting=!1,t.canHandover=!0,t.handOverRejected();break;default:break}}));case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},W=z,Y=(a("4131"),Object(p["a"])(W,H,J,!1,null,"f847fe76",null)),Q=Y.exports,X={name:"app",data:function(){return{peer:null,peerOpened:!1,role:"Speaker"}},components:{HeroBar:f,FooterBar:y,LoginForm:B,MainRoom:q,IpRoom:Q},methods:{peerConnect:function(){var e=this;"IP"===this.$store.state.myLang&&(this.role="IP"),this.peer=new o.a(this.$store.state.peerName,{key:this.$store.state.apiKey,debug:1}),this.peer.on("open",(function(){e.peerOpened=!0}))}}},Z=X,ee=(a("5c0b"),Object(p["a"])(Z,s,i,!1,null,null,null)),te=ee.exports,ae=a("2f62");n["a"].use(ae["a"]);var ne=new ae["a"].Store({state:{loginEndpoint:"https://sheepy-meme.builtwithdark.com/meebaalogin",apiKey:"",avGetter:{audio:!0,video:!0},myLang:"L1",langDisp:{L1:"Japanese",L2:"Chinese"},langDispShort:{L1:"Jp.",L2:"Cn."},peerName:""},mutations:{setApiKey:function(e,t){e.apiKey=t},setAvGetter:function(e,t){e.avGetter=t},setPeerName:function(e,t){e.myLang=t.substr(0,2),e.peerName=t}},actions:{}});n["a"].config.productionTip=!1,new n["a"]({store:ne,render:function(e){return e(te)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("e332"),s=a.n(n);s.a},b910:function(e,t,a){},ba66:function(e,t,a){},dd41:function(e,t,a){"use strict";var n=a("b910"),s=a.n(n);s.a},e332:function(e,t,a){}});
//# sourceMappingURL=app.8fbc8acc.js.map