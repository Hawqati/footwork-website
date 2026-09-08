import Image from 'next/image';

const pillars = [
  ['⚡', 'Sterker', 'Meer kracht en stabiliteit'],
  ['➤', 'Sneller', 'Explosiviteit en reactie'],
  ['✦', 'Explosiever', 'Power, snelheid en agility'],
  ['⬡', 'Weerbaarder', 'Mentaal én fysiek']
];

const programs = [
  { image: '/images/football-training.jpg', title: 'Voetbaltraining', text: 'Techniek, inzicht, voetwerk en toepassing onder druk.' },
  { image: '/images/kickboxing-training.jpg', title: 'Kickboxing performance', text: 'Reactie, discipline, balans en weerbaarheid. Zonder hard sparren of hoofdcontact.' },
  { image: '/images/strength-training.jpg', title: 'Physical performance', text: 'Kracht, sprint, explosiviteit, core en atletisch bewegen.' }
];

const weeks = ['TEST', 'FOOTWORK', 'FAST', 'FORCE', 'REACTION', 'EXPLOSIVE', 'FUSION', 'LEVEL UP'];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="FOOTWORK home">
          <Image src="/images/footwork-logo.png" alt="FOOTWORK logo" width={270} height={140} priority />
        </a>
        <nav>
          <a href="#methode">Methode</a>
          <a href="#trainingen">Trainingen</a>
          <a href="#footwork8">FOOTWORK 8</a>
          <a href="#clubs">Voor clubs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-green nav-cta" href="#contact">Inschrijven</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">DUTCH FOOTBALL PERFORMANCE ACADEMY • ’T GOOI</span>
          <h1>BUILD THE ATHLETE.<br/><span>IMPROVE THE PLAYER.</span></h1>
          <p>Meer dan alleen voetbal. FOOTWORK combineert voetbaltraining, kickboxing-inspired performance en fysieke ontwikkeling zodat jonge spelers sterker, sneller, explosiever en weerbaarder worden.</p>
          <div className="actions">
            <a className="btn btn-orange" href="#contact">Plan een proeftraining →</a>
            <a className="btn btn-outline" href="#footwork8">Bekijk FOOTWORK 8</a>
          </div>
          <div className="safe-note">✓ Geen hard sparren &nbsp; • &nbsp; ✓ Geen hoofdcontact &nbsp; • &nbsp; ✓ Jeugdgericht</div>
        </div>
        <div className="hero-visual">
          <Image src="/images/hero-athletes.jpg" alt="FOOTWORK voetbal en kickboxing performance" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="hero-badge">MORE THAN<br/><em>FOOTBALL.</em></div>
        </div>
      </section>

      <section className="pillarbar">
        {pillars.map(([icon,title,text]) => <div className="pillar" key={title}><b>{icon}</b><span><strong>{title}</strong><small>{text}</small></span></div>)}
      </section>

      <section id="methode" className="split section">
        <div className="photo tall"><Image src="/images/training-focus.jpg" alt="FOOTWORK jeugd performance training" fill sizes="(max-width: 800px) 100vw, 45vw"/></div>
        <div className="section-copy">
          <span className="eyebrow">ONZE MISSIE</span>
          <h2>COMPLETE ATLETEN.<br/>BETERE VOETBALLERS.</h2>
          <p>De moderne voetballer heeft meer nodig dan techniek alleen. We bouwen aan acceleratie, balans, kracht, reactievermogen, focus en zelfvertrouwen — allemaal vertaald naar situaties op het voetbalveld.</p>
          <div className="method-grid">
            <article><span>F1</span><h3>FOOTWORK</h3><p>Coördinatie, agility, balans en richtingsveranderingen.</p></article>
            <article><span>F2</span><h3>FORCE</h3><p>Core, kracht, stabiliteit en duelkracht.</p></article>
            <article><span>F3</span><h3>FAST</h3><p>Acceleratie, explosiviteit en reactiesnelheid.</p></article>
            <article><span>F4</span><h3>FOCUS</h3><p>Concentratie, discipline en mentale weerbaarheid.</p></article>
          </div>
        </div>
      </section>

      <section id="trainingen" className="section programs">
        <div className="section-heading"><span className="eyebrow">ONS AANBOD</span><h2>TRAIN. DEVELOP. PERFORM.</h2></div>
        <div className="cards">
          {programs.map(p => <article className="card" key={p.title}><div className="card-img"><Image src={p.image} alt={p.title} fill sizes="(max-width: 800px) 100vw, 33vw"/></div><div className="card-body"><h3>{p.title}</h3><p>{p.text}</p><a href="#contact">MEER INFO →</a></div></article>)}
        </div>
      </section>

      <section id="footwork8" className="section fw8">
        <div className="fw8-number">8</div>
        <div>
          <span className="eyebrow">8 WEKEN NAAR EEN STERKERE SPELER</span>
          <h2>FOOTWORK 8</h2>
          <p>Een meetbaar ontwikkelprogramma met start- en eindtest. Iedere speler werkt doelgericht aan snelheid, kracht, coördinatie, explosiviteit en mentale scherpte.</p>
          <div className="week-grid">{weeks.map((w,i)=><div key={w}><span>0{i+1}</span>{w}</div>)}</div>
          <p className="testing">Performance tests: 10m sprint • 20m sprint • sprongkracht • agility • reactie • balans/core</p>
        </div>
      </section>

      <section id="clubs" className="section club">
        <div className="club-copy">
          <span className="eyebrow">VOOR VOETBALCLUBS</span>
          <h2>GEEN EXTRA TRAINING.<br/>EEN EXTRA DIMENSIE.</h2>
          <p>FOOTWORK kan als aanvullend performanceblok binnen een jeugdopleiding worden ingezet. Wij sluiten aan op de voetbalpraktijk en maken fysieke progressie zichtbaar.</p>
          <a className="btn btn-green" href="#contact">Bespreek een clubprogramma →</a>
        </div>
        <div className="photo club-photo"><Image src="/images/football-performance.jpg" alt="Voetbal performance training" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
      </section>

      <section id="contact" className="section cta">
        <span className="eyebrow">LOCATIE: ’T GOOI</span>
        <h2>WORD DE BESTE VERSIE<br/>VAN JEZELF.</h2>
        <p>Interesse in een proeftraining, FOOTWORK 8 of samenwerking met jouw voetbalclub? Meld je aan en we nemen contact met je op.</p>
        <form action="mailto:info@footworkacademy.nl" method="post" encType="text/plain">
          <input name="naam" placeholder="Naam speler / ouder" required />
          <input name="email" type="email" placeholder="E-mailadres" required />
          <input name="leeftijd" placeholder="Leeftijd speler" />
          <select name="interesse" defaultValue=""><option value="" disabled>Waar heb je interesse in?</option><option>Proeftraining</option><option>FOOTWORK 8</option><option>Clubprogramma</option><option>Personal performance</option></select>
          <textarea name="bericht" placeholder="Vertel kort waar je naar zoekt"></textarea>
          <button className="btn btn-orange" type="submit">Aanvraag versturen →</button>
        </form>
      </section>

      <footer><Image src="/images/footwork-logo.png" alt="FOOTWORK" width={220} height={110}/><p>Voetbal × Kickboxing × Performance • ’t Gooi</p><small>© 2026 FOOTWORK — Dutch Football Performance Academy</small></footer>
    </main>
  );
}
