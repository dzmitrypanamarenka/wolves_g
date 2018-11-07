import React from 'react';
import { Layout } from 'antd';

import '../normalize.scss';
import '../style.scss';
import 'antd/dist/antd.css';
import '../fonts.scss';
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