import React from "react";
import {Form, Button} from 'react-bootstrap';
import {InlineWidget} from "react-calendly";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import "./style.css";


// init("user_wfPJJXSH9xWczqIkxR4iP");

function ContactForm() {

  init("user_wfPJJXSH9xWczqIkxR4iP");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_py7vh7h', 'template_hjf2hmj', e.target, 'user_wfPJJXSH9xWczqIkxR4iP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  


    return (
        


// <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="from_name" id="from_name" />
//       <label>Name</label>
//       <input type="text" name="from_email" id="from_email"/>
//       <label>Email</label>
//       <input type="email" name="message" id="message"/>
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form> 




//form contains widget for Calendly

<Form onSubmit={sendEmail}>
    <header>
      Contact
    </header>
    <hr/>
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="from_name" id="from_name" />
  </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  placeholder="Enter email"  type="text" name="from_email" id="from_email"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Please leave a message!" type="email" name="message" id="message"/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  <InlineWidget  
    color="#00a2ff"
    text="Request a Meeting Time!"
    textColor="#ffffff"url="https://calendly.com/nick-guimarais"/>
</Form>















    // <form>
    //     <header>
    //         <h1 className = "contact-header">Contact</h1>
    //     </header>
    //     <hr/>
    //     <div className="form-group">
    //         <label htmlFor="exampleInputName1">Name</label>
    //         <input type="name" className="form-control" id="exampleInputName1" placeholder="Nick Guimarais"/>
    //       </div>

    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email address</label>
    //       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
    //       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>
    //     <div className="form-group form-message">
    //         <header className="message">Message</header>
    //         <textarea name="message" rows="5" cols="30" id="exampleMessage1">Please leave a message!</textarea>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>


    )
}

export default ContactForm;

