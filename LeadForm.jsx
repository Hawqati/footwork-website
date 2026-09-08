'use client';

import { useState } from 'react';

const interests = [
  'Proeftraining', 'Performance Test', 'FOOTWORK 8', '1× per week',
  '2× per week', 'Elite small group', 'Personal performance', 'Clubprogramma'
];

export default function LeadForm({ compact = false, defaultInterest = 'Proeftraining' }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || 'Versturen is niet gelukt.');
      setStatus('sent');
      form.reset();
      window.location.href = '/bedankt';
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Er ging iets mis. Probeer het opnieuw.');
    }
  }

  return <form className={`contact-form ${compact ? 'compact-form' : ''}`} onSubmit={submit}>
    <div className="form-row"><input name="ouder" placeholder="Naam ouder/verzorger *" required/><input name="speler" placeholder="Naam speler *" required/></div>
    <div className="form-row"><input name="leeftijd" type="number" min="7" max="18" placeholder="Leeftijd speler *" required/><input name="telefoon" type="tel" placeholder="Telefoonnummer *" required/></div>
    <input name="email" type="email" placeholder="E-mailadres *" required/>
    <div className="form-row"><input name="club" placeholder="Huidige club / niveau"/><select name="interesse" defaultValue={defaultInterest}>{interests.map(i => <option key={i}>{i}</option>)}</select></div>
    {!compact && <><textarea name="doel" placeholder="Waar wil de speler vooral beter in worden? Snelheid, kracht, techniek, zelfvertrouwen, weerbaarheid..."></textarea><textarea name="medisch" placeholder="Blessures of bijzonderheden waar we rekening mee moeten houden? (optioneel)"></textarea></>}
    <label className="consent"><input type="checkbox" name="toestemming" value="ja" required/><span>Ik ben ouder/verzorger of bevoegd om deze minderjarige aan te melden en ga akkoord met verwerking van deze gegevens voor de aanvraag. *</span></label>
    <button className="btn btn-orange" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Even versturen…' : 'Aanvraag versturen →'}</button>
    {status === 'error' && <small className="form-error">{message}</small>}
    <small className="form-note">We gebruiken de gegevens alleen om contact op te nemen over deze aanvraag. Zie onze <a href="/privacy">privacyverklaring</a>.</small>
  </form>;
}
