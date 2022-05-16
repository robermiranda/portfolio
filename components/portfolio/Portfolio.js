import { Link, Typography } from '@mui/material';


export default function App ({ titulo, linkName, link, descripcion }) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {titulo}
            </Typography>

            <Typography align="justify" variant="body2" gutterBottom>
                {descripcion}
                {' '}
                <Link rel="noopener"
                    target="_blank"
                    href={link}>
                    
                    {linkName}
                </Link>
                <br/>
            </Typography>
        </>
    );
}
