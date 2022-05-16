import matter from 'gray-matter';
import { getFile, getFiles } from './getFilesFromDir';


/**
 * Regresa un arreglo con los datos obtenidos de los archivos
 * md ubicados en el directorio dado.
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
            const { data, content } = matter(file);
            datos.push({data, content});
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