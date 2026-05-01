import Link from "next/link";
import SelectOption from "../SelectOption";


const AllCategory = ({allCategory,activeId}) => {
 
  return (
      <div className="col-span-3">
      <h2 className="font-semibold text-xl mb-2">All Categoray</h2>
      <ul className="hidden md:flex flex-col justify-items-start gap-4">
        {
          allCategory.map(category=><li key={category.category_id}
          className={`${activeId===category.category_id && 'bg-gray-200 p-2'}`}
          ><Link href={`/category/${category.category_id}`} className="block ">{category.category_name}</Link></li>)
        }
      </ul>
      <div  className="md:hidden">

 <SelectOption allCategory={allCategory}></SelectOption>


      </div>
    </div>
    );
};

export default AllCategory;