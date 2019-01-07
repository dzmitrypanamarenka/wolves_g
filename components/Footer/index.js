import React from 'react';
import { Layout } from 'antd';
import Link from "next/link";
import { withRouter } from 'next/router';

const { Footer } = Layout;

class PageFooter extends React.Component {
  render() {
    const { route } = this.props.router;
    const defaultCN = 'title';
    return <Footer className='footer'>
      <div className='container'>
        <div className='description'>
          <h3 className='title'>GAMING WOLVES</h3>
          <p className='text'>GAMING WOLVES ist ein neues online Gaming Magazin über Brett-, Karten- und Digital-Spiele. Das Magazin ist kostenlos und erscheint alle drei Monate. Die Idee von GAMING WOLVES ist zum einen, Spiele interaktiv und anders zu präsentieren. Zum anderen wollen wir die Community und die unterschiedlichen Plattformen wie YouTube, Blogs und Podcasts einbinden, sodass man sich vom Spiel ein besseres Bild machen kann und gleichzeitig neue Kanäle entdeckt. Wir wünschen euch viel Spaß beim lesen!
          </p>
        </div>
        <div className='legal'>
          <h3 className='title'>RECHTLICHES</h3>
          <Link href={`/contact`}>
            <a className='link'>
              <h3
                className={`${defaultCN} ${route === '/Contact' ? '-active' : ''}`}
              >Kontakt</h3>
            </a>
          </Link>
          <Link href={`/impressum`}>
            <a className='link -impressum'>
              <h3
                className={`${defaultCN} ${route === '/Impressum' ? '-active' : ''}`}
              >Impressum</h3>
            </a>
          </Link>
          <Link href={`/legal`}>
            <a className='link'>
              <h3
                className={`${defaultCN} ${route === '/Legal' ? '-active' : ''}`}
              >Datenschutzerklärung</h3>
            </a>
          </Link>
        </div>
      </div>
    </Footer>
  }
}

export default withRouter(PageFooter);
