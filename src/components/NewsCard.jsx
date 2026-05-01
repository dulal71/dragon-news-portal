import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
const NewsCard = ({news}) => {
  
    return (
        
         <div className="card bg-base-100  shadow-sm my-3">
    <div className="flex justify-between items-center bg-zinc-200 p-2">
                <div className="flex gap-1 items-center">
 <Image src={news.author?.img} width={40} height={40} className="rounded-full" alt='author image'></Image>
 <div>
    <h2 className="font-bold">{news.author?.name}</h2>
    <p>{news.author?.published_date}</p>
 </div>
  </div>
<div className="flex items-center gap-2">
  <CiBookmark size={20} />  
  <IoMdShare  size={20}/>
 </div>
    </div>
  <div className="card-body">
     <h2 className="card-title"> {news.title}</h2>
    <Image src={news.image_url} width={400} height={250} alt={news.title}></Image>
   
    <p className="line-clamp-3">{news.
details}</p>
    <div className="card-actions justify-start">
     <Link href={`/news/${news._id}`}> <button className="text-red-500 text-md">See more</button></Link>
    </div>
    <div className="flex justify-between items-center">
<div className="flex gap-2 items-center">
    <FaRegStar color="gold" />
    <p>{news.rating?.number}</p>
</div>
<div className="flex items-center gap-2">
    <FaRegEye />
<p>{news.total_view
}</p>
</div>
    </div>
  </div>
</div>   
        
    );
};

export default NewsCard;