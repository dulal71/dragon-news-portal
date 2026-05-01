import { newsDetailsById} from "@/lib/fetchingData";
import { Astloch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export const generateMetadata=async({params})=>{
const {newsId} = await params
const news = await newsDetailsById(newsId)
return{
   title: news.title,
    description: news.details,
}
}

const NewsDetails =async ({params}) => {
   const {newsId} = await params
   
    const news = await newsDetailsById(newsId)
  


  return (
   <div className="max-w-4xl mx-auto card bg-base-100  shadow-sm mt-5">
  <figure>
    <Image
      src={news.image_url}
      width={700}
      height={400}
      alt={news.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p className="leading-7">{news.details
}</p>
    <div className="card-actions justify-start">
     <Link href={`/category/${news.category_id}`}> <button className="bg-red-700 btn text-white"><BiLeftArrow></BiLeftArrow>  All news in this category</button></Link>
    </div>
  </div>
</div>
  );
};

export default NewsDetails;