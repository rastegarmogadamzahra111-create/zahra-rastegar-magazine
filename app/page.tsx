import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, BookOpen, Brain, FlaskConical, Clapperboard, ShoppingBag, Sparkles, PenLine, Send, MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter } from "./components/site-shell";

const sections = [
  { n:"01", title:"آخرین خبرها", en:"THE JOURNAL", desc:"یادداشت‌ها، روایت‌ها و تازه‌ترین نوشته‌های تحریریه.", href:"/articles", image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85", icon:PenLine, tone:"clay" },
  { n:"02", title:"روان‌شناسی", en:"THE HUMAN MIND", desc:"ذهن، رفتار، هیجان و مسیر رشد انسان.", href:"/psychology", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1100&q=85", icon:Brain, tone:"sage" },
  { n:"03", title:"پژوهش و دانش", en:"RESEARCH NOTES", desc:"پرسش علمی، روش تحقیق و خواندن شواهد.", href:"/research", image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1100&q=85", icon:FlaskConical, tone:"blue" },
  { n:"04", title:"کتابخانه", en:"THE LIBRARY", desc:"معرفی و نقد کتاب‌های روان‌شناسی و اندیشه.", href:"/library", image:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1100&q=85", icon:BookOpen, tone:"ochre" },
  { n:"05", title:"فرهنگ و رسانه", en:"CULTURE / FRAME", desc:"فیلم، انیمیشن و روایت از دریچه تجربه انسانی.", href:"/media", image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1100&q=85", icon:Clapperboard, tone:"plum" },
  { n:"06", title:"فروشگاه", en:"OBJECTS & EDITIONS", desc:"پلنرها، آثار تألیفی و ابزارهای یادگیری.", href:"/shop", image:"https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1100&q=85", icon:ShoppingBag, tone:"rose" },
  { n:"07", title:"جرقه‌های معنا", en:"SMALL THOUGHTS", desc:"مکث‌هایی کوتاه برای دیدن دوباره زندگی.", href:"/meaning-sparks", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1100&q=85", icon:Sparkles, tone:"sage" },
  { n:"08", title:"درباره زهرا", en:"THE EDITOR", desc:"مسیر، دغدغه‌ها و جهان فکری بنیان‌گذار مجله.", href:"/about", image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=85", icon:PenLine, tone:"clay" }
];

function EditorialImage({src,alt,className=""}:{src:string,alt:string,className?:string}) {
  return <div className={`editorial-image ${className}`} aria-label={alt}>
    <img src={src} alt={alt} loading="lazy" onError={(event)=>{event.currentTarget.style.display="none";}} />
    <span className="image-fallback-mark" aria-hidden="true">ZR</span>
  </div>;
}

export default function Home() {
  return <main className="magazine-home redesign">
    <SiteHeader />
    <section className="cover-story">
      <div className="cover-copy">
        <div className="cover-overline"><span className="overline-dot"/> مجله‌ای مستقل برای ذهن‌های کنجکاو <span className="cover-issue">VOL. 01 — 2026</span></div>
        <div className="cover-wordmark">Zahra Rastegar</div>
        <p className="cover-english">KNOWLEDGE · THOUGHT · LIFE</p>
        <h1>برای عمیق‌تر دیدنِ <em>زندگی.</em></h1>
        <p className="cover-lead">روان‌شناسی، علوم اسلامی، پژوهش و فرهنگ؛ جایی برای پرسیدن، آموختن و پیوند دادن دانسته‌ها به زندگی روزمره.</p>
        <div className="cover-actions"><Link href="/articles" className="cover-button">ورود به مجله <ArrowLeft size={17}/></Link><Link href="/about" className="cover-text-link">درباره سردبیر <ArrowUpLeft size={16}/></Link></div>
        <div className="cover-index"><span>01</span><i/><span>یک مسیر برای دانستن و زیستن</span></div>
      </div>
      <div className="cover-visual">
        <EditorialImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90" alt="فضای روشن مطالعه و اندیشه" className="cover-main-image"/>
        <div className="cover-image-note">A SPACE<br/>TO THINK</div>
        <div className="cover-mini-card"><EditorialImage src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=85" alt="هنر و خلاقیت" /><span>ART · IDEAS · LIFE</span></div>
        <div className="cover-seal">✳<small>READ<br/>REFLECT<br/>GROW</small></div>
        <span className="cover-vertical">AN INDEPENDENT PERSIAN MAGAZINE</span>
      </div>
    </section>

    <div className="topic-marquee"><span>روان‌شناسی</span><b>✳</b><span>علوم اسلامی</span><b>✳</b><span>پژوهش</span><b>✳</b><span>فرهنگ و هنر</span><b>✳</b><span>زندگی</span></div>

    <section className="editor-pick">
      <div className="editor-pick-image"><EditorialImage src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90" alt="منظره‌ای آرام در نور صبح" /></div>
      <div className="editor-pick-copy"><span className="section-kicker">A NOTE FROM THE EDITOR <i/></span><span className="pick-number">01 / EDITOR'S LETTER</span><h2>دانستن، وقتی زیباست<br/>که به <em>زندگی راه پیدا کند.</em></h2><p>این مجله از یک علاقه آغاز شده است: فهم دقیق‌تر انسان، جهان و معنایی که در میان تجربه‌های روزمره جست‌وجو می‌کنیم. اینجا دانش را به گفت‌وگو با زندگی دعوت می‌کنیم.</p><Link href="/about" className="underlined-link">آشنایی با جهان مجله <ArrowLeft size={16}/></Link></div>
    </section>

    <section className="departments section-block" id="sections">
      <div className="section-heading"><div><span className="section-kicker">EXPLORE THE MAGAZINE <i/></span><h2>از کجا <em>شروع کنیم؟</em></h2></div><p>هر بخش، دریچه‌ای مستقل به یک جهان تازه است.</p></div>
      <div className="department-grid">{sections.map((item)=>{const Icon=item.icon;return <Link href={item.href} className={`department-card ${item.tone}`} key={item.n}>
        <div className="department-photo"><EditorialImage src={item.image} alt={item.title}/><span className="department-no">{item.n}</span><span className="department-icon"><Icon size={18}/></span></div>
        <div className="department-info"><span className="department-en">{item.en}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="department-arrow"><ArrowLeft size={17}/></span></div>
      </Link>})}</div>
    </section>

    <section className="thought-break"><span className="thought-asterisk">✳</span><span className="section-kicker">A MOMENT TO PAUSE</span><p>«هر پرسش عمیق،<br/><em>پنجره‌ای رو به فهمی تازه است.</em>»</p><span className="thought-credit">ZAHRA RASTEGAR · EDITOR</span></section>

    <section className="shop-story section-block"><div className="section-heading"><div><span className="section-kicker">THE STUDIO & SHOP <i/></span><h2>چیزهایی برای <em>ساختن و نوشتن</em></h2></div><Link href="/shop" className="underlined-link">رفتن به فروشگاه <ArrowLeft size={16}/></Link></div>
      <div className="shop-story-grid">
        <Link href="/shop" className="shop-feature"><EditorialImage src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=90" alt="دفتر و پلنر روی میز" /><span className="shop-feature-tag">01 — PLANNERS</span><div><span>برای روزهایی آگاهانه‌تر</span><h3>دفترها و پلنرها</h3></div></Link>
        <Link href="/shop" className="shop-side"><EditorialImage src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85" alt="کتاب‌ها و مطالعه"/><span className="shop-feature-tag">02 — BOOKS</span><h3>کتاب و آثار تألیفی</h3></Link>
        <Link href="/shop" className="shop-side"><EditorialImage src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85" alt="نوشتن و یادداشت برداری"/><span className="shop-feature-tag">03 — LEARNING</span><h3>فایل‌ها و دوره‌های آموزشی</h3></Link>
      </div>
    </section>

    <section className="about-editor">
      <div className="about-editor-mark"><span>ZR</span><small>FOUNDER<br/>& EDITOR</small></div>
      <div className="about-editor-copy"><span className="section-kicker">A LITTLE ABOUT THE EDITOR <i/></span><h2>من زهرا رستگارم؛<br/><em>دانشجو و جست‌وجوگر معنا.</em></h2><p>هم‌زمان در حوزه‌های روان‌شناسی، علوم اسلامی و معارف تحصیل می‌کنم و در کنار درس، در زمینه روان‌شناسی رشد و آموزش مهارت‌های کودکان تجربه کسب می‌کنم. این مجله بخشی از مسیر یادگیری، نوشتن و به اشتراک گذاشتن آموخته‌هاست.</p><Link href="/about" className="underlined-link">بیشتر درباره من <ArrowLeft size={16}/></Link></div>
      <span className="about-editor-flower">✳</span>
    </section>

    <section className="contact-editorial"><div><span className="section-kicker">LET'S CONNECT <i/></span><h2>گفت‌وگو از یک پیام آغاز می‌شود.</h2><p>برای پیشنهاد، همکاری یا همراهی با تحریریه با من در ارتباط باش.</p></div><div className="contact-editorial-links"><a href="https://t.me/Zahra_rastegar213" target="_blank" rel="noreferrer"><Send size={17}/> تلگرام</a><a href="https://eitaa.com/Zahra_rastegar213" target="_blank" rel="noreferrer"><MessageCircle size={17}/> ایتا</a><a href="https://eitaa.com/zrdarjostvjoymana" target="_blank" rel="noreferrer"><MessageCircle size={17}/> در جست‌وجوی معنا</a></div></section>
    <SiteFooter/>
  </main>;
}
