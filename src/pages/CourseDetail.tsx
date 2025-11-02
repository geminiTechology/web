import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import './CourseDetail.css';

export default function CourseDetail() {
  const { language } = useLanguage();
  const t = useTranslation();
  const { id } = useParams<{ id: string }>();
  const course = id ? getCourseById(id) : undefined;

  if (!course) {
    return (
      <div className="course-detail">
        <div className="container">
          <div className="course-not-found">
            <h2>{t('courseDetail.courseNotFound')}</h2>
            <p>{t('courseDetail.courseNotFoundDesc')}</p>
            <Link to="/courses" className="btn btn-primary">{t('courseDetail.browseAllCourses')}</Link>
          </div>
        </div>
      </div>
    );
  }

  const title = language === 'sk' && course.titleSk ? course.titleSk : course.title;
  const description = language === 'sk' && course.descriptionSk ? course.descriptionSk : course.description;
  const longDescription = language === 'sk' && course.longDescriptionSk ? course.longDescriptionSk : course.longDescription;
  const category = language === 'sk' && course.categorySk ? course.categorySk : course.category;
  const topics = language === 'sk' && course.topicsSk ? course.topicsSk : course.topics;

  return (
    <div className="course-detail">
      <div className="course-detail-hero">
        <div className="container">
          <div className="course-breadcrumb">
            <Link to="/">{t('nav.home')}</Link> / <Link to="/courses">{t('nav.courses')}</Link> / {title}
          </div>
          <div className="course-hero-content">
            <div className="course-badges">
              <span className={`course-level course-level-${course.level.toLowerCase()}`}>
                {course.level}
              </span>
              <span className="course-category">{category}</span>
            </div>
            <h1>{title}</h1>
            <p className="course-hero-description">{description}</p>
            <div className="course-hero-meta">
              <div className="meta-item">
                <span className="meta-label">{t('courseDetail.instructor')}</span>
                <span className="meta-value">{course.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t('courseDetail.duration')}</span>
                <span className="meta-value">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t('courseDetail.price')}</span>
                <span className="meta-value price">${course.price}</span>
              </div>
            </div>
            <button className="btn btn-primary btn-enroll">{t('courseDetail.enrollNow')}</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="course-detail-content">
          <div className="course-main">
            <section className="course-section">
              <h2>{t('courseDetail.aboutCourse')}</h2>
              <div style={{ whiteSpace: 'pre-line' }}>{longDescription}</div>
            </section>

            <section className="course-section">
              <h2>{t('courseDetail.whatYoullLearn')}</h2>
              <ul className="topics-list">
                {topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="course-sidebar">
            <div className="course-card-sidebar">
              <div className="course-price-large">${course.price}</div>
              <button className="btn btn-primary btn-full-width">{t('courseDetail.enrollNow')}</button>
              <div className="course-sidebar-info">
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.instructor')}</strong> {course.instructor}
                </div>
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.duration')}</strong> {course.duration}
                </div>
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.level')}</strong> {course.level}
                </div>
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.category')}</strong> {category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

