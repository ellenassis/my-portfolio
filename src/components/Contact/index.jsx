import React from "react";

import "./styles.scss";

import Email from "../../images/email.png";
import Whatsapp from "../../images/whatsapp.png";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h3>Entre em contato</h3>
          <p>
            Qualquer dúvida ou se deseja bater um papo comigo, ficarei feliz em
            receber e irei retornar assim que possível!
          </p>
          <div className="contact-info">
            <a href="mailto:ellenassis8@gmail.com">
              <img src={Email} alt="" />
              ellenassis8@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5511970516022"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="" />
              (11) 91663-4302
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
