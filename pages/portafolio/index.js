import getCards from '../../src/util/getCardsPortfolio';
import BodyWrapper from '../../components/BodyWrapper';
import Body from '../../components/portfolio/Body';


export default function App ({cards}) {
    return (
        <BodyWrapper>
            <Body cards={cards}/>
        </BodyWrapper>

    );
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