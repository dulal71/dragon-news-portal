import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    return (
        <div className="hidden md:block  col-span-3">
     <h2 className="font-semibold text-xl mb-2">
       Login With
     </h2>
    <div className="flex flex-col gap-2 justify-start items-start shadow p-2">
         <button className="border-2 border-gray-400 px-2 flex  items-center gap-1"><FaGoogle />Login with Google</button>
       <button className="border-2 border-gray-400 px-2 flex  items-center gap-1"><FaGithub /> Login with Github</button>
    </div>
    </div> 
    );
};

export default Login;