import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#0E0F34',
        },
    },
});


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function PortfolioCard({titulo, descripcion, urlImg, urlApp}) {
    return (
        <Card
            sx={{ height: '100%',
                display: 'flex',
                flexDirection: 'column' }}>
            <CardMedia
                component="img"
                sx={{
                    pt: '5.25%',
                }}
                image={urlImg}
                alt="random"/>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {titulo}
                </Typography>
                <Typography>
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Link color="inherit" href={urlApp} target="_blank">
                    <Button size="small">Sitio Web</Button>
                </Link>
            </CardActions>
        </Card>
    );
}


function NavBar () {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        RM
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}


function Header () {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,}}>

            <Container maxWidth="sm">
                <Typography
                    component="h2"
                    variant="h2"
                    align="center"
                    color="#0E0F34"
                    gutterBottom>

                    PORTAFOLIO
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Presento en esta página algunas de las aplicaciones web que he
                    desarrollado. la mayoría de ellas no me pertenecen así que solo
                    presento de ellas solo una descripción. Si bien son pocas con el
                    tiempo ire agregando más de ellas.
                </Typography>
            </Container>
        </Box>
    );
}

function Body ({cards}) {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    {PortfolioCard(card)}
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}


function Footer () {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p">

                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
    );
}

export default function App ({cards}) {
    return (
        <>
            <NavBar/>
            <main>
                <Header/>
                <Body cards={cards}/>
            </main>
            <Footer/>           
        </>
    );
}