import React, { useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ed6sbqh',
        'template_x3poq8d',
        form.current,
        'aPezDmMulLcn0LnSi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(document.getElementById('contact_form').reset());
  };
  return (
    <section className="contact_container" ref={ref}>
      <div className="contact_header">
        <h1>Contact</h1>
        <h2>This form will send directly to my email</h2>
      </div>

      <div className="contact_body">
        <form
          className="contact_form"
          id="contact_form"
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="name_input">Your Name:</label>
          <input id="name_input" type="text" name="from_name" />
          <label htmlFor="email_input">Your Email:</label>
          <input id="email_input" type="email" name="reply_to" />
          <label htmlFor="message_input">Your Message:</label>
          <textarea id="message_input" name="message" />
          <input id="contact_submit" type="submit" value="Send" />
        </form>

        <aside className="contact_aside">
          <p>Send me an email and let's get in touch!</p>
          <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" />
        </aside>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
