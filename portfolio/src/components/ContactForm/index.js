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
          window.location.reload();

      }, (error) => {
          console.log(error.text);
      });
  }
  


    return (
        


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



    )
}

export default ContactForm;

