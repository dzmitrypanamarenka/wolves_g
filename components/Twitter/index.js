import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

import './styles/style.scss';

export default () => <div className='twitter-wrapper'>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        linkColor="#FFA500"
        theme="dark"
        options={{height: 420}}
        noHeader
        noFooter
        noBorders
        noScrollbar
        transparent
      />
</div>;