import matter from 'gray-matter';
import { getFile, getFiles } from './getFilesFromDir';


/**
 * Regresa un arreglo de datos con la sig. estructura:
 * {
 *      titulo: '',
 *      seccion: '',
 *      parrafos: ['','']
 * }
 */
export function parseMDFiles (directory) {
    
    const files = getFiles(directory);

    const datos = [];

    files.forEach(file => {

        const dato = {};

        const { data, content } = matter(file);

        const parrafos = content.split('\n\n').filter(parrafo => parrafo.length > 0);
        
        dato['titulo'] = data.titulo;
        dato['seccion'] = data.seccion;
        dato['parrafos'] = parrafos.map(parrafo => parrafo.trim().replace('\n', ' '));

        datos.push(dato);
    });


    return datos;
}

export function parseMDFile (directory, fileName) {

    const file = getFile(directory, fileName);

    return matter(file);

}