import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/products')({
 
 head: () => ({meta:[{title:'Farm Fresh Products — PLANTERRA'},{name:'description',content:'Explore our illustrative portfolio of fresh fruits, vegetables, crops and bulk agricultural produce.'},{property:'og:title',content:'Farm Fresh Products — PLANTERRA'},{property:'og:description',content:'Explore our illustrative portfolio of fresh fruits, vegetables, crops and bulk agricultural produce.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><ProductsPage/></PublicShell>;}
