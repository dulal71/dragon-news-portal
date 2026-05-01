'use client'

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { Eye, EyeClosed } from '@gravity-ui/icons';
import { useRouter } from 'next/navigation';



 const SignUp = () => {
   const router = useRouter()
const [isShowPassword,setIsShowPassword]=useState(false)
  
const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()


    const onSubmit = async (user)=> {
      console.log(user);
        const {name,url,email,password}=user
   const {data,error}= await authClient.signUp.email({
name:name,
image:url,
email:email,
password:password,

   })
// reset()
console.log(data);
if(error){
   alert('This user already existed')
}else{
   alert('successfully SignUp')
   router.push('/')
}
}
//    console.log(watch('password'));

    return (
        <div className='font-[var(--font-montserrat)] container mx-auto bg-zinc-200 h-[90vh] flex justify-center items-center'>
          <div className="bg-zinc-100 py-20 px-10 rounded-md shadow">
                <p className="text-3xl font-bold text-center mb-3">Register your account</p> 
             <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 relative">


  <label className="label">Your name</label>
  <input type="text"
   className="input" 
    {...register("name",{required:'name must be given'})}
   placeholder="Enter your name" />
   {
    errors.name &&(<p className='text-red-500'>{errors.name.message}</p>)
   }

  <label className="label">Photo URL</label>
 <input
  type="text"
  className="input"
  {...register("url", {
    required: "give a valid url",
    pattern: {
      value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
      message: "Enter a valid image URL",
    },
  })}
  placeholder="Enter image URL"
/>

  <label className="label">Email</label>
  <input type="email"
   className="input"
    {...register("email",{required:'give a valid email'})}
    placeholder="Email" />
 {
    errors.email &&(<p className='text-red-500'>{errors.email.message}</p>)
   }

  <label className="label">Password</label>

  <input type={isShowPassword? 'text':'password'}
  minLength={6}
   className="input " 
    {...register("password",{required:'Password must be 6 character '})}
   placeholder="Password" />
   <span className='absolute right-6 top-68'>
      
     {
      isShowPassword? <EyeClosed onClick={()=>setIsShowPassword(false)}></EyeClosed>: <Eye onClick={()=>setIsShowPassword(true)}></Eye>
     } 
     </span>
 {
    errors.password &&(<p className='text-red-500'>{errors.password.message}</p>)
   }

  <button className="btn btn-neutral mt-4">Register</button>
 
</fieldset>
</form>  
       </div>
        </div>
    );
};

export default SignUp;