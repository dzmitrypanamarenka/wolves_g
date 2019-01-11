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
  <span className='cookie-text'>Diese Website verwendet Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website erhalten.</span>
  <a href="https://cookiesandyou.com" className='cookie-link'>Mehr erfahren</a>
</CookieConsent>
