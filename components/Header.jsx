'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { mainNav } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <Link className="brand" href="/" aria-label="FOOTWORK home" onClick={() => setOpen(false)}>
        <Image src="/images/footwork-logo.png" alt="FOOTWORK logo" width={250} height={120} priority />
      </Link>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {mainNav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>Proeftraining</Link>
      </nav>
      <Link className="btn btn-green nav-cta" href="/contact">Proeftraining</Link>
      <button className="menu-toggle" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
    </header>
  );
}
