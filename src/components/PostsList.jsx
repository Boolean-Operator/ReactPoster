// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are not posts, yet.</h2>
          <p>
            Click the [New Post] button in the header above to start adding
            some.{' '}
          </p>
        </div>
      )}
    </>
  );
}
