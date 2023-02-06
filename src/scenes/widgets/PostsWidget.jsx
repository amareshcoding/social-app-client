import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from 'store';
import PostWidget from './PostWidget';

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(
      `https://mern-server-koe9.onrender.com/posts`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `https://mern-server-koe9.onrender.com/posts/${userId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {posts.map(({ _id, content, picturePath, user, likes, comment }) => (
        <PostWidget
          key={_id}
          _id={_id}
          content={content}
          picturePath={picturePath}
          userId={user._id}
          userName={`${user.firstName} ${user.lastName}`}
          userPicturePath={user.picturePath}
          location={user.location}
          likes={likes}
          comment={comment}
        />
      ))}
    </>
  );
};

export default PostsWidget;
