'use client'

import { redirect, useRouter } from "next/navigation";

const SelectOption = ({allCategory}) => {
    const router = useRouter()
     const handleSelect =(e)=>{
        const  category_id =e.target.value
   
  router.push(`/category/${category_id}`)

  }
    return (
      <select onChange={handleSelect} name="" id="">
        {
         allCategory.map(category=>  <option key={category.category_id} value={category.category_id}>{category.category_name}</option>)   
        }
       
      </select>
    );
};

export default SelectOption;