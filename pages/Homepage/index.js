import React from 'react';
import Vimeo from 'react-vimeo';
import {Row, Col, Button} from 'antd';

import { Layout, Social, Twitter } from '../../components';
import { PreviewContainer } from '../../containers'

import './styles/index.scss';
import '../../node_modules/video-react/dist/video-react.css';

export default () => <Layout>
    <div className="grid-wrapper">
      <Row className='container'>
        <Col span={18} className='main-content'>
          <div className='video'>
            <Vimeo videoId='295060391' autoplay={true}/>
          </div>
          <div className='online-shop'>
            <h2 className='block-title'>ONLINE-MAGAZIN</h2>
            <div className='magazine-wrap'>
              <span className='title'>NEU!</span>
              <img src="/static/img/magazine.png" alt="magazine" className='img'/>
              <p className='text'>
                DAS <span className='color'>NEUE</span><br/>
                <span className='color'>ONLINE MAGAZIN</span><br/>
                ÜBER BRETTSPIELE,<br/>
                KARTENSPIELE &<br/>
                DIGITALE SPIELE!
              </p>
              <a href='https://gamingwolves.maglr.com/de_DE/9518/140701/cover.html' className='link'>
                <div className='title-wrapper'>
                    <h3 className='title'>gaming wolves</h3>
                  <span className='text'>discover now</span>
                </div>
              </a>
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
            <h2 className='block-title'>TWITTER</h2>
            <Twitter/>
          </div>
          <div className='wrapper'>
            <h2 className='block-title'>INSTAGRAM</h2>
            <img className='img-inst' src='/static/img/Instagram1.png' alt='instagram image'></img>
            <img className='img-inst' src='/static/img/Instagram2.png' alt='instagram image'></img>
          </div>
          <img src='/static/img/banner3.png' alt='banner'></img>
        </Col>
      </Row>
    </div>
</Layout>;
