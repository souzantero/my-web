import './App.css';
import React, { useMemo, useState } from 'react';
import Avatar from '../assets/avatar.jpg';
import { NavBar } from './components/NavBar';

export type Display = {
  resume: string;
  contact: string;
  summary: string;
  experience: string;
  education: string;
};

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
    description: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};

export type Data = {
  display: Display;
  resume: Resume;
};

const dictionary: {
  [language: string]: Data;
} = {
  en: {
    display: {
      resume: 'Resume',
      contact: 'Contact',
      summary: 'Summary',
      experience: 'Experience',
      education: 'Education',
    },
    resume: {
      name: 'Felipe Antero',
      role: 'Software Engineer | Node.js | React | TDD | Architecture',
      location: 'Curitiba, Paraná, Brazil',
      contact: {
        email: 'souzantero@gmail.com',
        linkedin: 'linkedin.com/in/souzantero',
        github: 'github.com/souzantero',
      },
      summary:
        'Hello, my name is Felipe Antero. I am a software developer with over 10 years of experience. I started my career developing web applications using the C# language and the DotNet framework. In 2015, I had the opportunity to study at the Apple Developer Academy and learn about mobile application development, which shifted the focus of my career. I then started working as a mobile developer. After accepting an invitation to take on the role of Full-Stack Engineer at a gaming company, I developed skills and specialized in key practices and tools for Front-end and Back-end application development, such as NodeJS, NestJS, ReactJS, Next.js, TDD, Cloud Computing, and clean architecture. I am currently part of the Backoffice team at ammo Varejo, assisting, developing, maintaining, and problem-solving features for various internal departments of the organization.',
      experience: [
        {
          company: 'ammo.varejo',
          role: 'Software Engineer',
          duration: 'December 2021 - Present',
          description: {
            situation:
              'Challenges in multiple internal departments such as Sales, Customer Service, Transportation, Retail Stores.',
            task: 'Develop and maintain systems that integrate and optimize these departments.',
            action:
              'Developed APIs and Microservices using NodeJS, Typescript, and NestJS. Implemented serverless architecture and CI/CD pipelines.',
            result: 'Improved operational efficiency and service quality.',
          },
        },
        {
          company: 'Opala Studios',
          role: 'Software Engineer',
          duration: 'June 2018 - December 2021 (3 years 7 months)',
          description: {
            situation:
              "Need for robustness and scalability in managing the company's products.",
            task: 'Lead the Back-end and Cloud Computing aspects.',
            action:
              'Developed APIs and Microservices, and deployed Docker environments and serverless architecture.',
            result:
              'Created a more efficient and scalable management platform.',
          },
        },
        {
          company: 'PlugApps',
          role: 'Mobile Engineer',
          duration: 'January 2016 - October 2017 (1 year 10 months)',
          description: {
            situation:
              'Market demand for efficient Android mobile applications.',
            task: 'Develop efficient Android applications and publish them on Google Play.',
            action:
              'Developed using Java and Kotlin. Conducted build and publish processes for the applications.',
            result:
              'Successfully launched various applications on Google Play.',
          },
        },
        {
          company: 'Tray Corp, Ewave, Pollysoft and BRQ',
          role: 'Web Developer',
          duration: 'August 2013 - March 2015 (2 years 1 month)',
          description: {
            situation:
              'Development and maintenance of systems across various companies and sectors.',
            task: 'Contribute to the development of web components and various functionalities.',
            action:
              'Used various technologies like C#, DotNet, HTML, JavaScript, JQuery, Flex, and ActionScript.',
            result:
              'Delivered features and components that improved client platforms.',
          },
        },
      ],
      education: [
        {
          institution: 'FIAP',
          degree: 'Postgraduate - Specialization, Software Architecture',
          duration: '(2023 - 2024)',
        },
        {
          institution: 'Universidade Positivo',
          degree: 'Undergraduate, Systems Analysis and Development',
          duration: '(2019 - 2022)',
        },
        {
          institution: 'Apple Developer Academy',
          degree: 'Technical, iOS Development (BEPiD)',
          duration: '(2015 - 2016)',
        },
      ],
    },
  },
};

export type AppConfig = {
  data: Data;
  language: string;
  onChangeLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const AppContext = React.createContext<AppConfig>({
  data: dictionary.en,
  language: 'en',
  onChangeLanguage: () => console.log('Not implemented'),
});

export const useApp = () => React.useContext(AppContext);

function App() {
  const [language, setLanguage] = useState<string>('en');
  const data = useMemo(() => dictionary[language], [language]);
  const { display, resume } = data;

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{ data, language, onChangeLanguage: handleLanguageChange }}
    >
      <div className="container">
        <div className="header">
          <img src={Avatar} alt="Avatar" className="avatar" />
          <h1>{resume.name}</h1>
          <p>{resume.role}</p>
          <p>{resume.location}</p>
        </div>
        <div className="section">
          <h2>{display.contact}</h2>
          <p>Email: {resume.contact.email}</p>
          <p>
            LinkedIn:{' '}
            <a href={`https://${resume.contact.linkedin}`} target="blank">
              {resume.contact.linkedin}
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href={`https://${resume.contact.github}`} target="blank">
              {resume.contact.github}
            </a>
          </p>
        </div>
        <div className="section">
          <h2>{display.summary}</h2>
          <p>{resume.summary}</p>
        </div>
        <div className="section">
          <h2>{display.experience}</h2>
          {resume.experience.map((experience, index) => (
            <div key={index}>
              <h3>{experience.company}</h3>
              <h4>{experience.role}</h4>
              <p>{experience.duration}</p>
              <ul>
                <li>{experience.description.situation}</li>
                <li>{experience.description.task}</li>
                <li>{experience.description.action}</li>
                <li>{experience.description.result}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>{display.education}</h2>
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
