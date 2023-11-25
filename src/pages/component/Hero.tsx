import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Banner from './Banner/banner';
import Header from './Header/header';

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Header />
      <Banner />
    </Box>
  );
}