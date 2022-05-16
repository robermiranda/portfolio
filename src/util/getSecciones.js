import { parseMDFiles } from './parseMDFiles';
import { cardsDirectory, secciones } from '../../data';


function getCard ({data, content}) {
    const dato = {};

    const parrafos = content.split('\n\n').filter(parrafo => parrafo.length > 0);
    
    dato['titulo'] = data.titulo;
    dato['seccion'] = data.seccion;
    dato['parrafos'] = parrafos.map(parrafo => parrafo.trim().replace('\n', ' '));

    return dato;
}


export default async function getSecciones () {
    
    let cards;

    try {
        const dataCards = await parseMDFiles(cardsDirectory);
        cards = dataCards.map(dc => getCard(dc));
    }
    catch(error) {
        console.error('ERROR AL OBTENER LAS SECCIONES');
        throw error;
    }

    if (Array.isArray(cards) && cards.length > 0) {
        return secciones.filter(seccion => seccion.length > 0).map(seccion => {
            const dato = {};
            const data = [];
            cards.forEach(card => {
                if (card.seccion === seccion) {
                    data.push({
                        titulo: card.titulo,
                        desc: card.parrafos.join(' ')
                    });
                    dato['data'] = data;
                    dato['nombreSeccion'] = seccion;
                }
            });
            return dato;
        })
        .filter(obj => Object.keys(obj).length > 0 && obj.constructor === Object);
    }
    else throw new Error('ERROR. NO SE OBTUVO EL CONTENIDO DE LAS SECCIONES.');
}
