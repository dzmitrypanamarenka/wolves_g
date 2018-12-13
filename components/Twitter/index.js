// import React from 'react';
//
// import { FacebookProvider, Page } from 'react-facebook';
//
//
// export default () => <div className='twitter-wrapper'>
//
// </div>;

import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import './styles/style.scss';

export default class Twitter extends Component {
  render() {
    return (
      <FacebookProvider  appId="783469808696972">
        <div className='fb-wrapper'>
          <Page
            href="https://www.facebook.com/Gaming-Wolves-1936582516635559"
            tabs="timeline"
            showFacepile={false}
            smallHeader
            hideCover
          />
        </div>
      </FacebookProvider>
    );
  }
}
