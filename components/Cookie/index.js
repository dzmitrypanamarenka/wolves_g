import React from 'react';
import CookieConsent from 'react-cookie-consent';

import './styles.scss';

export default () => <CookieConsent
  location="bottom"
  buttonText="Got it!"
  style={{ background: "#000" }}
  buttonClasses='cookie-btn'
  buttonStyle={{padding: '10px 15px', background: '#ffa500', color: '#000'}}
  contentStyle={{flex: '1'}}
>
  <span className='cookie-text'>This website uses cookies to ensure you get the best experience on our website.</span>
  <a href="https://cookiesandyou.com" className='cookie-link'>Learn more</a>
</CookieConsent>
