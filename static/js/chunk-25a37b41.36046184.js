(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25a37b41"],{1740:function(t,e,a){"use strict";a("cf00")},"45fc":function(t,e,a){},"4dc5":function(t,e,a){"use strict";a("91d2")},5871:function(t,e,a){},"6c43":function(t,e,a){"use strict";a("45fc")},7390:function(t,e,a){"use strict";a("a7c9")},"91d2":function(t,e,a){},a7c9:function(t,e,a){},c9e1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("typeSearch",{on:{OnSearch:t.typeSearchItem}}),a("typeMain",{attrs:{vmTypeListData:t.vmTypeListData.currentPageRecords},on:{add:t.addTypeItem,edit:t.editTypeItem,remove:t.getVmTypeList}}),t.vmTypeListData.totalCount?a("pagenation",{attrs:{listIsShow:this.lastDisabled&&this.rightDisabled,taskList:t.vmTypeListData,lastDisabled:t.lastDisabled,rightDisabled:t.rightDisabled},on:{lastPage:t.getLastTaskService,nextPage:t.getNextTaskService}}):t._e(),a("addDilog",{ref:"addDilog",attrs:{visiable:t.isShowAddDilog},on:{"update:visiable":function(e){t.isShowAddDilog=e},addSuccess:t.getVmTypeList}})],1)},r=[],s=a("f07e"),i=a("c964"),o=(a("b0c0"),a("b775")),l=function(t){return Object(o["a"])({url:"/vm-service/vmType/search",method:"GET",params:t})},c=function(t){return Object(o["a"])({url:"/vm-service/vmType/".concat(t),method:"DELETE"})},m=function(t){return Object(o["a"])({url:"/vm-service/vmType",method:"POST",data:t})},u=function(t){return Object(o["a"])({url:"/vm-service/vmType/".concat(t.typeId),method:"PUT",data:t})},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"型号搜索："}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.typeName,callback:function(e){t.typeName=e},expression:"typeName"}})],1),a("el-form-item",[a("el-button",{staticClass:"btnInquire",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSearch}},[t._v("查询")])],1)],1)],1)])},d=[],f=(a("498a"),{data:function(){return{typeName:""}},created:function(){},methods:{onSearch:function(){this.$emit("OnSearch",this.typeName.trim()),this.$message.success("查询成功")}}}),h=f,b=(a("7390"),a("0c7c")),v=Object(b["a"])(h,p,d,!1,null,"0ab4ae88",null),g=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"result"},[a("el-row",{staticClass:"operation"},[a("el-button",{staticClass:"addBtn",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(e){return t.$emit("add")}}},[t._v("新建")])],1),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.vmTypeListData,"highlight-current-row":"","empty-text":"暂无数据"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"型号名称",width:"180"}}),a("el-table-column",{attrs:{prop:"model",label:"型号编号",width:"180"}}),a("el-table-column",{attrs:{label:"设备图片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{directives:[{name:"imgError",rawName:"v-imgError",value:t.defaultImg,expression:"defaultImg"}],staticClass:"vm-type-image",attrs:{src:e.row.image}})]}}])}),a("el-table-column",{attrs:{prop:"vmRow",label:"货道行",width:"180"}}),a("el-table-column",{attrs:{prop:"vmCol",label:"货道列",width:"180"}}),a("el-table-column",{attrs:{prop:"channelMaxCapacity",label:"设备容量",width:"180"}}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"el-button--text",attrs:{type:"primary"},nativeOn:{click:function(a){return t.$emit("edit",e.row)}}},[t._v("修改")]),a("el-button",{staticClass:"el-button--text",staticStyle:{color:"rgb(255, 90, 90)"},attrs:{type:"danger"},on:{click:function(a){return t.onRemove(e.row)}}},[t._v("删除")])]}}])})],1)]],2)])},x=[],D={data:function(){return{defaultImg:"https://img2.baidu.com/it/u=861943924,2838283407&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"}},props:{vmTypeListData:{type:Array}},created:function(){},methods:{onRemove:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$confirm("确定要删除吗","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 3:return a.next=5,c(t.typeId);case 5:e.$message.success("删除成功"),e.$emit("remove"),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),e.$message.error("删除失败"),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},ratioType:function(t,e,a){return"".concat(a,"%")}}},w=D,C=(a("f38b"),Object(b["a"])(w,y,x,!1,null,"20acfb96",null)),k=C.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.listIsShow?t._e():a("div",{staticClass:"total"},[a("span",[t._v("共"+t._s(t.taskList.totalCount)+"条数据 第"+t._s(t.taskList.pageIndex)+"/ "+t._s(Math.ceil(t.taskList.totalCount/10))+"页")]),a("div",{staticClass:"page-button"},[a("MyButton",{attrs:{btnStyle:t.pageBtnStyle,disabled:t.lastDisabled},on:{click:t.lastPage}},[t._v("上一页 ")]),a("MyButton",{attrs:{btnStyle:t.pageBtnStyle,disabled:t.rightDisabled},on:{click:t.nextPage}},[t._v("下一页 ")])],1)])},S=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mybutton"},[a("el-button",{class:{disabled:t.disabled},style:t.btnStyle,attrs:{disabled:t.disabled,type:"primary",icon:t.icon},on:{click:t.clickFn}},[t._t("lastIcon"),t._t("default")],2)],1)},_=[],O={name:"MyButton",data:function(){return{}},props:{icon:{type:String},btnStyle:{type:Object},disabled:{type:Boolean,default:!1}},created:function(){},methods:{clickFn:function(){this.$emit("click")}},computed:{}},I=O,j=(a("1740"),Object(b["a"])(I,$,_,!1,null,"08810a3f",null)),L=j.exports,M={name:"FooterPage",data:function(){return{pageBtnStyle:{background:"#d5ddf8",width:"70px",height:"32px",color:"#000",fontWeight:"400",marginLeft:"25px"}}},props:{listIsShow:{type:Boolean},taskList:{type:Object},lastDisabled:{type:Boolean},rightDisabled:{type:Boolean}},created:function(){},methods:{lastPage:function(){this.$emit("lastPage")},nextPage:function(){this.$emit("nextPage")}},computed:{},components:{MyButton:L}},B=M,R=(a("4dc5"),Object(b["a"])(B,T,S,!1,null,"25364aea",null)),P=R.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visiable,width:"630px"},on:{close:t.onClose}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px",rules:t.formRules}},[a("el-form-item",{attrs:{label:"型号名称:",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"型号编码:",prop:"model"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.model,callback:function(e){t.$set(t.formData,"model",e)},expression:"formData.model"}})],1),a("el-form-item",{attrs:{label:"货道行数:",prop:"vmRow"}},[a("el-input-number",{attrs:{"controls-position":"right",placeholder:"请输入",min:0,max:10},model:{value:t.formData.vmRow,callback:function(e){t.$set(t.formData,"vmRow",e)},expression:"formData.vmRow"}})],1),a("el-form-item",{attrs:{label:"货道列数:",prop:"vmCol"}},[a("el-input-number",{attrs:{"controls-position":"right",placeholder:"请输入",min:0,max:10},model:{value:t.formData.vmCol,callback:function(e){t.$set(t.formData,"vmCol",e)},expression:"formData.vmCol"}})],1),a("el-form-item",{attrs:{label:"货道容量:",prop:"channelMaxCapacity"}},[a("el-input-number",{attrs:{"controls-position":"right",placeholder:"请输入",min:0,max:10},model:{value:t.formData.channelMaxCapacity,callback:function(e){t.$set(t.formData,"channelMaxCapacity",e)},expression:"formData.channelMaxCapacity"}})],1),a("el-form-item",{attrs:{label:"设备图片:",prop:"image"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{drag:"","show-file-list":!1,action:"/api/vm-service/sku/fileUpload",headers:{Authorization:t.$store.state.user.token.token},"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,name:"fileName"}},[t._v(" > "),t.formData.image?a("img",{staticClass:"avatar",attrs:{src:t.formData.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("div",{staticClass:"el-upload__text"},[t._v("支持扩展名:jpg、png,文件不得大于100kb")])],1)],1),a("center",[a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"cancel",on:{click:t.onClose}},[t._v("取 消")]),a("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:t.onSave}},[t._v("确 定")])],1)])],1)},A=[],N={data:function(){return{dialogTitle:"新增设备类型",formData:{name:"",model:"",vmRow:"",vmCol:"",channelMaxCapacity:"",image:""},formRules:{name:[{required:!0,message:"型号名称不能为空",trigger:"blur"}],model:[{required:!0,message:"型号编码不能为空",trigger:"blur"}],vmRow:[{required:!0,message:"货道行数不能为空",trigger:"blur"}],vmCol:[{required:!0,message:"货道列数不能为空",trigger:"blur"}],channelMaxCapacity:[{required:!0,message:"货道容量不能为空",trigger:"blur"}],image:[{required:!0,message:"设备图片不能为空",trigger:"change"}]}}},props:{visiable:{type:Boolean,required:!0}},created:function(){},computed:{},methods:{onClose:function(){this.$emit("update:visiable",!1),this.$refs.form.resetFields(),this.dialogTitle="新增设备类型",this.formData={name:"",model:"",vmRow:"",vmCol:"",channelMaxCapacity:"",image:""}},onSave:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.form.validate();case 2:if(!t.formData.typeId){e.next=16;break}return e.prev=3,e.next=6,u(t.formData);case 6:t.$message.success("修改成功"),t.onClose(),t.$emit("addSuccess"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),t.$message.error("修改失败");case 14:e.next=27;break;case 16:return e.prev=16,e.next=19,m(t.formData);case 19:t.$message.success("添加成功"),t.onClose(),t.$emit("addSuccess"),e.next=27;break;case 24:e.prev=24,e.t1=e["catch"](16),t.$message.error("添加失败");case 27:case"end":return e.stop()}}),e,null,[[3,11],[16,24]])})))()},handleAvatarSuccess:function(t,e){this.formData.image=e.response,console.log(this.formData.image)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG或IMG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},getTypeItemId:function(t){this.formData.typeId=t.typeId,this.dialogTitle="修改设备类型",this.formData.name=t.name,this.formData.model=t.model,this.formData.vmRow=t.vmRow,this.formData.vmCol=t.vmCol,this.formData.channelMaxCapacity=t.channelMaxCapacity,this.formData.image=t.image}}},q=N,V=(a("6c43"),Object(b["a"])(q,E,A,!1,null,"3cfe272a",null)),F=V.exports,G={data:function(){return{vmTypeListData:{},isShowAddDilog:!1,params:{pageIndex:1,pageSize:10}}},components:{typeSearch:g,typeMain:k,pagenation:P,addDilog:F},created:function(){this.getVmTypeList()},computed:{lastDisabled:function(){return this.vmTypeListData.pageIndex<=1},rightDisabled:function(){return this.vmTypeListData.pageIndex==Math.ceil(this.vmTypeListData.totalCount/10)}},methods:{getVmTypeList:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(t.params);case 2:a=e.sent,n=a.data,t.vmTypeListData=n;case 5:case"end":return e.stop()}}),e)})))()},getNextTaskService:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.params.pageIndex++,t.getVmTypeList();case 2:case"end":return e.stop()}}),e)})))()},getLastTaskService:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.params.pageIndex--,t.getVmTypeList();case 2:case"end":return e.stop()}}),e)})))()},typeSearchItem:function(t){this.params.name=t,this.getVmTypeList()},addTypeItem:function(){this.isShowAddDilog=!0},editTypeItem:function(t){this.isShowAddDilog=!0,this.$refs.addDilog.getTypeItemId(t)}}},J=G,U=Object(b["a"])(J,n,r,!1,null,null,null);e["default"]=U.exports},cf00:function(t,e,a){},f38b:function(t,e,a){"use strict";a("5871")}}]);