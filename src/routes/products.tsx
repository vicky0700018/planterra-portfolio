import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/products')({
 
 head: () => ({meta:[{title:'Agricultural Products — Agro All Farm Fresh'},{name:'description',content:'Explore our illustrative portfolio of fresh fruits, vegetables, crops, fertilizers, soil and bulk agricultural produce.'},{property:'og:title',content:'Agricultural Products — Agro All Farm Fresh'},{property:'og:description',content:'Explore our illustrative portfolio of fresh fruits, vegetables, crops, fertilizers, soil and bulk agricultural produce.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ProductsPage/></PublicShell>;}
