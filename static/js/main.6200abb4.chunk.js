(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{53:function(e,a,t){"use strict";t.r(a);var n,r,o,s,i,c,u,d=t(0),l=t.n(d),b=t(32),m=t.n(b),h=t(14),j=t(15),p=t(17),g=t(16),x=t(57),O=[{question:"\xbfDe qu\xe9 metal est\xe1n hechas las garras de Wolverine?",a:"Aluminio",b:"Vibranium",c:"Acero",d:"Adamantium",corrrect:"Adamantium"},{question:"\xbfQu\xe9 hechizo us\xf3 Harry para matar a Lord Voldemort?",a:"Expelliarmus",b:"Expecto Patronum",c:"Avada Kedavra",d:"Accio",corrrect:"Expelliarmus"},{question:"Un anillo...",a:"para liberarlos a todos",b:"para llamarlos a todos",c:"para gobernarlos a todos",d:"para destruirlos",corrrect:"para gobernarlos a todos"},{question:"En Assassins Creed, 'Nada es verdad...'",a:"salvo algunas cosas",b:"hasta que se hace realidad",c:"aunque en realidad si",d:"todo est\xe1 permitido",corrrect:"todo est\xe1 permitido"},{question:"\xbfEn qu\xe9 posici\xf3n juega Harry en su equipo de Quidditch?",a:"Cazador",b:"Buscador",c:"Bludger",d:"Guardi\xe1n",corrrect:"Buscador"},{question:"\xbfC\xf3mo se llama el hermano de Mario Bros?",a:"Luigi",b:"Mario Jr",c:"Tony",d:"Honguito",corrrect:"Luigi"},{question:"\xbfQu\xe9 talento m\xe1gico comparte Harry con Voldemort?",a:"Ser un animago",b:"Ser un hablante de p\xe1rsel",c:"Ser un auror",d:"Ser un mort\xedfago",corrrect:"Ser un hablante de p\xe1rsel"},{question:"\xbfC\xf3mo se llama el enemigo de Sonic?",a:"Dr. Malo",b:"Robotech",c:"Tails",d:"Dr. Robotnik",corrrect:"Dr. Robotnik"},{question:"\xbfC\xf3mo se llama la ciudad en la que desenvuelve Resident Evil?",a:"New York",b:"Raccoon City",c:"Metr\xf3polis",d:"Gotam City",corrrect:"Raccoon City"},{question:"\xbfComo se llama la protagonista de la saga de Tom Raider",a:"Jill Valentine",b:"Samus Aran",c:"Lara Croft",d:"Aloy",corrrect:"Lara Croft"},{question:"\xbfA que se le considera 'lag' en un video juego?",a:"Conexi\xf3n mala/inestable de internet",b:"Bajadas abruptas de FPS",c:"Baja carga gr\xe1fica de un video juego",d:"Caerse del servidor",corrrect:"Conexi\xf3n mala/inestable de internet"},{question:"Es Levi-O-sa, no ...",a:"LEVI-o-sa",b:"Levi-O-sa",c:"Levi-o-SA",d:"LEVI-o-SA",corrrect:"Levi-o-SA"},{question:"Cuando se desentierra, \xbfqu\xe9 har\xe1 una mandr\xe1gora?",a:"Baile",b:"Eructo",c:"Reir",d:"Gritar",corrrect:"Gritar"}],q=t(12),f=t(54),v=t(13),y=v.a.div(n||(n=Object(q.a)(["\n    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]))),k=Object(v.a)(x.a)(r||(r=Object(q.a)(["\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);\n    width: 600px;\n"]))),C=v.a.h2(o||(o=Object(q.a)(["\n    padding: 1rem;\n    text-align: center;\n    margin: 0;\n"]))),S=Object(v.a)(x.a.Check)(s||(s=Object(q.a)(["\n    padding: 0;\n    font-size: 1.2rem;\n    margin: 1rem 0;\n"]))),w=Object(v.a)(f.a)(i||(i=Object(q.a)(["\n    background-color: #8e44ad;\n    border:none;\n    width: 100%;\n    font-size: 1.1rem;\n    padding: 1.3rem;\n    &:hover{\n        background-color: #732d91;\n    }\n    &:focus{\n        outline: none;\n        background-color: #5e3370;\n    }\n"]))),A=t(1),z=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;return Object(h.a)(this,t),(e=a.call(this)).handleSubmit=function(a){a.preventDefault(),a.target.reset(),e.state.answerSelect===e.state.question.correct&&e.setState({score:e.state.score+1}),e.state.numberQuestion<O.length?e.componentDidMount():console.log(e.state.score)},e.onChanged=function(a){e.setState({answerSelect:a.currentTarget.value})},e.state={numberQuestion:0,question:{question:"",a:"",b:"",c:"",d:"",correct:""},score:0,answerSelect:""},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=O[this.state.numberQuestion];this.setState({question:{question:e.question,a:e.a,b:e.b,c:e.c,d:e.d,correct:e.corrrect}})}},{key:"render",value:function(){var e=this;return Object(A.jsx)(y,{children:Object(A.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(A.jsxs)(x.a.Group,{className:"mb-3",controlId:"control-radio",style:{padding:"4rem"},children:[Object(A.jsx)(C,{children:this.state.question.question}),Object(A.jsx)(S,{type:"radio",label:this.state.question.a,value:this.state.question.a,name:"respuestas",id:"respuesta1",onChange:this.onChanged}),Object(A.jsx)(S,{type:"radio",label:this.state.question.b,value:this.state.question.b,name:"respuestas",id:"respuesta2",onChange:this.onChanged}),Object(A.jsx)(S,{type:"radio",label:this.state.question.c,value:this.state.question.c,name:"respuestas",id:"respuesta3",onChange:this.onChanged}),Object(A.jsx)(S,{type:"radio",label:this.state.question.d,value:this.state.question.d,name:"respuestas",id:"respuesta4",onChange:this.onChanged})]}),Object(A.jsx)(w,{variant:"primary",type:"submit",onClick:function(){e.setState({numberQuestion:e.state.numberQuestion+1})},children:"Enviar"}),Object(A.jsxs)("h2",{style:{textAlign:"center"},children:[this.state.score,"/",O.length," "]})]})})}}]),t}(d.Component),E=(t(49),t(18)),L=t(3),R=t(56),B=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(A.jsxs)(R.a,{children:[Object(A.jsx)(E.b,{to:"/",className:"nav-link",children:"Home"}),Object(A.jsx)(E.b,{to:"/question",className:"nav-link",children:"Cuestionario friki"}),Object(A.jsx)(E.b,{to:"/about",className:"nav-link",children:"Sobre el formulario"})]})}}]),t}(d.Component),D=t(55),Q=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=v.a.div(c||(c=Object(q.a)(["\n            background-color: #fff;\n            border-radius: 10px;\n            box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);\n            width: 80%;\n            padding: 4rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "])));return Object(A.jsx)(y,{children:Object(A.jsxs)(e,{children:[Object(A.jsx)("h2",{children:"Sobre este formulario"}),Object(A.jsx)("p",{children:"El 25 de mayo se celebra el D\xeda del Orgullo Friki en nuestro pa\xeds. Una celebraci\xf3n surgida en 2006 en Internet y que congrega a toda una comunidad, a priori minoritaria, que no se averg\xfcenza en absoluto de celebrar con orgullo que son frikis.\n                        Gamers, geeks, freaks, weirdos y dem\xe1s miembros de esta comunidad tiene la oportunidad cada 25 de mayo de mostrar al mundo que ser friki es algo por lo que merece la pena sentirse orgulloso. Y es que, aunque muchos no lo reconozcan, todos tenemos un 'friki' interior, en mayor o menor medida, con el que nos sentimos bien -incluso orgullosos- y del que renegar es tan absurdo como poco sano.\n                        Por ello y porque queremos unirnos a esta divertida celebraci\xf3n, hemos elaborado este friki-test con el fin de que compart\xe1is con orgullo aquello que grit\xe1is a los cuatro vientos: \xa1Soy Friki!"}),Object(A.jsx)(D.a,{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--cYgHri3s--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/lepok0cc608byz1aq139.png",rounded:!0,width:"250px",style:{textAlign:"center"}})]})})}}]),t}(d.Component),M=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=v.a.div(u||(u=Object(q.a)(["\n            background-color: #fff;\n            border-radius: 10px;\n            box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);\n            width: 80%;\n            padding: 4rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "])));return Object(A.jsx)(y,{children:Object(A.jsxs)(e,{children:[Object(A.jsx)("h2",{children:"Inicio"}),Object(A.jsx)("p",{children:"Realiza este cuestionario para descrubir que tan friki eres, encontrar\xe1s preguntas de video juegos y de peliculas que un friki de coraz\xf3n ha visto m\xe1s de 2 veces."}),Object(A.jsx)(D.a,{src:"https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png",rounded:!0,width:"250px",style:{textAlign:"center"}}),Object(A.jsx)(E.b,{to:"/question",className:"nav-link",children:"Comienza el formulario aqu\xed"})]})})}}]),t}(d.Component);var N=function(){return Object(A.jsxs)(E.a,{children:[Object(A.jsx)(B,{}),Object(A.jsxs)(L.c,{children:[Object(A.jsx)(L.a,{path:"/",element:Object(A.jsx)(M,{})}),Object(A.jsx)(L.a,{path:"/question",element:Object(A.jsx)(z,{})}),Object(A.jsx)(L.a,{path:"/about",element:Object(A.jsx)(Q,{})})]})]})};m.a.render(Object(A.jsx)(l.a.StrictMode,{children:Object(A.jsx)(N,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.6200abb4.chunk.js.map