(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3443:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.peerOpened?e._e():n("hero-bar"),e.peerOpened?e._e():n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-3"}),n("div",{staticClass:"column is-6"},[n("login-form",{on:{"apikey-ok":e.peerConnect}})],1),n("div",{staticClass:"column is-3"})]),e.peerOpened?n("section",{staticClass:"section"},["Speaker"===e.role?n("main-room",{attrs:{con:e.peer}}):e._e(),"IP"===e.role?n("ip-room",{attrs:{con:e.peer}}):e._e()],1):e._e(),n("footer-bar")],1)},s=[],i=n("0b69"),o=n.n(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-dark"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title"},[e._v("\n      MEE to BAA Conference\n    ")]),n("h2",{staticClass:"subtitle"},[e._t("default",[e._v("INDEX")])],2)])])},l=[],u={},d=u,p=n("2877"),m=Object(p["a"])(d,c,l,!1,null,null,null),f=m.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"hero is-dark"},[n("p",[e._v('"MEE to BAA" developed by GoldenBridge Inc. All rights reserved. Product powered by Skyway, Nuxt & Bulma')])])}],g={},b=g,y=Object(p["a"])(b,v,h,!1,null,null,null),k=y.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"field is-horizontal"},[e._m(0),n("div",{staticClass:"field-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.meetingID,expression:"meetingID"}],staticClass:"input",attrs:{name:"meeting-ID",type:"text",placeholder:"Meeting ID"},domProps:{value:e.meetingID},on:{input:function(t){t.target.composing||(e.meetingID=t.target.value)}}})])]),n("div",{staticClass:"field is-horizontal"},[e._m(1),n("div",{staticClass:"field-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input",attrs:{name:"user-name",type:"text",placeholder:"Your Name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})])]),n("div",{staticClass:"field is-horizontal"},[e._m(2),n("div",{staticClass:"field-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{name:"password",type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),n("div",{staticClass:"field is-horizontal"},[e._m(3),n("div",{staticClass:"field-body"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],staticClass:"select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.language=t.target.multiple?n:n[0]}}},e._l(e.languageOptions,(function(t){return n("option",{key:t},[e._v("\n            "+e._s(t)+"\n          ")])})),0)])]),n("p",{staticClass:"label"},[e._v("\n      Microphone: "+e._s(e.foundAudioInput)+" / Camera: "+e._s(e.foundVideoInput)+"\n    ")]),n("div",{staticClass:"is-horizontal has-text-centered"},[n("button",{staticClass:"button is-info",attrs:{disabled:e.canOpen},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getApiKey(t)}}},[e._v("\n        "+e._s(e.buttonDisp)+"\n      ")]),n("button",{staticClass:"button is-success",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.superEnter(t)}}},[e._v("\n        "+e._s(e.buttonDisp)+"\n      ")]),n("button",{staticClass:"button is-success",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.ipEnter(t)}}},[e._v("\n        Im an interpreter\n      ")])])])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field-label"},[n("label",{staticClass:"label is-large",attrs:{for:"meeting-ID"}},[e._v("Meeting ID")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field-label"},[n("label",{staticClass:"label is-normal",attrs:{for:"user-name"}},[e._v("Your Name")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field-label"},[n("label",{staticClass:"label is-normal",attrs:{for:"password"}},[e._v("Password")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field-label"},[n("label",{staticClass:"label is-normal"},[e._v("Your Language")])])}];n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54");function _(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=I(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function I(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var O={props:{reqDevs:{type:String,default:""}},data:function(){return{result:"Please input your meeting-ID, name and password for login",meetingID:"",userName:"",password:"",language:"Japanese",languageOptions:["Japanese","Chinese"],foundAudioInput:"None",foundVideoInput:"None",canOpen:!0,canStart:!0,buttonDisp:"OPEN"}},created:function(){var e=this,t={audio:!1,video:!1};navigator.mediaDevices.enumerateDevices().then((function(n){var a,r=_(n);try{for(r.s();!(a=r.n()).done;){var s=a.value;"audioinput"===s.kind?(e.foundAudioInput="OK",t.audio=!0):"videoinput"===s.kind&&(e.foundVideoInput="OK",t.video={width:{min:160,max:640},height:{min:120,max:480},frameRate:{min:5,max:15}})}}catch(i){r.e(i)}finally{r.f()}switch(e.$store.commit("setAvGetter",t),e.reqDevs){case"av":e.canOpen=!("OK"===e.foundVideoInput&&"OK"===e.foundAudioInput);break;case"a":e.canOpen=!("OK"===e.foundAudioInput);break;case"v":e.canOpen=!("OK"===e.foundVideoInput);break;default:e.canOpen=!1;break}}))},methods:{superEnter:function(){var e=this.language===this.languageOptions[0]?"L1":"L2";this.$store.commit("setPeerName","".concat(e,"-").concat(this.userName)),this.$emit("apikey-ok")},ipEnter:function(){this.$store.commit("setPeerName","IP-".concat(this.userName)),this.$emit("apikey-ok")},getApiKey:function(){var e=this,t=this,n={name:t.meetingID,user:t.userName,pw:t.password};fetch(t.$store.state.loginEndpoint,{method:"POST",headers:{"Content-Type":"text/plain"},mode:"cors",body:JSON.stringify(n)}).then((function(n){200===n.status?(t.buttonDisp=" Please wait...",n.text().then((function(n){t.$store.commit("setApiKey",n);var a=e.language===e.languageOptions[0]?"L1":"L2";e.$store.commit("setPeerName","".concat(a,"-").concat(e.userName)),e.$emit("apikey-ok")}))):console.log("login failed")}))}}},j=O,x=Object(p["a"])(j,S,w,!1,null,null,null),E=x.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container is-fluid"},[n("audio",{attrs:{id:"ip-voice"}}),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-1"},[n("video",{staticClass:"sub",attrs:{id:"mine",controls:"",autoplay:"",playsinline:"",muted:""},domProps:{muted:!0,srcObject:e.myStream}})]),e._l(e.remoteStreamIds,(function(t){return n("div",{key:t.peerId,staticClass:"column is-1"},[n("video",{staticClass:"sub",attrs:{id:t.peerId+"-vd",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:e.main.remoteStreams[t.streamId]}})])}))],2),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("\n            Speaker: "+e._s(e.$store.state.peerName)+"\n          ")])]),n("div",{staticClass:"card-content"},[n("ul",[n("li",[n("button",{staticClass:"button is-primary is-fullwidth",on:{click:e.raiseToSpeak}},[e._v(e._s(e.speakBtn))])]),n("li",[n("button",{staticClass:"button is-warning is-fullwidth",on:{click:e.shareScreen}},[e._v("Share Screen")])])]),n("pre",[e._v(e._s(e.speakStack.join("\n")))])])])]),n("div",{staticClass:"column is-10"},[e.speakStack.length>0?n("h3",[e._v(e._s(e.speakStack[0])+" is speaking")]):e._e(),n("video",{staticClass:"top-video",attrs:{id:"top",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:null===e.broadcasting?e.mock:e.broadcasting}})])])])},A=[],N=n("2909"),P=(n("96cf"),n("1da1"));n("f559");function D(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=B(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function B(e,t){if(e){if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=function(e,t){var n,a=void 0===t?1:t,r=void 0===t?.1:t,s=document.querySelectorAll("video"),i=document.getElementById("ip-voice"),o=D(s);try{for(o.s();!(n=o.n()).done;){var c=n.value;"mine"===c.id?i.volume=0:c.id.startsWith(e)?(c.volume=a,i.volume=0):(c.volume=r,i.volume=1)}}catch(l){o.e(l)}finally{o.f()}},R={props:["con"],data:function(){return{speakBtn:"Speak",speakMode:"watching",speakStack:[],myStream:null,mock:null,broadcasting:null,main:null,remoteStreamIds:[],ip:null}},methods:{raiseToSpeak:function(){switch(this.speakMode){case"watching":this.bookSpeak();break;case"waiting":this.withdrawSpeak();break;case"speaking":this.speakMode="watching",this.closeSpeak();break;default:break}},startSpeak:function(){this.speakMode="speaking",this.speakBtn="End",this.broadcasting=this.myStream,this.myStream.getAudioTracks()[0].enabled=!0,document.getElementById("top").volume=0},bookSpeak:function(){this.main.send({type:"book-speak"}),this.speakMode="waiting",this.speakBtn="Please wait",this.speakStack.push(this.$store.state.peerName),1===this.speakStack.length&&this.startSpeak()},closeSpeak:function(){this.main.send({type:"close-speak"}),this.speakStack.shift(0),this.speakMode="watching",this.speakBtn="Speak",this.myStream.getAudioTracks()[0].enabled=!1,0===this.speakStack.length?this.broadcasting=null:this.setBroadcastStream(this.speakStack[0])},withdrawSpeak:function(){var e=this;this.main.send({type:"withdraw-speak"}),this.speakStack=this.speakStack.filter((function(t){return t!==e.$store.state.peerName})),this.speakMode="watching",this.speakBtn="Speak"},shareScreen:function(){var e=this;navigator.mediaDevices.getDisplayMedia({audio:!0,video:{frameRate:10}}).then(function(){var t=Object(P["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=new MediaStream([].concat(Object(N["a"])(n.getTracks()),Object(N["a"])(e.myStream.getAudioTracks()))),e.myStream=a,e.main.replaceStream(a),"speaking"===e.speakMode&&(document.getElementById("top").srcObject=a),n.getVideoTracks()[0].onended=Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia(e.$store.state.avGetter);case 2:e.myStream=t.sent,e.main.replaceStream(e.myStream),n=null;case 5:case"end":return t.stop()}}),t)})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},setBroadcastStream:function(e){var t,n=D(this.remoteStreamIds);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.peerId===e){this.broadcasting=this.main.remoteStreams[a.streamId],a.lang!==this.$store.state.myLang?(document.getElementById("top").volume=.1,document.getElementById("ip-voice").volume=1):(document.getElementById("top").volume=1,document.getElementById("ip-voice").volume=.1);break}}}catch(r){n.e(r)}finally{n.f()}}},created:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,navigator.mediaDevices.getUserMedia(this.$store.state.avGetter);case 3:t.myStream=e.sent,t.myStream.getAudioTracks()[0].enabled=!1,t.main=t.con.joinRoom("main",{mode:"sfu",stream:t.myStream}),t.main.on("peerJoin",(function(e){console.log(e)})),t.main.on("stream",(function(e){t.remoteStreamIds.push({streamId:e.id,peerId:e.peerId,lang:e.peerId.substr(0,2)}),t.$nextTick().then((function(){T(n.$store.state.myLang)}))})),t.main.on("peerLeave",(function(e){t.remoteStreamIds=t.remoteStreamIds.filter((function(t){return t.peerId!==e}))})),t.main.on("data",(function(e){var t=e.src,a=e.data;switch(a.type){case"book-speak":n.speakStack.push(t),1===n.speakStack.length&&n.setBroadcastStream(t);break;case"close-speak":n.speakStack.shift(0),0===n.speakStack.length?n.broadcasting=null:n.speakStack[0]===n.$store.state.peerName?n.startSpeak():n.setBroadcastStream(n.speakStack[0]);break;case"withdraw-speak":n.speakStack=n.speakStack.filter((function(e){return e!==t}));break;default:break}})),t.ip=t.con.joinRoom("ip",{mode:"sfu",stream:null}),t.ip.on("stream",(function(e){document.getElementById("ip-voice").srcObject=e}));case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=document.createElement("canvas"),t=e.getContext("2d");t.fillText("No image...",0,100),this.mock=e.captureStream(10),console.log("mounted")}},L=R,K=(n("8366"),Object(p["a"])(L,$,A,!1,null,"cacd1244",null)),G=K.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container is-fluid"},[n("audio",{attrs:{id:"ip-voice"}}),n("div",{staticClass:"columns"},e._l(e.remoteStreamIds,(function(t){return n("div",{key:t.peerId,staticClass:"column is-1"},[n("video",{staticClass:"sub",attrs:{id:t.peerId+"-vd",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:e.main.remoteStreams[t.streamId]}})])})),0),n("div",{staticClass:"columns"},[e._m(0),n("div",{staticClass:"column is-10"},[n("video",{staticClass:"top-video",attrs:{id:"top",controls:"",autoplay:"",playsinline:""},domProps:{srcObject:null===e.broadcasting?e.mock:e.broadcasting}})])])])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column is-2"},[n("p",[e._v("Controllers here")])])}],z={props:["con"],data:function(){return{myStream:null,broadcasting:null,main:null,remoteStreamIds:[],ip:null}},methods:{},created:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,navigator.mediaDevices.getUserMedia(this.$store.state.avGetter);case 3:t.myStream=e.sent,t.myStream.getAudioTracks()[0].enabled=!1,t.main=t.con.joinRoom("main",{mode:"sfu",stream:null}),t.main.on("peerJoin",(function(e){console.log(e)})),t.main.on("stream",(function(e){t.remoteStreamIds.push({streamId:e.id,peerId:e.peerId,lang:e.peerId.substr(0,2)})})),t.main.on("peerLeave",(function(e){t.remoteStreamIds=t.remoteStreamIds.filter((function(t){return t.peerId!==e}))})),t.ip=t.con.joinRoom("ip",{mode:"sfu",stream:t.myStream}),t.ip.on("open",(function(){t.ip.members.length>1&&(t.myStream.getAudioTracks()[0].enabled=!1)})),t.ip.on("stream",(function(e){document.getElementById("ip-voice").srcObject=e}));case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},U=z,q=(n("7e66"),Object(p["a"])(U,J,V,!1,null,"7c26651d",null)),Y=q.exports,F={name:"app",data:function(){return{peer:null,peerOpened:!1,role:"Speaker"}},components:{HeroBar:f,FooterBar:k,LoginForm:E,MainRoom:G,IpRoom:Y},methods:{peerConnect:function(){var e=this;"IP"===this.$store.state.myLang&&(this.role="IP"),this.peer=new o.a(this.$store.state.peerName,{key:this.$store.state.apiKey,debug:1}),this.peer.on("open",(function(){e.peerOpened=!0}))}}},H=F,W=(n("5c0b"),Object(p["a"])(H,r,s,!1,null,null,null)),X=W.exports,Q=n("2f62");a["a"].use(Q["a"]);var Z=new Q["a"].Store({state:{loginEndpoint:"https://sheepy-meme.builtwithdark.com/meebaalogin",apiKey:"",avGetter:{audio:!0,video:!0},myLang:"L1",peerName:""},mutations:{setApiKey:function(e,t){e.apiKey=t},setAvGetter:function(e,t){e.avGetter=t},setPeerName:function(e,t){e.myLang=t.substr(0,2),e.peerName=t}},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:Z,render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},"721f":function(e,t,n){},"7e66":function(e,t,n){"use strict";var a=n("721f"),r=n.n(a);r.a},8366:function(e,t,n){"use strict";var a=n("3443"),r=n.n(a);r.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.c4fc9496.js.map