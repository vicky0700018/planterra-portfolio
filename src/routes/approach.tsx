import { createFileRoute } from '@tanstack/react-router';
import { ApproachPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/approach')({
 
 head: () => ({meta:[{title:'Our Agricultural Approach — PLANTERRA'},{name:'description',content:'Discover our thoughtful sourcing, selection, preparation and farm-to-market approach.'},{property:'og:title',content:'Our Agricultural Approach — PLANTERRA'},{property:'og:description',content:'Discover our thoughtful sourcing, selection, preparation and farm-to-market approach.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ApproachPage/></PublicShell>;}
