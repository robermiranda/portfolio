import { parseMDFiles } from './parseMDFiles';

import { secciones } from '../../data';


export default async function getSecciones () {
    
    let cards;
    
    try {
        cards = await parseMDFiles('content/cards');
    }
    catch(error) {
        console.error('ERROR AL OBTENER LAS SECCIONES\n', error);
    }

    if (Array.isArray(cards) && cards.length > 0) {
        return secciones.map(seccion => {
            const dato = {};
            dato['nombreSeccion'] = seccion;
            const data = [];
            cards.forEach(card => {
                if (card.seccion === seccion) {
                    data.push({
                        titulo: card.titulo,
                        desc: card.parrafos.join(' ')
                    });
                    dato['data'] = data;
                }
            });

            return dato;
        });
    }
    else return [];
}
