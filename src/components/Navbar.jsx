
import Image from "next/image";
import NavLink from "./NavLink";
import Profile from '@/assets/user.png'
import Link from "next/link";


const Navbar = () => {
  
    return (
      <div className=" container mx-auto navbar bg-base-100 shadow-sm mt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><NavLink href='/' className={"font-semibold text-red-500"}>Home</NavLink></li>
      <li><NavLink href='/about'  className={"font-semibold "}>About</NavLink></li>
      <li><NavLink href='/carrer'  className={"font-semibold"}>Carrer</NavLink></li>
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          <li><NavLink href='/'  className={"font-semibold text-md text-red-400"}>Home</NavLink></li>
      <li><NavLink href='/about'  className={"font-semibold"}>About</NavLink></li>
      <li><NavLink href='/carrer'  className={"font-semibold"}>Carrer</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Image src={Profile} width={41} height={41}  alt="user image"></Image>
    <Link href='/signup' className="btn">Login</Link>
  </div>
</div> 
    );
};

export default Navbar;