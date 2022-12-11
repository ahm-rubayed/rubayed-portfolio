import React, { useRef } from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_673apfd",
        "template_uone7ka",
        form.current,
        "BhjUssxBPE-QbzaMw"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="my-16">
      <div className="px-16 lg:px-40">
        <div className="text-3xl text-center capitalize font-semibold my-16">
          Contact me
        </div>
        <div className="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <div class="flex items-center">
                <span className="text-lg mr-8 text-primary">
                  <FaEnvelope />
                </span>
                <p className="text-lg">rubayed.ahmed02@gmail.com</p>
              </div>
              <div class="flex my-8">
                <span className="text-lg mr-8 text-primary">
                  <FaLocationArrow />
                </span>
                <p className="text-lg">Sylhet, Bangladesh</p>
              </div>
              <div class="flex">
                <span className="text-lg mr-8 text-primary">
                  <FaPhoneAlt />
                </span>
                <p className="text-lg">01867446930</p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
              <div class="container">
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" placeholder="Name" />
                  <input type="email" name="user_email" placeholder="Email" />
                  <textarea name="message" placeholder="Message"></textarea>
                  <input
                    type="submit"
                    class="btn text-white"
                    value="Send Message"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
