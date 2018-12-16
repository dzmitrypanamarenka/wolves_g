import React from 'react';
import { Layout, Row, Col } from 'antd';
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';

import './styles/style.scss';

const { Header } = Layout;

export default () => <Header className='main-header'>
    <div className= 'container'  >
        <div className = "wrapper">
          <div className='logo'></div>
        </div>
        <div className='main-nav'>
            <ul className="list">
                <li className="item">
                  <Link href={`/`}>
                    <a className='title'>STARTSEITE</a>
                  </Link>
                </li>
                <li className="item">
                  <a href='https://magazine.gamingwolves.net' className='title'>ONLINE-MAGAZIN</a>
                </li>
                <li className="item">
                  <Link href={`/blog`}>
                    <a className='title'>BLOG</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/about`}>
                    <a className='title'>ÜBER UNS</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={"https://shop.spreadshirt.de/gaming-wolves/"}>
                    <a className='title'>SHOP</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href={`/donate`}>
                    <a className='title'>UNTERSTÜTZEN</a>
                  </Link>
                </li>
            </ul>
            <Menu right className='mobile-menu' >
              <a id="home" className="menu-item" href="/">STARTSEITE</a>
              <a id="about" className="menu-item" href="https://magazine.gamingwolves.net">ONLINE-MAGAZIN</a>
              <a id="about" className="menu-item" href="/blog">BLOG</a>
              <a id="contact" className="menu-item" href="/about">ÜBER UNS</a>
              <a id="shop" className="menu-item" href="https://shop.spreadshirt.de/gaming-wolves/">SHOP</a>
              <a id="shop" className="menu-item" href="/donate">UNTERSTÜTZEN</a>
            </Menu>
        </div>
    </div>
</Header>;
