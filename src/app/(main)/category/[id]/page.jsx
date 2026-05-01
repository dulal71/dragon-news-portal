import AllCategory from "@/components/HomePage/AllCategory";
import Login from "@/components/HomePage/Login";
import NewsCard from "@/components/NewsCard";
import { getAllCategory, getNewsById } from "@/lib/fetchingData";





const NewsByCategory =async ({params}) => {
    const {id}=await params
    
      const allCategory=await getAllCategory()
     const categoryNews = await getNewsById(id)
   
    return (
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 my-10 px-2 md:px-0">
    {/* left-section */}
   <AllCategory allCategory={allCategory} activeId={id}></AllCategory>

    {/* middle-section */}
    <div className="col-span-6">
           <h2 className="font-semibold text-xl mb-2">Dragon News Home</h2>   
           <div>
{
    categoryNews.length===0? <h2 className="font-semibold text-black text-center mt-3">No news found</h2>:(categoryNews.map(news=> <NewsCard key={news._id} news={news}></NewsCard>))
}
           </div>
 
    </div>
  
    {/* right-section */}
   <Login></Login>
  </div>
    );
};

export default NewsByCategory;