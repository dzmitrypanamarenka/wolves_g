import React from 'react';
import axios from 'axios';

import { Layout } from '../../components';
import './styles/index.scss';

export default class Blog extends React.Component {
  state = {
    title: '',
    tag: '',
    text: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8081/blog/new';
    const { title, tag, text } = this.state;
    axios.post(url, {
      title,
      tag,
      text
    });

  };

  render () {
    return <Layout>
      <div className="blog-wrap">
        <form className="form-wrap" onSubmit={this.onSubmit}>
          <input name="title" type="text" placeholder="title"
                 value={this.state.title}
                 onChange={(e) => this.setState({title: e.target.value})}
          />
          <input name="tag" type="text" placeholder="tag" value={this.state.tag}
                 onChange={(e) => this.setState({tag: e.target.value})}
          />
          <textarea name="content" id="" cols="10" rows="10" value={this.state.text}
                onChange={(e) => this.setState({text: e.target.value})}
          ></textarea>
          <input type="submit"/>
        </form>
      </div>
    </Layout>
  }
}

