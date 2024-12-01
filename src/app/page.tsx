
import React from 'react'
import Contact from '@/Contact/Contact'
import Link from 'next/link';
import Image from 'next/image';
function page() {
  return (
    <div className='bg-black min-h-screen'>
    
<nav className='w-full h-14 bg-indigo-400 flex justify-between px-4 md:px-4 items-center'>
  <div className='text-2xl text-indigo-700 font-bold'>PW Skills </div>
  <ul className='md:flex hidden font-semibold'>
  <li className='mx-[10px] cursor-pointer'>Home</li>
  <li className='mx-[10px] cursor-pointer' >About Us</li>
  <li  className='mx-[10px] cursor-pointer'>
    <Link href='#contact'> Contact Us</Link>
    </li>
  </ul>
  <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded
  font-bold cursor-pointer'>Login/signup</div>
  <div className='md:hidden'>
    <a className="text-4xl" href="#">&#8801;</a>
  </div>
</nav>
{/* navbar end here */}

{/* img section start here */}
<header className="w-full h-auto">
{/* <img className='w-full hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"></img> */}
<Image
          className='w-full hidden md:block'
          src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg'
          alt='Banner for web view'
          width={1200}
          height={400}
        />
        <Image
          className='w-full md:hidden'
          src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg'
          alt='Banner for mobile view'
          width={600}
          height={300}
        />
{/* <img className='w-full md:hidden' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"></img> */}
</header>
{/* img section end here */}

{/* our student section */}

<div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
  <div className='w-full h-auto flex flex-wrap flex-col items-center'>
  <p className='text-indigo-700 font-bold text-3xl md:text-4xl text-center'>&quot;Pure Hardwork, No Shortcuts!&quot;</p>


    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12'></div>
  </div>
</div>


<Contact/>

</div>

    
  )
}

export default page