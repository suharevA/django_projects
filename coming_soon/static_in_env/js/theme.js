function t(){e.enableLoader?($("body").append("<div class='loading'></div>"),$("body").children(".loading").delay(1e3).fadeOut(1e3,function(){$(".wrapper").animate({opacity:1},1e3),$("body").children(".loading").remove()})):$(".wrapper").css("opacity",1)}window.Modernizr=function(t,e,n){function r(t){p.cssText=t}function o(t,e){return typeof t===e}function i(t,e){return!!~(""+t).indexOf(e)}function l(t,e){for(var r in t){var o=t[r];if(!i(o,"-")&&p[o]!==n)return"pfx"!=e||o}return!1}function a(t,e,r){var i=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+g.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?l(a,e):(a=(t+" "+b.join(i+" ")+i).split(" "),function(t,e,r){for(var i in t){var l=e[t[i]];if(l!==n)return!1===r?t[i]:o(l,"function")?l.bind(r||e):l}return!1}(a,e,r))}var c,s,u={},f=e.documentElement,d="modernizr",h=e.createElement(d),p=h.style,m=":)",v=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",g=y.split(" "),b=y.toLowerCase().split(" "),w={},S=[],x=S.slice,k=function(t,n,r,o){var i,l,a,c,s=e.createElement("div"),u=e.body,h=u||e.createElement("body");if(parseInt(r,10))for(;r--;)a=e.createElement("div"),a.id=o?o[r]:d+(r+1),s.appendChild(a);return i=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),s.id=d,(u?s:h).innerHTML+=i,h.appendChild(s),u||(h.style.background="",h.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=n(s,t),u?s.parentNode.removeChild(s):(h.parentNode.removeChild(h),f.style.overflow=c),!!l},E={}.hasOwnProperty;s=o(E,"undefined")||o(E.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return E.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=e.prototype;var i=new o,l=e.apply(i,n.concat(x.call(arguments)));return Object(l)===l?l:i}return e.apply(t,n.concat(x.call(arguments)))};return r}),w.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(p.backgroundColor,"rgba")},w.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(p.backgroundColor,"rgba")||i(p.backgroundColor,"hsla")},w.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(p.background)},w.textshadow=function(){return""===e.createElement("div").style.textShadow},w.opacity=function(){return function(t,e){r(v.join(t+";")+(e||""))}("opacity:.55"),/^0.55$/.test(p.opacity)},w.cssanimations=function(){return a("animationName")},w.csscolumns=function(){return a("columnCount")},w.cssgradients=function(){var t="background-image:";return r((t+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+t)+v.join("linear-gradient(left top,#9f9, white);"+t)).slice(0,-t.length)),i(p.backgroundImage,"gradient")},w.cssreflections=function(){return a("boxReflect")},w.csstransforms=function(){return!!a("transform")},w.csstransforms3d=function(){var t=!!a("perspective");return t&&"webkitPerspective"in f.style&&k("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,n){t=9===e.offsetLeft&&3===e.offsetHeight}),t},w.csstransitions=function(){return a("transition")},w.generatedcontent=function(){var t;return k(["#",d,"{font:0/0 a}#",d,':after{content:"',m,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t};for(var _ in w)s(w,_)&&(c=_.toLowerCase(),u[c]=w[_](),S.push((u[c]?"":"no-")+c));return u.addTest=function(t,e){if("object"==typeof t)for(var r in t)s(t,r)&&u.addTest(r,t[r]);else{if(t=t.toLowerCase(),u[t]!==n)return u;e="function"==typeof e?e():e,f.className+=" "+(e?"":"no-")+t,u[t]=e}return u},r(""),h=null,function(t,e){function n(){var t=p.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=h[t[f]];return e||(e={},d++,t[f]=d,h[d]=e),e}function o(t,n,o){if(n||(n=e),a)return n.createElement(t);o||(o=r(n));var i;return!(i=o.cache[t]?o.cache[t].cloneNode():u.test(t)?(o.cache[t]=o.createElem(t)).cloneNode():o.createElem(t)).canHaveChildren||s.test(t)||i.tagUrn?i:o.frag.appendChild(i)}function i(t){t||(t=e);var i=r(t);return p.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!function(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),a||function(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return p.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(p,e.frag)}(t,i),t}var l,a,c=t.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",d=0,h={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,a=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){l=!0,a=!0}}();var p={elements:c.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==c.shivCSS,supportsUnknownElements:a,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(t,o){if(t||(t=e),a)return t.createDocumentFragment();for(var i=(o=o||r(t)).frag.cloneNode(),l=0,c=n(),s=c.length;s>l;l++)i.createElement(c[l]);return i}};t.html5=p,i(e)}(this,e),u._version="2.8.3",u._prefixes=v,u._domPrefixes=b,u._cssomPrefixes=g,u.testProp=function(t){return l([t])},u.testAllProps=a,u.testStyles=k,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+S.join(" "),u}(0,this.document),function(t,e,n){function r(t){return"[object Function]"==m.call(t)}function o(t){return"string"==typeof t}function i(){}function l(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();y=1,t?t.t?h(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):y=0}function c(t,n,r,i,c){return y=0,n=n||"j",o(t)?function(t,n,r,o,i,c,s){function u(e){if(!m&&l(d.readyState)&&(S.r=m=1,!y&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&h(function(){w.removeChild(d)},50);for(var r in _[n])_[n].hasOwnProperty(r)&&_[n][r].onload()}}s=s||f.errorTimeout;var d=e.createElement(t),m=0,g=0,S={t:r,s:n,e:i,a:c,x:s};1===_[n]&&(g=1,_[n]=[]),"object"==t?d.data=n:(d.src=n,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,S),"img"!=t&&(g||2===_[n]?(w.insertBefore(d,b?null:p),h(u,s)):_[n].push(d))}("c"==n?x:S,t,n,this.i++,r,i,c):(v.splice(this.i++,0,t),1==v.length&&a()),this}function s(){var t=f;return t.loader={load:c,i:0},t}var u,f,d=e.documentElement,h=t.setTimeout,p=e.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,g="MozAppearance"in d.style,b=g&&!!e.createRange().compareNode,w=b?d:p.parentNode,S=(d=t.opera&&"[object Opera]"==m.call(t.opera),d=!!e.attachEvent&&!d,g?"object":d?"script":"img"),x=d?"script":S,k=Array.isArray||function(t){return"[object Array]"==m.call(t)},E=[],_={},j={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};(f=function(t){function e(t,e,o,i,l){var a=function(t){t=t.split("!");var e,n,r,o=E.length,i=t.pop(),l=t.length;for(i={url:i,origUrl:i,prefixes:t},n=0;l>n;n++)r=t[n].split("="),(e=j[r.shift()])&&(i=e(i,r));for(n=0;o>n;n++)i=E[n](i);return i}(t),c=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(e&&(e=r(e)?e:e[t]||e[i]||e[t.split("/").pop().split("?")[0]]),a.instead?a.instead(t,e,o,i,l):(_[a.url]?a.noexec=!0:_[a.url]=1,o.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(e)||r(c))&&o.load(function(){s(),e&&e(a.origUrl,l,i),c&&c(a.origUrl,l,i),_[a.url]=2})))}function l(t,n){function l(t,i){if(t){if(o(t))i||(f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}),e(t,f,n,0,s);else if(Object(t)===t)for(c in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!i&&!--a&&(r(f)?f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}:f[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(d[c])),e(t[c],f,n,c,s))}else!i&&h()}var a,c,s=!!t.test,u=t.load||t.both,f=t.callback||i,d=f,h=t.complete||i;l(s?t.yep:t.nope,!!u),u&&l(u)}var a,c,u=this.yepnope.loader;if(o(t))e(t,0,u,0);else if(k(t))for(a=0;a<t.length;a++)c=t[a],o(c)?e(c,0,u,0):k(c)?f(c):Object(c)===c&&l(c,u);else Object(t)===t&&l(t,u)}).addPrefix=function(t,e){j[t]=e},f.addFilter=function(t){E.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",u=function(){e.removeEventListener("DOMContentLoaded",u,0),e.readyState="complete"},0)),t.yepnope=s(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,r,o,c,s){var u,d,m=e.createElement("script");o=o||f.errorTimeout;m.src=t;for(d in r)m.setAttribute(d,r[d]);n=s?a:n||i,m.onreadystatechange=m.onload=function(){!u&&l(m.readyState)&&(u=1,n(),m.onload=m.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),c?m.onload():p.parentNode.insertBefore(m,p)},t.yepnope.injectCss=function(t,n,r,o,l,c){var s;o=e.createElement("link"),n=c?a:n||i;o.href=t,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);l||(p.parentNode.insertBefore(o,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,r){var o,i,l,a,c,s,u,f,d,h,p,m,v,y,g,b;return o=n(r),f=t.call(r,"ontouchstart")>=0,a={horizontal:{},vertical:{}},c=1,u={},s="waypoints-context-id",p="resize.waypoints",m="scroll.waypoints",v=1,y="waypoints-waypoint-ids",g="waypoint",b="waypoints",i=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+c++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[s]=this.id,u[this.id]=this,t.bind(m,function(){var t;if(!e.didScroll&&!f)return e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},r.setTimeout(t,n[b].settings.scrollThrottle)}),t.bind(p,function(){var t;if(!e.didResize)return e.didResize=!0,t=function(){return n[b]("refresh"),e.didResize=!1},r.setTimeout(t,n[b].settings.resizeThrottle)})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!f||t.vertical.oldScroll&&t.vertical.newScroll||n[b]("refresh"),n.each(t,function(t,r){var o,i,l;return l=[],i=r.newScroll>r.oldScroll,o=i?r.forward:r.backward,n.each(e.waypoints[t],function(t,e){var n,o;return r.oldScroll<(n=e.offset)&&n<=r.newScroll?l.push(e):r.newScroll<(o=e.offset)&&o<=r.oldScroll?l.push(e):void 0}),l.sort(function(t,e){return t.offset-e.offset}),i||l.reverse(),n.each(l,function(t,e){if(e.options.continuous||t===l.length-1)return e.trigger([o])})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,r,o=this;return r=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[b]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(o.waypoints[t],function(t,r){var o,i,l,a,c;if(o=r.options.offset,l=r.offset,i=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp],n.isFunction(o)?o=o.apply(r.element):"string"==typeof o&&(o=parseFloat(o),r.options.offset.indexOf("%")>-1&&(o=Math.ceil(e.contextDimension*o/100))),r.offset=i-e.contextOffset+e.contextScroll-o,(!r.options.onlyOnScroll||null==l)&&r.enabled)return null!==l&&l<(a=e.oldScroll)&&a<=r.offset?r.trigger([e.backward]):null!==l&&l>(c=e.oldScroll)&&c>=r.offset?r.trigger([e.forward]):null===l&&e.oldScroll>=r.offset?r.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([p,m].join(" ")),delete u[this.id]},t}(),l=function(){function t(t,e,r){var o,i;"bottom-in-view"===(r=n.extend({},n.fn[g].defaults,r)).offset&&(r.offset=function(){var t;return t=n[b]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=r.horizontal?"horizontal":"vertical",this.callback=r.handler,this.context=e,this.enabled=r.enabled,this.id="waypoints"+v++,this.offset=null,this.options=r,e.waypoints[this.axis][this.id]=this,a[this.axis][this.id]=this,(o=null!=(i=this.element[y])?i:[]).push(this.id),this.element[y]=o}return t.prototype.trigger=function(t){if(this.enabled)return null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete a[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,r;return(r=t[y])?(e=n.extend({},a.horizontal,a.vertical),n.map(r,function(t){return e[t]})):[]},t}(),h={init:function(t,e){return null==e&&(e={}),null==e.handler&&(e.handler=t),this.each(function(){var t,r,o,a;return t=n(this),o=null!=(a=e.context)?a:n.fn[g].defaults.context,n.isWindow(o)||(o=t.closest(o)),o=n(o),(r=u[o[0][s]])||(r=new i(o)),new l(t,r,e)}),n[b]("refresh"),this},disable:function(){return h._invoke.call(this,"disable")},enable:function(){return h._invoke.call(this,"enable")},destroy:function(){return h._invoke.call(this,"destroy")},prev:function(t,e){return h._traverse.call(this,t,e,function(t,e,n){if(e>0)return t.push(n[e-1])})},next:function(t,e){return h._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1)return t.push(n[e+1])})},_traverse:function(t,e,o){var i,l;return null==t&&(t="vertical"),null==e&&(e=r),l=d.aggregate(e),i=[],this.each(function(){var e;return e=n.inArray(this,l[t]),o(i,e,l[t])}),this.pushStack(i)},_invoke:function(t){return this.each(function(){var e;return e=l.getWaypointsByElement(this),n.each(e,function(e,n){return n[t](),!0})}),this}},n.fn[g]=function(){var t,r;return r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[r]?h[r].apply(this,t):n.isFunction(r)?h.init.apply(this,arguments):n.isPlainObject(r)?h.init.apply(this,[null,r]):r?n.error("The "+r+" method does not exist in jQuery Waypoints."):n.error("jQuery Waypoints needs a callback function or handler option.")},n.fn[g].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},d={refresh:function(){return n.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=r.innerHeight)?t:o.height()},aggregate:function(t){var e,r,o;return e=a,t&&(e=null!=(o=u[n(t)[0][s]])?o.waypoints:void 0),e?(r={horizontal:[],vertical:[]},n.each(r,function(t,o){return n.each(e[t],function(t,e){return o.push(e)}),o.sort(function(t,e){return t.offset-e.offset}),r[t]=n.map(o,function(t){return t.element}),r[t]=n.unique(r[t])}),r):[]},above:function(t){return null==t&&(t=r),d._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=r),d._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=r),d._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=r),d._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return d._invoke("enable")},disable:function(){return d._invoke("disable")},destroy:function(){return d._invoke("destroy")},extendFn:function(t,e){return h[t]=e},_invoke:function(t){var e;return e=n.extend({},a.vertical,a.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,r){var o,i;return(o=u[n(t)[0][s]])?(i=[],n.each(o.waypoints[e],function(t,e){if(r(o,e))return i.push(e)}),i.sort(function(t,e){return t.offset-e.offset}),n.map(i,function(t){return t.element})):[]}},n[b]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[n]?d[n].apply(null,t):d.aggregate.call(null,n)},n[b].settings={resizeThrottle:100,scrollThrottle:30},o.load(function(){return n[b]("refresh")})})}.call(this),function(){var t=document.querySelector(".burger"),e=document.querySelector(".menu"),n=document.querySelector(".menu__list"),r=document.querySelector(".menu__brand"),o=document.querySelectorAll(".menu__item"),i=!1,l=function(){if(i){e.classList.remove("menu--active"),n.classList.remove("menu__list--active"),r.classList.remove("menu__brand--active"),t.classList.remove("burger--close");for(var l=0,a=o.length;a>l;l++)o[l].classList.remove("menu__item--active");i=!1}else{e.classList.add("menu--active"),n.classList.add("menu__list--active"),r.classList.add("menu__brand--active"),t.classList.add("burger--close");for(l=0,a=o.length;a>l;l++)o[l].classList.add("menu__item--active");i=!0}};return{init:function(){t.addEventListener("click",l,!1)}}}().init(),$(function(){function t(t,e){t.each(function(){var t=$(this),n=t.attr("data-os-animation"),r=t.attr("data-os-animation-delay");t.css({"-webkit-animation-delay":r,"-moz-animation-delay":r,"animation-delay":r});(e||t).waypoint(function(){t.addClass("animated").addClass(n)},{triggerOnce:!0,offset:"90%"})})}t($(".os-animation")),t($(".staggered-animation"),$(".staggered-animation-container"))});var e={enableLoader:!0};$(window).load(function(){t()});