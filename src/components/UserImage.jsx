import React from 'react';
import { Box } from '@mui/material';

const UserImage = ({ image, size = '60px' }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        // src={`http://localhost:3001/assets/${image}`}
        src={`https://mern-server-koe9.onrender.com/assets/${image}`}
        alt="User"
      />
    </Box>
  );
};

export default UserImage;
