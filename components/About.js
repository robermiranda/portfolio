import { Typography } from '@mui/material';

export default function App (props) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {props.titulo}
            </Typography>
            {
                props.descripcion.map(desc =>
                    <Typography key={desc.id} align="justify" variant="body2" gutterBottom>
                        {desc.parrafo}
                        <br/>
                    </Typography>        
                )
            }
        </>
    ); 
}