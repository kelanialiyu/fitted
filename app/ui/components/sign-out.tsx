import { signOut } from "@/auth";
import { redirect } from "next/navigation";

const SignOut = () => {
   return (
      <form
      action={async () => {
        "use server"
            await signOut()
            redirect("/")
      }}
    >
         <button type="submit" className=" w-full text-gray-500 text-center hover:bg-gray-200 hover:border-[#111] hover:text-[#111] border-[#5464] px-3 py-1 border-dashed border-[2px]" >Sign Out</button>
    </form>
   );
}
export default SignOut;