// pages/index.jsx
import React from 'react'
import Link from 'next/link'

function HomePage() {
 return (
 <div className='flex flex-col items-center justify-center h-screen wx-container bg-slate-100'>
    <h1 className='p-4 m-4 text-4xl font-bold text-white bg-black hover:bg-gray-600'>
        <Link href='https://medium.com/womenintechnology/next-js-the-ultimate-guide-to-ssr-and-ssg-in-react-245598d765c3' target='_blank'>Welcome to Next.js!</Link>
    </h1>
    <div className='text-black hover:text-gray-600'>
        <Link href='/posts' className='px-4 py-2 mx-auto text-white bg-blue-600 rounded hover:bg-blue-300'>view all posts</Link>
    </div>
 </div>
 );
}
export default HomePage;