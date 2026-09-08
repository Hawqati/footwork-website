import { NextResponse } from 'next/server';

function esc(value='') {
  return String(value).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}

export async function POST(request){
  try {
    const data = await request.json();
    const required = ['ouder','speler','leeftijd','telefoon','email','toestemming'];
    if (required.some(k => !String(data[k] || '').trim())) {
      return NextResponse.json({error:'Vul alle verplichte velden in.'},{status:400});
    }
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || 'FOOTWORK <onboarding@resend.dev>';
    if (!apiKey || !to) {
      return NextResponse.json({error:'Het online formulier is nog niet gekoppeld aan het FOOTWORK e-mailadres. Voeg RESEND_API_KEY en CONTACT_TO_EMAIL toe in Vercel.'},{status:503});
    }
    const subject = `Nieuwe FOOTWORK aanvraag — ${data.interesse || 'Proeftraining'} — ${data.speler}`;
    const html = `<div style="font-family:Arial,sans-serif;line-height:1.6"><h2>Nieuwe FOOTWORK aanvraag</h2><p><b>Ouder/verzorger:</b> ${esc(data.ouder)}</p><p><b>Speler:</b> ${esc(data.speler)}</p><p><b>Leeftijd:</b> ${esc(data.leeftijd)}</p><p><b>Telefoon:</b> ${esc(data.telefoon)}</p><p><b>E-mail:</b> ${esc(data.email)}</p><p><b>Club/niveau:</b> ${esc(data.club)}</p><p><b>Interesse:</b> ${esc(data.interesse)}</p><p><b>Doel:</b><br>${esc(data.doel).replace(/\n/g,'<br>')}</p><p><b>Bijzonderheden:</b><br>${esc(data.medisch).replace(/\n/g,'<br>')}</p></div>`;
    const r = await fetch('https://api.resend.com/emails', {method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:data.email,subject,html})});
    if (!r.ok) {
      const txt = await r.text();
      console.error('Resend error', txt);
      return NextResponse.json({error:'De aanvraag kon niet worden verstuurd. Probeer het later opnieuw.'},{status:502});
    }
    return NextResponse.json({ok:true});
  } catch (e) {
    console.error(e);
    return NextResponse.json({error:'Er ging iets mis bij het verwerken van de aanvraag.'},{status:500});
  }
}
