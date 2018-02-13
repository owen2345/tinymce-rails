!function(){"use strict";var e,t,n,r,o,a,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(e){return function(){return e}},c={noop:function(){},noarg:function(e){return function(){return e()}},compose:function(e,t){return function(){return e(t.apply(null,arguments))}},constant:u,identity:function(e){return e},tripleEquals:function(e,t){return e===t},curry:function(e){for(var t=new Array(arguments.length-1),n=1;n<arguments.length;n++)t[n-1]=arguments[n];return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];var o=t.concat(n);return e.apply(null,o)}},not:function(e){return function(){return!e.apply(null,arguments)}},die:function(e){return function(){throw new Error(e)}},apply:function(e){return e()},call:function(e){e()},never:u(!1),always:u(!0)},l=c.never,s=c.always,f=function(){return m},m=(r={fold:function(e,t){return e()},is:l,isSome:l,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},or:n,orThunk:t,map:f,ap:f,each:function(){},bind:f,flatten:f,exists:l,forall:s,filter:f,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:c.constant("none()")},Object.freeze&&Object.freeze(r),r),p=function(e){var t=function(){return e},n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,or:n,orThunk:n,map:function(t){return p(t(e))},ap:function(t){return t.fold(f,function(t){return p(t(e))})},each:function(t){t(e)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(e)?o:m},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(l,function(t){return n(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},d={some:p,none:f,from:function(e){return null===e||e===undefined?m:p(e)}},h=(o=Array.prototype.indexOf)===undefined?function(e,t){return v(e,t)}:function(e,t){return o.call(e,t)},y=function(e,t){return h(e,t)>-1},g=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var a=e[o];r[o]=t(a,o,e)}return r},k=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r];t(a,r,e)&&n.push(a)}return n},v=function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},b=(Array.prototype.push,Array.prototype.slice,g),x=k,w=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n,e))return d.some(o)}return d.none()},C=y,A=tinymce.util.Tools.resolve("tinymce.util.I18n"),S=tinymce.util.Tools.resolve("tinymce.Env"),T=S.mac?"\u2318":"Ctrl",P=S.mac?"Ctrl + Alt":"Shift + Alt",_={shortcuts:[{shortcut:T+" + B",action:"Bold"},{shortcut:T+" + I",action:"Italic"},{shortcut:T+" + U",action:"Underline"},{shortcut:T+" + A",action:"Select all"},{shortcut:T+" + Y or "+T+" + Shift + Z",action:"Redo"},{shortcut:T+" + Z",action:"Undo"},{shortcut:P+" + 1",action:"Header 1"},{shortcut:P+" + 2",action:"Header 2"},{shortcut:P+" + 3",action:"Header 3"},{shortcut:P+" + 4",action:"Header 4"},{shortcut:P+" + 5",action:"Header 5"},{shortcut:P+" + 6",action:"Header 6"},{shortcut:P+" + 7",action:"Paragraph"},{shortcut:P+" + 8",action:"Div"},{shortcut:P+" + 9",action:"Address"},{shortcut:"Alt + F9",action:"Focus to menubar"},{shortcut:"Alt + F10",action:"Focus to toolbar"},{shortcut:"Alt + F11",action:"Focus to element path"},{shortcut:"Ctrl + Shift + P > Ctrl + Shift + P",action:"Focus to contextual toolbar"},{shortcut:T+" + K",action:"Insert link (if link plugin activated)"},{shortcut:T+" + S",action:"Save (if save plugin activated)"},{shortcut:T+" + F",action:"Find (if searchreplace plugin activated)"}]},H=function(){var e=b(_.shortcuts,function(e){return'<tr data-mce-tabstop="1" tabindex="-1" aria-label="Action: '+(t=e).action+", Shortcut: "+t.shortcut.replace(/Ctrl/g,"Control")+'"><td>'+A.translate(e.action)+"</td><td>"+e.shortcut+"</td></tr>";var t}).join("");return{title:"Handy Shortcuts",type:"container",style:"overflow-y: auto; overflow-x: hidden; max-height: 250px",items:[{type:"container",html:'<div><table class="mce-table-striped"><thead><th>'+A.translate("Action")+"</th><th>"+A.translate("Shortcut")+"</th></thead>"+e+"</table></div>"}]}},O=(a=Object.keys)===undefined?function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}:a,M=function(e,t){for(var n=O(e),r=0,o=n.length;r<o;r++){var a=n[r];t(e[a],a,e)}},E=function(e,t){var n={};return M(e,function(r,o){var a=t(r,o,e);n[a.k]=a.v}),n},F=function(e,t){var n=[];return M(e,function(e,r){n.push(t(e,r))}),n},I=function(e){return F(e,function(e){return e})},L={bifilter:function(e,t){var n={},r={};return M(e,function(e,o){(t(e,o)?n:r)[o]=e}),{t:n,f:r}},each:M,map:function(e,t){return E(e,function(e,n,r){return{k:n,v:t(e,n,r)}})},mapToArray:F,tupleMap:E,find:function(e,t){for(var n=O(e),r=0,o=n.length;r<o;r++){var a=n[r],i=e[a];if(t(i,a,e))return d.some(i)}return d.none()},keys:O,values:I,size:function(e){return I(e).length}},B=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"compat3x",name:"3.x Compatibility"},{key:"contextmenu",name:"Context Menu"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"}],j=c.curry(function(e,t){return e.replace(/\${([^{}]*)}/g,function(e,n){var r,o=t[n];return"string"==(r=typeof o)||"number"===r?o:e})},'<a href="${url}" target="_blank" rel="noopener">${name}</a>'),z=function(e){var t,n,r=(t=e,n=L.keys(t.plugins),t.settings.forced_plugins===undefined?n:x(n,c.not(c.curry(C,t.settings.forced_plugins)))),o=b(r,function(t){return"<li>"+(n=e,r=t,w(B,function(e){return e.key===r}).fold(function(){var e=n.plugins[r].getMetadata;return"function"==typeof e?j(e()):r},function(e){return j({name:e.name,url:"https://www.tinymce.com/docs/plugins/"+e.key})}))+"</li>";var n,r}),a=o.length,i=o.join("");return"<p><b>"+A.translate(["Plugins installed ({0}):",a])+"</b></p><ul>"+i+"</ul>"},D=function(e){return{title:"Plugins",type:"container",style:"overflow-y: auto; overflow-x: hidden;",layout:"flex",padding:10,spacing:10,items:[(t=e,{type:"container",html:'<div style="overflow-y: auto; overflow-x: hidden; max-height: 230px; height: 230px;" data-mce-tabstop="1" tabindex="-1">'+z(t)+"</div>",flex:1}),{type:"container",html:'<div style="padding: 10px; background: #e3e7f4; height: 100%;" data-mce-tabstop="1" tabindex="-1"><p><b>'+A.translate("Premium plugins:")+'</b></p><ul><li>PowerPaste</li><li>Spell Checker Pro</li><li>Accessibility Checker</li><li>Advanced Code Editor</li><li>Enhanced Media Embed</li><li>Link Checker</li></ul><br /><p style="float: right;"><a href="https://www.tinymce.com/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+A.translate("Learn more...")+"</a></p></div>",flex:1}]};var t},q=tinymce.util.Tools.resolve("tinymce.EditorManager"),N=function(){var e,t,n='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+(e=q.majorVersion,t=q.minorVersion,0===e.indexOf("@")?"X.X.X":e+"."+t)+"</a>";return[{type:"label",html:A.translate(["You are using {0}",n])},{type:"spacer",flex:1},{text:"Close",onclick:function(){this.parent().parent().close()}}]},R=function(e,t){return function(){e.windowManager.open({title:"Help",bodyType:"tabpanel",layout:"flex",body:[H(),D(e)],buttons:N(),onPostRender:function(){this.getEl("title").innerHTML='<img src="'+t+'/img/logo.png" alt="TinyMCE Logo" style="display: inline-block; width: 200px; height: 50px">'}})}},V=function(e,t){e.addCommand("mceHelp",R(e,t))},U=function(e,t){e.addButton("help",{icon:"help",onclick:R(e,t)}),e.addMenuItem("Help",{text:"Help",icon:"help",context:"help",onclick:R(e,t)})};i.add("help",function(e,t){U(e,t),V(e,t),e.shortcuts.add("Alt+0","Open help dialog","mceHelp")})}();