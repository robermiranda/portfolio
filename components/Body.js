import { Grid } from '@mui/material';
import s from '../styles/Aos.module.css';
import Card from './Card';


export default function App ({ cards }) {
    
    let count = 1;
    
    return cards.map(card =>
        <Grid key={card.id} item pt={{xs: 5, md: 10}} className={`${s.section} section--code`}>
            <h2 className={s.sectiontitle}>{card.nombreSeccion}</h2> 
            {
                card.data.map(data =>
                    <Card key={data.id}
                        msg={{
                            titulo: data.titulo,
                            desc: data.desc
                        }}
                        align={++count%2 === 0 ? "flex-start" : "flex-end"}
                        aos="zoom-in-up"/>    
                )
            }
        </Grid>
    )
}