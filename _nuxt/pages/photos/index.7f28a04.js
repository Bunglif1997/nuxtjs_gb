(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{225:function(t,e,r){var content=r(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("fc93f764",content,!0,{sourceMap:!1})},229:function(t,e,r){"use strict";var n=r(225);r.n(n).a},230:function(t,e,r){(e=r(57)(!1)).push([t.i,".container[data-v-d14a483c]{padding:1em;width:1220px;margin:0 auto}.photos[data-v-d14a483c]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-gap:1em;text-align:center}.photo-item[data-v-d14a483c]{width:100%;height:256px;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},250:function(t,e,r){"use strict";r.r(e);r(23);var n=r(2),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/v2/list");case 3:return n=e.sent,e.abrupt("return",{photos:n});case 5:case"end":return e.stop()}}),e)})))()}},c=(r(229),r(22)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Photos")]),t._v(" "),r("div",{staticClass:"photos"},t._l(t.photos,(function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/photos/"+e.id}},[r("h2",[t._v(" "+t._s(e.id))]),t._v(" "),r("p",[t._v(t._s(e.author))])])})),1),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[t._v("Back to Home")])],1)}),[],!1,null,"d14a483c",null);e.default=component.exports}}]);