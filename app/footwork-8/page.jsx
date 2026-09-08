import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
export const metadata={title:'FOOTWORK 8'};
const weeks=[
['01','TEST','Baseline: sprint, agility, sprong, reactie en bewegingstechniek.'],
['02','FOOTWORK','Coördinatie, balans, richtingsveranderingen en efficiënt voetenwerk.'],
['03','FAST','Sprinttechniek, eerste meters en acceleratie.'],
['04','FORCE','Core, stabiliteit, kracht en veilige duelkracht.'],
['05','REACTION','Reactiesnelheid, keuzes maken en schakelen op prikkels.'],
['06','EXPLOSIVE','Sprongkracht, power en explosieve herhalingen.'],
['07','FUSION','Voetbal, fysieke prikkels en kickboxing-inspired performance gecombineerd.'],
['08','LEVEL UP','Eindmeting, challenges, vergelijking met start en Performance Card.']
];
export default function Page(){return <><PageHero eyebrow="8 WEEKS TO BECOME A STRONGER FOOTBALLER" title="FOOTWORK" highlight="8" text="Een duidelijk ontwikkeltraject van startmeting tot eindtest. Acht weken doelgericht trainen en progressie zichtbaar maken." image="/images/football-performance.jpg"/><section className="section content-section"><div className="program-timeline">{weeks.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section><section className="section dark-band"><div className="two-col"><div><span className="eyebrow">PLAYER PERFORMANCE CARD</span><h2>METEN. TRAINEN. OPNIEUW METEN.</h2></div><div><p>Iedere speler krijgt een overzicht van de belangrijkste begin- en eindmetingen. Daardoor zien speler en ouder waar progressie is geboekt en welke ontwikkelpunten blijven liggen.</p><div className="chips"><span>10m sprint</span><span>20m sprint</span><span>Agility</span><span>Sprongkracht</span><span>Reactie</span><span>Balans / core</span></div></div></div></section><section className="section info-strip"><div><strong>8 weken</strong><span>1 gerichte trainingscyclus</span></div><div><strong>Start + eindtest</strong><span>Meetbare ontwikkeling</span></div><div><strong>Kleine groepen</strong><span>Meer aandacht per speler</span></div><div><strong>Performance Card</strong><span>Resultaat overzichtelijk vastgelegd</span></div></section><CTA title="Start jouw FOOTWORK 8 traject."/></>}
