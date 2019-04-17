import React from 'react';
import Link from 'next/link';
import { Icon } from 'antd';
import Video from '@u-wave/react-vimeo';

import './styles.scss';

const testPost = ({ _id, title, text }) => <section className={`${_id}-post post-wrap`}>
  <h3 className='title'>{ title }</h3>
  <p className='text'>{ text }</p>
  <Link href={`/blog/posts/${_id}`}>
    <a>push</a>
  </Link>
</section>

export const Post1 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    Root
  </h3>
  <figure className='img-wrap'>
    <img src='../../static/img/root1.jpg' alt="" className='img'/>
  </figure>
  <p className='text'>
    Diese Woche spielte ich in Duisburg zu viert (Fabian S., Fabian W. und Chris von den Brettspiel-Geeks) ROOT von Leder Games, welches von André vom Spieltreff Duisburg sehr gut erklärt wurde!
  </p>
  <p className='text'>
    Ein sehr taktisches und asymmetrisches Strategiespiel für Kenner- und Vielspieler.
    Ein Kampf um Wald und Siegpunkte, was sehr hübsch aussah, aber auch genügend Tiefe durch interessante und unterschiedliche Mechaniken beinhaltet!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src='../../static/img/root2.jpg' alt="" className='img'/>
    </figure>
    Root ist aber ein Spiel, was man definitiv mehrmals spielen sollte. Mindestens vier Mal, um so jede Rasse und deren unterschiedliche Fähigkeiten zu verstehen und somit im Spiel vorbereitet zu sein und richtig reagieren zu können!
    Die Regeln sind grundsätzlich einfach, aber die jeweiligen Spezialfähigkeiten machen das Spiel so komplex und dadurch ist die Einstiegshürde recht hoch!
    Sobald man aber einmal drin ist, spielt sich ROOT sehr gut und flüssig.
  </p>
  <p className='text'>
    Des Weiteren muss man erwähnen, dass für ROOT schon gute Englischkenntnisse von Nöten sind, da viele Fähigkeiten auf dem Spieler-Tableau für Fragezeichen sorgen können.
    Dadurch, dass es asymmetrisch gespielt wird und somit jeder Spieler seinen kompletten Zug absolviert, kann es leider zu Downtimes kommen!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src='../../static/img/root3.jpg' alt="" className='img'/>
    </figure>
    Interaktiv war es schon, obwohl man schon stark auf sich und seine Strategie fokussiert ist.
    Liegt aber wahrscheinlich erst mal daran, dass man versucht, das Spiel zu verstehen.
    Ich z.B. wusste nicht, wie meine Gegner gewinnen können, und hab mich somit nur auf mich konzentriert!
    Ich würde es immer mitspielen und bin froh, dass ich es durch André vom Spieltreff Duisburg jederzeit spielen kann!
    I ❤️ The Forest Rebels!
  </p>
  <p className='text'>
    Link zum Spieltreff Duisburg: <a href="https://spieletreff-duisburg.de/">spieletreff-duisburg.de</a>
  </p>
</section>;

export const Post2 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
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
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    Gloomhaven
  </h3>
  <figure className='img-wrap'>
    <img src='../../static/img/roll1.jpg' alt="" className='img'/>
  </figure>
  <p className='text'>
    Hallo Brettspielfreunde,
    gestern das erste Mal Gloomhaven gespielt, hat richtig Bock gemacht! I ❤️ it!
    Ein Kumpel und ich sind neu und mitten im Abenteuer eingestiegen, was gar kein Problem gemacht
    hat, sehr nice!👍
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src='../../static/img/roll2.jpg' alt="" className='img'/>
    </figure>
    Mich hat es direkt in seinen Bann gezogen.
    Vor allem die Art und Weise, wie man sein persönliches Kartendeck spielt. Denn man muss jedes Mal entscheiden, ob man die Aktion (die Karten bieten 2 Optionen) verwendet, die anschließend auf den Ablagestapel gelegt wird, oder eine mächtigere Aktion wählt, wo man dann aber die Karte ganz aus diesem Spiel verliert!
  </p>
  <p className='text'>
  
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src='../../static/img/roll3.jpg' alt="" className='img'/>
    </figure>
    Dazu zieht man vor jedem Abenteuer 2 Karten, wovon man sich eine aussucht, die eine Aufgabe bereithält. Wenn man diese erfolgreich absolviert, bekommt man am Ende einen Bonus!
    Das führte zu lustigen Reaktionen und Gesichtsausdrücken meiner Mitspieler!
    Denn ich spiele einen Supporter und alle dachten sich, warum steht der in vorderster Front!?!
    Dann habe ich auch noch die Karte ausgespielt mit der niedrigsten Zahl, somit höchste Initiative, und habe angegriffen!
    Boom! Wham! Bam! Shazzam!
    Einen Elite-Gegner getötet und 2 schwer verwundet und bewegungsunfähig gemacht!
  </p>
  <p className='text'>
    Die anschließenden Gesichter meiner Mitspieler waren Gold wert! Hab mein Ziel erfüllt (Zielkarte), das besagte „Töte den ersten Gegner“!
    Also, freu mich aufs nächste Spiel und kann jedem empfehlen, mal eine Partie zu testen und zu spielen, es lohnt sich!
    Für mich wird es dem Hype und der Platzierung bei BBG gerecht!
  </p>
</section>;

export const Post4 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    <span>Impressionen von RISING SUN</span>
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

export const Post5 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    Highlights 2018
  </h3>
  <figure className='img-wrap'>
    <img src='../../static/img/preview0.jpg' alt="" className='img'/>
  </figure>
  <p className='text'>
    Heute stellen wir Euch unsere Highlights 2018, im Bereich Brett- und Kartenspiele vor.
    Es spiegelt natürlich unsere Subjektive Meinung wieder, welche Spiele wie oft gespielt wurden.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src='../../static/img/high1.jpg' alt="" className='img'/>
    </figure>
    <b>1. Rising Sun (Area-Control)</b><br/>
    <b>Verlag:</b> CMON / Asmodee<br/>
    Für mich ist <b>Rising Sun</b> das Highlight des Jahres! Eric Lang hat es nach Blood Rage wieder geschafft, ein Spiel zu kreieren, was optisch, von der Mechanik und dem Spaß-Faktor genau meinen Nerv getroffen hat. Die Figuren sind wieder eine Meisterleistung und sind das Maß aller Dinge. Die Spielmechanik brauch sich dahinter aber nicht verstecken. <b>Rising Sun</b> kombiniert eindrucksvoll ein strategisches Area-Control-Spiel, mit einem interaktiven Verhandlungs-Mechanismus und ein interessantes wie auch spannendes Kampfsystem, dass sogar noch ein wenig besser ist als das von Cry Havoc. Dazu gibt es unterschiedliche Clans die sich alle unterschiedlich spielen und in meinen Augen sehr gut ausbalanciert sind.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src='../../static/img/high2.jpg' alt="" className='img'/>
    </figure>
    <b>2. KeyForge</b><br/>
    <b>Verlag:</b> Fantasy Flight Games / Asmodee<br/>
    <b>KeyForge</b> ist für mich das Kartenspiel-Highlight des Jahres 2018 und endlich eine Revolution in diesem Genre! Richard Garfield hat nach Magic The Gathering wieder einen Meilenstein kreiert. <b>KeyForge</b> in Kombination mit Unique Games ist für alle Typen von Spielern geeignet und spricht dadurch auch alle gleichermaßen an. Damit wurde was geschaffen, was ich für nicht möglich gehalten habe. Es werden nämlich Interessierte, Anfänger, Gelegenheits-, Viel- und Turnierspieler abgeholt. Vor allem auch die Spieler, die dem TCG und LCG abgeschworen haben, da sie es leid waren, so viel Zeit und Geld zu investieren.
    Durch die Unique Decks gibt es keinen Nachbau und die immer gleichen Kartendecks, gegen die man spielt. So muss man selbstständig das Spiel erkunden, erlernen und meistern. <b>KeyForge</b> macht wirklich mal was anders, geht ganz neue Wege und ist keine billige Kopie. Diese neuen Wege, das Selbstentscheiden ob ich nach Bedarf ein neues Deck kaufen möchte und nicht nach irgendeinem Zyklus finde ich sehr beruhigend. So kann man es nämlich auch sehr schön zwischen den vielen anderen Karten-, Brett- oder Digitalspielen spielen, ohne einen Nachteil zu haben.

  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src='../../static/img/high3.jpg' alt="" className='img'/>
    </figure>
    <b>3. Brass Birmingham (Wirtschafts-Spiel)</b><br/>
    <b>Verlag:</b> Roxley Games<br/>
    <b>Brass Birmingham</b> ist ein Meisterwerk der komplexen Strategie- und Wirtschaftsspiele und ist für mich sogar das beste Wirtschaftsspiel auf dem Markt! <b>Brass Birmingham</b> empfehle ich jedem Spieler, der die wahre Kunst im Expertenspielbereich kennen lernen möchte. Da diese Version noch komplexer und anspruchsvoller ist, sowie mehr Spieltiefe besitzt als die Version von <b>Brass</b> Lancashire. Zugleich ist diese Version auch für diejenigen geeignet, die schon die Original Version von <b>Brass</b> oder die deutsche Version Kohle besitzen. Da hier neue und interessante Komponenten dazukamen und somit ein ganz neues Spielgefühl erhält.
    <b>Brass Birmingham</b> ist nicht nur hochintelligent, spannend und komplex konzipiert, sondern besitzt dazu noch einen wunderbaren Mechanismus, wie Industrien aktiviert werden. Dazu bietet <b>Brass Birmingham</b> einen hohen Wiederspielwert und ist dazu noch thematisch toll umgesetzt. Man hat wirklich das Gefühl, gerade bei der industriellen Revolution mitzuwirken und teilzuhaben.
    Die Neuauflage ist ein Augenschmaus und wunderschön gezeichnet und gehört für mich zu den schönsten Spielen in meinem Spieleregal. Zusätzlich ist das komplette Spielmaterial extrem hochwertig. Wie die tollen Münz-Chips im Poker-Look, die man zusätzlich für jedes Spiel verwenden kann, was ich grandios finde und schon oft verwendet habe.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src='../../static/img/high4.jpg' alt="" className='img'/>
    </figure>
    <b>4. Architekten des Westfrankenreichs (Worker-Placement)</b><br/>
    <b>Verlag:</b> Garphill Games / Schwerkraft-Verlag<br/>
    Für mich könnte <b>Architekten des Westfrankenreichs</b> das nächste Kennerspiel des Jahres werden! Eingängige Regeln, tolle Spielmechanismen, sehr interaktiv und für ein Worker-Placement Spiel extrem flüssig, keine Downtimes und vor allem extrem schnell zu spielen. Man merkt dem Spiel sofort an, dass das Erfolgsduo - Shem Philipps (Autor) und „The Mico“ (Illustrator) sich wieder zusammengetan haben. Auch Optisch fühlt man sich direkt mit der Nordsee Trilogie verbunden und die Symbolsprache ist so gut wie die gleiche. Hierdurch werden Kenner der Spielreihe sich schnell zurechtfinden. <b>Architekten des Westfrankenreichs</b> ist somit ein fulminanter Auftakt einer neuen Trilogie und ist in meinen Augen sogar noch besser als <b>Räuber der Nordsee</b> und das sage ich als „oller“ Wikinger Fan! 😉
    Dazu spielt sich das Spiel mit der Spieleranzahl gleich gut. Zu dem Solo-Modus kann ich euch nichts sagen, da ich Brettspiele prinzipiell nicht solo spiele.
    Wer ein schnelles, sehr gutes Strategiespiel sucht, mit Euro-Games und Worker-Placement Spiele klarkommt, den empfehle ich uneingeschränkt <b>Architekten des Westfrankenreichs</b>.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src='../../static/img/high5.jpg' alt="" className='img'/>
    </figure>
    <b>5. Spirit Island (Koop-Area-Control)</b><br/>
    <b>Verlag:</b> Greater Than Games / Pegasus Spiele<br/>
    <b>Spirit Island</b> ist aktuell mein Lieblings-Strategie-Koop-Spiel. Denn es ist wirklich fordernd und man hat direkt vom ersten Zug an Stress! Dazu finde ich die Idee erfrischend, dass die Spieler in die Rolle von Geistern schlüpfen und sich gegen die menschliche Bevölkerung stellen, um gegen deren natürlichen Drang anzukämpfen, sich immer weiter auszubreiten.
    <b>Spirit Island</b> ist dazu noch sehr interaktiv und wenn sich die Gruppe nicht permanent abspricht, ist das Unterfangen zum Scheitern verurteilt. Alles in allem ein Schwergewicht, mit schönem Deckbuilding-Mechanismus, erfrischenden Ideen, hohem Wiederspielreiz, unterschiedlichen Schwierigkeitsgraden und Spielmaterial, was sich nicht verstecken muss!
    Bin schon auf die Erweiterung gespannt, obwohl man aktuell noch genug damit zu tun hat, alle Geister kennen zu lernen, die sich dazu auch interessant und unterschiedlich spielen!

  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/high6.png" alt="" className='img'/>
    </figure>
    <b>6. Dice Throne (Dice-Management)</b><br/>
    <b>Verlag:</b> Roxley Games<br/>
    Ich bin eigentlich kein richtiger Fan von Würfel spielen, da der Glücksfaktor für mich oft zu hoch wird. Aber dank <b>Dice Throne</b>, hat sich das verändert. Es hat mir so viel Spaß gemacht, dass ich zu Weihnachten direkt die 2. Season bekommen habe, um noch mehr Helden und unterschiedliche Charaktere spielen zu können. Ein leicht zu erlernendes Würfel-Management Spiel, was eine gute taktische und strategische tiefe besitzt. Von Anfang an hat man eine Reihe von Optionen auf dem eigenen und individuellen Spielbrett. Die unterschiedlichen Charaktere spielen sich wirklich anders und gibt dem Spiel somit einen hohen Wiederspielreiz. Was ich richtig gut finde, ist das jedes Spiel knapp ausging. Ob eines gegen eins oder im Team-Battle, was ich dem sehr guten Balancing den einzelnen Charakteren zukommen lasse. Ich freue mich jetzt schon riesig auf die Season two, und auf neue Charaktere und weitere schöne und spannende Battles bei <b>Dice Throne</b>!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src="../../static/img/high7.jpg" alt="" className='img'/>
    </figure>
    <b>7. Ruchlos (Deckbuilder)</b><br/>
    <b>Verlag:</b> Board Game Circus<br/>
    Ich liebe Deckbuilder und somit war ich sehr gespannt, was nach 2017 kommen wird?
    Denn 2017 kamen mit Hero Realms, Kong! Und Vikings gone Wild direkt 3 Deckbuilder heraus, die ich alle sehr gerne und viel gespielt habe! 2018 ist es für mich ganz klar <b>Ruchlos</b>! Das Piraten Setting und die tolle Spielmechanik verschmelzen perfekt miteinander.
    <b>Ruchlos</b> erfindet das Rad nicht neu, aber die unterschiedlichen Auslagen, wo man seine Karten spielt, die hohe Interaktion untereinander und die Fähigkeiten der einzelnen Piraten, machen das Spiel so interessant und spaßig. Sodas wir dass ich es jederzeit immer gerne auf dem Tisch bringe. Zum Glück spielt sich <b>Ruchlos</b> auch in jeder Kombination spannend. Zu zweit würde ich aber ehrlich gesagt immer auf Hero Realms ausweichen! Wir fanden das Spiel so gut, dass wir direkt unsere eigenen Promokarten dazu anfertigen ließen! 😊
    Diese bekommt man direkt 2x, wenn man uns bei Patreon mit 2$, wie auch 5$ unterstützt.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/high8.jpg" alt="" className='img'/>
    </figure>
    <b>8. Gloomhaven (Dungen Crawler)</b><br/>
    <b>Verlag:</b> Cephalofair Games / Feuerland Spiele<br/>
    Ich gebe zu, wir sind bei <b>Gloomhaven</b> noch nicht weit vorgeschritten, unser Projekt lässt grüßen! 😉 Aber jede Minute unserer bisherigen Abenteuer, die wir bis jetzt bestritten haben, waren spannend, interessant und vor allem haben uns Spaß gemacht! Für uns ist es auch nicht nur ein einfacher Dungeon Crawler, denn es fühlt sich dazu noch wie ein Brett-Rollenspiel an, bei welchem man sich darauf freut den eigenen Helden/Charakter aufleveln zu können. Die jeweiligen Klassen spielen sich unterschiedlich und teilen sich dazu noch in verschiedene Klassen auf, wie wir es von Rollenspielen kennen (Kämpfer, Heiler, Fernkämpfer und Unterstützer). Dazu ist es aber auch ein Brainburner, den perfekten Zug, das Überleben der Gruppe und das erfolgreiche abschließen des Abenteuers zu sichern. Das Spiel hat einen stolzen Preis, was wir aber gerechtfertigt finden, bei der Anzahl an Spielmaterial, Spieltiefe und Zeit die man mit <b>Gloomhaven</b> verbringen kann. Für mich auf jeden Fall aktuell der spannendste und intensivste Dungen Crawler, den ich gespielt habe.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src="../../static/img/high9.jpg" alt="" className='img -post -left'/>
    </figure>
    <b>9. Archmage (Area-Control)</b><br/>
    <b>Verlag:</b> Starling Games<br/>
    Das erste was sofort auffällt ist das geniale und interessante <b>Archmage</b> Board, welches die unterschiedlichen Magier Schulen wiederspiegelt. Dieses Board und die Wahl der Farben/ Magieschule beeinflusst das eigene Kartendeck und welche weiteren Zauber man spielen kann. Das macht das <b>Archmage</b> zu einer richtigen harten Nuss und zu einem sehr taktischen und strategischen Area-Control-Spiel. Denn die Magier wollen nicht nur die Zauber verbessern, sondern sich gleichzeitig sich auch auf dem Spielfeld ausbreiten, um weitere Schulen zu gründen, Relikten nachzujagen und gegnerische Magier auszulöschen! 😉
    Ich bin schon auf die angekündigte Erweiterung zu <b>Archmage</b> gespannt und hoffe, dass es das Spiel bald auch in deutscher Sprache zu kaufen gibt. Denn die Zauber beinhalten schon recht viel Text und könnten den einen oder andren damit überfordern.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/high10.jpg" alt="" className='img'/>
    </figure>
    <b>10. Detective Stories. Fall 1: Das Feuer in Adlerstein (Krimi-Spiel)</b><br/>
    <b>Verlag:</b> iDventure / Asmodee<br/>
    Für mich hat <b>Detective Stories</b> den Escape-Markt neu belebt und auf eine ganz neue Ebene gehoben. Hier erlebt und bekommt man wirklich das Gefühl, an einem realen Kriminalfall mitzuarbeiten und diesen zu lösen. Was das realistische Spielmaterial, welches mit viel Liebe zum Detail gestaltet wurde, noch zusätzlich unterstreicht. Das Beste daran ist, dass man hier nichts zerstören oder beschriften muss. Somit kann es problemlos weiterverkauft oder verschenkt werden. Man könnte das Spiel auch solo spielen, was sicherlich einige von euch bestimmt interessiert. Jedoch finde ich, dass dadurch einiges an Charme, Unterhaltungswert und Spielreiz verloren geht. Weil man somit auf die vielen Diskussionen und Spekulationen, die während des Lösen des Falls aufkommen verzichten muss. Wir fanden diese mindestens genauso unterhaltsam und spannend, wie das Spiel, an sich, zu lösen.
    Wir waren auf jeden Fall alle mega begeistert von <b>Detective Stories</b> und es ist für mich bis jetzt die Überraschung des Jahres 2018. Wir freuen uns jetzt schon auf den zweiten Fall.
  </p>
</section>;

export const Post6 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    <span>TERRAFORMING MARS - ERWEITERUNGEN</span>
  </h3>
  <figure className='img-wrap'>
    <img src="../../static/img/mars1.jpg" alt="" className='img'/>
  </figure>
  <p className='text'>
    Hallo liebe Brettspielfreunde,
    Wir haben das erste Mal Terraforming Mars mit fast allen Erweiterungen (Venus, Kolonien und Präludium) zu fünft gespielt! Eigentlich wollten wir auf einem der Spielbretter Hellas oder Elysium zocken, haben wir vor lauter Optionen und Möglichkeiten aber glatt vergessen! ;)
  </p>
  <p className='text'>
    Was für ein Spielgenuss und der Mehrwert der jeweiligen Erweiterung war großartig und einfach nur Klasse!
    Man hat jetzt so viele Karten, dass jeder Spieler seinen eigenen Stapel besitzen könnte. Aber man kann einfach nie genug haben, oder?
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src="../../static/img/mars2.jpg" alt="" className='img'/>
    </figure>
    Jede Erweiterung fügt sich nahtlos ins Grundspiel ein und schenkt dem Spiel interessante und neue Möglichkeiten, Punkte zu generieren.
    Zu fünft und mit allen Erweiterungen geht zwar die Übersicht flöten, was schon vorher ein nicht so einfaches Unterfangen war, ist mit allen Erweiterungen aber jetzt richtig krass. Dafür bietet es den Spielern, einfacher und schneller die eigene Taktik und Strategie im Spiel zu verändern und anzupassen.
  </p>
  <p className='text'>
    Ich selber habe diesmal nur den klassischen Weg beschritten, da ich mir dachte, alle anderen wollen jetzt die neuen Erweiterungen testen! Und genau so war es auch!
  </p>
  <p className='text'>
    Bin am Ende knapp Zweiter geworden und muss sagen, dass wir alle insgesamt nah beieinander waren. Denn es gibt jetzt sehr viele Optionen, Punkte zu generieren, und das ist das beste Kompliment für ein Spiel, wenn genau dieser Fall eintritt!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/mars3.jpg" alt="" className='img'/>
    </figure>
    Die Erweiterungen haben das Spiel nicht unnütz in die Länge gezogen oder künstlich aufgebauscht, sondern noch mehr Möglichkeiten geschaffen, Punkte zu generieren, so dass es auch super zu 5 klappt und keiner benachteiligt wird. Sie bieten den Spielern somit einen wirklichen Mehrwert!
    Ich kann jedem Terraforming Mars mit allen Erweiterungen nur empfehlen, da es nicht nur Mega Spaß gemacht hat und neue taktische Tiefe schenkt, sondern sich auch zeitlich angenehm gespielt hat!
  </p>
</section>;

export const Post7 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    <span>Detective Stories, Fall 2: Antarktis Fatale</span>
  </h3>
  <figure className='img-wrap'>
    <img src="../../static/img/arctic1.jpg" alt="" className='img'/>
  </figure>
  <p className='text'>
    <h4>Um was geht es in diesem Fall?</h4>
    Der Fall ist in der Theorie schon von der Polizei gelöst worden und der Täter hat die Todesstrafe erhalten.
    Durch einen Zufall haben wir „Möchtegern Detektive“ noch einmal die Möglichkeit bekommen, diesen Fall zu checken und zu überprüfen, ob auch wirklich der richtige Täter die Todesstrafe erhalten hat.
    Der zweite Fall spielt dieses Mal nicht in Adlerstein, sondern in der verschneiten und extrem kalten Antarktis. Also zieht euch warm an, es wird nicht nur kalt, sondern auch richtig knifflig!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src="../../static/img/arctic2.jpg" alt="" className='img'/>
    </figure>
    <h4>Für wen ist das Spiel geeignet?</h4>
    Zum einen für Fans von Escape-Rooms oder für Rätsel/Escape-Spieler (Exit-Reihe, Unlock!-Reihe, Escape Room - The Game, Deckscape usw.) und zum anderen für diejenigen von euch, die schon immer einmal in die Rolle eines Ermittlers, Profilers oder Detektivs schlüpfen wollten, um einen richtigen Kriminalfall zu lösen. Wer den ersten Teil mochte, wird auch hier seine helle Freude haben und den zweiten Fall lieben!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/arctic3.jpg" alt="" className='img'/>
    </figure>
    <h4>Kann das hohe Niveau gehalten werden?</h4>
    Auch der zweite Teil von Detective Stories vermittelt wieder viele spannende und realistische Hinweise, Beweise und Dokumente. Auch das Internet und die Sozialen Medien werden in den Spielrhythmus miteinbezogen um zu ermitteln welche Charaktere ein Tatmotiv haben, wer für die Tatzeit ein Alibi besitzt und welche Fragen halt noch hierdurch beantwortet werden können. Ich dachte mir, das Niveau zu halten oder zu gar zu toppen wird sehr schwer, aber unsere Spielgruppe (identisch wie beim ersten Fall) war wieder begeistert und konnte uns überraschen.
    Der Fall „Antarktis Fatale“ ist auch wieder richtig knifflig und fordert die Spielgruppe ungemein. Jedes Dokument, welches dem Spiel beiliegt, muss genaustens begutachtet und möglichst jede noch so kleine Information notiert werden. Nur so können die richtigen und logischen Zusammenhänge gezogen werden um den Fall am Ende lösen zu können.
    Wieder ist das Beweismaterial realistisch und liebevoll gestaltet und steht dem ersten Teil „Das Feuer in Adlerstein“ in Nichts nach.
  </p>
  <p className='text'>
    <h4>Dauer und Schwierigkeitsgrad:</h4>
    Wir haben auch in diesem Fall ca. zwei bis drei Stunden gerätselt und gespielt. Man sollte daher sicherlich bis zu drei Stunden einplanen, abhängig von der Spieleranzahl und dem Spielerniveau der Gruppe. Das Spiel selbst setzt die Gruppe allerdings niemals unter Zeitdruck. Somit kann jeder Einzelne entspannt in die real anmutende Kriminalgeschichte von Detective Stories eintauchen und diese erleben, bis der Fall gelöst ist.
    Der Schwierigkeitsgrad von Detective Stories „Antarktis Fatale“ bewegt sich im Vergleich zum ersten Fall ungefähr auf der gleichen Stufe, wenngleich auch „Antarktis Fatale“ einen Hauch schwieriger anmutet.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -left'>
      <img src="../../static/img/arctic5.jpg" alt="" className='img'/>
    </figure>
    <h4>Braucht man eine App bzw. das Internet?</h4>
    Auch hier geht Detective Stories 2 die gleichen Wege wie der Vorgänger und fühlt sich genauso realistisch an wie zuvor. Das Internet wird wieder für allerlei Überprüfungen gebraucht. Zusätzlich liegt der Fokus dieses Mal nicht auf Facebook, dafür wird auf Instagram-Profile zurückgegriffen und auf ein weiteres Highlight, welches wir an dieser Stelle aber nicht spoilern wollen.
    Eine App braucht man also nicht, aber ein Internetzugang ist für Detective Stories zwingend erforderlich. Im Gegensatz zum ersten Teil, kann man den Fall selbst dann komplett genießen, wenn man keinen eigenen Account in den sozialen Medien besitzt. Ein Instagram-Account erleichtert die Suche, ist aber nicht unabdingbar.
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/arctic4.jpg" alt="" className='img'/>
    </figure>
    <h4>Fazit:</h4>
    Für mich ist der zweite Fall von Detective Stories: „Antarktis Fatale“ wieder richtig großes Kino und hat uns ein einzigartiges kriminalistisches Spielerlebnis mit Überraschungsmoment und Wow-Effekt geschenkt, dass ich nicht für möglich gehalten hätte. Wer schon „Das Feuer in Adlerstein“ richtig gut fand, wird sich freuen, denn auch der zweite Teil ist wieder grandios geworden und lässt jedes Detektiv-Herz höherschlagen. Denn was hier aufgefahren wird, ist großartig und wirkt sehr realistisch und authentisch!
    Das Spiel kann man problemlos weitergeben, verkaufen oder verschenken, da man das beigelegte Spielmaterial weder zerreißen noch zerstören muss.
    Einziger Kritikpunkt an diesem Fall ist, das man Beweise beim Beschuldigten gefunden hat, auf die man bei der Lösung nicht weiter eingegangen wird. Dies hat uns vor einige Logik-Probleme beim Lösen des Falls gestellt. Aber sollte man von allen Personen die möglichen Tatmotive bzw. Alibis zusammengetragen haben, wird sich der Fall am Ende trotzdem lösen lassen.
    Wir waren auf jeden Fall alle wieder extrem begeistert vom 2. Fall von Detective Stories und freuen uns schon auf den nächsten Fall, der uns „Möchtegern Detektive“ zu Rate zieht, um sich von uns lösen zu lassen!<br/>
    <b>Tobias Franken</b>
  </p>
  <p className='text'>
    <b>PRO:</b><br/>
     - Kann das Niveau des ersten Teils halten und steht diesem in Nichts nach<br/>
     - Eine Überraschung mit Wow-Effekt<br/>
     - Innovatives Spielgefühl<br/>
     - Thematisch sehr gut umgesetzt<br/>
     - Kein Zeitdruck<br/>
     - Einbindung von Internet und sozialen Medien<br/>
     - Sehr interaktives Spiel<br/>
     - Diesmal kein Account für die Sozialen Medien von Nöten<br/>
    <b>KONTRA:</b><br/>
     - Um das Spiel im Ganzen zu erleben, braucht man einen Internet-Anschluss<br/>
     - Beim Täter werden Beweise festgestellt, auf die am Ende nicht mehr eingegangen wird.<br/>
     - Hier wurde Potential verschenkt<br/>
  </p>
</section>;

export const Post8 = () => <section className={`post-wrap`}>
  <Link href={`/blog`}>
    <a className='link'>
      <Icon type='left' className='icon'/>
      <span className='title'>alle Artikel</span>
    </a>
  </Link>
  <h3 className='title'>
    <span>USA - The Big Game!</span>
  </h3>
  <figure className='img-wrap'>
    <img src="../../static/img/biggame2.jpg" alt="" className='img'/>
  </figure>
  <p className='text'>
		Was hatten wir für eine großartige Zeit in den USA!
		Wir waren in San Francisco, San José, Santa Cruz, Las Vegas, Grand Canyon und Umgebung.
		Was man festhalten kann, die USA sind das Land des Entertainments und irgendwie in jeder
		Hinsicht ein großer Spielplatz – „The Big Game“!
	</p>
  <p className='text'>	
		<figure className='img-wrap -post -left'>
				<img src="../../static/img/biggame4.jpg" alt="" className='img'/>
		</figure>	
		Zum Beispiel die tägliche Dosis Sport im TV. Aktuell läuft der Endspurt in der Basketball-Liga
		(NBA) wo Dirk Nowitzki (Dallas Mavericks) bester deutscher Basketballer aller Zeiten,
		gerade sein letztes NBA Spiel hinter sich gebracht hat. Dazu haben die San Francisco Golden
		State Warriors den ersten Platz in der Western Conference erreicht und die Stadt war
		dadurch im Ausnahmezustand!<br/>	
    Aber auch die NHL (Eishockey) ging in die entscheidende Phase. Die Vegas Golden Knights
		haben die Playoffs erreicht, leider haben wir es nicht geschafft, uns ein Spiel anzuschauen!
		Aber auch die San José Sharks stehen in den Playoffs, die in direkter Nachbarschaft zu San
		Francisco stehen.
  </p>
  <p className='text'>
  </p>
  <p className='text'>
		<div className='img-wrap -post -right'>
			<Video className='video-wrap' video='330596102'/>
		</div>
		Was für ein Zufall, dass beide Mannschaften das erste Playoff Duell bestreiten werden.
		Leider sind wir dann schon wieder zurück in Deutschland, hätte als Eishockey-Fan gerne ein
		Spiel gesehen, dies ist aber aus organisatorischen Gründen nicht möglich gewesen. Schade!
		Dazu noch Baseball (MLB), wo die San Francisco Giants und die Oakland Athletics
		mitmischen. War uns aber irgendwie zu langweilig, so dass wir uns kein Spiel angesehen
		haben.
		In der NFL (American Football) ist die Saison vorbei, weswegen es aktuell kein Thema in den
		Medien ist.
  </p>
  <p className='text'>	
		<figure className='img-wrap -post -left'>
			<img src="../../static/img/biggame7.jpg" alt="" className='img'/>
		</figure>
    Las Vegas ist das Spielerparadies schlecht hin und wer sich hier nicht im Griff hat, verliert
		sich im Spiel und wird zu einem der vielen Bettler auf den Straßen! Die Casinos versuchen
		einen überall und zu jeder Zeit zu infizieren und zu verschlingen! Vom Flughafen bis hin zu
		jedem Hotel oder Sehenswürdigkeit in Las Vegas, überall und zu jeder Uhrzeit wird gespielt!
		Ob bei den unendlich vielen Automaten, beim Greifarm, Black Jack oder Roulette, alles was
		das Spielerherz begehrt wird hier bedient!
  </p>
  <p className='text'>
    <figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame5.jpg" alt="" className='img'/>
    </figure>
    Wir zockten mit 1 Dollar Chips, und überlegten wie wir diese strategisch am besten
		platzieren konnten. Zur gleichen Zeit bezahlte jemand 1.000 Dollar für Chips, platzierte diese
		und verspielte alles in einer Runde – Bam! Aber er verzog keine Miene und kaufte sich direkt
		noch einmal für 1.000 Dollar ein! Crazy sag ich euch!
		Wir haben viel Spaß gehabt und haben unser Geld verzockt, musste einfach sein. Und am
		Geburtstag ist der richtige Zeitpunkt gewesen, auch wenn wir leider Nichts gewonnen
		haben, außer Nervenkitzel! Wer ein Auto gemietet hat und mehr Zeit in Las Vegas verbringt
		als wir hatten, sollte sich unbedingt das Boardgame Café Meepleville ansehen, welches sich
		auch schon Tom Vasell genauer angesehen hat. Leider hatten wir zu wenig Zeit, sonst hätten
		wir uns das Brettspiel Café auf jeden Fall angeschaut.
		In unserem Hotel in Las Vegas gab es auch einen riesigen E-Sports-Bereich. Ich habe mich mit
		den Besitzern unterhalten und mir wurde gesagt, dass dies die Zukunft des Sports sein wird!
		Der Boom hört nicht auf und immer mehr Teams werden gegründet. Es werden immer
		größere Preisgelder bezahlt, was z.B. Magic The Gathering sehr gut aufzeigt, denn sie
		schütten aktuell 1 Millionen Dollar aus – um beim E-Sport mitzumischen und sich um die
		Krone zu duellieren. Aktuell ist Fortnite extrem beliebt und bei den Kartenspielern
		Hearthstone, was aber stark von Magic angegriffen wird!
  </p>
  <p className='text'>
		<figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame9.jpg" alt="" className='img'/>
    </figure>
		Wir haben uns aber auch einige Brettspielgeschäfte in San Francisco, Berkeley, San José und
		Umgebung angesehen. Wie das GAMESCAPE oder das EUDEMONIA, die richtig gut waren.
		Es war interessant zu sehen, wie sich das Spielen und die amerikanischen Interessen zu
		Deutschland unterscheiden.
  </p>
	<p className='text'>	
		<figure className='img-wrap -post -left'>
      <img src="../../static/img/biggame11.jpg" alt="" className='img'/>
    </figure>
		Die Läden in den USA haben hier mehr Kickstarterspiele als bei uns, wie ich empfand. Sogar
		einige deutsche Spiele sind hier aktuell sehr beliebt. Zum Beispiel die Spiele von Uwe
		Rosenberg – die bei der Edition Spielwiese erschienen sind. Aber auch Black Hongkong von
		Alexander Pfister – bei Pegasus Spiele erschienen. Scythe von Jamey Stegmaier wird viel
		gespielt und verkauft, wo ich auch zu einem Spieleabend von Freunden unserer Gastfamilie
		eingeladen wurde! Es war sehr geil Scythe in den USA zu zocken und ich habe ihnen direkt
		die Erweiterung Aufstieg der Fenris schmackhaft gemacht! Bei uns über Feuerland Spiele zu
		beziehen und wer noch nichts davon gehört hat: wir haben in unserer 2. Ausgabe vom
		Online Magazin Gaming Wolves darüber ausführlich berichtet!
  </p>
	<p className='text'>	
		<figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame22.jpg" alt="" className='img'/>
    </figure>
		Die Eltern waren mir sehr dankbar, dass ich mir die Zeit genommen habe, mit ihren Jungs zu
		spielen, da es für die beiden Jungs nicht so einfach ist, Spieler in ihrem Alter und in der
		Gegend zu finden. Wie es scheint, ist es nicht immer von Vorteil, in einem noblen
		Stadtviertel zu leben. Da die Brüder viel zu zweit zocken, habe ich ihnen mein englisches
		KeyForge Turnier Deck geschenkt und den Eltern empfohlen das Grundspiel noch dazu
		zukaufen, da so die beiden Jungs, Miteinander spielen können. Die Brüder waren mega
		glücklich und dankbar und ich war glücklich, das ich helfen konnte.
  </p>
	<p className='text'>	
		<figure className='img-wrap -post -left'>
      <img src="../../static/img/biggame15.jpg" alt="" className='img'/>
    </figure>
		Aber vor allem die Spiele von Fantasy Flight Games, Days of Wonder (deren Sitz ist in der
		Nähe von San Francisco) und CMON sind hier beliebt und werden viel verkauft!
		Beim letztgenannten Spielgeschäft EUDEMONIA, habe ich auch an einem KeyForge Turnier
		teilgenommen. Das war eine absolute Herausforderung, zum einen, da alle ihr bestes Deck
		gespielt haben und ich mir ein zufälliges, englisches kaufen musste, da meine deutschen
		Decks nicht gespielt werden durften.
		Ich habe trotz aller Widrigkeiten den 3. Platz belegt und hatte viel Spaß. Vor allem die
		Herausforderung mit einem Deck zu spielen, was ich nicht kenne, macht einen der größten Reize von KeyForge aus. Danke an Richard Garfield für dieses neue und einzigartige Card
		Game – I Love it!
  </p>
	<p className='text'>	
		<figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame16.jpg" alt="" className='img'/>
    </figure>
		Auch hier habe ich mich mit dem Besitzer unterhalten. Hier ist Magic the Gathering der
		König der Kartenspiele, gefolgt von Pokémon und nicht wie bei uns Yu-Gi-Oh! Dazu läuft
		KeyForge gut, könnte allerdings in seinen Augen gerne noch zulegen, da der Preispool für
		Turnierspieler uninteressant ist. Das soll aber in der Zukunft besser werden. Ich hoffe es,
		denn genau das ist auch mein Gefühl in Deutschland. Bin gespannt auf die erste Erweiterung
		und was da kommen wird! Der Laden bietet aber auch VR-Games und E-Sport-Spiele auf
		dem PC an, da wie schon erwähnt der Markt boomt. Wie auch beim GAMESCAPE werden an
		bestimmten Tagen Brettspiele direkt im Laden gezockt, so wie in Deutschland auch.
  </p>
	<p className='text'>	
		<figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame18.jpg" alt="" className='img'/>
    </figure>
		Auch ein Brettspiel Café in San Francisco haben wir uns angeschaut und besucht. The Game
		Parlour, welches uns sehr gut gefallen hat und eine großartige Spieleauswahl für die Spieler
		bereithält. Dazu gab es tolles Essen – teuer, aber das ist in San Francisco nun mal überall so,
		auch bei Mc Donnald wird’s nicht billig! Für 5 Dollar pro Person kann jeder 3 Stunden zocken
		zuzüglich Getränke und Essen nach Bedarf! Wie gesagt, eine sehr gute und aktuelle
		Spielauswahl, was jedes Brettspielerherz höher schlagen lässt!
  </p>
	<p className='text'>
		<figure className='img-wrap -post -left'>
      <img src="../../static/img/biggame19.jpg" alt="" className='img'/>
    </figure>
		<figure className='img-wrap -post -left'>
      <img src="../../static/img/biggame21.jpg" alt="" className='img'/>
    </figure>
		Zwei Brettspiele habe ich direkt mitgenommen, plus Erweiterungen - hatte ja schließlich
		auch Geburtstag! Beides waren Kickstarter Spiele, die ich nicht backen konnte. Zum einen
		The Reckoners, bei dem die Story auf die Buchromane von meinen Lieblingsautor Brendon
		Sanderson beruhen dessen Werke ich alle liebe, weswegen ich nicht wiederstehen konnte,
		endlich das Spiel zur Buchreihe zu besitzen! Zum anderen habe ich noch Who Goes There,
		mit zwei Erweiterungen mitgenommen. Leider gab es nirgendwo die Deluxe Edition, aber die
		Aufgabe alles mit nach Deutschland mit zu bringen, ist schon eine Herausforderung für sich
		gewesen!
		Zum Glück ist es uns nach zahlreichen Umplanungen und Kopfzerbrechen gelungen, alles mit
		nach Deutschland zu bringen, ohne extra Geld dafür ausgeben zu müssen! Freu mich jetzt
		darauf diese ausgiebig in der nächsten Zeit zu zocken!
  </p>
	<p className='text'>
		<figure className='img-wrap -post -right'>
      <img src="../../static/img/biggame8.jpg" alt="" className='img'/>
    </figure>
		<h4>Am Ende unserer Reise</h4>
		Ich hoffe die Impressionen unserer USA-Reise zu dem amerikanischen Spielplatz „The Big
		Game“ haben euch gefallen? Wir können allen Brettspielbegeisterten die Reise nach San
		Francisco und Las Vegas auf jeden Fall empfehlen. Ihr solltet euch aber auch den Grand
		Canyon ansehen, da dieses Naturschauspiel atemberaubend ist und uns die schönsten Seiten
		der Welt präsentiert!<br/><br/>
		Verspielte Grüße,
		Tanja & Tobi
  </p>
	<p className='text-image'>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame1.jpg" alt="" className='img'/>
		</figure>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame6.jpg" alt="" className='img'/>
		</figure>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame10.jpg" alt="" className='img'/>
		</figure>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame13.jpg" alt="" className='img'/>
		</figure>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame20.jpg" alt="" className='img'/>
		</figure>
		<figure className='img-wrap'>
				<img src="../../static/img/biggame23.jpg" alt="" className='img'/>
		</figure>
	</p>
</section>;
