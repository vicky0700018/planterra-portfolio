import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/planterra/admin';
export const Route = createFileRoute('/admin/testimonials')({
 head: () => ({meta:[{title:'Testimonials — Agro All Farm Fresh Demo Admin'},{name:'description',content:'Agro All Farm Fresh browser-only demo portfolio management: testimonials.'},{property:'og:title',content:'Testimonials — Agro All Farm Fresh Demo Admin'},{property:'og:description',content:'Browser-only demo portfolio management for Agro All Farm Fresh.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex, nofollow'}]}),
 component: Page,
});
function Page() {return <AdminPage module="testimonials"/>;}
