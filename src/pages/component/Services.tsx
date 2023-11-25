import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Services() {

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
            }}
        >
            <Container>
                <Grid item xs={12}>
                    <Grid container justifyContent={'center'} textAlign={'center'} display={'grid'} p={3}>
                        <Typography color={'error'}> WHAT WE SERVE </Typography>
                        <Typography variant='h6' sx={{ fontSize: '30px', fontWeight: '90px', }}>
                            Your Favourite Food<br />Delivery Partner
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" spacing={12} mb={7}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <Paper elevation={3} data-aos="fade-up"
                                    sx={{
                                        textAlign: 'center',
                                        height: 320,
                                        width: 320,
                                        borderRadius: 8,
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}>
                                    <Box p={5}>
                                        <img src='./images/Order food-pana 1.png' width={'65%'} />
                                        <Typography mt={2} variant='h6' gutterBottom sx={{ fontWeight: '90px' }}>
                                            Easy to use
                                        </Typography>
                                        <Typography sx={{ fontWeight: '10px' }}>
                                            You only need a few step ordering food
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}