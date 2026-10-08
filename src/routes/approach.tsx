import { createFileRoute } from '@tanstack/react-router';
import { ApproachPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/approach')({
 
 head: () => ({meta:[{title:'Our Agricultural Approach — Agro All Farm Fresh'},{name:'description',content:'Discover our thoughtful sourcing, selection, preparation and farm-to-market approach.'},{property:'og:title',content:'Our Agricultural Approach — Agro All Farm Fresh'},{property:'og:description',content:'Discover our thoughtful sourcing, selection, preparation and farm-to-market approach.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ApproachPage/></PublicShell>;}
