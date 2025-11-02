import { useTranslation } from '../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Gemini IT Courses</h3>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-section">
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><a href="/">{t('nav.home')}</a></li>
            <li><a href="/courses">{t('nav.courses')}</a></li>
            <li><a href="/about">{t('nav.about')}</a></li>
            <li><a href="/contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li>Email: info@geminicourses.com</li>
            <li>Phone: +421 948 247 191</li>
            <li>Address: Jozefa Adamca 9983/24, 91701 Trnava
            Slovensko</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t('footer.followUs')}</h4>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gemini technology IT Courses. {t('footer.rightsReserved')}</p>
      </div>
    </footer>
  );
}

