!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,a,i,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=a;return r=a=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(j,t),s?p(e):f}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function j(){var e=b();if(T(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,i-(e-c)):n}(e))}function w(e){return u=void 0,m&&r?p(e):(r=a=void 0,f)}function h(){var e=b(),n=T(e);if(r=arguments,a=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(j,t),p(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,i=(d="maxWait"in n)?v(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=a=u=void 0},h.flush=function(){return void 0===u?f:w(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:r,maxWait:t,trailing:a})};var O=document.querySelector(".feedback-form");O.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("feedback-form-state")),n=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value;if(""===n||""===r)return alert("Enter data in all rows");console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),O.addEventListener("input",e(t)((function(e){var t=e.target,n=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};n[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),function(){var e=localStorage.getItem("feedback-form-state");if(console.log(e),e){var t=JSON.parse(e);t.email&&(O.elements.email.value=t.email),t.message&&(O.elements.message.value=t.message)}}()}();
//# sourceMappingURL=03-feedback.f4bfdd79.js.map