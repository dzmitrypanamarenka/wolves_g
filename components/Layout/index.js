import React from 'react';
import { Layout } from 'antd';

import './styles.scss';

import { Header, Footer } from '../';

const { Content } = Layout;

export default ({ children }) => <Layout>
  <Header/>
  <Content>
    { children }
  </Content>
  <Footer/>
</Layout>