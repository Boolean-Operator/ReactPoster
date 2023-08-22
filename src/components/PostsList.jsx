// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

export default function PostsList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsLoading(false);
  //   }

  //   fetchPosts();
  // }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {/* {onShowModal ? (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null} */}
      {/* {!isLoading &&  */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {/* {!isLoading &&  */}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are not posts, yet.</h2>
          <p>
            Click the [New Post] button in the header above to start adding
            some.{' '}
          </p>
        </div>
      )}
      {/* {isLoading && (
        <div
          style={{
            textAlign: 'center',
            color: 'lightsalmon',
            fontStyle: 'italic',
          }}
        >
          <h3>One moment Michael, I am loading the posts now...</h3>
        </div>
      )} */}
    </>
  );
}
