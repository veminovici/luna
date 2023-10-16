import { Collection, Db, MongoClient, ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongo/client'

let client: MongoClient;
let db: Db;
let users: Collection<Document>;

async function init() {

  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    users = await db.collection('users')
  } catch (error) {
    throw new Error('Failed to stablish connection to database')
  }
}

/////////////
/// USERS ///
/////////////

export async function findUserById(userId: string) {
  try {
    if (!users) await init()

    const user = await users.findOne({ _id: new ObjectId(userId) })

    if (!user) throw new Error()

    let res = { user: { ...user, _id: user._id.toString() } };
    console.log("findUserById: " + JSON.stringify(res));

    return res
  } catch (error) {
    return { error: 'Failed to find the user.' }
  }
}

export async function findUserByEmail(email: string) {
  try {
    if (!users) await init()

    const user = await users.findOne({ email })

    if (!user) throw new Error()
    
    let res = { user: { ...user, _id: user._id.toString() } };
    console.log("findUserById: " + JSON.stringify(res));

    return res;
  } catch (error) {
    return { error: 'Failed to find the user.' }
  }
}

export async function updateUser(email: any, update: any) {
  try {
    if (!users) await init()

    await users.updateOne({ email }, { $set: update })

    return { success: true }
  } catch (error) {
    return { error: 'Failed to reset the password.' }
  }
}