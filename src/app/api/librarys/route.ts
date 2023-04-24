import { NextRequest,NextResponse } from 'next/server'
import { createLibrary, getLibraryByUserId } from '@/lib/mongo/library'

export async function GET(request:NextRequest) {
  try {
    // const { userId } = await request.json()
 
    const { libraryData, error } = await getLibraryByUserId("643a28f8945be81ec70d92c4")
    const library:Library[] = libraryData;
    if (error) throw new Error(error)
    console.log(library)
    return NextResponse.json({ libraryData }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}



export async function DELETE(request:NextRequest){
  const {id}:Partial<Library> = await request.json();
  if(!id) return NextResponse.json({"message":"Library Id is Required"})
}

export async function POST(request:NextRequest){
  const {id}:Partial<Library> = await request.json();
  if(!id) return NextResponse.json({"message":"Library Id is Required"})
  try {
    const { title } = await request.json()

    const { insertedId, error } = await createLibrary(title)
    if (error) throw new Error(error)

    return NextResponse.json({ insertedId }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}