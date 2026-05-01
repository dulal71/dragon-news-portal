import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import userImage from '@/assets/user.png'



const Profile = ({user}) => {
console.log(user);

 const logout = async()=>{
    await authClient.signOut()
 }  
    return (
        <div className='flex gap-2 items-center'>
            <h1 className='text-black font-bold'>{user?.name}</h1>
          <Image src={user.image} width={41} height={41} className='rounded-full'  alt="user image"></Image>
    <Link href='/login' className="btn bg-red-600 text-white" onClick={logout}>Logout</Link>   
        </div>
    );
};

export default Profile;