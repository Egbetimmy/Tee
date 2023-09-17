import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../pages/style.css"; // Import the CSS file for styling
import emailjs from 'emailjs-com';

const contactConfig = {
  YOUR_EMAIL: "timmytimeyin@gmail.com",
  YOUR_FONE: "(234)80-729-67944",
  description: "I’m always interested in hearing about new projects and opportunities.",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_p087iht",
  YOUR_TEMPLATE_ID: "template_7pow8qb",
  YOUR_USER_ID: "7DvRVF3_jGZRyJ-mD",
};

function ContactForm({ show, onHide }) {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setFormdata({
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );

  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name || ""}
              type="text"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email || ""}
              type="email"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message || ""}
              rows={4}
              required
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Send Message
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactForm;
