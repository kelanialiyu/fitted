import { signIn } from "@/auth"
import Image from "next/image"
const SignIn = () => {
  return (
      <form
      action={async () => {
        "use server"
           await signIn("github", {redirectTo: "/dashboard"})
      }}
    >
      <button className="py-2 px-4 rounded-sm shadow-sm bg-[#333] text-[#eee] flex gap-2 content-center justify-center " type="submit">
         <div className="">
            <Image src="/github.jpg" alt="" width={20} height={20} />
         </div>
         <div>Sign-in with GitHub</div>
      </button>
    </form>

  )
}

export default SignIn