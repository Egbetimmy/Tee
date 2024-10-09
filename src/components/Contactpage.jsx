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
          I am actively seeking opportunities for a Software Engineering role. 
          <br/>If you have any vacancies available, please feel free to reach out—I’m always open to discussions! 
          <br/>Whether you have questions or simply want to connect, I will do my best to respond promptly. 
          <br/>Thank you for considering me!
        </p>

        <Button
          className="resumebtn"
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
