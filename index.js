!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.IlliterateEditor=e():t.IlliterateEditor=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.default;i(this,t),this.$el=e,this.dict=n,this.flag=!0,this.onCompositionstart=this.onCompositionstart.bind(this),this.onCompositionend=this.onCompositionend.bind(this),this.onInput=this.onInput.bind(this),this.replace=this.replace.bind(this),this.dispose=this.dispose.bind(this),this.init=this.init.bind(this),this.init()}return o(t,[{key:"onCompositionstart",value:function(){this.flag=!1}},{key:"onCompositionend",value:function(){this.flag=!0,this.replace()}},{key:"onInput",value:function(){this.flag&&this.replace()}},{key:"replace",value:function(){var t=this.$el,e=this.dict,n=t.value;for(var i in e){var o=e[i],r=i;n=n.replace(new RegExp(r,"g"),o)}t.value=n}},{key:"init",value:function(){var t=this.$el,e=this.onInput,n=this.onCompositionstart,i=this.onCompositionend;t.addEventListener("compositionstart",n),t.addEventListener("compositionend",i),t.addEventListener("input",e)}},{key:"dispose",value:function(){var t=this.$el,e=this.onInput,n=this.onCompositionstart,i=this.onCompositionend;t.removeEventListener("compositionstart",n),t.removeEventListener("compositionend",i),t.removeEventListener("input",e)}}]),t}();e.default=u},function(t,e){t.exports={"讧":"杠","衅":"畔","荼":"茶","狙":"阻","墅":"野","徐庶":"徐蔗","满庞":"满宠","燮":"变","垕":"厘","谡":"俊","荀":"苟","彧":"或","祎":"伟","卞":"下","浒":"许","铬":"络","氙":"疝","檗":"劈","菅":"管","饬":"伤","尴尬":"监介","鸩":"鸠","枢":"抠","陟":"涉","憧":"撞","跬":"蛙","亟":"丞","奢":"屠"}}])});