import { parseMDFile } from "./parseMDFiles";

const directory = 'content';


export async function aboutME () {

    try {
        const { data, content } = await parseMDFile(directory, 'about-me.md');

        const titulo = data.titulo;

        const descripcion = [];

        let c = 0;

        content
        .split('\n\n').filter(parrafo => parrafo.length > 0)
        .map(parrafo => parrafo.trim().replace('\n', ' '))
        .forEach(parrafo => {
            descripcion.push({
                id: c++,
                parrafo
            });
        });

        return {titulo, descripcion};
    }
    catch(error) {
        throw error;
    }
}


export async function contacto () {

    try {
        const { data, content } = await parseMDFile(directory, 'contacto.md');

        return {
            titulo: data.titulo,
            email: data.email,
            descripcion: content.trim().replace('\n', '')
        }    
    }
    catch(error) {
        throw error;
    }
}


export async function portfolio () {

    try {
        const { data, content } = await parseMDFile(directory, 'portfolio.md');

        return {
            titulo: data.titulo,
            tituloApp: data.tituloApp,
            link: data.link,
            descripcion: content.trim().replace('\n', '')
        }
    }
    catch(error) {
        throw error;
    }
}