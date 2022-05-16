import Gallery from '../../components/PortfolioGalery';
import getCards from '../../src/util/getCardsPortfolio';


export default function App ({ cards }) {
    return <Gallery cards={cards}/>
}

export async function getStaticProps () {
    try {
        return {
            props: {
                cards: await getCards()
            }
        }
    }
    catch(error) {
        console.log('ERROR AL OBTENER LAS CARDS PARA EL PORTFOLIO EN EL ARCHIVO: pages/portfolio/index.js');
        console.error(error.message);
    }
}