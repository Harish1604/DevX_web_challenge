import React, { useState } from "react";
import "./modern.css";
import { FaSun, FaMoon, FaLanguage } from "react-icons/fa";
import Chatbot from "./Chatbot"; // AI Chatbot Component

const ModernWebsite: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = () => {
    const nextLang = language === "en" ? "es" : language === "es" ? "fr" : "en";
    setLanguage(nextLang);
  };

  return (
    <div className={modern-website ${darkMode ? "dark" : "light"}}>
      <nav className="navbar">
        <h1>FutureVerse</h1>
        <div className="controls">
          <button onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={changeLanguage}>
            <FaLanguage />
          </button>
        </div>
      </nav>

      <header className="hero">
        <h2>Welcome to the Future</h2>
        <p>Experience the world of AI and next-gen UI</p>
        <button className="cta-button">Explore</button>
      </header>

      <section className="features">
        <div className="feature-card">⚡ Super Fast</div>
        <div className="feature-card">🌎 AI Powered</div>
        <div className="feature-card">🎨 Customizable</div>
      </section>

      <Chatbot />

      <footer>
        <p>© 2025 FutureVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ModernWebsite;