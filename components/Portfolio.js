import { Link, Typography } from '@mui/material';

export default function App ({ titulo, data }) {
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
