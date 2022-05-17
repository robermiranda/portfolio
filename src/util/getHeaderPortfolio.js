import { parseMDFile } from "./parseMDFiles";


export default async function getHeader () {

    try {
        const directory = 'content/header'
        const { data, content } = await parseMDFile(directory, 'portfolio.md');

        return {
            titulo: data.titulo,
            desc: content.trim().replace('\n', ' ')
        }
    }
    catch(error) {
        console.log("ERROR AL OBTENER EL HEADER PARA LAS PÁGINAS SECUNDARIAS.");
        throw error;
    }
}
