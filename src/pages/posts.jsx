// pages/posts.jsx
import React from 'react';
import PostList from '@/components/PostList';

function Posts({ posts }) {
  return <PostList posts={posts} />
}

export async function getStaticProps() {
  console.log('===> getStaticProps')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60 // Regenerate the page every 60 seconds
  };
}

export default Posts;
/*
  Next.js: The Ultimate Guide to SSR and SSG in React
  https://medium.com/womenintechnology/next-js-the-ultimate-guide-to-ssr-and-ssg-in-react-245598d765c3

  NextJS | getStaticProps
  https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
  
  Incremental Static Regeneration (ISR) In Next.Js
  https://blog.openreplay.com/incremental-static-regeneration-in-nextjs/
  
*/