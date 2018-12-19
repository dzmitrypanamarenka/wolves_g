import React from 'react';
import { Layout } from 'antd';

import '../normalize.scss';
import 'antd/dist/antd.css';
import '../fonts.scss';
import '../style.scss';
import '../Header/styles/style.scss';
import '../Footer/styles/style.scss';

import { Header, Footer } from '../';

const { Content } = Layout;

export default ({ children }) => <Layout>
  <Header/>
  <Content>
    { children }
  </Content>
  <Footer/>
</Layout>