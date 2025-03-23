"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [generated, setgenerated] = useState(false)

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        seturl("")
        setshortUrl(""),
        console.log(result);
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }

  const handlechange = (e) => {
    seturl(e.target.value)
  }
  return (
    <div>
      <div className='mx-auto max-w-lg bg-blue-300 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs </h1>
        <div className='flex flex-col gap-5'>

          <input
            type="text"
            value={url}
            className='px-4 py-2 focus:outline-blue-600 rounded-md bg-white'
            placeholder='Enter your URL'
            onChange={e => { seturl(e.target.value) }} />

          <input type='text'
            value={shortUrl}
            className='px-4 py-2 focus:outline-blue-600 rounded-md bg-white'
            placeholder='Enter your custom URL'
            onChange={e => { setshortUrl(e.target.value) }} />
          <button onClick={generate} className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
        </div>
      {generated && <>
        <span className='font-bold text-lg'>Your short URL is : </span> <code> <Link href
          ={generated} target='_blank'>{generated}</Link>
        </code> </>} 
      </div>


    </div>
  )
}

export default Shorten
