import React from 'react';
import './Contact.css'; // Import CSS file for styling
import profileImage from './profile.png'; // Import your image file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faInstagram, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import required icons

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div class="move">
          <div className="social-icons">
          contact me : <a href="https://www.instagram.com/dhanush_7_official" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/7502218281" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.linkedin.com/in//dhanush-kumar-782a7527a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/2004-Dhanush" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            </div>
          </div>
        </div>
        <div className="contact-item">
          <h1>Contact Details</h1>
          <div className="details">
            <div className="detail">
              <h3>Name:</h3>
              <p>Dhanush Kumar S</p>
            </div>
            <div className="detail">
              <h3>email:</h3>
              <p>dk255767@gmail.com</p>
            </div>
            <div className="detail">
              <h3>Phone:</h3>
              <p>9715621850</p>
            </div>
            <div className="detail">
              <h3>Address:</h3>
              <p>CSBS acedemic block,KSRCT.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
