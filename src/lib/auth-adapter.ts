// https://github.com/nextauthjs/adapters/blob/main/packages/mongodb/src/index.ts

import type {
  Adapter,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"

import type { Account } from "next-auth"


type AuthAdapterClient = {}
type AuthAdapterOptions = {}

type ObjectId = {
  key?: string
}

/** Converts from string to ObjectId */
export function _id(hex?: string): any {
  if (hex?.length !== 24) return ({} as ObjectId)
  return { key: hex}
}

export const format = {
  /** Takes a mongoDB object and returns a plain old JavaScript object */
  from<T = Record<string, unknown>>(object: Record<string, any>): T {
    const newObject: Record<string, unknown> = {}
    for (const key in object) {
      const value = object[key]
      if (key === "_id") {
        newObject.id = value.toHexString()
      } else if (key === "userId") {
        newObject[key] = value.toHexString()
      } else {
        newObject[key] = value
      }
    }
    return newObject as T
  },
  /** Takes a plain old JavaScript object and turns it into a mongoDB object */
  to<T = Record<string, unknown>>(object: Record<string, any>) {
    const newObject: Record<string, unknown> = {
      _id: _id(object.id),
    }
    for (const key in object) {
      const value = object[key]
      if (key === "userId") {
        newObject[key] = _id(value)
      } else {
        newObject[key] = value
      }
    }
    return newObject as T
  },
}

export function AuthAdapter(
    // client: Promise<AuthAdapterClient>,
    // options: AuthAdapterOptions = {}
): Adapter {
  // const { collections } = options
  const { from, to } = format

  // const db = (async () => {
  //   const _db = (await client).db()
  //   const c = { ...defaultCollections, ...collections }
  //   return {
  //     U: _db.collection<AdapterUser>(c.Users),
  //     A: _db.collection<Account>(c.Accounts),
  //     S: _db.collection<AdapterSession>(c.Sessions),
  //     V: _db.collection<VerificationToken>(c?.VerificationTokens),
  //   }
  // })()

  return {
    async createUser(data) {
      // await (await db).U.insertOne(user)
      console.log("adapter::createUser");
      const user = to<AdapterUser>(data);
      return from<AdapterUser>(user)
    },

    async getUser(id) {
      // const user = await (await db).U.findOne({ _id: _id(id) })
      // if (!user) return null
      // return from<AdapterUser>(user)
      console.log("adapter::getUser");
      return null;
    },
    async getUserByEmail(email) {
      // const user = await (await db).U.findOne({ email })
      // if (!user) return null
      // return from<AdapterUser>(user)
      console.log("adapter::getUserByEmail");
      return null;
    },
    async getUserByAccount(provider_providerAccountId) {
      // const account = await (await db).A.findOne(provider_providerAccountId)
      // if (!account) return null
      // const user = await (
      //   await db
      // ).U.findOne({ _id: new ObjectId(account.userId) })
      // if (!user) return null
      // return from<AdapterUser>(user)
      console.log("adapter::getUserByAccount");
      return null;
    },
    async updateUser(data) {
      // const { value: user } = await (
      //   await db
      // ).U.findOneAndUpdate({ _id: _id(data.id) }, { $set: data })
      // return from<AdapterUser>(user!)
      console.log("updateUser");
      const user = to<AdapterUser>(data);
      return from<AdapterUser>(user);
    },
    async deleteUser(id) {
      // const userId = _id(id)
      // const m = await db
      // await Promise.all([
      //   m.A.deleteMany({ userId }),
      //   m.S.deleteMany({ userId }),
      //   m.U.deleteOne({ _id: userId }),
      // ])
      console.log("deleteUser");
    },
    linkAccount: async (data) => {
      console.log("adapter::linkAccount");
      const account = to<Account>(data)
      // await (await db).A.insertOne(account)
      //return account
      return null
    },
    async unlinkAccount(provider_providerAccountId) {
      // const { value: account } = await (
      //   await db
      // ).A.findOneAndDelete(provider_providerAccountId)
      // return from<Account>(account!)
      console.log("adapter::unlinkAccount")
      return
    },
    async getSessionAndUser(sessionToken) {
      // const session = await (await db).S.findOne({ sessionToken })
      // if (!session) return null
      // const user = await (
      //   await db
      // ).U.findOne({ _id: new ObjectId(session.userId) })
      // if (!user) return null
      // return {
      //   user: from<AdapterUser>(user),
      //   session: from<AdapterSession>(session),
      // }
      console.log("adapter::getSessionAndUser");
      return null;
    },
    async createSession(data) {
      console.log("adapter::getSessionAndUser");
      const session = to<AdapterSession>(data)
      // await (await db).S.insertOne(session)
      return from<AdapterSession>(session)
    },
    async updateSession(data) {
      // const { value: session } = await (
      //   await db
      // ).S.findOneAndUpdate({ sessionToken: data.sessionToken }, { $set: data })
      // return from<AdapterSession>(session!)
      console.log("adapter::updateSession");
      return null;
    },
    async deleteSession(sessionToken) {
      // const { value: session } = await (
      //   await db
      // ).S.findOneAndDelete({
      //   sessionToken,
      // })
      // return from<AdapterSession>(session!)
      console.log("adapter::deleteSession");
      return null;
    },
    async createVerificationToken(data) {
      // await (await db).V.insertOne(to(data))
      // return data
      console.log("adapter::createVerificationToken");
      return null;
    },
    async useVerificationToken(identifier_token) {
      // const { value: verificationToken } = await (
      //   await db
      // ).V.findOneAndDelete(identifier_token)

      // if (!verificationToken) return null
      // // @ts-expect-error
      // delete verificationToken._id
      // return verificationToken
      console.log("adapter::createVerificationToken");
      return null;
    },
  }
}