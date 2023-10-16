import { AuthAdapter } from '@lib/auth-adapter';
import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile, _tokens) {
        console.log("auth::profile called");
        console.log("  profile: " + profile);

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'user'
        }
      }
    })
  ],
  callbacks: {
    //@ts-ignore
    async jwt({ token, user, trigger, session }) {
      console.log("auth::jwt called");
      console.log("  token: " + token);
      console.log("  user: " + user);
      console.log("  trigger: " + trigger);
      console.log("  session: " + session);

      if (user) {
        token.role = user.role
      }

      if (trigger === 'update' && session?.name) {
        token.name = session.name
      }

      return token
    },
    //@ts-ignore
    async session({session, token}) {
      console.log("auth::session called");
      console.log("  token: " + token);
      console.log("  session: " + session);

      session.user.role = token.role
      return session
    }
  },
  // adapter: AuthAdapter(),
  pages: {
      signIn: '/signin'
  },
}

const handler = NextAuth(authOptions as AuthOptions)

export { handler as GET, handler as POST }