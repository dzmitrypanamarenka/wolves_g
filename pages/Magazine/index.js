import React from 'react';
import Layout from '../../components/Layout';
import { Icon } from 'antd';

import './styles.scss';

export default () => <Layout>
    <div className='static-container -magazine'>
        <figure className='img-wrap'>
            <img src='../../static/img/magazine-preview.jpg' alt="" className='img'/>            
        </figure>
        <div className='wrap -content'>
            <div className='magazine-wrap'>
                <img src="/static/img/magazine.png" alt="magazine" className='img'/>
                <div className='wrap'>
                <a href='https://magazine.gamingwolves.net/de_DE/9518/140701' className='link'>
                    <div className='title-wrapper'>
                        <span className='text'>Ausgabe 1 | DEZ 18 - FEB 19</span>
                        <h3 className='title'>jetzt lesen</h3>
                    </div>
                </a>
                </div>
            </div>
            <div className='magazine-wrap'>
                <img src="/static/img/magazine2.jpg" alt="magazine" className='img'/>
                <div className='wrap'>
                    <span className='link'>
                    <div className='title-wrapper'>
                        <span className='text'>Ausgabe 2 | MAR - JUN 19</span>
                        <h3 className='title'>coming soon...</h3>
                    </div>
                    </span>
                </div>
            </div>
            <span className='title'><b>HINWEIS:</b> Bitte deaktiviert Eure Adblocker auf Handy, wie z:B. Crystal, um das Magazin nutzen zu können.</span>
        </div>
        <div className='wrap -benefits'>
            <div className='benefit-box'>
                <Icon type="check" className='icon'/>
                <div className='text-wrap'>
                    <span className='title'>Unbegrenzt lesen</span>
                    <span className='text'>Desktop, Tablet and Handy</span>
                </div>
            </div>
            <div className='benefit-box -middle'>
                <Icon type="check" className='icon'/>
                <div className='text-wrap'>
                    <span className='title'>Kostenlos lesen</span>
                    <span className='text'>Gib dein Geld lieber<br/>
                    für Spiele aus
                    </span>
                </div>
            </div>
            <div className='benefit-box -large'>
                <Icon type="check" className='icon'/>
                <div className='text-wrap'>
                    <span className='title'>Neues Leseerlebnis</span>
                    <span className='text'>Einbindung von unterschiedlichen<br/>
                    Influencer & Medien
                    </span>
                </div>
            </div>
        </div>
    </div>
</Layout>