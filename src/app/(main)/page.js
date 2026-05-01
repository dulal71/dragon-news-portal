import { redirect } from "next/navigation";


const category_id='01'
export default async  function Home() {
 return (
redirect(`/category/${category_id}`)
  
  );
}
