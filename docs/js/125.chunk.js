"use strict";(self.webpackChunkasf_config_web=self.webpackChunkasf_config_web||[]).push([[125],{4125:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=function(){var e=this,t=e._self._c;return t("form",{staticClass:"form",attrs:{method:"post",action:"",id:"asf-form",onsubmit:"return false;"}},[e.versions.length>1?t("div",{staticClass:"row align-center"},[t("div",{staticClass:"col col-2"},[t("div",{staticClass:"form-input"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedVersion,expression:"selectedVersion"}],attrs:{id:"version"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedVersion=t.target.multiple?n:n[0]}}},e._l(e.versions,(function(n){return t("option",{domProps:{value:n}},[e._v(e._s(n))])})),0)])])]):e._e(),e._v(" "),e._l(e.schema,(function(n){return!n.advanced||e.displayAdvanced?t("fieldset",[t("legend",[e._v(e._s(e.$t(n.legend)))]),e._v(" "),e._l(n.fields,(function(n){return!n.advanced||e.displayAdvanced?t(n.type,{key:n.field,tag:"component",attrs:{schema:n},on:{update:e.updateModel}}):e._e()}))],2):e._e()})),e._v(" "),t("div",{staticClass:"form-item"},[t("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.downloadJSON.apply(null,arguments)}}},[e._v(e._s(e.$t("button.download")))]),e._v(" "),t("button",{staticClass:"button secondary",class:{outline:!e.displayAdvanced},on:{click:function(t){return t.preventDefault(),e.toggleAdvanced.apply(null,arguments)}}},[e._v(e._s(e.$t("button.advanced")))])])],2)};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}r._withStripped=!0;const a={name:"BotConfig",mixins:[n(6032).Z],data:function(){return{type:"bot"}},computed:{filename:function(){return"".concat(this.model.name,".json")}},methods:{processModelToJSON:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){var r,i,l,a;r=e,i=t,l=n[t],a=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==o(a)?a:String(a))in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t.GamesPlayedWhileIdle&&t.GamesPlayedWhileIdle.length&&(t.GamesPlayedWhileIdle=t.GamesPlayedWhileIdle.map((function(e){return parseInt(e,10)})).filter((function(e){return!isNaN(e)&&e>0}))),Object.entries(t).forEach((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],a=o[1];"string"==typeof a&&""===a&&delete t[l]})),t.name&&delete t.name,t}}},c=(0,n(1900).Z)(a,r,[],!1,null,null,null).exports}}]);