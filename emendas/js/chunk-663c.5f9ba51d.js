(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-663c"],{"0d07":function(a,t,s){},"2aff":function(a,t,s){"use strict";var e=s("0d07"),o=s.n(e);o.a},"570e":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page municipio",attrs:{id:"app"}},[s("Loading",{attrs:{hide:a.hide}}),s("div",{staticClass:"container"},[s("div",{staticClass:"page-content"},[a.emenda?s("section",{staticClass:"showcase box"},[s("h2",{staticClass:"mb-3"},[a._v(a._s(a.emenda.proposta.descricaoObjeto))]),s("h4",{staticClass:"mb-2"},[s("strong",[a._v("Proponente:")]),a._v(" "+a._s(a.emenda.proposta.nomeProponente))]),s("h4",{staticClass:"mb-2"},[s("strong",[a._v("Parlamentar:")]),a._v(" "+a._s(a.emenda.nomeParlamentar))]),s("div",{staticClass:"dadosEmenda mb-3"},[s("div",{staticClass:"repasse help"},[s("span",{staticClass:"title"},[a._v("Repasse")]),s("span",{staticClass:"value"},[a._v("R$ "+a._s(a.currencyFormat(a.emenda.proposta.valorRepasseProposta)))])]),s("div",{staticClass:"contrapartida help"},[s("span",{staticClass:"title"},[a._v("Contrapartida")]),s("span",{staticClass:"value"},[a._v("R$ "+a._s(a.currencyFormat(a.emenda.proposta.valorContrapartidaProposta)))])]),s("div",{staticClass:"proposta help"},[s("span",{staticClass:"title"},[a._v("Valor Global")]),s("span",{staticClass:"value"},[a._v("R$ "+a._s(a.currencyFormat(a.emenda.proposta.valorGlobalProposta)))])])]),s("div",{staticClass:"graficos"},[s("div",{staticClass:"box box-invert mb-4"},[s("h4",{staticClass:"card-title"},[a._v("Composição do Valor Total")]),s("PieChart",{attrs:{data:a.mountChartData(a.emenda),options:{responsive:!1,maintainAspectRatio:!0},height:400}})],1)])]):s("section",[a._v("\n        nada :(\n      ")])])])],1)},o=[],n=(s("6b54"),s("a481"),s("cadf"),s("551c"),s("097d"),s("3a5e")),r=s("748a"),i={name:"emenda",components:{Loading:n["a"],PieChart:r["a"]},props:{id:String},data:function(){return{emenda:!1,hide:""}},methods:{getEmenda:function(a){var t=this;return this.$http.get(this.$apiUrls.getEmendaPorId(a)).then(function(a){t.emenda=a.data,t.hide="hide"},function(a){return t.hide="hide",console.log("Nao foi possivel receber emenda "),console.log(a),!1}),!0},mountChartData:function(a){return{datasets:[{label:"Valor Total: R$ "+this.currencyFormat(a.proposta.valorGlobalProposta),data:[a.proposta.valorRepasseProposta,a.proposta.valorContrapartidaProposta],backgroundColor:["#ff0033","#0022ff"]}],labels:["Repasse","Contrapartida"]}},currencyFormat:function(a){var t=(a/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},mounted:function(){this.getEmenda(this.id)}},c=i,l=(s("2aff"),s("2877")),p=Object(l["a"])(c,e,o,!1,null,"54103278",null);p.options.__file="Emenda.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-663c.5f9ba51d.js.map