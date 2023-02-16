import React from "react";

import "./styles.scss";

import pokemonImg from "../../images/pokemon.png";
import bakeryImg from "../../images/bakery.png";
import quizImge from "../../images/quiz.png";
import toDoListImg from "../../images/to-do.png";

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
              <h3>Pokémon</h3>
              <a
                href="https://dreambakery.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pokemonImg} alt="imagem do website de pokémon" />
              </a>
              <p>
                O projeto é um website com o intuito de pesquisar pokémons e ver
                suas respectivas evoluções, seus status, e suas habilidades. Foi
                consumido dados da PokeAPI.
              </p>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Dream Bakery</h3>
                <a href="#">
                  <img src={bakeryImg} alt="Imagem do website Dream Bakery" />
                </a>
                <p>
                  Projeto desenvolvido com intuito de mostrar o cardápio do local
                  e avaliações, com uma interface agradavél para atrair mais
                  clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Quiz</h3>
              <a
                href="https://chic-bienenstitch-b40303.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={quizImge} alt="Imagem do quiz de JavaScript" />
              </a>
              <p>
                Quiz para testar conhecimentos de JavaScript. É composto por 10
                questões, a cada alternativa escolhida é mostrado a resposta
                certa e no final aparece o resultado.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>To do list</h3>
              <a
                href="https://mytodolist2022.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={toDoListImg} alt="Imagem da lista de tarefas" />
              </a>
              <p>
                Lista de tarefas para organizar o dia. Permite excluir e marcar
                como concluída.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
