webpackJsonp([8],{1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},408:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),i=o(c),f=n(2),s=o(f),d=n(10),m=o(d),p=n(11),g=o(p),y=n(16),h=o(y),_=n(33),b=o(_),v=n(34),w=o(v),E=n(241),O=o(E),j=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.getLanguage(),n=O.default[t],o=this.props.__html||this.state.__html;return i.default.createElement("div",{className:"md2html community-page"},i.default.createElement(g.default,{currentKey:"community",type:"dark",logo:"/img/hlogo_white.svg",language:t,onLanguageChange:this.onLanguageChange}),i.default.createElement("section",{className:"content-section"},i.default.createElement(w.default,{dataSource:n.sidemenu}),i.default.createElement("div",{className:"doc-content markdown-body",ref:function(t){e.markdownContainer=t},dangerouslySetInnerHTML:{__html:o}})),i.default.createElement(h.default,{logo:"/img/ds_gray.svg",language:t}))}}]),t}((0,b.default)(m.default));document.getElementById("root")&&s.default.render(i.default.createElement(j,null),document.getElementById("root")),t.default=j}},[408]);