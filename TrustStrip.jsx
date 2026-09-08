export default function TrustStrip(){
 const items=[['JEUGDGERICHT','Training afgestemd op leeftijd en belastbaarheid'],['VEILIG','Geen hard sparren en geen hoofdcontact'],['MEETBAAR','Start- en eindmetingen waar passend'],['VOETBALGERICHT','Fysieke winst vertalen naar het veld']];
 return <section className="trust-strip">{items.map(([t,p])=><div key={t}><strong>{t}</strong><span>{p}</span></div>)}</section>
}
