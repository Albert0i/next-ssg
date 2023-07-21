// pages/posts/[id].jsx
import React from 'react';
import SinglePost from '@/components/SinglePost';

function PostPage({ post }) {
  return <SinglePost post={post} />
}

export async function getStaticPaths() {
  console.log('===> getStaticPaths')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('===> getStaticProps')

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
/*
  Next.js: The Ultimate Guide to SSR and SSG in React
  https://medium.com/womenintechnology/next-js-the-ultimate-guide-to-ssr-and-ssg-in-react-245598d765c3

  NextJS | getStaticProps
  https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

  NextJS | getStaticPaths
  https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths

*/