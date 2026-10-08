import { createFileRoute } from '@tanstack/react-router';
import { AboutPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/about')({
 
 head: () => ({meta:[{title:'About PLANTERRA — PLANTERRA'},{name:'description',content:'Meet PLANTERRA BY AGRI ALL FARM FRESH, led by SHAMRAO WAGHMODE in Pune, Maharashtra.'},{property:'og:title',content:'About PLANTERRA — PLANTERRA'},{property:'og:description',content:'Meet PLANTERRA BY AGRI ALL FARM FRESH, led by SHAMRAO WAGHMODE in Pune, Maharashtra.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><AboutPage/></PublicShell>;}
