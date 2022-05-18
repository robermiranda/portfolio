import { parseMDFiles } from './parseMDFiles';
import { cardsPortfolioDirectory } from '../../data';

let c = 0;

function getCard ({data, content}) {

    const descripcion = [];

    let counterCard = 0;

    content
    .split('\n\n').filter(parrafo => parrafo.length > 0)
    .map(parrafo => parrafo.trim().replace('\n', ' '))
    .forEach(parrafo => {
        descripcion.push({
            id: counterCard++,
            parrafo
        });
    });

    return {
        id: ++c,
        titulo: data.titulo,
        urlImg: data.urlImg,
        urlApp: data.urlApp,
        descripcion
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
