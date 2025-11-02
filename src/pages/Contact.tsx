import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Contact.css';

export default function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert(t('contact.thankYou'));
    setFormData({ name: '', email: '', subject: '', message: '' });
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
            <button type="submit" className="btn btn-primary btn-full-width">{t('contact.sendMessageButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

