import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/planterra/admin';
export const Route = createFileRoute('/admin/gallery')({
 head: () => ({meta:[{title:'Gallery — PLANTERRA Demo Admin'},{name:'description',content:'PLANTERRA browser-only demo portfolio management: gallery.'},{property:'og:title',content:'Gallery — PLANTERRA Demo Admin'},{property:'og:description',content:'Browser-only demo portfolio management for PLANTERRA.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex, nofollow'}]}),
 component: Page,
});
function Page() {return <AdminPage module="gallery"/>;}
