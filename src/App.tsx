import './App.css';
import React, { useMemo, useState } from 'react';
import { NavBar } from './components/NavBar';

export type Resume = {
  name: string;
  role: string;
  location: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};

const data: { [language: string]: Resume } = {
  pt: {
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
  },
  en: {
    name: 'Felipe Antero',
    role: 'Software Engineer | Node.js | React | TDD | Clean Architecture',
    location: 'Curitiba, Paraná, Brasil',
    contact: {
      email: 'souzantero@gmail.com',
      linkedin: 'www.linkedin.com/in/souzantero',
      github: 'github.com/souzantero',
    },
    summary: 'Hello, my name is Felipe Antero...',
    experience: [
      {
        company: 'ammo.varejo',
        role: 'Full Stack Engineer',
        duration: 'dezembro de 2021 - Present (1 ano 6 meses)',
        description: 'Engineer in the Backoffice team at ammo Varejo...',
      },
    ],
    education: [
      {
        institution: 'FIAP',
        degree:
          'Pós-graduação Lato Sensu - Especialization, Software Architecture',
        duration: '(2023 - 2024)',
      },
    ],
  },
};

export type AppData = {
  language: string;
  onChangeLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const AppContext = React.createContext<AppData>({
  language: 'en',
  onChangeLanguage: () => {},
});

export const useApp = () => React.useContext(AppContext);

function App() {
  const [language, setLanguage] = useState<string>('en');
  const resume = useMemo(() => data[language], [language]);
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{ language, onChangeLanguage: handleLanguageChange }}
    >
      <NavBar />
      <div className="container">
        <div className="header">
          <h1>{resume.name}</h1>
          <p>{resume.role}</p>
          <p>{resume.location}</p>
        </div>
        <div className="section">
          <h2>Contato</h2>
          <p>Email: {resume.contact.email}</p>
          <p>LinkedIn: {resume.contact.linkedin}</p>
          <p>GitHub: {resume.contact.github}</p>
        </div>
        <div className="section">
          <h2>Resumo</h2>
          <p>{resume.summary}</p>
        </div>
        <div className="section">
          <h2>Experiência</h2>
          {resume.experience.map((experience, index) => (
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
          {resume.education.map((education, index) => (
            <div key={index}>
              <h3>{education.institution}</h3>
              <h4>{education.degree}</h4>
              <p>{education.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
