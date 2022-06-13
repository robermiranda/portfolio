import getCards from '../../src/util/getCardsPortfolio';
import getFooter from '../../src/util/getFooter';
import getHeader from '../../src/util/getHeaderPortfolio';
import BodyWrapper from '../../components/BodyWrapper';
import Body from '../../components/portfolio/Body';


export default function App ({cards, footer, header}) {
    
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
                footer: await getFooter(),
                header: await getHeader()
            }
        }
    }
    catch(error) {
        console.log('ERROR AL OBTENER LAS CARDS PARA EL PORTFOLIO EN EL ARCHIVO: pages/portfolio/index.js');
        console.error(error.message);
        throw error;
    }
}