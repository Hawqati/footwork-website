import { site } from '@/lib/site';
const routes=['','/methode','/voetbaltraining','/kickboksen','/performance','/footwork-8','/performance-test','/trainingen-prijzen','/rooster','/voor-clubs','/over-ons','/faq','/contact','/privacy','/voorwaarden'];
export default function sitemap(){return routes.map(route=>({url:`${site.domain}${route}`,lastModified:new Date(),changeFrequency:route===''?'weekly':'monthly',priority:route===''?1:.7}))}
