(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"21e3":function(t){t.exports=JSON.parse('[{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/tiny.json","data":[["test","simplejson 3.17.2","rapidjson 0.5.1","ujson 2.0.3","json 2.0.9"],["serialize","0.00437","0.00074","0.00072","0.00263"],["deserialize","0.00208","0.00077","0.00044","0.00257"]],"timestamp_s":1608905195,"title":"tiny (0 objects)"},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/small.json","data":[["test","simplejson 3.17.2","rapidjson 0.5.1","ujson 2.0.3","json 2.0.9"],["serialize","0.01745","0.00621","0.00855","0.01285"],["deserialize","0.00870","0.01130","0.00692","0.02129"]],"timestamp_s":1608905195,"title":"small (1 object)"},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/medium.json","data":[["test","simplejson 3.17.2","rapidjson 0.5.1","ujson 2.0.3","json 2.0.9"],["serialize","0.12141","0.06176","0.08450","0.10459"],["deserialize","0.06475","0.12455","0.07286","0.20219"]],"timestamp_s":1608905195,"title":"medium (10 objects)"},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/large.json","data":[["test","simplejson 3.17.2","rapidjson 0.5.1","ujson 2.0.3","json 2.0.9"],["serialize","1.17920","0.64744","0.84299","1.02734"],["deserialize","0.69249","1.28564","0.85328","2.17181"]],"timestamp_s":1608905195,"title":"large (100 objects)"},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/twitter.json","data":[["test","simplejson 3.17.2","rapidjson 0.5.1","ujson 2.0.3","json 2.0.9"],["serialize","1.19158","0.65207","0.84423","1.02697"],["deserialize","0.68776","1.27926","0.85032","2.16709"]],"timestamp_s":1608905195,"title":"twitter (630 kb)"}]')},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("TopBar",{attrs:{frameworks:t.frameworks},on:{input:t.tabChanged},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}}),s("v-main",[s("v-alert",{staticClass:"text-center",staticStyle:{cursor:"pointer"},attrs:{type:"warning",border:"left",elevation:"2"},on:{click:t.clearUserSelection},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[t._v(" Showing results for "),s("span",{staticClass:"font-italic"},[t._v(t._s(t.userFileName))]),t._v(" "),s("span",{staticClass:"font-weight-bold"},[t._v("click to reset")])]),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"10",lg:"4"}},[s("v-sheet",{staticClass:"mx-auto pa-3",style:"border-color: "+t.$vuetify.theme.currentTheme.accent+";",attrs:{outlined:"",elevation:"4"}},[s("v-expansion-panels",{attrs:{flat:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"primary"}},[t._v(" $expand ")])]},proxy:!0}])},[s("span",{staticClass:"text-h6"},[t._v("Benchmark with your JSON! ("+t._s(t.frameworks[t.selectedTab].title)+")")])]),s("v-expansion-panel-content",[s("UserBenchmark",{attrs:{frameworks:t.frameworks,"selected-framework":t.selectedTab},on:{input:t.userJsonSent}})],1)],1)],1)],1)],1),s("v-col",{staticClass:"mt-5",attrs:{cols:"12"}},[s("h1",[t._v("Predefined JSONs")]),s("Results",{attrs:{"charts-data":t.results[t.selectedTab]}})],1)],1)],1)],1),s("Footer"),s("v-snackbar",{attrs:{top:"",color:t.snackbarColor,timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},r=[],o=(s("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},t._l(t.chartsData,(function(e){return s("v-col",{key:e.title,attrs:{cols:"12",lg:"6"}},[s("span",{staticClass:"text-body-1"},[t._v(t._s(e.title))]),s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,r=a.attrs;return[e.url?s("v-btn",t._g(t._b({attrs:{icon:"",href:e.url,target:"_blank"}},"v-btn",r,!1),n),[s("v-icon",[t._v("mdi-open-in-new")])],1):t._e()]}}],null,!0)},[s("span",[t._v("View JSON")])]),s("v-chart",{attrs:{autoresize:"",options:t.generateOptions(e.title,e.data),theme:t.chartTheme}}),s("span",{staticClass:"text-body-2 font-italic timestamp"},[t._v(t._s(t._f("dateTime")(e.timestamp_s)))])],1)})),1)],1)}),i=[],l=(s("007d"),s("d28f"),s("627c"),s("0352"),s("b11c"),s("c1df")),c=s.n(l),u={name:"Results",props:{chartsData:{type:Array,default:function(){return[]}}},filters:{dateTime:function(t){if(!t)return"";var e=c.a.unix(t);return e.format("MMMM Do YYYY, HH:mm:ss")}},methods:{generateOptions:function(t,e){for(var s=this.$vuetify.breakpoint.smAndDown,a={grid:{containLabel:s,bottom:"5%"},backgroundColor:this.$vuetify.theme.dark?"#121212":void 0,toolbox:{top:"5%",feature:{saveAsImage:{title:"Save as PNG"}}},legend:{},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},dataset:{source:e},xAxis:{type:"category"},yAxis:{type:"value",name:"Time (ms)",nameLocation:"middle",nameGap:45},series:[]},n=0;n<e[0].length-1;n++)a.series.push({type:"bar"});return a}},computed:{chartTheme:function(){return this.$vuetify.theme.dark?"dark":"light"}},data:function(){return{}}},f=u,d=(s("9ee7"),s("2877")),p=s("6544"),b=s.n(p),j=s("8336"),m=s("62ad"),h=s("a523"),v=s("132d"),g=s("0fd9"),k=s("3a2f"),y=Object(d["a"])(f,o,i,!1,null,"05b920ca",null),_=y.exports;b()(y,{VBtn:j["a"],VCol:m["a"],VContainer:h["a"],VIcon:v["a"],VRow:g["a"],VTooltip:k["a"]});var w=s("ec26"),x=s("21e3"),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{style:t.footerColor,attrs:{app:"",absolute:""}},[s("v-col",{staticClass:"text-center text-caption",attrs:{cols:"12"}},[t._v(" made with "),s("v-icon",{attrs:{dense:"",color:"red"}},[t._v("mdi-heart")]),t._v(" by "),s("a",{attrs:{href:"https://www.linkedin.com/in/ronlut/"}},[t._v("ronlut")]),t._v(" | icons by "),s("a",{attrs:{href:"https://www.flaticon.com/authors/phatplus",title:"phatplus",target:"_blank"}},[t._v("phatplus")])],1)],1)},T=[],S={name:"Footer",computed:{footerColor:function(){return this.$vuetify.theme.dark?"":"background-color: #f5f5f5;"}}},O=S,V=s("553a"),C=Object(d["a"])(O,z,T,!1,null,null,null),$=C.exports;b()(C,{VCol:m["a"],VFooter:V["a"],VIcon:v["a"]});var P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-file-input",{ref:"fileInput",attrs:{accept:"application/json",placeholder:"Select a JSON file",rules:t.rules,"prepend-icon":"mdi-code-json","show-size":""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),s("v-btn",{attrs:{"x-large":"",loading:t.loading,color:t.$vuetify.theme.currentTheme.success,disabled:!t.file||t.$refs.fileInput.hasError},on:{click:t.upload}},[t._v(" Test! ")])],1)},R=[],B=(s("d3b7"),s("bc3a")),E=s.n(B),F={name:"UserBenchmark",props:{selectedFramework:{type:String,default:""},frameworks:{type:Object,default:function(){return{}}}},data:function(){return{file:null,loading:!1,rules:[function(t){return!t||t.size<2097152||"File size must be less than 2 MB!"}]}},methods:{upload:function(){var t=this;this.loading=!0;var e=new FormData;e.append("file",this.file);var s=E.a.post("/".concat(this.selectedFramework),e,{baseURL:"https://api.jsonperf.com",headers:{"Content-Type":"multipart/form-data"}});s.finally((function(){t.$refs.fileInput.reset(),t.loading=!1})),this.$emit("input",s)}}},A=F,J=s("23a7"),N=Object(d["a"])(A,P,R,!1,null,null,null),D=N.exports;b()(N,{VBtn:j["a"],VFileInput:J["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",dense:"","clipped-left":"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{value:t.value,centered:"",grow:"","show-arrows":""},on:{change:function(e){return t.$emit("input",e)}}},t._l(t.frameworks,(function(e,s,n){return a("v-tab",{key:s,attrs:{href:"#"+s,disabled:n>1}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),1)]},proxy:!0}])},[a("v-img",{staticClass:"mx-2",attrs:{src:s("cf05"),"max-height":"40","max-width":"40",contain:""}}),a("v-spacer"),a("v-toolbar-title",{style:t.$vuetify.breakpoint.smAndDown?"font-size: 0.8rem;":""},[t._v("JSON Libraries Performance Benchmark ")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",href:"https://github.com/ronlut/jsonperf",target:"_blank"}},"v-btn",n,!1),s),[a("v-icon",[t._v("mdi-github")])],1)]}}])},[a("span",[t._v("GitHub")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.toggleDark}},"v-btn",n,!1),s),[a("v-icon",[t._v("mdi-brightness-6")])],1)]}}])},[a("span",[t._v("Toggle Theme")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",href:"mailto:hi@jsonperf.com",target:"_blank"}},"v-btn",n,!1),s),[a("v-icon",[t._v("mdi-message")])],1)]}}])},[a("span",[t._v("Feedback")])])],1)},U=[],I=s("5530"),L=s("2f62"),G={name:"TopBar",props:{value:null,frameworks:{}},computed:Object(I["a"])({},Object(L["b"])(["dark"])),methods:{toggleDark:function(){this.$store.commit("toggleDark"),this.$vuetify.theme.dark=this.dark}},created:function(){this.$vuetify.theme.dark=this.dark}},H=G,Y=s("40dc"),q=s("adda"),W=s("2fa4"),K=s("71a3"),Q=s("fe57"),X=s("2a7f"),Z=Object(d["a"])(H,M,U,!1,null,null,null),tt=Z.exports;b()(Z,{VAppBar:Y["a"],VBtn:j["a"],VIcon:v["a"],VImg:q["a"],VSpacer:W["a"],VTab:K["a"],VTabs:Q["a"],VToolbarTitle:X["a"],VTooltip:k["a"]});var et={components:{TopBar:tt,UserBenchmark:D,Footer:$,Results:_},RESULTS:{python3:w,python2:x},props:{source:String},computed:{userFileName:function(){var t=25,e=this.results[this.selectedTab],s=e[0].title;return s.length>t?s.substring(0,t-3)+"...":s},results:function(){var t=Object.assign({},this.$options.RESULTS);return this.userResults?(t[this.selectedTab]=this.userResults,t):t},showAlert:function(){return!!this.userResults}},data:function(){return{loading:!1,snackbar:!1,snackbarText:"",snackbarColor:"",userResults:null,frameworks:{python3:{title:"Python 3",icon:"mdi-language-python"},python2:{title:"Python 2",icon:"mdi-language-python"},future:{title:"More on the way",icon:"mdi-dots-horizontal"}},selectedTab:"python3"}},methods:{userJsonSent:function(t){var e=this;t.then((function(t){e.scrollToTop(),e.userResults=t.data})).catch((function(t){e.showSnackbar("".concat(t.message,": ").concat(t.response.data),"error")}))},showSnackbar:function(t,e){this.snackbarText=t,this.snackbarColor=e,this.snackbar=!0},clearUserSelection:function(){this.userResults=null},scrollToTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})},tabChanged:function(){this.scrollToTop(),this.userResults&&(this.showSnackbar("Custom JSON result was reset","info"),this.clearUserSelection())}}},st=et,at=s("0798"),nt=s("7496"),rt=s("cd55"),ot=s("49e2"),it=s("c865"),lt=s("0393"),ct=s("f6c4"),ut=s("8dd9"),ft=s("2db4"),dt=Object(d["a"])(st,n,r,!1,null,null,null),pt=dt.exports;b()(dt,{VAlert:at["a"],VApp:nt["a"],VCol:m["a"],VContainer:h["a"],VExpansionPanel:rt["a"],VExpansionPanelContent:ot["a"],VExpansionPanelHeader:it["a"],VExpansionPanels:lt["a"],VIcon:v["a"],VMain:ct["a"],VRow:g["a"],VSheet:ut["a"],VSnackbar:ft["a"]});var bt=s("8c4f");a["a"].use(bt["a"]);var jt=[],mt=new bt["a"]({routes:jt}),ht=mt,vt=s("0e44");a["a"].use(L["a"]);var gt=new L["a"].Store({state:{dark:!1},mutations:{toggleDark:function(t){t.dark=!t.dark}},actions:{},modules:{},plugins:[Object(vt["a"])()]}),kt=s("9ca8"),yt=(s("94b1"),s("f309"));a["a"].use(yt["a"]);var _t=new yt["a"]({theme:{options:{}}}),wt=s("a584");a["a"].config.productionTip=!1,a["a"].component("v-chart",kt["a"]),a["a"].use(wt["a"],{config:{id:"G-2FB2J1LW8R"}}),new a["a"]({router:ht,store:gt,vuetify:_t,render:function(t){return t(pt)}}).$mount("#app")},"689f":function(t,e,s){},"9ee7":function(t,e,s){"use strict";var a=s("689f"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.a796a3ac.png"},ec26:function(t){t.exports=JSON.parse('[{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/tiny.json","title":"tiny (0 objects)","timestamp_s":1608905188,"data":[["test","json 2.0.9","orjson 3.4.6","rapidjson 1.0","simplejson 3.17.2","ujson 4.0.1"],["serialize","0.00228","0.00036","0.00053","0.00471","0.00062"],["deserialize","0.00204","0.00035","0.00056","0.00206","0.00056"]]},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/small.json","title":"small (1 object)","timestamp_s":1608905188,"data":[["test","json 2.0.9","orjson 3.4.6","rapidjson 1.0","simplejson 3.17.2","ujson 4.0.1"],["serialize","0.01258","0.00202","0.00690","0.01919","0.00579"],["deserialize","0.01026","0.00521","0.00838","0.01221","0.00727"]]},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/medium.json","title":"medium (10 objects)","timestamp_s":1608905188,"data":[["test","json 2.0.9","orjson 3.4.6","rapidjson 1.0","simplejson 3.17.2","ujson 4.0.1"],["serialize","0.10131","0.01712","0.07143","0.13412","0.06357"],["deserialize","0.08210","0.05455","0.09644","0.09753","0.07995"]]},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/large.json","title":"large (100 objects)","timestamp_s":1608905188,"data":[["test","json 2.0.9","orjson 3.4.6","rapidjson 1.0","simplejson 3.17.2","ujson 4.0.1"],["serialize","1.06908","0.19067","0.66925","1.32008","0.65780"],["deserialize","0.86299","0.60634","1.06482","1.00604","0.93033"]]},{"url":"https://github.com/ronlut/jsonperf/blob/master/test_jsons/twitter.json","title":"twitter (630 kb)","timestamp_s":1608905188,"data":[["test","json 2.0.9","orjson 3.4.6","rapidjson 1.0","simplejson 3.17.2","ujson 4.0.1"],["serialize","1.16554","0.19653","0.65214","1.32894","0.60369"],["deserialize","0.99758","0.64200","1.05210","0.98404","0.87980"]]}]')}});
//# sourceMappingURL=app.4e31dffb.js.map