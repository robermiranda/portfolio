import BodyWrapper from '../components/BodyWrapper';


export default function App () {
    
    const footer = {
        titulo: "Roberto Miranda",
        urlWebsite: "/",
        siteName: "romix systems"
    }

    const header = {
        titulo: "404",
        desc: "PÁGINA NO ENCONTRADA"
    }

    return (
        <BodyWrapper header={header} footer={footer}>
            <></>
        </BodyWrapper>
    );
}