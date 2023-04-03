import React, { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from 'store';
import WidgetWrapper from 'components/WidgetWrapper';
import Friend from 'components/Friend';

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const { palette } = useTheme();

  const getFriends = async () => {
    const response = await fetch(
      `https://mern-server-koe9.onrender.com/users/${userId}/friends`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper >
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: '1.5rem' }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={`${friend._id}-${Math.random() * 100}`}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.location}
            userpicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
