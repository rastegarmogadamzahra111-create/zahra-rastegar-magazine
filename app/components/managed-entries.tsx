"use client";
import {useEffect,useState} from "react";
import {supabase} from "../../lib/supabase";
type Entry={id:string;title:string;slug:string;category:string;excerpt:string;content:string;cover_image:string|null;created_at:string};
export function ManagedEntries({categories,emptyTitle="هنوز محتوایی ثبت نشده است."}:{categories:string[];emptyTitle?:string}){
 const [items,setItems]=useState<Entry[]>([]);
 const [loading,setLoading]=useState(true);
 const [selected,setSelected]=useState<Entry|null>(null);
 useEffect(()=>{let active=true;async function load(){if(!supabase){setLoading(false);return;}const {data}=await supabase.from("posts").select("id,title,slug,category,excerpt,content,cover_image,created_at").eq("status","published").in("category",categories).order("created_at",{ascending:false});if(active)setItems((data||[]) as Entry[]);setLoading(false);}load();return()=>{active=false}},[categories.join("|")]);
 return <section className="collection-results"><div className="collection-heading"><div><span>THE EDITORIAL COLLECTION</span><h2>تازه‌های این بخش</h2></div><b>{items.length} مورد</b></div>
 {loading?<p className="collection-empty">در حال دریافت محتوا...</p>:items.length===0?<div className="collection-empty"><span>COMING SOON</span><h3>{emptyTitle}</h3><p>پس از ثبت و انتشار محتوا از پنل تحریریه، مطالب اینجا نمایش داده می‌شوند.</p></div>:<div className="published-grid">{items.map(item=><button type="button" className="published-card" key={item.id} onClick={()=>setSelected(item)}><div className="published-image">{item.cover_image?<img src={item.cover_image} alt={item.title}/>:<span>ZR</span>}</div><div className="published-copy"><span>{item.category}</span><h2>{item.title}</h2><p>{item.excerpt}</p><b>مشاهده جزئیات ←</b></div></button>)}</div>}
 {selected&&<div className="article-modal" role="dialog" aria-modal="true"><button className="article-modal-close" onClick={()=>setSelected(null)} aria-label="بستن">×</button><article>{selected.cover_image&&<img className="article-modal-cover" src={selected.cover_image} alt={selected.title}/>}<span className="eyebrow">{selected.category}</span><h1>{selected.title}</h1><p className="article-modal-excerpt">{selected.excerpt}</p><div className="article-modal-content">{selected.content.split(/\r?\n/).map((line,i)=><p key={i}>{line}</p>)}</div></article></div>}
 </section>;
}
