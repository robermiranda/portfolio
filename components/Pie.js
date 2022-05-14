import { Grid } from '@mui/material';
import About from './About';
import Portfolio from './Portfolio';
import Contacto from './Contacto';


export default function App ({ about, portfolio, contacto}) {
    return (
        <>
            <Grid item xs={12} md={4}>
                <About titulo={about.titulo} descripcion={about.descripcion}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfolio titulo={portfolio.titulo}
                    descripcion={portfolio.descripcion}
                    linkName={portfolio.linkName}
                    link={portfolio.link}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Contacto titulo={contacto.titulo}
                    descripcion={contacto.descripcion}
                    email={contacto.email}/>
            </Grid>
        </>
    );
}
