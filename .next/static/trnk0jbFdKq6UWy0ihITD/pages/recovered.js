(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3tox":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recovered",function(){return e("odP1")}])},odP1:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return O}));var a=e("o0o1"),r=e.n(a),c=e("1OyB"),i=e("vuIU"),o=e("Ji7U"),s=e("md7G"),l=e("foSv"),u=e("q1tI"),g=e.n(u),p=e("nOHt"),f=e.n(p),y=e("obyI"),d=e("vDqi"),R=e.n(d),m=e("08x6"),j=e("yE/o"),v=e("z8k1"),h=e("5XkN"),w=e("QetY"),b=e("wd/R"),N=e.n(b),k=g.a.createElement;function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=f.a;function P(t){var n=t.toString().split("");return 7===n.length&&n.splice(1,0,","),6===n.length&&n.splice(3,0,","),5===n.length&&n.splice(2,0,","),4===n.length&&n.splice(1,0,","),n.length,n.join("")}var O=function(t){Object(o.a)(a,t);var n,e=(n=a,function(){var t,e=Object(l.a)(n);if(S()){var a=Object(l.a)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return Object(s.a)(this,t)});function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.confirms;return k(g.a.Fragment,null,k(m.a,{router:D}),k(j.a,null,k("div",{className:"main-confirmed"},k(v.a.Group,{className:"card-main"},Object.keys(t).map((function(n,e){return k(v.a,{key:e,className:"center"},k(v.a.Content,null,k(h.a,{floated:"right",size:"mini",src:"US"===t[n].countryRegion?"/static/us-flag.jpg":"Spain"===t[n].countryRegion?"/static/spain-flag.jpg":"Italy"===t[n].countryRegion?"/static/italy-flag.jpg":"France"===t[n].countryRegion?"/static/france-flag.jpg":"Germany"===t[n].countryRegion?"/static/germany-flag.gif":"United Kingdom"===t[n].countryRegion?"/static/uk-flag.jpg":"Turkey"===t[n].countryRegion?"/static/turkey-flag.jpg":"Iran"===t[n].countryRegion?"/static/iran-flag.jpg":"Russia"===t[n].countryRegion?"/static/russia-flag.jpg":"China"===t[n].countryRegion?"/static/china-flag.jpg":"Brazil"===t[n].countryRegion?"/static/brazil-flag.jpg":"Belgium"===t[n].countryRegion?"/static/belgium-flag.jpg":"Netherlands"===t[n].countryRegion?"/static/netherland-flag.jpg":"Switzerland"===t[n].countryRegion?"/static/switzerland-flag.jpg":"India"===t[n].countryRegion?"/static/india-flag.jpg":"Peru"===t[n].countryRegion?"/static/peru-flag.png":"Canada"===t[n].countryRegion?"/static/canada-flag.jpg":"Portugal"===t[n].countryRegion?"/static/portugal-flag.jpg":"Ecuador"===t[n].countryRegion?"/static/ecuador-flag.png":"Ireland"===t[n].countryRegion?"/static/ireland.jpg":"Nigeria"===t[n].countryRegion?"/static/nigeria-flag.jpg":"Ghana"===t[n].countryRegion?"/static/ghana-flag.jpg":null,className:"center"}),k(v.a.Description,{className:"lowerSpace"},"Province state:",k("strong",null,t[n].provinceState)),k(v.a.Description,{className:"lowerSpace"},"Country Region:",k("strong",null,t[n].countryRegion)),k(v.a.Description,{className:"lowerSpace"},"Last Update:",k("strong",null,N()(t[n].lastUpdate).format("YYYY-MM-DD"))),k(v.a.Description,{className:"lowerSpace"},"Recovered:",k("strong",null,P(t[n].recovered))),k(v.a.Description,{className:"lowerSpace"},"Active:",k("strong",null,P(t[n].active)))),k(v.a.Content,{extra:!0},k("div",{className:"ui two buttons"},k(w.a,{basic:!0,color:"red"},"||"))))}))))))}}],[{key:"getInitialProps",value:function(){var t,n;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,r.a.awrap(R.a.get("".concat(y.a,"/confirmed")));case 4:n=e.sent,t=n.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",{confirms:t});case 12:case"end":return e.stop()}}),null,null,[[1,8]],Promise)}}]),a}(u.Component)}},[["3tox",0,2,1,3]]]);