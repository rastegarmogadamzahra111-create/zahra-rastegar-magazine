"use client";
import "./studio.css";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";
import { ArrowRight, ImagePlus, LogOut, Plus, Save, Trash2, UploadCloud } from "lucide-react";

type Post = { id:string; title:string; slug:string; category:string; excerpt:string; content:string; cover_image:string|null; status:"draft"|"published"; created_at:string };
const emptyPost = { title:"", slug:"", category:"یادداشت", excerpt:"", content:"", cover_image:"", status:"draft" as "draft"|"published" };

export default function StudioPage(){
 const [session,setSession]=useState<any>(null);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [posts,setPosts]=useState<Post[]>([]);
 const [form,setForm]=useState(emptyPost);
 const [editing,setEditing]=useState<string|null>(null);
 const [busy,setBusy]=useState(false);
 const [message,setMessage]=useState("");
 const [imageFile,setImageFile]=useState<File|null>(null);
 const [preview,setPreview]=useState("");
 const configured=isSupabaseConfigured && !!supabase;

 async function loadPosts(){if(!supabase)return;const {data,error}=await supabase.from("posts").select("*").order("created_at",{ascending:false});if(error)setMessage(error.message);else setPosts((data||[]) as Post[])}
 useEffect(()=>{if(!supabase)return;supabase.auth.getSession().then(({data})=>setSession(data.session));const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,s)=>setSession(s));return()=>subscription.unsubscribe()},[]);
 useEffect(()=>{if(session)loadPosts()},[session]);
 const setField=(key:keyof typeof emptyPost,value:string)=>setForm(old=>({...old,[key]:value}));
 async function login(e:FormEvent){e.preventDefault();if(!supabase)return;setBusy(true);setMessage("");const {data,error}=await supabase.auth.signInWithPassword({email,password});setBusy(false);if(error)setMessage("ورود انجام نشد: "+error.message);else setSession(data.session)}
 async function save(e:FormEvent){e.preventDefault();if(!supabase)return;setBusy(true);setMessage("");
  let imageUrl=form.cover_image;
  if(imageFile){const ext=imageFile.name.split(".").pop()||"jpg";const path=`${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;const {error:upErr}=await supabase.storage.from("magazine-media").upload(path,imageFile,{upsert:false});if(upErr){setBusy(false);setMessage("بارگذاری تصویر ناموفق بود: "+upErr.message);return;}imageUrl=supabase.storage.from("magazine-media").getPublicUrl(path).data.publicUrl;}
  const payload={...form,cover_image:imageUrl,slug:form.slug.trim()||form.title.trim().toLowerCase().replace(/[^a-z0-9آ-ی]+/g,"-").replace(/^-|-$/g,"")};
  const result=editing?await supabase.from("posts").update(payload).eq("id",editing):await supabase.from("posts").insert(payload);
  setBusy(false);if(result.error){setMessage("ذخیره نشد: "+result.error.message);return;}setMessage("مطلب با موفقیت ذخیره شد.");setForm(emptyPost);setEditing(null);setImageFile(null);setPreview("");loadPosts();
 }
 function editPost(p:Post){setEditing(p.id);setForm({title:p.title,slug:p.slug,category:p.category,excerpt:p.excerpt,content:p.content,cover_image:p.cover_image||"",status:p.status});setPreview(p.cover_image||"");window.scrollTo({top:0,behavior:"smooth"})}
 async function removePost(id:string){if(!supabase||!confirm("این مطلب حذف شود؟"))return;const {error}=await supabase.from("posts").delete().eq("id",id);setMessage(error?error.message:"مطلب حذف شد.");loadPosts()}
 async function logout(){await supabase?.auth.signOut();setSession(null)}
 if(!configured)return <main className="studio-shell"><div className="studio-card"><Link href="/" className="studio-back"><ArrowRight size={16}/> بازگشت به مجله</Link><p className="studio-kicker">ZAHRA RASTEGAR · CONTENT STUDIO</p><h1>اتاق تحریریه</h1><p>برای فعال شدن پنل، آدرس پروژه و کلید عمومی Supabase باید در تنظیمات محیطی GitHub Actions ثبت شوند.</p><ol><li>در GitHub وارد Settings ← Secrets and variables ← Actions شوید.</li><li>دو متغیر زیر را اضافه کنید: <code>NEXT_PUBLIC_SUPABASE_URL</code> و <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.</li><li>مقادیر را از Supabase → Project Settings → API بردارید. کلید service_role را هرگز وارد نکنید.</li></ol><p className="studio-hint">ساختار دیتابیس در فایل supabase/schema.sql آماده شده و باید یک‌بار در SQL Editor اجرا شود.</p></div></main>;
 if(!session)return <main className="studio-shell"><form className="studio-card studio-login" onSubmit={login}><Link href="/" className="studio-back"><ArrowRight size={16}/> بازگشت به مجله</Link><p className="studio-kicker">ZAHRA RASTEGAR · PRIVATE AREA</p><h1>ورود به تحریریه</h1><p>برای نوشتن و انتشار مطلب، با حسابی که در Supabase ساخته‌ای وارد شو.</p><label>ایمیل<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="ایمیل حساب تحریریه"/></label><label>رمز عبور<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="رمز عبور"/></label><button className="studio-submit" disabled={busy}>{busy?"در حال ورود...":"ورود به پنل"}</button>{message&&<p className="studio-message">{message}</p>}</form></main>;
 return <main className="studio-shell"><div className="studio-top"><div><p className="studio-kicker">ZAHRA RASTEGAR · CONTENT STUDIO</p><h1>اتاق تحریریه</h1><p>اینجا می‌توانی نوشته منتشر کنی، تصویر بارگذاری کنی و پیش‌نویس‌هایت را مدیریت کنی.</p></div><button className="studio-logout" onClick={logout}><LogOut size={16}/> خروج</button></div>
 <div className="studio-layout"><form className="studio-card studio-editor" onSubmit={save}><div className="studio-card-heading"><h2>{editing?"ویرایش مطلب":"نوشتن مطلب تازه"}</h2><span>{form.status==="published"?"آماده انتشار":"پیش‌نویس"}</span></div>
 <label>عنوان مطلب<input value={form.title} onChange={e=>setField("title",e.target.value)} required placeholder="عنوان جذاب مطلب"/></label>
 <div className="studio-two"><label>دسته‌بندی<input value={form.category} onChange={e=>setField("category",e.target.value)} placeholder="روان‌شناسی، کتاب، پژوهش..."/></label><label>نشانی انگلیسی (اختیاری)<input value={form.slug} onChange={e=>setField("slug",e.target.value)} placeholder="my-first-article"/></label></div>
 <label>خلاصه مطلب<textarea rows={2} value={form.excerpt} onChange={e=>setField("excerpt",e.target.value)} placeholder="در چند جمله معرفی مطلب..."/></label>
 <label>متن کامل<textarea className="studio-content" rows={10} value={form.content} onChange={e=>setField("content",e.target.value)} placeholder="متن نوشته‌ات را اینجا بنویس..."/></label>
 <label className="studio-upload"><UploadCloud size={20}/><span>تصویر شاخص را انتخاب کن</span><small>JPG، PNG یا WebP · حداکثر ۱۰ مگابایت</small><input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>{const f=e.target.files?.[0]||null;setImageFile(f);if(f)setPreview(URL.createObjectURL(f))}}/></label>{preview&&<img className="studio-preview" src={preview} alt="پیش‌نمایش تصویر"/>}
 <label>وضعیت انتشار<select value={form.status} onChange={e=>setField("status",e.target.value)}><option value="draft">ذخیره به‌صورت پیش‌نویس</option><option value="published">انتشار در مجله</option></select></label>
 <div className="studio-actions"><button className="studio-submit" disabled={busy}><Save size={16}/>{busy?"در حال ذخیره...":editing?"ذخیره تغییرات":"ذخیره مطلب"}</button><button type="button" className="studio-cancel" onClick={()=>{setForm(emptyPost);setEditing(null);setPreview("");setImageFile(null)}}>پاک کردن فرم</button></div>{message&&<p className="studio-message">{message}</p>}</form>
 <aside className="studio-card studio-list"><div className="studio-card-heading"><h2>مطالب من</h2><span>{posts.length} مطلب</span></div>{posts.length===0?<p className="studio-empty">هنوز مطلبی ثبت نکرده‌ای. اولین نوشته‌ات را از همین‌جا بساز.</p>:posts.map(p=><div className="studio-post" key={p.id}>{p.cover_image&&<img src={p.cover_image} alt=""/>}<div className="studio-post-info"><b>{p.title}</b><small>{p.category} · {p.status==="published"?"منتشرشده":"پیش‌نویس"}</small><div><button type="button" onClick={()=>editPost(p)}>ویرایش</button><button type="button" onClick={()=>removePost(p.id)}><Trash2 size={13}/> حذف</button></div></div></div>)}</aside></div></main>
}
