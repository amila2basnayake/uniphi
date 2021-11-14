import React,{Component} from 'react'; 
import { ClientDefaults } from "@aws-sdk/client-ses";
 
class ContactForm extends Component{



    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
        // this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg =  /(\w+)\s(\w+)/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      // handleChangeSubject(e){
      //   this.setState({subject:  e.target.value});
      //     if(e.target.value === '') 
      //       this.setState({subject_err: 'Required Field'});
      //     else 
      //       this.setState({subject_err: ''});
      // }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      handleSubmit1()
      {



       console.log("name "+this.state.name);
       console.log("email "+this.state.email);
       console.log("subject "+this.state.subject);
       console.log("message "+this.state.message);
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          // if(this.state.subject === '')
          //    this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.email === '' ||  this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
              const endpoint =
    "https://5s9y5dlb58.execute-api.ap-southeast-2.amazonaws.com/default/SendContactEmails";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: this.state.name,
    senderEmail: this.state.email,
    message:this.state.message
  });
  console.log(body);
  const requestOptions = {
    method: "POST",
    body
  };
  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      console.log("response "+response);
      this.setState({return_msg: 'Email sent successfully!', flag: true});
     // document.getElementById("result-text").innerText =
       // "Email sent successfully!";
    })
    .catch((error) => {
      console.log("error "+error);
      this.setState({return_msg: 'An unkown error occured!', flag: false});
      //document.getElementById("result-text").innerText =
      //  "An unkown error occured.";
    });
              console.log("form "+body);
                this.setState({return_msg: 'Success.', flag: true});
             }
      }
    render(){

    return(
  
        <div className="contact-form">
          <div id="message">
              {this.state.flag ? 
                    <div className="alert alert-success">
                    <strong>{this.state.return_msg}</strong>
                    </div>
                : null}
          </div> 
          <form method="post" id="contact-form" className="form-order">
                <div className="row"> 
                  <div className="col-lg-6 col-sm-12"> 
                      <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} className="con-field" placeholder="Full Name:" /> 
                      <span id="err">{this.state.name_err}</span>
                  </div>
                  <div className="col-lg-6 col-sm-12"> 
                      <input type="text" className="con-field" value={this.state.email} onChange={this.handleChangeEmail} id="email" placeholder="Email:" />
                      <span id="err">{this.state.email_err}</span>
                  </div>                         
                  <div className="col-lg-12 col-sm-12"> 
                      <input type="text" className="con-field" value={this.state.phone} onChange={this.handleChangePhone} id="phone" placeholder="Phone:" />
                      <span id="err">{this.state.phone_err}</span>
                  </div> 
                </div>   
                <div className="row">     
                  <div className="col-lg-12 col-sm-12"> 
                      <textarea name="comments" id="message" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="con-field" placeholder="Message"></textarea>
                      <span id="err">{this.state.message_err}</span>
                      <div className="submit-area"> 
                        <button type="button" name="send" onClick={this.handleSubmit1} className="submit-contact" value="Submit">Send Message</button>
                        <div id="simple-msg"></div>
                      </div>  
                  </div>  
                </div> 
          </form> 
        </div> 

        )

    }
}

 
export default ContactForm;