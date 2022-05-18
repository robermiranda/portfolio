import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function PortfolioCard({titulo, descripcion, urlImg, urlApp}) {
    return (
        <Card
            sx={{ height: '100%',
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                }}}>
            <CardMedia
                component="img"
                sx={{
                    width: {
                        xs: 500,
                        md: 250,
                        lg: 200
                    }
                }}
                image={urlImg}
                alt={titulo}/>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                    {titulo}
                </Typography>
                <Typography>
                    {descripcion}
                    <Link color="inherit" href={urlApp} target="_blank">
                        <Button size="small">Sitio Web</Button>
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
}


export default function Body ({cards}) {
    return (
        <Container sx={{ py: 8, px: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card.id} xs={12}>
                    {PortfolioCard(card)}
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}
