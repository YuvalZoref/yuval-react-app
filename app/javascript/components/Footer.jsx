import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return(
    <div className='footer'>
      <div className='icon-links'>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  )
};

export default Footer;
