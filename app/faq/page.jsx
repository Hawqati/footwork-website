import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
export const metadata={title:'Veelgestelde Vragen'};
const faq=[
['Voor welke leeftijd is FOOTWORK?','De kern richt zich op jeugdvoetballers van ongeveer 8 tot en met 16 jaar. We delen in op leeftijd, niveau en belastbaarheid.'],
['Moet mijn kind al op voetbal zitten?','De trainingen zijn ontwikkeld voor voetballers. Voor deelname aan specifieke trajecten bespreken we vooraf het niveau en de sportachtergrond.'],
['Is het kickboksen veilig?','Ja, de kickboxing-inspired onderdelen zijn gecontroleerde performanceoefeningen. Geen hard sparren en geen hoofdcontact.'],
['Wordt er met gewichten getraind?','Afhankelijk van leeftijd en niveau. Techniek, lichaamscontrole en passende weerstand staan voorop; we trainen geen bodybuilding.'],
['Wat is FOOTWORK 8?','Een traject van acht weken met gerichte thema’s, een start- en eindmeting en een Player Performance Card.'],
['Wat is een Performance Test?','Een praktische nulmeting met onder andere sprint, agility, sprong, reactie en balans/core.'],
['Waar trainen jullie?','De academy richt zich op ’t Gooi. De exacte trainingslocatie kan per groep of programma worden gecommuniceerd.'],
['Kan een voetbalclub FOOTWORK inhuren?','Ja. We bieden losse teamblokken, testdagen en 8-weekse trajecten als aanvulling op de jeugdopleiding.'],
['Wat moet een speler meenemen?','Sportkleding, geschikte schoenen voor de locatie en drinken. Eventuele extra benodigdheden communiceren we vooraf.'],
['Kan ik eerst kennismaken?','Ja. Een proeftraining of Performance Test is de beste manier om te bepalen welk traject past.']
];
export default function Page(){return <><PageHero eyebrow="FAQ" title="GOEDE VRAAG." highlight="DUIDELIJK ANTWOORD." text="Alles wat ouders, spelers en clubs vooraf willen weten over FOOTWORK." image="/images/hero-athletes.jpg"/><section className="section content-section"><div className="faq-list">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section><CTA/></>}
