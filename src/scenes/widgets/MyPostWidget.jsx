import React, { useState } from 'react';
import { EditOutlined, DeleteOutline } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FlexBetween from 'components/FlexBetween';
import Dropzone from 'react-dropzone';
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isimage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState('');
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreen = useMediaQuery('(min-width:1000px)');
  const { palette } = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  return <div></div>;
};

export default MyPostWidget;

