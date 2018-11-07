import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

import { Layout, Post } from '../../components';
import './styles/index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const url = 'http://localhost:8081/blog';

class FormBlog extends React.Component {
  state = {
    id: ''
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    axios.post(`${url}/new`, values);
  };
  
  componentUnmount() {
    this.setState({ id: '' });
  }
  
  componentDidMount() {
    const { id } = this.props.router.query;
    if(id){
      this.setState({ id });
      return this.props.fetchPosts(id);
    }
    return this.props.fetchPosts();
  }
  
  renderSinglePost = () => {
    if(this.props.posts){
      const { data } = this.props.posts;
      return <Post key={data._id} {...data}/>
    }
    return null;
  };
  
  renderAllPosts = () => {
    if(this.props.posts){
      const { data } = this.props.posts;
      return data.map(el => <Post key={el._id} {...el}/>)
    }
    return null;
  };
  
  render () {
    const { getFieldDecorator } = this.props.form;
    return <Layout>
      <div className="blog-wrap">
        <Form onSubmit={this.onSubmit}>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input title!' }],
            })(
              <Input placeholder="title" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('tag', {
                rules: [{ required: true, message: 'Please input category!' }],
              },
            )(
              <Input placeholder="tag"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('text', {
              rules: [{ required: true, message: 'Please input text!' }],
            })(
              <TextArea placeholder="text"/>
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              Send
            </Button>
          </FormItem>
        </Form>
        <div className='posts-wrap'>
          {/*{ this.state.id ? this.renderSinglePost() : this.renderAllPosts() }*/}
          <Post/>
        </div>
      </div>
    </Layout>
  }
}
const Index = Form.create()(FormBlog);
export default Index;



