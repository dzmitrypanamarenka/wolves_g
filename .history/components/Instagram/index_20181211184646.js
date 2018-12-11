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
          userId='8337366379'
          clientId='52d1a9e8e66641d6922f82068017c921'
          accessToken='8337366379.1677ed0.a5e1d0695eb649f1a386406b73ae1c70'
        />
      </div>
    )
  }
}
