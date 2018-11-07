import React from 'react';
import { Layout } from 'antd';
import './styles/style.scss';
import Link from "next/link";

const { Footer } = Layout;

export default () => <Footer className='footer'>
    <div className='container'>
        <div className='description'>
            <h3 className='title'>GAMING WOLVES</h3>
            <p className='text'>GAMING WOLVES ist ein Online-Magazin über Brett-und Kartenspiele,
                wie auch Digitale Spiele. Das Online-Magazin erscheint vierteljährlich
                und es werden zwischendurch Berichte „Angespielt“ erscheinen, die
                euch unsere Ersteindrücke über die jeweiligen Spiele geben werden.
                Die Idee ist,Euch Spiele interaktiv und anders zu präsentieren,
                so dass ihr diese ganz neu erleben und wahrnehmen könnt.
                Dabei wünschen wir euch ganz viel Spaß!
            </p>
        </div>
        <div className='legal'>
            <h3 className='title'>RECHTLICHES</h3>
            <Link href={`/coming-soon`}>
              <a className='link'>
                <h3 className='title'>Kontakt</h3>
              </a>
            </Link>
            <Link href={`/coming-soon`}>
              <a className='link'>
                <h3 className='title'>Impressum</h3>
              </a>
            </Link>
            <Link href={`/coming-soon`}>
              <a className='link'>
                <h3 className='title'>Datenschutzerklärung</h3>
              </a>
            </Link>
        </div>
    </div>
</Footer>
