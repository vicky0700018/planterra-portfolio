import { createFileRoute } from '@tanstack/react-router';
import { Home, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/')({
 
 head: () => ({meta:[{title:'Fresh Agriculture, Trusted Quality — PLANTERRA'},{name:'description',content:'Farm fresh agricultural products, quality sourcing and reliable farm-to-market connections in Pune.'},{property:'og:title',content:'Fresh Agriculture, Trusted Quality — PLANTERRA'},{property:'og:description',content:'Farm fresh agricultural products, quality sourcing and reliable farm-to-market connections in Pune.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><Home/></PublicShell>;}
