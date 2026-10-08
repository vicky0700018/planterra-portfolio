import { createFileRoute } from '@tanstack/react-router';
import { AboutPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/about')({
 
 head: () => ({meta:[{title:'About Agro All Farm Fresh — Agro All Farm Fresh'},{name:'description',content:'Meet Agro All Farm Fresh, led by SHAMRAO WAGHMODE in Pune, Maharashtra.'},{property:'og:title',content:'About Agro All Farm Fresh — Agro All Farm Fresh'},{property:'og:description',content:'Meet Agro All Farm Fresh, led by SHAMRAO WAGHMODE in Pune, Maharashtra.'},{property:'og:image',content:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80'},{name:'twitter:image',content:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><AboutPage/></PublicShell>;}
