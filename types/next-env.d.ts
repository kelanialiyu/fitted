export const { handlers, auth, signIn, signOut } = NextAuth(config)

declare module "next-auth" {
   interface Session {
      accessToken?: string
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      accessToken?: string
   }
}