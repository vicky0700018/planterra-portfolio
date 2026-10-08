import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/contact')({
 validateSearch: (search: Record<string, unknown>) => ({ product: typeof search.product === 'string' ? search.product : undefined }),
 head: () => ({meta:[{title:'Contact & Enquiries — PLANTERRA'},{name:'description',content:'Contact PLANTERRA in Pune for farm fresh and agricultural product enquiries.'},{property:'og:title',content:'Contact & Enquiries — PLANTERRA'},{property:'og:description',content:'Contact PLANTERRA in Pune for farm fresh and agricultural product enquiries.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ContactPage/></PublicShell>;}
