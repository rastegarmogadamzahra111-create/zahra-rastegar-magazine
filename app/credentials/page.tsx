"use client";
import {useEffect,useState} from "react";
import {Award,FileText,Image as ImageIcon} from "lucide-react";
import {PageFrame} from "../components/site-shell";
import {supabase,isSupabaseConfigured} from "../../lib/supabase";

type Credential={id:string;title:string;excerpt:string;content:string;cover_image:string|null;pdf_url:string|null;author:string|null;created_at:string};
export default function CredentialsPage(){
 const [items,setItems]=useState<Credential[]>([]);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabase||!isSupabaseConfigured){setLoading(false);return;}const {data}=await supabase.from("posts").select("id,title,excerpt,content,cover_image,pdf_url,author,created_at").eq("category","سوابق علمی و تخصصی").eq("status","published").order("created_at",{ascending:false});if(active)setItems((data||[]) as Credential[]);setLoading(false);}load();return()=>{active=false}},[]);
 return <PageFrame eyebrow="ACADEMIC & PROFESSIONAL RECORD" title="سوابق علمی و تخصصی" lead="گوشه‌ای از مسیر آموختن، آموزش و کسب تجربه؛ شامل مدارک تحصیلی، گواهی‌نامه‌ها و دوره‌های تخصصی.">
 {loading?<div className="credentials-empty">در حال بارگذاری سوابق...</div>:items.length===0?<div className="credentials-empty"><Award size={30}/><h2>این بخش هنوز در حال تکمیل است.</h2><p>مدارک تحصیلی و گواهی‌نامه‌های معتبر پس از ثبت و تأیید، در این صفحه قرار می‌گیرند.</p></div>:<section className="credentials-grid">{items.map(item=><article className="credential-card" key={item.id}>{item.cover_image?<a href={item.cover_image} target="_blank" rel="noreferrer" className="credential-image"><img src={item.cover_image} alt={`تصویر ${item.title}`}/></a>:<div className="credential-placeholder"><Award size={34}/></div>}<div className="credential-copy"><span className="credential-type">ACADEMIC · PROFESSIONAL</span><h2>{item.title}</h2>{item.excerpt&&<p className="credential-excerpt">{item.excerpt}</p>}{item.content&&<p className="credential-description">{item.content}</p>}{item.author&&<small>صادرکننده / مرجع: {item.author}</small>}{item.pdf_url&&<a className="credential-file" href={item.pdf_url} target="_blank" rel="noreferrer"><FileText size={16}/> مشاهده یا دریافت فایل مدرک</a>}</div></article>)}</section>}
 </PageFrame>
}
