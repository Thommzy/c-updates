(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Oh6W:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deaths",function(){return a("XuXw")}])},XuXw:function(t,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return I}));var e=a("o0o1"),r=a.n(e),c=a("1OyB"),i=a("vuIU"),o=a("Ji7U"),s=a("md7G"),u=a("foSv"),l=a("q1tI"),g=a.n(l),p=a("nOHt"),f=a.n(p),y=a("obyI"),d=a("vDqi"),m=a.n(d),R=a("08x6"),h=a("yE/o"),j=a("z8k1"),v=a("5XkN"),w=a("QetY"),b=a("wd/R"),N=a.n(b),k=g.a.createElement;function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var S=f.a;function O(t){var n=t.toString().split("");return 7===n.length&&n.splice(1,0,","),6===n.length&&n.splice(3,0,","),5===n.length&&n.splice(2,0,","),4===n.length&&n.splice(1,0,","),n.length,n.join("")}var I=function(t){Object(o.a)(e,t);var n,a=(n=e,function(){var t,a=Object(u.a)(n);if(D()){var e=Object(u.a)(this).constructor;t=Reflect.construct(a,arguments,e)}else t=a.apply(this,arguments);return Object(s.a)(this,t)});function e(){return Object(c.a)(this,e),a.apply(this,arguments)}return Object(i.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.confirms;return k(g.a.Fragment,null,k(R.a,{router:S}),k(h.a,null,k("div",{className:"main-confirmed"},k(j.a.Group,{className:"card-main"},Object.keys(t).map((function(n,a){return k(j.a,{key:a,className:"center"},k(j.a.Content,null,k(v.a,{floated:"right",size:"mini",src:"US"===t[n].countryRegion?"/static/us-flag.jpg":"Spain"===t[n].countryRegion?"/static/spain-flag.jpg":"Italy"===t[n].countryRegion?"/static/italy-flag.jpg":"France"===t[n].countryRegion?"/static/france-flag.jpg":"Germany"===t[n].countryRegion?"/static/germany-flag.gif":"United Kingdom"===t[n].countryRegion?"/static/uk-flag.jpg":"Turkey"===t[n].countryRegion?"/static/turkey-flag.jpg":"Iran"===t[n].countryRegion?"/static/iran-flag.jpg":"Russia"===t[n].countryRegion?"/static/russia-flag.jpg":"China"===t[n].countryRegion?"/static/china-flag.jpg":"Brazil"===t[n].countryRegion?"/static/brazil-flag.jpg":"Belgium"===t[n].countryRegion?"/static/belgium-flag.jpg":"Netherlands"===t[n].countryRegion?"/static/netherland-flag.jpg":"Switzerland"===t[n].countryRegion?"/static/switzerland-flag.jpg":"India"===t[n].countryRegion?"/static/india-flag.jpg":"Peru"===t[n].countryRegion?"/static/peru-flag.png":"Canada"===t[n].countryRegion?"/static/canada-flag.jpg":"Portugal"===t[n].countryRegion?"/static/portugal-flag.jpg":"Ecuador"===t[n].countryRegion?"/static/ecuador-flag.png":"Ireland"===t[n].countryRegion?"/static/ireland.jpg":"Nigeria"===t[n].countryRegion?"/static/nigeria-flag.jpg":"Ghana"===t[n].countryRegion?"/static/ghana-flag.jpg":null,className:"center"}),k(j.a.Description,{className:"lowerSpace"},"Province state:",k("strong",null,t[n].provinceState)),k(j.a.Description,{className:"lowerSpace"},"Country Region:",k("strong",null,t[n].countryRegion)),k(j.a.Description,{className:"lowerSpace"},"Last Update:",k("strong",null,N()(t[n].lastUpdate).format("YYYY-MM-DD"))),k(j.a.Description,{className:"lowerSpace"},"Deaths:",k("strong",null,O(t[n].deaths))),k(j.a.Description,{className:"lowerSpace"},"Active:",k("strong",null,O(t[n].active)))),k(j.a.Content,{extra:!0},k("div",{className:"ui two buttons"},k(w.a,{basic:!0,color:"red"},"||"))))}))))))}}],[{key:"getInitialProps",value:function(){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.next=4,r.a.awrap(m.a.get("".concat(y.a,"/confirmed")));case 4:n=a.sent,t=n.data,a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:return a.abrupt("return",{confirms:t});case 11:case"end":return a.stop()}}),null,null,[[1,8]],Promise)}}]),e}(l.Component)}},[["Oh6W",0,2,1,3]]]);