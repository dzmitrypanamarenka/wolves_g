import React from 'react';
import { Layout, Row, Col } from 'antd';
import './styles/style.scss';

const { Header } = Layout;

export default () => <Header className='main-header'>
    <Row className= 'container'  >
        <Col span={24} className = "wrapper">Picture</Col>
        <Col span={24} className='main-nav'> 
            <ul className="list">
                <li className="item">STARTSEITE</li>
                <li className="item">ONLINE-MAGAZIN</li>
                <li className="item">BLOG</li>
                <li className="item">ÜBER UNS</li>
                <li className="item">SHOP</li>
            </ul>
        </Col>
    </Row>
</Header>;