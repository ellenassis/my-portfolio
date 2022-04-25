import React from 'react';

import './styles.scss';


function Skills() {
  return (
    <section id="skills" className="skills">
    <div className="container">
      <h1>Habilidades</h1>
      <h2>Linguagens e tecnologias que eu tenho contato.</h2>
      
      <div className="carousel">
        <div className="skill-card">
          <div className="image">
            {/* <img src={JavaScript} alt="javascript-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">JavaScript</p>
            <p className="text">+1 ano de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={TypeScript} alt="typescript-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">TypeScript</p>
            <p className="text">+6 meses de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={ReactJS} alt="react-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">React.js</p>
            <p className="text">+6 meses de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={HTML} alt="html-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">HTML</p>
            <p className="text">+1 ano de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={CSS} alt="css-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">CSS</p>
            <p className="text">+1 ano de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={Sass} alt="sass-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">Sass</p>
            <p className="text">+6 meses de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={styled} alt="styled-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">Styled-Components</p>
            <p className="text">+3 meses de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={Git} alt="git-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">Git</p>
            <p className="text">+1 ano de experiência</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="image">
            {/* <img src={GitHub} alt="github-icon" /> */}
          </div>
          <div className="skill-info">
            <p className="title">GitHub</p>
            <p className="text">+1 ano de experiência</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Skills;