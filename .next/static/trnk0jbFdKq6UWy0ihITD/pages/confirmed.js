(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dj9r:function(t,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return z}));var e=a("o0o1"),r=a.n(e),i=a("1OyB"),c=a("vuIU"),o=a("Ji7U"),s=a("md7G"),l=a("foSv"),u=a("q1tI"),g=a.n(u),p=a("nOHt"),f=a.n(p),y=a("obyI"),d=a("vDqi"),m=a.n(d),R=a("08x6"),j=a("yE/o"),h=a("z8k1"),v=a("5XkN"),w=a("QetY"),b=a("wd/R"),N=a.n(b),k=g.a.createElement;function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=f.a;function O(t){var n=t.toString().split("");return 7===n.length&&n.splice(1,0,","),6===n.length&&n.splice(3,0,","),5===n.length&&n.splice(2,0,","),4===n.length&&n.splice(1,0,","),n.length,n.join("")}var z=function(t){Object(o.a)(e,t);var n,a=(n=e,function(){var t,a=Object(l.a)(n);if(S()){var e=Object(l.a)(this).constructor;t=Reflect.construct(a,arguments,e)}else t=a.apply(this,arguments);return Object(s.a)(this,t)});function e(){return Object(i.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,n=t.confirms,a=t.loading;return k(g.a.Fragment,null,k(R.a,{router:D}),k(j.a,null,a?k("h1",null,"Loading..."):k("div",{className:"main-confirmed"},k(h.a.Group,{className:"card-main"},Object.keys(n).map((function(t,a){return k(h.a,{key:a,className:"center"},k(h.a.Content,null,k(v.a,{floated:"right",size:"mini",src:"US"===n[t].countryRegion?"/static/us-flag.jpg":"Spain"===n[t].countryRegion?"/static/spain-flag.jpg":"Italy"===n[t].countryRegion?"/static/italy-flag.jpg":"France"===n[t].countryRegion?"/static/france-flag.jpg":"Germany"===n[t].countryRegion?"/static/germany-flag.gif":"United Kingdom"===n[t].countryRegion?"/static/uk-flag.jpg":"Turkey"===n[t].countryRegion?"/static/turkey-flag.jpg":"Iran"===n[t].countryRegion?"/static/iran-flag.jpg":"Russia"===n[t].countryRegion?"/static/russia-flag.jpg":"China"===n[t].countryRegion?"/static/china-flag.jpg":"Brazil"===n[t].countryRegion?"/static/brazil-flag.jpg":"Belgium"===n[t].countryRegion?"/static/belgium-flag.jpg":"Netherlands"===n[t].countryRegion?"/static/netherland-flag.jpg":"Switzerland"===n[t].countryRegion?"/static/switzerland-flag.jpg":"India"===n[t].countryRegion?"/static/india-flag.jpg":"Peru"===n[t].countryRegion?"/static/peru-flag.png":"Canada"===n[t].countryRegion?"/static/canada-flag.jpg":"Portugal"===n[t].countryRegion?"/static/portugal-flag.jpg":"Ecuador"===n[t].countryRegion?"/static/ecuador-flag.png":"Ireland"===n[t].countryRegion?"/static/ireland.jpg":"Nigeria"===n[t].countryRegion?"/static/nigeria-flag.jpg":"Ghana"===n[t].countryRegion?"/static/ghana-flag.jpg":null,className:"center"}),k(h.a.Description,{className:"lowerSpace"},"Province state:",k("strong",null,n[t].provinceState)),k(h.a.Description,{className:"lowerSpace"},"Country Region:",k("strong",null,n[t].countryRegion)),k(h.a.Description,{className:"lowerSpace"},"Last Update:",k("strong",null,N()(n[t].lastUpdate).format("YYYY-MM-DD"))),k(h.a.Description,{className:"lowerSpace"},"Confirmed:",k("strong",null,O(n[t].confirmed))),k(h.a.Description,{className:"lowerSpace"},"Active:",k("strong",null,O(n[t].active)))),k(h.a.Content,{extra:!0},k("div",{className:"ui two buttons"},k(w.a,{basic:!0,color:"red"},"||"))))}))))))}}],[{key:"getInitialProps",value:function(){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.next=4,r.a.awrap(m.a.get("".concat(y.a,"/confirmed")));case 4:n=a.sent,t=n.data,a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:return a.abrupt("return",{confirms:t,loading:!1});case 11:case"end":return a.stop()}}),null,null,[[1,8]],Promise)}}]),e}(u.Component)},nz2X:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmed",function(){return a("dj9r")}])}},[["nz2X",0,2,1,3]]]);