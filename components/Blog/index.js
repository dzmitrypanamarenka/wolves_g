import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

import { Post1, Post2, Post3, Post4 } from '../../components/Post';

import { Layout } from '../../components';
import './styles/index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const url = 'https://lit-island-20029.herokuapp.com/blog';

class FormBlog extends React.Component {  
  onSubmit = (e) => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    axios.post(`${url}/new`, values);
  };
  
  // componentUnmount() {
  //   this.setState({ id: '' });
  // }
  
  // componentDidMount() {
  //   const { id } = this.props.router.query;
  //   if(id){
  //     this.setState({ id });
  //     return this.props.fetchPosts(id);
  //   }
  //   return this.props.fetchPosts();
  // }
  
  renderSinglePost = () => {
    const { id } = this.props.router.query;
    const match = {
      '5bc5d0412376d54c29cfaadf': Post1,
      '5bc11a25ba69710417eb8f01': Post2,
      '5bc5cf7be0bcd84b492597c0': Post3,
      '5bc5c04f91a7c73df8bfcd4e': Post4
    };
    return match[id]();
  };
  
  renderAllPosts = () => (
    <div className='posts-wrap -all'>
      <Post1/>
      <Post2/>
      <Post3/>
      <Post4/>
    </div>
  );
  
  render () {
    const { getFieldDecorator } = this.props.form;
    return <Layout>
      <div className="blog-wrap">
        {/*<Form onSubmit={this.onSubmit}>*/}
          {/*<FormItem>*/}
            {/*{getFieldDecorator('title', {*/}
              {/*rules: [{ required: true, message: 'Please input title!' }],*/}
            {/*})(*/}
              {/*<Input placeholder="title" />*/}
            {/*)}*/}
          {/*</FormItem>*/}
          {/*<FormItem>*/}
            {/*{getFieldDecorator('tag', {*/}
                {/*rules: [{ required: true, message: 'Please input category!' }],*/}
              {/*},*/}
            {/*)(*/}
              {/*<Input placeholder="tag"/>*/}
            {/*)}*/}
          {/*</FormItem>*/}
          {/*<FormItem>*/}
            {/*{getFieldDecorator('text', {*/}
              {/*rules: [{ required: true, message: 'Please input text!' }],*/}
            {/*})(*/}
              {/*<TextArea placeholder="text"/>*/}
            {/*)}*/}
          {/*</FormItem>*/}
          {/*<FormItem>*/}
            {/*<Button*/}
              {/*type="primary"*/}
              {/*htmlType="submit"*/}
            {/*>*/}
              {/*Send*/}
            {/*</Button>*/}
          {/*</FormItem>*/}
        {/*</Form>*/}
        <div className='posts-wrap'>
          { this.props.router.query.id ? this.renderSinglePost() : this.renderAllPosts() }
        </div>
      </div>
    </Layout>
  }
}
const Index = Form.create()(FormBlog);
export default Index;



