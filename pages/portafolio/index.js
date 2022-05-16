import getCards from '../../src/util/getCardsPortfolio';
import getFooter from '../../src/util/getFooter';
import BodyWrapper from '../../components/BodyWrapper';
import Body from '../../components/portfolio/Body';


export default function App ({cards, footer}) {
    
    const header = {
        titulo: "PORTAFOLIO",
        desc: `Presento en esta página algunas de las aplicaciones web que he
        desarrollado. la mayoría de ellas no me pertenecen así que solo
        presento de ellas solo una descripción. Si bien son pocas con el
        tiempo ire agregando más de ellas.`
    }

    return (
        <BodyWrapper header={header} footer={footer}>
            <Body cards={cards}/>
        </BodyWrapper>

    );
}


export async function getStaticProps () {
    try {
        return {
            props: {
                cards: await getCards(),
                footer: await getFooter()
            }
        }
    }
    catch(error) {
        console.log('ERROR AL OBTENER LAS CARDS PARA EL PORTFOLIO EN EL ARCHIVO: pages/portfolio/index.js');
        console.error(error.message);
        throw error;
    }
}