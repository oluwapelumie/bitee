import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hero from './component/Hero';
import Menu from './component/Menu';
import Services from './component/Services';
import Review from './component/Review';
import Footer from './component/Footer';


export default function Home() {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Hero />
      <Services/>
      <Menu/>
      <Review/>
      <Footer/>
    </Box>
  );
}