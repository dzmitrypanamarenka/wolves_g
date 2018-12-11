import React from 'react';
import YouTube from 'react-youtube';
import {Row, Col, Button} from 'antd';

import { Layout, Social, Twitter, Instagram } from '../../components';
import { PreviewContainer } from '../../containers'

import './styles/index.scss';
import '../../node_modules/video-react/dist/video-react.css';

export default () => <Layout>
    <div className="grid-wrapper">
      <Row className='container'>
        <Col span={18} className='main-content'>
          <div className='video'>
            <YouTube videoId='3SAAKqntLYU'  playerVars: { autoplay: 1 }/>
          </div>
          <div className='online-shop'>
            <h2 className='block-title'>ONLINE-MAGAZIN</h2>
            <div className='magazine-wrap'>
              <span className='title'>NEU!</span>
              <img src="/static/img/magazine.png" alt="magazine" className='img'/>
              <div className='wrap'>
                <p className='text'>
                  DAS <span className='color'>NEUE</span><br/>
                  <span className='color'>ONLINE MAGAZIN</span><br/>
                  ÜBER BRETTSPIELE,<br/>
                  KARTENSPIELE &<br/>
                  DIGITALE SPIELE!
                </p>
                <a href='https://gamingwolves.maglr.com/de_DE/9518/140701/cover.html' className='link'>
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
        </Col>
        <Col span={6} className='sidebar'>
          <div className='banner'><img src='/static/img/banner1.png' alt='banner'></img></div>
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
        </Col>
      </Row>
    </div>
</Layout>;
