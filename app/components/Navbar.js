import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-14 flex justify-between px-3 items-center bg-[#357DED] text-white'>
        <div className="logo font-bold text-2xl ">
            Short<span className='text-black'>Linker</span>
            </div>

      <ul className='flex space-x-4 m-2  items-center'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/shorten'}>Shorten</Link>
        <Link href={'/contact'}>Contact Us</Link>
        <li className='flex items-center justify-center gap-2 '>
        <Link href={'/generate'}><button className='bg-[#fff] text-black rounded-lg p-2 py-1 font-bold shadow-lg'> Try now</button></Link>
        <Link href={'https://github.com/its-srisurya/'} ><button className='bg-[#fff] text-black rounded-lg p-2 py-1 font-bold shadow-lg'> GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
