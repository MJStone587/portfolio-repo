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
    <main className="contactPage" ref={ref}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      <aside>
        <h1>Send me an email and let's get in touch!</h1>
        <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" />
      </aside>
    </main>
  );
};

export default forwardRef(Contact);
