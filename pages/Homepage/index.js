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
            <Video video='306598289'/>
          </div>
          <div className='online-shop'>
            <h2 className='block-title'>ONLINE-MAGAZIN</h2>
            <div className='magazine-wrap'>
              <span className='title'>NEU!</span>
              <img src="/static/img/magazine1.png" alt="magazine" className='img'/>
              <div className='wrap'>
                <p className='text'>
                  DAS<span className='color -new'>NEUE</span><span className='color -magazine'>ONLINE MAGAZIN</span>ÜBER BRETTSPIELE, KARTENSPIELE & DIGITALE SPIELE!
                </p>
                <a href='https://magazine.gamingwolves.net/de_DE/11453/178528' target='_blank' className='link'>
                  <div className='title-wrapper'>
                    <h3 className='title'>jetzt lesen</h3>
                    <span className='text'>Ausgabe 2 | MAR 24 - MAI 19</span>
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
          <div className='wrapper -tolerance' >
            <h2 className='block-title -sponsors'>WIR SIND FÜR</h2>
            <div className='img' style={{backgroundImage: "url('/static/img/tolerance.jpg')"}}></div>
          </div>
          <div className='wrapper -sponsors' >
            <h2 className='block-title -sponsors'>Unterstützt von</h2>
            <div className='image-wrap'>
              <a href='https://www.spiele-offensive.de' className='img' style={{backgroundImage: "url('/static/img/sponsors2.jpg')"}}/>
              <a href='https://www.blackfire.eu/' className='img' style={{backgroundImage: "url('/static/img/sponsors1.png')"}}/>
              <a href='http://www.magestore.de/' className='img' style={{backgroundImage: "url('/static/img/sponsors3.jpg')"}}/>
              <a href='https://www.ali-baba-spieleclub.de/' className='img' style={{
                backgroundImage: "url('/static/img/sponsors4.jpg')",
                backgroundSize: '115px 75px'
              }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
</Layout>;
