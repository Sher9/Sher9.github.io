import{Q as Mt}from"./element-Di_zbn_f.js";var Et={exports:{}},Wt=Et.exports={};Wt.forEach=function(r,n){for(var c=0;c<r.length;c++){var e=n(r[c]);if(e)return e}};var xt=Et.exports,Bt=function(r){var n=r.stateHandler.getState;function c(l){var s=n(l);return s&&!!s.isDetectable}function e(l){n(l).isDetectable=!0}function u(l){return!!n(l).busy}function g(l,s){n(l).busy=!!s}return{isDetectable:c,markAsDetectable:e,isBusy:u,markBusy:g}},_t=function(r){var n={};function c(l){var s=r.get(l);return s===void 0?[]:n[s]||[]}function e(l,s){var h=r.get(l);n[h]||(n[h]=[]),n[h].push(s)}function u(l,s){for(var h=c(l),d=0,p=h.length;d<p;++d)if(h[d]===s){h.splice(d,1);break}}function g(l){var s=c(l);s&&(s.length=0)}return{get:c,add:e,removeListener:u,removeAllListeners:g}},Rt=function(){var r=1;function n(){return r++}return{generate:n}},Ft=function(r){var n=r.idGenerator,c=r.stateHandler.getState;function e(g){var l=c(g);return l&&l.id!==void 0?l.id:null}function u(g){var l=c(g);if(!l)throw new Error("setId required the element to have a resize detection state.");var s=n.generate();return l.id=s,s}return{get:e,set:u}},qt=function(r){function n(){}var c={log:n,warn:n,error:n};if(!r&&window.console){var e=function(u,g){u[g]=function(){var s=console[g];if(s.apply)s.apply(console,arguments);else for(var h=0;h<arguments.length;h++)s(arguments[h])}};e(c,"log"),e(c,"warn"),e(c,"error")}return c},mt={exports:{}},kt=mt.exports={};kt.isIE=function(r){function n(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!==-1||e.indexOf("trident")!==-1||e.indexOf(" edge/")!==-1}if(!n())return!1;if(!r)return!0;var c=function(){var e,u=3,g=document.createElement("div"),l=g.getElementsByTagName("i");do g.innerHTML="<!--[if gt IE "+ ++u+"]><i></i><![endif]-->";while(l[0]);return u>4?u:e}();return r===c};kt.isLegacyOpera=function(){return!!window.opera};var Dt=mt.exports,Ct={exports:{}},Ut=Ct.exports={};Ut.getOption=$t;function $t(r,n,c){var e=r[n];return e==null&&c!==void 0?c:e}var Gt=Ct.exports,gt=Gt,Vt=function(n){n=n||{};var c=n.reporter,e=gt.getOption(n,"async",!0),u=gt.getOption(n,"auto",!0);u&&!e&&(c&&c.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),e=!0);var g=pt(),l,s=!1;function h(S,A){!s&&u&&e&&g.size()===0&&C(),g.add(S,A)}function d(){for(s=!0;g.size();){var S=g;g=pt(),S.process()}s=!1}function p(S){s||(S===void 0&&(S=e),l&&(P(l),l=null),S?C():d())}function C(){l=m(d)}function P(S){var A=clearTimeout;return A(S)}function m(S){var A=function(M){return setTimeout(M,0)};return A(S)}return{add:h,force:p}};function pt(){var r={},n=0,c=0,e=0;function u(s,h){h||(h=s,s=0),s>c?c=s:s<e&&(e=s),r[s]||(r[s]=[]),r[s].push(h),n++}function g(){for(var s=e;s<=c;s++)for(var h=r[s],d=0;d<h.length;d++){var p=h[d];p()}}function l(){return n}return{add:u,process:g,size:l}}var st="_erd";function Jt(r){return r[st]={},zt(r)}function zt(r){return r[st]}function Qt(r){delete r[st]}var Yt={initState:Jt,getState:zt,cleanState:Qt},Z=Dt,Kt=function(r){r=r||{};var n=r.reporter,c=r.batchProcessor,e=r.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");function u(d,p){function C(){p(d)}if(Z.isIE(8))e(d).object={proxy:C},d.attachEvent("onresize",C);else{var P=s(d);if(!P)throw new Error("Element is not detectable by this strategy.");P.contentDocument.defaultView.addEventListener("resize",C)}}function g(d){var p=r.important?" !important; ":"; ";return(d.join(p)+p).trim()}function l(d,p,C){C||(C=p,p=d,d=null),d=d||{},d.debug;function P(m,S){var A=g(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),M=!1,W=window.getComputedStyle(m),k=m.offsetWidth,D=m.offsetHeight;e(m).startSize={width:k,height:D};function o(){function t(){if(W.position==="static"){m.style.setProperty("position","relative",d.important?"important":"");var z=function(T,w,H,f){function y(O){return O.replace(/[^-\d\.]/g,"")}var I=H[f];I!=="auto"&&y(I)!=="0"&&(T.warn("An element that is positioned static has style."+f+"="+I+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+f+" will be set to 0. Element: ",w),w.style.setProperty(f,"0",d.important?"important":""))};z(n,m,W,"top"),z(n,m,W,"right"),z(n,m,W,"bottom"),z(n,m,W,"left")}}function E(){M||t();function z(w,H){if(!w.contentDocument){var f=e(w);f.checkForObjectDocumentTimeoutId&&window.clearTimeout(f.checkForObjectDocumentTimeoutId),f.checkForObjectDocumentTimeoutId=setTimeout(function(){f.checkForObjectDocumentTimeoutId=0,z(w,H)},100);return}H(w.contentDocument)}var T=this;z(T,function(H){S(m)})}W.position!==""&&(t(),M=!0);var i=document.createElement("object");i.style.cssText=A,i.tabIndex=-1,i.type="text/html",i.setAttribute("aria-hidden","true"),i.onload=E,Z.isIE()||(i.data="about:blank"),e(m)&&(m.appendChild(i),e(m).object=i,Z.isIE()&&(i.data="about:blank"))}c?c.add(o):o()}Z.isIE(8)?C(p):P(p,C)}function s(d){return e(d).object}function h(d){if(e(d)){var p=s(d);p&&(Z.isIE(8)?d.detachEvent("onresize",p.proxy):d.removeChild(p),e(d).checkForObjectDocumentTimeoutId&&window.clearTimeout(e(d).checkForObjectDocumentTimeoutId),delete e(d).object)}}return{makeDetectable:l,addListener:u,uninstall:h}},Xt=xt.forEach,Zt=function(r){r=r||{};var n=r.reporter,c=r.batchProcessor,e=r.stateHandler.getState;r.stateHandler.hasState;var u=r.idHandler;if(!c)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var g=p(),l="erd_scroll_detection_scrollbar_style",s="erd_scroll_detection_container";function h(o){C(o,l,s)}h(window.document);function d(o){var t=r.important?" !important; ":"; ";return(o.join(t)+t).trim()}function p(){var o=500,t=500,E=document.createElement("div");E.style.cssText=d(["position: absolute","width: "+o*2+"px","height: "+t*2+"px","visibility: hidden","margin: 0","padding: 0"]);var i=document.createElement("div");i.style.cssText=d(["position: absolute","width: "+o+"px","height: "+t+"px","overflow: scroll","visibility: none","top: "+-o*3+"px","left: "+-t*3+"px","visibility: hidden","margin: 0","padding: 0"]),i.appendChild(E),document.body.insertBefore(i,document.body.firstChild);var z=o-i.clientWidth,T=t-i.clientHeight;return document.body.removeChild(i),{width:z,height:T}}function C(o,t,E){function i(H,f){f=f||function(I){o.head.appendChild(I)};var y=o.createElement("style");return y.innerHTML=H,y.id=t,f(y),y}if(!o.getElementById(t)){var z=E+"_animation",T=E+"_animation_active",w=`/* Created by the element-resize-detector library. */
`;w+="."+E+" > div::-webkit-scrollbar { "+d(["display: none"])+` }

`,w+="."+T+" { "+d(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+z,"animation-name: "+z])+` }
`,w+="@-webkit-keyframes "+z+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,w+="@keyframes "+z+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",i(w)}}function P(o){o.className+=" "+s+"_animation_active"}function m(o,t,E){if(o.addEventListener)o.addEventListener(t,E);else if(o.attachEvent)o.attachEvent("on"+t,E);else return n.error("[scroll] Don't know how to add event listeners.")}function S(o,t,E){if(o.removeEventListener)o.removeEventListener(t,E);else if(o.detachEvent)o.detachEvent("on"+t,E);else return n.error("[scroll] Don't know how to remove event listeners.")}function A(o){return e(o).container.childNodes[0].childNodes[0].childNodes[0]}function M(o){return e(o).container.childNodes[0].childNodes[0].childNodes[1]}function W(o,t){var E=e(o).listeners;if(!E.push)throw new Error("Cannot add listener to an element that is not detectable.");e(o).listeners.push(t)}function k(o,t,E){E||(E=t,t=o,o=null),o=o||{};function i(){if(o.debug){var a=Array.prototype.slice.call(arguments);if(a.unshift(u.get(t),"Scroll: "),n.log.apply)n.log.apply(null,a);else for(var v=0;v<a.length;v++)n.log(a[v])}}function z(a){function v(x){var B=x.getRootNode&&x.getRootNode().contains(x);return x===x.ownerDocument.body||x.ownerDocument.body.contains(x)||B}return!v(a)||window.getComputedStyle(a)===null}function T(a){var v=e(a).container.childNodes[0],x=window.getComputedStyle(v);return!x.width||x.width.indexOf("px")===-1}function w(){var a=window.getComputedStyle(t),v={};return v.position=a.position,v.width=t.offsetWidth,v.height=t.offsetHeight,v.top=a.top,v.right=a.right,v.bottom=a.bottom,v.left=a.left,v.widthCSS=a.width,v.heightCSS=a.height,v}function H(){var a=w();e(t).startSize={width:a.width,height:a.height},i("Element start size",e(t).startSize)}function f(){e(t).listeners=[]}function y(){if(i("storeStyle invoked."),!e(t)){i("Aborting because element has been uninstalled");return}var a=w();e(t).style=a}function I(a,v,x){e(a).lastWidth=v,e(a).lastHeight=x}function O(a){return A(a).childNodes[0]}function $(){return 2*g.width+1}function et(){return 2*g.height+1}function rt(a){return a+10+$()}function nt(a){return a+10+et()}function Lt(a){return a*2+$()}function Ht(a){return a*2+et()}function dt(a,v,x){var B=A(a),G=M(a),Q=rt(v),Y=nt(x),j=Lt(v),b=Ht(x);B.scrollLeft=Q,B.scrollTop=Y,G.scrollLeft=j,G.scrollTop=b}function ct(){var a=e(t).container;if(!a){a=document.createElement("div"),a.className=s,a.style.cssText=d(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),e(t).container=a,P(a),t.appendChild(a);var v=function(){e(t).onRendered&&e(t).onRendered()};m(a,"animationstart",v),e(t).onAnimationStart=v}return a}function At(){function a(){var L=e(t).style;if(L.position==="static"){t.style.setProperty("position","relative",o.important?"important":"");var F=function(X,J,It,at){function Nt(Pt){return Pt.replace(/[^-\d\.]/g,"")}var ot=It[at];ot!=="auto"&&Nt(ot)!=="0"&&(X.warn("An element that is positioned static has style."+at+"="+ot+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+at+" will be set to 0. Element: ",J),J.style[at]=0)};F(n,t,L,"top"),F(n,t,L,"right"),F(n,t,L,"bottom"),F(n,t,L,"left")}}function v(L,F,X,J){return L=L?L+"px":"0",F=F?F+"px":"0",X=X?X+"px":"0",J=J?J+"px":"0",["left: "+L,"top: "+F,"right: "+J,"bottom: "+X]}if(i("Injecting elements"),!e(t)){i("Aborting because element has been uninstalled");return}a();var x=e(t).container;x||(x=ct());var B=g.width,G=g.height,Q=d(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),Y=d(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(v(-(1+B),-(1+G),-G,-B))),j=d(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),b=d(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),N=d(["position: absolute","left: 0","top: 0"]),V=d(["position: absolute","width: 200%","height: 200%"]),_=document.createElement("div"),R=document.createElement("div"),K=document.createElement("div"),lt=document.createElement("div"),it=document.createElement("div"),ft=document.createElement("div");_.dir="ltr",_.style.cssText=Q,_.className=s,R.className=s,R.style.cssText=Y,K.style.cssText=j,lt.style.cssText=N,it.style.cssText=b,ft.style.cssText=V,K.appendChild(lt),it.appendChild(ft),R.appendChild(K),R.appendChild(it),_.appendChild(R),x.appendChild(_);function ht(){var L=e(t);L&&L.onExpand?L.onExpand():i("Aborting expand scroll handler: element has been uninstalled")}function vt(){var L=e(t);L&&L.onShrink?L.onShrink():i("Aborting shrink scroll handler: element has been uninstalled")}m(K,"scroll",ht),m(it,"scroll",vt),e(t).onExpandScroll=ht,e(t).onShrinkScroll=vt}function Tt(){function a(j,b,N){var V=O(j),_=rt(b),R=nt(N);V.style.setProperty("width",_+"px",o.important?"important":""),V.style.setProperty("height",R+"px",o.important?"important":"")}function v(j){var b=t.offsetWidth,N=t.offsetHeight,V=b!==e(t).lastWidth||N!==e(t).lastHeight;i("Storing current size",b,N),I(t,b,N),c.add(0,function(){if(V){if(!e(t)){i("Aborting because element has been uninstalled");return}if(!x()){i("Aborting because element container has not been initialized");return}if(o.debug){var R=t.offsetWidth,K=t.offsetHeight;(R!==b||K!==N)&&n.warn(u.get(t),"Scroll: Size changed before updating detector elements.")}a(t,b,N)}}),c.add(1,function(){if(!e(t)){i("Aborting because element has been uninstalled");return}if(!x()){i("Aborting because element container has not been initialized");return}dt(t,b,N)}),V&&j&&c.add(2,function(){if(!e(t)){i("Aborting because element has been uninstalled");return}if(!x()){i("Aborting because element container has not been initialized");return}j()})}function x(){return!!e(t).container}function B(){function j(){return e(t).lastNotifiedWidth===void 0}i("notifyListenersIfNeeded invoked");var b=e(t);if(j()&&b.lastWidth===b.startSize.width&&b.lastHeight===b.startSize.height)return i("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(b.lastWidth===b.lastNotifiedWidth&&b.lastHeight===b.lastNotifiedHeight)return i("Not notifying: Size already notified");i("Current size not notified, notifying..."),b.lastNotifiedWidth=b.lastWidth,b.lastNotifiedHeight=b.lastHeight,Xt(e(t).listeners,function(N){N(t)})}function G(){if(i("startanimation triggered."),T(t)){i("Ignoring since element is still unrendered...");return}i("Element rendered.");var j=A(t),b=M(t);(j.scrollLeft===0||j.scrollTop===0||b.scrollLeft===0||b.scrollTop===0)&&(i("Scrollbars out of sync. Updating detector elements..."),v(B))}function Q(){if(i("Scroll detected."),T(t)){i("Scroll event fired while unrendered. Ignoring...");return}v(B)}if(i("registerListenersAndPositionElements invoked."),!e(t)){i("Aborting because element has been uninstalled");return}e(t).onRendered=G,e(t).onExpand=Q,e(t).onShrink=Q;var Y=e(t).style;a(t,Y.width,Y.height)}function Ot(){if(i("finalizeDomMutation invoked."),!e(t)){i("Aborting because element has been uninstalled");return}var a=e(t).style;I(t,a.width,a.height),dt(t,a.width,a.height)}function jt(){E(t)}function ut(){i("Installing..."),f(),H(),c.add(0,y),c.add(1,At),c.add(2,Tt),c.add(3,Ot),c.add(4,jt)}i("Making detectable..."),z(t)?(i("Element is detached"),ct(),i("Waiting until element is attached..."),e(t).onRendered=function(){i("Element is now attached"),ut()}):ut()}function D(o){var t=e(o);t&&(t.onExpandScroll&&S(A(o),"scroll",t.onExpandScroll),t.onShrinkScroll&&S(M(o),"scroll",t.onShrinkScroll),t.onAnimationStart&&S(t.container,"animationstart",t.onAnimationStart),t.container&&o.removeChild(t.container))}return{makeDetectable:k,addListener:W,uninstall:D,initDocument:h}},tt=xt.forEach,te=Bt,ee=_t,re=Rt,ne=Ft,ie=qt,bt=Dt,ae=Vt,q=Yt,oe=Kt,se=Zt;function yt(r){return Array.isArray(r)||r.length!==void 0}function wt(r){if(Array.isArray(r))return r;var n=[];return tt(r,function(c){n.push(c)}),n}function St(r){return r&&r.nodeType===1}var de=function(r){r=r||{};var n;if(r.idHandler)n={get:function(k){return r.idHandler.get(k,!0)},set:r.idHandler.set};else{var c=re(),e=ne({idGenerator:c,stateHandler:q});n=e}var u=r.reporter;if(!u){var g=u===!1;u=ie(g)}var l=U(r,"batchProcessor",ae({reporter:u})),s={};s.callOnAdd=!!U(r,"callOnAdd",!0),s.debug=!!U(r,"debug",!1);var h=ee(n),d=te({stateHandler:q}),p,C=U(r,"strategy","object"),P=U(r,"important",!1),m={reporter:u,batchProcessor:l,stateHandler:q,idHandler:n,important:P};if(C==="scroll"&&(bt.isLegacyOpera()?(u.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),C="object"):bt.isIE(9)&&(u.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),C="object")),C==="scroll")p=se(m);else if(C==="object")p=oe(m);else throw new Error("Invalid strategy name: "+C);var S={};function A(k,D,o){function t(H){var f=h.get(H);tt(f,function(I){I(H)})}function E(H,f,y){h.add(f,y),H&&y(f)}if(o||(o=D,D=k,k={}),!D)throw new Error("At least one element required.");if(!o)throw new Error("Listener required.");if(St(D))D=[D];else if(yt(D))D=wt(D);else return u.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var i=0,z=U(k,"callOnAdd",s.callOnAdd),T=U(k,"onReady",function(){}),w=U(k,"debug",s.debug);tt(D,function(f){q.getState(f)||(q.initState(f),n.set(f));var y=n.get(f);if(w&&u.log("Attaching listener to element",y,f),!d.isDetectable(f)){if(w&&u.log(y,"Not detectable."),d.isBusy(f)){w&&u.log(y,"System busy making it detectable"),E(z,f,o),S[y]=S[y]||[],S[y].push(function(){i++,i===D.length&&T()});return}return w&&u.log(y,"Making detectable..."),d.markBusy(f,!0),p.makeDetectable({debug:w,important:P},f,function(O){if(w&&u.log(y,"onElementDetectable"),q.getState(O)){d.markAsDetectable(O),d.markBusy(O,!1),p.addListener(O,t),E(z,O,o);var $=q.getState(O);if($&&$.startSize){var et=O.offsetWidth,rt=O.offsetHeight;($.startSize.width!==et||$.startSize.height!==rt)&&t(O)}S[y]&&tt(S[y],function(nt){nt()})}else w&&u.log(y,"Element uninstalled before being detectable.");delete S[y],i++,i===D.length&&T()})}w&&u.log(y,"Already detecable, adding listener."),E(z,f,o),i++}),i===D.length&&T()}function M(k){if(!k)return u.error("At least one element is required.");if(St(k))k=[k];else if(yt(k))k=wt(k);else return u.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");tt(k,function(D){h.removeAllListeners(D),p.uninstall(D),q.cleanState(D)})}function W(k){p.initDocument&&p.initDocument(k)}return{listenTo:A,removeListener:h.removeListener,removeAllListeners:h.removeAllListeners,uninstall:M,initDocument:W}};function U(r,n,c){var e=r[n];return e==null&&c!==void 0?c:e}const ue=Mt(de);export{ue as e};
