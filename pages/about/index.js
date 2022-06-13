import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import getFooter from '../../src/util/getFooter';
import BodyWrapper from '../../components/BodyWrapper';
import { parseMDFile } from "../../src/util/parseMDFiles";
import imageRoberto from "../../public/image/RobertoObalo.png";


export default function App ({footer, content}) {

    const header = {
        titulo: content.titulo,
        desc: null
    }

    return (
        <BodyWrapper header={header} footer={footer}>
            
            <Grid container justifyContent="center" spacing={4} sx={{px:{xs:2, md: 4, lg: 12}}}>
                <Grid item>
                    <Image src={imageRoberto} alt="Roberto Miranda"/>
                </Grid>
                <Grid item xs={12}>
                    {
                        content.desc
                        .split('\n\n').filter(parrafo0 => parrafo0.length > 0)
                        .map((parrafo, index) => 
                            <Typography key={index}
                                gutterBottom
                                display="block"
                                pb={1}
                                align="justify"
                                variant="body1">

                                {parrafo}
                            </Typography>
                        )
                    }
                </Grid>
            </Grid>
        </BodyWrapper>
    );
}

export async function getStaticProps () {
    try {
        return {
            props: {
                footer: await getFooter(),
                content: await getContent(),
                header: {
                    titulo: 'About me',
                    desc: null
                }
            }
        }
    }
    catch(error) {
        console.log('ERROR AL OBTENER LAS CARDS PARA EL PORTFOLIO EN EL ARCHIVO: pages/portfolio/index.js');
        console.error(error.message);
        throw error;
    }
}

async function getContent () {

    try {
        const { data, content } = await parseMDFile('/pages/about', 'index.md');

        return {
            titulo: data.titulo,
            desc: content,
            urlImage: data.urlImg,
        }
    }
    catch(error) {
        console.log("ERROR AL OBTENER EL FOOTER PARA LAS PÁGINAS SECUNDARIAS.");
        throw error;
    }
}
