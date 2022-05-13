import { parseMDFile } from "./parseMDFiles";

const directory = 'content';

export function aboutME () {
    const { data, content } = parseMDFile(directory, 'about-me.md');

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

export function contacto () {
    const { data, content } = parseMDFile(directory, 'contacto.md');

    return {
        titulo: data.titulo,
        email: data.email,
        descripcion: content.trim().replace('\n', '')
    }
}

export function portfolio () {
    const { data, content } = parseMDFile(directory, 'portfolio.md');

    return {
        titulo: data.titulo,
        tituloApp: data.tituloApp,
        link: data.link,
        descripcion: content.trim().replace('\n', '')
    }
}