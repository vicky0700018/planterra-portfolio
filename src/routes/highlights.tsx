import { createFileRoute } from '@tanstack/react-router';
import { HighlightsPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/highlights')({
 
 head: () => ({meta:[{title:'Agricultural Highlights — Agro All Farm Fresh'},{name:'description',content:'Explore illustrative agricultural product and seasonal harvest showcases.'},{property:'og:title',content:'Agricultural Highlights — Agro All Farm Fresh'},{property:'og:description',content:'Explore illustrative agricultural product and seasonal harvest showcases.'},{property:'og:image',content:'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80'},{name:'twitter:image',content:'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><HighlightsPage/></PublicShell>;}
