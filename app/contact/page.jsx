import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { site } from '@/lib/site';

export const metadata={title:'Proeftraining & Contact'};
export default function Page(){return <><PageHero eyebrow="PROEFTRAINING • ’T GOOI" title="LEVEL UP" highlight="YOUR GAME." text="Vraag een proeftraining, Performance Test, FOOTWORK 8 of clubprogramma aan. We nemen contact op om niveau, doelen en beschikbaarheid te bespreken." image="/images/football-training.jpg"/><section className="section contact-layout"><div><span className="eyebrow">AANMELDEN</span><h2>DE EERSTE STAP IS SIMPEL.</h2><p>Vertel kort wie de speler is en wat hij of zij wil verbeteren. Daarna bepalen we samen welk traject het beste past.</p><div className="contact-cards"><article><strong>Regio</strong><span>{site.location}</span></article><article><strong>E-mail</strong><span>{site.email}</span></article><article><strong>Reactie</strong><span>We nemen zo snel mogelijk persoonlijk contact op.</span></article><article><strong>Veiligheid</strong><span>Geen hard sparren / geen hoofdcontact.</span></article></div></div><LeadForm/></section></>}
