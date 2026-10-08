import { createContext, useContext, useEffect, useState } from 'react';
import { initialData } from './data';
const Store = createContext(null);
export function DataProvider({children}) {
 const [data,setData]=useState(initialData); const [ready,setReady]=useState(false);
 useEffect(()=>{try {const saved=localStorage.getItem('planterra-demo-v1'); if(saved) {
 const parsed=JSON.parse(saved);
 const merged={...initialData,...parsed};
 if(parsed.brandVersion!==2){
  merged.settings={...initialData.settings,...parsed.settings,businessName:initialData.settings.businessName,heroHeading:initialData.settings.heroHeading,heroDescription:initialData.settings.heroDescription};
  merged.about={...initialData.about,...parsed.about,description:initialData.about.description,focus:initialData.about.focus};
  const rebrand=value=>typeof value==='string'?value.replaceAll('PLANTERRA BY AGRI ALL FARM FRESH','Agro All Farm Fresh').replaceAll('PLANTERRA','Agro All Farm Fresh'):value;
  for(const key of ['settings','about']) merged[key]=Object.fromEntries(Object.entries(merged[key]).map(([k,v])=>[k,rebrand(v)]));
  const newProducts=initialData.products.filter(p=>['Fertilizers','Soil'].includes(p.category));
  merged.products=[...newProducts.map(p=>({...p,id:`agro-${p.category.toLowerCase()}`})),...(parsed.products||[]).map(p=>p.category==='Crops'?{...p,image:initialData.products.find(n=>n.category==='Crops')?.image}:p)];
  merged.gallery=[...initialData.gallery.filter(g=>['Fertilizers','Soil'].includes(g.category)).map(g=>({...g,id:`agro-gallery-${g.category.toLowerCase()}`})),...(parsed.gallery||[])];
  merged.focus=initialData.focus;
 }
 merged.brandVersion=2;
 setData(merged);
 }}catch {} setReady(true);},[]);
 useEffect(()=>{if(ready) {try{localStorage.setItem('planterra-demo-v1',JSON.stringify({...data,brandVersion:2}));}catch {}}},[data,ready]);
 const update=(key,value)=>setData(d=>({...d,[key]:typeof value==='function'?value(d[key]):value}));
 return <Store.Provider value={{data,update,ready}}>{children}</Store.Provider>;
}
export function useData(){const value=useContext(Store);if(!value)throw new Error('Data provider missing');return value;}
