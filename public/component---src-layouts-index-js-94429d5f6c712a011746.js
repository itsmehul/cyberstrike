webpackJsonp([0x67ef26645b2a,60335399758886],{77:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Cyberstrike"}}},layoutContext:{}}},128:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),l=n(132),u=r(l),c=n(77),s=r(c);t.default=function(e){return a.default.createElement(u.default,o({},e,s.default))},e.exports=t.default},218:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=l(e),p=l(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,l=n(220),u=n(219),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},219:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},220:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},227:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},291:function(e,t,n){(function(t){(function(){var n,r,o,i,a,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),l=1e9*t.uptime(),a=i-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(114))},294:function(e,t,n){(function(t){for(var r=n(291),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",l=o["request"+a],u=o["cancel"+a]||o["cancelRequest"+a],c=0;!l&&c<i.length;c++)l=o[i[c]+"Request"+a],u=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!l||!u){var s=0,f=0,p=[],d=1e3/60;l=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-s));s=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(t,function(){return this}())},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),p=n(3),d=r(p),T=n(123),h=r(T),E=n(294),m=r(E),y=n(297),A=r(y),S=function(){},b=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner.offsetHeight}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,r=n.getScrollerPhysicalHeight(),o=n.getScrollerHeight(),i=e+r>o;return t||i},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,m.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,m.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned"},function(){setTimeout(function(){n.setState({state:"unpinned"})},0)})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed",state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,A.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state),t=e.action;"pin"===t?n.pin():"unpin"===t?n.unpin():"unfix"===t&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,h.default)(this.props,e)||!(0,h.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var r=n.style,i=n.wrapperStyle,a=o(n,["style","wrapperStyle"]),l={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translateY("+this.state.translateY+")",MsTransform:"translateY("+this.state.translateY+")",transform:"translateY("+this.state.translateY+")"},c=this.state.className;"unfixed"!==this.state.state&&(l=u({},l,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),l=this.props.disableInlineStyles?r:u({},l,r);var s=u({},i,{height:this.state.height?this.state.height:null}),p=t?t+" headroom-wrapper":"headroom-wrapper";return f.default.createElement("div",{style:s,className:p},f.default.createElement("div",u({ref:this.setRef},a,{style:l,className:c}),this.props.children))}}]),t}(s.Component);b.propTypes={className:d.default.string,parent:d.default.func,children:d.default.any.isRequired,disableInlineStyles:d.default.bool,disable:d.default.bool,upTolerance:d.default.number,downTolerance:d.default.number,onPin:d.default.func,onUnpin:d.default.func,onUnfix:d.default.func,wrapperStyle:d.default.object,pinStart:d.default.number,style:d.default.object,calcHeightOnResize:d.default.bool},b.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:S,onUnpin:S,onUnfix:S,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=b},297:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=t>=e?"down":"up",i=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:o,distanceScrolled:i}:t<=n.pinStart&&"unfixed"!==r.state?{action:"unfix",scrollDirection:o,distanceScrolled:i}:t<=r.height&&"down"===o&&"unfixed"===r.state?{action:"none",scrollDirection:o,distanceScrolled:i}:"down"===o&&["pinned","unfixed"].indexOf(r.state)>=0&&t>r.height+n.pinStart&&i>n.downTolerance?{action:"unpin",scrollDirection:o,distanceScrolled:i}:"up"===o&&i>n.upTolerance&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:"up"===o&&t<=r.height&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:{action:"none",scrollDirection:o,distanceScrolled:i}}},298:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),p=n(3),d=r(p),T=n(317),h=r(T),E=n(218),m=r(E),y=n(299),A=n(116),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=a,t.titleAttributes=u({},i),t));case A.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},i)});case A.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},i)})}return u({},o,(n={},n[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,l=o(i,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,a),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=u({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},g=(0,h.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),v=S(g);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},116:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},299:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),u=n(79),c=r(u),s=n(116),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],u=l.toLowerCase();t.indexOf(u)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],u=(0,c.default)({},r[l],o[l]);r[l]=u}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:m(e,s.HELMET_PROPS.DEFER),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),S=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,O=function(e){_&&g(_),e.defer?_=b(function(){w(e,function(){_=null})}):(w(e),_=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,o),R(p,d);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,i),metaTags:C(s.TAG_NAMES.META,a),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,l),scriptTags:C(s.TAG_NAMES.SCRIPT,c),styleTags:C(s.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),u(e,h,E)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var u=a[l],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),o.indexOf(u)===-1&&o.push(u);var f=i.indexOf(u);f!==-1&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),i=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=H(n,o);return[l.default.createElement(s.TAG_NAMES.TITLE,i,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return H(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,i,r),meta:k(s.TAG_NAMES.META,a,r),noscript:k(s.TAG_NAMES.NOSCRIPT,l,r),script:k(s.TAG_NAMES.SCRIPT,u,r),style:k(s.TAG_NAMES.STYLE,c,r),title:k(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=x,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=v}).call(t,function(){return this}())},317:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function p(){T=e(d.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.createElement(l,this.props)},t}(u.Component);return h.displayName="SideEffect("+r(l)+")",h.canUseDOM=s.canUseDOM,h}}var u=n(1),c=r(u),s=r(n(227)),f=r(n(123));e.exports=l},123:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!l(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),i=r(o),a=n(43),l=r(a),u=n(228),c=r(u),s=n(296),f=r(s),p=function(e){function t(){return"white"}function n(){return r?"transparent":"#000000c4"}e.siteTitle;if("undefined"!=typeof window){var r=location.pathname===(0,a.withPrefix)("/");location.pathname===(0,a.withPrefix)("/contacts"),location.pathname===(0,a.withPrefix)("/aboutus")}var o=[{page:"HOME",path:"/"},{page:"EVENTS",path:"/events"},{page:"CONTACT US",path:"/contacts"}];return i.default.createElement(f.default,{style:{background:n(),marginBottom:"1.45rem"}},i.default.createElement("div",{style:{paddingLeft:"50px",textAlign:"center",margin:"0 auto",maxWidth:1500,padding:"1.45rem 1.0875rem"}},i.default.createElement("h1",{style:{margin:0,textAlign:"center"}},o.map(function(e){return i.default.createElement(l.default,{className:c.default.fontfam,to:e.path,style:{color:t(),textDecoration:"none",marginRight:30,display:"inline-block"}},e.page)}))))};t.default=p,e.exports=t.default},228:function(e,t){e.exports={trans:"src-components----header-module---trans---14XSl",fontfam:"src-components----header-module---fontfam---1q-ym"}},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(1),i=r(o),a=n(3),l=r(a),u=n(298),c=r(u),s=n(131),f=r(s),p=n(43),d=n(229),T=r(d),h=function(e){var t=e.children,n=e.data;if("undefined"!=typeof window){var r=location.pathname===(0,p.withPrefix)("/"),o=location.pathname===(0,p.withPrefix)("/events");location.pathname===(0,p.withPrefix)("/aboutus"),location.pathname===(0,p.withPrefix)("/contacts")}return i.default.createElement("div",null,o&&i.default.createElement("img",{poster:"https://image.ibb.co/hQk0QK/fondo_web_02.jpg",src:"https://image.ibb.co/hQk0QK/fondo_web_02.jpg",className:T.default.wide}),r&&i.default.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:T.default.myVideo},i.default.createElement("source",{src:"static/homevidtest.mp4",type:"video/mp4"})),!r&&i.default.createElement("img",{src:"https://image.ibb.co/hQk0QK/fondo_web_02.jpg",className:T.default.wide}),i.default.createElement(c.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.default.createElement(f.default,{siteTitle:n.site.siteMetadata.title}),i.default.createElement("div",{style:{margin:"0 auto",marginTop:-5,maxWidth:1366,padding:"20px",paddingTop:30}},t()))};h.propTypes={children:l.default.func},t.default=h;t.query="** extracted graphql fragment **"},229:function(e,t){e.exports={wide:"src-layouts----index-module---wide---2xEuo",myVideo:"src-layouts----index-module---myVideo---o9zPe"}}});
//# sourceMappingURL=component---src-layouts-index-js-94429d5f6c712a011746.js.map