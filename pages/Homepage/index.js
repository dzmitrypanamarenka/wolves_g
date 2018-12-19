import React from 'react';
import Video from '@u-wave/react-vimeo';
import {Row, Col, Button} from 'antd';

import { Layout, Social, Twitter, Instagram } from '../../components';
import { PreviewContainer } from '../../containers';
import bannerRandom from './bannerRandom';

import './styles/index.scss';
import '../../node_modules/video-react/dist/video-react.css';

const opts = {
  playerVars: {
    autoplay: 0
  }
};

export default () => <Layout>
    <div className="grid-wrapper">
      <div className='container'>
        <div className='main-content'>
          <div className='video'>
            <Video video='306598289'  />
          </div>
          <div className='online-shop'>
            <h2 className='block-title'>ONLINE-MAGAZIN</h2>
            <div className='magazine-wrap'>
              <span className='title'>NEU!</span>
              <img src="/static/img/magazine.png" alt="magazine" className='img'/>
              <div className='wrap'>
                <p className='text'>
                  DAS<span className='color -new'>NEUE</span><span className='color -magazine'>ONLINE MAGAZIN</span>ÜBER BRETTSPIELE, KARTENSPIELE & DIGITALE SPIELE!
                </p>
                <a href='https://magazine.gamingwolves.net' className='link'>
                  <div className='title-wrapper'>
                    <h3 className='title'>jetzt lesen</h3>
                    <span className='text'>Ausgabe 1 | DEZ 18 - FEB 19</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='blog'>
            <h2 className='block-title -blog'>BLOG</h2>
            <PreviewContainer/>
          </div>
        </div>
        <div className='sidebar'>
          <div className='banner'>{bannerRandom()}</div>
          <div className='wrapper'>
            <h2 className='block-title'>FOLGT UNS AUF</h2>
            <Social/>
          </div>
          <div className='wrapper'>
            <h2 className='block-title'>FACEBOOK</h2>
            <Twitter/>
          </div>
          <div className='wrapper' >
            <h2 className='block-title'>INSTAGRAM</h2>
            <Instagram/>
          </div>
        </div>
      </div>
    </div>
</Layout>;
