(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),c=a.n(r),o=(a(14),a(8)),l=a(5),i=a(1),u=a(2),m=a(4),h=a(3),d=s.a.createRef(),p=a(15).default,f=window.location.origin+"/",v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).ref=s.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.animationDelay=setTimeout((function(){e.ref.current.classList.remove("text-hidden")}),1e3)}},{key:"render",value:function(){return s.a.createElement("header",{ref:this.ref,className:"text-hidden"},s.a.createElement("div",{className:"header-content"},s.a.createElement("nav",{className:"site-nav"},s.a.createElement("ul",{className:"site-nav-list"},s.a.createElement("li",null," ",s.a.createElement("a",{href:"#photo"}," \u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f ")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#test"}," \u0422\u0435\u0441\u0442 \u043d\u0430 \u0437\u043d\u0430\u043d\u043d\u044f \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430 ")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#video"}," \u0412\u0456\u0434\u0435\u043e ")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#history"}," \u041a\u043e\u0440\u043e\u0442\u043a\u0430 \u0456\u0441\u0442\u043e\u0440\u0456\u044f \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430 ")," "))),s.a.createElement("div",{className:"text-box"},s.a.createElement("h1",null,"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0435 \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u043e"),s.a.createElement("p",{className:"info-text"},"\u0417\u0417\u0421\u041e \u2116235 \u0456\u043c.\u0412.\u0427\u043e\u0440\u043d\u043e\u0432\u043e\u043b\u0430"))))}}]),a}(s.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={album:e.album,photosData:e.photosData.albumsList,currentGroup:1},n.photosPerGroup=9,n.photosList=n.state.photosData.find((function(e){return e.name===n.state.album})).photosList,n.handleClick=n.handleClick.bind(Object(l.a)(n)),n.openPhoto=n.openPhoto.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.target.classList.contains("forward")?this.setState({currentGroup:this.state.currentGroup+1}):e.target.classList.contains("back")&&this.setState({currentGroup:this.state.currentGroup-1})}},{key:"renderGroup",value:function(e){var t=this;return this.photosList.slice(e*this.photosPerGroup-this.photosPerGroup,e*this.photosPerGroup).map((function(e,a){return s.a.createElement("div",{key:e,className:"photo-wrapper"}," ",s.a.createElement("img",{className:"photo",width:"400",alt:e+" "+a,src:f+"photos/"+t.state.album+"/"+e})," ")}))}},{key:"openPhoto",value:function(e){e.target.classList.contains("photo")&&e.target.src&&this.setState({openImage:!0,image:e.target.src})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.state.openImage&&s.a.createElement("div",{className:"photo-view"},s.a.createElement("div",{className:"photo-box"},s.a.createElement("button",{onClick:function(){return e.setState({openImage:!1})},className:"close-photo"}),s.a.createElement("img",{src:this.state.image,alt:"view"}))),s.a.createElement("div",{className:"photos-gallery",onClick:this.openPhoto,onLoad:function(e){e.target.style.opacity=1}},this.renderGroup(this.state.currentGroup)),!this.state.openImage&&s.a.createElement("div",{className:"gallery-menu"},this.state.currentGroup>=2&&s.a.createElement("button",{onClick:function(t){return e.handleClick(t)},className:"back"}),this.photosList.length>=this.state.currentGroup*this.photosPerGroup&&s.a.createElement("button",{onClick:function(t){return e.handleClick(t)},className:"forward"})))}}]),a}(s.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,jsonData:[],isLoaded:!1,showPhotos:!1,album:null},n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){"open-album-btn"===e.target.className&&this.setState({showPhotos:!0,album:e.target.getAttribute("album")})}},{key:"componentDidMount",value:function(){var e=this;fetch(f+"photos/data.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,jsonData:t})}),(function(t){e.setState({isLoaded:!1,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.jsonData,r=t.isLoaded;return a?(console.log(a),s.a.createElement("h3",{className:"message-text"},"\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f")):r?this.state.showPhotos||this.state.album?s.a.createElement(s.a.Fragment,null," ",s.a.createElement("button",{className:"close-btn",onClick:function(){return e.setState({showPhotos:!1,album:null})}})," ",s.a.createElement(E,{album:this.state.album,photosData:this.state.jsonData})," "):s.a.createElement("div",{onClick:this.handleClick,className:"gallery-box"},n.albumsList.map((function(e,t){return s.a.createElement(g,{key:t+"",album:e})}))):s.a.createElement("h3",{className:"message-text"},"Loading...")}}]),a}(s.a.Component),g=function(e){var t=e.album,a=t.name.length<15?t.name:t.name.split("").splice(0,20).join("")+"...",n=t.photosList,r=f+"photos/"+t.name;return s.a.createElement("div",{className:"gallery-item"},s.a.createElement("img",{className:"preview-image",alt:n[0],width:"400",src:r+"/"+n[0]}),s.a.createElement("div",{className:"info-box"},s.a.createElement("p",{className:"album-title"},a),s.a.createElement("p",{className:"photosCount"},n.length<999?n.length:">999"),s.a.createElement("button",{album:t.name,className:"open-album-btn"},"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438")))},j=function(){var e=!1,t=function(e,t){var a=s.a.useRef();return s.a.useEffect((function(){new IntersectionObserver((function(e){var a=Object(o.a)(e,1)[0].isIntersecting;a&&t(a)}),e).observe(a.current)}),[a,e,t,!1]),a}({root:null,rootMargin:"0px",threshold:.1},(function(t){e||t&&(p({targets:".emblem-of-Ukraine path",strokeDashoffset:[p.setDashoffset,0],easing:"easeInOutSine",delay:500,duration:3500,loop:!1,autoplay:!1}).play(),e=!0)}));return s.a.createElement("section",{className:"gallery",id:"photo"},s.a.createElement("h2",{className:"section-title"},"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f"),s.a.createElement("div",{className:"content-box",ref:d},s.a.createElement(b,null),s.a.createElement("svg",{className:"emblem-of-Ukraine",ref:t,stroke:"#272b4b",strokeWidth:"3",fill:"none",strokeLinecap:"round",version:"1.1",viewBox:"0 0 612 792",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"m229.32 545c0 0.564 0.019 1.124 0.027 1.686h26.348c-0.021-0.702-0.037-1.407-0.045-2.111-0.01-0.58-0.018-1.16-0.019-1.739-0.02-8.752 1.993-17.254 2.233-20.567 6.917-50.522 39.9-72.145 40.603-72.6 2.275 1.966 34.573 28.195 40.717 73.271 0.232 3.308 2.09 11.883 2.199 20.641 0.016 0.581 0.023 1.163 0.021 1.746-2e-3 0.453-8e-3 0.906-0.016 1.359h26.287c0.01-0.562 0.027-1.121 0.027-1.686 0-44.438-18.871-75.975-36.902-95.973h0.514c-15.414-32.495-18.191-68.848-16.604-104.93 1.518-34.486 2.652-78.986 3.951-113.48 0.709-18.846-3.809-36.292-16.58-51.511-0.774-0.922-3.188-3.236-3.849-3.659 0 0-3.071 2.771-3.843 3.69-12.771 15.22-17.288 32.665-16.579 51.51 1.298 34.493 2.433 78.993 3.951 113.48 1.579 35.907-0.087 72.666-15.955 104.69-17.903 19.767-36.486 51.129-36.486 96.181z"}),s.a.createElement("path",{d:"m447.33 224.63c-0.759 0.11-1.285 0.074-1.705 0.269-1.205 0.558-2.409 1.141-3.54 1.833-15.479 9.479-28.864 21.331-40.152 35.547-22.653 28.53-33.69 61.319-36.552 97.377-1.523 19.211-4.318 38.32-6.472 57.482-1.089 9.687-2.024 19.39-3.038 29.166 9.51-1.566 16.893 1.918 23.221 7.676 8.662 7.883 10.098 20.648 2.687 29.734-3.39 4.156-8.524 7.114-13.327 9.906-0.18 0.104-0.356 0.203-0.53 0.297 2.668 7.489 4.84 15.567 6.324 24.246 0.563-0.206 1.167-0.426 1.513-0.547 20.106-7.053 32.49-20.742 35.523-42.1 2.582-18.186-7.431-37.465-24.464-47.231-2.907-1.667-3.829-3.229-3.417-6.576 2.615-21.288 5.39-42.569 7.321-63.925 1.789-19.779 7.316-38.067 15.954-56.049 4.029-8.389 15.475-25.107 15.475-25.107s0 187.09 0 280.14h-101.05v22.549h16.932c-5.077 24.299-17.379 40.557-26.932 49.984v-76.666c1.428-5.992 5.944-14.009 19.416-18.04 0.679-0.203 1.356-0.438 2.035-0.674-0.439-3.59-0.921-6.534-1.022-8.118-0.653-5.273-1.614-10.194-2.787-14.796-2.343 0.743-4.286 1.382-5.673 1.884-8.488 3.068-21.69 14.162-24.518 16.448-2.827-2.286-16.029-13.38-24.517-16.448-1.387-0.502-3.331-1.141-5.673-1.884-1.172 4.602-2.134 9.522-2.787 14.796-0.102 1.584-0.583 4.528-1.022 8.118 0.678 0.236 1.356 0.471 2.035 0.674 13.219 3.956 17.815 11.75 19.333 17.702v76.713c-9.503-9.574-21.74-25.889-26.873-49.694h17.039v-22.549h-101.22v-280.14s11.445 16.719 15.475 25.107c8.638 17.981 14.165 36.27 15.954 56.049 1.932 21.355 4.706 42.637 7.321 63.925 0.412 3.348-0.51 4.909-3.417 6.576-17.033 9.767-27.046 29.046-24.464 47.231 3.033 21.357 15.417 35.047 35.523 42.1 0.33 0.116 0.895 0.321 1.437 0.52 1.444-8.736 3.564-16.845 6.176-24.344-0.102-0.057-0.202-0.112-0.306-0.172-4.803-2.792-9.938-5.75-13.327-9.906-7.411-9.086-5.976-21.852 2.687-29.734 6.328-5.758 13.711-9.242 23.221-7.676-1.014-9.776-1.949-19.479-3.038-29.166-2.153-19.162-4.948-38.271-6.472-57.482-2.861-36.058-13.898-68.847-36.552-97.377-11.288-14.216-24.673-26.067-40.152-35.547-1.131-0.692-2.335-1.275-3.54-1.833-0.42-0.194-0.946-0.158-1.705-0.269v354.69h82.278c12.65 59.656 66.543 86.531 66.543 86.531s54.168-25.693 66.641-86.531h82.183v-354.69z"}))))},k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentQuestion:0,constentIsLoaded:!1,error:null,jsonData:null,completed:!1},n.chosed=n.chosed.bind(Object(l.a)(n)),n.result=0,n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.target.classList.contains("try-again")&&(this.setState({completed:!1,currentQuestion:0}),this.result=0)}},{key:"check",value:function(e){if(e&&this.result++,this.state.currentQuestion>=this.state.jsonData.length-1)return console.log(this.result),!0}},{key:"chosed",value:function(e){e.target.classList.contains("quiz-input")&&(e.target.checked=!1,this.check(this.state.jsonData[this.state.currentQuestion].answers[+e.target.id].isRight)?(this.setState({completed:!0}),console.log("finished")):this.setState({currentQuestion:this.state.currentQuestion+1}))}},{key:"componentDidMount",value:function(){var e=this;fetch(f+"quiz/questions.json").then((function(e){return e.json()})).then((function(t){e.setState({jsonData:t,constentIsLoaded:!0})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e;if(this.state.error)e=s.a.createElement("h3",{className:"message-text"},"\u041f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430");else if(this.state.constentIsLoaded&&this.state.jsonData&&!this.state.completed)e=s.a.createElement("div",{className:"quiz-box"},s.a.createElement("p",{className:"question-text"},this.state.jsonData[this.state.currentQuestion].question),s.a.createElement("div",{className:"answers-field"},this.state.jsonData[this.state.currentQuestion].photo&&s.a.createElement("div",{className:"quiz-photo-wrapper"}," ",s.a.createElement("img",{className:"quiz-img",style:{opacity:0},onLoad:function(e){return e.target.style.opacity=1},alt:" ",src:f+"/quiz/photos/"+this.state.jsonData[this.state.currentQuestion].photo})," "),s.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},this.state.jsonData[this.state.currentQuestion].answers.map((function(e,t){return s.a.createElement("label",{key:t,className:"answer"}," ",s.a.createElement("input",{id:t,className:"quiz-input",name:"question",type:"radio"})," ",e.text)})))));else if(this.state.completed){var t=this.result/this.state.jsonData.length;e=s.a.createElement("div",{className:"finished"},s.a.createElement("h2",{className:"finished-main-text"},"\u0412\u0456\u0442\u0430\u044e \u0442\u0435\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e!"),s.a.createElement("p",{className:"text"},"\u041e\u0441\u044c \u0442\u0432\u0456\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),s.a.createElement("p",{className:"result-text"},this.result+"/"+this.state.jsonData.length),s.a.createElement("div",{className:"success-bar"},s.a.createElement("div",{style:{width:100*t+"%"},className:"success-scale"})),s.a.createElement("button",{onClick:this.handleClick,className:"try-again"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437"))}else this.state.constentIsLoaded||(e=s.a.createElement("h3",null,"Loading..."));return s.a.createElement("section",{className:"quiz-section",onChange:this.chosed,id:"test"},s.a.createElement("h2",{className:"section-title"},"\u0422\u0435\u0441\u0442 \u043d\u0430 \u0437\u043d\u0430\u043d\u043d\u044f \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430"),e)}}]),a}(s.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:null,isLoaded:!1,error:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(f+"videos-list.json").then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoaded:!0})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e;return this.state.error?e=s.a.createElement("h3",{className:"message-text"},"\u041f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430"):this.state.data&&this.state.isLoaded&&(e=this.state.data.map((function(e,t){return s.a.createElement("iframe",{key:t,title:"Video-"+t,width:"560",height:"315",src:e,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}))),s.a.createElement("section",{className:"video-section",id:"video"},s.a.createElement("h2",{className:"section-title"},"\u0412\u0456\u0434\u0435\u043e"),s.a.createElement("div",{className:"video-container"},e))}}]),a}(s.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={props:e},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"history-card"},s.a.createElement("div",{className:"photo-wrapper"},s.a.createElement("img",{alt:"history",src:this.props.image})),s.a.createElement("p",{className:"history-text"},this.props.text))}}]),a}(s.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("p",null,"Developed by ",s.a.createElement("b",null,"Andrey Artemenko")))}}]),a}(s.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={props:e},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{className:"history-section",id:"history"},s.a.createElement("h2",{className:"section-title"},"\u041a\u043e\u0440\u043e\u0442\u043a\u0430 \u0456\u0441\u0442\u043e\u0440\u0456\u044f \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430"),s.a.createElement(y,{text:"\u0412\u0438\u043d\u0438\u043a\u043b\u043e \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u043e \u0443 XV \u0441\u0442\u043e\u043b\u0456\u0442\u0442\u0456 \u0456 \u043e\u0437\u043d\u0430\u0447\u0430\u043b\u043e \u043d\u0430\u0437\u0432\u0443 \u0443\u0441\u0456\u0445 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0445 \u043a\u043e\u0437\u0430\u043a\u0456\u0432.",image:f+"/cossacks/\u041a\u043e\u0437\u0430\u043a\u0438-\u0432-\u0441\u0442\u0435\u043f\u0443-\u043d\u0430-\u043a\u043e\u043d\u044f\u0445.jpg"}),s.a.createElement(y,{text:"\u041f\u043e\u044f\u0432\u0430 \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430 - \u0446\u0435 \u0440\u0435\u0430\u043a\u0446\u0456\u044f \u043d\u0430 \u043f\u043e\u0441\u0438\u043b\u0435\u043d\u043d\u044f \u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e-\u0440\u0435\u043b\u0456\u0433\u0456\u0439\u043d\u0438\u0445 \u0442\u0430 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e-\u0435\u043a\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0438\u0445 \u0443\u0442\u0438\u0441\u043a\u0456\u0432 \u0443\u043a\u0440\u0430\u0457\u043d\u0446\u0456\u0432 \u0437 \u0431\u043e\u043a\u0443 \u043a\u0430\u0442\u043e\u043b\u0438\u0446\u044c\u043a\u043e\u0457 \u0446\u0435\u0440\u043a\u0432\u0438, \u043f\u043e\u043b\u044c\u0441\u044c\u043a\u043e\u0457 \u0442\u0430 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0457 \u0448\u043b\u044f\u0445\u0442\u0438.",image:f+"/cossacks/Rozgrom-povstantsiv-Uota-Tajlera.jpg"}),s.a.createElement(y,{text:"\u0428\u0443\u043a\u0430\u044e\u0447\u0438 \u043c\u0456\u0441\u0446\u0435 \u0434\u043b\u044f \u0432\u0456\u043b\u044c\u043d\u043e\u0457 \u043f\u0440\u0430\u0446\u0456 \u043c\u0456\u0449\u0430\u043d\u0438 \u0456 \u0441\u0435\u043b\u044f\u043d\u0438 \u0440\u043e\u0437\u043f\u043e\u0447\u0430\u043b\u0438 \u043a\u043e\u043b\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044e \u043f\u0456\u0432\u0434\u0435\u043d\u043d\u043e-\u0441\u0445\u0456\u0434\u043d\u0438\u0445 \u043c\u0430\u043b\u043e \u0437\u0430\u043b\u044e\u0434\u043d\u0435\u043d\u0438\u0445 \u0441\u0442\u0435\u043f\u0456\u0432. \u0422\u0430\u043c \u0432\u043e\u043d\u0438 \u0437\u0430\u0441\u043d\u043e\u0432\u0443\u0432\u0430\u043b\u0438 \u043d\u043e\u0432\u0456 \u043f\u043e\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0456 \u043e\u0433\u043e\u043b\u043e\u0448\u0443\u0432\u0430\u043b\u0438 \u0441\u0435\u0431\u0435 \u043a\u043e\u0437\u0430\u043a\u0430\u043c\u0438 - \u0432\u0456\u043b\u044c\u043d\u0438\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438.  \u041f\u0456\u0434 \u043d\u0430\u0442\u0438\u0441\u043a\u043e\u043c \u043f\u0430\u043d\u0441\u044c\u043a\u043e\u0457 \u043a\u043e\u043b\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u0457,  \u044f\u043a\u0430 \u043f\u043e\u0448\u0438\u0440\u0438\u043b\u0430\u0441\u044c \u0443\u0441\u043b\u0456\u0434 \u0441\u0435\u043b\u044f\u043d\u0441\u044c\u043a\u0456\u0439, \u0434\u0435\u044f\u043a\u0430 \u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u043a\u043e\u0437\u0430\u043a\u0456\u0432 \u0432\u0456\u0434\u0456\u0439\u0448\u043b\u0430 \u0437\u0430 \u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0456  \u043f\u043e\u0440\u043e\u0433\u0438 (\u041d\u0438\u0437), \u0434\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u043b\u0430 \u0443 \u043f\u0435\u0440\u0448\u0456\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0456 XVI \u0441\u0442\u043e\u043b\u0456\u0442\u0442\u044f \u0417\u0430\u043f\u043e\u0440\u0456\u0437\u044c\u043a\u0443 \u0421\u0456\u0447 (\u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u044f \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0433\u043e \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430).  \u0417\u0430\u0439\u043c\u0430\u043b\u0438\u0441\u044f \u043d\u0438\u0437\u043e\u0432\u0456 \u043a\u043e\u0437\u0430\u043a\u0438 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u043f\u0440\u043e\u043c\u0438\u0441\u043b\u0430\u043c\u0438, \u0441\u043a\u043e\u0442\u0430\u0440\u0441\u0442\u0432\u043e\u043c, \u0440\u0438\u0431\u0430\u043b\u044c\u0441\u0442\u0432\u043e\u043c - \u0432\u0441\u0435 \u0446\u0435 \u0432 \u0443\u043c\u043e\u0432\u0430\u0445 \u043f\u043e\u0441\u0442\u0456\u0439\u043d\u043e\u0457 \u0431\u043e\u0440\u043e\u0442\u044c\u0431\u0438 \u0437  \u0442\u0430\u0442\u0430\u0440\u0430\u043c\u0438 \u0456 \u0442\u0443\u0440\u043a\u0430\u043c\u0438.",image:f+"/cossacks/unnamed.jpg"}),s.a.createElement(y,{text:"\u0423\u0440\u044f\u0434 \u0446\u0430\u0440\u0441\u044c\u043a\u043e\u0457 \u0420\u043e\u0441\u0456\u0457 \u0443 1775 \u0440\u043e\u0446\u0456 \u0437\u0440\u0443\u0439\u043d\u0443\u0432\u0430\u0432 \u0417\u0430\u043f\u043e\u0440\u0456\u0437\u044c\u043a\u0443 \u0421\u0456\u0447.  \u041e\u0434\u043d\u0430 \u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u043a\u043e\u0437\u0430\u043a\u0456\u0432 \u043f\u043e\u043a\u0438\u043d\u0443\u043b\u0430 \u043c\u0435\u0436\u0456 \u0420\u043e\u0441\u0456\u0457 \u0456 \u0437\u0430\u0441\u043d\u0443\u0432\u0430\u043b\u0430 \u0417\u0430\u0434\u0443\u043d\u0430\u0439\u0441\u044c\u043a\u0443 \u0421\u0456\u0447 \u043d\u0430 \u0442\u0435\u0440\u0438\u0442\u043e\u0440\u0456\u0457,  \u0449\u043e \u0431\u0443\u043b\u0430 \u043f\u0456\u0434\u0432\u043b\u0430\u0434\u043d\u0430 \u0422\u0443\u0440\u0435\u0447\u0447\u0438\u043d\u0456, \u0430 \u0456\u043d\u0448\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u043a\u043e\u0437\u0430\u043a\u0456\u0432 \u0431\u0443\u043b\u043e \u043f\u043e\u043a\u0440\u0456\u043f\u0430\u0447\u0435\u043d\u043e.",image:f+"/cossacks/unnamed1.jpg"}),s.a.createElement(y,{text:"\u0423 \u0432\u0456\u0442\u0447\u0438\u0437\u043d\u044f\u043d\u0456\u0439 \u0456\u0441\u0442\u043e\u0440\u0456\u0457 \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u043e \u0432\u0456\u0434\u0456\u0433\u0440\u0430\u043b\u043e \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u0443 \u0440\u043e\u043b\u044c,  \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u0432\u043f\u043b\u0438\u0432 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u0442\u043d\u0456\u0447\u043d\u043e\u0457 \u0441\u0430\u043c\u043e\u0441\u0432\u0456\u0434\u043e\u043c\u043e\u0441\u0442\u0456,  \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u0447\u043d\u0438\u0445 \u0440\u0438\u0441 \u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u043e-\u043f\u043e\u0431\u0443\u0442\u043e\u0432\u043e\u0457 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0438 \u0456 \u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0443 \u043d\u0430\u0440\u043e\u0434\u0443 \u0423\u043a\u0440\u0430\u0457\u043d\u0438.  \u0421\u0430\u043c \u0444\u0430\u043a\u0442 \u0439\u043e\u0433\u043e \u0456\u0441\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430\u0434\u0438\u0445\u0430\u0432 \u0443\u043a\u0440\u0430\u0457\u043d\u0446\u0456\u0432 \u043d\u0430 \u0431\u043e\u0440\u043e\u0442\u044c\u0431\u0443 \u0437\u0430 \u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0443 \u043d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0442\u0430 \u043f\u0440\u043e\u0442\u0438  \u0444\u0435\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043d\u043e\u0431\u043b\u0435\u043d\u043d\u044f.",image:f+"/cossacks/Titul_kozaki.jpg"}),s.a.createElement(y,{text:"\u041a\u043e\u0437\u0430\u0446\u044c\u043a\u0435 \u0432\u0456\u0439\u0441\u044c\u043a\u043e \u0432\u0456\u0434\u0437\u043d\u0430\u0447\u0430\u043b\u043e\u0441\u044f \u0441\u0443\u0432\u043e\u0440\u043e\u044e \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0456\u043d\u043e\u044e, \u0432\u0438\u0442\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044e, \u0441\u0442\u0456\u0439\u043a\u0456\u0441\u0442\u044e \u0443 \u0431\u043e\u044f\u0445.  \u0422\u0430\u043a\u043e\u0436 \u043a\u043e\u0437\u0430\u043a\u0430\u043c \u0431\u0443\u043b\u0438 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456 \u0432\u0437\u0430\u0454\u043c\u043e\u0432\u0438\u0440\u0443\u0447\u043a\u0430 \u0456 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0430.  \u0421\u0442\u0430\u043b\u0438 \u0432\u0437\u0456\u0440\u0446\u0435\u043c \u0434\u043b\u044f \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u043f\u043e\u043a\u043e\u043b\u0456\u043d\u044c \u0443\u043a\u0440\u0430\u0457\u043d\u0446\u0456\u0432 \u0432\u0438\u0441\u043e\u043a\u0456 \u043c\u043e\u0440\u0430\u043b\u044c\u043d\u0456 \u0456\u0434\u0435\u0430\u043b\u0438 \u0456 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0438 \u043a\u043e\u0437\u0430\u0446\u0442\u0432\u0430.",image:f+"/cossacks/unnamed3.jpg"}))}}]),a}(s.a.Component);var x=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,null),s.a.createElement("main",null,s.a.createElement(j,null),s.a.createElement(k,null),s.a.createElement(N,null),s.a.createElement(w,null)),s.a.createElement(O,null))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.db329d86.chunk.js.map