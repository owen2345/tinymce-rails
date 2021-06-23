/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.8.2 (2021-06-23)
 */
!function(){"use strict";var e,t,r,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n;var t,r}},i=o("string"),u=o("object"),g=o("array"),s=function(e){return!(null===(t=e)||t===undefined);var t},a=function(e){return function(){return e}},c=a(!1),l=a(!0),m=function(){return d},d=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:c,isSome:c,isNone:l,getOr:r=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:r,orThunk:t,map:m,each:function(){},bind:m,exists:c,forall:l,filter:m,equals:e,equals_:e,toArray:function(){return[]},toString:a("none()")}),f=function(r){var e=a(r),t=function(){return o},n=function(e){return e(r)},o={fold:function(e,t){return t(r)},is:function(e){return r===e},isSome:l,isNone:c,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return f(e(r))},each:function(e){e(r)},bind:n,exists:n,forall:n,filter:function(e){return e(r)?o:d},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,t){return e.fold(c,function(e){return t(r,e)})}};return o},h={some:f,none:m,from:function(e){return null===e||e===undefined?d:f(e)}},v=Array.prototype.push,w=function(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r)}},b=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},y=Object.keys,x=Object.hasOwnProperty,j=function(e,t){return O(e,t)?h.from(e[t]):h.none()},O=function(e,t){return x.call(e,t)},S=function(e){return e.getParam("media_scripts")},_=tinymce.util.Tools.resolve("tinymce.util.Tools"),k=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),A=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),T=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]},C=k.DOM,P=function(e){return e.replace(/px$/,"")},D=function(i,e){var c=b(!1),u={};return A({validate:!1,allow_conditional_comments:!0,start:function(e,t){if(!c.get())if(O(t.map,"data-ephox-embed-iri"))c.set(!0),o=(n=t).map.style,a=o?C.parseStyle(o):{},u={type:"ephox-embed-iri",source:n.map["data-ephox-embed-iri"],altsource:"",poster:"",width:j(a,"max-width").map(P).getOr(""),height:j(a,"max-height").map(P).getOr("")};else{if(u.source||"param"!==e||(u.source=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(u.type||(u.type=e),u=_.extend(t.map,u)),"script"===e){var r=T(i,t.map.src);if(!r)return;u={type:"script",source:t.map.src,width:String(r.width),height:String(r.height)}}"source"===e&&(u.source?u.altsource||(u.altsource=t.map.src):u.source=t.map.src),"img"!==e||u.poster||(u.poster=t.map.src)}var n,o,a}}).parse(e),u.source=u.source||u.src||u.data,u.altsource=u.altsource||"",u.poster=u.poster||"",u},$=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},M=tinymce.util.Tools.resolve("tinymce.html.Schema"),F=tinymce.util.Tools.resolve("tinymce.html.Writer"),z=k.DOM,N=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},U=function(a,e){!function(e,t){for(var r=y(e),n=0,o=r.length;n<o;n++){var a=r[n];t(e[a],a)}}(e,function(e,t){var r=""+e;if(a.map[t])for(var n=a.length;n--;){var o=a[n];o.name===t&&(r?(a.map[t]=r,o.value=r):(delete a.map[t],a.splice(n,1)))}else r&&(a.push({name:t,value:r}),a.map[t]=r)})},E=["source","altsource"],R=function(e,c,u){var s,l=F(),m=b(!1),d=0;return A({validate:!1,allow_conditional_comments:!0,comment:function(e){l.comment(e)},cdata:function(e){l.cdata(e)},text:function(e,t){l.text(e,t)},start:function(e,t,r){if(!m.get())if(O(t.map,"data-ephox-embed-iri"))m.set(!0),n=c,a=(o=t).map.style,(i=a?z.parseStyle(a):{})["max-width"]=N(n.width),i["max-height"]=N(n.height),U(o,{style:z.serializeStyle(i)});else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":c.height!==undefined&&c.width!==undefined&&U(t,{width:c.width,height:c.height})}if(u)switch(e){case"video":U(t,{poster:c.poster,src:""}),c.altsource&&U(t,{src:""});break;case"iframe":U(t,{src:c.source});break;case"source":if(d<2&&(U(t,{src:c[E[d]],type:c[E[d]+"mime"]}),!c[E[d]]))return;d++;break;case"img":if(!c.poster)return;s=!0}}var n,o,a,i;l.start(e,t,r)},end:function(e){if(!m.get()){if("video"===e&&u)for(var t,r=0;r<2;r++){c[E[r]]&&((t=[]).map={},d<=r&&(U(t,{src:c[E[r]],type:c[E[r]+"mime"]}),l.start("source",t,!0)))}var n;c.poster&&"object"===e&&u&&!s&&((n=[]).map={},U(n,{src:c.poster,width:c.width,height:c.height}),l.start("img",n,!0))}l.end(e)}},M({})).parse(e),l.getContent()},L=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],I=function(t){var e=L.filter(function(e){return e.regex.test(t)});return 0<e.length?_.extend({},e[0],{url:function(e,t){for(var r,n=(r=t.match(/^(https?:\/\/|www\.)(.+)$/i))&&1<r.length&&"www."!==r[1]?r[1]:"https://",o=e.regex.exec(t),a=n+e.url,i=0;i<o.length;i++)!function(e){a=a.replace("$"+e,function(){return o[e]?o[e]:""})}(i);return a.replace(/\?$/,"")}(e[0],t)}):null},q=function(r,e){var n=_.extend({},e);if(!n.source&&(_.extend(n,D(S(r),n.embed)),!n.source))return"";n.altsource||(n.altsource=""),n.poster||(n.poster=""),n.source=r.convertURL(n.source,"source"),n.altsource=r.convertURL(n.altsource,"source"),n.sourcemime=$(n.source),n.altsourcemime=$(n.altsource),n.poster=r.convertURL(n.poster,"poster");var t=I(n.source);if(t&&(n.source=t.url,n.type=t.type,n.allowfullscreen=t.allowFullscreen,n.width=n.width||String(t.w),n.height=n.height||String(t.h)),n.embed)return R(n.embed,n,!0);var o=T(S(r),n.source);o&&(n.type="script",n.width=String(o.width),n.height=String(o.height));var a,i,c,u,s,l,m,d,f=r.getParam("audio_template_callback"),h=r.getParam("video_template_callback");return n.width=n.width||"300",n.height=n.height||"150",_.each(n,function(e,t){n[t]=r.dom.encode(""+e)}),"iframe"===n.type?(d=(m=n).allowfullscreen?' allowFullscreen="1"':"",'<iframe src="'+m.source+'" width="'+m.width+'" height="'+m.height+'"'+d+"></iframe>"):"application/x-shockwave-flash"===n.sourcemime?(l='<object data="'+(s=n).source+'" width="'+s.width+'" height="'+s.height+'" type="application/x-shockwave-flash">',s.poster&&(l+='<img src="'+s.poster+'" width="'+s.width+'" height="'+s.height+'" />'),l+="</object>"):-1!==n.sourcemime.indexOf("audio")?(c=n,(u=f)?u(c):'<audio controls="controls" src="'+c.source+'">'+(c.altsource?'\n<source src="'+c.altsource+'"'+(c.altsourcemime?' type="'+c.altsourcemime+'"':"")+" />\n":"")+"</audio>"):"script"===n.type?'<script src="'+n.source+'"><\/script>':(a=n,(i=h)?i(a):'<video width="'+a.width+'" height="'+a.height+'"'+(a.poster?' poster="'+a.poster+'"':"")+' controls="controls">\n<source src="'+a.source+'"'+(a.sourcemime?' type="'+a.sourcemime+'"':"")+" />\n"+(a.altsource?'<source src="'+a.altsource+'"'+(a.altsourcemime?' type="'+a.altsourcemime+'"':"")+" />\n":"")+"</video>")},B=tinymce.util.Tools.resolve("tinymce.util.Promise"),W={},G=function(t){return function(e){return q(t,e)}},H=function(e,t){var r,n,o,a,i,c=e.getParam("media_url_resolver");return c?(o=t,a=G(e),i=c,new B(function(t,e){var r=function(e){return e.html&&(W[o.source]=e),t({url:o.source,html:e.html?e.html:a(o)})};W[o.source]?r(W[o.source]):i({url:o.source},r,e)})):(r=t,n=G(e),new B(function(e){e({html:n(r),url:r.source})}))},J=function(a,i,c){return function(e){var t=function(){return j(a,e)},r=function(){return j(i,e)},n=function(e){return j(e,"value").bind(function(e){return 0<e.length?h.some(e):h.none()})},o={};return o[e]=(e===c?t().bind(function(e){return u(e)?n(e).orThunk(r):r().orThunk(function(){return h.from(e)})}):r().orThunk(function(){return t().bind(function(e){return u(e)?n(e):h.from(e)})})).getOr(""),o}},K=function(e,t){var r,n,o=t?j(e,t).bind(function(e){return j(e,"meta")}).getOr({}):{},a=J(e,o,t);return p(p(p(p(p({},a("source")),a("altsource")),a("poster")),a("embed")),(r=o,n={},j(e,"dimensions").each(function(e){w(["width","height"],function(t){j(r,t).orThunk(function(){return j(e,t)}).each(function(e){return n[t]=e})})}),n))},Q=function(e){var n=p(p({},e),{source:{value:j(e,"source").getOr("")},altsource:{value:j(e,"altsource").getOr("")},poster:{value:j(e,"poster").getOr("")}});return w(["width","height"],function(r){j(e,r).each(function(e){var t=n.dimensions||{};t[r]=e,n.dimensions=t})}),n},V=function(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}},X=function(e,t){return D(S(e),t)},Y=function(o,a){return function(e){var t,r,n;i(e.url)&&0<e.url.trim().length&&(t=e.html,r=X(a,t),n=p(p({},r),{source:e.url,embed:t}),o.setData(Q(n)))}},Z=function(e,t){var r=e.dom.select("*[data-mce-object]");e.insertContent(t),function(e,t){for(var r=e.dom.select("*[data-mce-object]"),n=0;n<t.length;n++)for(var o=r.length-1;0<=o;o--)t[n]===r[o]&&r.splice(o,1);e.selection.select(r[0])}(e,r),e.nodeChanged()},ee=function(e,t,r){var n;t.embed=R(t.embed,t),t.embed&&(e.source===t.source||(n=t.source,W.hasOwnProperty(n)))?Z(r,t.embed):H(r,t).then(function(e){Z(r,e.html)})["catch"](V(r))},te=function(m){var e,t,r,n,o=(r=(e=m).selection.getNode(),n=(t=r).getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri")?e.serializer.serialize(r,{selection:!0}):"",p({embed:n},D(S(e),n))),d=b(o),a=Q(o),i={title:"General",name:"general",items:function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!g(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);v.apply(t,e[r])}return t}([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],m.getParam("media_dimensions",!0)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},c={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},u=[];m.getParam("media_alt_source",!0)&&u.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),m.getParam("media_poster",!0)&&u.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var s={title:"Advanced",name:"advanced",items:u},l=[i,c];0<u.length&&l.push(s);var f={type:"tabpanel",tabs:l},h=m.windowManager.open({title:"Insert/Edit Media",size:"normal",body:f,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var t=K(e.getData());ee(d.get(),t,m),e.close()},onChange:function(e,t){switch(t.name){case"source":s=d.get(),l=K(e.getData(),"source"),s.source!==l.source&&(Y(h,m)({url:l.source,html:""}),H(m,l).then(Y(h,m))["catch"](V(m)));break;case"embed":c=K((i=e).getData()),u=X(m,c.embed),i.setData(Q(u));break;case"dimensions":case"altsource":case"poster":r=e,n=t.name,o=K(r.getData(),n),a=q(m,o),r.setData(Q(p(p({},o),{embed:a})))}var r,n,o,a,i,c,u,s,l;d.set(K(e.getData()))},initialData:a})},re=tinymce.util.Tools.resolve("tinymce.html.Node"),ne=tinymce.util.Tools.resolve("tinymce.Env"),oe=tinymce.util.Tools.resolve("tinymce.html.DomParser"),ae=function(a,e){if(!1===a.getParam("media_filter_html",!0))return e;var i,c=F();return A({validate:!1,allow_conditional_comments:!1,comment:function(e){i||c.comment(e)},cdata:function(e){i||c.cdata(e)},text:function(e,t){i||c.text(e,t)},start:function(e,t,r){if(i=!0,"script"!==e&&"noscript"!==e&&"svg"!==e){for(var n=t.length-1;0<=n;n--){var o=t[n].name;0===o.indexOf("on")&&(delete t.map[o],t.splice(n,1)),"style"===o&&(t[n].value=a.dom.serializeStyle(a.dom.parseStyle(t[n].value),e))}c.start(e,t,r),i=!1}},end:function(e){i||c.end(e)}},M({})).parse(e),c.getContent()},ie=function(e,t,r,n){void 0===n&&(n=null);var o=e.attr(r);return s(o)?o:O(t,r)?null:n},ce=function(e,t,r){var n="img"===t.name||"video"===e.name,o=n?"300":null,a="audio"===e.name?"30":"150",i=n?a:null;t.attr({width:ie(e,r,"width",o),height:ie(e,r,"height",i)})},ue=function(e,t){var r=t.name,n=new re("span",1);n.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":r,"class":"mce-preview-object mce-object-"+r}),se(e,t,n);var o,a=e.dom.parseStyle(t.attr("style")),i=new re(r,1);ce(t,i,a),i.attr({src:t.attr("src"),style:t.attr("style"),"class":t.attr("class")}),"iframe"===r?i.attr({allowfullscreen:t.attr("allowfullscreen"),frameborder:"0"}):(w(["controls","crossorigin","currentTime","loop","muted","poster","preload"],function(e){i.attr(e,t.attr(e))}),o=n.attr("data-mce-html"),s(o)&&function(e,t,r,n){for(var o=oe({forced_root_block:!1,validate:!1},e.schema).parse(n,{context:t});o.firstChild;)r.append(o.firstChild)}(e,r,i,o));var c=new re("span",1);return c.attr("class","mce-shim"),n.append(i),n.append(c),n},se=function(e,t,r){for(var n=t.attributes,o=n.length;o--;){var a=n[o].name,i=n[o].value;"width"!==a&&"height"!==a&&"style"!==a&&("data"!==a&&"src"!==a||(i=e.convertURL(i,a)),r.attr("data-mce-p-"+a,i))}var c=t.firstChild&&t.firstChild.value;c&&(r.attr("data-mce-html",escape(ae(e,c))),r.firstChild=null)},le=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t))return!0;var t;return!1},me=function(s){return function(e){for(var t,r,n,o,a,i,c,u=e.length;u--;)(t=e[u]).parent&&(t.parent.attr("data-mce-object")||"script"===t.name&&!(r=T(S(s),t.attr("src")))||(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),("iframe"===(c=t.name)||"video"===c||"audio"===c)&&s.getParam("media_live_embeds",!0)&&ne.ceFalse?le(t)||t.replace(ue(s,t)):le(t)||t.replace((n=s,i=void 0,a=(o=t).name,(i=new re("img",1)).shortEnded=!0,se(n,o,i),ce(o,i,{}),i.attr({style:o.attr("style"),src:ne.transparentSrc,"data-mce-object":a,"class":"mce-object mce-object-"+a}),i))))}},de=function(e){var t,r;e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:(t=e,r=["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"],function(e){return t.selection.selectorChangedWithUnbind(r.join(","),e.setActive).unbind})}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})};n.add("media",function(e){var t,d,r,n;return(t=e).addCommand("mceMedia",function(){te(t)}),de(e),e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),(d=e).on("preInit",function(){var t=d.schema.getSpecialElements();_.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=d.schema.getBoolAttrs();_.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",me(d)),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,n,o,a,i,c,u,s,l=e.length;l--;)if((r=e[l]).parent){for(u=r.attr(t),n=new re(u,1),"audio"!==u&&"script"!==u&&((s=r.attr("class"))&&-1!==s.indexOf("mce-preview-object")?n.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):n.attr({width:r.attr("width"),height:r.attr("height")})),n.attr({style:r.attr("style")}),o=(a=r.attributes).length;o--;){var m=a[o].name;0===m.indexOf("data-mce-p-")&&n.attr(m.substr(11),a[o].value)}"script"===u&&n.attr("type","text/javascript"),(i=r.attr("data-mce-html"))&&((c=new re("#text",3)).raw=!0,c.value=ae(d,unescape(i)),n.append(c)),r.replace(n)}})}),d.on("SetContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})}),(r=e).on("click keyup touchend",function(){var e=r.selection.getNode();e&&r.dom.hasClass(e,"mce-preview-object")&&r.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),r.on("ObjectSelected",function(e){"script"===e.target.getAttribute("data-mce-object")&&e.preventDefault()}),r.on("ObjectResized",function(e){var t,r=e.target;r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(R(t,{width:String(e.width),height:String(e.height)}))))}),n=e,{showDialog:function(){te(n)}}})}();