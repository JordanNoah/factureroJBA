(function(){"use strict";var t={4553:function(t,a,e){var n=e(144),o=e(1096),i=function(){var t=this,a=t._self._c;return a(o.Z,[a("router-view")],1)},s=[],r={name:"App",data:()=>({}),mounted:function(){this.$vuetify.theme.dark=!0}},l=r,u=e(1001),c=(0,u.Z)(l,i,s,!1,null,null,null),d=c.exports,p=e(5205);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var m=e(8345),Z=e(5378),v=e(1828),f=e(3058),h=e(5223),b=e(1313),w=e(4437),g=e(6035),k=e(9789),y=e(4192),C=e(5294),x=e(5251),_=function(){var t=this,a=t._self._c;return a("div",[a(Z.Z,{attrs:{dense:""}},[t._v(" as ")]),a(g.Z,[a(C.Z,[a(w.Z,{attrs:{cols:"8"}}),a(w.Z,{attrs:{cols:"4"}},[a(f.Z,[a(g.Z,[a(x.Z,{attrs:{outlined:"",dense:"",label:"Correo Electronico"}}),a(x.Z,{attrs:{outlined:"",dense:"",label:"Password"}}),a(g.Z,[a(v.Z,{attrs:{block:"",depressed:""}},[t._v(" Iniciar sesión ")]),a("div",{staticClass:"d-flex justify-center my-3"},[a("router-link",{attrs:{to:"/forgotPassword"}},[a("span",[t._v("¿Olvidaste tu contraseña?")])])],1)],1),a(y.Z),a(g.Z,[a(v.Z,{attrs:{block:"",depressed:""}},[t._v(" Crear cuenta ")])],1)],1)],1)],1)],1)],1),a(k.Z,{attrs:{"max-width":"500"},model:{value:t.dialogCreate,callback:function(a){t.dialogCreate=a},expression:"dialogCreate"}},[a(f.Z,[a(h.EB,[t._v(" Registrate ")]),a(g.Z,[a(f.Z,{staticClass:"my-2",attrs:{elevation:"0"}},[a(x.Z,{staticClass:"my-3",attrs:{outlined:"",dense:"","hide-details":"",label:"Nombre"}}),a(x.Z,{staticClass:"my-3",attrs:{outlined:"",dense:"","hide-details":"",label:"Correo electronico"}}),a(x.Z,{staticClass:"my-3",attrs:{outlined:"",dense:"","hide-details":"",label:"Telefono celular"}}),a(b.Z,{attrs:{rules:[t=>!!t||"You must agree to continue!"],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(a){t.checkbox=a},expression:"checkbox"}}),a("div",{staticClass:"d-flex justify-center"},[a(v.Z,{attrs:{depressed:""},on:{click:function(a){return t.initSession()}}},[t._v(" Registrate ")])],1)],1)],1)],1)],1)],1)},A=[],j=(e(7658),{data:()=>({dialogCreate:!0,checkbox:!1}),methods:{initSession(){this.$global.initSession(),this.$router.push({name:"Dashboard"}).catch((t=>{console.log(t)}))}}}),P=j,D=(0,u.Z)(P,_,A,!1,null,null,null),F=D.exports,S=e(8819),N=e(5057),E=e(248),J=e(1908),q=e(8942),B=e(2976),M=e(8228),I=e(3551),Q=e(1495),O=e(1969),$=e(5234),V=function(){var t=this,a=t._self._c;return a(g.Z,[a(Z.Z,{attrs:{app:"",dense:"","clipped-left":"",elevation:"0",rounded:""}},[a("span",[t._v(" "+t._s(t.$route.name)+" ")]),a($.Z),a("span",{staticClass:"mx-3"},[a(v.Z,{staticClass:"mx-2",attrs:{icon:"",small:""}},[a(N.Z,{attrs:{small:""}},[t._v(" far fa-bell ")])],1),a(v.Z,{staticClass:"mx-2",attrs:{icon:"",small:""}},[a(N.Z,{attrs:{small:""}},[t._v(" far fa-comment ")])],1)],1),a(Q.Z,{scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:n}){return[a(S.Z,t._g(t._b({attrs:{size:"35",color:"primary"}},"v-avatar",n,!1),e),[a("span",{staticClass:"white--text"},[t._v(" JU ")])])]}}])},[a(f.Z,[a(E.Z,[a(J.Z,[a(q.Z,[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),a(B.km,[a(B.V9,[t._v("John Ubilla")]),a(B.oZ,[t._v("Founder of JBA")])],1)],1),a(y.Z),a(J.Z,{attrs:{link:""},on:{click:function(a){return t.setDarkmode()}}},[a(M.Z,[a(N.Z,[t._v(" far fa-sun ")])],1),a(B.km,[a(B.V9,[t._v("Dark mode")])],1)],1),a(J.Z,{attrs:{link:""}},[a(M.Z,[a(N.Z,[t._v(" fas fa-sign-out-alt ")])],1),a(B.km,[a(B.V9,[t._v("Log out")])],1)],1)],1)],1)],1)],1),a(O.Z,{attrs:{app:"",clipped:"","mini-variant":"","expand-on-hover":""}},[a(E.Z,t._l(t.items,(function(e,n){return a(J.Z,{key:n,attrs:{link:"",to:e.path}},[a(M.Z,[a(N.Z,{attrs:{small:""}},[t._v(t._s(e.icon))])],1),a(B.V9,[t._v(t._s(e.text))])],1)})),1)],1),a(I.Z,[a("router-view")],1)],1)},U=[],T={data:()=>({items:[{text:"Branchs",icon:"fas fa-city",path:"/dashboard/branchs"},{text:"Products",icon:"fab fa-product-hunt",path:"/dashboard/products"},{text:"Post",icon:"fas fa-pager",path:"/dashboard/post"},{text:"Invoice",icon:"fas fa-file-invoice-dollar",path:"/dashboard/invoice"}]}),methods:{setDarkmode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},R=T,z=(0,u.Z)(R,V,U,!1,null,null,null),L=z.exports,K=e(7652),Y=function(){var t=this,a=t._self._c;return a(g.Z,{attrs:{fluid:""}},[a(f.Z,{staticClass:"mb-4"},[a(h.ZB,[a(C.Z,[a(w.Z,{attrs:{cols:"5"}},[a(x.Z,{attrs:{outlined:"",dense:"","hide-details":"",label:"Search brand",clearable:""}})],1),a(w.Z,{attrs:{cols:"4"}}),a(w.Z,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{depressed:""}},[a("span",{staticClass:"mr-2"},[a(N.Z,{attrs:{"x-small":""}},[t._v(" fas fa-plus ")])],1),a("span",[t._v(" Create branch ")])])],1)],1)],1)],1),a(f.Z,[a(K.Z,{attrs:{headers:t.headers,items:t.branchs},scopedSlots:t._u([{key:"item.actions",fn:function({item:e}){return[a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.editItem(e)}}},[t._v(" far fa-edit ")])],1),a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.deleteItem(e)}}},[t._v(" far fa-trash-alt ")])],1)]}}],null,!0)})],1),a(k.Z,{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(f.Z,[a(h.EB,[t._v(" Create ")]),a(y.Z),a(g.Z,{staticClass:"px-5"},[a(x.Z,{staticClass:"mb-4",attrs:{outlined:"",dense:"","hide-details":"auto",label:"Name"}}),a(x.Z,{attrs:{outlined:"",dense:"","hide-details":"auto",label:"Location"}})],1),a(h.h7,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{text:"",color:"error"}},[t._v(" Close ")]),a(v.Z,{attrs:{text:"",color:"success"}},[t._v(" Save ")])],1)],1)],1)],1)},G=[],H={data:()=>({dialog:!1,headers:[{text:"Id",align:"start",value:"id",sorteable:!1},{text:"Name",value:"name",sorteable:!1},{text:"Location",value:"location",sorteable:!1},{text:"Created at",value:"createdAt",sorteable:!1},{text:"Updated at",value:"updatedAt",sorteable:!1},{text:"Actions",value:"actions",sorteable:!1}],branchs:[{id:1,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:2,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:3,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:4,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:5,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:6,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:7,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:8,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:9,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:10,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:11,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:12,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:13,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:14,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"},{id:15,name:"Miraflores #0001",location:"Chediak lote 2C y, Av. Eloy Alfaro, Quito",createdAt:"2022/10/10 14:40:40",updatedAt:"2022/10/10 14:40:40"}]})},W=H,X=(0,u.Z)(W,Y,G,!1,null,null,null),tt=X.exports,at=e(4177),et=e(4944),nt=e(1426),ot=e(1610),it=e(2469),st=e(4544),rt=function(){var t=this,a=t._self._c;return a(g.Z,{attrs:{fluid:""}},[a(f.Z,{staticClass:"mb-4"},[a(h.ZB,[a(C.Z,[a(w.Z,{attrs:{cols:"5"}},[a(x.Z,{attrs:{outlined:"",dense:"","hide-details":"",label:"Search product",clearable:""}})],1),a(w.Z,{attrs:{cols:"4"}}),a(w.Z,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{depressed:""}},[a("span",{staticClass:"mr-2"},[a(N.Z,{attrs:{"x-small":""}},[t._v(" fas fa-plus ")])],1),a("span",[t._v(" Create product ")])])],1)],1)],1)],1),a(f.Z,[a(K.Z,{attrs:{headers:t.headers,items:t.product},scopedSlots:t._u([{key:"item.avatar",fn:function({item:t}){return[a(S.Z,{staticClass:"my-2",attrs:{size:"40"}},[a(it.Z,{attrs:{src:t.avatar}})],1)]}},{key:"item.package",fn:function({item:e}){return[a(ot.Z,{staticStyle:{"max-width":"250px"},attrs:{"return-value":e.package},on:{"update:returnValue":function(a){return t.$set(e,"package",a)},"update:return-value":function(a){return t.$set(e,"package",a)}},scopedSlots:t._u([{key:"input",fn:function(){return[a(f.Z,{attrs:{"max-width":"400px",elevation:"0"}},[a(nt.Z,{attrs:{column:""}},t._l(e.package,(function(e){return a(et.Z,{key:e.uuid,attrs:{small:"",color:t.$global.getRandomColor()}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)]},proxy:!0}],null,!0)},[a("div",{staticClass:"d-flex chipShowPackage"},t._l(e.package,(function(e){return a("div",{key:e.uuid},[a(et.Z,{staticClass:"ma-1",attrs:{color:t.$global.getRandomColor(),small:""}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])]}},{key:"item.totalPrice",fn:function({item:e}){return[a("span",[t._v(" "+t._s(t.convertCurrency(e.totalPrice))+" ")])]}},{key:"item.pvp",fn:function({item:e}){return[a("span",[t._v(" "+t._s(t.convertCurrency(e.pvp))+" ")])]}},{key:"item.actions",fn:function({item:e}){return[a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.editItem(e)}}},[t._v(" far fa-edit ")])],1),a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.deleteItem(e)}}},[t._v(" far fa-trash-alt ")])],1)]}}],null,!0)})],1),a(k.Z,{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(f.Z,[a(h.EB,[t._v(" Create ")]),a(y.Z),a(g.Z,[a(C.Z,{attrs:{justify:"center",align:"center"}},[a(w.Z,{attrs:{cols:"5"}},[a(it.Z,{attrs:{src:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg"}})],1),a(y.Z,{attrs:{vertical:""}}),a(w.Z,{attrs:{cols:"7"}},[a(at.Z,{attrs:{outlined:"",dense:"",label:"name"}}),a(at.Z,{attrs:{outlined:"",dense:"",label:"Brand"}}),a(st.Z,{attrs:{outlined:"",dense:"",label:"Packages"}}),a(x.Z,{attrs:{outlined:"",dense:"",label:"Quantity"}}),a(x.Z,{attrs:{outlined:"",dense:"",label:"Unit Price"}}),a(x.Z,{attrs:{outlined:"",dense:"",label:"Iva"}}),a(x.Z,{attrs:{outlined:"",dense:"",label:"Discount"}})],1)],1)],1),a(y.Z),a(h.h7,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{text:"",color:"error"}},[t._v(" Close ")]),a(v.Z,{attrs:{text:"",color:"success"}},[t._v(" Save ")])],1)],1)],1)],1)},lt=[],ut=e(7632),ct={data:()=>({dialog:!1,headers:[{text:"Avatar",value:"avatar"},{text:"Name",value:"name"},{text:"Brand",value:"brand"},{text:"Packages",value:"package"},{text:"Quantity",value:"quantity"},{text:"Precio Unitario",value:"pvp"},{text:"IVA",value:"iva"},{text:"Discount",value:"discount"},{text:"Total Price",value:"totalPrice"},{text:"Actions",value:"actions"}],product:[{name:"Aceites vegetales",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente tercera"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"},{uuid:(0,ut.Z)(),name:"Fuente secundaria"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Acelga",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Achiote",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Aji fresco",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"ajonjoli",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"albahaca",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"alcachofa",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"alfalfa",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"almeja sin valvas",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"anicillo",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"anis",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"apio",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"arroz",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"artesanias de bambu",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"artesanias de caña",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Artesanias de madera",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Artesanias de paja",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Avena",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Berenjena",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2},{name:"Borojo",brand:"Nestle",avatar:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg",quantity:500,discount:"20%",package:[{uuid:(0,ut.Z)(),name:"Fuente principal"}],pvp:10,iva:"12%",totalPrice:11.2}]}),methods:{convertCurrency(t){const a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return a.format(t)}}},dt=ct,pt=(0,u.Z)(dt,rt,lt,!1,null,"4845cf8a",null),mt=pt.exports,Zt=e(7720),vt=function(){var t=this,a=t._self._c;return a(g.Z,[a(f.Z,{staticClass:"mb-4"},[a(h.ZB,[a(C.Z,[a(w.Z,{attrs:{cols:"5"}},[a(x.Z,{attrs:{outlined:"",dense:"","hide-details":"",label:"Search post",clearable:""}})],1),a(w.Z,{attrs:{cols:"4"}}),a(w.Z,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{depressed:""}},[a("span",{staticClass:"mr-2"},[a(N.Z,{attrs:{"x-small":""}},[t._v(" fas fa-plus ")])],1),a("span",[t._v(" Create post ")])])],1)],1)],1)],1),a(f.Z,[a(K.Z,{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.status",fn:function({item:e}){return[a(Zt.Z,{attrs:{bottom:"",dot:"",inline:"",left:"",overlap:"",color:"online"==e.status?"success":"error"}}),t._v(" "+t._s(e.status)+" ")]}},{key:"item.actions",fn:function({item:e}){return[a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.editItem(e)}}},[t._v(" far fa-edit ")])],1),a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""},on:{click:function(a){return t.deleteItem(e)}}},[t._v(" far fa-trash-alt ")])],1)]}}],null,!0)})],1),a(k.Z,{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(f.Z,[a(h.EB,[t._v(" Create ")]),a(y.Z),a(g.Z,[a("div",{staticClass:"my-4"},[a("span",[t._v(" Uuid: "+t._s(t.generateV4())+" ")])]),a(at.Z,{staticClass:"my-4",attrs:{outlined:"",dense:"","hide-details":"auto",label:"Brand"}}),a(st.Z,{attrs:{outlined:"",dense:"","hide-details":"auto",label:"Status"}})],1),a(h.h7,{staticClass:"d-flex justify-end"},[a(v.Z,{attrs:{text:"",color:"error"}},[t._v(" Close ")]),a(v.Z,{attrs:{text:"",color:"success"}},[t._v(" Save ")])],1)],1)],1)],1)},ft=[],ht={data:()=>({dialog:!0,headers:[{text:"Branch office",value:"branch"},{text:"Uuid",value:"uuid"},{text:"Status",value:"status"},{text:"Actions",value:"actions"}],items:[{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"offline"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"},{branch:(0,ut.Z)(),uuid:(0,ut.Z)(),status:"online"}]}),methods:{generateV4(){return(0,ut.Z)()}}},bt=ht,wt=(0,u.Z)(bt,vt,ft,!1,null,null,null),gt=wt.exports,kt=e(5838),yt=function(){var t=this,a=t._self._c;return a(g.Z,[a(f.Z,{staticClass:"mb-4"},[a(h.ZB,[a(C.Z,[a(w.Z,{attrs:{cols:"auto"}},[t.selected.length>0?a(v.Z,{attrs:{depressed:""}},[a("span",{staticClass:"mr-2"},[t._v(" Send "+t._s(t.selected.length)+" to sri ")]),a(N.Z,{attrs:{small:""}},[t._v(" fas fa-paper-plane ")])],1):t._e()],1),a(w.Z,{attrs:{cols:"5"}},[a(x.Z,{attrs:{outlined:"",dense:"","hide-details":"",label:"Search Invoice",clearable:""}})],1),a(w.Z,{staticClass:"ml-auto",attrs:{cols:"auto"}},[a(v.Z,{attrs:{depressed:""}},[a("span",{staticClass:"mr-2"},[a(N.Z,{attrs:{"x-small":""}},[t._v(" fas fa-plus ")])],1),a("span",[t._v(" Create invoice ")])])],1)],1)],1)],1),a(f.Z,[a(K.Z,{attrs:{headers:t.headers,items:t.items,"show-select":"","item-key":"uuid"},scopedSlots:t._u([{key:"item.client",fn:function({item:a}){return[t._v(" "+t._s(a.client.name)+" ")]}},{key:"item.status",fn:function({item:a}){return[t._v(" "+t._s(a.status.name)+" ")]}},{key:"item.actions",fn:function({item:e}){return[a(v.Z,{attrs:{icon:""},on:{click:function(a){return t.action(e)}}},[a(N.Z,{attrs:{small:""}},[t._v(" fas fa-paper-plane ")])],1),a(v.Z,{attrs:{icon:""}},[a(N.Z,{attrs:{small:""}},[t._v(" far fa-edit ")])],1),a(Q.Z,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:n}){return[a(v.Z,t._g(t._b({attrs:{color:"primary",dark:"",icon:""}},"v-btn",n,!1),e),[a(N.Z,{attrs:{small:""}},[t._v(" fas fa-ellipsis-v ")])],1)]}}],null,!0)},[a(E.Z,{attrs:{dense:""}},[a(J.Z,{attrs:{link:""}},[a(M.Z,[a(N.Z,[t._v(" fas fa-file-pdf ")])],1),a(B.V9,[t._v(" PDF ")])],1),a(J.Z,{attrs:{link:""}},[a(M.Z,[a(N.Z,[t._v(" fas fa-file-csv ")])],1),a(B.V9,[t._v(" Excel ")])],1),a(J.Z,{attrs:{link:""}},[a(M.Z,[a(N.Z,[t._v(" far fa-trash-alt ")])],1),a(B.V9,[t._v(" Remove ")])],1)],1)],1)]}}],null,!0),model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1),a(k.Z,{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(f.Z,[a(kt.Z,{attrs:{dense:""}},[a(v.Z,{attrs:{icon:"",small:""},on:{click:function(a){t.dialog=!1}}},[a(N.Z,{attrs:{small:""}},[t._v(" fas fa-times ")])],1),a($.Z),a(v.Z,{attrs:{text:"",color:"success"}},[t._v(" Save ")])],1),a(g.Z,{attrs:{fluid:""}},[a(f.Z,[a(h.EB,[t._v(" Invoice data ")])],1)],1)],1)],1)],1)},Ct=[],xt={data:()=>({dialog:!0,selected:[],headers:[{text:"No. Document",value:"nmbDocument"},{text:"Client",value:"client"},{text:"Total price",value:"totalPrice"},{text:"Date",value:"date"},{text:"Status",value:"status"},{text:"Actions",value:"actions"}],items:[{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000002",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000003",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000004",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000005",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000006",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000007",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000008",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000009",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000010",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000011",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000012",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000013",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000014",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000015",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}},{uuid:(0,ut.Z)(),nmbDocument:"001-001-000000001",client:{uuid:(0,ut.Z)(),name:"Jordan ubilla"},totalPrice:"20.10",date:new Date,status:{uuid:(0,ut.Z)(),name:"Created"}}]})},_t=xt,At=(0,u.Z)(_t,yt,Ct,!1,null,null,null),jt=At.exports;const Pt={initSession(){localStorage.setItem("sessionKey",(0,ut.Z)())},checkSession(){return!!localStorage.getItem("sessionKey")},getRandomColor(){for(var t="0123456789ABCDEF",a="#",e=0;e<6;e++)a+=t[Math.floor(16*Math.random())];return a}};var Dt=Pt;n.ZP.use(m.ZP);const Ft=[{path:"/",redirect:{name:"Account"}},{path:"/account",name:"Account",component:F,beforeEnter:(t,a,e)=>{var n=Dt.checkSession();n&&e({name:"Dashboard"}),e()}},{path:"/dashboard",name:"Dashboard",component:L,beforeEnter:(t,a,e)=>{var n=Dt.checkSession();n||e({name:"Account"}),e()},children:[{path:"branchs",name:"Branch",component:tt},{path:"products",name:"Products",component:mt},{path:"post",name:"Post",component:gt},{path:"invoice",name:"Invoice",component:jt}]}],St=new m.ZP({mode:"history",base:"/",routes:Ft});var Nt=St,Et=e(629);n.ZP.use(Et.ZP);var Jt=new Et.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),qt=e(2250);n.ZP.use(qt.Z);var Bt=new qt.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}});n.ZP.config.productionTip=!1,n.ZP.prototype.$global=Dt,new n.ZP({router:Nt,store:Jt,vuetify:Bt,render:t=>t(d)}).$mount("#app")}},a={};function e(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(a,n,o,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],i=t[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var u=o();void 0!==u&&(a=u)}}return a}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,o,i]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,n){var o,i,s=n[0],r=n[1],l=n[2],u=0;if(s.some((function(a){return 0!==t[a]}))){for(o in r)e.o(r,o)&&(e.m[o]=r[o]);if(l)var c=l(e)}for(a&&a(n);u<s.length;u++)i=s[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},n=self["webpackChunkfacturerojba"]=self["webpackChunkfacturerojba"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4553)}));n=e.O(n)})();
//# sourceMappingURL=app.e0fce15b.js.map