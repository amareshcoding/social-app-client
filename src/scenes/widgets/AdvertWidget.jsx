import React from 'react';
import { Typography, useTheme } from '@mui/material';
import WidgetWrapper from 'components/WidgetWrapper';
import FlexBetween from 'components/FlexBetween';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        //    src={`https://mern-server-koe9.onrender.com/assets/advert_image.jpeg`}
        src="https://static.toiimg.com/photo/msid-81686879/81686879.jpg"
        alt="Advert"
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main}>Masai School</Typography>
        <Typography color={medium}>masaischool.com</Typography>
      </FlexBetween>

      <Typography color={medium} m="0.5rem 0">
        Your pathway to start a tech career without any prior experience in
        coding with zero upfront payment.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
