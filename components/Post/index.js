import React from 'react';
import Link from 'next/link';

import './styles.scss';

const testPost = ({ _id, title, text }) => <section className={`${_id}-post post-wrap`}>
  <h3 className='title'>{ title }</h3>
  <p className='text'>{ text }</p>
  <Link href={`/blog/posts/${_id}`}>
    <a>push</a>
  </Link>
</section>

export const Post1 = () => <section className={`post-wrap`}>
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
</section>;

export const Post2 = () => <section className={`post-wrap`}>
  <h3 className='title'>
    Ersteindruck Civilization - A New Dawn
  </h3>
  <div style={{backgroundImage: `url('../../static/img/civilization1.jpg')`}} className='img'></div>
  <p className='text'>
    Wir haben das Neue <b>CIVILIZATION - A NEW DAWN</b> von Fantasy Flight Games zu dritt angespielt. Sieht wunderschön aus und spielt sich deutlich schneller und angenehmer als sein Vorgänger. Das beste war aber, dass man es zu dritt sehr gut spielen kann. Da jeder Spieler auf jeden aufpassen muss, wodurch kein Nachteil entsteht.
    Freu mich schon auf die nächsten Partien! 😊👍
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/civilization2.jpg')`}} className='img -post -left'></span>
    <b>PRO</b>:
    - nicht so langatmig wie die vorige Version
    - Spielmaterial Top
    - Gameplay Top
    - zu dritt gut Spielbar
    - wer am Anfang zurück liegt, kann noch    aufholen
    - variabler und nicht nur stur auf ein Weg zu verfolgen
    - variabelster Spielaufbau als der Vorgänger
    <br/>
    <br/>
    <b>CONTRA</b>:
    - Würfel beim Kampf am Anfang (Glückskomponente)
    - Weltwunder unterschiedlich stark
    - manche Symbole etwas zu klein und dadurch nicht so gut ersichtlich
  </p>
</section>;

export const Post3 = () => <section className={`post-wrap`}>
  <h3 className='title'>
    Gloomhaven
  </h3>
  <div style={{backgroundImage: `url('../../static/img/roll1.jpg')`}} className='img'></div>
  <p className='text'>
    Gestern das erste <b>Mal Gloomhaven</b> gespielt, hat richtig Bock gemacht! I ❤️it!
    Ein Kumpel und ich, sind neu und mitten im Abenteuer eingestiegen, was gar kein Problem gemacht hat, sehr nice! 👍
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/roll2.jpg')`}} className='img -post -left'></span>
    Mich hat es direkt in seinem Bann gezogen.
    Vor allem die Art und Weise, wie man sein persönliches Kartendeck spielt. Denn man muss jedes Mal entscheiden, ob man die Aktion (auf den Karten - 2 Optionen) verwendet, die anschließend auf dem Ablagestapel gelegt wird oder ein mächtigere Aktion, die man dann aber ganz aus diesem Spiel verliert! Mega!
    Dazu zieht man vor jedem Abenteuer 2 Karten, wo man sich eine aussucht, die eine Aufgabe bereithält. Wenn man diese erfolgreich absolviert bekommt man am Ende einen Bonus!
  </p>
  <p className='text'>
  
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/roll3.jpg')`}} className='img -post -right'></span>
    Das führte zu lustigen Reaktionen meiner Mitspieler und Gesichtsausdrücke!
    Denn ich spiele einen Supporter und alle dachten sich, was steht der in vorderster Front!?!
    Dann hab ich auch noch die Karte ausgespielt, mit der niedrigsten Zahl, somit höchste Initiative und habe angegriffen!
    Boom 💥 ! Wham ! Bam! Shazzam!
    Einen Elite getötet und 2 schwer verwundet und bewegungsfähig gemacht!
  
    Die anschließenden Gesichter meiner Mitspieler, waren Gold wert! Hab mein Ziel erfüllt (Zielkarte) Was besagte, töte den ersten Gegner!
  </p>
  <p className='text'>
    Also, freu mich aufs nächste Spiel und kann jeden empfehlen, mal eine Partie zu testen und zu spielen, es lohnt sich!
    Für mich wird es dem Hype und der Platzierung bei BBG gerecht!
  </p>
</section>;

export const Post4 = () => <section className={`post-wrap`}>
  <h3 className='title'>
    Impressionen von RISING SUN
  </h3>
  <div style={{backgroundImage: `url('../../static/img/rising1.jpg')`}} className='img'></div>
  <p className='text'>
    In Düsseldorf (Brettspielen Düsseldorf - Erklärvideos auf YouTube) spielte ich zu fünft RISING SUN von CMON / Asmodee Deutschland.
  </p>
  <p className='text'>
    Ich bin Oliver Palisch sehr dankbar, weil er dazu aufrief, in die Rolle der Clans im mystischen Japan der Feudalzeit zu schlüpfen. Um seine Krieger in den Provinzen aufzustellen, die Ernte einzuholen und in den Krieg zu ziehen!
    Es gehört immer noch zu meinen absoluten Lieblingsspielen. Auch wenn ich diesmal richtig schlecht war!
  </p>
  <p className='text'>
    Durch die unterschiedlichen Klans, die strategischen Möglichkeiten während des Spiels, wie auch bei der Kampfphase und dem interessanten Diplomatie Aspekt, spielt sich jede Partie anders und unvorhersehbar.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/rising2.jpg')`}} className='img -post -left'></span>
    Die einzelnen Phasen im Spiel, spielen sich unterschiedlich, interessant und zügig, außer es sitzen zu viele Grübler am Tisch! Ob Teezeremonie, wo die Spieler Bündnisse untereinander schließen.
    Die Politikphase, wo man eines der 5 Aktionen durchführt (mehr oder wenig durch Zufall), inklusive dem verrechnen der Schrein-Boni, die man im Zug berücksichtigen sollte.
    Die Kriegsphase, die sich für mich noch taktischer, strategischer und interessanter spielt, als bei Cry Havoc (die schon sehr gut war)!
  </p>
  <p className='text'>
    Es spricht dadurch Kenner wie auch Vielspieler gleichermaßen an, aber auch Neueinsteiger kommen schnell zurecht und haben ihren Spaß!
    Vom Spielmaterial und den wunderschönen Miniaturen, gehört es für mich zu dem besten, was der Brettspielmarkt zu bieten hat! Und ist somit jedes Mal aufs Neue ein Hochgenuss, auch wenn die größten Monster, nicht unbedingt die stärksten sind!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/rising3.jpg')`}} className='img -post -right'></span>
    Mit jeder Fraktion kann man gewinnen, wenn man weiß wie man sie spielen muss. Was Oliver mit dem Gelben Klan (Bonsai), eindrucksvoll unter Beweis gestellt hat, die sich in meinen Augen, am schwierigsten spielt.
    Ich würde jeden empfehlen, RISING SUN nur mit einer ungeraden Spieleranzahl zu spielen, da so der Diplomatie, wie auch der Verräter Aspekt am besten zur Geltung kommt!
  </p>
  <p className='text'>
    RISING SUN ist vor allem extrem interaktiv, spannend, wunderschön und niemals langweilig! Für mich ist Eric M. Lang ein Experte im Bereich Mehrheiten zu Erreichen und Gebiete zu erkämpfen. Was er mit Blood Rage, eines meiner anderen Lieblingsspiele, schon bestens unter Beweis stellen konnte!
    Ich würde es immer mitspielen und bin froh das ich es damals bei Kickstarter komplett gebackt hatte. Wer es auf Deutsch spielen möchte, kann dank Asmodee auch in den Genuss kommen.
  </p>
  <p className='text'>
    Ich danke Oliver für den Aufruf, dass Spiel zu spielen. Genauso wie unserer tollen, unterhaltsamen und sympathischen Spielgruppe, die das Spiel überhaupt so unterhaltsam gemacht hatte.!
  </p>
</section>;
