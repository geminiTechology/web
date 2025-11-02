import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useTranslation } from '../contexts/LanguageContext';
import './Home.css';

export default function Home() {
  const t = useTranslation();
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <p className="hero-subtitle">
            {t('home.heroSubtitle')}
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">{t('home.browseCourses')}</Link>
            <Link to="/about" className="btn btn-secondary">{t('home.learnMore')}</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">{t('home.whyChooseUs')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>{t('home.expertInstructors')}</h3>
              <p>{t('home.expertInstructorsDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>{t('home.handsOnLearning')}</h3>
              <p>{t('home.handsOnLearningDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>{t('home.careerSupport')}</h3>
              <p>{t('home.careerSupportDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>{t('home.comprehensiveCurriculum')}</h3>
              <p>{t('home.comprehensiveCurriculumDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-courses">
        <div className="container">
          <h2 className="section-title">{t('home.featuredCourses')}</h2>
          <div className="courses-grid">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/courses" className="btn btn-primary">{t('home.viewAllCourses')}</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">{t('home.studentsEnrolled')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t('home.expertInstructorsStat')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">{t('home.jobPlacementRate')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('home.studentSupport')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

