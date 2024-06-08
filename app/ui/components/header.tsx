import { User } from "@/types/user";
import Image from "next/image";
import SignOut from "./sign-out";
import Detail from "./detail";
const Header = ({user}:{user:User|undefined}) => {
   return (
      <header className=" flex justify-center p-2 flex-col items-center gap-2">
         <Image src={user?.image as string} alt="profile" width={100} height={100} className="rounded-full" />
         <div className="flex flex-col md:flex-row justify-center gap-2 ">
            <Detail detail={user?.name as string} />
            <Detail detail={user?.email as string} />
            <SignOut />
         </div>
      </header>
   );
}
export default Header;