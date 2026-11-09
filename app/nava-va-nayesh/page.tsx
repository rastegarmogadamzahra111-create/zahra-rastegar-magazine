"use client";
import { useEffect,useState } from "react";
import { Headphones,Music2 } from "lucide-react";
import { PageFrame } from "../components/site-shell";
import { supabase,isSupabaseConfigured } from "../../lib/supabase";

type Track={id:string;title:string;category:string;description:string;audio_url:string;created_at:string};
export default function NavaVaNayeshPage(){
 const [tracks,setTracks]=useState<Track[]>([]);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabase||!isSupabaseConfigured){setLoading(false);return;}const {data}=await supabase.from("audio_tracks").select("id,title,category,description,audio_url,created_at").eq("status","published").order("created_at",{ascending:false});if(active)setTracks((data||[]) as Track[]);setLoading(false);}load();return()=>{active=false}},[]);
 return <PageFrame eyebrow="SOUND · PRAYER · REFLECTION" title="نوا و نیایش" lead="برای لحظه‌هایی از مکث، یاد خدا و خلوتی آرام؛ مجموعه‌ای از دعاها، زیارت‌ها، مناجات‌ها و تلاوت‌های شنیداری.">
  <section className="audio-library-hero"><div><span className="audio-kicker">A QUIET SPACE FOR THE HEART</span><h2>گاهی یک نوا،<br/><em>راهی به سوی آرامش است.</em></h2><p>در این مجموعه می‌توانی به دعاهای روزانه، زیارت‌ها، مناجات‌ها و تلاوت قرآن گوش بسپاری. فایل‌های تازه به‌مرور از سوی تحریریه اضافه می‌شوند.</p></div><div className="audio-hero-art"><img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85" alt="آسمان شب و سکوت طبیعت"/><span>LISTEN · REFLECT · REMEMBER</span></div></section>
  <section className="featured-dua-player" aria-labelledby="featured-dua-title">
    <div className="featured-dua-copy">
      <span className="audio-kicker">EDITOR'S LISTENING · دعای روز</span>
      <h2 id="featured-dua-title">دعای عهد</h2>
      <p>با صدای علی فانی</p>
      <span className="featured-dua-note">پخش از کانال رسمی هنرمند</span>
    </div>
    <div className="featured-dua-video">
      <iframe
        src="https://www.youtube-nocookie.com/embed/ZKKeRGROaoo?rel=0"
        title="دعای عهد با صدای علی فانی — کانال رسمی علی فانی"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </section>
  <section className="audio-library-list"><div className="audio-library-heading"><div><span className="audio-kicker">THE AUDIO COLLECTION</span><h2>آرشیو شنیداری</h2></div><p>{tracks.length} فایل منتشرشده</p></div>
  {loading?<div className="audio-empty"><p>در حال دریافت فایل‌های صوتی...</p></div>:tracks.length===0?<div className="audio-empty"><span>COMING SOON</span><h3>آغاز این مجموعه با دعای عهد</h3><p>هنوز فایلی منتشر نشده است. پس از بارگذاری نخستین صوت از پنل تحریریه، پخش‌کننده آن همین‌جا نمایش داده می‌شود.</p><Headphones size={27}/></div>:<div className="audio-track-grid">{tracks.map((track,index)=><article className="audio-track-card" key={track.id}><div className="audio-track-top"><span className="audio-track-category">{track.category}</span><span className="audio-track-index">{String(index+1).padStart(2,"0")} / AUDIO</span></div><h3>{track.title}</h3><p>{track.description||"فایلی برای شنیدن و تأمل."}</p><audio controls preload="none" src={track.audio_url}><track kind="captions"/></audio></article>)}</div>}</section>
 </PageFrame>
}
