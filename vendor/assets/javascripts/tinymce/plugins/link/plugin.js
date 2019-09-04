/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.15 (2019-09-02)
 */
!function(c){"use strict";var n,t,e,r,o,i,u,a,s,l=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=tinymce.util.Tools.resolve("tinymce.util.VK"),d=function(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===t}},m=d("string"),h=d("array"),p=d("boolean"),g=d("function"),v=function(n){var t=n.getParam("link_assume_external_targets",!1);return p(t)&&t?1:!m(t)||"http"!==t&&"https"!==t?0:t},y=function(n){return n.getParam("link_context_toolbar",!1,"boolean")},w=function(n){return n.getParam("link_list")},x=function(n){return n.getParam("default_link_target")},k=function(n){return n.getParam("target_list",!0)},b=function(n){return n.getParam("rel_list",[],"array")},_=function(n){return n.getParam("link_class_list",[],"array")},T=function(n){return n.getParam("link_title",!0,"boolean")},O=function(n){return n.getParam("allow_unsafe_link_target",!1,"boolean")},A=function(n){return n.getParam("link_quicklink",!1,"boolean")},C=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),P=tinymce.util.Tools.resolve("tinymce.Env"),N=function(n){if(!P.ie||10<P.ie){var t=c.document.createElement("a");t.target="_blank",t.href=n,t.rel="noreferrer noopener";var e=c.document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,c.window,0,0,0,0,0,!1,!1,!1,!1,0,null),i=t,u=e,c.document.body.appendChild(i),i.dispatchEvent(u),c.document.body.removeChild(i)}else{var r=c.window.open("","_blank");if(r){r.opener=null;var o=r.document;o.open(),o.write('<meta http-equiv="refresh" content="0; url='+C.DOM.encode(n)+'">'),o.close()}}var i,u},E=function(){},I=function(n){return function(){return n}},j=I(!1),S=I(!0),F=j,L=S,R=function(){return D},D=(r={fold:function(n,t){return n()},is:F,isSome:F,isNone:L,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:R,ap:R,each:function(){},bind:R,flatten:R,exists:F,forall:L,filter:R,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:I("none()")},Object.freeze&&Object.freeze(r),r),U=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:L,isNone:F,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return U(n(e))},ap:function(n){return n.fold(R,function(n){return U(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:D},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(F,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},M={some:U,none:R,from:function(n){return null===n||n===undefined?D:U(n)}},z=Array.prototype.slice,q=(o=Array.prototype.indexOf)===undefined?function(n,t){return B(n,t)}:function(n,t){return o.call(n,t)},K=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e,n)}},B=function(n,t){for(var e=0,r=n.length;e<r;++e)if(n[e]===t)return e;return-1},V=Array.prototype.push,W=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!h(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);V.apply(t,n[e])}return t},H=function(n,t){var e=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(n,t);return W(e)},$=(g(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.Tools")),G=function(n){return/^\w+:/i.test(n)},J=function(n,t){var e,r,o=["noopener"],i=n?n.split(/\s+/):[],u=function(n){return n.filter(function(n){return-1===$.inArray(o,n)})},c=t?0<(e=u(e=i)).length?e.concat(o):o:u(i);return 0<c.length?(r=c,$.trim(r.sort().join(" "))):""},X=function(n,t){return t=t||n.selection.getNode(),Y(t)?n.dom.select("a[href]",t)[0]:n.dom.getParent(t,"a[href]")},Q=function(n){return n&&"A"===n.nodeName&&!!n.href},Y=function(n){return n&&"FIGURE"===n.nodeName&&/\bimage\b/i.test(n.className)},Z=function(n){return t=["title","rel","class","target"],e=function(t,e){return n[e].each(function(n){t[e]=0<n.length?n:null}),t},r={href:n.href},K(t,function(n){r=e(r,n)}),r;var t,e,r},nn=function(n,t){var e=n.dom.select("img",t)[0];if(e){var r=n.dom.getParents(e,"a[href]",t)[0];r&&(r.parentNode.insertBefore(e,r),n.dom.remove(r))}},tn=function(n,t,e){var r=n.dom.select("img",t)[0];if(r){var o=n.dom.create("a",e);r.parentNode.insertBefore(o,r),o.appendChild(r)}},en=function(h,p,g){h.undoManager.transact(function(){var n,t,e,r,o,i,u,c,a,l,f=h.selection.getNode(),s=X(h,f),d=Z(g);if(!(0<b(h).length)&&!1===O(h)){var m=J(d.rel,"_blank"===d.target);d.rel=m||null}M.from(d.target).isNone()&&(d.target=x(h)),d.href=(n=d.href,"http"!==(t=v(h))&&"https"!==t||G(n)?n:t+"://"+n),g.href===p.href&&p.attach(),s?(h.focus(),u=h,c=s,a=g.text,l=d,a.each(function(n){c.hasOwnProperty("innerText")?c.innerText=n:c.textContent=n}),u.dom.setAttribs(c,l),u.selection.select(c)):(e=h,r=f,o=g.text,i=d,Y(r)?tn(e,r,i):o.fold(function(){e.execCommand("mceInsertLink",!1,i)},function(n){e.insertContent(e.dom.createHTML("a",i,e.dom.encode(n)))}))})},rn=function(e){e.undoManager.transact(function(){var n=e.selection.getNode();if(Y(n))nn(e,n);else{var t=e.dom.getParent(n,"a[href]",e.getBody());t&&e.dom.remove(t,!0)}e.focus()})},on=function(n){return 0<$.grep(n,Q).length},un=function(n){var t=n.getAttribute("data-mce-href");return t||n.getAttribute("href")},cn=function(n){return!(/</.test(n)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(n)||-1===n.indexOf("href=")))},an=X,ln=function(n,t){var e=t?t.innerText||t.textContent:n.getContent({format:"text"});return e.replace(/\uFEFF/g,"")},fn=J,sn=G,dn=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e);if(r.isSome())return r}return M.none()},mn=function(n){return m(n.value)?n.value:""},hn=function(e){return void 0===e&&(e=mn),function(n){return M.from(n).map(function(n){return t=n,r=e,o=[],$.each(t,function(n){var t=m(n.text)?n.text:m(n.title)?n.title:"";if(n.menu!==undefined);else{var e=r(n);o.push({text:t,value:e})}}),o;var t,r,o})}},pn={sanitize:function(n){return hn(mn)(n)},sanitizeWith:hn,createUi:function(t,e){return function(n){return{name:t,type:"selectbox",label:e,items:n}}},getValue:mn},gn=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return gn(e())}}},vn=function(t,n,e,r){var o,i,u=r[n],c=0<t.length;return u!==undefined?(o=u,i=e,dn(i,function(n){return M.some(n).filter(function(n){return n.value===o})})).map(function(n){return{url:{value:n.value,meta:{text:c?t:n.text,attach:E}},text:c?t:n.text}}):M.none()},yn=function(n,i){var u=gn(n.text),o=function(n,t){var e,r,o=(e=i,r=t.name,"link"===r?e.catalogs.link:"anchor"===r?e.catalogs.anchor:M.none()).getOr([]);return vn(u.get(),t.name,o,n)};return{onChange:function(n,t){return"url"===t.name?function(n){if(u.get().length<=0){var t=n.url.meta.text!==undefined?n.url.meta.text:n.url.value;return M.some({text:t})}return M.none()}(n()):(e=["anchor","link"],r=t.name,-1<q(e,r)?o(n(),t):("text"===t.name&&u.set(n().text),M.none()));var e,r}}},wn=function(){return(wn=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},xn={},kn={exports:xn};i=undefined,u=xn,a=kn,s=undefined,function(n){"object"==typeof u&&void 0!==a?a.exports=n():"function"==typeof i&&i.amd?i([],n):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=n()}(function(){return function f(i,u,c){function a(t,n){if(!u[t]){if(!i[t]){var e="function"==typeof s&&s;if(!n&&e)return e(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[t]={exports:{}};i[t][0].call(o.exports,function(n){return a(i[t][1][n]||n)},o,o.exports,f,i,u,c)}return u[t].exports}for(var l="function"==typeof s&&s,n=0;n<c.length;n++)a(c[n]);return a}({1:[function(n,t,e){var r,o,i=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(n){if(r===setTimeout)return setTimeout(n,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(n,0);try{return r(n,0)}catch(t){try{return r.call(null,n,0)}catch(t){return r.call(this,n,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(n){r=u}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(n){o=c}}();var l,f=[],s=!1,d=-1;function m(){s&&l&&(s=!1,l.length?f=l.concat(f):d=-1,f.length&&h())}function h(){if(!s){var n=a(m);s=!0;for(var t=f.length;t;){for(l=f,f=[];++d<t;)l&&l[d].run();d=-1,t=f.length}l=null,s=!1,function e(n){if(o===clearTimeout)return clearTimeout(n);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(n);try{return o(n)}catch(t){try{return o.call(null,n)}catch(t){return o.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function g(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(1<arguments.length)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new p(n,t)),1!==f.length||s||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(n,s,t){(function(e){!function(n){var t=setTimeout;function r(){}function i(n){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],f(n,this)}function o(r,o){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var n=1===r._state?o.onFulfilled:o.onRejected;if(null!==n){var t;try{t=n(r._value)}catch(e){return void c(o.promise,e)}u(o.promise,t)}else(1===r._state?u:c)(o.promise,r._value)})):r._deferreds.push(o)}function u(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if(t instanceof i)return n._state=3,n._value=t,void a(n);if("function"==typeof e)return void f(function r(n,t){return function(){n.apply(t,arguments)}}(e,t),n)}n._state=1,n._value=t,a(n)}catch(o){c(n,o)}}function c(n,t){n._state=2,n._value=t,a(n)}function a(n){2===n._state&&0===n._deferreds.length&&i._immediateFn(function(){n._handled||i._unhandledRejectionFn(n._value)});for(var t=0,e=n._deferreds.length;t<e;t++)o(n,n._deferreds[t]);n._deferreds=null}function l(n,t,e){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof t?t:null,this.promise=e}function f(n,t){var e=!1;try{n(function(n){e||(e=!0,u(t,n))},function(n){e||(e=!0,c(t,n))})}catch(r){if(e)return;e=!0,c(t,r)}}i.prototype["catch"]=function(n){return this.then(null,n)},i.prototype.then=function(n,t){var e=new this.constructor(r);return o(this,new l(n,t,e)),e},i.all=function(n){var a=Array.prototype.slice.call(n);return new i(function(o,i){if(0===a.length)return o([]);var u=a.length;function c(t,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var e=n.then;if("function"==typeof e)return void e.call(n,function(n){c(t,n)},i)}a[t]=n,0==--u&&o(a)}catch(r){i(r)}}for(var n=0;n<a.length;n++)c(n,a[n])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(n){n(t)})},i.reject=function(e){return new i(function(n,t){t(e)})},i.race=function(o){return new i(function(n,t){for(var e=0,r=o.length;e<r;e++)o[e].then(n,t)})},i._immediateFn="function"==typeof e?function(n){e(n)}:function(n){t(n,0)},i._unhandledRejectionFn=function(n){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",n)},i._setImmediateFn=function(n){i._immediateFn=n},i._setUnhandledRejectionFn=function(n){i._unhandledRejectionFn=n},void 0!==s&&s.exports?s.exports=i:n.Promise||(n.Promise=i)}(this)}).call(this,n("timers").setImmediate)},{timers:3}],3:[function(a,n,l){(function(n,t){var r=a("process/browser.js").nextTick,e=Function.prototype.apply,o=Array.prototype.slice,i={},u=0;function c(n,t){this._id=n,this._clearFn=t}l.setTimeout=function(){return new c(e.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new c(e.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(n){n.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},l.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},l._unrefActive=l.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;0<=t&&(n._idleTimeoutId=setTimeout(function(){n._onTimeout&&n._onTimeout()},t))},l.setImmediate="function"==typeof n?n:function(n){var t=u++,e=!(arguments.length<2)&&o.call(arguments,1);return i[t]=!0,r(function(){i[t]&&(e?n.apply(null,e):n.call(null),l.clearImmediate(t))}),t},l.clearImmediate="function"==typeof t?t:function(n){delete i[n]}}).call(this,a("timers").setImmediate,a("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(n,t,e){var r=n("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")();t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});var bn=kn.exports.boltExport,_n=function(n){var e=M.none(),t=[],r=function(n){o()?u(n):t.push(n)},o=function(){return e.isSome()},i=function(n){K(n,u)},u=function(t){e.each(function(n){c.setTimeout(function(){t(n)},0)})};return n(function(n){e=M.some(n),i(t),t=[]}),{get:r,map:function(e){return _n(function(t){r(function(n){t(e(n))})})},isReady:o}},Tn={nu:_n,pure:function(t){return _n(function(n){n(t)})}},On=function(n){c.setTimeout(function(){throw n},0)},An=function(e){var n=function(n){e().then(n,On)};return{map:function(n){return An(function(){return e().then(n)})},bind:function(t){return An(function(){return e().then(function(n){return t(n).toPromise()})})},anonBind:function(n){return An(function(){return e().then(function(){return n.toPromise()})})},toLazy:function(){return Tn.nu(n)},toCached:function(){var n=null;return An(function(){return null===n&&(n=e()),n})},toPromise:e,get:n}},Cn=function(n){return An(function(){return new bn(n)})},Pn=function(n){return An(function(){return bn.resolve(n)})},Nn=tinymce.util.Tools.resolve("tinymce.util.Delay"),En=function(n){var t=n.href;return 0<t.indexOf("@")&&-1===t.indexOf("//")&&-1===t.indexOf("mailto:")?M.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(n){return wn({},n,{href:"mailto:"+t})}}):M.none()},In=function(u,n,c){return dn([En,(e=n,function(n){var t=n.href;return 1===e&&!sn(t)||0===e&&/^\s*www[\.|\d\.]/i.test(t)?M.some({message:"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",preprocess:function(n){return wn({},n,{href:"http://"+t})}}):M.none()})],function(n){return n(c)}).fold(function(){return Pn(c)},function(i){return Cn(function(t){var e,n,r,o;e=u,n=i.message,r=function(n){t(n?i.preprocess(c):c)},o=e.selection.getRng(),Nn.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(n){e.selection.setRng(o),r(n)})})})});var e},jn=function(n){var t=n.dom.select("a:not([href])"),e=H(t,function(n){var t=n.name||n.id;return t?[{text:t,value:"#"+t}]:[]});return 0<e.length?M.some([{text:"None",value:""}].concat(e)):M.none()},Sn=function(n){var t=_(n);return 0<t.length?pn.sanitize(t):M.none()},Fn=tinymce.util.Tools.resolve("tinymce.util.XHR"),Ln=function(t){var e=function(n){return t.convertURL(n.value||n.url,"href")},n=w(t);return Cn(function(t){m(n)?Fn.send({url:n,success:function(n){return t(function(n){try{return M.some(JSON.parse(n))}catch(t){return M.none()}}(n))},error:function(n){return t(M.none())}}):g(n)?n(function(n){return t(M.some(n))}):t(M.from(n))}).map(function(n){return n.bind(pn.sanitizeWith(e)).map(function(n){return 0<n.length?[{text:"None",value:""}].concat(n):n})})},Rn=function(n,t){var e=b(n);if(0<e.length){var r=t.is("_blank");return(!1===O(n)?pn.sanitizeWith(function(n){return fn(pn.getValue(n),r)}):pn.sanitize)(e)}return M.none()},Dn=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Un=function(n){var t=k(n);return h(t)?pn.sanitize(t).orThunk(function(){return M.some(Dn)}):!1===t?M.none():M.some(Dn)},Mn=function(n,t,e){var r=n.getAttrib(t,e);return null!==r&&0<r.length?M.some(r):M.none()},zn=function(f,s){return Ln(f).map(function(n){var t,e,r,o,i,u,c,a,l=(e=s,r=(t=f).dom,o=cn(t.selection.getContent())?M.some(ln(t.selection,e)):M.none(),i=e?M.some(r.getAttrib(e,"href")):M.none(),u=e?M.from(r.getAttrib(e,"target")):M.none(),c=Mn(r,e,"rel"),a=Mn(r,e,"class"),{url:i,text:o,title:Mn(r,e,"title"),target:u,rel:c,linkClass:a});return{anchor:l,catalogs:{targets:Un(f),rels:Rn(f,l.target),classes:Sn(f),anchor:jn(f),link:n},optNode:M.from(s),flags:{titleEnabled:T(f)}}})},qn=function(g){var n,t;(t=an(n=g),zn(n,t)).map(function(n){var i,u,c,t,e,r,o,a,l,f,s,d,m,h,p=(u=n,c=v(i=g),function(n){var e=n.getData();if(!e.url.value)return rn(i),void n.close();var t=function(t){return M.from(e[t]).filter(function(n){return!u.anchor[t].is(n)})},r={href:e.url.value,text:t("text"),target:t("target"),rel:t("rel"),"class":t("linkClass"),title:t("title")},o={href:e.url.value,attach:e.url.meta!==undefined&&e.url.meta.attach?e.url.meta.attach:function(){}};In(i,c,r).get(function(n){en(i,o,n)}),n.close()});return e=p,r=g,l=(t=n).anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),f=t.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],s=M.from(x(r)),a=s,d={url:{value:(o=t).anchor.url.getOr(""),meta:{attach:function(){},text:o.anchor.url.fold(function(){return""},function(){return o.anchor.text.getOr("")}),original:{value:o.anchor.url.getOr("")}}},text:o.anchor.text.getOr(""),title:o.anchor.title.getOr(""),anchor:o.anchor.url.getOr(""),link:o.anchor.url.getOr(""),rel:o.anchor.rel.getOr(""),target:o.anchor.target.or(a).getOr(""),linkClass:o.anchor.linkClass.getOr("")},m=yn(d,t),h=t.catalogs,{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:W([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],l,f,function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e);return t}([h.anchor.map(pn.createUi("anchor","Anchors")),h.rels.map(pn.createUi("rel","Rel")),h.targets.map(pn.createUi("target","Open link in...")),h.link.map(pn.createUi("link","Link list")),h.classes.map(pn.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:d,onChange:function(t,n){var e=n.name;m.onChange(t.getData,{name:e}).each(function(n){t.setData(n)})},onSubmit:e}}).get(function(n){g.windowManager.open(n)})},Kn=function(n,t){return n.dom.getParent(t,"a[href]")},Bn=function(n){return Kn(n,n.selection.getStart())},Vn=function(n,t){if(t){var e=un(t);if(/^#/.test(e)){var r=n.$(e);r.length&&n.selection.scrollIntoView(r[0],!0)}else N(t.href)}},Wn=function(n){return function(){qn(n)}},Hn=function(n){return function(){Vn(n,Bn(n))}},$n=function(r){r.on("click",function(n){var t=Kn(r,n.target);t&&f.metaKeyPressed(n)&&(n.preventDefault(),Vn(r,t))}),r.on("keydown",function(n){var t,e=Bn(r);e&&13===n.keyCode&&!0===(t=n).altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey&&(n.preventDefault(),Vn(r,e))})},Gn=function(e){return function(t){var n=function(n){return t.setActive(!e.readonly&&!!an(e,n.element))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Jn=function(e){return function(t){t.setDisabled(!on(e.dom.getParents(e.selection.getStart())));var n=function(n){return t.setDisabled(!on(n.parents))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Xn=function(n){n.addCommand("mceLink",function(){A(n)?n.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):Wn(n)()})},Qn=function(n){n.addShortcut("Meta+K","",function(){n.execCommand("mceLink")})},Yn=function(n){n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Wn(n),onSetup:Gn(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return rn(n)},onSetup:Jn(n)})},Zn=function(n){n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Hn(n),onSetup:Jn(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Wn(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return rn(n)},onSetup:Jn(n)})},nt=function(t){t.ui.registry.addContextMenu("link",{update:function(n){return on(t.dom.getParents(n,"a"))?"link unlink openlink":"link"}})},tt=function(i){var n=function(n){var t=i.selection.getNode();return n.setDisabled(!an(i,t)),function(){}};i.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Gn(i)},label:"Link",predicate:function(n){return!!an(i,n)&&y(i)},initValue:function(){var n=an(i);return n?un(n):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(n){var t=i.selection.getNode();return n.setActive(!!an(i,t)),Gn(i)(n)},onAction:function(n){var t=an(i),e=n.getValue();if(t)i.dom.setAttrib(t,"href",e),i.selection.collapse(!1),n.hide();else{var r={href:e,attach:function(){}},o=cn(i.selection.getContent())?M.some(ln(i.selection,t)).filter(function(n){return 0<n.length}).or(M.from(e)):M.none();en(i,r,{href:e,text:o,title:M.none(),rel:M.none(),target:M.none(),"class":M.none()}),n.hide()}}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:n,onAction:function(n){rn(i),n.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:n,onAction:function(n){Hn(i)(),n.hide()}}]})};!function et(){l.add("link",function(n){Yn(n),Zn(n),nt(n),tt(n),$n(n),Xn(n),Qn(n)})}()}(window);