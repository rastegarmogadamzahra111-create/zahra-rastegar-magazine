"use client";
import {useEffect,useState} from "react";
import {Headphones,BookOpen} from "lucide-react";
import {PageFrame} from "../components/site-shell";
import {supabase,isSupabaseConfigured} from "../../lib/supabase";

type Reading={id:string;title:string;excerpt:string;content:string;action_url:string;created_at:string};
export default function ListenAndReadPage(){
 const [items,setItems]=useState<Reading[]>([]);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabase||!isSupabaseConfigured){setLoading(false);return;}const {data}=await supabase.from("posts").select("id,title,excerpt,content,action_url,created_at").eq("category","پخش کن و بعد متن رو بخون").eq("status","published").order("created_at",{ascending:false});if(active)setItems((data||[]) as Reading[]);setLoading(false);}load();return()=>{active=false}},[]);
 return <PageFrame eyebrow="LISTEN · PAUSE · READ" title="پخش کن و بعد متن رو بخون" lead="گاهی یک موسیقی بی‌کلام، فضا را برای خواندن آماده می‌کند. موسیقی را پخش کن، لحظه‌ای مکث کن و بعد با حوصله سراغ متن برو.">
  {loading?<div className="listen-read-empty">در حال آماده‌سازی نوشته‌ها...</div>:items.length===0?<div className="listen-read-empty"><Headphones size={28}/><h2>این فضا به‌زودی با نخستین نوشته جان می‌گیرد.</h2><p>هر نوشته با یک موسیقی بی‌کلام همراه خواهد بود؛ انتخاب پخش موسیقی کاملاً در اختیار توست.</p></div>:<section className="listen-read-list">{items.map((item,index)=><article className="listen-read-card" key={item.id}><div className="listen-read-copy"><span className="listen-read-index">READING EXPERIENCE · {String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2>{item.excerpt&&<p className="listen-read-excerpt">{item.excerpt}</p>}<div className="listen-read-text">{item.content}</div></div><aside className="listen-read-player"><span>FIRST, PRESS PLAY</span><p>پیش از خواندن، موسیقی را پخش کن و بعد آرام‌آرام متن را بخوان.</p><audio controls preload="none" src={item.action_url}><track kind="captions"/></audio><small><BookOpen size={14}/> موسیقی بی‌کلام · همراهی با متن</small></aside></article>)}</section>}
 </PageFrame>
}
