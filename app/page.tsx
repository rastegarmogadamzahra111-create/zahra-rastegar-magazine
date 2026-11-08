import { ArrowLeft, ArrowUpLeft, BookOpen, Brain, Clapperboard, FlaskConical, GraduationCap, Leaf, Menu, MoveUpLeft, Search, Sparkles } from "lucide-react";

const sections = [
  { n: "۰۱", title: "روان‌شناسی", en: "PSYCHOLOGY", desc: "از شناخت ذهن و رفتار تا نظریه‌ها، مکاتب و کاربردهای روان‌شناسی.", icon: Brain, href: "#psychology" },
  { n: "۰۲", title: "پژوهش و دانش", en: "RESEARCH & KNOWLEDGE", desc: "مقاله‌های علمی، روش تحقیق، یافته‌ها و مسیرهای جست‌وجوی دانش.", icon: FlaskConical, href: "#research" },
  { n: "۰۳", title: "کتابخانه", en: "THE LIBRARY", desc: "معرفی، خوانش و نقد کتاب‌هایی برای عمیق‌تر دیدن جهان.", icon: BookOpen, href: "#library" },
  { n: "۰۴", title: "فرهنگ و رسانه", en: "CULTURE & MEDIA", desc: "نگاهی تحلیلی به فیلم، انیمیشن، روایت و تجربه انسانی.", icon: Clapperboard, href: "#media" },
];

const articles = [
  { category: "مبانی روان‌شناسی", title: "روان‌شناسی چیست و چه پرسش‌هایی را دنبال می‌کند؟", desc: "آشنایی با موضوع، روش‌ها و گستره دانشی که ذهن و رفتار انسان را مطالعه می‌کند.", time: "۸ دقیقه مطالعه", number: "01" },
  { category: "روان‌شناسی رشد", title: "رشد انسان؛ سفری فراتر از کودکی", desc: "چگونه تجربه، زیست‌شناسی و محیط در مسیر تحول انسان با یکدیگر پیوند می‌خورند؟", time: "۱۰ دقیقه مطالعه", number: "02" },
  { category: "اندیشه و زندگی", title: "معنای زندگی؛ پرسشی برای مکث و تأمل", desc: "نگاهی میان‌رشته‌ای به معنا، ارزش‌ها و انتخاب‌های روزمره.", time: "۶ دقیقه مطالعه", number: "03" },
];

const branches = ["بالینی", "عمومی", "رشد", "شناختی", "اجتماعی", "تربیتی", "سلامت", "صنعتی و سازمانی"];

export default function Home() {
  return (
    <main>
      <div className="announcement"><span>دانش، اندیشه، زندگی</span><span className="announcement-en">A JOURNEY THROUGH THE HUMAN EXPERIENCE</span></div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="صفحه اصلی Zahra Rastegar">
          <span className="brand-mark">ZR</span><span className="brand-name">ZAHRA RASTEGAR<small>DIGITAL MAGAZINE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="منوی اصلی">
          <a href="#magazine">مجله</a><a href="#psychology">دانشنامه روان‌شناسی</a><a href="#research">پژوهش</a><a href="#library">کتابخانه</a><a href="#media">رسانه</a><a href="#about">درباره</a>
        </nav>
        <div className="header-actions"><button className="icon-button" aria-label="جست‌وجو"><Search size={18}/></button><a className="language" href="#english">EN</a><button className="mobile-menu" aria-label="باز کردن منو"><Menu size={22}/></button></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> مجله‌ای برای شناخت انسان و جهان</div>
          <h1>برای عمیق‌تر<br/>دیدنِ <em>زندگی.</em></h1>
          <p className="hero-lead">روان‌شناسی، پژوهش و اندیشه؛ جایی برای پرسیدن، آموختن و نزدیک‌تر شدن به فهم انسان.</p>
          <div className="hero-links"><a className="button-primary" href="#magazine">ورود به مجله <ArrowLeft size={17}/></a><a className="text-link" href="#about">داستان این مجموعه <ArrowUpLeft size={16}/></a></div>
          <div className="hero-note"><span className="note-dot"/> محتوای علمی با ارجاع روشن و نگاه میان‌رشته‌ای</div>
        </div>
        <div className="hero-art" aria-label="تصویر انتزاعی الهام‌گرفته از فرم‌های طبیعی">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sun"/><div className="art-leaf leaf-one"/><div className="art-leaf leaf-two"/><div className="art-stem"/>
          <div className="art-caption"><span>01 / 04</span><span>THE HUMAN EXPERIENCE</span></div>
        </div>
        <div className="hero-index"><span>EST. 2026</span><span className="index-rule"/><span>شماره نخست · در حال شکل‌گیری</span></div>
      </section>

      <section className="intro-strip">
        <span className="strip-label">نگاهی از چند پنجره</span>
        <p>شناخت انسان، تنها از یک مسیر نمی‌گذرد؛ از علم تا فرهنگ، از تجربه تا اندیشه.</p>
        <Sparkles size={19} strokeWidth={1.3}/>
      </section>

      <section className="section-block" id="magazine">
        <div className="section-heading"><div><span className="eyebrow">EXPLORE THE MAGAZINE</span><h2>جهان‌های <em>دانش</em></h2></div><a className="text-link" href="#all-sections">همه بخش‌ها <ArrowLeft size={16}/></a></div>
        <div className="section-grid" id="all-sections">
          {sections.map((item) => { const Icon = item.icon; return <a className="section-card" href={item.href} key={item.n}><div className="card-top"><span>{item.n}</span><Icon size={24} strokeWidth={1.35}/></div><span className="card-en">{item.en}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="card-arrow"><ArrowLeft size={18}/></span></a>; })}
        </div>
      </section>

      <section className="psychology-band" id="psychology">
        <div className="psychology-copy"><span className="eyebrow light">THE PSYCHOLOGY ENCYCLOPEDIA</span><h2>روان‌شناسی را<br/><em>از نو کشف کن.</em></h2><p>دانشنامه‌ای برای آشنایی روشن و مرحله‌به‌مرحله با مفاهیم، نظریه‌ها، مکاتب و گرایش‌های روان‌شناسی؛ همراه با مثال و مسیر مطالعه.</p><a className="button-light" href="#branches">کاوش در دانشنامه <ArrowLeft size={17}/></a></div>
        <div className="psychology-visual"><div className="brain-ring ring-a"/><div className="brain-ring ring-b"/><div className="brain-core"><Brain size={76} strokeWidth={0.8}/></div><span className="visual-label label-a">MIND</span><span className="visual-label label-b">BEHAVIOR</span><span className="visual-label label-c">DEVELOPMENT</span></div>
      </section>

      <section className="section-block branches-block" id="branches">
        <div className="section-heading"><div><span className="eyebrow">AREAS OF PSYCHOLOGY</span><h2>شاخه‌ها و <em>گرایش‌ها</em></h2></div><p className="heading-description">هر حوزه، دریچه‌ای متفاوت برای فهم ذهن، رفتار و تجربه انسان.</p></div>
        <div className="branch-list">{branches.map((branch, i) => <a href="#contact" className="branch-item" key={branch}><span className="branch-number">۰{i+1}</span><span>{branch}</span><MoveUpLeft size={17}/></a>)}</div>
        <p className="editorial-note">این فهرست نقطه شروع دانشنامه است؛ هر مدخل با تعریف، موضوعات اصلی، نمونه‌های کاربردی و منابع معتبر تکمیل خواهد شد.</p>
      </section>

      <section className="featured-block" id="research">
        <div className="section-heading"><div><span className="eyebrow">EDITOR'S SELECTION</span><h2>برای <em>خواندن</em></h2></div><a className="text-link" href="#contact">آرشیو مطالب <ArrowLeft size={16}/></a></div>
        <div className="article-grid">{articles.map((article) => <article className="article-card" key={article.number}><div className="article-image"><span>{article.number}</span><div className="image-shape"/></div><div className="article-meta"><span>{article.category}</span><span>{article.time}</span></div><h3>{article.title}</h3><p>{article.desc}</p><a href="#contact" className="article-link">به‌زودی در مجله <ArrowLeft size={15}/></a></article>)}</div>
      </section>

      <section className="quote-band" id="library"><span className="quote-mark">“</span><p>دانستن، آغازِ دقیق‌تر دیدن است؛<br/>و پرسیدن، راهی برای عمیق‌تر فهمیدن.</p><span className="quote-caption">A NOTE ON CURIOSITY & KNOWLEDGE</span></section>

      <section className="media-block" id="media"><div className="media-icon"><Clapperboard size={34} strokeWidth={1}/></div><div><span className="eyebrow">CINEMA · ANIMATION · STORIES</span><h2>روایت‌ها را <em>از زاویه‌ای دیگر</em> ببین.</h2><p>فیلم و انیمیشن، فقط سرگرمی نیستند؛ می‌توانند فرصتی برای گفت‌وگو درباره شخصیت، هیجان، رابطه و تجربه انسانی باشند.</p></div><a className="round-link" href="#contact"><ArrowLeft size={20}/></a></section>

      <section className="about-block" id="about"><div className="about-monogram">ZR<span>FOUNDER & EDITOR</span></div><div className="about-copy"><span className="eyebrow">A PERSONAL EDITORIAL PROJECT</span><h2>روایتِ یک مسیر<br/><em>یادگیری و جست‌وجو.</em></h2><p>Zahra Rastegar مجله‌ای مستقل با تمرکز بر روان‌شناسی و پیوندهای آن با پژوهش، علوم انسانی و زندگی روزمره است؛ مسیری که با کنجکاوی آغاز می‌شود و با مشارکت و یادگیری جمعی گسترش می‌یابد.</p><a href="#contact" className="text-link">بیشتر درباره این مجموعه <ArrowLeft size={16}/></a></div></section>

      <footer id="contact"><div className="footer-top"><a className="brand footer-brand" href="#"><span className="brand-mark">ZR</span><span className="brand-name">ZAHRA RASTEGAR<small>DIGITAL MAGAZINE</small></span></a><p>دانش، اندیشه، زندگی</p></div><div className="footer-bottom"><span>© 2026 ZAHRA RASTEGAR. ALL RIGHTS RESERVED.</span><span>یک مجله مستقل فارسی‌زبان</span><a href="mailto:hello@example.com">ارتباط با مجله</a></div></footer>
    </main>
  );
}
