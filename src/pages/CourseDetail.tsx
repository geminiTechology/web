import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import { translateDuration } from '../utils/duration';
import './CourseDetail.css';

export default function CourseDetail() {
  const { language } = useLanguage();
  const t = useTranslation();
  const navigate = useNavigate();
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

  // Translate level
  const levelTranslationKey = course.level.toLowerCase() as 'beginner' | 'intermediate' | 'advanced';
  const translatedLevel = t(`levels.${levelTranslationKey}`);
  
  // Translate duration
  const translatedDuration = translateDuration(course.duration, language, t);
  
  const handleEnroll = () => {
    navigate('/contact', { state: { courseId: course.id, courseTitle: title } });
  };

  // Convert markdown-like formatting to HTML
  const formatDescription = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/━━━+/g, '<hr class="course-section-divider" />')
      .replace(/^\s*[-•]\s/gm, '<span class="course-bullet">•</span>')
      .replace(/^\s*✓\s/gm, '<span class="course-check">✓</span>')
      .replace(/\n/g, '<br />');
  };

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
                {translatedLevel}
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
                <span className="meta-value">{translatedDuration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t('courseDetail.price')}</span>
                <span className="meta-value price">€{course.price}</span>
              </div>
            </div>
            <button className="btn btn-primary btn-enroll" onClick={handleEnroll}>{t('courseDetail.enrollNow')}</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="course-detail-content">
          <div className="course-main">
            <section className="course-section">
              <h2>{t('courseDetail.aboutCourse')}</h2>
              <div 
                className="course-description-formatted"
                dangerouslySetInnerHTML={{ __html: formatDescription(longDescription) }}
              />
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
              <div className="course-price-large">€{course.price}</div>
              <button className="btn btn-primary btn-full-width" onClick={handleEnroll}>{t('courseDetail.enrollNow')}</button>
              <div className="course-sidebar-info">
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.instructor')}</strong> {course.instructor}
                </div>
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.duration')}</strong> {translatedDuration}
                </div>
                <div className="sidebar-info-item">
                  <strong>{t('courseDetail.level')}</strong> {translatedLevel}
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

