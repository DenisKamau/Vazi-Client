import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./Contact.css";

const Contact = () => {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    hideMenu();
  }, []);

  const hideMenu = () => {
    dispatch({
      type: "HIDE_MENU",
    });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact__info">
        <h3>+254 704945784</h3>
        <h3>
          <a href="">vaazi@gmail.com</a>
        </h3>
      </div>
      <div className="contact__timeInfo">
        <h3>Mon - Fri 10am - 4:30pm</h3>
        <h3>Sat 10am - 3pm</h3>
        <h3>Sun CLOSED</h3>
      </div>
      <div className="contact__query">
        <p>
          If you have a query regarding an element of our website whether it be
          about processing or an aspect of your order, our in-store team would
          love to assist you. Don't hesitate to contact us on the following
          email, or call the store between our working hours. We also channel
          feedback through our Facebook Page and Instagram. We will aim to reply
          to your query within 24 working hours. For all product and order
          enquiries please email:
          <span style={{ marginLeft: "2px" }}>
            <a href="">vaazi@gmail.com</a>
          </span>
        </p>
        <p style={{ marginTop: "10px" }}>
          To all designers wishing to contact the store with wholesale
          enquiries, please contact Denis:
          <span style={{ marginLeft: "2px" }}>
            <a href="">vaazi@gmail.com</a>
          </span>
          . If we feel as though your brand would fit within our portfolio, we
          will get in touch!
        </p>
      </div>
      <div className="contact__retailers">
        <p>
          For all retailers, or media and press wishing to express interest in
          self-designed label My Boyfriends Back, enquiries can be directed to
          Denis Kimani:
          <span style={{ marginLeft: "2px" }}>
            <a href="">vaazi@gmail.com</a>
          </span>
        </p>
        <p style={{ fontWeight: "bold" }}>Follow us @vaazi </p>
      </div>
      <div className="contact__feedback">
        <p>
          Our team at Vaazi are always interested in your feedback to do with
          your physical and online shopping experience and our services. You can
          forward your comments to the supplied emails or find us on Facebook!
          Thank you so much for supporting your local, as well as designers and
          brands! x
        </p>
      </div>
    </div>
  );
};

export default Contact;
