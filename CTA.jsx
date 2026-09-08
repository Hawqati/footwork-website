import Link from 'next/link';

export default function CTA({ title = 'Klaar om te levelen?', text = 'Plan een proeftraining of vraag informatie aan over het programma dat bij jouw speler past.' }) {
  return <section className="mini-cta"><span className="eyebrow">LEVEL UP YOUR GAME</span><h2>{title}</h2><p>{text}</p><div className="actions"><Link className="btn btn-orange" href="/contact">Plan een proeftraining →</Link><Link className="btn btn-outline" href="/faq">Bekijk veelgestelde vragen</Link></div></section>;
}
