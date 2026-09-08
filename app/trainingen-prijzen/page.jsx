import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
export const metadata={title:'Trainingen & Prijzen'};
const prices=[
['PROEFTRAINING','Kennismaken','Gratis*','Ervaar de trainingsvorm en bespreek niveau en doelen.'],
['1× PER WEEK','Development','vanaf €59 p/m','Structurele ontwikkeling naast de reguliere clubtraining.'],
['2× PER WEEK','Performance','vanaf €89 p/m','Meer trainingsprikkels en snellere opbouw van fysieke kwaliteiten.'],
['FOOTWORK 8','8-week program','vanaf €149','Inclusief start- en eindmeting en Player Performance Card.'],
['ELITE SMALL GROUP','Extra aandacht','vanaf €119 p/m','Kleine groep voor ambitieuze spelers met gerichte coaching.'],
['PERSONAL PERFORMANCE','1-op-1','vanaf €65','Individuele sessie op specifieke ontwikkeldoelen.']
];
export default function Page(){return <><PageHero eyebrow="TRAININGEN • ’T GOOI" title="KIES JOUW" highlight="NEXT LEVEL." text="Van kennismaking tot een compleet 8-wekenprogramma. We delen spelers in op leeftijd, niveau en trainingsdoel." image="/images/hero-athletes.jpg"/><section className="section content-section"><div className="pricing-grid">{prices.map(([t,s,p,d])=><article key={t}><small>{s}</small><h3>{t}</h3><strong>{p}</strong><p>{d}</p><a className="btn btn-outline" href="/contact">Aanvragen →</a></article>)}</div><p className="price-note">* Conceptprijzen voor de lancering. Definitieve tarieven, trainingsduur en voorwaarden kunnen per groep of locatie verschillen.</p></section><section className="section audience"><div className="section-heading"><span className="eyebrow">LEEFTIJDSGROEPEN</span><h2>TRAINEN OP NIVEAU.</h2></div><div className="audience-grid"><article><span>8–10</span><h3>FOUNDATION</h3><p>Motoriek, coördinatie en plezier.</p></article><article><span>11–13</span><h3>DEVELOPMENT</h3><p>Techniek, snelheid en controle.</p></article><article><span>14–16</span><h3>PERFORMANCE</h3><p>Power, intensiteit en wedstrijdtransfer.</p></article><article><span>SELECT</span><h3>ELITE</h3><p>Small group of 1-op-1 op doelstelling.</p></article></div></section><CTA/></>}
