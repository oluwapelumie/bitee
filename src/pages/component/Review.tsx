import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Button, Grid, IconButton, Rating, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFlip } from 'swiper/modules';
import Image from 'next/image';

const REVIEW_DATA = [
  {
    user: "Remy Sharp",
    description: "CEO",
    text: "Bitees is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”."
  },
  {
    user: "Remy Sharp",
    description: "CEO",
    text: "Bitees is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”."
  },
]


export default function Review() {
  const [value] = React.useState<number | null>(4);
  return (
    <Box sx={{
      p: 2,
      overflow: 'hidden',
      flexGrow: 1,
      color: 'white',
      height: '100%',
    }}
    >
      <Container >
        <Grid container spacing={2} columns={{ xs: 8, sm: 6, md: 12 }} mt={10} mb={10}>
          <Grid item xs={8} sm={3} md={6} mb={10}>
            <Box borderRadius={10} width={250} height={400} bgcolor={'white'} data-aos="fade-right" >
              <Image alt='' src='/images/chef.png' width={300} height={400} />
            </Box>
          </Grid>
          <Grid item xs={8} sm={3} md={6}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography color={'error'} data-aos="fade-left" >
                WHAT THEY SAY
              </Typography>
              <Typography fontWeight={500} variant='h3' mt={2} data-aos="fade-left" >
                What Our Customers Say About Us
              </Typography>
            </Box>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[EffectFlip]}
            >
              {REVIEW_DATA.map(
                ({ text, user, description }, index) => (
                  <SwiperSlide key={`slide-${index}`} className='text-slide' >
                    <Stack sx={{ flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }} data-aos="fade-left" >
                      <Box sx={{ flexGrow: 1 }} mt={2} >
                        <Typography>{text}</Typography>
                        <Stack direction="row" spacing={2} mt={2}>
                          <Avatar alt="Remy Sharp"> A </Avatar>
                          <Stack direction="column" >
                            <Typography>{user}</Typography>
                            <Typography>{description}</Typography>
                          </Stack>
                        </Stack>
                        <Box mt={5} >
                          <Rating name="read-only" value={value} readOnly />
                        </Box>
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