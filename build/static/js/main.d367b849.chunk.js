(this["webpackJsonpwhats-in-my-tile"]=this["webpackJsonpwhats-in-my-tile"]||[]).push([[0],{170:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(53),l=n.n(a),c=(n(64),n(58)),i=n(57),s=n(54),u=n.n(s),h=n(55),p=n.n(h),f=n(56);var d=function(){var e=Object(o.useState)({sourceLayer:[{}]}),t=Object(c.a)(e,2),n=t[0],a=t[1],l=Object(o.useCallback)((function(e){e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;console.log(e);var n=new p.a(e),o=new f.VectorTile(n),r={};console.log("pbf length:",n.length);var l=o.layers;Object.keys(l).forEach((function(e){for(var t=[],n=l[e],o=0;o<n.length;o++){var a=n.feature(o);t.push({extent:a.extent,type:a.type,properties:a.properties})}r[e]=t})),a(r),console.log(r)},t.readAsArrayBuffer(e)}))}),[]),s=Object(i.a)({onDrop:l}),h=s.getRootProps,d=s.getInputProps,m=s.isDragActive;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"What's in my tile?"),r.a.createElement("div",Object.assign({},h(),{className:"dropZone"}),r.a.createElement("input",d()),m?r.a.createElement("p",null,"Drop the files here ..."):r.a.createElement("p",null,"Drag 'n' drop a PBF vector tile here, or click to select file")),r.a.createElement(u.a,{data:n,theme:"chalk",hideRoot:!0,shouldExpandNode:function(e,t,n){return!(3!==n||!e||"properties"!==e[0])||(!(2!==n||!e||0!==e[0])||(n<2||void 0))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,n){e.exports=n(170)},64:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.d367b849.chunk.js.map