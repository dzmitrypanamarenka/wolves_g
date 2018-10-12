import React from 'react';

import { Layout } from '../../components';
import './styles/index.scss';

export default () => <Layout>
  <div className="blog-wrap">
    <form className="form-wrap" action="/blog/new" method="post">
      <input name="title" type="text" placeholder="title"/>
      <input name="tag" type="text" placeholder="tag"/>
      <textarea name="content" id="" cols="10" rows="10"></textarea>
      <input type="submit"/>
    </form>
  </div>
</Layout>


