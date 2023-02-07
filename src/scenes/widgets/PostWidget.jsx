import React, { useState } from 'react';
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from 'store';

const PostWidget = ({
  _id,
  content,
  picturePath,
  userId,
  userName,
  userPicturePath,
  location,
  likes,
  comment,
}) => {
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(
      `https://mern-server-koe9.onrender.com/posts/${_id}/like`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPosts = await response.json();
    dispatch(setPost({ post: updatedPosts }));
  };
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={userId}
        name={userName}
        subtitle={location}
        userpicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: '1rem' }}>
        {content}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          style={{
            borderRadius: '0.75rem',
            marginTop: '0.75rem',
          }}
          src={`https://mern-server-koe9.onrender.com/assets/${picturePath}`}
          alt="PostImage"
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>

            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComment(!isComment)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comment.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {isComment && (
        <Box mt="0.5rem">
          {comment.map((cmt, i) => (
            <Box key={`${userName}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem' }}>
                {cmt}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
// friendId, name, subtitle, userpicturePath
