import React from 'react';

import './ContactUs.css';
import { LocationIcon, MailIcon, PhoneIcon } from '../Utils/icons';

const contactLists = [
  {
    icon: <LocationIcon />,
    title: 'opening hours',
    description: 'Monday- Friday 10 AM - 11 PM',
  },
  {
    icon: <LocationIcon />,
    title: 'address location',
    description: '12 Street Rd Suite United States of America',
  },
  {
    icon: <MailIcon />,
    title: 'email address',
    description: 'helpInfo@fitkitexample.com',
  },
  {
    icon: <PhoneIcon />,
    title: 'phone number',
    description: '+ 163-6359-9852',
  },
];

const ContactUs = () => {
  // const [values, setValues] = useState({});

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = () => {
  //   console.log(values);
  // };

  return (
    <div id="contactus" className="contact-container">
      <div className="left-container">
        <div className="contact-word1">gym contact info</div>
        <div className="contact-word2">
          {contactLists.map((contact, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-text">
                <div className="contact-title">{contact.title}</div>
                <div className="contact-description">{contact.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.861372045634!2d75.96039317506778!3d12.458951587811299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5091bfcf62179%3A0x2edb58e092d58d3d!2sDesign%20Forum!5e0!3m2!1sen!2sin!4v1731235976719!5m2!1sen!2sin"
          // width="600"
          // height="450"
          // style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <div className="input-section">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={values.fullName || ''}
            required
          />
        </div>
        <div className="input-section">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
          />
        </div>
        <div className="input-section">
          <label htmlFor="">Phone No.</label>
          <input
            type="number"
            name="phoneNo"
            onChange={handleChange}
            value={values.phoneNo || ''}
          />
        </div>
        <div className="input-section">
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="3"
            onChange={handleChange}
            value={values.message || ''}
          />
        </div>
        <div className="submit-btn">
          <button onClick={() => handleSubmit()}>Submit</button>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
