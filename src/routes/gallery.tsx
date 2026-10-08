import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage, PublicShell } from '@/planterra/public';
export const Route = createFileRoute('/gallery')({
 
 head: () => ({meta:[{title:'Agriculture Gallery — Agro All Farm Fresh'},{name:'description',content:'Explore agricultural landscapes, fresh produce and harvesting in the Agro All Farm Fresh visual gallery.'},{property:'og:title',content:'Agriculture Gallery — Agro All Farm Fresh'},{property:'og:description',content:'Explore agricultural landscapes, fresh produce and harvesting in the Agro All Farm Fresh visual gallery.'},{property:'og:image',content:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80'},{name:'twitter:image',content:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: Page,
});
function Page() {return <PublicShell><GalleryPage/></PublicShell>;}
