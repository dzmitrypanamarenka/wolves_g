import React from 'react';
import Link from 'next/link';

import './styles.scss';

export const testPost = ({ _id, title, text }) => <section className={`${_id}-post post-wrap`}>
  <h3 className='title'>{ title }</h3>
  <p className='text'>{ text }</p>
  <Link href={`/blog/posts/${_id}`}>
    <a>push</a>
  </Link>
</section>

export default () => <section className={`post-wrap`}>
  <h3 className='title'>
    Root angespielt
  </h3>
  <div style={{backgroundImage: `url('../../static/img/root1.jpg')`}} className='img'></div>
  <p className='text'>
    Ersteindruck von ROOT:
  </p>
  <p className='text'>
    Diese Woche spielte ich in Duisburg zu viert (Fabian Selbach, Fabian und Chris von den Brettspiel Geeks) ROOT von Leder Games, welches von André sehr gut erklärte wurde! 👍
  </p>
  <p className='text'>
    Ein sehr taktisches und Asymmetrisches Strategiespiel für Kenner- und Vielspieler.
    Ein Kampf um Wald und Siegpunkte, was sehr hübsch aussah, aber auch genügend Tiefe, interessante und Unterschiedliche Mechaniken beinhaltet!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/root2.jpg')`}} className='img -post -left'></span>
    Root ist aber ein Spiel, was man definitiv mehrmals spielen sollte. Mindestens vier Mal, um so jede Rasse und dessen unterschiedlichen Fähigkeiten zu verstehen und somit im Spiel vorbereitet und richtig reagieren zu können!
    Die Regeln sind grundsätzlich einfach, aber die jeweiligen Spezialfähigkeiten, machen dass Spiel so komplex und dadurch ist der Einstieg recht Hoch!
    Sobald man aber einmal drin ist, spielt sich ROOT sehr gut und flüssig.
  </p>
  <p className='text'>
    Des Weiteren, muss man erwähnen, dass für ROOT schon gute englisch Kenntnisse von Nöten sind, da viele Fähigkeiten auf dem Spieler Tableau für Fragezeichen sorgen können.
    Dadurch das es Asymmetrisch gespielt wird und somit jeder Spieler seinen kompletten Zug absolviert, kann es leider zu Downtime’s kommen!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/root3.jpg')`}} className='img -post -right'></span>
    Interaktiv war es schon, obwohl man schon stark auf sich und seiner Strategie fokussiert ist. Liegt aber wahrscheinlich erst mal daran, dass man versucht das Spiel zu verstehen.
    Ich z.B. wusste nicht wie meine Gegner gewinnen können und hab mich do
    It nur auf mich konzentriert!
    Ich würde es immer mitspielen und bin froh das ich es durch André, vom Spieltreff Duisburg, jederzeit spielen kann!
  </p>
  <p className='text'>
    I ❤️ The Forest Rebels!
  </p>
</section>
