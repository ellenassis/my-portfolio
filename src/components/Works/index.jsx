import React from "react";

import "./styles.scss";

import project1 from '../../images/bertolazzi.png';
import project2 from '../../images/bakery.png';
import project3 from '../../images/quinthal.png';


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
              <h3>Casa Bertolazzi</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                expedita tempora minus amet molestiae facere similique
                doloribus, voluptatum est rerum mollitia delectus sequi ullam
                voluptates quasi obcaecati error officia iusto.
              </p>
              <a href="https://bertolazzi.vercel.app/" target="_blank"><img src={project1} alt="project1" /></a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Dream Bakery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                expedita tempora minus amet molestiae facere similique
                doloribus, voluptatum est rerum mollitia delectus sequi ullam
                voluptates quasi obcaecati error officia iusto.
              </p>
              <a href="https://dreambakery.netlify.app/" target="_blank"><img src={project2} alt="project2" /></a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Quinthal Presença</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                expedita tempora minus amet molestiae facere similique
                doloribus, voluptatum est rerum mollitia delectus sequi ullam
                voluptates quasi obcaecati error officia iusto.
              </p>
              <a href="https://one-page-quinthal.vercel.app/" target="_blank"><img src={project3} alt="project3" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
