(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-730e92fa"],{"04d1":function(t,e,a){var o=a("342f"),i=o.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"414c":function(t,e,a){"use strict";a.r(e);var o=a("7a23"),i=a("42f0"),n=a.n(i),s={class:"h-100 d-flex flex-column"},c={class:"bread-bar d-flex justify-content-between"},r=Object(o["f"])("ol",{class:"breadcrumb m-0"},[Object(o["f"])("li",{class:"breadcrumb-item"},[Object(o["f"])("a",{href:"#"},"首頁")]),Object(o["f"])("li",{class:"breadcrumb-item active","aria-current":"page"},"附近站牌")],-1),l={class:"mobile-control-bar d-flex d-md-none"},u={class:"tool"},f=Object(o["f"])("i",{class:"bi bi-pin-map me-1"},null,-1),d=Object(o["g"])("地圖 "),m=[f,d],b=Object(o["f"])("i",{class:"bi bi-clock me-1"},null,-1),p=Object(o["g"])("預估時間 "),h=[b,p],v=Object(o["f"])("i",{class:"bi bi-map me-1"},null,-1),O=Object(o["g"])("站牌 "),S=[v,O],j={class:"map-wrap"},L={class:"near-station-area active"},g=Object(o["f"])("div",{class:"near-station-header"},null,-1),y={class:"near-station-body"},P={class:"near-station-list"},k=["onClick"],N={class:"info"},w={class:"tilte"},C={class:"stops"},_={class:"distance"},D=Object(o["f"])("span",{class:"material-icons"}," location_on ",-1),I={class:"estimate-near-area"},E=Object(o["f"])("span",{class:"material-icons"},"chevron_left",-1),M=Object(o["g"])(" 返回搜尋"),T=[E,M],A={class:"estimate-near-header"},z={class:"title"},x={class:"estimate-near-body"},U={class:"estimate-near-list"},Z={key:0},q={key:0},$={key:1},F={key:2},R={key:1},B={key:2},J={key:3},G={key:4},H={class:"info"},K={class:"title"},V={key:0,class:"way"},W={key:1,class:"way"},Q={class:"icon ms-auto"},X=Object(o["f"])("a",{href:"#"},[Object(o["f"])("span",{class:"material-icons"}," favorite_border ")],-1),Y=Object(o["f"])("img",{src:n.a,class:"icon-filter",alt:"gps-icon"},null,-1),tt=[Y],et=Object(o["f"])("div",{class:"map",id:"map"},null,-1);function at(t,e,a,i,n,f){return Object(o["s"])(),Object(o["e"])("div",s,[Object(o["f"])("div",c,[r,Object(o["f"])("div",l,[Object(o["f"])("div",u,[Object(o["f"])("div",{class:Object(o["n"])(["map",{active:"map"===n.mobileTool}]),onClick:e[0]||(e[0]=function(t){return f.showArea("map")})},m,2),n.EstimateNearList.length>0?(Object(o["s"])(),Object(o["e"])("div",{key:0,class:Object(o["n"])(["time",{active:"time"===n.mobileTool}]),onClick:e[1]||(e[1]=function(t){return f.showArea("time")})},h,2)):Object(o["d"])("",!0),Object(o["f"])("div",{class:Object(o["n"])(["route",{active:"station"===n.mobileTool}]),onClick:e[2]||(e[2]=function(t){return f.showArea("station")})},S,2)])])]),Object(o["f"])("div",j,[Object(o["f"])("div",L,[g,Object(o["f"])("div",y,[Object(o["f"])("ul",P,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(n.nearStationList,(function(t){return Object(o["s"])(),Object(o["e"])("li",{class:Object(o["n"])(["near-station-list-item",{active:t.StationUID===n.selectStationUID}]),key:t.StationID,onClick:function(e){return f.getNearStaionDetail(t)}},[Object(o["f"])("div",N,[Object(o["f"])("div",w,Object(o["z"])(t.StationName.Zh_tw),1),Object(o["f"])("div",C,Object(o["z"])(t.Stops.length)+" 個站牌",1)]),Object(o["f"])("div",_,[D,Object(o["g"])(" "+Object(o["z"])(t.distanceFromLocation)+"m ",1)])],10,k)})),128))])])]),Object(o["f"])("div",I,[Object(o["f"])("a",{href:"#",class:"return",onClick:e[3]||(e[3]=Object(o["F"])((function(t){return f.backToNearStationList()}),["prevent"]))},T),Object(o["f"])("div",A,[Object(o["f"])("div",z,Object(o["z"])(n.selectStationName),1)]),Object(o["f"])("div",x,[Object(o["f"])("ul",U,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(n.EstimateNearList,(function(e){return Object(o["s"])(),Object(o["e"])("li",{class:"estimate-near-list-item",key:e.StopUID},[Object(o["f"])("div",{class:Object(o["n"])(["time",{active:e.EstimateTime<=180,disconnect:0!==e.StopStatus}])},[0===e.StopStatus?(Object(o["s"])(),Object(o["e"])("span",Z,[e.EstimateTime<=180&&e.PlateNumb?(Object(o["s"])(),Object(o["e"])("span",q,"進站中")):e.EstimateTime<=180?(Object(o["s"])(),Object(o["e"])("span",$,"即將進站")):(Object(o["s"])(),Object(o["e"])("span",F,Object(o["z"])(t.$filters.toMinute(e.EstimateTime))+"分",1))])):1===e.StopStatus?(Object(o["s"])(),Object(o["e"])("span",R,"尚未發車")):2===e.StopStatus?(Object(o["s"])(),Object(o["e"])("span",B,"交管不停靠")):3===e.StopStatus?(Object(o["s"])(),Object(o["e"])("span",J,"末班車已過")):(Object(o["s"])(),Object(o["e"])("span",G,"今日未營運"))],2),Object(o["f"])("div",H,[Object(o["f"])("div",K,Object(o["z"])(e.RouteName.Zh_tw),1),0===e.Direction?(Object(o["s"])(),Object(o["e"])("div",V,"往 "+Object(o["z"])(e.DestinationStopNameZh),1)):(Object(o["s"])(),Object(o["e"])("div",W,"往 "+Object(o["z"])(e.DepartureStopNameZh),1))]),Object(o["f"])("div",Q,[X,Object(o["g"])(" "+Object(o["z"])(e.City),1)])])})),128))])])]),Object(o["f"])("div",{class:"gps-icon",onClick:e[4]||(e[4]=function(t){return f.locateGPS()})},tt),et])])}a("d3b7"),a("159b"),a("4e82"),a("99af"),a("d81d");var ot=a("e11e"),it=a.n(ot),nt={},st=new it.a.Icon({iconUrl:a("fc97"),iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}),ct=new it.a.Icon({iconUrl:a("56a7"),iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}),rt=new it.a.Icon({iconUrl:a("e275"),iconSize:[49,49],iconAnchor:[24,24],popupAnchor:[0,-24]}),lt={data:function(){return{locationMarkerID:"",nearStationList:[],stationMarkers:[],lastSelectLatLon:[0,0],EstimateNearList:[],selectStationName:"",selectStationUID:"",mobileTool:"station"}},methods:{locateGPS:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){nt.eachLayer((function(e){e._leaflet_id===t.locationMarkerID&&nt.removeLayer(e)}));var a=[e.coords.latitude,e.coords.longitude];nt.setView(a,15),document.querySelector(".gps-icon").classList.add("active");var o=it.a.marker([e.coords.latitude,e.coords.longitude],{icon:rt});o.addTo(nt),t.locationMarkerID=o._leaflet_id,t.getNearbyStation(e.coords.latitude,e.coords.longitude)}))},getNearbyStation:function(t,e){var a=this,o="https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$spatialFilter=nearby(25.0544128%2C%20121.454592%2C%201000)&$format=JSON";this.axios.get(o,{headers:this.$getAuthorizationHeader()}).then((function(o){a.nearStationList=o.data,a.nearStationList.forEach((function(a){var o=nt.distance([t,e],[a.StationPosition.PositionLat,a.StationPosition.PositionLon]);a.distanceFromLocation=Math.floor(o)})),a.nearStationList.sort((function(t,e){return t.distanceFromLocation-e.distanceFromLocation})),a.addNearStationMarker()})).catch((function(t){console.log(t)}))},addNearStationMarker:function(){var t=this;nt.eachLayer((function(e){e._leaflet_id!==t.locationMarkerID&&(e instanceof it.a.Marker&&nt.removeLayer(e),e instanceof it.a.Popup&&nt.removeLayer(e))})),this.nearStationList.forEach((function(e,a){var o=t.createPopupContent(e),i=it.a.popup({autoPan:!1,className:o.status,offset:[0,-5]});i.setLatLng(it.a.latLng(e.StationPosition.PositionLat,e.StationPosition.PositionLon)),i.setContent(o.str);var n=it.a.marker([e.StationPosition.PositionLat,e.StationPosition.PositionLon],{icon:st}).bindPopup(i);n.addTo(nt),e.markerID=n._leaflet_id,t.stationMarkers.push(n)}))},getNearStaionDetail:function(t){var e=this;nt.setView([t.StationPosition.PositionLat,t.StationPosition.PositionLon],18),this.stationMarkers.forEach((function(t){t._latlng.lat===e.lastSelectLatLon[0]&&t._latlng.lng===e.lastSelectLatLon[1]&&t.setIcon(st)})),this.stationMarkers.forEach((function(a){a._latlng.lat===t.StationPosition.PositionLat&&a._latlng.lng===t.StationPosition.PositionLon&&(a.setIcon(ct),e.lastSelectLatLon=[a._latlng.lat,a._latlng.lng])})),nt.eachLayer((function(t){t._leaflet_id!==e.locationMarkerID&&t instanceof it.a.Popup&&nt.removeLayer(t)}));var a=this.createPopupContent(t),o=it.a.popup({autoPan:!1,className:"popupSelect",offset:[0,-5]});o.setLatLng(it.a.latLng(t.StationPosition.PositionLat,t.StationPosition.PositionLon)),o.setContent(a.str),nt.addLayer(o),this.getEstimatedTimeOfArrival(t),document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.add("active"),window.innerWidth},zoomLevelAddMarker:function(){var t=this,e=nt.getZoom();e<=16?this.addNearStationMarker():(nt.eachLayer((function(e){e._leaflet_id!==t.locationMarkerID&&e instanceof it.a.Popup&&nt.removeLayer(e)})),this.nearStationList.forEach((function(e,a){var o=t.createPopupContent(e),i=it.a.popup({autoPan:!1,className:o.status,offset:[0,-5]});i.setLatLng(it.a.latLng(e.StationPosition.PositionLat,e.StationPosition.PositionLon)),i.setContent(o.str),nt.addLayer(i)})))},createPopupContent:function(t){var e="popupPrimary",a='\n      <div class="stop-popup">\n        <div class="name">'.concat(t.StationName.Zh_tw,"</div>\n      </div>\n      ");return{str:a,status:e}},getEstimatedTimeOfArrival:function(t){var e=this;this.EstimateNearList=[];var a="https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/NearBy?$spatialFilter=nearby(".concat(t.StationPosition.PositionLat,"%2C%20").concat(t.StationPosition.PositionLon,"%2C%201000)&$format=JSON");this.axios.get(a,{headers:this.$getAuthorizationHeader()}).then((function(a){t.Stops.forEach((function(t){a.data.forEach((function(a){t.StopUID===a.StopUID&&e.EstimateNearList.push(a)}))})),e.getRouteInfo(t)})).catch((function(t){console.log(t)}))},getRouteInfo:function(t){var e=this,a="https://ptx.transportdata.tw/MOTC/v2/Bus/Route/NearBy?$spatialFilter=nearby(".concat(t.StationPosition.PositionLat,"%2C%20").concat(t.StationPosition.PositionLon,"%2C%201000)&$format=JSON");this.axios.get(a,{headers:this.$getAuthorizationHeader()}).then((function(a){e.EstimateNearList.forEach((function(t){a.data.forEach((function(e){t.RouteUID===e.RouteUID&&(t.DepartureStopNameZh=e.DepartureStopNameZh,t.DestinationStopNameZh=e.DestinationStopNameZh,t.City=e.City)}))})),e.EstimateNearList.sort((function(t,e){return t.RouteName.Zh_tw-e.RouteName.Zh_tw})),console.log(e.EstimateNearList),e.selectStationName=t.StationName.Zh_tw,e.selectStationUID=t.StationUID})).catch((function(t){console.log(t)}))},backToNearStationList:function(){document.querySelector(".near-station-area").classList.add("active"),document.querySelector(".estimate-near-area").classList.remove("active")},showArea:function(t){"map"===t?(this.mobileTool="map",document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.remove("active")):"station"===t?(this.mobileTool="station",document.querySelector(".near-station-area").classList.add("active"),document.querySelector(".estimate-near-area").classList.remove("active")):"time"===t&&(this.mobileTool="time",document.querySelector(".near-station-area").classList.remove("active"),document.querySelector(".estimate-near-area").classList.add("active"))}},mounted:function(){nt=it.a.map("map",{zoomControl:!1,center:[23.51357237187571,120.21110434230025],zoom:8,tap:!1}),it.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(nt),it.a.control.zoom({position:"bottomright"}).addTo(nt),nt.on("moveend",(function(){document.querySelector(".gps-icon").classList.remove("active")}));var t=this.zoomLevelAddMarker;nt.on("zoomend",(function(){t()})),this.locateGPS()}},ut=a("6b0d"),ft=a.n(ut);const dt=ft()(lt,[["render",at]]);e["default"]=dt},"4e82":function(t,e,a){"use strict";var o=a("23e7"),i=a("e330"),n=a("59ed"),s=a("7b0b"),c=a("07fa"),r=a("577e"),l=a("d039"),u=a("addb"),f=a("a640"),d=a("04d1"),m=a("d998"),b=a("2d00"),p=a("512c"),h=[],v=i(h.sort),O=i(h.push),S=l((function(){h.sort(void 0)})),j=l((function(){h.sort(null)})),L=f("sort"),g=!l((function(){if(b)return b<70;if(!(d&&d>3)){if(m)return!0;if(p)return p<603;var t,e,a,o,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(o=0;o<47;o++)h.push({k:e+o,v:a})}for(h.sort((function(t,e){return e.v-t.v})),o=0;o<h.length;o++)e=h[o].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),y=S||!j||!L||!g,P=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:r(e)>r(a)?1:-1}};o({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&n(t);var e=s(this);if(g)return void 0===t?v(e):v(e,t);var a,o,i=[],r=c(e);for(o=0;o<r;o++)o in e&&O(i,e[o]);u(i,P(t)),a=i.length,o=0;while(o<a)e[o]=i[o++];while(o<r)delete e[o++];return e}})},"512c":function(t,e,a){var o=a("342f"),i=o.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},"56a7":function(t,e,a){t.exports=a.p+"img/bus_stop_select.dacbc18d.svg"},addb:function(t,e,a){var o=a("f36a"),i=Math.floor,n=function(t,e){var a=t.length,r=i(a/2);return a<8?s(t,e):c(t,n(o(t,0,r),e),n(o(t,r),e),e)},s=function(t,e){var a,o,i=t.length,n=1;while(n<i){o=n,a=t[n];while(o&&e(t[o-1],a)>0)t[o]=t[--o];o!==n++&&(t[o]=a)}return t},c=function(t,e,a,o){var i=e.length,n=a.length,s=0,c=0;while(s<i||c<n)t[s+c]=s<i&&c<n?o(e[s],a[c])<=0?e[s++]:a[c++]:s<i?e[s++]:a[c++];return t};t.exports=n},d998:function(t,e,a){var o=a("342f");t.exports=/MSIE|Trident/.test(o)}}]);
//# sourceMappingURL=chunk-730e92fa.778d3741.js.map