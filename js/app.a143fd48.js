(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5aebb091"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01b2":function(t,e,a){"use strict";a("ef92")},"034f":function(t,e,a){"use strict";a("85ec")},"0dfa":function(t,e,a){},"4e6d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),a("router-view")],1)},n=[],o=(a("034f"),a("2877")),r={},l=Object(o["a"])(r,s,n,!1,null,null,null),c=l.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("b-button",{on:{click:t.mapToggle}}),t.isMap?i("div",[i("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),i("KakaoMap",{attrs:{msg:"Welcome to Your Vue.js App"}})],1):i("div",[i("ImageFile")],1)],1)},d=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),a("div",{staticClass:"button-group"},[a("button",{on:{click:function(e){return t.changeSize(0)}}},[t._v("Hide")]),a("button",{on:{click:function(e){return t.changeSize(400)}}},[t._v("show")]),a("button",{on:{click:function(e){return t.displayMarker(t.markerPositions1)}}},[t._v("marker set 1")]),a("button",{on:{click:function(e){return t.displayMarker(t.markerPositions2)}}},[t._v("marker set 2")]),a("button",{on:{click:function(e){return t.displayMarker([])}}},[t._v("marker set 3 (empty)")]),a("button",{on:{click:t.displayInfoWindow}},[t._v("infowindow")]),a("button",{on:{click:t.mark1}},[t._v("MARK 1")])])])},b=[],m=a("4478"),v=a("2909"),h=(a("d81d"),a("159b"),{name:"KakaoMap",data:function(){return{map:null,markerPositions1:[[33.483807852960716,126.49594116900118],[33.45923004681279,126.31059949748402],[33.306126312994,126.2895232690498],[33.422454392177855,126.4092210109781]],markerPositions2:[[37.499590490909185,127.0263723554437],[37.499427948430814,127.02794423197847],[37.498553760499505,127.02882598822454],[37.497625593121384,127.02935713582038],[37.49629291770947,127.02587362608637],[37.49754540521486,127.02546694890695],[37.49646391248451,127.02675574250912]],markers:[],infowindow:null}},mounted:function(){var t=this;if(window.kakao&&window.kakao.maps)this.initMap();else{var e=document.createElement("script");e.onload=function(){return kakao.maps.load(t.initMap)},e.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d683fa75a634be2bc7429557cd189394",document.head.appendChild(e)}},methods:{initMap:function(){var t=document.getElementById("map"),e={center:new kakao.maps.LatLng(33.450701,126.570667),level:5};this.map=new kakao.maps.Map(t,e)},changeSize:function(t){var e=document.getElementById("map");e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px"),this.map.relayout()},displayMarker:function(t){var e=this;this.markers.length>0&&this.markers.forEach((function(t){return t.setMap(null)}));var a=t.map((function(t){return Object(m["a"])(kakao.maps.LatLng,Object(v["a"])(t))}));if(a.length>0){this.markers=a.map((function(t){return new kakao.maps.Marker({map:e.map,title:'<div style="padding:5px;">Hello World!</div>',position:t})}));var i=a.reduce((function(t,e){return t.extend(e)}),new kakao.maps.LatLngBounds);this.map.setBounds(i)}},displayInfoWindow:function(){if(this.infowindow&&this.infowindow.getMap())this.map.setCenter(this.infowindow.getPosition());else{var t='<div style="padding:5px;">Hello World!</div>',e=new kakao.maps.LatLng(33.450701,126.570667),a=!0;this.infowindow=new kakao.maps.InfoWindow({map:this.map,position:e,content:t,removable:a}),this.map.setCenter(e)}},mark1:function(){var t=document.getElementById("map"),e={center:new kakao.maps.LatLng(37.564343,126.947613),level:3},a=new kakao.maps.Map(t,e),i=[{id:1,store:"학생문화관점",location:"학생문화관 지하1층 로비",time:"학기 중: 월~금 08:30~19:00 | 토 09:00~14:00",vacation:"방학 중: 월~금 08:30~18:00 | 토 09:00~14:00",tel:"02-3277-3707",latlng:new kakao.maps.LatLng(37.562632898194835,126.9454282268269)}];console.log(i),i.forEach((function(t){new kakao.maps.Marker({map:a,position:t.latlng})}))}}}),y=h,g=(a("01b2"),Object(o["a"])(y,f,b,!1,null,"13b1e240",null)),k=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form-file",{attrs:{state:Boolean(t.file1),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.viewFile},model:{value:t.file1,callback:function(e){t.file1=e},expression:"file1"}}),a("b-button",{on:{click:t.viewFile}},[t._v("파일 확인")]),a("img",{staticClass:"popupImageItem",staticStyle:{width:"300px",height:"300px"},attrs:{alt:"이미지업로드"}}),a("b-img",{staticStyle:{width:"300px",height:"300px"},attrs:{thumbnail:"",fluid:"",src:t.uploadImageFile,alt:"Image 1"}}),a("br"),a("div",{staticClass:"container"},[a("b-table-simple",[a("b-thead",t._l(12,(function(e){return a("b-th",{key:e},[t._v("TH")])})),1),a("b-tbody",t._l(12,(function(e){return a("b-td",{key:e},[t._v("td")])})),1)],1)],1),a("b-container",{staticClass:"p-4 container main_con",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-img",{staticClass:"thumbnail_img",attrs:{thumbnail:"",src:"https://placekitten.com/300/300",alt:"프로필 사진"}})],1),a("b-col",{attrs:{cols:"8"}},[a("b-row",{staticClass:"info_table"},[a("b-col",{staticClass:"p-2",attrs:{cols:"6"}},[a("label",{staticClass:"m-0 label_con w-100 p-1"},[a("label",{staticClass:"tag_title"},[t._v("이름")]),t._v(" "),a("label",{staticClass:"tag_detail"},[t._v("ㅠㅠㅠ")])])]),a("b-col",{staticClass:"p-2",attrs:{cols:"6"}},[a("label",{staticClass:"m-0 label_con w-100 p-1"},[a("label",{staticClass:"tag_title"},[t._v("회사")]),t._v(" "),a("label",{staticClass:"tag_detail"},[t._v("ㅇㅇㅇ")])])])],1),a("b-row",{staticClass:"info_table"},t._l(12,(function(e){return a("b-col",{key:e},[t._v("dd")])})),1)],1)],1)],1)],1)],1),a("br"),a("br"),a("br"),a("b-container",[a("div",{staticClass:"cards"},[a("div",{staticClass:"card content"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-img"},[a("b-img",{attrs:{thumbnail:"",src:"https://placekitten.com/300/300",alt:"Gamer"}})],1),a("div",{staticClass:"card-title"},[t._v(" #테스트 ")])])]),a("div",{staticClass:"card content"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-img"},[a("b-img",{attrs:{src:"https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",alt:"keyboard"}})],1),a("div",{staticClass:"card-label"},[t._v(" INFO ")]),a("div",{staticClass:"card-title"},[t._v(" 뭔가 정보들 ")])])]),a("div",{staticClass:"card content"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-img"},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80",alt:"Controller"}})]),a("div",{staticClass:"card-label"},[t._v(" INFO ")]),a("div",{staticClass:"card-title"},[t._v(" 각종 정보들 ")])])]),a("div",{staticClass:"card form"},[a("div",{ref:"test",staticClass:"form-title"},[t._v("최호영")])])])])],1)},_=[],w=(a("ac1f"),a("00b4"),{name:"ImageFile",data:function(){return{file1:null,uploadImageFile:""}},methods:{viewFile:function(){var t=this;console.dir(this.$refs.test.style);var e=this.file1;if(e){var a=new FileReader;a.onload=function(e){t.uploadImageFile=e.target.result},a.readAsDataURL(this.file1)}else console.log("현재 파일 선택되지 않음")}},mounted:function(){var t=this;if(this.file1){var e=new FileReader;e.onload=function(e){t.uploadImageFile=e.target.result},e.readAsDataURL(this.file1)}}}),C=w,T=(a("d79c"),Object(o["a"])(C,x,_,!1,null,"0c6add78",null)),S=T.exports,P={name:"Home",components:{KakaoMap:k,ImageFile:S},data:function(){return{isMap:!1}},methods:{mapToggle:function(){this.isMap=!this.isMap}}},L=P,F=Object(o["a"])(L,p,d,!1,null,null,null),N=F.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"p-5 font-set"},[a("div",{staticClass:"input_form "},[a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-form-file",{attrs:{state:Boolean(t.imgFile),placeholder:"프로필 사진"},model:{value:t.imgFile,callback:function(e){t.imgFile=e},expression:"imgFile"}})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-button",{attrs:{variant:"primary",disabled:""}},[t._v("닉네임")])]},proxy:!0},{key:"append",fn:function(){return[t.nickPrivate?a("b-button",{on:{click:t.inputNick}},[t._v("공개")]):a("b-button",{on:{click:t.nickNameNone}},[t._v("비공개")])]},proxy:!0}])},[a("b-form-input",{attrs:{disabled:t.nickPrivate},model:{value:t.nickName,callback:function(e){t.nickName=e},expression:"nickName"}})],1)],1),a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-button",{attrs:{variant:"primary",disabled:""}},[t._v("급수")])]},proxy:!0},{key:"append",fn:function(){return[t.gradePrivate?a("b-button",{on:{click:t.inputGrade}},[t._v("공개")]):a("b-button",{on:{click:t.gradeNone}},[t._v("비공개")])]},proxy:!0}])},[a("b-form-input",{attrs:{type:"number",disabled:t.gradePrivate},model:{value:t.userGrade,callback:function(e){t.userGrade=e},expression:"userGrade"}})],1)],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-button",{attrs:{variant:"primary",disabled:""}},[t._v("클랜")])]},proxy:!0},{key:"append",fn:function(){return[t.clanNamePrivate?a("b-button",{on:{click:t.inputClanName}},[t._v("공개")]):a("b-button",{on:{click:t.clanNameNone}},[t._v("비공개")])]},proxy:!0}])},[a("b-form-input",{attrs:{disabled:t.clanNamePrivate},model:{value:t.clanName,callback:function(e){t.clanName=e},expression:"clanName"}})],1)],1),a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-button",{attrs:{variant:"primary",disabled:""}},[t._v("티어")])]},proxy:!0}])},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.selectTemp.tier},model:{value:t.userTier,callback:function(e){t.userTier=e},expression:"userTier"}})],1)],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"8"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-button",{attrs:{variant:"primary",disabled:""}},[t._v("MEMO")])]},proxy:!0}])},[a("b-form-textarea",{attrs:{id:"textarea-state",state:t.memo.length<=150,placeholder:"4줄까지만 입력해주세요 줄바꿈 없이 많은것을 입력하면 잘려서 나옵니다.","max-rows":"5"},on:{keydown:t.checkBr},model:{value:t.memo,callback:function(e){t.memo=e},expression:"memo"}})],1)],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("포지션 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.position,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})]}}])})]},proxy:!0}])})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("플레이타입 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.playType,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.playType,callback:function(e){t.playType=e},expression:"playType"}})]}}])})]},proxy:!0}])})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("선호 플레이 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.playLike,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.playLike,callback:function(e){t.playLike=e},expression:"playLike"}})]}}])})]},proxy:!0}])})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("주 플레이 시간 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.playTime,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.playTime,callback:function(e){t.playTime=e},expression:"playTime"}})]}}])})]},proxy:!0}])})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("팔로우 방법 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.followType,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.followType,callback:function(e){t.followType=e},expression:"followType"}})]}}])})]},proxy:!0}])})],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{attrs:{size:"lg"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("h3",{staticClass:"p-2",staticStyle:{color:"black"}},[a("span",[t._v("파티 유형 : ")])]),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{options:t.selectTemp.partyType,"aria-describedby":i,name:"buttons-1",size:"lg",buttons:"","button-variant":"outline-primary"},model:{value:t.partyType,callback:function(e){t.partyType=e},expression:"partyType"}})]}}])})]},proxy:!0}])})],1)],1)],1)]),a("b-container",{staticClass:"main_con text-white pl-5 pt-5 text-left",attrs:{id:"cont"}},[a("b-row",{staticClass:"pl-2 pr-2"},[a("b-col",{staticClass:"main_title",attrs:{cols:"6"}},[a("h1",{staticStyle:{color:"#F9F871"}},[t._v("#사이퍼즈 트친소")])]),a("b-col",{staticClass:"text-right",staticStyle:{position:"sticky"},attrs:{cols:"4"}},[t.imgFile?a("b-img",{staticStyle:{position:"absolute",width:"300px",height:"300px",left:"150px"},attrs:{thumbnail:"",src:t.readImg,alt:"프로필 사진"}}):a("b-img",{staticStyle:{position:"absolute",width:"300px",height:"300px",left:"150px"},attrs:{thumbnail:"",src:"https://placekitten.com/300/300",alt:"프로필 사진"}})],1)],1),a("b-row",{staticClass:"h-25 w-50"},[a("b-col",{staticClass:"pt-3"},[a("h2",{staticClass:"mt-4",staticStyle:{"font-weight":"300"}},[a("span",{staticStyle:{color:"#959366"}},[t._v(t._s(t.nickName))]),a("span",[t._v(t._s(t.userGrade?" / "+t.userGrade+"급":""))])]),a("h3",{staticClass:"mt-4",staticStyle:{"font-weight":"300"}},[t.clanName?a("span",[t._v("CLAN - "+t._s(t.clanName))]):t._e()]),a("h3",{staticClass:"mt-4",staticStyle:{"font-weight":"300"}},[""!==t.userTier?a("span",[t._v("TIER - "+t._s(t.userTier))]):t._e()])])],1),a("b-row",{staticStyle:{height:"50px"}}),a("b-row",{staticClass:"h-25 pl-2 pr-2 mt-5"},[a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-hexagon",{staticClass:"position_icon",staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("POSITION")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortPosition,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])]),a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-fullscreen",{staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("PLAY TYPE")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortPlayType,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])]),a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-suit-heart",{staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("PLAY LIKE")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortPlayLike,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])]),a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-alarm",{staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("PLAY TIME")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortPlayTime,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])])],1),a("b-row",{staticClass:"h-25 pl-2 pr-2"},[a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-twitter",{staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("FOLLOW")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortFollowType,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])]),a("b-col",{attrs:{cols:"3"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-people",{staticStyle:{width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("PARTY")])],1)],1),a("div",{staticClass:"d-flex feature_box"},t._l(t.sortPartyType,(function(e){return a("b-card-text",{key:e,staticClass:"p-1 hashTag"},[t._v(" # "+t._s(e)+" ")])})),1)])]),a("b-col",{attrs:{cols:"6"}},[a("div",[a("p",[a("b-input-group",{staticClass:"config_group",scopedSlots:t._u([{key:"prepend",fn:function(){return[a("b-icon-journal",{staticStyle:{color:"#F9F871",width:"40px",height:"40px"}})]},proxy:!0}])},[a("b-card-text",{staticClass:"pl-4",staticStyle:{"font-size":"24px"}},[t._v("MEMO")])],1)],1),a("p",{staticClass:"pl-3 p-1 memo_box",staticStyle:{"border-left":"3px dashed","white-space":"pre-line"},domProps:{innerHTML:t._s(t.memo)}},[t._v(" 안녕하세요 반갑습니다. 해당 문항은 메모의 기능이며 글자수 제한을 체크해보려고 합니다. 다른 문제 사항이 있다면 언제든 편히 말씀주세요 감사합니다. 안녕하세요 반갑습니다. 해당 문항은 메모의 기능이며 글자수 제한을 체크해보려고 합니다. 다른 문제 사항이 있다면 언제든 ")])])])],1)],1),a("b-button",{on:{click:t.cap}},[t._v("트친소 다운로드")]),a("br"),a("canvas",{attrs:{id:"canvas",width:"1024px",height:"808px"}})],1)},I=[],O=(a("1276"),a("fb6a"),a("a15b"),a("caad"),a("2532"),a("c0e9")),z=a.n(O),j={name:"Profile",data:function(){return{imgFile:null,nickName:"",nickPrivate:!1,userGrade:"",gradePrivate:!1,clanName:"",clanNamePrivate:!1,userTier:"",userTierPrivate:!1,position:[],playType:[],playLike:[],playTime:[],followType:[],partyType:[],uploadImageFile:"",memo:"",discord:"",selectTemp:{position:[{value:"탱커",text:"탱커"},{value:"서포터",text:"서포터"},{value:"근딜",text:"근딜"},{value:"원딜",text:"원딜"}],playType:[{value:"일반",text:"일반"},{value:"공식",text:"공식"},{value:"협력",text:"협력"}],playLike:[{value:"승리지향",text:"승리지향"},{value:"조합맞춤",text:"조합맞춤"},{value:"즐거운분위기",text:"즐거운분위기"},{value:"진중한분위기",text:"진중한분위기"},{value:"예능파티",text:"예능파티"}],playTime:[{value:"평일",text:"평일"},{value:"주말",text:"주말"},{value:"오전",text:"오전"},{value:"오후",text:"오후"}],followType:[{value:"RT",text:"RT"},{value:"마음",text:"마음"},{value:"멘션",text:"멘션"}],partyType:[{value:"솔플",text:"솔플"},{value:"2인",text:"2인"},{value:"3인",text:"3인"},{value:"4인",text:"4인"},{value:"5인",text:"5인"}],tier:[{value:"",text:""},{value:"브론즈",text:"브론즈"},{value:"실버",text:"실버"},{value:"골드",text:"골드"},{value:"조커",text:"조커"},{value:"에이스",text:"에이스"},{value:"히어로",text:"히어로"},{value:"레전드",text:"레전드"}]}}},methods:{cap:function(){z()(document.querySelector("#cont"),{logging:!0,letterRendering:1,useCORS:!0}).then((function(t){var e=document.createElement("a");e.href=t.toDataURL("image/png"),e.download="test",document.body.appendChild(e),e.click()}))},saveAs:function(t,e){console.log(t,e)},nickNameNone:function(){this.nickName="비공개",this.nickPrivate=!0},inputNick:function(){this.nickPrivate=!1,this.nickName=""},gradeNone:function(){this.userGrade="",this.gradePrivate=!0},inputGrade:function(){this.userGrade=0,this.gradePrivate=!1},clanNameNone:function(){this.clanName="비공개",this.clanNamePrivate=!0},inputClanName:function(){this.clanName="",this.clanNamePrivate=!1},checkBr:function(){var t=this.memo.split("\n").length,e=4;if(t>e){alert("4줄 까지만 가능합니다");var a=this.memo.split("\n").slice(0,e);this.memo=a.join("\n")}console.log(this.memo)},viewFile:function(){var t=this,e=this.imgFile;if(e){var a=new FileReader;a.onload=function(e){t.uploadImageFile=e.target.result},a.readAsDataURL(this.imgFile)}else console.log("현재 파일 선택되지 않음")}},mounted:function(){},computed:{sortPosition:function(){var t=this.position.includes("탱커"),e=this.position.includes("서포터"),a=this.position.includes("근딜"),i=this.position.includes("원딜"),s=[];return t&&s.push("탱커"),e&&s.push("서포터"),a&&s.push("근딜"),i&&s.push("원딜"),s},sortPlayType:function(){var t=this.playType.includes("일반"),e=this.playType.includes("공식"),a=this.playType.includes("협력"),i=[];return t&&i.push("일반"),e&&i.push("공식"),a&&i.push("협력"),i},sortPlayLike:function(){var t=this.playLike.includes("승리지향"),e=this.playLike.includes("조합맞춤"),a=this.playLike.includes("즐거운분위기"),i=this.playLike.includes("진중한분위기"),s=this.playLike.includes("예능파티"),n=[];return t&&n.push("승리지향"),e&&n.push("조합맞춤"),a&&n.push("즐거운분위기"),i&&n.push("진중한분위기"),s&&n.push("예능파티"),n},sortPlayTime:function(){var t=this.playTime.includes("평일"),e=this.playTime.includes("주말"),a=this.playTime.includes("오전"),i=this.playTime.includes("오후"),s=[];return t&&s.push("평일"),e&&s.push("주말"),a&&s.push("오전"),i&&s.push("오후"),s},sortFollowType:function(){var t=this.followType.includes("RT"),e=this.followType.includes("마음"),a=this.followType.includes("멘션"),i=[];return t&&i.push("RT"),e&&i.push("마음"),a&&i.push("멘션"),i},sortPartyType:function(){var t=this.partyType.includes("솔플"),e=this.partyType.includes("2인"),a=this.partyType.includes("3인"),i=this.partyType.includes("4인"),s=this.partyType.includes("5인"),n=[];return t&&n.push("솔플"),e&&n.push("2인"),a&&n.push("3인"),i&&n.push("4인"),s&&n.push("5인"),n},readImg:function(){var t=this,e=this.imgFile;if(e){var a=new FileReader;a.onload=function(e){t.uploadImageFile=e.target.result},a.readAsDataURL(this.imgFile)}else console.log("현재 파일 선택되지 않음");return this.uploadImageFile}}},E=j,R=(a("8c18"),Object(o["a"])(E,M,I,!1,null,"3bc9131c",null)),A=R.exports;i["default"].use(u["a"]);var D=[{path:"/profile",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"Profile",component:A}],B=new u["a"]({mode:"history",base:"/",routes:D}),G=B,H=a("2f62");i["default"].use(H["a"]);var W=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=a("5f5b"),Y=a("b1e0");a("f9e3"),a("2dd8");i["default"].config.productionTip=!1,i["default"].use(z.a),i["default"].use($["a"]),i["default"].use(Y["a"]),new i["default"]({router:G,store:W,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,a){},"8c18":function(t,e,a){"use strict";a("4e6d")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d79c:function(t,e,a){"use strict";a("0dfa")},ef92:function(t,e,a){}});
//# sourceMappingURL=app.a143fd48.js.map