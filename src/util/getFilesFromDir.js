import fs from 'fs';
import path from 'path';
import { readFile, readdir } from 'fs/promises';


/**
 * Entrega un array de strings
 * con el contenido de cada archivo
 * en el directorio especificado.
 * 
 * Cada archivo en el directorio debe tener extensión "md"
 */
export async function getFiles(directory) {
    
    let files;

    try {
        files = await readdir( path.join(process.cwd(), directory) );
    }
    catch (error) {
        console.error(`ERROR AL LEER EL DIRECTORY ${directory}`);
        throw error;
    }

    const datos = [];

    if (Array.isArray(files) && files.length > 0) {

        files.forEach(file => {
            const realSlug = file.replace(/\.md$/, '');
            const fullPath = path.join(directory, `${realSlug}.md`);
            const fileContent = fs.readFileSync(fullPath, 'utf8');
            datos.push(fileContent);
        });
    }

    return datos;
}


export async function getFile (directory, fileName) {
    
    let file = null;

    try {
        file = await readFile(path.join(process.cwd(), directory, fileName), 'utf-8');
    }
    catch (error) {
        console.error(`ERROR AL LEER EL ARCHIVO ${fileName}`);
        throw error;
    }
    
    return file;
}