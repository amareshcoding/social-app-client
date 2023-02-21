import React from 'react';
import { Box } from '@mui/material';

const UserImage = ({
  image,
  size = '60px',
}) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        src={image? `https://mern-server-koe9.onrender.com/assets/${image}`:"/assets/user.png"}
        alt="User"
      />
    </Box>
  );
};

export default UserImage;
