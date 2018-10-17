import React from 'react';
import axios from 'axios';
import {withRouter} from 'next/router'

import {Layout, BlogPost} from '../../components';

const url = 'http://localhost:8081/blog';

class BlogPostLayout extends React.Component {
  
  state = {
    posts: []
  };
  
  fetchPosts = async (id) => {
    const { data } = await axios.post(`${url}/posts`, { id });
    this.setState({posts: data});
  };

  componentDidMount() {
    const { id } = this.props.router.query;
    this.fetchPosts(id)
  }
  
  render() {
    return <Layout>
      <div className='posts-wrap'>
        <BlogPost {...this.state.posts}/>
      </div>
    </Layout>
  }
}

export default withRouter(BlogPostLayout);