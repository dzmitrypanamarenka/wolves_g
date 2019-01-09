import React from 'react';
import Link from 'next/link';
import { Icon } from 'antd';

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
  <div style={{backgroundImage: `url('../../static/img/root1.jpg')`}} className='img'></div>
  <p className='text'>
    Diese Woche spielte ich in Duisburg zu viert (Fabian S., Fabian W. und Chris von den Brettspiel-Geeks) ROOT von Leder Games, welches von André vom Spieltreff Duisburg sehr gut erklärt wurde!
  </p>
  <p className='text'>
    Ein sehr taktisches und asymmetrisches Strategiespiel für Kenner- und Vielspieler.
    Ein Kampf um Wald und Siegpunkte, was sehr hübsch aussah, aber auch genügend Tiefe durch interessante und unterschiedliche Mechaniken beinhaltet!
  </p>
  <p className='text'>
    Root ist aber ein Spiel, was man definitiv mehrmals spielen sollte. Mindestens vier Mal, um so jede Rasse und deren unterschiedliche Fähigkeiten zu verstehen und somit im Spiel vorbereitet zu sein und richtig reagieren zu können!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/root2.jpg')`}} className='img -post -left'></span>
    Die Regeln sind grundsätzlich einfach, aber die jeweiligen Spezialfähigkeiten machen das Spiel so komplex und dadurch ist die Einstiegshürde recht hoch!
    Sobald man aber einmal drin ist, spielt sich ROOT sehr gut und flüssig.
  </p>
  <p className='text'>
    Des Weiteren muss man erwähnen, dass für ROOT schon gute Englischkenntnisse von Nöten sind, da viele Fähigkeiten auf dem Spieler-Tableau für Fragezeichen sorgen können.
    Dadurch, dass es asymmetrisch gespielt wird und somit jeder Spieler seinen kompletten Zug absolviert, kann es leider zu Downtimes kommen!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/root3.jpg')`}} className='img -post -right'></span>
    Interaktiv war es schon, obwohl man schon stark auf sich und seine Strategie fokussiert ist.
    Liegt aber wahrscheinlich erst mal daran, dass man versucht, das Spiel zu verstehen.
    Ich z.B. wusste nicht, wie meine Gegner gewinnen können, und hab mich somit nur auf mich konzentriert!
  </p>
  <p className='text'>
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
  <div style={{backgroundImage: `url('../../static/img/roll1.jpg')`}} className='img'></div>
  <p className='text'>
    Hallo Brettspielfreunde,
    gestern das erste Mal Gloomhaven gespielt, hat richtig Bock gemacht! I ❤️ it!
    Ein Kumpel und ich sind neu und mitten im Abenteuer eingestiegen, was gar kein Problem gemacht
    hat, sehr nice!👍
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/roll2.jpg')`}} className='img -post -left'></span>
    Mich hat es direkt in seinen Bann gezogen.
    Vor allem die Art und Weise, wie man sein persönliches Kartendeck spielt. Denn man muss jedes Mal entscheiden, ob man die Aktion (die Karten bieten 2 Optionen) verwendet, die anschließend auf den Ablagestapel gelegt wird, oder eine mächtigere Aktion wählt, wo man dann aber die Karte ganz aus diesem Spiel verliert!
  </p>
  <p className='text'>
  
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/roll3.jpg')`}} className='img -post -right'></span>
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
  <div style={{backgroundImage: `url('../../static/img/preview0.jpg')`}} className='img'></div>
  <p className='text'>
    Heute stellen wir Euch unsere Highlights 2018, im Bereich Brett- und Kartenspiele vor.
    Es spiegelt natürlich unsere Subjektive Meinung wieder, welche Spiele wie oft gespielt wurden.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high1.jpg')`}} className='img -post -left'></span>
    <b>1. Rising Sun (Area-Control)</b><br/>
    <b>Verlag:</b> CMON / Asmodee<br/>
    Für mich ist <b>Rising Sun</b> das Highlight des Jahres! Eric Lang hat es nach Blood Rage wieder geschafft, ein Spiel zu kreieren, was optisch, von der Mechanik und dem Spaß-Faktor genau meinen Nerv getroffen hat. Die Figuren sind wieder eine Meisterleistung und sind das Maß aller Dinge. Die Spielmechanik brauch sich dahinter aber nicht verstecken. <b>Rising Sun</b> kombiniert eindrucksvoll ein strategisches Area-Control-Spiel, mit einem interaktiven Verhandlungs-Mechanismus und ein interessantes wie auch spannendes Kampfsystem, dass sogar noch ein wenig besser ist als das von Cry Havoc. Dazu gibt es unterschiedliche Clans die sich alle unterschiedlich spielen und in meinen Augen sehr gut ausbalanciert sind.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high2.jpg')`}} className='img -post -right'></span>
    <b>2. KeyForge</b><br/>
    <b>Verlag:</b> Fantasy Flight Games / Asmodee<br/>
    <b>KeyForge</b> ist für mich das Kartenspiel-Highlight des Jahres 2018 und endlich eine Revolution in diesem Genre! Richard Garfield hat nach Magic The Gathering wieder einen Meilenstein kreiert. <b>KeyForge</b> in Kombination mit Unique Games ist für alle Typen von Spielern geeignet und spricht dadurch auch alle gleichermaßen an. Damit wurde was geschaffen, was ich für nicht möglich gehalten habe. Es werden nämlich Interessierte, Anfänger, Gelegenheits-, Viel- und Turnierspieler abgeholt. Vor allem auch die Spieler, die dem TCG und LCG abgeschworen haben, da sie es leid waren, so viel Zeit und Geld zu investieren.
    Durch die Unique Decks gibt es keinen Nachbau und die immer gleichen Kartendecks, gegen die man spielt. So muss man selbstständig das Spiel erkunden, erlernen und meistern. <b>KeyForge</b> macht wirklich mal was anders, geht ganz neue Wege und ist keine billige Kopie. Diese neuen Wege, das Selbstentscheiden ob ich nach Bedarf ein neues Deck kaufen möchte und nicht nach irgendeinem Zyklus finde ich sehr beruhigend. So kann man es nämlich auch sehr schön zwischen den vielen anderen Karten-, Brett- oder Digitalspielen spielen, ohne einen Nachteil zu haben.

  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high3.jpg')`}} className='img -post -left'></span>
    <b>3. Brass Birmingham (Wirtschafts-Spiel)</b><br/>
    <b>Verlag:</b> Roxley Games<br/>
    <b>Brass Birmingham</b> ist ein Meisterwerk der komplexen Strategie- und Wirtschaftsspiele und ist für mich sogar das beste Wirtschaftsspiel auf dem Markt! <b>Brass Birmingham</b> empfehle ich jedem Spieler, der die wahre Kunst im Expertenspielbereich kennen lernen möchte. Da diese Version noch komplexer und anspruchsvoller ist, sowie mehr Spieltiefe besitzt als die Version von <b>Brass</b> Lancashire. Zugleich ist diese Version auch für diejenigen geeignet, die schon die Original Version von <b>Brass</b> oder die deutsche Version Kohle besitzen. Da hier neue und interessante Komponenten dazukamen und somit ein ganz neues Spielgefühl erhält.
    <b>Brass Birmingham</b> ist nicht nur hochintelligent, spannend und komplex konzipiert, sondern besitzt dazu noch einen wunderbaren Mechanismus, wie Industrien aktiviert werden. Dazu bietet <b>Brass Birmingham</b> einen hohen Wiederspielwert und ist dazu noch thematisch toll umgesetzt. Man hat wirklich das Gefühl, gerade bei der industriellen Revolution mitzuwirken und teilzuhaben.
    Die Neuauflage ist ein Augenschmaus und wunderschön gezeichnet und gehört für mich zu den schönsten Spielen in meinem Spieleregal. Zusätzlich ist das komplette Spielmaterial extrem hochwertig. Wie die tollen Münz-Chips im Poker-Look, die man zusätzlich für jedes Spiel verwenden kann, was ich grandios finde und schon oft verwendet habe.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high4.jpg')`}} className='img -post -right'></span>
    <b>4. Architekten des Westfrankenreichs (Worker-Placement)</b><br/>
    <b>Verlag:</b> Garphill Games / Schwerkraft-Verlag<br/>
    Für mich könnte <b>Architekten des Westfrankenreichs</b> das nächste Kennerspiel des Jahres werden! Eingängige Regeln, tolle Spielmechanismen, sehr interaktiv und für ein Worker-Placement Spiel extrem flüssig, keine Downtimes und vor allem extrem schnell zu spielen. Man merkt dem Spiel sofort an, dass das Erfolgsduo - Shem Philipps (Autor) und „The Mico“ (Illustrator) sich wieder zusammengetan haben. Auch Optisch fühlt man sich direkt mit der Nordsee Trilogie verbunden und die Symbolsprache ist so gut wie die gleiche. Hierdurch werden Kenner der Spielreihe sich schnell zurechtfinden. <b>Architekten des Westfrankenreichs</b> ist somit ein fulminanter Auftakt einer neuen Trilogie und ist in meinen Augen sogar noch besser als <b>Räuber der Nordsee</b> und das sage ich als „oller“ Wikinger Fan! 😉
    Dazu spielt sich das Spiel mit der Spieleranzahl gleich gut. Zu dem Solo-Modus kann ich euch nichts sagen, da ich Brettspiele prinzipiell nicht solo spiele.
    Wer ein schnelles, sehr gutes Strategiespiel sucht, mit Euro-Games und Worker-Placement Spiele klarkommt, den empfehle ich uneingeschränkt <b>Architekten des Westfrankenreichs</b>.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high5.jpg')`}} className='img -post -left'></span>
    <b>5. Spirit Island (Koop-Area-Control)</b><br/>
    <b>Verlag:</b> Greater Than Games / Pegasus Spiele<br/>
    <b>Spirit Island</b> ist aktuell mein Lieblings-Strategie-Koop-Spiel. Denn es ist wirklich fordernd und man hat direkt vom ersten Zug an Stress! Dazu finde ich die Idee erfrischend, dass die Spieler in die Rolle von Geistern schlüpfen und sich gegen die menschliche Bevölkerung stellen, um gegen deren natürlichen Drang anzukämpfen, sich immer weiter auszubreiten.
    <b>Spirit Island</b> ist dazu noch sehr interaktiv und wenn sich die Gruppe nicht permanent abspricht, ist das Unterfangen zum Scheitern verurteilt. Alles in allem ein Schwergewicht, mit schönem Deckbuilding-Mechanismus, erfrischenden Ideen, hohem Wiederspielreiz, unterschiedlichen Schwierigkeitsgraden und Spielmaterial, was sich nicht verstecken muss!
    Bin schon auf die Erweiterung gespannt, obwohl man aktuell noch genug damit zu tun hat, alle Geister kennen zu lernen, die sich dazu auch interessant und unterschiedlich spielen!

  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high6.png')`}} className='img -post -right'></span>
    <b>6. Dice Throne (Dice-Management)</b><br/>
    <b>Verlag:</b> Roxley Games<br/>
    Ich bin eigentlich kein richtiger Fan von Würfel spielen, da der Glücksfaktor für mich oft zu hoch wird. Aber dank <b>Dice Throne</b>, hat sich das verändert. Es hat mir so viel Spaß gemacht, dass ich zu Weihnachten direkt die 2. Season bekommen habe, um noch mehr Helden und unterschiedliche Charaktere spielen zu können. Ein leicht zu erlernendes Würfel-Management Spiel, was eine gute taktische und strategische tiefe besitzt. Von Anfang an hat man eine Reihe von Optionen auf dem eigenen und individuellen Spielbrett. Die unterschiedlichen Charaktere spielen sich wirklich anders und gibt dem Spiel somit einen hohen Wiederspielreiz. Was ich richtig gut finde, ist das jedes Spiel knapp ausging. Ob eines gegen eins oder im Team-Battle, was ich dem sehr guten Balancing den einzelnen Charakteren zukommen lasse. Ich freue mich jetzt schon riesig auf die Season two, und auf neue Charaktere und weitere schöne und spannende Battles bei <b>Dice Throne</b>!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high7.jpg')`}} className='img -post -left'></span>
    <b>7. Ruchlos (Deckbuilder)</b><br/>
    <b>Verlag:</b> Board Game Circus<br/>
    Ich liebe Deckbuilder und somit war ich sehr gespannt, was nach 2017 kommen wird?
    Denn 2017 kamen mit Hero Realms, Kong! Und Vikings gone Wild direkt 3 Deckbuilder heraus, die ich alle sehr gerne und viel gespielt habe! 2018 ist es für mich ganz klar <b>Ruchlos</b>! Das Piraten Setting und die tolle Spielmechanik verschmelzen perfekt miteinander.
    <b>Ruchlos</b> erfindet das Rad nicht neu, aber die unterschiedlichen Auslagen, wo man seine Karten spielt, die hohe Interaktion untereinander und die Fähigkeiten der einzelnen Piraten, machen das Spiel so interessant und spaßig. Sodas wir dass ich es jederzeit immer gerne auf dem Tisch bringe. Zum Glück spielt sich <b>Ruchlos</b> auch in jeder Kombination spannend. Zu zweit würde ich aber ehrlich gesagt immer auf Hero Realms ausweichen! Wir fanden das Spiel so gut, dass wir direkt unsere eigenen Promokarten dazu anfertigen ließen! 😊
    Diese bekommt man direkt 2x, wenn man uns bei Patreon mit 2$, wie auch 5$ unterstützt.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high8.jpg')`}} className='img -post -right'></span>
    <b>8. Gloomhaven (Dungen Crawler)</b><br/>
    <b>Verlag:</b> Cephalofair Games / Feuerland Spiele<br/>
    Ich gebe zu, wir sind bei <b>Gloomhaven</b> noch nicht weit vorgeschritten, unser Projekt lässt grüßen! 😉 Aber jede Minute unserer bisherigen Abenteuer, die wir bis jetzt bestritten haben, waren spannend, interessant und vor allem haben uns Spaß gemacht! Für uns ist es auch nicht nur ein einfacher Dungeon Crawler, denn es fühlt sich dazu noch wie ein Brett-Rollenspiel an, bei welchem man sich darauf freut den eigenen Helden/Charakter aufleveln zu können. Die jeweiligen Klassen spielen sich unterschiedlich und teilen sich dazu noch in verschiedene Klassen auf, wie wir es von Rollenspielen kennen (Kämpfer, Heiler, Fernkämpfer und Unterstützer). Dazu ist es aber auch ein Brainburner, den perfekten Zug, das Überleben der Gruppe und das erfolgreiche abschließen des Abenteuers zu sichern. Das Spiel hat einen stolzen Preis, was wir aber gerechtfertigt finden, bei der Anzahl an Spielmaterial, Spieltiefe und Zeit die man mit <b>Gloomhaven</b> verbringen kann. Für mich auf jeden Fall aktuell der spannendste und intensivste Dungen Crawler, den ich gespielt habe.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high9.jpg')`}} className='img -post -left'></span>
    <b>9. Archmage (Area-Control)</b><br/>
    <b>Verlag:</b> Starling Games<br/>
    Das erste was sofort auffällt ist das geniale und interessante <b>Archmage</b> Board, welches die unterschiedlichen Magier Schulen wiederspiegelt. Dieses Board und die Wahl der Farben/ Magieschule beeinflusst das eigene Kartendeck und welche weiteren Zauber man spielen kann. Das macht das <b>Archmage</b> zu einer richtigen harten Nuss und zu einem sehr taktischen und strategischen Area-Control-Spiel. Denn die Magier wollen nicht nur die Zauber verbessern, sondern sich gleichzeitig sich auch auf dem Spielfeld ausbreiten, um weitere Schulen zu gründen, Relikten nachzujagen und gegnerische Magier auszulöschen! 😉
    Ich bin schon auf die angekündigte Erweiterung zu <b>Archmage</b> gespannt und hoffe, dass es das Spiel bald auch in deutscher Sprache zu kaufen gibt. Denn die Zauber beinhalten schon recht viel Text und könnten den einen oder andren damit überfordern.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/high10.jpg')`}} className='img -post -right'></span>
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
  <div style={{backgroundImage: `url('../../static/img/mars1.jpg')`}} className='img'></div>
  <p className='text'>
    Hallo liebe Brettspielfreunde,
    Wir haben das erste Mal Terraforming Mars mit fast allen Erweiterungen (Venus, Kolonien und Präludium) zu fünft gespielt! Eigentlich wollten wir auf einem der Spielbretter Hellas oder Elysium zocken, haben wir vor lauter Optionen und Möglichkeiten aber glatt vergessen! ;)
  </p>
  <p className='text'>
    Was für ein Spielgenuss und der Mehrwert der jeweiligen Erweiterung war großartig und einfach nur Klasse!
    Man hat jetzt so viele Karten, dass jeder Spieler seinen eigenen Stapel besitzen könnte. Aber man kann einfach nie genug haben, oder?
  </p>
  <p className='text'>
    Jede Erweiterung fügt sich nahtlos ins Grundspiel ein und schenkt dem Spiel interessante und neue Möglichkeiten, Punkte zu generieren.
  </p>
  <p className='text'>
    Zu fünft und mit allen Erweiterungen geht zwar die Übersicht flöten, was schon vorher ein nicht so einfaches Unterfangen war, ist mit allen Erweiterungen aber jetzt richtig krass. Dafür bietet es den Spielern, einfacher und schneller die eigene Taktik und Strategie im Spiel zu verändern und anzupassen.
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/mars2.jpg')`}} className='img -post -left'></span>
    Ich selber habe diesmal nur den klassischen Weg beschritten, da ich mir dachte, alle anderen wollen jetzt die neuen Erweiterungen testen! Und genau so war es auch!
  </p>
  <p className='text'>
    Bin am Ende knapp Zweiter geworden und muss sagen, dass wir alle insgesamt nah beieinander waren. Denn es gibt jetzt sehr viele Optionen, Punkte zu generieren, und das ist das beste Kompliment für ein Spiel, wenn genau dieser Fall eintritt!
  </p>
  <p className='text'>
    <span style={{backgroundImage: `url('../../static/img/mars3.jpg')`}} className='img -post -right'></span>
    Die Erweiterungen haben das Spiel nicht unnütz in die Länge gezogen oder künstlich aufgebauscht, sondern noch mehr Möglichkeiten geschaffen, Punkte zu generieren, so dass es auch super zu 5 klappt und keiner benachteiligt wird. Sie bieten den Spielern somit einen wirklichen Mehrwert!
  </p>
  <p className='text'>
    Ich kann jedem Terraforming Mars mit allen Erweiterungen nur empfehlen, da es nicht nur Mega Spaß gemacht hat und neue taktische Tiefe schenkt, sondern sich auch zeitlich angenehm gespielt hat!
  </p>
</section>;
