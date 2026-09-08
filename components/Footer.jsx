import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Image src="/images/footwork-logo.png" alt="FOOTWORK" width={210} height={105}/>
          <p>Voetbal × Kickboxing-inspired performance × Fysieke ontwikkeling</p>
          <strong>{site.location}</strong>
        </div>
        <div><h4>Programma</h4><Link href="/methode">Onze methode</Link><Link href="/footwork-8">FOOTWORK 8</Link><Link href="/performance-test">Performance Test</Link><Link href="/trainingen-prijzen">Trainingen & prijzen</Link></div>
        <div><h4>Academy</h4><Link href="/voor-clubs">Voor voetbalclubs</Link><Link href="/over-ons">Over ons</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><small>© 2026 {site.fullName}</small><small>Veilige jeugdtraining • Geen hard sparren • Geen hoofdcontact</small></div>
    </footer>
  );
}
