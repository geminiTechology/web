// EmailJS Configuration
// 
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - message subject
//    - {{message}} - message content
//    - {{course_id}} - course ID (if enrollment)
//    - {{course_title}} - course title (if enrollment)
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  recipientEmail: import.meta.env.VITE_RECIPIENT_EMAIL || 'info@geminicourses.com',
};

