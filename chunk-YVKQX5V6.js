import{a as T,b as x}from"./chunk-HJII3JWM.js";import{a as j,c as q,d as A,f as Q,h as L,i as R,j as P,o as $,r as G,t as U}from"./chunk-MRS7BZMX.js";import{Aa as z,B as p,C as u,H as l,I as _,N as f,P as y,Q as r,R as s,S as g,T as h,V as a,W as I,Y as w,Z as d,_ as M,aa as V,da as F,ea as N,fa as k,ia as D,ja as O,u as v,x as S,xa as b,y as C}from"./chunk-RA6G72UF.js";var Z=["f"];function ee(n,e){if(n&1){let c=h();r(0,"button",13),a("click",function(){p(c);let i=I();return u(i.onDelete())}),d(1,"Delete"),s()}}var B=(()=>{let e=class e{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}ngOnDestroy(){this.subscription.unsubscribe}onSubmit(t){let i=t.value,o=new T(i.name,i.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,o):this.slService.addIngredient(o),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}};e.\u0275fac=function(i){return new(i||e)(_(x))},e.\u0275cmp=S({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(i,o){if(i&1&&N(Z,5),i&2){let m;F(m=k())&&(o.slForm=m.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(i,o){if(i&1){let m=h();r(0,"div",0)(1,"div",1)(2,"form",2,3),a("ngSubmit",function(){p(m);let W=w(3);return u(o.onSubmit(W))}),r(4,"div",0)(5,"div",4)(6,"label",5),d(7,"Name"),s(),g(8,"input",6),s(),r(9,"div",7)(10,"label",8),d(11,"Amount"),s(),g(12,"input",9),s()(),r(13,"div",0)(14,"div",1)(15,"button",10),d(16),s(),y(17,ee,2,0,"button",11),r(18,"button",12),a("click",function(){return o.onClear()}),d(19,"Clear"),s()()()()()()}if(i&2){let m=w(3);l(15),f("disabled",!m.valid),l(),M(o.editMode?"Update":"Add"),l(),f("ngIf",o.editMode)}},dependencies:[R,j,P,q,A,$,G,L,Q,O],styles:["button[_ngcontent-%COMP%]{margin-left:5px}"]});let n=e;return n})();function ie(n,e){if(n&1){let c=h();r(0,"a",4),a("click",function(){let o=p(c).index,m=I();return u(m.onEditItem(o))}),d(1),s()}if(n&2){let c=e.$implicit;l(),V(" ",c.name," (",c.amount,") ")}}var H=(()=>{let e=class e{constructor(t){this.slService=t}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subsription=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t})}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.subsription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(_(x))},e.\u0275cmp=S({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1),g(2,"app-shopping-edit")(3,"hr"),r(4,"ul",2),y(5,ie,2,2,"a",3),s()()()),i&2&&(l(5),f("ngForOf",o.ingredients))},dependencies:[D,B]});let n=e;return n})();var ne=[{path:"",component:H}],J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=v({imports:[b.forChild(ne),b]});let n=e;return n})();var ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=C({type:e}),e.\u0275inj=v({imports:[b,U,J,z]});let n=e;return n})();export{ve as ShoppingListModule};
