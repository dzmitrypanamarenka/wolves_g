import React from 'react';
import { Icon } from 'antd';
// import ReactSVG from 'react-svg';

import './styles/style.scss';

export default () => <div className='social-icons'>
  <a href='#' className='icon-wrap'>
    <Icon type="instagram" theme="outlined" className='icon'/>
  </a>
  <a href='#' className='icon-wrap'>
    <Icon type="twitter" theme="outlined" className='icon'/>
  </a>
  <a href='#' className='icon-wrap'>
    <Icon type="facebook" theme="outlined" className='icon'/>
  </a>
  <a href='./coming-soon' className='icon-wrap'>
    <Icon type="mail" theme="outlined" className='icon'/>
  </a>
  {/*<ReactSVG src="/static/img/Email.svg" />*/}
  {/*<ReactSVG src="/static/img/Facebook.svg" />*/}
  {/*<ReactSVG src="/static/img/Instagram.svg" />*/}
  {/*<ReactSVG src="/static/img/Ins.svg" />*/}
</div>;