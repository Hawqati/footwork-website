'use client';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function StickyActions(){
  const digits = site.whatsapp.replace(/\D/g,'');
  const whatsapp = digits ? `https://wa.me/${digits}?text=${encodeURIComponent('Hoi FOOTWORK, ik wil graag meer informatie over een proeftraining.')}` : null;
  return <div className="sticky-actions">
    <Link href="/contact" className="sticky-primary">Proeftraining</Link>
    {whatsapp && <a href={whatsapp} target="_blank" rel="noreferrer" className="sticky-whatsapp" aria-label="WhatsApp FOOTWORK">WhatsApp</a>}
  </div>
}
