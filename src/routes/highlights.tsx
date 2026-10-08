import { createFileRoute } from '@tanstack/react-router';
import { HighlightsPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/highlights')({
 
 head: () => ({meta:[{title:'Agricultural Highlights — PLANTERRA'},{name:'description',content:'Explore illustrative agricultural product and seasonal harvest showcases.'},{property:'og:title',content:'Agricultural Highlights — PLANTERRA'},{property:'og:description',content:'Explore illustrative agricultural product and seasonal harvest showcases.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><HighlightsPage/></PublicShell>;}
