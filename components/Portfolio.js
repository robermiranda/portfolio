import { Link, Typography } from '@mui/material';

export function AppCopia ({ titulo, data }) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {titulo}
            </Typography>
            {
                data.map(x =>
                    <Typography key={x.id} align="justify" variant="body2" gutterBottom>
                        <Link rel="noopener"
                            target="_blank"
                            href={x.link}>
                            
                            {x.titulo}
                        </Link>
                        {' ' + x.descripcion}
                        <br/>
                    </Typography>
                )
            }
        </>
    );
}

export default function App ({ titulo, tituloApp, link, descripcion }) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {titulo}
            </Typography>

            <Typography align="justify" variant="body2" gutterBottom>
                <Link rel="noopener"
                    target="_blank"
                    href={link}>
                    
                    {tituloApp}
                </Link>
                {' '}
                {descripcion}
                <br/>
            </Typography>
        </>
    );
}
