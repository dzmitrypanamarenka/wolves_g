import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

import './styles.scss';

export default () => <CookieConsent
  location="bottom"
  buttonText="Verstanden"
  style={{ background: "#000" }}
  buttonClasses='cookie-btn'
  buttonStyle={{padding: '10px 15px', background: '#ffa500', color: '#000'}}
  contentStyle={{flex: '1'}}
>
  <span className='cookie-text'>Diese Website verwendet Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website erhalten.</span>
  
  <Link href={`/legal#cookie`}>
    <a className='cookie-link'>Mehr erfahren</a>
  </Link>
</CookieConsent>
