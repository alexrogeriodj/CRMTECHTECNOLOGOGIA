gx.evt.autoSkip=!1;gx.define("wwemployee",!1,function(){var n,t;this.ServerClass="wwemployee";this.PackageName="GeneXus.Programs";this.ServerFullClass="wwemployee.aspx";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Amusementparkid=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Amusementparkid",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("AMUSEMENTPARKID",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e110m2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e150m2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e160m2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,26,27,28,29,30,31,32,33,34,35];this.GXLastCtrlId=35;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwemployee",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","New row",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit(19,26,"EMPLOYEEID","Id","","EmployeeId","int",0,"px",4,4,"right",null,[],19,"EmployeeId",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(20,27,"EMPLOYEENAME","Name","","EmployeeName","char",0,"px",20,20,"left",null,[],20,"EmployeeName",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(22,28,"EMPLOYEELASTNAME","Last Name","","EmployeeLastName","char",0,"px",20,20,"left",null,[],22,"EmployeeLastName",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(21,29,"EMPLOYEEANDRESS","Andress","","EmployeeAndress","svchar",0,"px",1024,80,"left",null,[],21,"EmployeeAndress",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(24,30,"EMPLOYEEPHONE","Phone","","EmployeePhone","char",0,"px",20,20,"left",null,[],24,"EmployeePhone",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(25,31,"EMPLOYEEEMAIL","Email","","EmployeeEmail","svchar",0,"px",100,80,"left",null,[],25,"EmployeeEmail",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(7,32,"AMUSEMENTPARKID","Amusement Park Id","","AmusementParkId","int",0,"px",4,4,"right",null,[],7,"AmusementParkId",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(8,33,"AMUSEMENTPARKNAME","Amusement Park Name","","AmusementParkName","char",0,"px",40,40,"left",null,[],8,"AmusementParkName",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit("Update",34,"vUPDATE","","","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");t.addSingleLineEdit("Delete",35,"vDELETE","","","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");this.GridContainer.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLETOP",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLETEXT",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"BTNINSERT",grid:0,evt:"e110m2_client"};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vEMPLOYEENAME",gxz:"ZV11EmployeeName",gxold:"OV11EmployeeName",gxvar:"AV11EmployeeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11EmployeeName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11EmployeeName=n)},v2c:function(){gx.fn.setControlValue("vEMPLOYEENAME",gx.O.AV11EmployeeName,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11EmployeeName=this.val())},val:function(){return gx.fn.getControlValue("vEMPLOYEENAME")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GRIDCELL",grid:0};n[19]={id:19,fld:"GRIDTABLE",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEEID",gxz:"Z19EmployeeId",gxold:"O19EmployeeId",gxvar:"A19EmployeeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A19EmployeeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z19EmployeeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEEID",n||gx.fn.currentGridRowImpl(25),gx.O.A19EmployeeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A19EmployeeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMPLOYEEID",n||gx.fn.currentGridRowImpl(25),",")},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEENAME",gxz:"Z20EmployeeName",gxold:"O20EmployeeName",gxvar:"A20EmployeeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A20EmployeeName=n)},v2z:function(n){n!==undefined&&(gx.O.Z20EmployeeName=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEENAME",n||gx.fn.currentGridRowImpl(25),gx.O.A20EmployeeName,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A20EmployeeName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLOYEENAME",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEELASTNAME",gxz:"Z22EmployeeLastName",gxold:"O22EmployeeLastName",gxvar:"A22EmployeeLastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A22EmployeeLastName=n)},v2z:function(n){n!==undefined&&(gx.O.Z22EmployeeLastName=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEELASTNAME",n||gx.fn.currentGridRowImpl(25),gx.O.A22EmployeeLastName,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A22EmployeeLastName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLOYEELASTNAME",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"svchar",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEEANDRESS",gxz:"Z21EmployeeAndress",gxold:"O21EmployeeAndress",gxvar:"A21EmployeeAndress",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A21EmployeeAndress=n)},v2z:function(n){n!==undefined&&(gx.O.Z21EmployeeAndress=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEEANDRESS",n||gx.fn.currentGridRowImpl(25),gx.O.A21EmployeeAndress,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A21EmployeeAndress=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLOYEEANDRESS",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEEPHONE",gxz:"Z24EmployeePhone",gxold:"O24EmployeePhone",gxvar:"A24EmployeePhone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"tel",v2v:function(n){n!==undefined&&(gx.O.A24EmployeePhone=n)},v2z:function(n){n!==undefined&&(gx.O.Z24EmployeePhone=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEEPHONE",n||gx.fn.currentGridRowImpl(25),gx.O.A24EmployeePhone,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A24EmployeePhone=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLOYEEPHONE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLOYEEEMAIL",gxz:"Z25EmployeeEmail",gxold:"O25EmployeeEmail",gxvar:"A25EmployeeEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"email",v2v:function(n){n!==undefined&&(gx.O.A25EmployeeEmail=n)},v2z:function(n){n!==undefined&&(gx.O.Z25EmployeeEmail=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLOYEEEMAIL",n||gx.fn.currentGridRowImpl(25),gx.O.A25EmployeeEmail,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A25EmployeeEmail=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLOYEEEMAIL",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Amusementparkid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AMUSEMENTPARKID",gxz:"Z7AmusementParkId",gxold:"O7AmusementParkId",gxvar:"A7AmusementParkId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A7AmusementParkId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z7AmusementParkId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("AMUSEMENTPARKID",n||gx.fn.currentGridRowImpl(25),gx.O.A7AmusementParkId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A7AmusementParkId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("AMUSEMENTPARKID",n||gx.fn.currentGridRowImpl(25),",")},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"AMUSEMENTPARKNAME",gxz:"Z8AmusementParkName",gxold:"O8AmusementParkName",gxvar:"A8AmusementParkName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A8AmusementParkName=n)},v2z:function(n){n!==undefined&&(gx.O.Z8AmusementParkName=n)},v2c:function(n){gx.fn.setGridControlValue("AMUSEMENTPARKNAME",n||gx.fn.currentGridRowImpl(25),gx.O.A8AmusementParkName,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8AmusementParkName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("AMUSEMENTPARKNAME",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV12Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25),gx.O.AV12Update,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV12Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25),gx.O.AV13Delete,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};this.AV11EmployeeName="";this.ZV11EmployeeName="";this.OV11EmployeeName="";this.Z19EmployeeId=0;this.O19EmployeeId=0;this.Z20EmployeeName="";this.O20EmployeeName="";this.Z22EmployeeLastName="";this.O22EmployeeLastName="";this.Z21EmployeeAndress="";this.O21EmployeeAndress="";this.Z24EmployeePhone="";this.O24EmployeePhone="";this.Z25EmployeeEmail="";this.O25EmployeeEmail="";this.Z7AmusementParkId=0;this.O7AmusementParkId=0;this.Z8AmusementParkName="";this.O8AmusementParkName="";this.ZV12Update="";this.OV12Update="";this.ZV13Delete="";this.OV13Delete="";this.AV11EmployeeName="";this.A19EmployeeId=0;this.A20EmployeeName="";this.A22EmployeeLastName="";this.A21EmployeeAndress="";this.A24EmployeePhone="";this.A25EmployeeEmail="";this.A7AmusementParkId=0;this.A8AmusementParkName="";this.AV12Update="";this.AV13Delete="";this.Events={e110m2_client:["'DOINSERT'",!0],e150m2_client:["ENTER",!0],e160m2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11EmployeeName",fld:"vEMPLOYEENAME",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.START=[[{av:"AV17Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A19EmployeeId",fld:"EMPLOYEEID",pic:"ZZZ9",hsh:!0},{av:"A7AmusementParkId",fld:"AMUSEMENTPARKID",pic:"ZZZ9"}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:'gx.fn.getCtrlProperty("EMPLOYEENAME","Link")',ctrl:"EMPLOYEENAME",prop:"Link"},{av:'gx.fn.getCtrlProperty("AMUSEMENTPARKNAME","Link")',ctrl:"AMUSEMENTPARKNAME",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A19EmployeeId",fld:"EMPLOYEEID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.ENTER=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11EmployeeName",fld:"vEMPLOYEENAME",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11EmployeeName",fld:"vEMPLOYEENAME",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11EmployeeName",fld:"vEMPLOYEENAME",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11EmployeeName",fld:"vEMPLOYEENAME",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.VALID_AMUSEMENTPARKID=[[],[]];t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingParm({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(this.wwemployee)})