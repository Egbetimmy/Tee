import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import "../pages/style.css";
import ContactForm from "./ContactForm"; // Import your ContactForm component

function Contactpage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactFormShow = () => {
    setShowContactForm(true);
  };

  const handleContactFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <div className="contactbackground">
      <Container className="d-flex flex-column align-items-center">
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a Backend developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <Button
          className="contactbtn"
          onClick={handleContactFormShow}
        >
          Contact Me
        </Button>
        <ContactForm show={showContactForm} onHide={handleContactFormClose} />

        <span></span>

        <p className="copyright">
          © Copyright 2024
        </p>
        <hr />
      </Container>
    </div>
  );
}

export default Contactpage;
