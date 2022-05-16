import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function getProps () {
    return {
        titulo: "Roberto Miranda",
        desc: "Desarrollador Fullstack",
        urlWebsite: "localhost:3000",
        siteName: "romix systems"
    }
}


function Copyright({urlWebsite, siteName}) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={urlWebsite}>
                {siteName}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Footer () {

    const { titulo, desc, urlWebsite, siteName } = getProps();
    
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                {titulo}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p">

                {desc}
            </Typography>
            <Copyright urlWebsite={urlWebsite} siteName={siteName}/>
        </Box>
    );
}
