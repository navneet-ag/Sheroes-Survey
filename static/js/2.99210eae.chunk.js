(this.webpackJsonpsheroes=this.webpackJsonpsheroes||[]).push([[2],{121:function(e,n,t){"use strict";var o=t(0),r=o.createContext({});n.a=r},293:function(e,n,t){"use strict";function o(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,"a",(function(){return o}))},436:function(e,n,t){"use strict";var o=t(4),r=t(70),i=t(0),a=(t(3),t(69)),c=t(71),s=t(121),d=i.forwardRef((function(e,n){var t=e.children,c=e.classes,d=e.className,l=e.component,u=void 0===l?"ul":l,f=e.dense,p=void 0!==f&&f,v=e.disablePadding,h=void 0!==v&&v,b=e.subheader,m=Object(r.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),g=i.useMemo((function(){return{dense:p}}),[p]);return i.createElement(s.a.Provider,{value:g},i.createElement(u,Object(o.a)({className:Object(a.a)(c.root,d,p&&c.dense,!h&&c.padding,b&&c.subheader),ref:n},m),b,t))}));n.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},450:function(e,n,t){"use strict";var o=t(70),r=t(4),i=t(0),a=t(18),c=(t(3),t(456)),s=t(433),d=t(89),l=t(434),u=t(103),f=t(75),p=t(108),v=t(291);var h=t(286),b=t(164),m=t(293),g=t(110);function y(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function E(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function k(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat(Object(b.a)(o)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&y(e,r)}))}function O(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function R(e,n){var t,o=[],r=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=Object(d.a)(e);return n.body===e?Object(g.a)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=Object(m.a)();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(E(i)+a,"px"),t=Object(d.a)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(E(e)+a,"px")}))}var c=i.parentElement,s="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;o.push({value:s.style.overflow,key:"overflow",el:s}),s.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){r[n]?e.style.paddingRight=r[n]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var n=e.value,t=e.el,o=e.key;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return Object(h.a)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&y(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);k(n,e.mountNode,e.modalRef,o,!0);var r=O(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:o}),t)}},{key:"mount",value:function(e,n){var t=O(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=R(o,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=O(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&y(e.modalRef,!0),k(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&y(r.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var x=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,c=void 0!==r&&r,s=e.disableRestoreFocus,l=void 0!==s&&s,u=e.getDoc,p=e.isEnabled,v=e.open,h=i.useRef(),b=i.useRef(null),m=i.useRef(null),g=i.useRef(),y=i.useRef(null),E=i.useCallback((function(e){y.current=a.findDOMNode(e)}),[]),k=Object(f.a)(n.ref,E),O=i.useRef();return i.useEffect((function(){O.current=v}),[v]),!O.current&&v&&"undefined"!==typeof window&&(g.current=u().activeElement),i.useEffect((function(){if(v){var e=Object(d.a)(y.current);o||!y.current||y.current.contains(e.activeElement)||(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex",-1),y.current.focus());var n=function(){null!==y.current&&(e.hasFocus()&&!c&&p()&&!h.current?y.current&&!y.current.contains(e.activeElement)&&y.current.focus():h.current=!1)},t=function(n){!c&&p()&&9===n.keyCode&&e.activeElement===y.current&&(h.current=!0,n.shiftKey?m.current.focus():b.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var r=setInterval((function(){n()}),50);return function(){clearInterval(r),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),l||(g.current&&g.current.focus&&g.current.focus(),g.current=null)}}}),[o,c,l,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelEnd"}))},j={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},C=i.forwardRef((function(e,n){var t=e.invisible,a=void 0!==t&&t,c=e.open,s=Object(o.a)(e,["invisible","open"]);return c?i.createElement("div",Object(r.a)({"aria-hidden":!0,ref:n},s,{style:Object(r.a)({},j.root,a?j.invisible:{},s.style)})):null}));var T=new w,I=i.forwardRef((function(e,n){var t=Object(c.a)(),h=Object(s.a)({name:"MuiModal",props:Object(r.a)({},e),theme:t}),b=h.BackdropComponent,m=void 0===b?C:b,g=h.BackdropProps,E=h.children,k=h.closeAfterTransition,O=void 0!==k&&k,R=h.container,w=h.disableAutoFocus,j=void 0!==w&&w,I=h.disableBackdropClick,P=void 0!==I&&I,A=h.disableEnforceFocus,F=void 0!==A&&A,S=h.disableEscapeKeyDown,L=void 0!==S&&S,M=h.disablePortal,N=void 0!==M&&M,B=h.disableRestoreFocus,D=void 0!==B&&B,K=h.disableScrollLock,W=void 0!==K&&K,z=h.hideBackdrop,H=void 0!==z&&z,J=h.keepMounted,q=void 0!==J&&J,Y=h.manager,G=void 0===Y?T:Y,Q=h.onBackdropClick,U=h.onClose,V=h.onEscapeKeyDown,X=h.onRendered,Z=h.open,$=Object(o.a)(h,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),_=i.useState(!0),ee=_[0],ne=_[1],te=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ie=Object(f.a)(re,n),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(h),ce=function(){return Object(d.a)(oe.current)},se=function(){return te.current.modalRef=re.current,te.current.mountNode=oe.current,te.current},de=function(){G.mount(se(),{disableScrollLock:W}),re.current.scrollTop=0},le=Object(p.a)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(R)||ce().body;G.add(se(),e),re.current&&de()})),ue=i.useCallback((function(){return G.isTopModal(se())}),[G]),fe=Object(p.a)((function(e){oe.current=e,e&&(X&&X(),Z&&ue()?de():y(re.current,!0))})),pe=i.useCallback((function(){G.remove(se())}),[G]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){Z?le():ae&&O||pe()}),[Z,pe,ae,O,le]),!q&&!Z&&(!ae||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:v.a}),he={};return void 0===E.props.tabIndex&&(he.tabIndex=E.props.tabIndex||"-1"),ae&&(he.onEnter=Object(u.a)((function(){ne(!1)}),E.props.onEnter),he.onExited=Object(u.a)((function(){ne(!0),O&&pe()}),E.props.onExited)),i.createElement(l.a,{ref:fe,container:R,disablePortal:N},i.createElement("div",Object(r.a)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&ue()&&(V&&V(e),L||(e.stopPropagation(),U&&U(e,"escapeKeyDown")))},role:"presentation"},$,{style:Object(r.a)({},ve.root,!Z&&ee?ve.hidden:{},$.style)}),H?null:i.createElement(m,Object(r.a)({open:Z,onClick:function(e){e.target===e.currentTarget&&(Q&&Q(e),!P&&U&&U(e,"backdropClick"))}},g)),i.createElement(x,{disableEnforceFocus:F,disableAutoFocus:j,disableRestoreFocus:D,getDoc:ce,isEnabled:ue,open:Z},i.cloneElement(E,he))))}));n.a=I}}]);
//# sourceMappingURL=2.99210eae.chunk.js.map