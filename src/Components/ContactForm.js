import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [messageStatus, setMessageStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_koy721x', // Correct Service ID
      'template_jg3egp8', // Correct Template ID
      formData,
      'S-8Ii1Ky6eOnwT31e' // Correct Public Key (User ID)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessageStatus('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setMessageStatus('Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
    });

    // Reset form after submission
    setFormData({
      from_name: '',
      from_email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <h2>Contact us</h2>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {messageStatus && <p>{messageStatus}</p>}
    </div>
    

  );
}

export default ContactForm;
