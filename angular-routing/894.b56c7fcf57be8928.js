"use strict";(self.webpackChunkangular_routing=self.webpackChunkangular_routing||[]).push([[894],{9894:(f,d,a)=>{a.r(d),a.d(d,{AdminModule:()=>m});var l=a(6895),o=a(5831),e=a(8274);const A=function(){return{exact:!0}};class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-admin"]],decls:14,vars:5,consts:[[1,"nav","nav-tabs"],["routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./","queryParamsHandling","preserve",3,"preserveFragment"],["routerLinkActive","active"],["routerLink","./tasks","queryParamsHandling","preserve",3,"preserveFragment"],["routerLink","./users","queryParamsHandling","preserve",3,"preserveFragment"]],template:function(n,u){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Admin"),e.qZA(),e.TgZ(2,"nav")(3,"ul",0)(4,"li",1)(5,"a",2),e._uU(6,"Dashboard"),e.qZA()(),e.TgZ(7,"li",3)(8,"a",4),e._uU(9,"Manage Tasks"),e.qZA()(),e.TgZ(10,"li",3)(11,"a",5),e._uU(12,"Manage Users"),e.qZA()()()(),e._UZ(13,"router-outlet")),2&n&&(e.xp6(4),e.Q6J("routerLinkActiveOptions",e.DdM(4,A)),e.xp6(1),e.Q6J("preserveFragment",!0),e.xp6(3),e.Q6J("preserveFragment",!0),e.xp6(3),e.Q6J("preserveFragment",!0))},dependencies:[o.lC,o.rH,o.Od]});var g=a(4004);class p{constructor(n){this.route=n}ngOnInit(){this.sessionId=this.route.queryParamMap.pipe((0,g.U)(n=>n.get("sessionId")||"None")),this.token=this.route.fragment.pipe((0,g.U)(n=>n||"None"))}}p.\u0275fac=function(n){return new(n||p)(e.Y36(o.gz))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-admin-dashboard"]],decls:7,vars:6,consts:[["id","anchor"]],template:function(n,u){1&n&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"async"),e.qZA(),e._UZ(3,"a",0),e.TgZ(4,"p"),e._uU(5),e.ALo(6,"async"),e.qZA()),2&n&&(e.xp6(1),e.hij("Session ID: ",e.lcZ(2,2,u.sessionId),""),e.xp6(4),e.hij("Token: ",e.lcZ(6,4,u.token),""))},dependencies:[l.Ov]});class i{}i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-manage-tasks"]],decls:2,vars:0,template:function(n,u){1&n&&(e.TgZ(0,"p"),e._uU(1,"manage-tasks works!"),e.qZA())}});class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-manage-users"]],decls:2,vars:0,template:function(n,u){1&n&&(e.TgZ(0,"p"),e._uU(1,"manage-users works!"),e.qZA())}});var v=a(7223);const h=[{path:"",component:r,canActivate:[v.a1],children:[{path:"",canActivateChild:[v.a1],children:[{path:"users",component:c},{path:"tasks",component:i},{path:"",component:p}]}]}];class s{}s.components=[r,p,i,c],s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[o.Bz.forChild(h),o.Bz]});class m{}m.\u0275fac=function(n){return new(n||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[l.ez,s]})}}]);