import React from 'react';
import './NavBar.css';
import { useApp } from '../App';

export function NavBar() {
  const { language, onChangeLanguage } = useApp();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#resume">Curriculo</a>
        </li>
      </ul>
      <div>
        <select
          className="language-select"
          value={language}
          onChange={onChangeLanguage}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
        <a href="/path/to/your/resume.pdf" download className="download-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5v14m0 0l5-5m-5 5l-5-5m5 5V3"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
function useAppContext() {
  throw new Error('Function not implemented.');
}
