import { parseMDFiles } from './parseMDFiles';

const cards = parseMDFiles('content/cards');

const secciones = ['fullstack', 'experiencia'];


export default function getSecciones () {
    
    
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
