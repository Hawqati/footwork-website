import Link from 'next/link';
export const metadata={title:'Bedankt'};
export default function Page(){return <section className="thankyou"><span className="eyebrow">AANVRAAG ONTVANGEN</span><h1>THANK YOU.<br/><span>LET'S LEVEL UP.</span></h1><p>Je aanvraag is verstuurd. We nemen contact op om de speler, doelen en een geschikt trainingsmoment te bespreken.</p><div className="actions"><Link href="/" className="btn btn-green">Terug naar home</Link><Link href="/footwork-8" className="btn btn-outline">Bekijk FOOTWORK 8</Link></div></section>}
