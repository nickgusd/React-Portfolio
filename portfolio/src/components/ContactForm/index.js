import React from "react";
import {Form, Button} from 'react-bootstrap';
import "./style.css";

function ContactForm() {
    return (
        
<Form>
    <header>
      Contact
    </header>
    <hr/>
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Please leave a message!"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
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

