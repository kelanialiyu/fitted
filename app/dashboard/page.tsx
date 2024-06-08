import {auth} from "@/auth";
import SignOut from "../ui/components/sign-out";
import { cookies } from "next/headers";
type Repo ={
   id: string;
   name: string;
   description: string;
   html_url: string;
}
type User = {
   name: string;
   email: string;
   image: string;
   accessToken: string;
}
const Page =async() => {
   const user = await auth();
   console.log(cookies)
   const fetchUserRepo = async () => {
      const response = await fetch("https://api.github.com/user/repos", {
         headers: {
            Authorization: `Bearer ${user?.accessToken}`,
         },

      });
      const data = await response.json();
      return data;
   }
   const repos = await fetchUserRepo();
   return (
      <div>
         <div className="flex gap-4 flex-wrap">
            {repos.map((repo: Repo) => (
               <div key={repo.id} className="shadow relative p-4 rounded w-[90%] max-w-[20rem]">
                  <h2 className="bold text-xl/10 capitalize text-ellipsis">{repo.name}</h2>
                  <p className="text-wrap mb-7 text-base/loose line-clamp-3">{repo.description}</p>
                  <a className="text-sm hover:border-dashed p-2 hover:border-[#111] hover:text-[#111] text-right border-[2px] text-[#415a77] absolute bottom-1 right-1  " href={repo.html_url} target="_blank" rel="noreferrer">View on Github</a>
               </div>
            ))}
            </div>

      </div>
   );
}
export default Page;