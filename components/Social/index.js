import React from 'react';
import { Icon } from 'antd';
// import ReactSVG from 'react-svg';

import './styles/style.scss';

export default () => <div className='social-icons'>
  <a href='https://www.instagram.com/gamingwolvesnet/' className='icon-wrap'>
    <Icon type="instagram" theme="outlined" className='icon'/>
  </a>
  <a href='https://www.youtube.com/channel/UCaVBl-zDv_5iv2CVLzt_4iQ?pbjreload=10' className='icon-wrap'>
    <Icon type="youtube" theme="outlined" className='icon'/>
  </a>
  <a href='https://www.facebook.com/GamingWolves/ ' className='icon-wrap'>
    <Icon type="facebook" theme="outlined" className='icon'/>
  </a>
  <Link href={`/contact`}>
    <a className='icon-wrap'>
      <Icon type="mail" theme="outlined" className='icon'/>
    </a>
  </Link>  
</div>;