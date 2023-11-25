import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Link from 'next/link';

export default function Footer() {

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                bgcolor: "white",
                color:"black"
            }}
        >
            <Container >
                    <Grid container p={2} justifyContent="center" xs={12} >
                        <Grid container justifyContent={'center'} xs={10} spacing={1}  >
                        <Grid item>
                        <Link href={''}>
                            Home
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={''}>
                            About
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={''}>
                            Delivery
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={''}>
                            Partners
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href={''}>
                            Contact
                        </Link>
                        </Grid>
                        </Grid>
                    </Grid>
            </Container>
        </Box>
    );
}