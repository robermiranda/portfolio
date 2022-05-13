import aos from '../styles/Aos.module.css';
import Home from '../components/Home';
import { Grid } from "@mui/material";
import { bgImageName } from '../data';
import getSecciones from '../src/util/getSecciones';
import { aboutME, contacto, portfolio } from '../src/util/aboutContent';


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
    
    try {
        const secciones = await getSecciones();
        let count = 0;
        let seccionCount = 0;
        for (const s of secciones) {
            s.id = ++seccionCount;
            for (const d of s.data) {
                d.id = ++count;
            }
        }

        return {
            props: {
                cards: secciones,
                about: await aboutME(),
                contacto:  await contacto(),
                portfolio: await portfolio()
            }
        }
    }
    catch(error) {
        console.log('ERROR AL EJECUTAR pages/index.js');
        throw error;
    }
}