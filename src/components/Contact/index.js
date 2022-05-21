import React from "react";

import "./style.scss";

const ContactHeader = () => {
  return (
    <header className="contact-header container medium">
      <h1 className="contact-title">Let's work together!</h1>
      <p className="contact-subtitle">
        Tell me about your project, or just say hi!
      </p>
    </header>
  );
};

const MailMe = () => {
  return (
    <div className="mail-me-wrap">
      <a className="mail-me" target="_blank" href="mailto:hankhsu@umich.edu">
        <div className="icon-wrap">
          <FontAwesomeIcon className="icon" icon={["far", "envelope"]} />
        </div>
        <div className="mail-me-text">
          <p>Mail me at</p>
          <p className="email">hankhsu@umich.edu</p>
        </div>
      </a>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="site-content">
      <div className="content-area">
        <main className="site-main">
          <ContactHeader />
          <MailMe />
        </main>
      </div>
    </div>
  );
};

export default Contact;
