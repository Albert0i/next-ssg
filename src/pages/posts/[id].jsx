// pages/posts/[id].jsx
import React from 'react';
import SinglePost from '@/components/SinglePost';

function PostPage({ post }) {
  return <SinglePost post={post} />
}

export async function getStaticPaths() {
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