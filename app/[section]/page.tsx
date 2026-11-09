import {CollectionPage} from "../components/collection-page";
export function generateStaticParams(){return ["podcasts","talks","quran-notes","notices","psychology-in-life","scientific-psychology","fitri-psychology"].map(section=>({section}));}
export default function SectionPage({params}:{params:{section:string}}){return <CollectionPage slug={params.section}/>;}
