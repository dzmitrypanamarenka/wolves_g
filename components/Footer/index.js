import React from 'react';
import { Layout } from 'antd';
import './styles/style.scss';

const { Footer } = Layout;

export default () => <Footer className='footer'>
    <div className='container'>
        <div className='description'>
            <h3 className='title'>GAMING WOLVES</h3>
            <p className='text'>GAMINGWOLVESisteinOnline-MagazinüberBrett-undKartenspiele,
                wieauchDigitaleSpiele.DasOnline-Magazinerscheintvierteljährlich
                undeswerdenzwischendurchBerichte„Angespielt“erscheinen,die
                euchunsereErsteindrückeüberdiejeweiligenSpielegebenwerden.
                DieIdeeist,EuchSpieleinteraktivundanderszupräsentieren,
                sodassihrdieseganzneuerlebenundwahrnehmenkönnt.
                DabeiwünschenwireuchganzvielSpaß!
            </p>
        </div>
        <div className='legal'>
            <h3 className='title'>RECHTLICHES</h3>
            <span className='text'>Kontakt</span>
            <span className='text'>Impressum</span>
            <span className='text'>Datenschutzerklärung</span>
        </div>
    </div>
</Footer>
