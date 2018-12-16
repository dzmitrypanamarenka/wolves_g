import React from 'react';
import Layout from '../../components/Layout';

import './styles.scss';

export default () => (<Layout>
  <div className='static-container -about'>
    <div className='title-wrap -mobile'>
      <h1 className='title -main'>Über Uns</h1>
    </div>
    <div className='title-wrap'>
      <h1 className='title -main'>Über Uns</h1>
      <p className='text'>
        <span className='part'>
          Verspielte Grüße,
        </span> 
        <span className='part'>
          wir sind Tatsiana Filipovich, Tobias Franken und Team und wir sind begeistert, Euch unser neues Projekt GAMING WOLVES vorzustellen! GAMING WOLVES ist ein neues digitales Gaming Magazin von Gamern für Gamer! Wir berichten über Brett-, Karten- und Digital-Spiele. Das Magazin erscheint alle drei Monate und wird hauptsächlich Kenner,- Viel- und Expertenspieler ansprechen, aber natürlich ist jeder Spielbegeisterte herzlich im Rudel willkommen!
        </span>
        <span className='part'>
          Die Idee von GAMING WOLVES ist zum einen, der Community ein ganz neues visuelles Leseerlebnis zu bieten: mit spannenden Animationen, Videos und natürlich interessanten und informativen Artikeln. Gleichzeitig ist es uns ein großes Anliegen, die Community und Akteure / Spiele-begeisterte/Influencer unterschiedlichster Plattformen wie YouTube, Blogs und Podcasts mit deren individuellen Stärken einzubinden.
        </span>
        <span className='part'>
          Sodass man sich vom Spiel ein besseres Bild machen kann und gleichzeitig neue Kanäle entdeckt. Dabei suchen wir uns die Spiele heraus, die wir unbedingt selber spielen wollen. Wir nehmen dadurch nur bedingt Rücksicht auf Hypes und Verlage, versuchen Euch aber die breite Masse an Verlagen, Spielen, Blogger und YouTuber zu präsentieren. Dabei bleiben wir auf jeden Fall unabhängig und vor allem ehrlich!
        </span>
      </p>
    </div>
    <div className='wrap'>
      <img src='/static/img/our_team.jpg' className='img'/>
    </div>
    <div className='title-wrap -mobile'>
      <p className='text'>
        <span className='part'>
          Verspielte Grüße,
        </span> 
        <span className='part'>
          wir sind Tatsiana Filipovich, Tobias Franken und Team und wir sind begeistert, Euch unser neues Projekt GAMING WOLVES vorzustellen! GAMING WOLVES ist ein neues digitales Gaming Magazin von Gamern für Gamer! Wir berichten über Brett-, Karten- und Digital-Spiele. Das Magazin erscheint alle drei Monate und wird hauptsächlich Kenner,- Viel- und Expertenspieler ansprechen, aber natürlich ist jeder Spielbegeisterte herzlich im Rudel willkommen!
        </span>
        <span className='part'>
          Die Idee von GAMING WOLVES ist zum einen, der Community ein ganz neues visuelles Leseerlebnis zu bieten: mit spannenden Animationen, Videos und natürlich interessanten und informativen Artikeln. Gleichzeitig ist es uns ein großes Anliegen, die Community und Akteure / Spiele-begeisterte/Influencer unterschiedlichster Plattformen wie YouTube, Blogs und Podcasts mit deren individuellen Stärken einzubinden.
        </span>
        <span className='part'>
          Sodass man sich vom Spiel ein besseres Bild machen kann und gleichzeitig neue Kanäle entdeckt. Dabei suchen wir uns die Spiele heraus, die wir unbedingt selber spielen wollen. Wir nehmen dadurch nur bedingt Rücksicht auf Hypes und Verlage, versuchen Euch aber die breite Masse an Verlagen, Spielen, Blogger und YouTuber zu präsentieren. Dabei bleiben wir auf jeden Fall unabhängig und vor allem ehrlich!
        </span>
      </p>
    </div>
  </div>
</Layout>)