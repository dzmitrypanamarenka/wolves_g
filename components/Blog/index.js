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




import _ from 'lodash';
import { combineReducers } from 'redux';

// BEGIN (write your solution here)
export default() => {
  const comments = (state = {}, action) => {
    switch (action.type) {
      case 'TASK_ADD': {
         const {task} = action.payload;
      return {...state, [task.id]: {id:task.id, taskId: task.id}, body: task.body};
      }
      case 'TASK_REMOVE': {
        const {id} = action.payload;
        return omit(state, id);
      }
      case 'TASK_COMMENT_ADD': {
        
      }
    }
  }
}
// END
