/**
 * TinyMCE version 6.0.3 (2022-05-25)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>typeof e===t,n=t=>"string"===(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(n=o=t,(s=String).prototype.isPrototypeOf(n)||(null===(r=o.constructor)||void 0===r?void 0:r.name)===s.name)?"string":e;var n,o,s,r})(t),o=(null,t=>null===t);const s=e("boolean"),r=e("number");class a{constructor(t,e){this.tag=t,this.value=e}static some(t){return new a(!0,t)}static none(){return a.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?a.some(t(this.value)):a.none()}bind(t){return this.tag?t(this.value):a.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:a.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return null==t?a.none():a.some(t)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}a.singletonNone=new a(!1);const i=(t,e)=>{for(let n=0,o=t.length;n<o;n++)e(t[n],n)},l=Object.keys,u=(t,e)=>{const n=l(t);for(let o=0,s=n.length;o<s;o++){const s=n[o];e(t[s],s)}};"undefined"!=typeof window?window:Function("return this;")();const c=t=>t.dom.nodeValue,d=t=>3===(t=>t.dom.nodeType)(t),h=(t,e,o)=>{((t,e,o)=>{if(!(n(o)||s(o)||r(o)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",o,":: Element ",t),new Error("Attribute value was not simple");t.setAttribute(e,o+"")})(t.dom,e,o)},g=(t,e)=>{t.dom.removeAttribute(e)},m=(t,e)=>{const n=((t,e)=>{const n=t.dom.getAttribute(e);return null===n?void 0:n})(t,e);return void 0===n||""===n?[]:n.split(" ")},v=t=>void 0!==t.dom.classList,p=t=>{if(null==t)throw new Error("Node cannot be null or undefined");return{dom:t}},f=p,y={"\xa0":"nbsp","\xad":"shy"},b=(t,e)=>{let n="";return u(t,((t,e)=>{n+=e})),new RegExp("["+n+"]",e?"g":"")},w=b(y),A=b(y,!0),k=(t=>{let e="";return u(t,(t=>{e&&(e+=","),e+="span.mce-"+t})),e})(y),N="mce-nbsp",C=t=>'<span data-mce-bogus="1" class="mce-'+y[t]+'">'+t+"</span>",T=t=>{const e=c(t);return d(t)&&void 0!==e&&w.test(e)},O=(t,e)=>{let n=[];const o=((t,e)=>{const n=t.length,o=new Array(n);for(let s=0;s<n;s++){const n=t[s];o[s]=e(n,s)}return o})(t.dom.childNodes,f);return i(o,(t=>{e(t)&&(n=n.concat([t])),n=n.concat(O(t,e))})),n},B=t=>"span"===t.nodeName.toLowerCase()&&t.classList.contains("mce-nbsp-wrap"),S=(t,e)=>{const n=O(f(e),T);i(n,(e=>{const n=e.dom.parentNode;if(B(n))o=f(n),s=N,v(o)?o.dom.classList.add(s):((t,e)=>{((t,e,n)=>{const o=m(t,e).concat([n]);h(t,e,o.join(" "))})(t,"class",e)})(o,s);else{const n=t.dom.encode(c(e)).replace(A,C),o=t.dom.create("div",null,n);let s;for(;s=o.lastChild;)t.dom.insertAfter(s,e.dom);t.dom.remove(e.dom)}var o,s}))},V=(t,e)=>{const n=t.dom.select(k,e);i(n,(e=>{var n,o;B(e)?(n=f(e),o=N,v(n)?n.dom.classList.remove(o):((t,e)=>{((t,e,n)=>{const o=((t,e)=>{const o=[];for(let e=0,s=t.length;e<s;e++){const s=t[e];s!==n&&o.push(s)}return o})(m(t,e));o.length>0?h(t,e,o.join(" ")):g(t,e)})(t,"class",e)})(n,o),(t=>{const e=v(t)?t.dom.classList:(t=>m(t,"class"))(t);0===e.length&&g(t,"class")})(n)):t.dom.remove(e,!0)}))},E=t=>{const e=t.getBody(),n=t.selection.getBookmark();let o=((t,e)=>{for(;t.parentNode;){if(t.parentNode===e)return t;t=t.parentNode}})(t.selection.getNode(),e);o=void 0!==o?o:e,V(t,o),S(t,o),t.selection.moveToBookmark(n)},L=(t,e)=>{((t,e)=>{t.dispatch("VisualChars",{state:e})})(t,e.get());const n=t.getBody();!0===e.get()?S(t,n):V(t,n)},_=("visualchars_default_state",t=>t.options.get("visualchars_default_state"));const j=(t,e)=>{const n=((t,e)=>{let n=null;return{cancel:()=>{o(n)||(clearTimeout(n),n=null)},throttle:(...e)=>{o(n)&&(n=setTimeout((()=>{n=null,t.apply(null,e)}),300))}}})((()=>{E(t)}));t.on("keydown",(o=>{!0===e.get()&&(13===o.keyCode?E(t):n.throttle())})),t.on("remove",n.cancel)},x=(t,e)=>n=>{n.setActive(e.get());const o=t=>n.setActive(t.state);return t.on("VisualChars",o),()=>t.off("VisualChars",o)};t.add("visualchars",(t=>{(t=>{(0,t.options.register)("visualchars_default_state",{processor:"boolean",default:!1})})(t);const e=(t=>{let e=t;return{get:()=>e,set:t=>{e=t}}})(_(t));return((t,e)=>{t.addCommand("mceVisualChars",(()=>{((t,e)=>{e.set(!e.get());const n=t.selection.getBookmark();L(t,e),t.selection.moveToBookmark(n)})(t,e)}))})(t,e),((t,e)=>{const n=()=>t.execCommand("mceVisualChars");t.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:n,onSetup:x(t,e)}),t.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:n,onSetup:x(t,e)})})(t,e),j(t,e),((t,e)=>{t.on("init",(()=>{L(t,e)}))})(t,e),(t=>({isEnabled:()=>t.get()}))(e)}))}();