import React from 'react';
import {Row, Col} from 'antd';

import './styles/index.scss';

export default () => <div className="blog-content">
  <Row gutter={24}>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
  </Row>
  <Row gutter={24}>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
  </Row>
  <Row gutter={24}>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
    <Col span='12' className='item'>
      <img src='/static/blog-img.png' alt='blog-img'></img>
      <div className='wrapper'>
        <h3 className='title'>Title</h3>
        <span className='text'>text</span>
      </div>
    </Col>
  </Row>
</div>;
