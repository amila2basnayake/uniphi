(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9981:function(e,s,t){"use strict";var a=t(5893);t(7294);s.Z=function(e){var s=e.title,t=e.bgImg;return(0,a.jsx)("header",{id:"page-top",className:"blog-banner",style:{backgroundImage:"url(".concat(t,")")},children:(0,a.jsx)("div",{className:"container",id:"blog",children:(0,a.jsx)("div",{className:"row blog-header text-left",children:(0,a.jsx)("div",{className:"col-sm-12",children:(0,a.jsx)("h3",{children:s})})})})})}},4003:function(e,s,t){"use strict";var a=t(5893);t(7294);s.Z=function(e){var s=e.title,t=e.subTitle;return(0,a.jsxs)("div",{className:"base-header",children:[(0,a.jsx)("h3",{children:s}),t&&(0,a.jsx)("p",{children:t})]})}},7676:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var a=t(5893),n=t(7294),i=t(6989),l=t(9981),r=t(5642),c=((0,r.GoogleApiWrapper)({apiKey:"AIzaSyDbOU5JUmNH8BTiOaCiRWPrvdGlapqdD34"})((function(e){return(0,a.jsx)(r.Map,{google:e.google,zoom:10,style:{width:"100%",height:"100%"},initialCenter:{lat:e.latitude,lng:e.longitude},children:(0,a.jsx)(r.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:"/assets/images/map.png"},animation:e.google.maps.Animation.BOUNCE})})})),t(6610)),o=t(5991),d=t(3349),h=t(5255),m=t(6089),u=t(7608);function g(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,u.Z)(e);if(s){var n=(0,u.Z)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return(0,m.Z)(this,t)}}var x=function(e){(0,h.Z)(t,e);var s=g(t);function t(){var e;return(0,c.Z)(this,t),(e=s.call(this)).state={email:"",name:"",subject:"",message:"",email_err:"",name_err:"",subject_err:"",message_err:"",return_msg:"",flag:!1},e.handleChangeEmail=e.handleChangeEmail.bind((0,d.Z)(e)),e.handleChangeName=e.handleChangeName.bind((0,d.Z)(e)),e.handleChangeMessage=e.handleChangeMessage.bind((0,d.Z)(e)),e.handleSubmit1=e.handleSubmit1.bind((0,d.Z)(e)),e}return(0,o.Z)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value});""===e.target.value?this.setState({email_err:"Required Field"}):/(\w+)\s(\w+)/.test(e.target.value)?this.setState({email_err:""}):this.setState({email_err:"Enter Valid Email"})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value}),""===e.target.value?this.setState({name_err:"Required Field"}):this.setState({name_err:""})}},{key:"handleChangeMessage",value:function(e){this.setState({message:e.target.value}),""===e.target.message?this.setState({message_err:"Required Field"}):this.setState({message_err:""})}},{key:"handleSubmit1",value:function(){var e=this;if(console.log("name "+this.state.name),console.log("email "+this.state.email),console.log("subject "+this.state.subject),console.log("message "+this.state.message),""===this.state.name&&this.setState({name_err:"Required Field"}),""===this.state.email&&this.setState({email_err:"Required Field"}),""===this.state.message&&this.setState({message_err:"Required Field"}),""===this.state.name||""===this.state.email||""===this.state.message)this.setState({return_msg:"Fill All First",flag:!0});else{var s=JSON.stringify({senderName:this.state.name,senderEmail:this.state.email,message:this.state.message});console.log(s),fetch("https://5s9y5dlb58.execute-api.ap-southeast-2.amazonaws.com/default/SendContactEmails",{method:"POST",body:s}).then((function(e){if(!e.ok)throw new Error("Error in fetch");return e.json()})).then((function(s){console.log("response "+s),e.setState({return_msg:"Email sent successfully!",flag:!0})})).catch((function(s){console.log("error "+s),e.setState({return_msg:"An unkown error occured!",flag:!1})})),console.log("form "+s),this.setState({return_msg:"Success.",flag:!0})}}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"contact-form",children:[(0,a.jsx)("div",{id:"message",children:this.state.flag?(0,a.jsx)("div",{className:"alert alert-success",children:(0,a.jsx)("strong",{children:this.state.return_msg})}):null}),(0,a.jsxs)("form",{method:"post",id:"contact-form",className:"form-order",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,a.jsx)("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChangeName,className:"con-field",placeholder:"Full Name:"}),(0,a.jsx)("span",{id:"err",children:this.state.name_err})]}),(0,a.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[(0,a.jsx)("input",{type:"text",className:"con-field",value:this.state.email,onChange:this.handleChangeEmail,id:"email",placeholder:"Email:"}),(0,a.jsx)("span",{id:"err",children:this.state.email_err})]}),(0,a.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,a.jsx)("input",{type:"text",className:"con-field",value:this.state.phone,onChange:this.handleChangePhone,id:"phone",placeholder:"Phone:"}),(0,a.jsx)("span",{id:"err",children:this.state.phone_err})]})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-lg-12 col-sm-12",children:[(0,a.jsx)("textarea",{name:"comments",id:"message",value:this.state.message,onChange:this.handleChangeMessage,rows:"6",className:"con-field",placeholder:"Message"}),(0,a.jsx)("span",{id:"err",children:this.state.message_err}),(0,a.jsxs)("div",{className:"submit-area",children:[(0,a.jsx)("button",{type:"button",name:"send",onClick:this.handleSubmit1,className:"submit-contact",value:"Submit",children:"Send Message"}),(0,a.jsx)("div",{id:"simple-msg"})]})]})})]})]})}}]),t}(n.Component),j=t(4003),f=function(){return(0,a.jsx)("section",{className:"contact-section contact_pg_contact",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(j.Z,{title:"Send Us Message",subTitle:" If you would like to contact any of the Customer Services. please fill out the form below. "}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-8 col-sm-12 inner-contact",children:(0,a.jsx)(x,{})}),(0,a.jsx)("div",{className:"col-md-4 col-sm-12",children:(0,a.jsxs)("div",{className:"contact_pg_address",children:[(0,a.jsxs)("div",{className:"single_con_add",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"icon-glyph-226"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"Company Address :"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"3567 New Alaska, us"})})]}),(0,a.jsxs)("div",{className:"single_con_add",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"icon-glyph-334"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"Email Address :"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"connect2.rahan.rahman@gmail.com"})})]}),(0,a.jsxs)("div",{className:"single_con_add",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"icon-glyph-33"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"Contact Us :"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"+61 0407 247 886"})})]}),(0,a.jsxs)("div",{className:"single_con_add",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{class:"fa fa-clock-o","aria-hidden":"true"})}),(0,a.jsx)("p",{children:(0,a.jsx)("span",{children:"Working hours :"})}),(0,a.jsx)("p",{children:(0,a.jsxs)("span",{children:["Mon to Fri 7am-6pm ",(0,a.jsx)("br",{}),"Saturdays 7am to 3pm"]})})]})]})})]})]})})},p=function(){return(0,a.jsx)(n.Fragment,{children:(0,a.jsxs)(i.Z,{pageTitle:"UNIPHI Car wash and Detailing",children:[(0,a.jsx)(l.Z,{bgImg:"/assets/images/img08.jpg",title:"Contact Us"}),(0,a.jsx)(f,{})]})})}},3269:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(7676)}])}},function(e){e.O(0,[774,996,165,989,888,179],(function(){return s=3269,e(e.s=s);var s}));var s=e.O();_N_E=s}]);