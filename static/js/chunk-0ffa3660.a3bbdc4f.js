(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ffa3660"],{"14d7":function(t,a,e){"use strict";e("6871")},"16c2":function(t,a,e){},"333d":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagination-container"},[e("div",{staticClass:"el-pagination is-background"},[e("span",{staticClass:"el-pagination__total"},[t._v("共"+t._s(t.page.totalCount)+"条记录 第 "+t._s(t.page.pageIndex)+"/"+t._s(t.page.totalPage)+" 页")]),e("button",{class:{btnDefault:!t.upDisabled,btnDisabled:t.upDisabled},attrs:{type:"button",disabled:t.upDisabled},on:{click:t.pageUp}},[e("span",[t._v("上一页")])]),e("button",{class:{btnDefault:!t.downDisabled,btnDisabled:t.downDisabled},attrs:{type:"button",disabled:t.downDisabled},on:{click:t.pageDown}},[e("span",[t._v("下一页")])])])])},r=[],n={props:{upDisabled:{type:Boolean,default:!1},downDisabled:{type:Boolean,default:!1},page:{type:Object}},data:function(){return{}},created:function(){},methods:{pageDown:function(){this.$emit("pageDown","down")},pageUp:function(){this.$emit("pageUp","up")}}},i=n,c=(e("14d7"),e("0c7c")),l=Object(c["a"])(i,s,r,!1,null,"229e4442",null);a["a"]=l.exports},6871:function(t,a,e){},"71ff":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"app-main"},[e("div",[e("el-row",{staticClass:"statistics"},[e("el-col",{staticClass:"day"},[e("div",{staticClass:"grid-content"},[t._v(" 日销售统计 "),e("div",{staticClass:"box"},[e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(t._s(t.sales))]),e("div",{staticClass:"text"},[t._v("当日销售量（个）")])])]),e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(t._s(t.saleroom/100))]),e("div",{staticClass:"text"},[t._v("当前销售额（元）")])])]),e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(t._s(t.bill/100))]),e("div",{staticClass:"text"},[t._v("当日分成（元）")])])])],1)])]),e("el-col",{staticClass:"month"},[e("div",{staticClass:"grid-content"},[t._v(" 月销售统计 "),e("div",{staticClass:"box"},[e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(t._s(t.salesMonth))]),e("div",{staticClass:"text"},[t._v("当月销售量（个）")])])]),e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(" "+t._s((t.saleroomMonth/1e6).toFixed(2))+" ")]),e("div",{staticClass:"text"},[t._v("当月销售额（万元）")])])]),e("el-col",{staticClass:"stats"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(t._s(t.billMonth/100))]),e("div",{staticClass:"text"},[t._v("当月分成（元）")])])])],1)])])],1)],1),e("div",{staticClass:"app"},[e("div",[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[e("el-form-item",{staticClass:"label",attrs:{label:"合作商："},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.partnerId,callback:function(a){t.$set(t.formData,"partnerId",a)},expression:"formData.partnerId"}},t._l(t.partners,(function(a){return e("el-option",{key:a.id,attrs:{label:a.name,value:a.id},nativeOn:{click:function(e){t.paramsPage.partnerName=a.name}}})})),1)],1),e("el-form-item",{attrs:{label:"日期："}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"~",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"]},model:{value:t.dataPicker,callback:function(a){t.dataPicker=a},expression:"dataPicker"}},[t._v(" > ")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchFn}},[t._v("查询")])],1)],1)],1),e("div",{staticClass:"report"},[e("div",{staticClass:"stats"},[t._v(" 笔数统计："),e("span",{staticClass:"style"},[t._v(t._s(t.customSales))]),t._v("个 ")]),e("div",{staticClass:"stats"},[t._v(" 收入统计："),e("span",{staticClass:"style"},[t._v(t._s(t.customSaleroom/100))]),t._v("元 ")]),e("div",{staticClass:"stats"},[t._v(" 分成统计："),e("span",{staticClass:"style"},[t._v(t._s(t.customBill/100))]),t._v("元 ")])])]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%","padding-left":"17px","padding-right":"17px","padding-top":"20px"},attrs:{data:t.listData.currentPageRecords,"cell-style":{padding:"3px 0px ",border:0,height:"44px"},"header-cell-style":{background:"rgb(243, 246, 251)"},"empty-text":"暂无数据"}},[e("el-table-column",{attrs:{prop:"date",label:"订单日期",width:"280"}}),e("el-table-column",{attrs:{prop:"ownerName",label:"合作商",width:"280"}}),e("el-table-column",{attrs:{prop:"ratio",label:"分成比例",width:"280"}}),e("el-table-column",{attrs:{prop:"orderTotalMoney",label:"收入（元）",width:"280",formatter:t.orderTotalMoney}}),e("el-table-column",{attrs:{prop:"orderCount",label:"笔数",width:"280"}}),e("el-table-column",{attrs:{prop:"totalBill",label:"分成金额（元）",width:"280",formatter:t.totalBill}})],1),t.listData.totalPage>1?e("Pagination",{attrs:{page:t.listData,upDisabled:t.upDisabled,downDisabled:t.downDisabled},on:{pageDown:t.searchFn,pageUp:t.searchFn}}):t._e()],1)])},r=[],n=e("f07e"),i=e("c964"),c=e("b138"),l=e("5a0c"),o=e.n(l),d=e("333d"),u={components:{Pagination:d["a"]},data:function(){return{loading:!1,formData:{partnerId:"",start:"",end:""},dataPicker:[o()().startOf("month").format("YYYY-MM-DD HH:mm:ss"),o()().endOf("day").format("YYYY-MM-DD HH:mm:ss")],partners:[],paramsDay:{start:o()().startOf("day").format("YYYY-MM-DD HH:mm:ss"),end:o()().endOf("day").format("YYYY-MM-DD HH:mm:ss")},paramsMonth:{start:o()().startOf("month").format("YYYY-MM-DD HH:mm:ss"),end:o()().endOf("day").format("YYYY-MM-DD HH:mm:ss")},sales:"",saleroom:"",bill:"",salesMonth:"",saleroomMonth:"",billMonth:"",customSales:"",customSaleroom:"",customBill:"",paramsPage:{pageIndex:1,pageSize:10,start:"",end:"",partnerName:""},listData:{}}},created:function(){this.getPartnerList(),this.getOrderCount(this.paramsDay),this.getOrderAmount(this.paramsDay),this.getTotalBill(this.paramsDay),this.getOrderCount(this.paramsMonth,"check"),this.getOrderAmount(this.paramsMonth,"check"),this.getTotalBill(this.paramsMonth,"check"),this.searchFn()},methods:{getPartnerList:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function a(){var e;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(c["d"])();case 3:e=a.sent,t.partners=e.data.currentPageRecords,a.next=9;break;case 7:a.prev=7,a.t0=a["catch"](0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getOrderCount:function(t,a){var e=this;return Object(i["a"])(Object(n["a"])().mark((function s(){var r;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(c["b"])(t);case 3:r=s.sent,a?e.salesMonth=r.data:e.sales=r.data,s.next=9;break;case 7:s.prev=7,s.t0=s["catch"](0);case 9:case"end":return s.stop()}}),s,null,[[0,7]])})))()},getOrderAmount:function(t,a){var e=this;return Object(i["a"])(Object(n["a"])().mark((function s(){var r;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(c["a"])(t);case 3:r=s.sent,a?e.saleroomMonth=r.data:e.saleroom=r.data,s.next=9;break;case 7:s.prev=7,s.t0=s["catch"](0);case 9:case"end":return s.stop()}}),s,null,[[0,7]])})))()},getTotalBill:function(t,a){var e=this;return Object(i["a"])(Object(n["a"])().mark((function s(){var r;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(c["h"])(t);case 3:r=s.sent,a?e.billMonth=r.data:e.bill=r.data,s.next=9;break;case 7:s.prev=7,s.t0=s["catch"](0);case 9:case"end":return s.stop()}}),s,null,[[0,7]])})))()},searchFn:function(t){var a=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var s,r,i,l,o,d;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.loading=!0,a.formData.start=a.dataPicker[0],a.formData.end=a.dataPicker[1],a.paramsPage.start=a.dataPicker[0].substring(0,10),a.paramsPage.end=a.dataPicker[1].substring(0,10),e.next=8,Object(c["b"])(a.formData);case 8:return s=e.sent,a.customSales=s.data,e.next=12,Object(c["a"])(a.formData);case 12:return r=e.sent,a.customSaleroom=r.data,e.next=16,Object(c["h"])(a.formData);case 16:if(i=e.sent,a.customBill=i.data,"down"!==t){e.next=26;break}return a.paramsPage.pageIndex=parseInt(a.paramsPage.pageIndex)+1,e.next=22,Object(c["c"])(a.paramsPage);case 22:l=e.sent,a.listData=l.data,e.next=38;break;case 26:if("up"!==t){e.next=34;break}return a.paramsPage.pageIndex=parseInt(a.paramsPage.pageIndex)-1,e.next=30,Object(c["c"])(a.paramsPage);case 30:o=e.sent,a.listData=o.data,e.next=38;break;case 34:return e.next=36,Object(c["c"])(a.paramsPage);case 36:d=e.sent,a.listData=d.data;case 38:a.paramsPage.pageIndex===parseInt(a.listData.totalPage)?(a.downDisabled=!0,a.upDisabled=!1):1===a.paramsPage.pageIndex?(a.downDisabled=!1,a.upDisabled=!0):(a.downDisabled=!1,a.upDisabled=!1),e.next=43;break;case 41:e.prev=41,e.t0=e["catch"](0);case 43:return e.prev=43,a.loading=!1,e.finish(43);case 46:case"end":return e.stop()}}),e,null,[[0,41,43,46]])})))()},orderTotalMoney:function(t,a,e){return e/100},totalBill:function(t,a,e){return e/100}}},p=u,m=(e("fb50"),e("0c7c")),b=Object(m["a"])(p,s,r,!1,null,null,null);a["default"]=b.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),n=e("e8b5"),i=e("861d"),c=e("7b0b"),l=e("50c4"),o=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),m=e("2d00"),b=p("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",h=m>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=u("concat"),D=function(t){if(!i(t))return!1;var a=t[b];return void 0!==a?!!a:n(t)},C=!h||!g;s({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,s,r,n,i=c(this),u=d(i,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(n=-1===a?i:arguments[a],D(n)){if(r=l(n.length),p+r>f)throw TypeError(v);for(e=0;e<r;e++,p++)e in n&&o(u,p,n[e])}else{if(p>=f)throw TypeError(v);o(u,p++,n)}return u.length=p,u}})},b138:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"a",(function(){return n})),e.d(a,"h",(function(){return i})),e.d(a,"g",(function(){return c})),e.d(a,"e",(function(){return l})),e.d(a,"f",(function(){return o})),e.d(a,"d",(function(){return d})),e.d(a,"c",(function(){return u}));e("99af");var s=e("b775"),r=function(t){return Object(s["a"])({url:"/order-service/report/orderCount",params:t})},n=function(t){return Object(s["a"])({url:"/order-service/report/orderAmount",params:t})},i=function(t){return Object(s["a"])({url:"/order-service/report/totalBill",params:t})},c=function(t){return Object(s["a"])({url:"/task-service/task/supplyCount/".concat(t.innerCode,"/").concat(t.start,"/").concat(t.end)})},l=function(t){return Object(s["a"])({url:"/task-service/task/repairCount/".concat(t.innerCode,"/").concat(t.start,"/").concat(t.end)})},o=function(t){return Object(s["a"])({url:"/order-service/report/skuCollect/".concat(t.innerCode,"/").concat(t.start,"/").concat(t.end)})},d=function(){return Object(s["a"])({url:"/user-service/partner/search",params:{pageIndex:1,pageSize:1e5}})},u=function(t){return Object(s["a"])({url:"/order-service/report/partnerCollect",params:t})}},fb50:function(t,a,e){"use strict";e("16c2")}}]);