import { createContext, useContext, useEffect, useState } from 'react';
import { initialData } from './data';
const Store = createContext(null);
export function DataProvider({children}) {
 const [data,setData]=useState(initialData); const [ready,setReady]=useState(false);
 useEffect(()=>{try {const saved=localStorage.getItem('planterra-demo-v1'); if(saved) setData({...initialData,...JSON.parse(saved)});}catch {} setReady(true);},[]);
 useEffect(()=>{if(ready) {try{localStorage.setItem('planterra-demo-v1',JSON.stringify(data));}catch {}}},[data,ready]);
 const update=(key,value)=>setData(d=>({...d,[key]:typeof value==='function'?value(d[key]):value}));
 return <Store.Provider value={{data,update,ready}}>{children}</Store.Provider>;
}
export function useData(){const value=useContext(Store);if(!value)throw new Error('Data provider missing');return value;}
