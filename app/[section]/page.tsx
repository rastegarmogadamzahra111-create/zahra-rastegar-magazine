import {CollectionPage} from "../components/collection-page";
export function generateStaticParams(){return ["podcasts","talks","quran-notes","notices","psychology-in-life","scientific-psychology","fitri-psychology","psychology-tests","children","lesson-plans","clinical-stories","psychological-disorders","chehre-negar"].map(section=>({section}));}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const {section}=await params;return <CollectionPage slug={section}/>;}
