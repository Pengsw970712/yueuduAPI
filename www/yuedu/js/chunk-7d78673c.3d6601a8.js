(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d78673c"],{"18c5":function(t,e,n){"use strict";var r=n("31d0");n("2d2c")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},"1ff3":function(t,e,n){"use strict";var r=n("caa4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"29d1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container article-main"},[n("ydArticle",{attrs:{article:t.article}}),n("div",{staticClass:"other-article"},[n("ydOther20",{attrs:{articles:t.formatOther20}}),n("ydOther5",{attrs:{articles:t.other5,typeid:t.typeid}})],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.article?n("div",{staticClass:"article"},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-base"},[n("div",{staticClass:"item-name"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"item-meta"},[n("span",[t._v(t._s(t.article.author))]),n("span",[t._v(t._s(t.article.podcast))]),n("span",[t._v(t._s(t.article.duration))]),n("span",[t._v("播放"+t._s(t.article.play_time)+"次")])]),n("div",{staticClass:"item-pic"},[n("img",{attrs:{src:t.article.img_url}})]),n("audio",{attrs:{controls:"",src:t.article.mp3_url}})]),n("div",{staticClass:"item-intro",domProps:{innerHTML:t._s(t.formatContent)}}),n("div",{staticClass:"item-label"},[n("div",{staticClass:"item-tags"},[n("strong",[t._v("标签：")]),n("span",[t._v(t._s(t.article.labels.split(",").join("  ")))])])])]),t.article?n("ydComment"):t._e()],1):t._e()},c=[],s=(n("f91a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ydCommentInput",{on:{"send:comment":t.getComment}}),n("ydCommentList",{attrs:{comments:t.comments}})],1)}),o=[],l=(n("5c07"),n("53da"),n("2556"),n("d0f8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.content,expression:"comment.content"}],domProps:{value:t.comment.content},on:{input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value)}}}),n("button",{on:{click:t.send}},[t._v("评论")])])}),u=[],d={data:function(){return{comment:{article_id:0,content:""}}},methods:{send:function(){var t=this;this.axios.post("/comment",this.comment).then(function(e){t.$emit("send:comment",e.data.res)})}},created:function(){this.comment.article_id=this.$route.params.id}},f=d,p=(n("6f89"),n("8c9c")),m=Object(p["a"])(f,l,u,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[n("div",{staticClass:"comment-title"}),t.comments.length?n("div",{staticClass:"comments"},t._l(t.comments,function(e){return n("div",{key:e.id,staticClass:"comment-item"},[t._m(0,!0),n("div",{staticClass:"comment-body"},[n("div",{staticClass:"comment-info"},[n("h3",{staticClass:"name"},[t._v(t._s(e.nikiname))]),n("time",[t._v(t._s(e.reply_time))])]),n("p",{staticClass:"comment-content"},[t._v(t._s(e.content))])])])}),0):n("div",{staticClass:"comments"},[n("div",{staticClass:"comment-item no-comment"},[t._v("\n      暂无评论\n    ")])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-avatar"},[n("img",{attrs:{src:"http://www.yuedu.fm/static/file/member/defaultuser",alt:"",width:"40",height:"40"}})])}],g={props:{comments:Array}},x=g,b=(n("69a6"),Object(p["a"])(x,h,_,!1,null,null,null)),y=b.exports,C={components:{ydCommentInput:v,ydCommentList:y},data:function(){return{comments:[]}},methods:{getComment:function(t){this.comments.push(t)}},created:function(){var t=this,e=this.$route.params.id;this.axios.get("/comments/".concat(e,"/page/1")).then(function(e){e.data.res&&(t.comments=e.data.res)})}},E=C,w=Object(p["a"])(E,s,o,!1,null,null,null),I=w.exports,O={props:{article:Object},components:{ydComment:I},computed:{formatContent:function(){var t=/\n/g;return this.article.content.replace(t,"<br>")}}},A=O,$=(n("d197"),Object(p["a"])(A,i,c,!1,null,null,null)),N=$.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-header"},[n("span",{staticClass:"title"},[t._v("其他相关节目")]),n("div",{staticClass:"icon"},[n("span",{staticClass:"iconfont icon-prev",class:{disabled:0===t.index},on:{click:t.prev}}),n("span",{staticClass:"iconfont icon-next",class:{disabled:4===t.index},on:{click:t.next}})])]),n("div",{staticStyle:{overflow:"hidden"}},[n("ul",{style:{transform:"translate3d(-"+300*t.index+"px, 0, 0)"}},t._l(t.articles,function(e,r){return n("li",{key:r},t._l(e,function(e){return n("div",{key:e.id,staticClass:"slide"},[n("img",{attrs:{src:e.img_url,alt:"",width:"135",height:"84"}}),n("router-link",{attrs:{to:{name:"article",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)}),0)}),0)])])},S=[],j={props:{articles:Array},data:function(){return{index:0}},methods:{next:function(){this.index<4&&this.index++},prev:function(){this.index>0&&this.index--}}},R=j,T=(n("ee50"),Object(p["a"])(R,k,S,!1,null,"41120d3f",null)),F=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"other5"},[n("div",{staticClass:"banner-header"},[n("span",{staticClass:"title"},[t._v("悦读FM频道其他节目")]),n("div",[n("router-link",{attrs:{to:{name:"channel",params:{id:t.typeid}}}},[t._v("查看全部")])],1)]),n("ul",t._l(t.articles,function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"article",params:{id:e.id}}}},[t._v(t._s(e.title))]),n("div",[n("span",[t._v("文:"+t._s(e.author))]),n("span",[t._v("主播:"+t._s(e.podcast))])])],1)}),0)])},P=[],L=(n("b06f"),{props:{articles:Array,typeid:[Number,String]}}),V=L,G=(n("30db"),Object(p["a"])(V,M,P,!1,null,"2959bd1c",null)),J=G.exports,U={components:{ydArticle:N,ydOther20:F,ydOther5:J},data:function(){return{article:null,other20:[],other5:[],typeid:1}},computed:{formatOther20:function(){for(var t=[],e=0;e<20;e+=4)t.push(this.other20.slice(e,e+4));return t}},created:function(){var t=this,e=this.$route.params.id;this.axios.get("/article/".concat(e)).then(function(e){return t.$route.meta.title=e.data.res.title,t.article=e.data.res,t.typeid=e.data.res.type_id,t.axios.get("/articles/".concat(e.data.res.type_id,"/rand"))}).then(function(e){t.other5=e.data.res}),this.axios.get("/articles/rand").then(function(e){t.other20=e.data.res})}},X=U,Y=(n("d77f"),Object(p["a"])(X,r,a,!1,null,null,null));e["default"]=Y.exports},"2ce6":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"30db":function(t,e,n){"use strict";var r=n("ca73"),a=n.n(r);a.a},"31d0":function(t,e,n){"use strict";var r=n("7fe4"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(c=function(t){var e,n,c,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),o&&(e=d[s]),c=a.call(d,t),o&&c&&(d[s]=d.global?c.index+c[0].length:e),l&&c&&c.length>1&&i.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},"36d5":function(t,e,n){},"3b80":function(t,e,n){var r=n("2d2c"),a=n("2b11"),i=n("201d"),c=n("2ce6"),s="["+c+"]",o="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(t,e,n){var a={},s=i(function(){return!!c[t]()||o[t]()!=o}),l=a[t]=s?e(f):c[t];n&&(a[n]=l),r(r.P+r.F*s,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},"5c58":function(t,e,n){},"62af":function(t,e,n){var r=n("7cbd"),a=n("2ba0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"69a6":function(t,e,n){"use strict";var r=n("5c58"),a=n.n(r);a.a},"6f89":function(t,e,n){"use strict";var r=n("bd7a"),a=n.n(r);a.a},"78de":function(t,e,n){var r=n("48ed"),a=n("b915"),i=n("54a3"),c=n("1f51"),s=n("3301"),o=n("8003"),l=Object.getOwnPropertyDescriptor;e.f=n("3a0f")?l:function(t,e){if(t=i(t),e=c(e,!0),o)try{return l(t,e)}catch(n){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},"7fe4":function(t,e,n){"use strict";var r=n("4d65");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b06f:function(t,e,n){"use strict";var r=n("4839"),a=n("3301"),i=n("9b6d"),c=n("d62f"),s=n("1f51"),o=n("201d"),l=n("62af").f,u=n("78de").f,d=n("694f").f,f=n("3b80").trim,p="Number",m=r[p],v=m,h=m.prototype,_=i(n("04ac")(h))==p,g="trim"in String.prototype,x=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var c,o=e.slice(2),l=0,u=o.length;l<u;l++)if(c=o.charCodeAt(l),c<48||c>a)return NaN;return parseInt(o,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(_?o(function(){h.valueOf.call(n)}):i(n)!=p)?c(new v(x(e)),n,m):x(e)};for(var b,y=n("3a0f")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)a(v,b=y[C])&&!a(m,b)&&d(m,b,u(v,b));m.prototype=h,h.constructor=m,n("7f00")(r,p,m)}},b21e:function(t,e,n){"use strict";var r=n("56f8"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},bd7a:function(t,e,n){},c5aa:function(t,e,n){"use strict";n("18c5");var r=n("7f00"),a=n("c84b"),i=n("201d"),c=n("2b11"),s=n("f3ae"),o=n("31d0"),l=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),p=!i(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),m=p?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!p||!m||"replace"===t&&!u||"split"===t&&!d){var v=/./[f],h=n(c,f,""[t],function(t,e,n,r,a){return e.exec===o?p&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),_=h[0],g=h[1];r(String.prototype,t,_),a(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},c6db:function(t,e,n){},ca73:function(t,e,n){},caa4:function(t,e,n){var r=n("ae63"),a=n("2b11");t.exports=function(t){return function(e,n){var i,c,s=String(a(e)),o=r(n),l=s.length;return o<0||o>=l?t?"":void 0:(i=s.charCodeAt(o),i<55296||i>56319||o+1===l||(c=s.charCodeAt(o+1))<56320||c>57343?t?s.charAt(o):i:t?s.slice(o,o+2):c-56320+(i-55296<<10)+65536)}}},d197:function(t,e,n){"use strict";var r=n("36d5"),a=n.n(r);a.a},d45a:function(t,e,n){},d62f:function(t,e,n){var r=n("b429"),a=n("d772").set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},d772:function(t,e,n){var r=n("b429"),a=n("4d65"),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("0709")(Function.call,n("78de").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},d77f:function(t,e,n){"use strict";var r=n("d45a"),a=n.n(r);a.a},ee50:function(t,e,n){"use strict";var r=n("c6db"),a=n.n(r);a.a},f91a:function(t,e,n){"use strict";var r=n("4d65"),a=n("aa91"),i=n("33f2"),c=n("ae63"),s=n("1ff3"),o=n("b21e"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};n("c5aa")("replace",2,function(t,e,n,v){return[function(r,a){var i=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,i,a):n.call(String(i),r,a)},function(t,e){var a=v(n,t,this,e);if(a.done)return a.value;var d=r(t),f=String(this),p="function"===typeof e;p||(e=String(e));var _=d.global;if(_){var g=d.unicode;d.lastIndex=0}var x=[];while(1){var b=o(d,f);if(null===b)break;if(x.push(b),!_)break;var y=String(b[0]);""===y&&(d.lastIndex=s(f,i(d.lastIndex),g))}for(var C="",E=0,w=0;w<x.length;w++){b=x[w];for(var I=String(b[0]),O=l(u(c(b.index),f.length),0),A=[],$=1;$<b.length;$++)A.push(m(b[$]));var N=b.groups;if(p){var k=[I].concat(A,O,f);void 0!==N&&k.push(N);var S=String(e.apply(void 0,k))}else S=h(I,f,O,A,N,e);O>=E&&(C+=f.slice(E,O)+S,E=O+I.length)}return C+f.slice(E)}];function h(t,e,r,i,c,s){var o=r+t.length,l=i.length,u=p;return void 0!==c&&(c=a(c),u=f),n.call(s,u,function(n,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(o);case"<":s=c[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>l){var f=d(u/10);return 0===f?n:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}s=i[u-1]}return void 0===s?"":s})}})}}]);
//# sourceMappingURL=chunk-7d78673c.3d6601a8.js.map