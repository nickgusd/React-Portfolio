import React from "react";
import {Form, Button} from 'react-bootstrap';
import {InlineWidget} from "react-calendly";
import { Container, Row, Col } from 'react-bootstrap';
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

    
    <Row className="contact-header" >
    <Col xs={12} md={12} sm={12} lg={12} xl={12} >
    <header>
      Contact
    </header>
    <hr/>
      </Col>
    </Row>

    <Row className="Name-row" >
    <Col xs={12} md={12} sm={12} lg={12} xl={12}>
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="from_name" id="from_name" />
  </Form.Group>
  </Col>
  </Row>


  <Row className="Email-row" >
    <Col xs={12} md={12} sm={12} lg={12} xl={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  placeholder="Enter email"  type="text" name="from_email" id="from_email"/>
    <Form.Text className="email-text">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Col>
  </Row>


  <Row className="message-row" >
    <Col xs={12} md={12} sm={12} lg={12} xl={12}>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Please leave a message!" type="email" name="message" id="message"/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  </Col>
  </Row>

  <Row className="calendly-row" >
    <Col xs={12} md={12} sm={12} lg={12} xl={12}>
  <InlineWidget  
    color="#00a2ff"
    text="Request a Meeting Time!"
    className="calendly"
    textColor="#ffffff"url="https://calendly.com/nick-guimarais"/>
  </Col>
  </Row>

</Form>

    )
}

export default ContactForm;

