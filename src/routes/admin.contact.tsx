import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/planterra/admin';
export const Route = createFileRoute('/admin/contact')({
 head: () => ({meta:[{title:'Contact — Agro All Farm Fresh Demo Admin'},{name:'description',content:'Agro All Farm Fresh browser-only demo portfolio management: contact.'},{property:'og:title',content:'Contact — Agro All Farm Fresh Demo Admin'},{property:'og:description',content:'Browser-only demo portfolio management for Agro All Farm Fresh.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex, nofollow'}]}),
 component: Page,
});
function Page() {return <AdminPage module="contact"/>;}
