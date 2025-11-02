import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Gemini</span>
          <span className="logo-subtitle">IT Courses</span>
        </Link>
        <div className="header-right">
          <nav className="nav">
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
            <Link to="/courses" className="nav-link">{t('nav.courses')}</Link>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
          </nav>
          <div className="language-switcher">
            <button
              className={`language-flag ${language === 'sk' ? 'active' : ''}`}
              onClick={() => setLanguage('sk')}
              aria-label="Switch to Slovak"
              title="Slovak"
            >
              🇸🇰
            </button>
            <button
              className={`language-flag ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              title="English"
            >
              🇬🇧
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

