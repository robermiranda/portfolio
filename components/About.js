import { Link, Typography } from '@mui/material';

export default function App (props) {

    const link = <Link rel="noopener"
        target="_self"
        href={'/about'}>
        
        {'segir leyendo...'}
    </Link> 
    
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {props.titulo}
            </Typography>
            {
                <Typography align="justify" variant="body2" gutterBottom>
                    {props.descripcion[0].parrafo}
                    {' '}
                    {link}
                </Typography>    
            }
        </>
    ); 
}