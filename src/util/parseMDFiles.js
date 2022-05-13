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
export async function parseMDFiles (directory) {
    
    let files;
    
    try {
        files = await getFiles(directory);
    }
    catch(error) {
        throw error;
    }

    if (Array.isArray(files) && files.length > 0) {
    
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
    else throw new Error(`ERROR. NO SE OBTUVIERON LOS ARCHIVOS DEL DIRECTORIO "${directory}"`);
}


export async function parseMDFile (directory, fileName) {

    try {
        const file = await getFile(directory, fileName);
        const {data, content} = matter(file);

        return {data, content};
    }
    catch(error) {
        console.error(`ERROR WHILE PARSING FRONT MATTER IN FILE ${fileName}`);
        throw error;
    }
}