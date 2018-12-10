import React, {Component} from 'react';
import Instafeed from 'react-instafeed';

import template from './template';
import './styles.scss';

export default class Instagram extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div id='instagram-app' className='instagram-wrap'>
        <Instafeed
          limit='2'
          ref='instafeed'
          sortBy='most-recent'
          target='instagram-app'
          template={template()}
          userId='1069024226'
          clientId='b0eefc0be2114c7ea7080f93d3eebbaa'
          accessToken='1069024226.1677ed0.f4fcf143718e40bc9b89813315d6c6a5'
        />
      </div>
    )
  }
}
