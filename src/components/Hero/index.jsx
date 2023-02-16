import React from "react";


import "./styles.scss";

import Linkedin from "../../images/linkedin.svg";
import Github from "../../images/github.svg";
import Img1 from "../../images/img1.svg";

function Hero() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero">
          <div className="title fadeIn">
            <h1>
              <p>Olá, eu sou</p>
              <p>Ellen Assis.</p>
              <p className="typing typing-animation">
                Desenvolvedora <span>Front-End.</span>
              </p>
            </h1>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/ellendeassis/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Linkedin} alt="linkedin-icon" />
              </a>
              <a
                href="https://github.com/ellenassis"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Github} alt="github-icon" />
              </a>
            </div>
            <button>
              <a href="/Resume.pdf" target="_blank">Currículo</a>
            </button>
          </div>
          <div className="person">
            <img src={Img1} alt="a girl using notebook" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
