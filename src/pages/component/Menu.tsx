import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFlip } from 'swiper/modules';
import { ButtonBase } from '@mui/material';

const MENU_DATA = [
  {
    image: "./images/burger.png",
    title: "Italian Burger",
    text: "Price"
  },
  {
    image: "./images/burger.png",
    title: "Italian Burger",
    text: "Price"
  },
  {
    image: "./images/burger.png",
    title: "Italian Burger",
    text: "Price"
  },
  {
    image: "./images/sandwich.png",
    title: "Italian Burger",
    text: "Price"
  },
  {
    image: "./images/sandwich.png",
    title: "Italian Burger",
    text: "Price"
  },
  {
    image: "./images/sandwich.png",
    title: "Italian Burger",
    text: "Price"
  },
]


export default function Menu() {
  return (
    <Box sx={{
      p:2,
      overflow: 'hidden',
      flexGrow: 1,
      color: 'white',
      height: '100%',
    }}
    >
      <Container >
      <Grid container spacing={2}  columns={{ xs: 8, sm: 6, md:12 }} mt={10} mb={10}>
        <Grid item xs={8} sm={3} md={6} mb={10}>
            <Typography color={'error'} data-aos="fade-up">
                OUR MENU
            </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: '500', lineHeight: "1.5" }} data-aos="fade-up">
            Menu That Always Make You Fall In Love
          </Typography>
          </Grid>
          <Grid item xs={8} sm={3} md={6} data-aos="fade-left" >
          <Swiper
        slidesPerView={2}
        spaceBetween={30}
        modules={[EffectFlip]}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
      >
        {MENU_DATA.map(
          ({image, title, text},index) =>(
            <SwiperSlide key={`slide-${index}`}>
<Stack sx={{ flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
      <Box sx={{ flexGrow: 1 }}>
        <img src={image} alt="" />
      </Box>
      <Box sx={{ flexGrow: 1 }} p={2} >
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </Box>
    </Stack>
            </SwiperSlide>
          )
          )}
      </Swiper>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
}