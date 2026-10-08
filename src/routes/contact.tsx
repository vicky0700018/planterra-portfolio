import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/contact')({
 validateSearch: (search: Record<string, unknown>) => ({ product: typeof search['product'] === 'string' ? search['product'] : undefined }),
 head: () => ({meta:[{title:'Contact & Enquiries — Agro All Farm Fresh'},{name:'description',content:'Contact Agro All Farm Fresh in Pune for farm fresh and agricultural product enquiries.'},{property:'og:title',content:'Contact & Enquiries — Agro All Farm Fresh'},{property:'og:description',content:'Contact Agro All Farm Fresh in Pune for farm fresh and agricultural product enquiries.'},{property:'og:image',content:'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80'},{name:'twitter:image',content:'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ContactPage/></PublicShell>;}
