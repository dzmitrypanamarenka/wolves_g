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
    const defaultMobileCN = 'menu-item bm-item';
    return <Header className='main-header'>
      <div className= 'container'  >
        <div className = "wrapper">
          <Link href={`/`}>
            <a className='link'>
              <div className='logo'></div>
            </a>
          </Link>
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
              <a href='https://magazine.gamingwolves.net/de_DE/9518/140701' className='title'>ONLINE-MAGAZIN</a>
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
            <Link
              href={`/`}
            >
              <a
                className={`${defaultMobileCN} ${route === '/Homepage' ? '-active' : ''}`}
                id="home"
              >STARTSEITE</a>
            </Link>
            <a id="magazine" className="menu-item" href="https://magazine.gamingwolves.net/de_DE/9518/140701">ONLINE-MAGAZIN</a>
            <Link
              href={`/blog`}
            >
              <a
                id="blog"
                className={`${defaultMobileCN} ${route === '/Blog' ? '-active' : ''}`}
              >BLOG</a>
            </Link>
            <Link
              href={`/about`}
            >
              <a
                className={`${defaultMobileCN} ${route === '/UberUns' ? '-active' : ''}`}
                id="about"
              >ÜBER UNS</a>
            </Link>
            <a id="shop" className="menu-item" href="https://shop.spreadshirt.de/gaming-wolves/">SHOP</a>
            <Link
              href={`/donate`}
            >
              <a
                id="donate"
                className={`${defaultMobileCN} ${route === '/Donate' ? '-active' : ''}`}
              >UNTERSTÜTZEN</a>
            </Link>
          </Menu>
        </div>
      </div>
    </Header>
  }
}

export default withRouter(HeaderNav);
