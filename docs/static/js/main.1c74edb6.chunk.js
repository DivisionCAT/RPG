(this.webpackJsonprpg=this.webpackJsonprpg||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r);n(8),n(9);Object.defineProperty(Array.prototype,"randomItem",{value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t)return this[Math.floor(Math.random()*this.length)];for(var n=new Array(this.length),a=0;a<t;){var l=Math.floor(Math.random()*this.length);n[l]||(n[l]=!0,a+=1)}var r=[];return n.forEach((function(t,n){t&&r.push(e[n])})),r}});var m=["\ud5c8\ub2c8\uc624\ud2b8","\ud558\ud2f0","\ud30c\ub9c8\uc0b0 \uc624\ub808\uac00\ub178","\ud654\uc774\ud2b8","\uc704\ud2b8","\ud50c\ub7ab\ube0c\ub798\ub4dc"],c=["\uc26c\ub9bc\ud504","\uc2a4\ud14c\uc774\ud06c & \uce58\uc988","\uc368\ube0c\uc6e8\uc774 \uba5c\ud2b8","\ud130\ud0a4 \ubca0\uc774\ucee8","\uce58\ud0a8 \ub370\ub9ac\uc57c\ub07c","\ub85c\ud2f0\uc138\ub9ac \ubc14\ube44\ud050 \uce58\ud0a8","\ub85c\uc2a4\ud2b8 \uce58\ud0a8","\uc368\ube0c\uc6e8\uc774 \ud074\ub7fd","\ud130\ud0a4","\uc5d0\uadf8\ub9c8\uc694","\uc774\ud0c8\ub9ac\uc548 \ube44\uc5e0\ud2f0","\ubbf8\ud2b8\ubcfc","\ud584"],u=["\uc544\uba54\ub9ac\uce78","\uc288\ub808\ub4dc","\ubaa8\uc9dc\ub810\ub77c"],i=["\ub3cc\ub824\uc8fc\uc138\uc694","\uc544\ub2c8\uc694","\uc591\ud30c \ub123\uace0 \ub3cc\ub824\uc8fc\uc138\uc694"],d=["\uc591\uc0c1\ucd94","\ud1a0\ub9c8\ud1a0","\uc624\uc774","\ud53c\ub9dd","\uc591\ud30c","\ud53c\ud074","\uc62c\ub9ac\ube0c","\ud560\ub77c\ud53c\ub1e8","\uc544\ubcf4\uce74\ub3c4"],s=["\ub79c\uce58\ub4dc\ub808\uc2f1","\ub9c8\uc694\ub124\uc988","\uc2a4\uc704\ud2b8 \uc5b4\ub2c8\uc5b8","\ud5c8\ub2c8 \uba38\uc2a4\ud130\ub4dc","\uc2a4\uc704\ud2b8 \uce60\ub9ac","\ud56b \uce60\ub9ac","\uc0ac\uc6b0\uc2a4 \uc6e8\uc2a4\ud2b8","\uba38\uc2a4\ud0c0\ub4dc","\ud640\uc2a4\ub798\ub514\uc26c","\uc0ac\uc6b0\uc804 \uc544\uc77c\ub79c\ub4dc","\uc774\ud0c8\ub9ac\uc548 \ub4dc\ub808\uc2f1","\uc62c\ub9ac\ube0c \uc624\uc77c","\ub808\ub4dc\uc640\uc778 \uc2dd\ucd08","\uc18c\uae08","\ud6c4\ucd94","\uc2a4\ubaa8\ud06c \ubc14\ube44\ud050"],E=function(){var e=[0,1,2,3].randomItem(),t=["\ub123\uc5b4\uc8fc\uc138\uc694","\ube7c\uc8fc\uc138\uc694"].randomItem();return(0===e?"\ub2e4":d.randomItem(e))+" "+t},h=function(){var e=[0,1,2,3].randomItem();return 0===e?["\ub2e4 \ub123\uc5b4\uc8fc\uc138\uc694","\ub123\uc9c0 \ub9d0\uc544\uc8fc\uc138\uc694"].randomItem():s.randomItem(e).join(", ")};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"Page"},l.a.createElement("header",null,"\uc2dc\uc791\ud654\uba74"),l.a.createElement("footer",{style:{textAlign:"center",paddingBottom:"2.5rem"}},l.a.createElement("p",null,"made by divisionCAT"),l.a.createElement("button",null,"\ub79c\ub364 \ube75 \uc0dd\uc131"))),l.a.createElement("section",{className:"Page"},l.a.createElement("header",null,"\uacb0\uacfc \ubc0f \uacf5\uc720"),l.a.createElement("main",null,l.a.createElement("table",{className:"ResultTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\uba54\ub274"),l.a.createElement("td",null,c.randomItem())),l.a.createElement("tr",null,l.a.createElement("td",null,"\ube75"),l.a.createElement("td",null,m.randomItem())),l.a.createElement("tr",null,l.a.createElement("td",null,"\uce58\uc988"),l.a.createElement("td",null,u.randomItem())),l.a.createElement("tr",null,l.a.createElement("td",null,"\uc624\ube10"),l.a.createElement("td",null,i.randomItem())),l.a.createElement("tr",null,l.a.createElement("td",null,"\uc57c\ucc44"),l.a.createElement("td",null,E())),l.a.createElement("tr",null,l.a.createElement("td",null,"\uc18c\uc2a4"),l.a.createElement("td",null,h()))))),l.a.createElement("footer",{style:{textAlign:"center"}},l.a.createElement("button",null,"\uacf5\uc720\ud558\uae30"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[3,1,2]]]);
//# sourceMappingURL=main.1c74edb6.chunk.js.map