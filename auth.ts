import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [GitHub],
   callbacks: {
      jwt ({ token, trigger, session, account }) {
         if (trigger === "update") token.name = session.user.name
         if (account?.provider === "github") {
            return { ...token, accessToken: account.access_token }
         }
         return token
      },
      async session ({ session, token }) {
         if (token?.accessToken) {
            session.accessToken = token.accessToken.toString()
         }
         return session
      },

   },
   experimental: {
      enableWebAuthn: true,
   },
})
