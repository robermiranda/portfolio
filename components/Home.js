import React,  { useEffect } from 'react';
import AOS from 'aos';
import { Grid } from '@mui/material';
import style from '../styles/Aos.module.css';
import Encabezado from './Encabezado';
import Body from './Body';
import Pie from './Pie';


export default function App ({ about, portfolio, contacto, cards}) {

    useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);


    return (
        <Grid>
            <Grid item container
                spacing={4}
                direction="column"
                px={{xs: 1, md: 20}}
                pb={{xs: 1, md: 5}}>

                <Grid item xs={12}>
                    <Encabezado/>
                </Grid>
                <Grid item xs={12}>
                    <Body cards={cards}/>
                </Grid>
            </Grid>
            <Grid item container
                columnSpacing={6}
                px={{xs: 2, md: 15}}
                pt={{xs: 3, md: 8}}
                xs={12}
                className={`${style.section} ${style.sectionmore}`}>

                <Pie about={about} contacto={contacto} portfolio={portfolio}/>
            </Grid>
        </Grid>
    );
}