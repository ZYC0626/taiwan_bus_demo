(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a68619f"],{"04d1":function(t,e,a){var o=a("342f"),n=o.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"159b":function(t,e,a){var o=a("da84"),n=a("fdbc"),i=a("785a"),c=a("17c2"),r=a("9112"),s=function(t){if(t&&t.forEach!==c)try{r(t,"forEach",c)}catch(e){t.forEach=c}};for(var l in n)n[l]&&s(o[l]&&o[l].prototype);s(i)},"17c2":function(t,e,a){"use strict";var o=a("b727").forEach,n=a("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"414c":function(t,e,a){"use strict";a.r(e);var o=a("7a23"),n=a("42f0"),i=a.n(n),c={class:"h-100 d-flex flex-column"},r={class:"bread-bar d-flex justify-content-between"},s=Object(o["f"])("ol",{class:"breadcrumb m-0"},[Object(o["f"])("li",{class:"breadcrumb-item"},[Object(o["f"])("a",{href:"#"},"首頁")]),Object(o["f"])("li",{class:"breadcrumb-item active","aria-current":"page"},"附近站牌")],-1),l={class:"mobile-control-bar d-flex d-md-none"},u={class:"tool"},f=Object(o["f"])("i",{class:"bi bi-pin-map me-1"},null,-1),d=Object(o["h"])("地圖 "),b=[f,d],p=Object(o["f"])("i",{class:"bi bi-clock me-1"},null,-1),m=Object(o["h"])("預估時間 "),h=[p,m],v=Object(o["f"])("i",{class:"bi bi-map me-1"},null,-1),S=Object(o["h"])("站牌 "),O=[v,S],j={class:"map-wrap"},L={class:"near-station-area active"},g=Object(o["f"])("div",{class:"near-station-header"},null,-1),y={class:"near-station-body"},P={class:"near-station-list"},k=["onClick"],N={class:"info"},w={class:"tilte"},D={class:"stops"},C={class:"distance"},A=Object(o["f"])("span",{class:"material-icons"}," location_on ",-1),E={class:"estimate-near-area"},_=Object(o["f"])("span",{class:"material-icons"},"chevron_left",-1),I=Object(o["h"])(" 返回搜尋"),x=[_,I],M={class:"estimate-near-header"},T={class:"title"},F={class:"estimate-near-body"},U={class:"estimate-near-list"},Z=["onClick"],z={key:0},$={key:0},q={key:1},R={key:2},B={key:1},J={key:2},G={key:3},H={key:4},K={class:"info"},V={class:"title"},W={key:0,class:"way"},Q={key:1,class:"way"},X={class:"icon ms-auto"},Y=Object(o["f"])("a",null,[Object(o["f"])("span",{class:"material-icons"}," favorite_border ")],-1),tt=Object(o["f"])("img",{src:i.a,class:"icon-filter",alt:"gps-icon"},null,-1),et=[tt],at=Object(o["f"])("div",{class:"map",id:"map"},null,-1);function ot(t,e,a,n,i,f){return Object(o["t"])(),Object(o["e"])("div",c,[Object(o["f"])("div",r,[s,Object(o["f"])("div",l,[Object(o["f"])("div",u,[Object(o["f"])("div",{class:Object(o["o"])(["map",{active:"map"===i.mobileTool}]),onClick:e[0]||(e[0]=function(t){return f.showArea("map")})},b,2),i.EstimateNearList.length>0?(Object(o["t"])(),Object(o["e"])("div",{key:0,class:Object(o["o"])(["time",{active:"time"===i.mobileTool}]),onClick:e[1]||(e[1]=function(t){return f.showArea("time")})},h,2)):Object(o["d"])("",!0),Object(o["f"])("div",{class:Object(o["o"])(["route",{active:"station"===i.mobileTool}]),onClick:e[2]||(e[2]=function(t){return f.showArea("station")})},O,2)])])]),Object(o["f"])("div",j,[Object(o["f"])("div",L,[g,Object(o["f"])("div",y,[Object(o["f"])("ul",P,[(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(i.nearStationList,(function(t){return Object(o["t"])(),Object(o["e"])("li",{class:Object(o["o"])(["near-station-list-item",{active:t.StationUID===i.selectStationUID}]),key:t.StationID,onClick:function(e){return f.getNearStaionDetail(t)}},[Object(o["f"])("div",N,[Object(o["f"])("div",w,Object(o["A"])(t.StationName.Zh_tw),1),Object(o["f"])("div",D,Object(o["A"])(t.Stops.length)+" 個站牌",1)]),Object(o["f"])("div",C,[A,Object(o["h"])(" "+Object(o["A"])(t.distanceFromLocation)+"m ",1)])],10,k)})),128))])])]),Object(o["f"])("div",E,[Object(o["f"])("a",{href:"#",class:"return",onClick:e[3]||(e[3]=Object(o["G"])((function(t){return f.backToNearStationList()}),["prevent"]))},x),Object(o["f"])("div",M,[Object(o["f"])("div",T,Object(o["A"])(i.selectStationName),1)]),Object(o["f"])("div",F,[Object(o["f"])("ul",U,[(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(i.EstimateNearList,(function(e){return Object(o["t"])(),Object(o["e"])("li",{class:"estimate-near-list-item",key:e.StopUID,onClick:function(t){return f.toRouteDetail(e)}},[Object(o["f"])("div",{class:Object(o["o"])(["time",{active:e.EstimateTime<=180,disconnect:0!==e.StopStatus}])},[0===e.StopStatus?(Object(o["t"])(),Object(o["e"])("span",z,[e.EstimateTime<=180&&e.PlateNumb?(Object(o["t"])(),Object(o["e"])("span",$,"進站中")):e.EstimateTime<=180?(Object(o["t"])(),Object(o["e"])("span",q,"即將進站")):(Object(o["t"])(),Object(o["e"])("span",R,Object(o["A"])(t.$filters.toMinute(e.EstimateTime))+"分",1))])):1===e.StopStatus?(Object(o["t"])(),Object(o["e"])("span",B,"尚未發車")):2===e.StopStatus?(Object(o["t"])(),Object(o["e"])("span",J,"交管不停靠")):3===e.StopStatus?(Object(o["t"])(),Object(o["e"])("span",G,"末班車已過")):(Object(o["t"])(),Object(o["e"])("span",H,"今日未營運"))],2),Object(o["f"])("div",K,[Object(o["f"])("div",V,Object(o["A"])(e.RouteName.Zh_tw),1),0===e.Direction?(Object(o["t"])(),Object(o["e"])("div",W,"往 "+Object(o["A"])(e.DestinationStopNameZh),1)):(Object(o["t"])(),Object(o["e"])("div",Q,"往 "+Object(o["A"])(e.DepartureStopNameZh),1))]),Object(o["f"])("div",X,[Y,Object(o["h"])(" "+Object(o["A"])(e.City),1)])],8,Z)})),128))])])]),Object(o["f"])("div",{class:"gps-icon",onClick:e[4]||(e[4]=function(t){return f.locateGPS()})},et),at])])}a("d3b7"),a("159b"),a("4e82"),a("99af"),a("e9c4"),a("d81d");var nt=a("e11e"),it=a.n(nt),ct={},rt=new it.a.Icon({iconUrl:a("fc97"),iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}),st=new it.a.Icon({iconUrl:a("56a7"),iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}),lt=new it.a.Icon({iconUrl:a("e275"),iconSize:[49,49],iconAnchor:[24,24],popupAnchor:[0,-24]}),ut={data:function(){return{locationMarkerID:"",nearStationList:[],stationMarkers:[],lastSelectLatLon:[0,0],EstimateNearList:[],selectStationName:"",selectStationUID:"",selectStationLatLon:[],mobileTool:"station"}},methods:{locateGPS:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){ct.eachLayer((function(e){e._leaflet_id===t.locationMarkerID&&ct.removeLayer(e)}));var a=[e.coords.latitude,e.coords.longitude];ct.setView(a,15),document.querySelector(".gps-icon").classList.add("active");var o=it.a.marker([e.coords.latitude,e.coords.longitude],{icon:lt});o.addTo(ct),t.locationMarkerID=o._leaflet_id,t.getNearbyStation(e.coords.latitude,e.coords.longitude)}))},getNearbyStation:function(t,e){var a=this,o="https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$spatialFilter=nearby(25.0544128%2C%20121.454592%2C%201000)&$format=JSON";this.axios.get(o,{headers:this.$getAuthorizationHeader()}).then((function(o){a.nearStationList=o.data,a.nearStationList.forEach((function(a){var o=ct.distance([t,e],[a.StationPosition.PositionLat,a.StationPosition.PositionLon]);a.distanceFromLocation=Math.floor(o)})),a.nearStationList.sort((function(t,e){return t.distanceFromLocation-e.distanceFromLocation})),a.addNearStationMarker()})).catch((function(t){console.log(t)}))},addNearStationMarker:function(){var t=this;ct.eachLayer((function(e){e._leaflet_id!==t.locationMarkerID&&(e instanceof it.a.Marker&&ct.removeLayer(e),e instanceof it.a.Popup&&ct.removeLayer(e))})),this.nearStationList.forEach((function(e,a){var o=t.createPopupContent(e),n=it.a.popup({autoPan:!1,className:o.status,offset:[0,-5]});n.setLatLng(it.a.latLng(e.StationPosition.PositionLat,e.StationPosition.PositionLon)),n.setContent(o.str);var i=it.a.marker([e.StationPosition.PositionLat,e.StationPosition.PositionLon],{icon:rt}).bindPopup(n);i.addTo(ct),e.markerID=i._leaflet_id,t.stationMarkers.push(i)}))},getNearStaionDetail:function(t){var e=this;ct.setView([t.StationPosition.PositionLat,t.StationPosition.PositionLon],18),this.stationMarkers.forEach((function(t){t._latlng.lat===e.lastSelectLatLon[0]&&t._latlng.lng===e.lastSelectLatLon[1]&&t.setIcon(rt)})),this.stationMarkers.forEach((function(a){a._latlng.lat===t.StationPosition.PositionLat&&a._latlng.lng===t.StationPosition.PositionLon&&(a.setIcon(st),e.lastSelectLatLon=[a._latlng.lat,a._latlng.lng])})),ct.eachLayer((function(t){t._leaflet_id!==e.locationMarkerID&&t instanceof it.a.Popup&&ct.removeLayer(t)}));var a=this.createPopupContent(t),o=it.a.popup({autoPan:!1,className:"popupSelect",offset:[0,-5]});o.setLatLng(it.a.latLng(t.StationPosition.PositionLat,t.StationPosition.PositionLon)),o.setContent(a.str),ct.addLayer(o),this.getEstimatedTimeOfArrival(t),document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.add("active")},zoomLevelAddMarker:function(){var t=this,e=ct.getZoom();e<=16?this.addNearStationMarker():(ct.eachLayer((function(e){e._leaflet_id!==t.locationMarkerID&&e instanceof it.a.Popup&&ct.removeLayer(e)})),this.nearStationList.forEach((function(e,a){var o=t.createPopupContent(e),n=it.a.popup({autoPan:!1,className:o.status,offset:[0,-5]});n.setLatLng(it.a.latLng(e.StationPosition.PositionLat,e.StationPosition.PositionLon)),n.setContent(o.str),ct.addLayer(n)})))},createPopupContent:function(t){var e="popupPrimary",a='\n      <div class="stop-popup">\n        <div class="name">'.concat(t.StationName.Zh_tw,"</div>\n      </div>\n      ");return{str:a,status:e}},getEstimatedTimeOfArrival:function(t){var e=this;this.EstimateNearList=[];var a="https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/NearBy?$spatialFilter=nearby(".concat(t.StationPosition.PositionLat,"%2C%20").concat(t.StationPosition.PositionLon,"%2C%201000)&$format=JSON");this.axios.get(a,{headers:this.$getAuthorizationHeader()}).then((function(a){t.Stops.forEach((function(t){a.data.forEach((function(a){t.StopUID===a.StopUID&&e.EstimateNearList.push(a)}))})),e.getRouteInfo(t)})).catch((function(t){console.log(t)}))},getRouteInfo:function(t){var e=this,a="https://ptx.transportdata.tw/MOTC/v2/Bus/Route/NearBy?$spatialFilter=nearby(".concat(t.StationPosition.PositionLat,"%2C%20").concat(t.StationPosition.PositionLon,"%2C%201000)&$format=JSON");this.axios.get(a,{headers:this.$getAuthorizationHeader()}).then((function(a){e.EstimateNearList.forEach((function(t){a.data.forEach((function(e){t.RouteUID===e.RouteUID&&(t.DepartureStopNameZh=e.DepartureStopNameZh,t.DestinationStopNameZh=e.DestinationStopNameZh,t.City=e.City)}))})),e.EstimateNearList.sort((function(t,e){return t.RouteName.Zh_tw-e.RouteName.Zh_tw})),e.selectStationName=t.StationName.Zh_tw,e.selectStationUID=t.StationUID,e.selectStationLatLon=[t.StationPosition.PositionLat,t.StationPosition.PositionLon]})).catch((function(t){console.log(t)}))},backToNearStationList:function(){document.querySelector(".near-station-area").classList.add("active"),document.querySelector(".estimate-near-area").classList.remove("active")},showArea:function(t){"map"===t?(this.mobileTool="map",document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.remove("active")):"station"===t?(this.mobileTool="station",document.querySelector(".near-station-area").classList.add("active"),document.querySelector(".estimate-near-area").classList.remove("active")):"time"===t&&(this.mobileTool="time",document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.add("active"))},toRouteDetail:function(t){console.log(t);var e={city:t.City,route:t.RouteName.Zh_tw,routeUID:t.RouteUID,direction:t.Direction,LatLon:this.selectStationLatLon},a=JSON.stringify(e);this.$router.push("/BusSearch/".concat(a))}},mounted:function(){ct=it.a.map("map",{zoomControl:!1,center:[23.51357237187571,120.21110434230025],zoom:8,tap:!1}),it.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(ct),it.a.control.zoom({position:"bottomright"}).addTo(ct),ct.on("moveend",(function(){document.querySelector(".gps-icon").classList.remove("active")}));var t=this.zoomLevelAddMarker;ct.on("zoomend",(function(){t()})),this.locateGPS()}},ft=a("6b0d"),dt=a.n(ft);const bt=dt()(ut,[["render",ot]]);e["default"]=bt},"4e82":function(t,e,a){"use strict";var o=a("23e7"),n=a("e330"),i=a("59ed"),c=a("7b0b"),r=a("07fa"),s=a("577e"),l=a("d039"),u=a("addb"),f=a("a640"),d=a("04d1"),b=a("d998"),p=a("2d00"),m=a("512c"),h=[],v=n(h.sort),S=n(h.push),O=l((function(){h.sort(void 0)})),j=l((function(){h.sort(null)})),L=f("sort"),g=!l((function(){if(p)return p<70;if(!(d&&d>3)){if(b)return!0;if(m)return m<603;var t,e,a,o,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(o=0;o<47;o++)h.push({k:e+o,v:a})}for(h.sort((function(t,e){return e.v-t.v})),o=0;o<h.length;o++)e=h[o].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}})),y=O||!j||!L||!g,P=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:s(e)>s(a)?1:-1}};o({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&i(t);var e=c(this);if(g)return void 0===t?v(e):v(e,t);var a,o,n=[],s=r(e);for(o=0;o<s;o++)o in e&&S(n,e[o]);u(n,P(t)),a=n.length,o=0;while(o<a)e[o]=n[o++];while(o<s)delete e[o++];return e}})},"512c":function(t,e,a){var o=a("342f"),n=o.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},"56a7":function(t,e,a){t.exports=a.p+"img/bus_stop_select.dacbc18d.svg"},8418:function(t,e,a){"use strict";var o=a("a04b"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var c=o(e);c in t?n.f(t,c,i(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("da84"),i=a("d039"),c=a("e8b5"),r=a("861d"),s=a("7b0b"),l=a("07fa"),u=a("8418"),f=a("65f0"),d=a("1dde"),b=a("b622"),p=a("2d00"),m=b("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",S=n.TypeError,O=p>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),j=d("concat"),L=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:c(t)},g=!O||!j;o({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,o,n,i,c=s(this),r=f(c,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?c:arguments[e],L(i)){if(n=l(i),d+n>h)throw S(v);for(a=0;a<n;a++,d++)a in i&&u(r,d,i[a])}else{if(d>=h)throw S(v);u(r,d++,i)}return r.length=d,r}})},a640:function(t,e,a){"use strict";var o=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&o((function(){a.call(null,e||function(){throw 1},1)}))}},addb:function(t,e,a){var o=a("f36a"),n=Math.floor,i=function(t,e){var a=t.length,s=n(a/2);return a<8?c(t,e):r(t,i(o(t,0,s),e),i(o(t,s),e),e)},c=function(t,e){var a,o,n=t.length,i=1;while(i<n){o=i,a=t[i];while(o&&e(t[o-1],a)>0)t[o]=t[--o];o!==i++&&(t[o]=a)}return t},r=function(t,e,a,o){var n=e.length,i=a.length,c=0,r=0;while(c<n||r<i)t[c+r]=c<n&&r<i?o(e[c],a[r])<=0?e[c++]:a[r++]:c<n?e[c++]:a[r++];return t};t.exports=i},d998:function(t,e,a){var o=a("342f");t.exports=/MSIE|Trident/.test(o)},e9c4:function(t,e,a){var o=a("23e7"),n=a("da84"),i=a("d066"),c=a("2ba4"),r=a("e330"),s=a("d039"),l=n.Array,u=i("JSON","stringify"),f=r(/./.exec),d=r("".charAt),b=r("".charCodeAt),p=r("".replace),m=r(1..toString),h=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,O=function(t,e,a){var o=d(a,e-1),n=d(a,e+1);return f(v,t)&&!f(S,n)||f(S,t)&&!f(v,o)?"\\u"+m(b(t,0),16):t},j=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&o({target:"JSON",stat:!0,forced:j},{stringify:function(t,e,a){for(var o=0,n=arguments.length,i=l(n);o<n;o++)i[o]=arguments[o];var r=c(u,null,i);return"string"==typeof r?p(r,h,O):r}})},fc97:function(t,e,a){t.exports=a.p+"img/busStop.2fb86a4d.svg"}}]);
//# sourceMappingURL=chunk-4a68619f.b8906144.js.map