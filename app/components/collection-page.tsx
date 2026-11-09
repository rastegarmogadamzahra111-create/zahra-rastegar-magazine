"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {PageFrame} from "./site-shell";
import {supabase} from "../../lib/supabase";
import {ArrowLeft,Headphones,Mic2,BookOpen,Brain,ScrollText,BriefcaseBusiness,Bell} from "lucide-react";
type Post={id:string;title:string;slug:string;category:string;excerpt:string;content:string;cover_image:string|null;created_at:string};
const config:Record<string,{title:string;en:string;lead:string;categories:string[];image:string;icon:any}> = {
 podcasts:{title:"پادکست‌ها",en:"LISTEN & REFLECT",lead:"گفت‌وگوها و روایت‌های شنیداری درباره ذهن، معنا، دانش و زندگی.",categories:["پادکست","پادکست‌ها"],image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85",icon:Headphones},
 talks:{title:"سخنرانی‌ها",en:"IDEAS ON STAGE",lead:"درس‌گفتارها، نشست‌ها و سخنرانی‌هایی برای گسترش افق اندیشه.",categories:["سخنرانی","سخنرانی‌ها"],image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85",icon:Mic2},
 "quran-notes":{title:"آیه‌نگار | درنگی در آیات",en:"QURANIC REFLECTIONS",lead:"تکه‌هایی از قرآن کریم؛ همراه با ترجمه، تأمل و پیوند با زندگی.",categories:["آیه‌نگار","قرآن","آیات"],image:"https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85",icon:ScrollText},
 notices:{title:"اطلاعیه‌ها",en:"NEWS & ANNOUNCEMENTS",lead:"خبرها، فراخوان‌ها، رویدادها و اطلاعیه‌های تحریریه مجله.",categories:["اطلاعیه","اطلاعیه‌ها"],image:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",icon:Bell},
 "psychology-in-life":{title:"روان‌شناسی در میدان زندگی",en:"PSYCHOLOGY IN PRACTICE",lead:"از کلاس درس و بیمارستان تا مدیریت، هنر و کسب‌وکار؛ روان‌شناسی در متن حرفه‌ها و تجربه‌های واقعی.",categories:["روان‌شناسی در میدان زندگی","روان‌شناسی کاربردی"],image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",icon:BriefcaseBusiness},
 "scientific-psychology":{title:"روان‌شناسی علمی",en:"EVIDENCE-BASED PSYCHOLOGY",lead:"نظریه‌ها، پژوهش‌ها و یافته‌های علمی با ارجاع به منابع معتبر و نگاه نقادانه.",categories:["روان‌شناسی علمی"],image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",icon:Brain},
 "fitri-psychology":{title:"روان‌شناسی فطری",en:"HUMAN NATURE & MEANING",lead:"تأمل در سرشت انسان، معنا، اخلاق و ظرفیت‌های وجودی با گفت‌وگوی میان روان‌شناسی و معارف اسلامی.",categories:["روان‌شناسی فطری"],image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",icon:BookOpen}
};
export function CollectionPage({slug}:{slug:string}){
 const cfg=config[slug]; const [posts,setPosts]=useState<Post[]>([]); const [loading,setLoading]=useState(true);
 useEffect(()=>{if(!supabase){setLoading(false);return;}supabase.from("posts").select("id,title,slug,category,excerpt,content,cover_image,created_at").eq("status","published").in("category",cfg.categories).order("created_at",{ascending:false}).then(({data})=>{setPosts((data||[]) as Post[]);setLoading(false)})},[slug]);
 const Icon=cfg.icon;
 return <PageFrame eyebrow={cfg.en} title={cfg.title} lead={cfg.lead}>
 <section className="collection-hero"><div><span className="collection-kicker">ZAHRA RASTEGAR · EDITORIAL COLLECTION</span><h2>برای دیدن موضوع از <em>زاویه‌ای تازه.</em></h2><p>مطالب این بخش به‌مرور توسط تحریریه و نویسندگان مهمان افزوده می‌شوند.</p></div><div className="collection-art"><img src={cfg.image} alt={cfg.title}/><span><Icon size={28}/></span></div></section>
 <section className="collection-results"><div className="collection-heading"><div><span>THE COLLECTION</span><h2>تازه‌های این بخش</h2></div><b>{posts.length} مطلب</b></div>
 {loading?<p className="collection-empty">در حال دریافت محتوا...</p>:posts.length?<div className="published-grid">{posts.map(p=><article className="published-card" key={p.id}>{p.cover_image?<div className="published-image"><img src={p.cover_image} alt={p.title}/></div>:<div className="published-image"><span>ZR</span></div>}<div className="published-copy"><span>{p.category}</span><h2>{p.title}</h2><p>{p.excerpt}</p><Link href={"/articles#"+p.slug}>مشاهده در مقالات <ArrowLeft size={15}/></Link></div></article>)}</div>:<div className="collection-empty"><span>COMING INTO VIEW</span><h3>این صفحه برای نوشته‌های تازه آماده است.</h3><p>به‌زودی محتواهای منتخب این حوزه را اینجا خواهی دید.</p><Link href="/articles">رفتن به همه مقالات <ArrowLeft size={15}/></Link></div>}
 </section></PageFrame>
}
