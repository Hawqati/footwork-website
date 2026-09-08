import './globals.css';
import './tweaks.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyActions from '@/components/StickyActions';
import { site } from '@/lib/site';

export const metadata={metadataBase:new URL(site.domain),title:{default:'FOOTWORK ACADEMY | Dutch Football Performance',template:'%s | FOOTWORK ACADEMY'},description:'FOOTWORK ACADEMY in ’t Gooi: voetbal, kickboxing performance en fysieke ontwikkeling voor jonge voetballers.',openGraph:{title:'FOOTWORK ACADEMY — Dutch Football Performance',description:'Sterker. Sneller. Explosiever. Weerbaarder.',type:'website',locale:'nl_NL',images:['/images/hero-athletes.jpg']},twitter:{card:'summary_large_image',images:['/images/hero-athletes.jpg']}};
export default function RootLayout({children}){const jsonLd={"@context":"https://schema.org","@type":"SportsActivityLocation","name":site.fullName,"areaServed":site.location,"url":site.domain,"description":"Performance academy voor jonge voetballers: voetbal, fysieke ontwikkeling en kickboxing-inspired performance."};return <html lang="nl"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/><main>{children}</main><Footer/><StickyActions/></body></html>}
