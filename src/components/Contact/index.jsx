import React from "react";

import "./styles.scss";

import Email from "../../images/email.png";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-info">
          <h3>Entre em contato</h3>
          <p>
            Estou procurando por novas oportunidades. Qualquer dúvida ou se
            deseja bater um papo comigo, ficarei feliz em receber e irei
            retornar assim que possível!
          </p>
          <div className="email">
            <a href="mailto:ellenassis8@gmail.com">
              <img src={Email} alt="" />
              ellenassis8@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
