"use client";
import { useEffect, useState } from "react";
import { PageFrame } from "../components/site-shell";
import { supabase } from "../../lib/supabase";
import { ArrowLeft, X } from "lucide-react";

type Post={id:string;title:string;slug:string;category:string;excerpt:string;content:string;cover_image:string|null;created_at:string};
export default function Articles(){
 const [posts,setPosts]=useState<Post[]>([]);
 const [selected,setSelected]=useState<Post|null>(null);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{if(!supabase){setLoading(false);return;}supabase.from("posts").select("id,title,slug,category,excerpt,content,cover_image,created_at").eq("status","published").order("created_at",{ascending:false}).then(({data})=>{setPosts((data||[]) as Post[]);setLoading(false)})},[]);
 return <PageFrame eyebrow="THE LATEST · MAGAZINE" title="آخرین خبرها" lead="تازه‌ترین نوشته‌ها، یادداشت‌ها و روایت‌های مجله؛ از روان‌شناسی و پژوهش تا فرهنگ، کتاب و زندگی.">
 <section className="published-articles">
  {loading?<p className="articles-empty">در حال دریافت نوشته‌ها...</p>:posts.length===0?<div className="articles-empty"><span>THE EDITORIAL DESK</span><h2>اولین روایت، در راه است.</h2><p>به‌زودی نوشته‌ها و مقاله‌های تازه در این بخش منتشر می‌شوند.</p></div>:<div className="published-grid">{posts.map(p=><button className="published-card" key={p.id} onClick={()=>setSelected(p)}><div className="published-image">{p.cover_image?<img src={p.cover_image} alt={p.title}/>:<span>ZR</span>}</div><div className="published-copy"><span>{p.category}</span><h2>{p.title}</h2><p>{p.excerpt}</p><b>ادامه مطلب <ArrowLeft size={15}/></b></div></button>)}</div>}
 </section>
 {selected&&<div className="article-modal" role="dialog" aria-modal="true"><button className="article-modal-close" onClick={()=>setSelected(null)} aria-label="بستن"><X/></button><article>{selected.cover_image&&<img className="article-modal-cover" src={selected.cover_image} alt={selected.title}/>}<span className="eyebrow">{selected.category}</span><h1>{selected.title}</h1><p className="article-modal-excerpt">{selected.excerpt}</p><div className="article-modal-content">{selected.content.split("\\n").map((line,i)=><p key={i}>{line}</p>)}</div></article></div>}
 </PageFrame>
}
