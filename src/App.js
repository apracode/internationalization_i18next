import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <nav>
        <button onClick={()=>handleClick('en')}>English</button>
        <button onClick={()=>handleClick('ru')}>Русский</button>
        <button onClick={()=>handleClick('ua')}>Українська</button>
      </nav>
      <h1>{t('h1.1')}</h1>
      <p>{t('p.2')}</p>
      <p>{t('h1.2')}</p>
    </div>
  );
}

export default App;
