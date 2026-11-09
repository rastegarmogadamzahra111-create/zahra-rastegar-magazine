import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, BookOpen, Brain, FlaskConical, Clapperboard, ShoppingBag, Sparkles, PenLine, Send, MessageCircle, Headphones, UserRound } from "lucide-react";
import { SiteHeader, SiteFooter } from "./components/site-shell";
import { ManagedEntries } from "./components/managed-entries";

const sections = [
{ n:"01", title:"درباره سردبیر", en:"THE EDITOR", desc:"مسیر، دغدغه‌ها و جهان فکری بنیان‌گذار مجله.", href:"/about", image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85", icon:PenLine, tone:"clay" },
{ n:"02", title:"روان‌شناسی", en:"THE HUMAN MIND", desc:"ذهن، رفتار، هیجان و مسیر رشد انسان.", href:"/psychology", image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"sage" },
{ n:"03", title:"شاخه‌های روان‌شناسی", en:"FIELDS OF PSYCHOLOGY", desc:"آشنایی با روان‌شناسی رشد، بالینی، عمومی، شناختی و دیگر شاخه‌ها.", href:"/psychology", image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"sage" },
{ n:"04", title:"روان‌شناسی علمی", en:"EVIDENCE & RESEARCH", desc:"دانش روان‌شناسی بر پایه پژوهش، شواهد و نگاه نقادانه.", href:"/scientific-psychology", image:"https://images.unsplash.com/photo-1532094327367-8b6c5c5e4a9f?auto=format&fit=crop&w=1200&q=85", icon:FlaskConical, tone:"blue" },
{ n:"05", title:"روان‌شناسی فطری", en:"HUMAN NATURE & MEANING", desc:"تأمل در سرشت انسان و گفت‌وگوی روان‌شناسی با معارف اسلامی.", href:"/fitri-psychology", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85", icon:Sparkles, tone:"clay" },
{ n:"06", title:"روان‌شناسی در میدان زندگی", en:"PSYCHOLOGY IN PRACTICE", desc:"پیوند روان‌شناسی با آموزش، پزشکی، هنر، مدیریت و حرفه‌ها.", href:"/psychology-in-life", image:"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"rose" },
{ n:"07", title:"اطلسِ روان", en:"PSYCHOLOGICAL DISORDERS", desc:"آشنایی علمی با اختلالات روان‌شناختی، نشانه‌ها، معیارهای تشخیصی و درمان.", href:"/psychological-disorders", image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85", icon:FlaskConical, tone:"plum" },
{ n:"08", title:"آزمون‌های روان‌شناسی", en:"PSYCHOLOGY TESTS", desc:"آشنایی با آزمون‌های معتبر، کاربردها و محدودیت‌های سنجش روان‌شناختی.", href:"/psychology-tests", image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"blue" },
{ n:"09", title:"روایتِ بالین", en:"CLINICAL STORIES", desc:"مطالعه آموزشیِ پرونده‌های موردی، فرمول‌بندی روان‌شناختی و مسیر ارزیابی.", href:"/clinical-stories", image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"sage" },
{ n:"10", title:"پژوهش و دانش", en:"RESEARCH NOTES", desc:"پرسش علمی، روش تحقیق و خواندن شواهد.", href:"/research", image:"https://images.unsplash.com/photo-1532094327367-8b6c5c5e4a9f?auto=format&fit=crop&w=1200&q=85", icon:FlaskConical, tone:"blue" },
{ n:"11", title:"دنیای کودکان", en:"CHILD DEVELOPMENT", desc:"رشد، یادگیری، بازی، هیجان‌ها و مهارت‌های زندگی در کودکی.", href:"/children", image:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85", icon:Sparkles, tone:"sage" },
{ n:"12", title:"طرح درس‌ها", en:"LESSON PLANS", desc:"طرح درس‌های کاربردی، فعالیت‌های کلاسی و ایده‌های آموزش مهارت.", href:"/lesson-plans", image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85", icon:BookOpen, tone:"ochre" },
{ n:"13", title:"آیه‌نگار", en:"QURANIC REFLECTIONS", desc:"درنگی در آیات قرآن و پیوند آن‌ها با زندگی.", href:"/quran-notes", image:"https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=85", icon:BookOpen, tone:"sage" },
{ n:"14", title:"نوا و نیایش", en:"SOUND & SUPPLICATION", desc:"دعای عهد، زیارت‌ها، مناجات‌ها و تلاوت‌های شنیداری.", href:"/nava-va-nayesh", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85", icon:Headphones, tone:"plum" }
{ n:"15", title:"کتابخانه", en:"THE LIBRARY", desc:"معرفی و نقد کتاب‌های روان‌شناسی و اندیشه.", href:"/library", image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85", icon:BookOpen, tone:"ochre" },
{ n:"16", title:"فرهنگ و رسانه", en:"CULTURE / FRAME", desc:"فیلم، انیمیشن و روایت از دریچه تجربه انسانی.", href:"/media", image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85", icon:Clapperboard, tone:"plum" },
{ n:"17", title:"چهره‌نگار", en:"LIVES & CONVERSATIONS", desc:"زندگی‌نامه، مسیر حرفه‌ای و گفت‌وگوهای اختصاصی با افراد اثرگذار.", href:"/chehre-negar", image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85", icon:UserRound, tone:"clay" },
{ n:"18", title:"پادکست‌ها", en:"LISTEN & REFLECT", desc:"روایت‌ها و گفت‌وگوهای شنیداری درباره انسان و زندگی.", href:"/podcasts", image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85", icon:BookOpen, tone:"plum" },
{ n:"19", title:"سخنرانی‌ها", en:"IDEAS ON STAGE", desc:"درس‌گفتارها، نشست‌ها و سخنرانی‌های منتخب.", href:"/talks", image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85", icon:Brain, tone:"blue" },
{ n:"20", title:"آخرین خبرها", en:"THE JOURNAL", desc:"یادداشت‌ها، روایت‌ها و تازه‌ترین نوشته‌های تحریریه.", href:"/articles", image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85", icon:PenLine, tone:"clay" },
{ n:"21", title:"اطلاعیه‌ها", en:"NEWS & ANNOUNCEMENTS", desc:"رویدادها، فراخوان‌ها و خبرهای تحریریه.", href:"/notices", image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85", icon:PenLine, tone:"ochre" },
{ n:"22", title:"جرقه‌های معنا", en:"SMALL THOUGHTS", desc:"مکث‌هایی کوتاه برای دیدن دوباره زندگی.", href:"/meaning-sparks", image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85", icon:Sparkles, tone:"sage" },
{ n:"23", title:"فروشگاه", en:"OBJECTS & EDITIONS", desc:"پلنرها، آثار تألیفی و ابزارهای یادگیری.", href:"/shop", image:"https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=85", icon:ShoppingBag, tone:"rose" },
];

function EditorialImage({src,alt,className=""}:{src:string,alt:string,className?:string}) {
  return <div className={`editorial-image ${className}`} aria-label={alt}>
    <img src={src} alt={alt} loading="lazy" />

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
        <h1>سفری به دنیای <em>معنا...</em></h1>
        <p className="cover-lead">مرجعی برای اندیشیدن، آموختن و زیستن بهتر؛ جایی برای پیوند دانش، ایمان و زندگی.</p>
        <div className="cover-actions"><Link href="/articles" className="cover-button">ورود به مجله <ArrowLeft size={17}/></Link><Link href="/about" className="cover-text-link">درباره سردبیر <ArrowUpLeft size={16}/></Link></div>
        <div className="cover-index"><span>01</span><i/><span>یک مسیر برای دانستن و زیستن</span></div>
      </div>
      <div className="cover-visual">
        <EditorialImage src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85" alt="سفر انسان به جهان ذهن؛ تصویر مفهومی روان‌شناسی" className="cover-main-image"/>
        <div className="cover-image-note">A SPACE<br/>TO THINK</div>
        <div className="cover-mini-card"><EditorialImage src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=85" alt="هنر و خلاقیت" /><span>ART · IDEAS · LIFE</span></div>
        <div className="cover-seal">✳<small>READ<br/>REFLECT<br/>GROW</small></div>
        <span className="cover-vertical">AN INDEPENDENT PERSIAN MAGAZINE</span>
      </div>
    </section>

    <div className="topic-marquee"><span>روان‌شناسی</span><b>✳</b><span>علوم اسلامی</span><b>✳</b><span>پژوهش</span><b>✳</b><span>فرهنگ و هنر</span><b>✳</b><span>زندگی</span></div>

    <section className="editor-pick">
      <div className="editor-pick-image"><EditorialImage src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85" alt="منظره‌ای آرام در نور صبح" /></div>
      <div className="editor-pick-copy"><span className="section-kicker">A NOTE FROM THE EDITOR <i/></span><span className="pick-number">01 / EDITOR'S LETTER</span><h2>دانستن، وقتی زیباست<br/>که به <em>زندگی راه پیدا کند.</em></h2><p>این مجله از یک علاقه آغاز شده است: فهم دقیق‌تر انسان، جهان و معنایی که در میان تجربه‌های روزمره جست‌وجو می‌کنیم. اینجا دانش را به گفت‌وگو با زندگی دعوت می‌کنیم.</p><Link href="/about" className="underlined-link">آشنایی با جهان مجله <ArrowLeft size={16}/></Link></div>
    </section>

    <ManagedEntries categories={["یادداشت سردبیر","معرفی مجله"]} emptyTitle="یادداشت‌های تازه تحریریه به‌زودی منتشر می‌شوند." />

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
        <Link href="/shop" className="shop-feature"><EditorialImage src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=85" alt="دفتر و پلنر روی میز" /><span className="shop-feature-tag">01 — PLANNERS</span><div><span>برای روزهایی آگاهانه‌تر</span><h3>دفترها و پلنرها</h3></div></Link>
        <Link href="/shop" className="shop-side"><EditorialImage src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85" alt="کتاب‌ها و مطالعه"/><span className="shop-feature-tag">02 — BOOKS</span><h3>کتاب و آثار تألیفی</h3></Link>
        <Link href="/shop" className="shop-side"><EditorialImage src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85" alt="نوشتن و یادداشت برداری"/><span className="shop-feature-tag">03 — LEARNING</span><h3>فایل‌ها و دوره‌های آموزشی</h3></Link>
      </div>
    </section>

    <section className="about-editor">
      <div className="about-editor-mark"><span>ZR</span><small>FOUNDER<br/>& EDITOR</small></div>
      <div className="about-editor-copy"><span className="section-kicker">A LITTLE ABOUT THE EDITOR <i/></span><h2>دربارهٔ سردبیر؛<br/><em>دانشجو و جست‌وجوگر معنا.</em></h2><p>هم‌زمان در حوزه‌های روان‌شناسی، علوم اسلامی و معارف تحصیل می‌کنم و در کنار درس، در زمینه روان‌شناسی رشد و آموزش مهارت‌های کودکان تجربه کسب می‌کنم. این مجله بخشی از مسیر یادگیری، نوشتن و به اشتراک گذاشتن آموخته‌هاست.</p><Link href="/about" className="underlined-link">آشنایی بیشتر با سردبیر <ArrowLeft size={16}/></Link></div>
      <span className="about-editor-flower">✳</span>
    </section>

    <section className="contact-editorial"><div><span className="section-kicker">LET'S CONNECT <i/></span><h2>گفت‌وگو از یک پیام آغاز می‌شود.</h2><p>برای پیشنهاد، همکاری یا همراهی با تحریریه با من در ارتباط باش.</p></div><div className="contact-editorial-links"><a href="https://t.me/Zahra_rastegar213" target="_blank" rel="noreferrer"><Send size={17}/> تلگرام</a><a href="https://eitaa.com/Zahra_rastegar213" target="_blank" rel="noreferrer"><MessageCircle size={17}/> ایتا</a><a href="https://eitaa.com/zrdarjostvjoymana" target="_blank" rel="noreferrer"><MessageCircle size={17}/> در جست‌وجوی معنا</a><a href="https://www.instagram.com/_zahra.rastegar_work/" target="_blank" rel="noreferrer"> اینستاگرام: @_zahra.rastegar_work</a></div></section>
    <SiteFooter/>
  </main>;
}
