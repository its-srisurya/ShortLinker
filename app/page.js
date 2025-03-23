import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <main className="bg-blue-300">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            <span className="text-white ">Short</span>Linker
          </p>
          <p className="px-32">
          Shorten your links with ease and share them with the world. With our tool, you can quickly transform long URLs into concise, shareable links that are easy to manage and track.
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>
      </section>
    </main>
    </>
  );
}
