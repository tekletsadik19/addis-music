import clientPromise from '@/lib/mongo/client'
import { ObjectId } from 'mongodb'

let client
let db
let libraryData

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    libraryData = await db.collection('library')
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()

//////////////
/// libraryData ///
/////////////


export async function getLibraryByUserId(id) {
  try {
  
    if (!libraryData) await init()
    const result = await libraryData
      .find({ userId: id })
      .map(library => ({ ...library, _id: library._id.toString() }))
      .toArray()
    if (!result) throw new Error()
    return { libraryData: result}
  } catch (error) {
    return { error: 'Failed to get library!' }
  }
}


export async function createLibrary(title) {
  try {
    if (!libraryData) await init()
    return await libraryData.insertOne({ 
        title, isCompleted: false 
    })
  } catch (error) {
    return { error: 'Failed to create library!' }
  }
}

export async function deleteLibrary(id) {}

export async function updateLibrary(id) {}