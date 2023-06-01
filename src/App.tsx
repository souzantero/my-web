import './App.css';
import React, { useState } from 'react';
import { NavBar } from './components/NavBar';

const data = {
  name: 'Felipe Antero',
  role: 'Software Engineer | Node.js | React | TDD | Clean Architecture',
  location: 'Curitiba, Paraná, Brasil',
  contact: {
    email: 'souzantero@gmail.com',
    linkedin: 'www.linkedin.com/in/souzantero',
    github: 'github.com/souzantero',
  },
  summary: 'Olá, meu nome é Felipe Antero...',
  experience: [
    {
      company: 'ammo.varejo',
      role: 'Full Stack Engineer',
      duration: 'dezembro de 2021 - Present (1 ano 6 meses)',
      description: 'Engenheiro na equipe de Backoffice da ammo Varejo...',
    },
    // Outras experiências podem ser adicionadas aqui
  ],
  education: [
    {
      institution: 'FIAP',
      degree:
        'Pós-graduação Lato Sensu - Especialização, Arquitetura de Software',
      duration: '(2023 - 2024)',
    },
    // Outras formações podem ser adicionadas aqui
  ],
};

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h1>{data.name}</h1>
          <p>{data.role}</p>
          <p>{data.location}</p>
        </div>
        <div className="section">
          <h2>Contato</h2>
          <p>Email: {data.contact.email}</p>
          <p>LinkedIn: {data.contact.linkedin}</p>
          <p>GitHub: {data.contact.github}</p>
        </div>
        <div className="section">
          <h2>Resumo</h2>
          <p>{data.summary}</p>
        </div>
        <div className="section">
          <h2>Experiência</h2>
          {data.experience.map((experience, index) => (
            <div key={index}>
              <h3>{experience.company}</h3>
              <h4>{experience.role}</h4>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Formação acadêmica</h2>
          {data.education.map((education, index) => (
            <div key={index}>
              <h3>{education.institution}</h3>
              <h4>{education.degree}</h4>
              <p>{education.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
