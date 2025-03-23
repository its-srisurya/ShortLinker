import { redirect } from 'next/navigation'
import clientPromise from '@/lib/mongodb'
 
export default async function Page({params}) {
const shorturl = (await params).shorturl

  const client = await clientPromise
  const db = client.db("shortener")
  const urls = db.collection("urls")
  //check if the url exists
  const exists = await urls.findOne({ shortUrl: shorturl })
  if (exists) {
    redirect(exists.url)
  }else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
}
  return <p>Post: {router.query.slug}</p>
}