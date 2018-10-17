import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

import { Layout, BlogPost } from '../../components';
import './styles/index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const url = 'http://localhost:8081/blog';

class FormBlog extends React.Component {
  state = {
    posts: []
  };
  
  fetchPosts = async ()=>{
    const { data } = await axios.get(`${url}/posts`);
    this.setState({ posts: data });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    axios.post(`${url}/new`, values);
  };
  
   componentDidMount() {
    this.fetchPosts()
  }

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
          {this.state.posts.map(el => {
            return <BlogPost key={el._id} {...el}/>
          })}
        </div>
      </div>
    </Layout>
  }
}
const Index = Form.create()(FormBlog);
export default Index;



