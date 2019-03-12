(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n,t){e.exports=t(49)},38:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),l=(t(38),t(22)),u=t(23),i=t(29),f=t(24),d=t(30),s=t(13),v=t(10),m=t(52),g=t(53),p=t(54),w=t(5),h=t(6),b=function(e){return e.getIn(["game","board"])},E=function(e){return e.getIn(["game","status"])},x=t(7),C=Object(x.Record)({value:0,covered:!0,flagged:!1}),y=new x.List,N=function(e,n){var t=n.row,r=n.col;return t>=0&&r>=0&&t<e.size&&r<e.get(0).size},O=function(e,n,t){if(n<0||t<0)return 0;var r=e.getIn([n,t]);return r&&-1===r.value?1:0},S=function(e,n){var t=n.row,r=n.col;return e.getIn([t,r,"covered"])},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.type,r=n.payload;switch(t){case"UNCOVER_CELL":return function e(n,t){var r=t.row,a=t.col;if(!N(n,{row:r,col:a}))return n;var o=n.getIn([r,a,"value"]),c=n.getIn([r,a,"covered"]);return c?(-1===o&&(n=n.map(function(e){return e.map(function(e){return-1===e.get("value")?e.set("covered",!1):e})})),n=n.setIn([r,a,"covered"],!1).setIn([r,a,"flagged"],!1),0===o&&c&&(n=e(n,{row:r-1,col:a-1}),n=e(n,{row:r-1,col:a}),n=e(n,{row:r-1,col:a+1}),n=e(n,{row:r,col:a-1}),n=e(n,{row:r,col:a+1}),n=e(n,{row:r+1,col:a-1}),n=e(n,{row:r+1,col:a}),n=e(n,{row:r+1,col:a+1})),n):n}(e,r);case"CREATE_NEW_BOARD":return function(e){for(var n=e.width,t=e.height,r=e.mines,a=[],o=0;o<t;o++){for(var c=[],l=0;l<n;l++)c.push(new C({}));a.push(new x.List(c))}for(var u=new x.List(a),i=0;i<r;i++){for(var f=Math.floor(Math.random()*t),d=Math.floor(Math.random()*n);-1===u.getIn([f,d,"value"]);)f=Math.floor(Math.random()*t),d=Math.floor(Math.random()*n);u=u.setIn([f,d,"value"],-1)}for(var s=0;s<t;s++)for(var v=0;v<n;v++){var m=u.getIn([s,v,"value"]);-1!==m&&(m+=O(u,s-1,v-1),m+=O(u,s-1,v),m+=O(u,s-1,v+1),m+=O(u,s,v-1),m+=O(u,s,v+1),m+=O(u,s+1,v-1),m+=O(u,s+1,v),m+=O(u,s+1,v+1),u=u.setIn([s,v,"value"],m))}return u}(r);case"FLAG_CELL":return function(e,n){var t=n.row,r=n.col;return N(e,{row:t,col:r})&&S(e,{row:t,col:r})?e.setIn([t,r,"flagged"],!0):e}(e,r);case"UNFLAG_CELL":return function(e,n){var t=n.row,r=n.col;return N(e,{row:t,col:r})&&S(e,{row:t,col:r})?e.setIn([t,r,"flagged"],!1):e}(e,r);default:return e}},I={MENU:Symbol("menu"),RUNNING:Symbol("running"),LOST:Symbol("lost"),WON:Symbol("won")};function j(){var e=Object(w.a)(["\n  color: ",";\n"]);return j=function(){return e},e}function A(){var e=Object(w.a)(["\n  font-size: 12px;\n  color: red;\n"]);return A=function(){return e},e}function _(){var e=Object(w.a)(["\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  background: #ff7500;\n  margin: 0 auto;\n  display: inline-block;\n  vertical-align: middle;\n  box-shadow: 0px 0px 5px 1px #ff3f00, 0px 0px 3px 0px #fffc00 inset;\n"]);return _=function(){return e},e}function G(){var e=Object(w.a)(["\n  max-width: 960px;\n  margin: 30px auto;\n  text-align: center;\n"]);return G=function(){return e},e}function M(){var e=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return M=function(){return e},e}function R(){var e=Object(w.a)(["\n  width: ","px;\n  height: ","px;\n  background: ",";\n  border: 2px solid #333;\n  border-radius: 4px;\n  text-align: center;\n  font-size: ","px;\n  line-height: ","px;\n  transition: 0.3s;\n  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15) inset;\n  cursor: pointer;\n  :hover {\n    filter: brightness(1.2);\n  }\n"]);return R=function(){return e},e}var U={cellSize:30,minesCountColors:["#00C9A7","#008F7A","#0089BA","#2C73D2","#845EC2","#D65DB1","#FF6F91","#FF9671"]},z=h.a.div(R(),U.cellSize,U.cellSize,function(e){return e.covered?"#6cb7ff":"#fff"},.6*U.cellSize,U.cellSize),k=h.a.div(M()),F=h.a.div(G()),T=h.a.div(_(),U.cellSize/2,U.cellSize/2),B=h.a.div(A()),D=function(){return a.a.createElement(B,null,a.a.createElement("i",{className:"fas fa-flag"}))},W=h.a.span(j(),function(e){return U.minesCountColors[e.value-1]}),J=function(e){var n=e.value,t=e.covered;return e.flagged?a.a.createElement(D,null):0===n?null:t?null:n<0?a.a.createElement(T,null):a.a.createElement(W,{value:n},n)},V={createNewBoard:function(e){return{type:"CREATE_NEW_BOARD",payload:{width:e.width,height:e.height,mines:e.mines}}},uncoverCell:function(e){return{type:"UNCOVER_CELL",payload:{row:e.row,col:e.col}}},flagCell:function(e){return{type:"FLAG_CELL",payload:{row:e.row,col:e.col}}},unflagCell:function(e){return{type:"UNFLAG_CELL",payload:{row:e.row,col:e.col}}},setGameStatus:function(e){return{type:"SET_GAME_STATUS",payload:e}}},H=Object(s.b)(function(e){return{board:b(e),gameStatus:E(e)}},V)(function(e){var n=e.board,t=e.gameStatus,r=e.createNewBoard,o=e.uncoverCell,c=e.flagCell,l=e.unflagCell,u=e.setGameStatus;return a.a.createElement(F,null,a.a.createElement("button",{onClick:function(){u(I.RUNNING),r({width:9,height:9,mines:10})}},"New"),n.map(function(e,r){return a.a.createElement(k,null,e.map(function(e,i){return a.a.createElement(z,{covered:e.covered,onClick:function(){t===I.RUNNING&&(o({row:r,col:i}),-1===n.getIn([r,i,"value"])&&u(I.LOST))},onContextMenu:function(n){n.preventDefault(),t===I.RUNNING&&(e.flagged?l({row:r,col:i}):c({row:r,col:i}))}},a.a.createElement(J,{value:e.value,covered:e.covered,flagged:e.flagged}))}))}))}),$=t(51);function q(){var e=Object(w.a)(["\n  margin: 30px;\n"]);return q=function(){return e},e}function K(){var e=Object(w.a)(["\n  color: #fff;\n  max-width: 960px;\n  margin: 0 auto;\n"]);return K=function(){return e},e}var P=h.a.div(K()),Q=h.a.div(q()),X=function(){return a.a.createElement(P,null,a.a.createElement(Q,null,a.a.createElement("h1",null,"Start new game"),"Home ",a.a.createElement($.a,{to:"/game"},"Game")))},Y=t(11),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.MENU,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.type,r=n.payload;return"SET_GAME_STATUS"===t?r:e},ee=Object(Y.combineReducers)({board:L,status:Z}),ne=Object(Y.combineReducers)({game:ee}),te=Object(v.b)(ne),re=function(e){function n(){return Object(l.a)(this,n),Object(i.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(s.a,{store:te},a.a.createElement(p.a,null,a.a.createElement(m.a,null,a.a.createElement(g.a,{path:"/game",component:H}),a.a.createElement(g.a,{exact:!0,path:"/",component:X}),a.a.createElement(H,null))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.5770fdce.chunk.js.map