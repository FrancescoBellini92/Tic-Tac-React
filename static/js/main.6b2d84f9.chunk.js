(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),s=n(7),l=n(1);function i(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(l.a)(t[n],3),a=r[0],c=r[1],o=r[2];if(e[a]&&e[a]===e[c]&&e[a]===e[o])return{winner:e[a],coordinates:[a,c,o]}}return null}function u(e){for(var t=0;t<9;t++)if(!e[t])return!1;return!0}function m(e){var t=e.status;return a.a.createElement("div",{className:"row justify-content-center "},a.a.createElement("div",{className:"col-md-4 alert alert-primary text-center text-dark"},a.a.createElement("strong",null,t)))}function f(e){var t=e.style,n=e.value,r=e.onClick;return a.a.createElement("button",{className:"square",style:t,onClick:function(){return r()}},n)}function v(e){var t=e.squares,n=e.winningSquares,r=e.onClick,c=function(e){var c;return c=n.includes(e)?{color:"green"}:null,a.a.createElement(f,{value:t[e],style:c,onClick:function(){return r(e)}})};return a.a.createElement("div",{className:"col-md-6"},a.a.createElement("div",{className:"row justify-content-center"},c(0),c(1),c(2)),a.a.createElement("div",{className:"row justify-content-center"},c(3),c(4),c(5)),a.a.createElement("div",{className:"row justify-content-center"},c(6),c(7),c(8)))}function d(e){var t=e.history,n=e.onClick;return a.a.createElement("div",{className:"col-md-6 text-center"},a.a.createElement("div",{className:"list-group my-2"},a.a.createElement("div",{className:"list-group-item list-group-item-action list-group-item-primary text-center text-dark"},a.a.createElement("strong",null,"History of moves")),t.map((function(e,t){var r=t?"Go to move # ".concat(t):"Go to game start";return a.a.createElement("button",{key:t,className:"list-group-item list-group-item-action text-center",type:"button",onClick:function(){return n(t)}},r)}))))}var E=n(4),p=n(5),h=n(8),y=n(6),g=n(9),b=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(h.a)(this,Object(y.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",{className:"alert alert-danger"},a.a.createElement("h3",null,"Oops! An exception emerged... check the console for more info")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component);n(15);o.a.render(a.a.createElement(b,null,a.a.createElement((function(e){var t,n=Object(r.useState)([{squares:Array(9).fill(null)}]),c=Object(l.a)(n,2),o=c[0],f=c[1],E=Object(r.useState)(0),p=Object(l.a)(E,2),h=p[0],y=p[1],g=Object(r.useState)(!0),b=Object(l.a)(g,2),j=b[0],k=b[1],O=o[h],N=i(O.squares),w=u(O.squares);return t=N?"Winner: ".concat(N.winner):w?"Draw":"Next player: ".concat(j?"X":"O"),a.a.createElement("div",{className:"container"},a.a.createElement(m,{status:t}),a.a.createElement("div",{className:"row"},a.a.createElement(v,{squares:O.squares,winningSquares:N?N.coordinates:[],onClick:function(e){var t=o.slice(0,h+1)[o.length-1],n=Object(s.a)(t.squares);i(n)||u(h)||(n[e]=j?"X":"O",f(o.concat([{squares:n}])),y(o.length),k(!j))}}),a.a.createElement(d,{history:o,onClick:function(e){y(e),k(e%2===0),f(o.slice(0,e+1))}})))}),null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6b2d84f9.chunk.js.map