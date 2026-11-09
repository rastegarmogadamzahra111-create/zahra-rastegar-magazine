"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {PageFrame} from "../components/site-shell";
import {supabase} from "../../lib/supabase";
import {ArrowLeft,Search,Feather} from "lucide-react";
type Post={id:string;title:string;slug:string;category:string;excerpt:string;content:string;cover_image:string|null;created_at:string};
const categories=["همه مقالات","مقالات علمی","مقالات فلسفی","مقالات مروری","مقالات پژوهشی","یادداشت‌ها","روان‌شناسی علمی","روان‌شناسی فطری"];
export default function Articles(){
 const [posts,setPosts]=useState<Post[]>([]); const [selected,setSelected]=useState<Post|null>(null); const [loading,setLoading]=useState(true); const [category,setCategory]=useState("همه مقالات"); const [query,setQuery]=useState("");
 useEffect(()=>{if(!supabase){setLoading(false);return;}supabase.from("posts").select("id,title,slug,category,excerpt,content,cover_image,created_at").eq("status","published").order("created_at",{ascending:false}).then(({data})=>{setPosts((data||[]) as Post[]);setLoading(false)})},[]);
 const visible=useMemo(()=>posts.filter(p=>(category==="همه مقالات"||p.category===category)&&(!query||[p.title,p.excerpt,p.content].join(" ").toLowerCase().includes(query.toLowerCase()))),[posts,category,query]);
 return <PageFrame eyebrow="THE JOURNAL · ARTICLES" title="مقالات و جستارها" lead="از مقاله‌های علمی و فلسفی تا مرور پژوهش‌ها و یادداشت‌های تأملی؛ مجموعه‌ای برای خواندن دقیق‌تر جهان و انسان.">
 <section className="article-intro-panel"><div><span>THE EDITORIAL JOURNAL</span><h2>ایده‌ها را بخوان،<br/><em>پرسش‌های تازه بساز.</em></h2><p>مقاله‌های این مجله با دسته‌بندی روشن و معرفی منابع منتشر می‌شوند.</p><Link href="/articles/submit" className="article-submit-link"><Feather size={16}/> بارگذاری مقاله و همکاری با مجله <ArrowLeft size={16}/></Link></div><div className="article-intro-art"><img src="/zahra-rastegar-magazine/editorial/journal.svg" alt="دفتر یادداشت و قلم"/></div></section>
 <section className="article-browser"><div className="article-browser-head"><div><span>EXPLORE BY SUBJECT</span><h2>کتابخانه مقالات</h2></div><label className="article-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="جست‌وجو در عنوان و متن"/></label></div>
 <div className="article-category-list">{categories.map(item=><button key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}</div>
 {loading?<p className="articles-empty">در حال دریافت نوشته‌ها...</p>:visible.length===0?<div className="articles-empty"><span>THE EDITORIAL DESK</span><h2>{posts.length?"مطلبی در این دسته پیدا نشد.":"اولین مقاله، در راه است."}</h2><p>{posts.length?"دسته دیگری را انتخاب کن یا عبارت جست‌وجو را تغییر بده.":"به‌زودی نوشته‌ها و مقاله‌های تازه در این بخش منتشر می‌شوند."}</p></div>:<div className="published-grid">{visible.map(p=><button className="published-card" key={p.id} onClick={()=>setSelected(p)}><div className="published-image">{p.cover_image?<img src={p.cover_image} alt={p.title}/>:<span>ZR</span>}</div><div className="published-copy"><span>{p.category}</span><h2>{p.title}</h2><p>{p.excerpt}</p><b>ادامه مطلب <ArrowLeft size={15}/></b></div></button>)}</div>}
 </section>
 {selected&&<div className="article-modal" role="dialog" aria-modal="true"><button className="article-modal-close" onClick={()=>setSelected(null)} aria-label="بستن">×</button><article>{selected.cover_image&&<img className="article-modal-cover" src={selected.cover_image} alt={selected.title}/>}<span className="eyebrow">{selected.category}</span><h1>{selected.title}</h1><p className="article-modal-excerpt">{selected.excerpt}</p><div className="article-modal-content">{selected.content.split(/\r?\n/).map((line,i)=><p key={i}>{line}</p>)}</div></article></div>}
 </PageFrame>
}
