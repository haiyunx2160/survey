(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return k})),n.d(a,"handleToken",(function(){return g}));n(41);var r=n(0),c=n.n(r),u=n(17),l=n.n(u),o=n(7),i=n(10),s=n(37),p=n(11),m=n(12),h=n(13),f=n(14),d=n(19),y=n(8),b=n(16),v=n.n(b),E=n(22),j=n(23),O=n.n(j),k=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=n(38),x=n.n(w),C=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(x.a,{name:"Emaily",description:"$5 for 5 email credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_uCa7j9Pv4aNdHBBL6l86W5cQ00IyrsB3dx"},c.a.createElement("button",{className:"btn"},"ADD CREDITS"))}}]),n}(r.Component),N=Object(o.b)(null,a)(C),_=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Log in with Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(N,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits: ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Log out"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Emaily"),c.a.createElement("ul",{className:"right "},this.renderContent())))}}]),n}(r.Component);var D=Object(o.b)((function(e){return{auth:e.auth}}))(_),B=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily!"),c.a.createElement("p",null,"Collect feedback from your users."))},I=function(){return c.a.createElement("h2",null," Dashboard ")},L=function(){return c.a.createElement("h2",null," SurveyNew ")},T=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement(D,null),c.a.createElement(y.a,{exact:!0,path:"/",component:B}),c.a.createElement(y.a,{exact:!0,path:"/surveys",component:I}),c.a.createElement(y.a,{exact:!0,path:"/surveys/new",component:L})))}}]),n}(r.Component),A=Object(o.b)(null,a)(T),J=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),S=Object(i.d)(J,{},Object(i.a)(s.a));l.a.render(c.a.createElement(o.a,{store:S},c.a.createElement(A,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5645ef16.chunk.js.map