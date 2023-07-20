// pages/posts.jsx
import React from 'react';
import PostList from '@/components/PostList';

function Posts({ posts }) {
  return <PostList posts={posts} />
}

export async function getServerSideProps() {
  console.log('===> getServerSideProps')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;