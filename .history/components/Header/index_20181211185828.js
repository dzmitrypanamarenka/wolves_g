import React from 'react';
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';

import './styles/style.scss';

const { Header } = Layout;

export default () => <Header className='main-header'>
    <Row className= 'container'  >
        <Col span={24} className = "wrapper">Picture</Col>
        <Col span={24} className='main-nav'> 
            <ul className="list">
                <li className="item">
                  <Link href={`/`}>
                    <a className='title'>STARTSEITE</a>
                  </Link>
                </li>
                <li className="item">
                <Link href={`https://shop.spreadshirt.de/gaming-wolves/`}>
                    <a className='title'>ONLINE-MAGAZIN</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/blog`}>
                    <a className='title'>BLOG</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/coming-soon`}>
                    <a className='title'>ÜBER UNS</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/coming-soon`}>
                    <a className='title'>SHOP</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/coming-soon`}>
                    <a className='title'>UNTERSTÜTZEN</a>
                  </Link>
                </li>
            </ul>
        </Col>
    </Row>
</Header>;