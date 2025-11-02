import { useTranslation } from '../contexts/LanguageContext';
import './About.css';

export default function About() {
  const t = useTranslation();

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <section className="about-section">
          <h2>{t('about.mission')}</h2>
          <p>
            {t('about.missionDesc')}
          </p>
        </section>

        <section className="about-section">
          <h2>{t('about.whatWeOffer')}</h2>
          <div className="about-features">
            <div className="about-feature">
              <h3>{t('about.comprehensiveCurriculumTitle')}</h3>
              <p>
                {t('about.comprehensiveCurriculumDesc')}
              </p>
            </div>
            <div className="about-feature">
              <h3>{t('about.handsOnLearningTitle')}</h3>
              <p>
                {t('about.handsOnLearningDesc')}
              </p>
            </div>
            <div className="about-feature">
              <h3>{t('about.expertInstructorsTitle')}</h3>
              <p>
                {t('about.expertInstructorsDesc')}
              </p>
            </div>
            <div className="about-feature">
              <h3>{t('about.careerSupportTitle')}</h3>
              <p>
                {t('about.careerSupportDesc')}
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>{t('about.ourValues')}</h2>
          <ul className="values-list">
            <li><strong>{t('about.excellence')}</strong> {t('about.excellenceDesc')}</li>
            <li><strong>{t('about.accessibility')}</strong> {t('about.accessibilityDesc')}</li>
            <li><strong>{t('about.innovation')}</strong> {t('about.innovationDesc')}</li>
            <li><strong>{t('about.community')}</strong> {t('about.communityDesc')}</li>
            <li><strong>{t('about.impact')}</strong> {t('about.impactDesc')}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

