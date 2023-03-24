import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { BiPhone } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5hsnybg",
      "template_vgn67ed",
      form.current,
      "m_ElEvoCOHIK9I_5e"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <a href="https://www.github.com/kirtirajingale" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option" id="contact-email">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Kirtirajingale46@gmail.com</h5>
            <a
              id="contact-email"
              href="mailto:Kirtirajingale46@gmail.com"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com/in/kirtiraj-ingale" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option" id="contact-phone">
            <BiPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <p id="contact-phone">+91-7875101617</p>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
