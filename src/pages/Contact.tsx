import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../contexts/LanguageContext';
import { emailjsConfig } from '../config/emailjs';
import './Contact.css';

export default function Contact() {
  const t = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Pre-fill form if coming from course enrollment
  useEffect(() => {
    if (location.state?.courseId && location.state?.courseTitle) {
      const enrollmentMessage = t('contact.enrollment') === 'Enrollment' 
        ? `I would like to enroll in the course: ${location.state.courseTitle}\n\n`
        : `Chcel by som sa prihlásiť na kurz: ${location.state.courseTitle}\n\n`;
      
      setFormData(prev => ({
        ...prev,
        subject: 'enrollment',
        message: enrollmentMessage
      }));
    }
  }, [location.state, t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (only need to do this once)
      emailjs.init(emailjsConfig.publicKey);

      // Map subject value to readable text
      const subjectMap: Record<string, string> = {
        'general': t('contact.generalInquiry'),
        'course': t('contact.courseInformation'),
        'enrollment': t('contact.enrollment'),
        'support': t('contact.technicalSupport'),
        'other': t('contact.other'),
      };
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: subjectMap[formData.subject] || formData.subject,
        message: formData.message,
        course_id: location.state?.courseId || '',
        course_title: location.state?.courseTitle || '',
        to_email: emailjsConfig.recipientEmail,
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear location state after successful submission
      if (location.state?.courseId) {
        navigate('/contact', { replace: true });
      }

      // Show success message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t('contact.contactInfo')}</h2>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>{t('contact.email')}</h3>
                <p>info@geminicourses.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>{t('contact.phone')}</h3>
                <p>+421 948 247 191</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>{t('contact.address')}</h3>
                <p>Jozefa Adamca 9983/24<br />91701 Trnava
                Slovensko</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h3>{t('contact.businessHours')}</h3>
                <p>{t('contact.businessHoursTime')}<br />{t('contact.businessHoursSaturday')}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>{t('contact.sendMessage')}</h2>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailField')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')} *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.selectSubject')}</option>
                <option value="general">{t('contact.generalInquiry')}</option>
                <option value="course">{t('contact.courseInformation')}</option>
                <option value="enrollment">{t('contact.enrollment')}</option>
                <option value="support">{t('contact.technicalSupport')}</option>
                <option value="other">{t('contact.other')}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')} *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {location.state?.courseTitle && (
              <div className="enrollment-notice" style={{ 
                background: '#f0f7ff', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                border: '1px solid #667eea'
              }}>
                <strong>{t('contact.enrollment')}:</strong> {location.state.courseTitle}
              </div>
            )}
            
            {submitStatus === 'success' && (
              <div className="form-success" style={{ 
                background: '#d4edda', 
                color: '#155724', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                border: '1px solid #c3e6cb'
              }}>
                {t('contact.thankYou')}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error" style={{ 
                background: '#f8d7da', 
                color: '#721c24', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                border: '1px solid #f5c6cb'
              }}>
                {t('contact.errorMessage') || 'Failed to send message. Please try again or contact us directly.'}
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary btn-full-width"
              disabled={isSubmitting}
            >
              {isSubmitting ? (t('contact.sending') || 'Sending...') : t('contact.sendMessageButton')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

