import React from 'react';
import {Row, Col, Button} from 'antd';

import { Layout, Blog, Social, Twitter } from '../../components/index';

import './styles/index.scss';

export default () => <Layout>
    <div className="grid-wrapper">
      <Row className='container'>
        <Col span={18} className='main-content'>
          <div className='video'><img src='/static/video.png' alt='video'></img></div>
          <div className='online-shop'>
            <h2 className='block-title'>ONLINE-MAGAZIN</h2>
            <Button type="primary" className='btn'>
              <h4 className='title'>JETZT LESEN</h4>
              <span className='text'>ONLINE-MAGAZIN | NO. 1 OKT - DEZ</span>
            </Button>
          </div>
          <div className='blog'>
            <h2 className='block-title'>BLOG</h2>
            <Blog></Blog>
          </div>
        </Col>
        <Col span={6} className='sidebar'>
          <div className='banner'><img src='/static/banner1.png' alt='banner'></img></div>
          <div className='wrapper'>
            <h2 className='block-title'>FOLGT UNS AUF</h2>
            <Social/>
          </div>
          <div className='wrapper'>
            <h2 className='block-title'>TWITTER</h2>
            <Twitter/>
          </div>
          <div className='wrapper'>
            <h2 className='block-title'>NEUE KOMMENTARE</h2>
            <div className='comment'>
              <p className='text'>#best_site #Dim_best_developer what a wonderfull day today</p>
              <span className='date'>3s day ago</span>
            </div>
            <div className='comment'>
              <p className='text'>#best_site #Dim_best_developer what a wonderfull day today</p>
              <span className='date'>3s day ago</span>
            </div>
          </div>
          <div className='wrapper'>
            <h2 className='block-title'>INSTAGRAM</h2>
            <img className='img-inst' src='/static/Instagram1.png' alt='instagram image'></img>
            <img className='img-inst' src='/static/Instagram2.png' alt='instagram image'></img>
          </div>
          <img src='/static/banner3.png' alt='banner'></img>
        </Col>
      </Row>
    </div>
</Layout>;
