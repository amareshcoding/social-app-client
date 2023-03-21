import React, { useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="27px" color="primary">
          SOCIAL APP
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen ? '50%' : '93%'}
        p="2rem"
        m="1.5rem auto"
        borderRadius="0.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome! to Social Application
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
