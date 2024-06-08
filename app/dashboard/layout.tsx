
import React from 'react';
import { redirect } from 'next/navigation'
import { auth } from '@/auth';
import Header from '@/app/ui/components/header';
import Footer from '@/app/ui/components/footer';
import { User } from '@/types/user';
const Layout =async ({ children }: Readonly<{ children: React.ReactNode }>) => {
   const session = await auth()
   if (!session?.user) {
      redirect('/')
   }
   let user;
   if (session?.user) {
      user = session.user as User
   }
   return (
      <div className="flex flex-col h-screen">
         <Header user={user} />
         <main className="flex-1 p-4 overflow-y-auto">{children}</main>
         <Footer />
      </div>
   );
}
export default Layout;