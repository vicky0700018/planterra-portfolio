import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/planterra/admin';
export const Route = createFileRoute('/admin/dashboard')({
 head: () => ({meta:[{title:'Dashboard — PLANTERRA Demo Admin'},{name:'description',content:'PLANTERRA browser-only demo portfolio management: dashboard.'},{property:'og:title',content:'Dashboard — PLANTERRA Demo Admin'},{property:'og:description',content:'Browser-only demo portfolio management for PLANTERRA.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex, nofollow'}]}),
 component: Page,
});
function Page() {return <AdminPage module="dashboard"/>;}
