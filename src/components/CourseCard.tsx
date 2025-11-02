import { Link } from 'react-router-dom';
import type { Course } from '../types/course';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { language } = useLanguage();
  const t = useTranslation();
  
  const title = language === 'sk' && course.titleSk ? course.titleSk : course.title;
  const description = language === 'sk' && course.descriptionSk ? course.descriptionSk : course.description;
  const category = language === 'sk' && course.categorySk ? course.categorySk : course.category;
  const topics = language === 'sk' && course.topicsSk ? course.topicsSk : course.topics;
  
  return (
    <Link to={`/courses/${course.id}`} className="course-card">
      <div className="course-card-header">
        <span className={`course-level course-level-${course.level.toLowerCase()}`}>
          {course.level}
        </span>
        <span className="course-category">{category}</span>
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-description">{description}</p>
        <div className="course-card-meta">
          <span className="course-instructor">👤 {course.instructor}</span>
          <span className="course-duration">⏱ {course.duration}</span>
        </div>
        <div className="course-card-topics">
          {topics.slice(0, 3).map((topic, idx) => (
            <span key={idx} className="topic-tag">{topic}</span>
          ))}
          {topics.length > 3 && (
            <span className="topic-tag">+{topics.length - 3} {t('courseCard.more')}</span>
          )}
        </div>
      </div>
      <div className="course-card-footer">
        <span className="course-price">${course.price}</span>
        <button className="course-card-button">{t('courseDetail.viewDetails')}</button>
      </div>
    </Link>
  );
}

