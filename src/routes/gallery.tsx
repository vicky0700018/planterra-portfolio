import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/gallery')({
 
 head: () => ({meta:[{title:'Agriculture Gallery — PLANTERRA'},{name:'description',content:'Explore agricultural landscapes, fresh produce and harvesting in the PLANTERRA visual gallery.'},{property:'og:title',content:'Agriculture Gallery — PLANTERRA'},{property:'og:description',content:'Explore agricultural landscapes, fresh produce and harvesting in the PLANTERRA visual gallery.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><GalleryPage/></PublicShell>;}
