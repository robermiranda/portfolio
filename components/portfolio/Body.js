import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
                flexDirection: 'column' }}>
            <CardMedia
                component="img"
                sx={{
                    pt: '5.25%',
                }}
                image={urlImg}
                alt="random"/>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {titulo}
                </Typography>
                <Typography>
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Link color="inherit" href={urlApp} target="_blank">
                    <Button size="small">Sitio Web</Button>
                </Link>
            </CardActions>
        </Card>
    );
}


export default function Body ({cards}) {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    {PortfolioCard(card)}
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}
