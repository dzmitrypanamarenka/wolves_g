import React from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import ReactGA from 'react-ga';

import '../normalize.scss';
import 'antd/dist/antd.css';
import '../fonts.scss';
import '../style.scss';
import '../Header/styles/style.scss';
import '../Footer/styles/style.scss';

import { Header, Footer, Cookie } from '../';

const { Content } = Layout;
if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-132824088-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default ({ children }) => <div>
  <Head>
    <title>Gaming wolves</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="icon" type="image/png" href="/static/img/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/static/img/favicon-16x16.png" sizes="16x16" />
    <link rel='shortcut icon' href='/static/img/favicon.ico'/>
  </Head>
  <Layout>
    <Header/>
    <Content>
      { children }
    </Content>
    <Footer/>
    <Cookie/>
  </Layout>
</div>
