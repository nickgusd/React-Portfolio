import React from "react";
import "../../../public/contact.css"

function ContactForm() {
    return (
        
    <form>
        <header>
            <h1 className = "contact-header">Contact</h1>
        </header>
        <hr/>
        <div className="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="name" className="form-control" id="exampleInputName1" placeholder="Nick Guimarais"/>
          </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group form-message">
            <header className="message">Message</header>
            <textarea name="message" rows="5" cols="30" id="exampleMessage1">Please leave a message!</textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    )
}

export default ContactForm;

