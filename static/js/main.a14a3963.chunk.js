(this.webpackJsonpmindit=this.webpackJsonpmindit||[]).push([[0],[,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),c=a(0),s=a.n(c),o=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.call(this)}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"servicesBox",onClick:function(){e.props.setContent(e.props.id)}},s.a.createElement("img",{src:a(23)(""+this.props.src),alt:"imagealt"}),s.a.createElement("h2",null,this.props.title),s.a.createElement("div",null,"viac inform\xe1ci\xed"))}}]),c}(s.a.Component);t.default=o},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),c=a(0),s=a.n(c),o=a(6),u=a.n(o),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(){u()(".content").length>0&&0==this.props.swipeState&&u()("#root").stop().animate({scrollTop:u()(".content").position().top},800,(function(){}))}},{key:"render",value:function(){var e=[{src:s.a.createElement("div",null)},{src:s.a.createElement("div",{className:"content",style:{background:"red",height:"1000px"}})},{src:s.a.createElement("div",{className:"content",style:{background:"blue",height:"1000px"}})},{src:s.a.createElement("div",{className:"content",style:{background:"yellow",height:"1000px"}})},{src:s.a.createElement("div",{className:"content",style:{background:"green",height:"1000px"}})}];return s.a.createElement("div",{className:"servicesContent"},e[this.props.currentContent].src)}}]),a}(s.a.Component);t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(5),l=a(4),c=a(3),s=a(0),o=a.n(s),u=a(7),m=a(8),p=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={currentContent:0},e.setContent=e.setContent.bind(Object(i.a)(e)),e}return Object(r.a)(a,[{key:"setContent",value:function(e){this.setState({currentContent:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"servicesScreen"},o.a.createElement("div",{className:"servicesCont"},o.a.createElement(u.default,{setContent:this.setContent,id:"1",src:"./iconAI.png",title:"AI Hub"}),o.a.createElement(u.default,{setContent:this.setContent,id:"2",src:"./iconData.png",title:"DocuMind rie\u0161enia"}),o.a.createElement(u.default,{setContent:this.setContent,id:"3",src:"./iconAnalysis.png",title:"Procesn\xe9 a IT anal\xfdzy"}),o.a.createElement(u.default,{setContent:this.setContent,id:"4",src:"./iconSolutions.png",title:"V\xfdvoj na mieru"})),o.a.createElement(m.default,{swipeState:this.props.swipeState,currentContent:this.state.currentContent}))}}]),a}(o.a.Component);t.default=p},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(5),l=a(4),c=a(3),s=a(0),o=a.n(s),u=a(11),m=a(12),p=(a(14),[[{id:0,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba",type:"velka supa"},{id:1,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba2",type:"velka supa"},{id:2,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba2",type:"velka supa"}],[{id:3,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba3",type:"velka supa"},{id:4,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba4",type:"velka supa"}],[{id:5,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba5",type:"velka supa"},{id:6,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba6",type:"velka supa"}],[{id:7,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba7",type:"velka supa"},{id:8,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba8",type:"velka supa"}],[{id:9,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba9",type:"velka supa"},{id:10,src:"./sporitelna.png",text:"Urobili sme velku supu pre slovensku sporitelnu bomba10",type:"velka supa"}]]),d=[{id:0,title:"AI Hub"},{id:1,title:"DocuMind Rie\u0161enia"},{id:2,title:"Procesn\xe9 a IT anal\xfdzy"},{id:3,title:"V\xfdvoj na mieru"},{id:4,title:"V\xfdskumn\xe9 projekty"}],v=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={currentScreen:1},e.handleClick=e.handleClick.bind(Object(i.a)(e)),e}return Object(r.a)(a,[{key:"handleClick",value:function(e){this.setState({currentScreen:e})}},{key:"render",value:function(){var e=this,t=p[this.state.currentScreen].map((function(e){return o.a.createElement(m.default,{key:e.id,data:e})})),a=d.map((function(t){return o.a.createElement(u.default,{key:t.id,data:t,onclick:e.handleClick,active:e.state.currentScreen==t.id})}));return o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{className:"referencesScreen"},o.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%"}},o.a.createElement("div",{className:"referencesChooser"},a)),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",marginTop:"50px"}},o.a.createElement("div",{className:"referencesWrapper"},t))))}}]),a}(o.a.Component);t.default=v},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),c=a(0),s=a.n(c),o=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("button",{style:{backgroundColor:this.props.active?"#3487DD":"#9e9e9e",pointerEvents:this.props.active?"none":"auto"},className:"chooserButton",onClick:function(){e.props.onclick(e.props.data.id)}},this.props.data.title)}}]),a}(s.a.Component);t.default=o},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),c=a(0),s=a.n(c),o=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.call(this)}return Object(r.a)(c,[{key:"render",value:function(){return s.a.createElement("div",{className:"referencesCont"},s.a.createElement("img",{src:a(28)(""+this.props.data.src)}),s.a.createElement("p",null,this.props.data.text),s.a.createElement("div",null,this.props.data.type))}}]),c}(s.a.Component);t.default=o},,function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(4),l=a(3),c=a(0),s=a.n(c),o=a(8),u=[{src:s.a.createElement("div",null)},{src:s.a.createElement(o.default,null)},{src:s.a.createElement("div",null)},{src:s.a.createElement("div",null)},{src:s.a.createElement("div",null)}];s.a.Component},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){var n={"./ServicesBox":7,"./ServicesBox.jsx":7,"./ServicesContent":8,"./ServicesContent.jsx":8,"./ServicesScreen":9,"./ServicesScreen.jsx":9,"./iconAI.png":24,"./iconAnalysis.png":25,"./iconData.png":26,"./iconSolutions.png":27};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=23},function(e,t,a){e.exports=a.p+"static/media/iconAI.d417f931.png"},function(e,t,a){e.exports=a.p+"static/media/iconAnalysis.8c40e4df.png"},function(e,t,a){e.exports=a.p+"static/media/iconData.dad177b3.png"},function(e,t,a){e.exports=a.p+"static/media/iconSolutions.33d4da7f.png"},function(e,t,a){var n={"./ChooserButton":11,"./ChooserButton.jsx":11,"./ReferencesCont":12,"./ReferencesCont.jsx":12,"./ReferencesScreen":10,"./ReferencesScreen.jsx":10,"./sporitelna.png":29};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=28},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,a){e.exports=a.p+"static/media/logo.a31a9c89.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),c=(a(22),a(1)),s=a(2),o=a(5),u=a(4),m=a(3),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"homeScreen"},r.a.createElement("h1",{className:"mainHeading "},"Rob\xedme",r.a.createElement("br",null)," skuto\u010dn\xe9",r.a.createElement("span",{className:"AI"}," AI")),r.a.createElement("button",{onClick:function(){return e.props.notifySlider(2)},className:"moreInfo slideHvr"},"viac inform\xe1ci\xed"))}}]),a}(r.a.Component),d=a(9),v=a(16),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={name:"",email:"",phone:"",message:""},e.handleChange=e.handleChange.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"render",value:function(){return r.a.createElement("div",{className:"contactScreen"},r.a.createElement("div",{className:"contactLower"},r.a.createElement("div",{className:"contactForm"},r.a.createElement("h3",null,"Nap\xed\u0161te n\xe1m"),r.a.createElement("p",null,"Nev\xe1hajte n\xe1s kontaktova\u0165 cez tento formul\xe1r!"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.name,name:"name",placeholder:"Meno a priezvisko",onChange:this.handleChange}),r.a.createElement("input",{type:"email",value:this.state.email,name:"email",placeholder:"Emailov\xe1 adresa",onChange:this.handleChange}),r.a.createElement("input",{type:"tel",value:this.state.phone,name:"phone",placeholder:"Telef\xf3nne \u010d\xedslo",onChange:this.handleChange}),r.a.createElement("textarea",{type:"text",value:this.state.message,name:"message",placeholder:"Spr\xe1va",onChange:this.handleChange}),r.a.createElement("input",{className:"submitButton",type:"submit",value:"Odosla\u0165"}))),r.a.createElement("div",{className:"contactUpper"},r.a.createElement("h3",null,"Kontaktn\xe9 \xfadaje"),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"}),r.a.createElement("div",null,"Sl\xe1dkovi\u010dova 23 ",r.a.createElement("br",null)," 974 01 Bansk\xe1 Bystrica")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"}),r.a.createElement("div",null,"Strojn\xedcka 34 ",r.a.createElement("br",null)," 821 05 Bratislava")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:info@mindit.sk"},"info@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:procurement@mindit.sk"},"procurement@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:invoices@mindit.sk"},"invoices@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-phone"}),r.a.createElement("div",null,r.a.createElement("a",{href:"tel:+421918681056"},"+421 918 681 056"))),r.a.createElement("div",{className:"extraInfo"},r.a.createElement("div",null,"I\u010cO: 47367873"),r.a.createElement("div",null,"DI\u010c: 2023833482"),r.a.createElement("div",null,"I\u010c DPH: SK2023833482")))),r.a.createElement("div",{className:"contactUpperMobile"},r.a.createElement("h3",null,"Kontaktn\xe9 \xfadaje"),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"}),r.a.createElement("div",null,"Sl\xe1dkovi\u010dova 23 ",r.a.createElement("br",null)," 974 01 Bansk\xe1 Bystrica")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"}),r.a.createElement("div",null,"Strojn\xedcka 34 ",r.a.createElement("br",null)," 821 05 Bratislava")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:info@mindit.sk"},"info@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:procurement@mindit.sk"},"procurement@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:invoices@mindit.sk"},"invoices@mindit.sk"))),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-phone"}),r.a.createElement("div",null,r.a.createElement("a",{href:"tel:+421918681056"},"+421 918 681 056"))),r.a.createElement("div",{className:"extraInfo"},r.a.createElement("div",null,"I\u010cO: 47367873"),r.a.createElement("div",null,"DI\u010c: 2023833482"),r.a.createElement("div",null,"I\u010c DPH: SK2023833482"))))}}]),a}(r.a.Component),f=a(10),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){console.log(this.props.swipeState);var e=[{src:r.a.createElement("div",{className:"blackScreen"})},{src:r.a.createElement(p,{notifySlider:this.props.notifySlider})},{src:r.a.createElement(d.default,{swipeState:this.props.swipeState})},{src:r.a.createElement("div",{className:"greenScreen"})},{src:r.a.createElement(f.default,{swipeState:this.props.swipeState})},{src:r.a.createElement(E,null)}];switch(this.props.swipeState){case 0:return r.a.createElement("div",{style:{marginLeft:"-100%",transition:"none"},className:"sliderCont"},r.a.createElement("div",{className:"blankScreen"}),e[this.props.currentScreen].src,r.a.createElement("div",{className:"blankScreen"}));case 1:return r.a.createElement("div",{style:{marginLeft:"0%",transition:"all .5s"},className:"sliderCont"},e[this.props.currentScreen].src,e[this.props.previousScreen].src,r.a.createElement("div",{className:"blankScreen"}));case 2:return r.a.createElement("div",{style:{marginLeft:"-200%",transition:"all .5s"},className:"sliderCont"},r.a.createElement("div",{className:"blankScreen"}),e[this.props.previousScreen].src,e[this.props.currentScreen].src)}}}]),a}(r.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("a",{className:"menuclick",onClick:function(){e.props.click(e.props.id)}},r.a.createElement("li",{className:"menuitem ",style:{color:this.props.active?"#3487DD":"white",pointerEvents:this.props.active?"none":"auto"}},this.props.name))}}]),a}(r.a.Component),b=a(30),S=[{id:2,name:"Na\u0161e Slu\u017eby"},{id:3,name:"Vyu\u017eitie"},{id:4,name:"Referencie"},{id:5,name:"Kontakt"}],y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=S.map((function(t){return r.a.createElement(k,{key:t.id,id:t.id,click:e.props.notifySlider,name:t.name,active:t.id==e.props.activeSlide})}));return r.a.createElement("nav",{id:"navbar"},r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{htmlFor:"check",className:"checkbtn"},r.a.createElement("div",{className:"menubars"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("img",{onClick:function(){e.props.notifySlider(1)},src:b,alt:"MindIT logo",className:"logo-mobile"}),r.a.createElement("ul",{className:"menu"},r.a.createElement("a",{onClick:function(){e.props.notifySlider(1)},style:{display:"inline"}},r.a.createElement("img",{src:b,alt:"MindIT logo",className:"logo"})),t))}}]),a}(r.a.Component),O=(a(14),a(6)),C=a.n(O),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={visible:!1},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;C()("#root").on("scroll",(function(){C()("#root").scrollTop()>30?e.state.visible||e.setState({visible:!0}):e.state.visible&&e.setState({visible:!1})}))}},{key:"componentWillUnmount",value:function(){C()("#root").off("scroll",(function(){}))}},{key:"slideUp",value:function(){C()("#root").animate({scrollTop:0},800,(function(){}))}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"slideUpButton",style:{opacity:this.state.visible?"1":"0"},onClick:function(){return e.slideUp()}},r.a.createElement("i",{className:"fas fa-arrow-up fa-2x"}))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={currentScreen:1,previousScreen:0,swipeState:0},e.avoidClick=!1,e.notifySlider=e.notifySlider.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"notifySlider",value:function(e){window.slideID==e||window.avoidClick||(window.slideID=e,this.setState({activeSlide:e}),this.handleSwipe(e))}},{key:"handleSwipe",value:function(e){var t=this;this.avoidClick||(window.avoidClick=!0,this.setState((function(a){return e<t.state.currentScreen?{previousScreen:a.currentScreen,swipeState:1,currentScreen:e}:{previousScreen:a.currentScreen,swipeState:2,currentScreen:e}})),this.avoidClick=!0,setTimeout((function(){t.setState({swipeState:0}),t.avoidClick=!1,window.avoidClick=!1}),500))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{activeSlide:this.state.currentScreen,notifySlider:this.notifySlider}),r.a.createElement("div",{className:"header"},r.a.createElement(h,{currentScreen:this.state.currentScreen,previousScreen:this.state.previousScreen,swipeState:this.state.swipeState,notifySlider:this.notifySlider})),r.a.createElement(g,null))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a14a3963.chunk.js.map