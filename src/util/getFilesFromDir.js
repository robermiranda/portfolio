import fs from 'fs';
import path from 'path';

/**
 * Entrega un array de strings
 * con el contenido de cada archivo
 * en el directorio especificado.
 * 
 * Cada archivo en el directorio debe tener extensión "md"
 */
export function getFiles(directory) {
    
    const files = fs.readdirSync( path.join(process.cwd(), directory) );

    const datos = [];

    files.forEach(file => {

        const realSlug = file.replace(/\.md$/, '');

        const fullPath = path.join(directory, `${realSlug}.md`);

        const fileContent = fs.readFileSync(fullPath, 'utf8');

        datos.push(fileContent);
    });

    return datos;
}


export function getFile (directory, fileName) {
    const fileContent = fs.readFileSync(path.join(process.cwd(), directory, fileName), 'utf-8');
    return fileContent;
}