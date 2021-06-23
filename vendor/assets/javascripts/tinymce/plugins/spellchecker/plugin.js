/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.8.2 (2021-06-23)
 */
!function(){"use strict";var N=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=Object.hasOwnProperty,g=tinymce.util.Tools.resolve("tinymce.util.Tools"),d=tinymce.util.Tools.resolve("tinymce.util.URI"),f=tinymce.util.Tools.resolve("tinymce.util.XHR"),h=function(e){return e.getParam("spellchecker_rpc_url")},k=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g");return e.getParam("spellchecker_wordchar_pattern",t)},p=function(e){return e&&1===e.nodeType&&"false"===e.contentEditable},r=function(i,r){var n,a=[],v=r.dom,f=r.schema.getBlockElements(),h=r.schema.getWhiteSpaceElements(),g=r.schema.getShortEndedElements(),o=function(e){var t;if(3===e.nodeType)return e.data;if(h[e.nodeName]&&!f[e.nodeName])return"";if(p(e))return"\n";if(t="",(f[e.nodeName]||g[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=o(e),e=e.nextSibling;);return t},c=function(e){for(var t=e.parentNode;0<e.childNodes.length;)t.insertBefore(e.childNodes[0],e);t.removeChild(e)},s=function(e){var t=i.getElementsByTagName("*"),n=[];e="number"==typeof e?""+e:null;for(var r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-mce-index");null!==a&&a.length&&-1!==o.className.indexOf("mce-spellchecker-word")&&(a!==e&&null!==e||n.push(o))}return n},l=function(e){for(var t=a.length;t--;)if(a[t]===e)return t;return-1};function e(e){for(var t=0,n=a.length;t<n&&!1!==e(a[t],t);t++);return this}function t(e){for(var t=s(e?l(e):null),n=t.length;n--;)c(t[n]);return this}var u=function(e){var t=s(l(e)),n=r.dom.createRng();return n.setStartBefore(t[0]),n.setEndAfter(t[t.length-1]),n};var d=o(i);return{text:d,matches:a,each:e,filter:function(n){var r=[];return e(function(e,t){n(e,t)&&r.push(e)}),a=r,this},reset:function(){return a.splice(0,a.length),t(),this},matchFromElement:function(e){return a[e.getAttribute("data-mce-index")]},elementFromMatch:function(e){return s(l(e))[0]},find:function(e,t){if(d&&e.global)for(;n=e.exec(d);)a.push(function(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}(n,t));return this},add:function(e,t,n){return a.push({start:e,end:e+t,text:d.substr(e,t),data:n}),this},wrap:function(e){var o,m;return a.length&&function(e,t,n){var r,o,a,i,c,s=[],l=0,u=e,d=0;(t=t.slice(0)).sort(function(e,t){return e.start-t.start}),c=t.shift();e:for(;;){if((f[u.nodeName]||g[u.nodeName]||p(u))&&l++,3===u.nodeType&&(!o&&u.length+l>=c.end?(o=u,i=c.end-l):r&&s.push(u),!r&&u.length+l>c.start&&(r=u,a=c.start-l),l+=u.length),r&&o){if(u=n({startNode:r,startNodeIndex:a,endNode:o,endNodeIndex:i,innerNodes:s,match:c.text,matchIndex:d}),l-=o.length-i,o=r=null,s=[],d++,!(c=t.shift()))break}else if(h[u.nodeName]&&!f[u.nodeName]||!u.firstChild){if(u.nextSibling){u=u.nextSibling;continue}}else if(!p(u)){u=u.firstChild;continue}for(;;){if(u.nextSibling){u=u.nextSibling;break}if(u.parentNode===e)break e;u=u.parentNode}}}(i,a,(o=e,m=function(e,t){var n=a[t];n.stencil||(n.stencil=o(n));var r=n.stencil.cloneNode(!1);return r.setAttribute("data-mce-index",t),e&&r.appendChild(v.doc.createTextNode(e)),r},function(e){var t,n,r=e.startNode,o=e.endNode,a=e.matchIndex,i=v.doc;if(r===o){var c=r,s=c.parentNode;0<e.startNodeIndex&&(t=i.createTextNode(c.data.substring(0,e.startNodeIndex)),s.insertBefore(t,c));var l=m(e.match,a);return s.insertBefore(l,c),e.endNodeIndex<c.length&&(n=i.createTextNode(c.data.substring(e.endNodeIndex)),s.insertBefore(n,c)),c.parentNode.removeChild(c),l}t=i.createTextNode(r.data.substring(0,e.startNodeIndex)),n=i.createTextNode(o.data.substring(e.endNodeIndex));for(var u=m(r.data.substring(e.startNodeIndex),a),d=0,f=e.innerNodes.length;d<f;++d){var h=e.innerNodes[d],g=m(h.data,a);h.parentNode.replaceChild(g,h)}var p=m(o.data.substring(0,e.endNodeIndex),a);return(s=r.parentNode).insertBefore(t,r),s.insertBefore(u,r),s.removeChild(r),(s=o.parentNode).insertBefore(p,o),s.insertBefore(n,o),s.removeChild(o),p})),this},unwrap:t,replace:function(e,t){var n=u(e);return n.deleteContents(),0<t.length&&n.insertNode(r.dom.doc.createTextNode(t)),n},rangeFromMatch:u,indexOf:l}},u=function(e,t){var n;return t.get()||(n=r(e.getBody(),e),t.set(n)),t.get()},m=function(e,t,n,r,o,a,i){var c,s,l,u=e.getParam("spellchecker_callback");(u||(c=e,s=t,l=n,function(e,t,r,o){var n={method:e,lang:l.get()},a="";n["addToDictionary"===e?"word":"text"]=t,g.each(n,function(e,t){a&&(a+="&"),a+=t+"="+encodeURIComponent(e)}),f.send({url:new d(s).toAbsolute(h(c)),type:"post",content_type:"application/x-www-form-urlencoded",data:a,success:function(e){var t,n=JSON.parse(e);n?n.error?o(n.error):r(n):(t=c.translate("Server response wasn't proper JSON."),o(t))},error:function(){var e=c.translate("The spelling service was not found: (")+h(c)+c.translate(")");o(e)}})})).call(e.plugins.spellchecker,r,o,a,i)},y=function(t,e,n,r,o,a){i(t,n,r)||(t.setProgressState(!0),m(t,e,a,"spellcheck",u(t,r).text,function(e){S(t,n,r,o,e)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1),i(t,n,r)}),t.focus())},v=function(e,t,n){e.dom.select("span.mce-spellchecker-word").length||i(e,t,n)},o=function(t,e,n,r,o,a){t.selection.collapse(),a?g.each(t.dom.select("span.mce-spellchecker-word"),function(e){e.getAttribute("data-mce-word")===r&&t.dom.remove(e,!0)}):t.dom.remove(o,!0),v(t,e,n)},i=function(e,t,n){var r=e.selection.getBookmark();if(u(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),e.fire("SpellcheckEnd"),!0},x=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},S=function(t,e,n,r,o){var a=!!o.dictionary,i=o.words;if(t.setProgressState(!1),function(e){for(var t in e)if(l.call(e,t))return!1;return!0}(i)){var c=t.translate("No misspellings found.");return t.notificationManager.open({text:c,type:"info"}),void e.set(!1)}r.set({suggestions:i,hasDictionarySupport:a});var s=t.selection.getBookmark();u(t,n).find(k(t)).filter(function(e){return!!i[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":e.text})}),t.selection.moveToBookmark(s),e.set(!0),t.fire("SpellcheckStart")},b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w="SpellcheckStart SpellcheckEnd",T=function(n,e,r,t,o,a){var i,c,s,l=(s=n,i=g.map(s.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv").split(","),function(e){var t=e.split("=");return{name:t[0],value:t[1]}}),c=[],g.each(i,function(e){c.push({selectable:!0,text:e.name,data:e.value})}),c),u=function(){y(n,e,r,t,a,o)},d={tooltip:"Spellcheck",onAction:u,icon:"spell-check",onSetup:function(e){var t=function(){e.setActive(r.get())};return n.on(w,t),function(){n.off(w,t)}}},f=b(b({},d),{type:"splitbutton",select:function(e){return e===o.get()},fetch:function(e){e(g.map(l,function(e){return{type:"choiceitem",value:e.data,text:e.text}}))},onItemAction:function(e,t){o.set(t)}});1<l.length?n.ui.registry.addSplitButton("spellchecker",f):n.ui.registry.addToggleButton("spellchecker",d),n.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",icon:"spell-check",onSetup:function(e){e.setActive(r.get());var t=function(){e.setActive(r.get())};return n.on(w,t),function(){n.off(w,t)}},onAction:u})},A=function(c,s,e,l,u,d,f,h){var t=[],n=e.get().suggestions[f];return g.each(n,function(e){t.push({text:e,onAction:function(){c.insertContent(c.dom.encode(e)),c.dom.remove(h),v(c,l,u)}})}),e.get().hasDictionarySupport&&(t.push({type:"separator"}),t.push({text:"Add to dictionary",onAction:function(){var t,e,n,r,o,a,i;e=s,n=l,r=u,o=d,a=f,i=h,(t=c).setProgressState(!0),m(t,e,o,"addToDictionary",a,function(){t.setProgressState(!1),t.dom.remove(i,!0),v(t,n,r)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1)})}})),t.push.apply(t,[{type:"separator"},{text:"Ignore",onAction:function(){o(c,l,u,f,h)}},{text:"Ignore all",onAction:function(){o(c,l,u,f,h,!0)}}]),t},B=function(o,a,i,c,s,l){o.ui.registry.addContextMenu("spellchecker",{update:function(e){var t=e;if("mce-spellchecker-word"!==t.className)return[];var n=function(e,t){var n=[],r=g.toArray(e.getBody().getElementsByTagName("span"));if(r.length)for(var o=0;o<r.length;o++){var a=x(r[o]);null!==a&&a.length&&a===t.toString()&&n.push(r[o])}return n}(o,x(t));if(0<n.length){var r=o.dom.createRng();return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),o.selection.setRng(r),A(o,a,i,c,s,l,t.getAttribute("data-mce-word"),n)}}})};e.add("spellchecker",function(e,t){if(!1==(!!e.hasPlugin("tinymcespellchecker",!0)&&("undefined"!=typeof window.console&&window.console.log&&window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0))){var n=N(!1),r=N((x=(v=e).getParam("language","en"),v.getParam("spellchecker_language",x))),o=N(null),a=N(null);return T(e,t,n,o,r,a),B(e,t,a,n,o,r),f=t,h=n,g=o,p=a,m=r,(d=e).addCommand("mceSpellCheck",function(){y(d,f,h,g,p,m)}),i=e,c=n,s=a,u=r,{getTextMatcher:(l=o).get,getWordCharPattern:function(){return k(i)},markErrors:function(e){S(i,c,l,s,e)},getLanguage:u.get}}var i,c,s,l,u,d,f,h,g,p,m,v,x})}();