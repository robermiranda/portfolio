import aos from '../styles/Aos.module.css';
import Home from '../components/Home';
import { Grid } from "@mui/material";
import { data, about, contacto, portfolio, bgImageName } from '../data';


export default function App ({ cards, about, contacto, portfolio }) {

	const bgImgPath = `/image/${bgImageName}`;

	return (
		<Grid container>
            <Grid item xs={12}>
                <div className={`${aos.backgrounds} ${aos.overlay}`}>
                    <div className={`${aos.background}`}
                        style={{
                            backgroundImage: `url(${bgImgPath})`}}>
                    </div>
                </div>

                <Home cards={cards} about={about} contacto={contacto} portfolio={portfolio}/>
            </Grid>
		</Grid>
	)
}


export async function getStaticProps () {
    
    return {
        props: {
            cards: data,
            about,
            contacto,
            portfolio
        }
    }
}