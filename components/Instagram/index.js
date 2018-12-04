import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

export default class Instagram extends Component {
  render(){
    return (
      <div id='instagram-app'>
        <Instafeed
          limit='2'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target='instafeed'
          template='instagram-app'
          userId='251970326'
          clientId='b0eefc0be2114c7ea7080f93d3eebbaa'
        />
      </div>
    )
  }
}
