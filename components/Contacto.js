import { Typography } from '@mui/material';
import Link from 'next/link'

export default function App ({ titulo, descripcion, email, github, linkedin}) {
    return (
        <>
            <Typography align="center" variant="h6" gutterBottom>
                {titulo}
            </Typography>
            <Typography align="left" variant="body2" gutterBottom>
                <Link href={linkedin}>
                    <a target='_blank'>Linkedin</a>
                </Link>
            </Typography>
            <Typography align="left" variant="body2" gutterBottom>
                <Link href={github}>
                    <a target='_blank'>Github</a>
                </Link>
            </Typography>
            <Typography align="left" variant="body2" gutterBottom>
                {email}
            </Typography>
        </>
    );
}