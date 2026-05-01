'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href,children,className=''}) => {
    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(href+'/')
    return (
       <Link href={href} className={`${isActive ? 'border-b-4 border-red-700':''} ${className}`}>{children}</Link>
    );
};

export default NavLink;