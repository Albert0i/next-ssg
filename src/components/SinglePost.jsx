import React from 'react'
import Link from 'next/link'

const SinglePost = ({ post }) => {
  console.log('===> singlePost, id=', post.id)

  return (
    <div className='h-screen p-4 bg-slate-100'>
      <h1 className='text-4xl font-bold text-center'>Post</h1>
      
      <p>{post.id}</p>
        <p className='font-bold'>{post.title}</p>
        <p>{post.body}</p>
        <div className='mt-4'>
          <Link href='/posts' className='px-4 mx-2 text-white bg-blue-600 rounded hover:bg-blue-300'>Back</Link>

          <Link href='/' className='px-4 mx-2 text-white bg-blue-600 rounded hover:bg-blue-300'>Home</Link>
        </div>          
    </div>
  )
}

export default SinglePost