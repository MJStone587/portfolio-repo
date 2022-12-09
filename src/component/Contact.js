import React, { useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = (props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u8jaywo",
        "template_jwpod6f",
        form.current,
        "aPezDmMulLcn0LnSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact_container" ref={ref}>
      <div className="contact_header">
        <h1>Contact</h1>
        <h2>This form will send directly to my email</h2>
      </div>

      <div className="contact_body">
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="user_name" />
          <label>Email:</label>
          <input type="email" name="user_email" />
          <label>Message:</label>
          <textarea name="message" />
          <input id="contact_submit" type="submit" value="Send" />
        </form>

        <aside className="contact_aside">
          <h1>Send me an email and let's get in touch!</h1>
          <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" />
        </aside>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
