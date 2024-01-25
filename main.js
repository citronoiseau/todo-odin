(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: #eaf1fb;\n}\n#content {\n  display: grid;\n  grid-template-columns: minmax(200px, 15%) 1fr;\n  grid-template-areas: "sidebar main";\n  height: 100vh;\n}\n#sidebar {\n  grid-area: sidebar;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#main {\n  grid-area: main;\n  display: flex;\n  flex-direction: column;\n}\n\nh2 {\n  text-transform: capitalize;\n}\n.display {\n  background-color: #f2f6fc;\n  border-radius: 15px;\n  margin: 30px 20px;\n  padding: 30px;\n  flex: 1;\n}\nli {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nli.active {\n  color: red;\n}\n\n.dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n  border: none;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n.dialog.active {\n  opacity: 1;\n}\n',""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var d=e[a],s=o.base?d[0]+o.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var d=o(e,r),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),i=n.n(c),a=n(565),d=n.n(a),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"icons/inbox.svg",v=n.p+"icons/today.svg",y=n.p+"icons/calendar.svg";function x(e,t,n,o){const r=document.createElement("li");r.id=n;const c=document.createElement("span"),i=document.createElement("img");i.src=o,i.alt=e,c.appendChild(i);const a=document.createElement("span");return a.textContent=e,r.appendChild(c),r.appendChild(a),t.appendChild(r),r}function C(e,t,n){const o=document.createElement("label");o.textContent=e,o.htmlFor=t,n.appendChild(o)}function g(e,t,n){const o=document.createElement("input");return o.type=e,o.id=t,o.name=t,n.appendChild(o),o}function b(e){const t=document.createElement("div");return t.classList.add("form-element"),e.appendChild(t),t}function E(e,t){document.querySelector("h2").textContent=e,function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.querySelector(".taskList"));const n=document.querySelector(".taskList");t.forEach((e=>{const t=document.createElement("div");t.classList.add("taskContainer"),n.appendChild(t);const o=document.createElement("input");o.type="checkbox",n.appendChild(o);const r=document.createElement("div");if(r.textContent=e.title,t.appendChild(r),"none"!==e.description){const n=document.createElement("p");n.textContent=e.description,t.appendChild(n)}const c=document.createElement("div");if(c.textContent=e.dueDate,t.appendChild(c),"none"!==e.time){const n=document.createElement("div");n.textContent=e.time,t.appendChild(n)}if("none"!==e.project){const n=document.createElement("div");n.textContent=e.project,t.appendChild(n)}const i=document.createElement("div");t.appendChild(i);const a=document.createElement("button");a.textContent="Edit";const d=document.createElement("button");d.textContent="Delete",i.appendChild(a),i.appendChild(d);const s=e.priority;"High"===s?t.style.borderLeft="5px solid  #F94876":"Medium"===s?t.style.borderLeft="5px solid #F6C058":"Low"===s&&(t.style.borderLeft="5px solid #42AC7F")}))}function S(e){"inbox"===e&&E(e,L),"today"===e&&E(e,L),"upcoming"===e&&E(e,L)}const L=[];!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="sidebar",e.appendChild(t);const n=document.createElement("h1");n.textContent="D O I T",t.appendChild(n);const o=document.createElement("button");o.classList.add("addTaskBtn"),o.textContent="Add task",t.appendChild(o);const r=document.createElement("ul");r.classList.add("navbar"),t.appendChild(r),x("Inbox",r,"inbox",h).classList.add("active"),x("Today",r,"today",v),x("Upcoming",r,"upcoming",y);const c=document.createElement("ul");c.classList.add("projects"),t.appendChild(c);const i=document.createElement("div"),a=document.createElement("div");a.textContent="by ";const d=document.createElement("a");d.textContent="lemonbirdy",d.href="https://github.com/citronoiseau/restaraunt-odin",d.target="_blank",i.appendChild(a),a.appendChild(d),t.appendChild(i)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="main",e.appendChild(t);const n=document.createElement("div");n.classList.add("display"),t.appendChild(n);const o=document.createElement("h2");o.textContent="Inbox",n.appendChild(o);const r=document.createElement("div");r.classList.add("taskList"),n.appendChild(r);const c=document.createElement("button");c.classList.add("addTaskBtn"),c.textContent="Add task",n.appendChild(c)}(),function(){const e=document.querySelector("#main"),t=document.createElement("dialog");t.classList.add("dialog"),e.appendChild(t);const n=document.createElement("form");t.appendChild(n);const o=b(n),r=(C("Your task title:","title",o),g("text","title",o));r.maxLength=30,r.required=!0;const c=b(n),i=(C("Description (optional):","description",c),document.createElement("textarea"));i.id="description",c.appendChild(i),i.maxLength=100;const a=b(n);C("Due date:","dueDate",a),g("date","dueDate",a).required=!0;const d=b(n);C("Time (optional):","time",d),g("time","time",d).value="none";const s=b(n),l=(C("Task priority:","prioritySelector",s),document.createElement("select"));l.id="prioritySelector",l.value="High",s.appendChild(l),["High","Medium","Low"].forEach((e=>{const t=document.createElement("option");t.value=e,t.textContent=e,l.appendChild(t)}));const p=b(n),u=(C("Task project:","projectSelector",p),document.createElement("select"));u.id="projectSelector",p.appendChild(u);const m=[];if(0===m.length){const e=document.createElement("option");e.textContent="You have no projects!",e.value="none",u.appendChild(e)}else m.forEach((e=>{if(0===m.length){const e=document.createElement("option");e.textContent="You have no projects!",e.value="none",u.appendChild(e)}}));const f=document.createElement("div");n.appendChild(f),g("submit","confirmBtn",f).value="Confirm";const h=document.createElement("button");h.id="cancelBtn",h.textContent="Cancel",f.appendChild(h)}(),function(){const e=document.querySelectorAll(".addTaskBtn"),t=document.querySelector(".dialog"),n=t.querySelector("form"),o=document.querySelector("#confirmBtn"),r=document.querySelector("#cancelBtn"),c=t.querySelector("#title"),i=t.querySelector("#description"),a=t.querySelector("#dueDate"),d=t.querySelector("#time"),s=t.querySelector("#prioritySelector"),l=t.querySelector("#projectSelector");e.forEach((e=>{e.addEventListener("click",(()=>{t.showModal(),t.classList.add("active")}))})),o.addEventListener("click",(e=>{n.checkValidity()&&(function(e,t,n,o,r,c){let i=new class{constructor(e,t,n,o,r,c){this.title=e,this.description=t,this.dueDate=n,this.time=o,this.priority=r,this.project=c}}(e,t,n,o,r,c);L.push(i),console.log(i),S([document.querySelector("#inbox"),document.querySelector("#today"),document.querySelector("#upcoming")].find((e=>e.classList.contains("active"))).id)}(c.value,i.value,a.value,d.value,s.value,l.value),e.preventDefault(),t.close(),n.reset())})),r.addEventListener("click",(e=>{e.preventDefault(),t.close(),t.classList.remove("active")}))}();const q=document.querySelector("#inbox"),k=document.querySelector("#today"),w=document.querySelector("#upcoming");[q,k,w].forEach((e=>{e.addEventListener("click",(()=>{S(),[q,k,w].forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}))}))})()})();