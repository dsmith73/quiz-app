(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/alexander-unsplash.6d174a39.jpg"},19:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r,a,o=t(0),c=t.n(o),i=t(14),u=t.n(i),s=t(4),l=t(5),f=t.n(l),d=t(8),p=t(3),b=t(11);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={})),function(n){n.MULTI="multiple",n.TF="boolean"}(a||(a={}));var x=function(){var n=Object(d.a)(f.a.mark((function n(e,t,r){var a,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=").concat(r),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return o=n.sent,n.abrupt("return",o.results.map((function(n){return Object(b.a)(Object(b.a)({},n),{},{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),m=t(1),g=t(2);function h(){var n=Object(m.a)(["\n    transition: all 0.3s ease;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user-select: none;\n        font-size: 0.8rem;\n        width: 100%;\n        height: 40px;\n        margin: 5px 0;\n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n        border-radius: 10px;\n        color: #fff;\n        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n    }\n"]);return h=function(){return n},n}function v(){var n=Object(m.a)(["\n    max-width: 1100px;\n    background: #fff8eb;\n    border-radius: 10px;\n    border: 2px solid #a6813d;\n    padding: 20px;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    text-align: center;\n\n    p {\n        font-size: 1rem;\n    }\n"]);return v=function(){return n},n}var w=g.b.div(v()),k=g.b.div(h(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #ffbe56, #b47d6e)"})),j=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,o=n.questionNr,i=n.totalQuestions;return c.a.createElement(w,null,c.a.createElement("p",{className:"number"},"Question: ",o," / ",i),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}),c.a.createElement("div",null,t.map((function(n){return c.a.createElement(k,{key:n,correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n},c.a.createElement("button",{disabled:!!a,value:n,onClick:r},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))},O=t(18),E=t.n(O);function y(){var n=Object(m.a)(["\n    footer {\n        display: flex;\n        height: auto;\n        flex-direction: column;\n        align-items: center;\n        font-family: Catamaran, sans-serif;\n        background-image: linear-gradient(180deg, #fff, #fdb87f);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -moz-text-fill-color: transparent;\n        filter: drop-shadow(2px, 2px, #a35400);\n        font-size: 14px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .foot-flex {\n        flex: 2 1 200px;\n    }\n"]);return y=function(){return n},n}function z(){var n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > p {\n        color: #fff;\n    }\n\n    .score {\n        color: #fff;\n        font-size: 2rem;\n        margin: 0;\n    }\n\n    h1 {\n        font-family: Emplema One, sans-serif;\n        background-image: linear-gradient(180deg, #fff, #fdb87f);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -moz-text-fill-color: transparent;\n        filter: drop-shadow(2px, 2px, #a35400);\n        font-size: 70px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .start, \n    .next {\n        cursor: pointer;\n        background: linear-gradient(180deg, #fff, #91e9ff);\n        border: 2px solid #58b0d3;\n        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n    }\n\n    .start {\n        max-width: 200px;\n    }\n"]);return z=function(){return n},n}function S(){var n=Object(m.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        height: auto;\n        font-family: 'Catamaran', sans-serif;\n    }\n"]);return S=function(){return n},n}var q=Object(g.a)(S(),E.a),M=g.b.div(z()),N=g.b.div(y()),_=function(){var n=Object(o.useState)(!1),e=Object(p.a)(n,2),t=e[0],i=e[1],u=Object(o.useState)([]),l=Object(p.a)(u,2),b=l[0],m=l[1],g=Object(o.useState)(0),h=Object(p.a)(g,2),v=h[0],w=h[1],k=Object(o.useState)([]),O=Object(p.a)(k,2),E=O[0],y=O[1],z=Object(o.useState)(0),S=Object(p.a)(z,2),_=S[0],A=S[1],C=Object(o.useState)(!0),T=Object(p.a)(C,2),I=T[0],Q=T[1],L=function(){var n=Object(d.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),Q(!1),n.next=4,x(10,r.EASY,a.MULTI);case 4:e=n.sent,m(e),A(0),y([]),w(0),i(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(q,null),c.a.createElement(M,null,c.a.createElement("h1",null,"Random Trivia"),I||10===E.length?c.a.createElement("button",{className:"start",onClick:L},"Start"):null,I?null:c.a.createElement("p",{className:"score"},"Score: ",_),t&&c.a.createElement("p",null,"Loading Questions ..."),!I&&!t&&c.a.createElement(j,{questionNr:v+1,totalQuestions:10,question:b[v].question,answers:b[v].answers,userAnswer:E?E[v]:void 0,callback:function(n){if(!I){var e=n.currentTarget.value,t=b[v].correct_answer===e;t&&A((function(n){return n+1}));var r={question:b[v].question,answer:e,correct:t,correctAnswer:b[v].correct_answer};y((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),I||t||E.length!==v+1||9===v?null:c.a.createElement("button",{className:"next",onClick:function(){var n=v+1;10===n?Q(!0):w(n)}},"Next Question")),c.a.createElement(N,null,c.a.createElement("footer",{className:"foot-flex"},"- Quiz built by @dsmith73 -")))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.69346e45.chunk.js.map