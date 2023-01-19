import React from "react";

import "./styles.scss";

import bakeryImg from "../../images/bakery.png";
import quizImge from "../../images/quiz.png";
import toDoListImg from "../../images/to-do.png";
import eCommerceImg from "../../images/ecommerce.png";

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
              <a href="https://dreambakery.netlify.app/" target="_blank" rel="noreferrer">
                <img src={bakeryImg} alt="Imagem da padaria" />
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
              <h3>Quiz</h3>
              <a href="https://chic-bienenstitch-b40303.netlify.app/" target="_blank" rel="noreferrer">
                <img src={quizImge} alt="Imagem do quiz de JavaScript" />
              </a>
              <p>
                  Quiz para testar conhecimentos de JavaScript. É composto por 10 questões, a cada alternativa escolhida é mostrado
                  a resposta certa e no final aparece o resultado.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>To do list</h3>
              <a href="https://mytodolist2022.netlify.app/" target="_blank" rel="noreferrer">
                <img src={toDoListImg} alt="Imagem da lista de tarefas" />
              </a>
              <p>Lista de tarefas para organizar o dia. Permite excluir e marcar como concluída.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>E-commerce</h3>
              <a href="#">
                <img src={eCommerceImg} alt="Imagem do e-commerce" />
              </a>
              <p>
                O e-commerce Magic é um projeto pessoal simulando uma fast
                fashion, com carrinho de compras e favoritos. O projeto está em
                andamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
