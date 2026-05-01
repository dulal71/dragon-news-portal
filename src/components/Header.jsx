import { compareAsc, format } from "date-fns";
import Logo from '@/assets/logo.png'
import Image from 'next/image';
const Header = () => {
    return (
        <div className=" max-w-3xl mx-auto text-center my-10 space-y-2">
            <Image className="mx-auto"  src={Logo} width={400} height={60}alt='drgon news logo '></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMMM,yyyy-MM-dd")}</p>
        </div>
    );
};

export default Header;