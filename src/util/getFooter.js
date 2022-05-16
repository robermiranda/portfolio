import { parseMDFile } from "./parseMDFiles";
import { footerDirectory as directory } from "../../data";


export default async function getFooter () {

    try {
        const { data, content } = await parseMDFile(directory, 'footer.md');

        return {
            titulo: data.titulo,
            desc: content,
            urlWebsite: data.urlWebsite,
            siteName: data.siteName
        }
    }
    catch(error) {
        console.log("ERROR AL OBTENER EL FOOTER PARA LAS PÁGINAS SECUNDARIAS.");
        throw error;
    }
}
