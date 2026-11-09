import {PageFrame} from "../components/site-shell";
import {ManagedEntries} from "../components/managed-entries";
const notes=[
 {n:"01",title:"از قدم‌های کوچک نترس.",body:"راه‌های بزرگ، با تصمیم‌های کوچک و تکرارشونده ساخته می‌شوند.",tag:"آغاز"},
 {n:"02",title:"قرار نیست همه‌چیز را همین امروز بدانی.",body:"گاهی کافی است قدم بعدی را روشن ببینی و با حوصله برداری.",tag:"صبوری"},
 {n:"03",title:"رشد، همیشه پرسر‌وصدا نیست.",body:"بعضی از مهم‌ترین تغییرها در سکوتِ انتخاب‌های هر روز اتفاق می‌افتند.",tag:"رشد"},
 {n:"04",title:"به مسیرت معنا بده؛ نه فقط سرعت.",body:"شتاب داشتن ارزشمند است، وقتی بدانی به کدام سو حرکت می‌کنی.",tag:"معنا"},
 {n:"05",title:"یادگرفتن را به زندگی پیوند بزن.",body:"دانشی که به فهم بهتر و رفتار سنجیده‌تر راه پیدا کند، زنده می‌ماند.",tag:"یادگیری"},
 {n:"06",title:"امید، یک جور ادامه‌دادن آگاهانه است.",body:"حتی وقتی افق کامل پیدا نیست، می‌توانی مسئولانه قدم بعدی را انتخاب کنی.",tag:"امید"}
];
export default function MeaningSparks(){return <PageFrame eyebrow="SPARKS OF MEANING" title="جرقه‌های معنا" lead="یادآوری‌هایی کوتاه برای مکث، بازنگری و ادامه دادن؛ جمله‌هایی برای روزهایی که به یک تلنگر آرام نیاز داریم."><section className="spark-grid">{notes.map(x=><article className="spark-card" key={x.n}><div className="spark-top"><span>{x.n}</span><span>{x.tag}</span></div><div className="spark-star">✳</div><h2>{x.title}</h2><p>{x.body}</p><span className="spark-signature">ZAHRA RASTEGAR</span></article>)}</section><ManagedEntries categories={["جرقه‌های معنا"]} emptyTitle="هنوز یادداشت تازه‌ای منتشر نشده است." /></PageFrame>}
