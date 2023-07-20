import React from 'react'
import Link from 'next/link'

const PostList = ({ posts }) => {
    console.log('===> PostList, length=', posts.length)

    return (
        <div className='h-auto p-4 bg-slate-100'>
            <h1 className='text-4xl font-bold text-center'>All Posts</h1>
            
            <ul>
            {posts.map((post) => (
                <li key={post.id} className='my-2 hover:bg-slate-200'>
                {post.id}. <Link href={ `/posts/${post.id}` } >{post.title}</Link>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default PostList