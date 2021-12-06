import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';


function RmmCard (props) {

    const padd = '5px';

    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
        }}>
        <Card sx={{
            maxWidth: 345,
            paddingTop: padd,
            paddingBottom: padd,
            paddingLeft: padd,
            paddingRight: padd }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
        </Box>
    );
}


export default function App (props) {
    return (
        <Grid container item
            direction="column"
            alignItems={props.align}
            pt={{xs: 3, md: 10}}>

            <div data-aos={props.aos}
                data-aos-delay="100"
                data-aos-duration="500">

                <RmmCard
                  desc={props.msg.desc}
                  titulo={props.msg.titulo}/>
            </div>
        </Grid>
    );
}
