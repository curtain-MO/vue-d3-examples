(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17cc462a"],{"0d28":function(t,e,i){"use strict";var n=i("9014"),r=i.n(n);r.a},"386b":function(t,e,i){var n=i("5ca1"),r=i("79e5"),a=i("be13"),s=/"/g,o=function(t,e,i,n){var r=String(a(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),n(n.P+n.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",i)}},9014:function(t,e,i){},ac6a:function(t,e,i){for(var n=i("cadf"),r=i("0d58"),a=i("2aba"),s=i("7726"),o=i("32e9"),l=i("84f2"),u=i("2b4c"),c=u("iterator"),h=u("toStringTag"),d=l.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(g),p=0;p<f.length;p++){var v,L=f[p],b=g[L],x=s[L],k=x&&x.prototype;if(k&&(k[c]||o(k,c,d),k[h]||o(k,h,L),l[L]=d,b))for(v in n)k[v]||a(k,v,n[v],!0)}},b08e:function(t){t.exports=JSON.parse('{"nodes":[{"id":"新基建","group":1},{"id":"最新消息","group":2},{"id":"新基建介绍","group":3},{"id":"新基建龙头股","group":4},{"id":"发展历程","group":5},{"id":"存在优势","group":8},{"id":"5G","group":6},{"id":"特高压","group":8},{"id":"人工智能","group":8},{"id":"城际高速铁路","group":8},{"id":"工业互联网","group":8}],"links":[{"source":"城际高速铁路","target":"新基建","value":1},{"source":"工业互联网","target":"新基建","value":1},{"source":"最新消息","target":"新基建","value":1},{"source":"新基建介绍","target":"新基建","value":2},{"source":"新基建龙头股","target":"新基建","value":3},{"source":"发展历程","target":"新基建","value":3},{"source":"5G","target":"新基建","value":3},{"source":"特高压","target":"新基建","value":3},{"source":"人工智能","target":"新基建","value":3},{"source":"存在优势","target":"新基建","value":7}]}')},b54a:function(t,e,i){"use strict";i("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},ce4c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Force-based label placement II")]),i("svg",{attrs:{id:"viz"}})])},r=[],a=(i("b54a"),i("ac6a"),i("5698")),s=i("b08e"),o={name:"ForceBasedLabelPlacement",data:function(){return{color:null,graph:null,label:null,labelLayout:null,graphLayout:null,width:1250,height:800,adjlist:[],svg:null,container:null,link:null,node:null,labelNode:null}},mounted:function(){var t=this;this.color=a["u"](a["v"]),this.graph=s,this.label={nodes:[],links:[]},this.graph.nodes.forEach((function(e,i){t.label.nodes.push({node:e}),t.label.nodes.push({node:e}),t.label.links.push({source:2*i,target:2*i+1})})),this.graphLayout=a["h"](this.graph.nodes).force("charge",a["g"]().strength(-500)).force("x",a["i"](this.width/2)).force("y",a["j"](this.height/2)).force("link",a["f"](this.graph.links).id((function(t){return t.id})).distance(100)).on("tick",t.ticked),this.graph.links.forEach((function(e){t.adjlist[e.source.index+"-"+e.target.index]=!0,t.adjlist[e.target.index+"-"+e.source.index]=!0})),this.svg=a["w"]("#viz").attr("width",this.width).attr("height",this.height),this.container=this.svg.append("g"),this.svg.call(a["A"]().scaleExtent([.8,4]).on("zoom",(function(){t.container.attr("transform",a["d"].transform)}))),this.link=this.container.append("g").attr("class","links").selectAll("line"),t.node=this.container.append("g").attr("class","nodes").selectAll("g"),this.labelNode=this.container.append("g").attr("class","labelNodes").selectAll("text"),this.restart()},methods:{restart:function(){var t=this;this.node=this.node.data(this.graph.nodes,(function(t){return t.id})),this.node.exit().remove(),this.node=this.node.enter().append("circle").attr("fill",(function(e){return t.color(e.id)})).attr("r",5).merge(this.node),this.link=this.link.data(this.graph.links,(function(t){return t.source.id+"-"+t.target.id})),this.link.exit().remove(),this.link=this.link.enter().append("line").merge(this.link),this.labelNode=this.labelNode.data(this.graph.nodes,(function(t){return t.id})),this.labelNode.exit().remove(),this.labelNode=this.labelNode.enter().append("text").merge(this.labelNode).text((function(t){return t.id})).style("fill","#555").style("font-size",12).style("pointer-events","none"),this.graphLayout.nodes(this.graph.nodes),this.graphLayout.force("link").links(this.graph.links)},ticked:function(){var t=this;t.node.call(t.updateNode),t.link.call(t.updateLink),t.labelNode.each((function(e,i){if(i%2===0);else{var n=this.getBBox(),r=e.x-e.x,a=e.y-e.y,s=Math.sqrt(r*r+a*a),o=n.width*(r-s)/(2*s);o=Math.max(-n.width,Math.min(0,o));var l=16;this.setAttribute("transform","translate("+t.fixna(o)+","+l+")")}})),t.labelNode.call(t.updateNode)},updateLink:function(){var t=this;t.link.attr("x1",(function(e){return t.fixna(e.source.x)})).attr("y1",(function(e){return t.fixna(e.source.y)})).attr("x2",(function(e){return t.fixna(e.target.x)})).attr("y2",(function(e){return t.fixna(e.target.y)}))},updateNode:function(t){var e=this;t.attr("transform",(function(t){return"translate("+e.fixna(t.x)+","+e.fixna(t.y)+")"}))},fixna:function(t){return isFinite(t)?t:0}}},l=o,u=(i("0d28"),i("2877")),c=Object(u["a"])(l,n,r,!1,null,"4c28cd2c",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-17cc462a.96c1871e.js.map