import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("shortener")
    const urls = db.collection("urls")
    //check if the url exists
    const exists = await urls.findOne({ shortUrl: body.shorturl })
    if (exists) {
      return Response.json({ success:'false',error:'true', message: 'Short URL already exists' })
    }
   const result = await urls.insertOne({
     url: body.url, 
     shortUrl: body.shorturl 
    })
    return Response.json({ success:'true',error:'false', message: 'URL generated successfully' })
  }