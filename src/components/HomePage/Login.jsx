'use client'

import { authClient } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const googleSignUp=async()=>{
const data = await authClient.signIn.social({
   provider: "google",
})
  }
  const githubSignUp=async()=>{
const data = await authClient.signIn.social({
   provider: "github",
})
console.log(data);
  }
    return (
        <div className="hidden md:block  col-span-3">
     <h2 className="font-semibold text-xl mb-2">
       Login With
     </h2>
    <div className="flex flex-col gap-2 justify-start items-start shadow p-2">
         <button onClick={googleSignUp} className="border-2 border-gray-400 px-2 flex  items-center gap-1"><FaGoogle /> Google</button>
       <button onClick={githubSignUp} className="border-2 border-gray-400 px-2 flex  items-center gap-1"><FaGithub /> Github</button>
    </div>
    </div> 
    );
};

export default Login;