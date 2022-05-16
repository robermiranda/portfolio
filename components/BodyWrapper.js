import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';


const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#0E0F34',
        },
    },
});


function NavBar ({urlWebsite}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link color="inherit" href={urlWebsite}>
                            {'RM'}
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}


function Header ({titulo, desc}) {
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

                    {titulo}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    {desc}
                </Typography>
            </Container>
        </Box>
    );
}


export default function App ({ header, children }) {

    return (
        <>
            <NavBar urlWebsite={"localhost:3000"}/>
            <main>
                <Header titulo={header.titulo} desc={header.desc}/>
                {children}
            </main>
            <Footer/>
        </>
    );
}