import React from 'react';
import { Box } from '@mui/material';

const UserImage = ({
  image = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  size = '60px',
}) => {
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
