!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function s(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",r="",i=Array.isArray(t),o=0;o<e.length;o++)(n=s(e[o]))&&(i&&t[o]&&(n=l(n)),a=a+r+n,r=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var s in e)s&&e[s]&&a.call(e,s)&&(t=t+n+s,n=" ");return t}(e):e||""}function r(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function i(e,t,n,a){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(a?e:e+'="'+e+'"');var s=typeof t;return"object"!==s&&"function"!==s||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],s=1;s<t.length;s++)a=e(a,t[s]);return a}for(var i in n)if("class"===i){var o=t[i]||[];t[i]=(Array.isArray(o)?o:[o]).concat(n[i]||[])}else if("style"===i){o=(o=r(t[i]))&&";"!==o[o.length-1]?o+";":o;var l=r(n[i]);l=l&&";"!==l[l.length-1]?l+";":l,t[i]=o+l}else t[i]=n[i];return t},t.classes=s,t.style=r,t.attr=i,t.attrs=function(e,t){var n="";for(var o in e)if(a.call(e,o)){var l=e[o];if("class"===o){l=s(l),n=i(o,l,!1,t)+n;continue}"style"===o&&(l=r(l)),n+=i(o,l,!1,t)}return n};var o=/["&<>]/;function l(e){var t=""+e,n=o.exec(t);if(!n)return e;var a,s,r,i="";for(a=n.index,s=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==a&&(i+=t.substring(s,a)),s=a+1,i+=r}return s!==a?i+t.substring(s,a):i}t.escape=l,t.rethrow=function e(t,a,s,r){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||r))throw t.message+=" on line "+s,t;try{r=r||n(7).readFileSync(a,"utf8")}catch(n){e(t,null,s)}var i=3,o=r.split("\n"),l=Math.max(s-i,0),c=Math.min(o.length,s+i);i=o.slice(l,c).map((function(e,t){var n=t+l+1;return(n==s?"  > ":"    ")+n+"| "+e})).join("\n");t.path=a;t.message=(a||"Pug")+":"+s+"\n"+i+"\n\n"+t.message;throw t}},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",s=e||{};return function(e){(function(){var s=e;if("number"==typeof s.length)for(var r=0,i=s.length;r<i;r++){var o=s[r];n=n+'<a class="label" href="#"><h2 class="label__head">'+a.escape(null==(t=o)?"":t)+"</h2></a>"}else{i=0;for(var r in s){i++;o=s[r];n=n+'<a class="label" href="#"><h2 class="label__head">'+a.escape(null==(t=o)?"":t)+"</h2></a>"}}}).call(this)}.call(this,"names"in s?s.names:"undefined"!=typeof names?names:void 0),n}},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",s=e||{};return function(e){e&&(n=n+'<div class="card"><h3 class="card__head">'+a.escape(null==(t=e)?"":t)+'</h3><hr class="card__line-break"><input class="card__input"><ul class="card__list"></ul></div>')}.call(this,"title"in s?s.title:"undefined"!=typeof title?title:void 0),n}},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",s=e||{};return function(e,s){s&&function(){var e=s;if("number"==typeof e.length)for(var r=0,i=e.length;r<i;r++){var o=e[r];n=n+'<li class="task"><p class="task__name">'+a.escape(null==(t=o)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div></li>'}else{i=0;for(var r in e){i++;o=e[r];n=n+'<li class="task"><p class="task__name">'+a.escape(null==(t=o)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></div></li>'}}}.call(this),e&&(n=n+'<li class="task"><p class="task__name">'+a.escape(null==(t=e)?"":t)+'</p><div class="task__check"><svg class="task__check_svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg> </div></li>')}.call(this,"task"in s?s.task:"undefined"!=typeof task?task:void 0,"tasks"in s?s.tasks:"undefined"!=typeof tasks?tasks:void 0),n}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="label new-label toggle"><h2 class="new-label__head">Create a new board... </h2></div><div class="form__container unavailable"><h3 class="form__head">Creating a board</h3><hr class="form__hr"><from class="form"><p class="form_label">What shall we call the board?</p><input class="form__input" autofocus><div class="form__button-group"><button class="form__button_cancel toggle">Cancel</button><button class="form__button_create toggle" type="button">Create</button></div></from></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<button class="button toggle"><p class="button__name">Add card...</p></button><div class="new-card unavailable"><div class="new-card__form"><input class="new-card__input" placeholder="add a list"><p class="new-card__sign">give me a name!</p></div><div><div class="new-card__remove toggle"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></g></g></svg></div></div></div>'}},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",s=e||{};return function(e){e&&(n=n+'<a class="label head" href="#"><h1>'+a.escape(null==(t=e)?"":t)+"</h1></a>")}.call(this,"name"in s?s.name:"undefined"!=typeof name?name:void 0),n}},function(e,t){},function(e,t,n){"use strict";n.r(t);n(9);class a{constructor(){this.events={}}subscribe(e,t,n){let a=this;return void 0===n&&(n=t),a.events.hasOwnProperty(e)||(a.events[e]=[]),a.events[e].push(t.bind(n))}publish(e,t={}){return this.events.hasOwnProperty(e)?this.events[e].map(e=>e(t)):[]}}var s=new class{constructor(e){let t=this;t.actions={},t.mutations={},t.state={},t.events=new a,e.hasOwnProperty("actions")&&(t.actions=e.actions),e.hasOwnProperty("mutations")&&(t.mutations=e.mutations),t.state=e.state}dispatch(e,t,n){if("function"!=typeof this.actions[e])return console.error(`Action "${e} doesn't exist.`),!1;console.groupCollapsed(`ACTION: ${e}`),this.actions[e](this,t,n),console.log(this.state);const a=JSON.stringify(this.state.names);return localStorage.setItem("names",a),console.groupEnd(),!0}commit(e,t,n){return"function"!=typeof this.mutations[e]?(console.log(`Mutation "${e}" doesn't exist`),!1):(this.mutations[e](n,t),console.log(this.state),!0)}}({actions:{addCard(e,t,n){e.commit("addCard",t,n),e.events.publish("cardChange",t)},addLabel(e,t,n){e.commit("addLabel",t,n),e.events.publish("stateChange",[t])},addTask(e,t,n){e.commit("addTask",t,n)}},mutations:{addCard(e,t){e.push({}),e[e.length-1][t]=[]},addLabel(e,t){e[t]=[]},addTask(e,t){e.push(t)}},state:{names:{}}});class r{constructor(){this.render=this.render||function(){},this.title=document.querySelector(".title"),this.element=document.querySelector(".content")}}var i=n(4),o=n.n(i);function l(...e){return()=>{e.forEach(e=>{e.classList.toggle("unavailable")})}}var c=n(1),u=n.n(c);var d=n(5),h=n.n(d);var f=n(2),v=n.n(f),p=n(3),m=n.n(p);var g=n(6),b=n.n(g);new class extends r{constructor(){super(),s.events.subscribe("loaderMainPage",this.render,this),this.storage=s.state.names}render(){this.element.innerHTML="",this.title.innerHTML="",this.element.insertAdjacentHTML("afterbegin",o()());const e=document.querySelector(".new-label"),t=document.querySelector(".form__container"),n=l(e,t);this.element.querySelectorAll(".toggle").forEach(e=>{e.addEventListener("click",n)});const a=t.querySelector(".form__button_create"),s=t.querySelector(".form__button_cancel"),r=t.querySelector(".form__input");a.addEventListener("click",this.handle.bind(this)),r.addEventListener("keydown",e=>{13===e.keyCode&&""!=r.value&&(this.handle(),n())}),s.addEventListener("click",()=>r.value="")}handle(){const e=document.querySelector(".form__input"),t=e.value;s.dispatch("addLabel",t,this.storage),e.value=""}},new class extends r{constructor(){super(),s.events.subscribe("stateChange",this.createNewLabel,this),s.events.subscribe("loaderMainPage",this.render,this)}render(){let e=Object.keys(s.state.names);this.element.insertAdjacentHTML("beforeend",u()({names:e})),this.element.querySelectorAll("a").forEach(e=>{e.addEventListener("click",this.handle)})}handle(e){e.preventDefault();const t=e.target.closest("a").firstChild.innerText;s.events.publish("openLabel",t),window.history.pushState({openLabel:t},null,"")}createNewLabel(e){this.element.insertAdjacentHTML("beforeend",u()({names:e})),this.element.querySelectorAll("a").forEach(e=>{e.addEventListener("click",this.handle)})}},new class extends r{constructor(){super(),s.events.subscribe("openLabel",this.render,this),s.events.subscribe("cardChange",this.createNewCard,this),this.storage=s.state}render(e){this.element.innerHTML="",this.storage=s.state.names[e],this.storage.forEach(e=>{for(let t in e){let n=e[t];this.element.insertAdjacentHTML("beforeend",v()({title:t})),n.length&&(this.element.lastChild.querySelector("ul").innerHTML=m()({tasks:n}))}});const t=this.handle(this.storage);this.element.querySelectorAll(".card").forEach(e=>{e.querySelector(".card__input").addEventListener("keydown",t)})}handle(e){return t=>{const n=t.target;if(13===t.keyCode&&""!=n.value){const a=n.value,r=t.target.parentNode,i=r.querySelector(".card__head").innerText.toLowerCase(),o=e.filter(e=>{if(e[i])return e})[0];s.dispatch("addTask",a,o[i]),r.querySelector(".card__list").insertAdjacentHTML("beforebegin",m()({task:a})),n.value=""}}}createNewCard(e){document.querySelector(".button").insertAdjacentHTML("beforebegin",v()({title:e}));const t=this.handle(this.storage);this.element.querySelectorAll(".card").forEach(e=>{e.querySelector(".card__input").addEventListener("keydown",t)})}},new class extends r{constructor(){super(),s.events.subscribe("openLabel",this.render,this),this.storage=s.state.names}render(e){this.element.insertAdjacentHTML("beforeend",h()());const t=document.querySelector(".button"),n=document.querySelector(".new-card"),a=document.querySelector(".new-card__input");let r=l(t,n);this.element.querySelectorAll(".toggle").forEach(e=>{e.addEventListener("click",r)}),a.addEventListener("keydown",t=>{if(13===t.keyCode&&""!=a.value){const t=a.value;a.value="",s.dispatch("addCard",t,this.storage[e]),r()}})}},new class extends r{constructor(){super(),s.events.subscribe("openLabel",this.render,this)}render(e){this.title.insertAdjacentHTML("afterbegin",b()({name:e})),document.querySelector(".head").addEventListener("click",this.handle.bind(this))}handle(e){e.preventDefault(),s.events.publish("loaderMainPage",""),window.history.pushState({loaderMainPage:""},null,"")}};JSON.parse(localStorage.getItem("names"))&&(s.state.names=Object.assign(s.state.names,JSON.parse(localStorage.getItem("names")))),s.events.publish("loaderMainPage",""),window.history.replaceState({loaderMainPage:""},null,""),window.onpopstate=e=>{for(let t in e.state)s.events.publish(t,e.state[t])}},function(e,t){}]);