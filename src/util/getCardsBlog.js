import { parseMDFiles } from './parseMDFiles';
import { cardsPortfolioDirectory } from '../../data';

let c = 0;

function getCard ({data}) {

    return {
        id: ++c,
        titulo: data.titulo,
        tag: data.tag,
        fecha: data.fecha,
        descripcion: data.descripcion
    }
}

export default async function getCards () {
    try {
        const dataCards = await parseMDFiles(cardsPortfolioDirectory);
        return dataCards.map(dc => getCard(dc));
    }
    catch(error) {
        console.error('ERROR AL OBTENER LAS CARDS DEL PORTFOLIO');
        throw error;
    }
}
