webpackJsonp([35783957827783],{617:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=o(1),u=r(s),c=o(44),f=o(2),p=r(f),l=o(40),d=o(71),v=o(238),g=r(v),h=function(e){function t(){var o,r,a;n(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return o=r=i(this,e.call.apply(e,[this].concat(u))),r.featureNavigator=d.featureNavigator.bind(r),a=o,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){"is-featured"!==this.props.navigatorPosition&&this.props.setNavigatorPosition("is-featured")},t.prototype.render=function(){var e=this.props.data,t=(((e||{}).site||{}).siteMetadata||{}).facebook;return u.default.createElement("div",null,u.default.createElement(g.default,{facebook:t}))},t}(u.default.Component);h.propTypes={data:p.default.object.isRequired,navigatorPosition:p.default.string.isRequired,setNavigatorPosition:p.default.func.isRequired,isWideScreen:p.default.bool.isRequired};var y=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},b={setNavigatorPosition:l.setNavigatorPosition,setNavigatorShape:l.setNavigatorShape};t.default=(0,c.connect)(y,b)(h);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-aa9570313651ef926b5a.js.map