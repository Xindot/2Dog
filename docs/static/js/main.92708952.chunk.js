(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),c=(n(14),n(3)),u=n(4),l=n(6),s=n(5),h=n(7),m=(n(15),"2017-12-27"),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showDT:"~ \u4eb2\u7231\u7684 ~"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.showDT()},1e3)}},{key:"componentWillUnmount",value:function(){}},{key:"showDT",value:function(){var e=this;setTimeout(function(){var t=e.dateFormat();e.setState({showDT:t}),e.showDT()},1e3)}},{key:"dateFormat",value:function(){var e=(new Date).getTime()-new Date(m).getTime(),t=e%864e5,n=t%36e5,o=n%6e4;return" \u6211\u4eec\u5df2\u7ecf\u76f8\u8bc6 "+Math.floor(e/864e5)+" \u5929 "+Math.floor(t/36e5)+" \u5c0f\u65f6 "+Math.floor(n/6e4)+" \u5206\u949f "+Math.round(o/1e3)+" \u79d2 "}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,this.state.showDT)),a.a.createElement("div",null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.92708952.chunk.js.map