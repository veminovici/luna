import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@lib/mongo/client';
import NextAuth, { Session } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile, _tokens) {
        console.log("auth::profile called");
        console.log("  profile: " + JSON.stringify(profile));

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'user',
          address: "My address is here"
        }
      }
    })
  ],
  callbacks: {
    //@ts-ignore
    // async jwt({ token, user, trigger, session }) {
    //   console.log("AUTH::JWT");
    //   console.log("  token: " + JSON.stringify(token));
    //   console.log("  user: " + JSON.stringify(user));
    //   console.log("  trigger: " + JSON.stringify(trigger));
    //   console.log("  session: " + JSON.stringify(session));

    //   if (user) {
    //     token.role = user.role
    //   }

    //   if (trigger === 'update' && session?.name) {
    //     token.name = session.name
    //   }

    //   return token
    // },
    //@ts-ignore
    async session({session, user, trigger, token}: {session: Session}) {
      console.log("AUTH::SESSION");
      console.log("  token: " + JSON.stringify(token));
      console.log("  user: " + JSON.stringify(user));
      console.log("  trigger: " + JSON.stringify(trigger));
      console.log("  session: " + JSON.stringify(session));

      session.user.role = user.role;
      session.user.address = user.address;
      
      return session
    }
  },
  adapter: MongoDBAdapter(clientPromise),
  // session: {
  //   strategy: 'database'
  // },
  pages: {
    signIn: '/signin'
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }