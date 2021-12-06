import { Typography } from '@mui/material';

export default function App ({ titulo, descripcion, email}) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {titulo}
            </Typography>
            <Typography align="justify" variant="body2" gutterBottom>
                {descripcion}
            </Typography>
            <Typography align="left" variant="body2" gutterBottom>
                {email}
            </Typography>
        </>
    );
}