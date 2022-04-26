import React from "react";

import "./styles.scss";

import project1 from "../../images/bertolazzi.png";
import project2 from "../../images/bakery.png";
import project3 from "../../images/quinthal.png";
import project4 from "../../images/hora-empresas.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Projetos</h2>
          <h3>Alguns projetos recentes que desenvolvi</h3>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <h3>Dream Bakery</h3>
              <a href="https://dreambakery.netlify.app/" target="_blank">
                <img src={project2} alt="project2" />
              </a>
              <p>
                Projeto pessoal desenvolvido para mostrar o cardápio do local e
                avaliações, com uma interface agradavél para atrair mais
                clientes.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Casa Bertolazzi</h3>
              <a href="https://bertolazzi.vercel.app/" target="_blank">
                <img src={project1} alt="project1" />
              </a>
              <p>
                A Casa Bertolazzi é uma landing page voltada para mostrar os
                espaços e tipos de eventos oferecidos, com possibilidade de
                solicitar um orçamento.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Quinthal Presença</h3>
              <a href="https://one-page-quinthal.vercel.app/" target="_blank">
                <img src={project3} alt="project3" />
              </a>
              <p>
                Quinthal Presença é uma landing page para contratação de
                eventos, focada em mostrar fotos do ambiente e serviços
                oferecidos.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Hora empresas</h3>
              <a href="https://hora-empresas.vercel.app/" target="_blank">
                <img src={project4} alt="project4" />
              </a>
              <p>Website para contratação de serviços voltado para empresas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
