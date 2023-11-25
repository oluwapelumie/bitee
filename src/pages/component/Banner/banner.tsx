import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Banner() {
  return (
    <Box sx={{
      p:2,
      overflow: 'hidden',
      flexGrow: 1,
      color: 'white',
      height: '100%',
      backgroundColor: '#ad2102'
    }}
    >
      <Container >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} mt={15} mb={5}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: '500', lineHeight: "1.5" }} data-aos="fade-up">
            The number <span>#one</span> Choice for you Hunger Solution
          </Typography>
          <Typography gutterBottom sx={{ lineHeight: "2" }} data-aos="fade-up" >The number one food vendor you are looking for to quench
            your hunger or just want to taste delicious thing
          </Typography>
          <Grid>
          <Button data-aos="fade-up" variant="contained" size="large" sx={{ borderRadius: '20px', backgroundColor: '#FFE500', color: 'black', marginTop:'45px', }}>ORDER NOW</Button>
          </Grid>
          <Stack direction={'row'} mt={8} data-aos="fade-up" >
            <IconButton>
            <TwitterIcon sx={{color:'white'}}/>
            </IconButton>
            <IconButton>
            <Facebook sx={{color:'white'}}/>
            </IconButton>
            <IconButton>
            <InstagramIcon sx={{color:'white'}}/>
            </IconButton>
          </Stack>
          </Grid>
          <Grid item mt={5} data-aos="zoom-out-left" >
          <img src='./images/hero.png' width={700}  />
          </Grid>
        </Grid>
      </Grid>
      </Container>

    </Box>
  );
}