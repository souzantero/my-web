import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar-logo"></h1>
        <select className="language-select">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="container">
        <div className="header">
          <h1>Felipe Antero</h1>
          <p>Software Engineer | Node.js | React | TDD | Clean Architecture</p>
          <p>Curitiba, Paraná, Brasil</p>
        </div>
        <div className="section">
          <h2>Contato</h2>
          <p>Email: souzantero@gmail.com</p>
          <p>LinkedIn: www.linkedin.com/in/souzantero</p>
          <p>GitHub: github.com/souzantero</p>
        </div>
        <div className="section">
          <h2>Resumo</h2>
          <p>Olá, meu nome é Felipe Antero...</p> {/* Add more detail */}
        </div>
        <div className="section">
          <h2>Experiência</h2>
          <div>
            <h3>ammo.varejo</h3>
            <h4>Full Stack Engineer</h4>
            <p>dezembro de 2021 - Present (1 ano 6 meses)</p>
            <p>Engenheiro na equipe de Backoffice da ammo Varejo...</p>{' '}
            {/* Add more detail */}
          </div>
          {/* Add more experiences */}
        </div>
        <div className="section">
          <h2>Formação acadêmica</h2>
          <div>
            <h3>FIAP</h3>
            <h4>
              Pós-graduação Lato Sensu - Especialização, Arquitetura de Software
            </h4>
            <p>(2023 - 2024)</p>
          </div>
          {/* Add more education */}
        </div>
        {/* Add more sections as necessary */}
      </div>
    </>
  );
}

export default App;
