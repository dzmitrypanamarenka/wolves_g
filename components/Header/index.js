import React from 'react';
import { Layout } from 'antd';
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import { withRouter } from 'next/router';

const { Header } = Layout;

class HeaderNav extends React.Component {
  render() {
    const { route } = this.props.router;
    const defaultCN = 'title';
    const defaultMobileCN = 'menu-item';
    return <Header className='main-header'>
      <div className= 'container'  >
        <div className = "wrapper">
          <div className='logo'></div>
        </div>
        <div className='main-nav'>
          <ul className="list">
            <li className="item">
              <Link href={`/`}>
                <a
                  className={`${defaultCN} ${route === '/Homepage' ? '-active' : ''}`}
                >STARTSEITE</a>
              </Link>
            </li>
            <li className="item">
              <a href='https://magazine.gamingwolves.net' className='title'>ONLINE-MAGAZIN</a>
            </li>
            <li className="item">
              <Link href={`/blog`}>
                <a
                  className={`${defaultCN} ${route === '/Blog' ? '-active' : ''}`}
                >BLOG</a>
              </Link>
            </li>
            <li className="item">
              <Link href={`/about`}>
                <a
                  className={`${defaultCN} ${route === '/UberUns' ? '-active' : ''}`}
                >ÜBER UNS</a>
              </Link>
            </li>
            <li className="item">
              <Link href={"https://shop.spreadshirt.de/gaming-wolves/"}>
                <a className='title'>SHOP</a>
              </Link>
            </li>
            <li className="item">
              <Link href={`/donate`}>
                <a
                  className={`${defaultCN} ${route === '/Donate' ? '-active' : ''}`}
                >UNTERSTÜTZEN</a>
              </Link>
            </li>
          </ul>
          <Menu right className='mobile-menu' >
            <a
              id="home"
              className={`${defaultMobileCN} ${route === '/Homepage' ? '-active' : ''}`}
              href="/"
            >STARTSEITE</a>
            <a id="magazine" className="menu-item" href="https://magazine.gamingwolves.net">ONLINE-MAGAZIN</a>
            <a
              id="home"
              className={`${defaultMobileCN} ${route === '/Blog' ? '-active' : ''}`}
              href="/"
            >BLOG</a>
            <a
              id="home"
              className={`${defaultMobileCN} ${route === '/UberUns' ? '-active' : ''}`}
              href="/"
            >ÜBER UNS</a>
            <a id="shop" className="menu-item" href="https://shop.spreadshirt.de/gaming-wolves/">SHOP</a>
            <a
              id="home"
              className={`${defaultMobileCN} ${route === '/Donate' ? '-active' : ''}`}
              href="/"
            >UNTERSTÜTZEN</a>
          </Menu>
        </div>
      </div>
    </Header>
  }
}

export default withRouter(HeaderNav);
