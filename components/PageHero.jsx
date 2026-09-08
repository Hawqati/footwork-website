import Image from 'next/image';

export default function PageHero({ eyebrow, title, highlight, text, image = '/images/football-performance.jpg' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}{highlight && <><br/><span>{highlight}</span></>}</h1><p>{text}</p></div>
      <div className="page-hero-image"><Image src={image} alt="FOOTWORK training" fill priority sizes="(max-width: 900px) 100vw, 45vw"/></div>
    </section>
  );
}
