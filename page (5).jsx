import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export const metadata = { title: 'Onze Methode' };
const blocks = [
  ['F1', 'FOOTWORK', 'Coördinatie & agility', 'Snel voetenwerk, balans, remmen, draaien en opnieuw versnellen. Alles met een duidelijke vertaalslag naar voetbal.'],
  ['F2', 'FORCE', 'Kracht & stabiliteit', 'Core, heup- en beenkracht, rompstabiliteit en veilige duelkracht. Leeftijdsgericht en technisch uitgevoerd.'],
  ['F3', 'FAST', 'Snelheid & explosiviteit', 'Eerste meters, reactiestart, sprinttechniek, plyometrie en explosieve acties die wedstrijden kunnen beslissen.'],
  ['F4', 'FOCUS', 'Mentale performance', 'Concentratie, discipline, omgaan met druk, doorzetten en snel schakelen na fouten of tegenslag.']
];
export default function Methode(){return <><PageHero eyebrow="DE F4 PERFORMANCE METHOD" title="VIER PIJLERS." highlight="ÉÉN COMPLETE SPELER." text="Onze methode combineert atletische ontwikkeling en voetbalspecifieke toepassing. Elke trainingsprikkel heeft een doel op het veld." image="/images/training-focus.jpg"/><section className="section content-section"><div className="four-stack">{blocks.map(([n,t,s,d])=><article key={n}><span className="big-index">{n}</span><div><small>{s}</small><h2>{t}</h2><p>{d}</p></div></article>)}</div></section><section className="section dark-band"><div className="two-col"><div><span className="eyebrow">WAAROM DEZE COMBINATIE?</span><h2>TRAIN DE EIGENSCHAPPEN ACHTER HET SPEL.</h2></div><div><p>Voetbal vraagt om herhaald versnellen, afremmen, draaien, balans houden onder contact en beslissen onder druk. Daarom trainen we niet alleen een oefening, maar de onderliggende fysieke en mentale kwaliteiten.</p><p>Kickboxing-inspired drills gebruiken we als trainingsmiddel voor ritme, reactie, coördinatie en weerbaarheid. Er wordt niet hard gespard en er is geen hoofdcontact.</p></div></div></section><CTA title="Ervaar de F4-methode zelf."/></>}
