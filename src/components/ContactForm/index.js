import React from "react";
import { Form, Button } from 'react-bootstrap';
import { InlineWidget } from "react-calendly";
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import "./style.css";

function ContactForm() {

  init("user_wfPJJXSH9xWczqIkxR4iP");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_py7vh7h', 'template_hjf2hmj', e.target, 'user_wfPJJXSH9xWczqIkxR4iP')
      .then((result) => {

        setTimeout(() =>
          alert("Thank you, your message has been received!"), window.location.reload(), 1000)

      }, (error) => {
        console.log(error.text);
      });
  }

  return (

    <Form onSubmit={sendEmail} className="contact-form">
      <Container>
        <Row id="contact-row" >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} id="contact-header" style={{ height: "50px" }}>
            <h1 className="contact" style={{ color: "white", position: "relative", bottom: "8px" }}>
              Contact
            </h1>
          </Col>
        </Row>

        <Row >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} id="email-header">
            <h2 className="contact" style={{ fontSize: "16px", marginTop: "20px" }}>
              Message for: nick.guimarais@gmail.com
            </h2>

          </Col>
        </Row>

        <Row  >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} className="Name-row">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" name="from_name" id="from_name" />
            </Form.Group>
          </Col>
        </Row>

        <Row  >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} className="Email-row">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Enter email" type="text" name="from_email" id="from_email" />
              <Form.Text className="email-text">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row  >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} className="message-row">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Please leave a message!" type="email" name="message" id="message" />
            </Form.Group>
            <Button variant="primary" type="submit" id="submit-btn" >
              Submit
            </Button>
          </Col>
        </Row>

        <Row className="calendly-row" >
          <Col xs={12} md={12} sm={12} lg={12} xl={12} id="calendly-col">
            <InlineWidget
              color="#00a2ff"
              text="Request a Meeting Time!"
              className="calendly"
              textColor="#ffffff"
              url="https://calendly.com/nick-guimarais" />
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default ContactForm;

