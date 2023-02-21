import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from 'scenes/navbar';
import FriendListWidget from 'scenes/widgets/FriendListWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidgets';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');

  const getUser = async () => {
    const res = await fetch(
      `https://mern-server-koe9.onrender.com/users/${userId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="1rem 6%"
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
          <UserWidget userId={userId} />
          <Box m="1rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '45%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user?.picturePath} />

          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
