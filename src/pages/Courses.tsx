import { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';
import './Courses.css';

export default function Courses() {
  const { language } = useLanguage();
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const levelOptions = [
    { value: 'All', label: language === 'sk' ? 'Všetky' : 'All' },
    { value: 'Beginner', label: t('levels.beginner') },
    { value: 'Intermediate', label: t('levels.intermediate') },
    { value: 'Advanced', label: t('levels.advanced') },
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || 
      (language === 'sk' && course.categorySk ? course.categorySk === selectedCategory : course.category === selectedCategory);
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });
  
  // Handle category filtering with language support
  const categoryOptions = ['All', ...Array.from(new Set(courses.map(c => 
    language === 'sk' && c.categorySk ? c.categorySk : c.category
  )))];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <div className="container">
          <h1>{t('courses.title')}</h1>
          <p>{t('courses.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="courses-filters">
          <div className="filter-group">
            <label htmlFor="category">{t('courses.category')}</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="level">{t('courses.level')}</label>
            <select
              id="level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levelOptions.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-results">
            {filteredCourses.length} {filteredCourses.length === 1 ? t('courses.courseFound') : t('courses.coursesFound')}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="no-courses">
              <p>{t('courses.noCourses')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

