(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Oh6W:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deaths",function(){return a("XuXw")}])},XuXw:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return I}));var n=a("o0o1"),r=a.n(n),c=a("1OyB"),i=a("vuIU"),o=a("JX7q"),s=a("Ji7U"),l=a("md7G"),u=a("foSv"),g=a("rePB"),p=a("LvDl"),f=a.n(p),d=a("q1tI"),h=a.n(d),y=a("nOHt"),v=a.n(y),R=a("obyI"),m=a("vDqi"),j=a.n(m),w=a("08x6"),S=a("2LEh"),b=a("yE/o"),N=a("z8k1"),O=a("5XkN"),D=a("QetY"),k=a("wd/R"),C=a.n(k),L=h.a.createElement;function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var x=v.a;function E(t){var e=t.toString().split("");return 7===e.length&&e.splice(1,0,","),6===e.length&&e.splice(3,0,","),5===e.length&&e.splice(2,0,","),4===e.length&&e.splice(1,0,","),e.length,e.join("")}console.log(x);var I=function(t){Object(s.a)(n,t);var e,a=(e=n,function(){var t,a=Object(u.a)(e);if(P()){var n=Object(u.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;Object(c.a)(this,n);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t=a.call.apply(a,[this].concat(r)),Object(g.a)(Object(o.a)(t),"state",{isLoading:!1,results:t.props.confirms,value:""}),Object(g.a)(Object(o.a)(t),"handleResultSelect",(function(e,a){var n=a.result;return t.setState({value:n.countryRegion})})),Object(g.a)(Object(o.a)(t),"handleSearchChange",(function(e,a){var n=a.value;t.setState({isLoading:!0,value:n}),setTimeout((function(){if(t.state.value.length<1)return t.setState({isLoading:!1,results:t.props.confirms,value:""});var e=new RegExp(f.a.escapeRegExp(t.state.value),"i");t.setState({isLoading:!1,results:f.a.filter(t.props.confirms,(function(t){return e.test(t.countryRegion)}))})}),300)})),t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=(t.confirms,t.loading),a=this.state,n=a.isLoading,r=a.value,c=a.results;return console.log(c),L(h.a.Fragment,null,L(w.a,{router:x}),L("div",{className:"searchBar"},L(S.a,{loading:n,onResultSelect:this.handleResultSelect,onSearchChange:f.a.debounce(this.handleSearchChange,500,{leading:!0}),results:c,value:r,placeholder:"Search Country"})),L(b.a,null,e?L("h1",null,"Loading..."):L("div",{className:"main-confirmed"},L(N.a.Group,{className:"card-main"},c.map((function(t,e){return L(N.a,{key:e,className:"center"},L(N.a.Content,null,L(O.a,{floated:"right",size:"mini",src:"US"===t.countryRegion?"/static/us-flag.jpg":"Spain"===t.countryRegion?"/static/spain-flag.jpg":"Italy"===t.countryRegion?"/static/italy-flag.jpg":"France"===t.countryRegion?"/static/france-flag.jpg":"Germany"===t.countryRegion?"/static/germany-flag.gif":"United Kingdom"===t.countryRegion?"/static/uk-flag.jpg":"Turkey"===t.countryRegion?"/static/turkey-flag.jpg":"Iran"===t.countryRegion?"/static/iran-flag.jpg":"Russia"===t.countryRegion?"/static/russia-flag.jpg":"China"===t.countryRegion?"/static/china-flag.jpg":"Brazil"===t.countryRegion?"/static/brazil-flag.jpg":"Belgium"===t.countryRegion?"/static/belgium-flag.jpg":"Netherlands"===t.countryRegion?"/static/netherland-flag.jpg":"Switzerland"===t.countryRegion?"/static/switzerland-flag.jpg":"India"===t.countryRegion?"/static/india-flag.jpg":"Peru"===t.countryRegion?"/static/peru-flag.png":"Canada"===t.countryRegion?"/static/canada-flag.jpg":"Portugal"===t.countryRegion?"/static/portugal-flag.jpg":"Ecuador"===t.countryRegion?"/static/ecuador-flag.png":"Ireland"===t.countryRegion?"/static/ireland.jpg":"Nigeria"===t.countryRegion?"/static/nigeria-flag.jpg":"Ghana"===t.countryRegion?"/static/ghana-flag.jpg":null,className:"center"}),L(N.a.Description,{className:"lowerSpace"},"Province state:",L("strong",null,t.provinceState)),L(N.a.Description,{className:"lowerSpace"},"Country Region:",L("strong",null,t.countryRegion)),L(N.a.Description,{className:"lowerSpace"},"Last Update:",L("strong",null,C()(t.lastUpdate).format("YYYY-MM-DD"))),L(N.a.Description,{className:"lowerSpace"},"Deaths:",L("strong",null,E(t.deaths))),L(N.a.Description,{className:"lowerSpace"},"Active:",L("strong",null,E(t.active)))),L(N.a.Content,{extra:!0},L("div",{className:"ui two buttons"},L(D.a,{basic:!0,color:"red"},"||"))))}))))))}}],[{key:"getInitialProps",value:function(){var t,e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.prev=1,a.next=4,r.a.awrap(j.a.get("".concat(R.a,"/confirmed")));case 4:e=a.sent,t=e.data,a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:return a.abrupt("return",{confirms:t,loading:!1});case 11:case"end":return a.stop()}}),null,null,[[1,8]],Promise)}}]),n}(d.Component)}},[["Oh6W",0,1,4,2,3,5,6]]]);