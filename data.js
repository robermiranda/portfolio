const secciones = [
    {
        nombreSeccion: "EXPERIENCIA",
        data : [
            {
                titulo: "Más de 10 Años de Expericencia",
                desc: `Empezando como programador php en el 2011 ha colaborado
                    en distintos proyectos asumiendo roles como desarrollador
                    y lider de proyecto. Dispuesto a trabajar en equipo mediante
                    metodologías ágiles (scrum) y predisposición al dialogo.`,
            },
            {
                titulo: "Sector Gobierno",
                desc: `7 años de trabajo en distintas entidades del
                    gobierno de la CDMX. Trabajó en la digitalización de
                    actas del Registro Civil de la CDMX. Colaboró también en
                    la interconexión de sistemas entre las secretarias de
                    finanzas de la CDMX y el Registro Público de la Propiedad.`,
            },
            {
                titulo: "Sector Bancario",
                desc: `Coperó en el proyecto de Core
                    Bancario de nueva generación para GFBN (Banorte) destacando
                    su participación en el desarrollo de los principales
                    componentes dentro de una arquitectura de microservicios.`,
            }
        ]
    },
    {
        nombreSeccion: "FULLSTACK",
        data: [
            {
                titulo: "Backend",
                desc: `4 años de experiencia programando en nodejs.
                    Amplio conocimiento en los frameworks express y koa.`,
            },
            {
                titulo: "Frontend",
                desc: `Desarrollo con tecnologías como es6,
                    typescript, react y los frameworks Nextjs y Gatsby`,
            }
        ]
    },
    {
        nombreSeccion: "OTRAS TECNOLOGÍAS",
        data: [
            {
                titulo: "Bases de datos",
                desc: `Cuenta con experiencia en los principales manejadores
                    de Bases de datos. Relacionales: postgresql, mysql
                    y sqlite. Y las bases de datos NoSql: Mongo y Redis`,
            },
            {
                titulo: "Docker",
                desc: `Ha empleado extensamente el uso de Docker para el
                    despliegue de aplicaciones dentro de contenedores.`,
            },
            {
                titulo: "CSS",
                desc: `Para dar estilo a las páginas web cuenta con amplia
                    experiencia en el manejo de los siguientes
                    frameworks: Bootstrap, Skeleton, Reactstrap y Material UI.`,
            },
            {
                titulo: "Trello",
                desc: `El uso de trello ha sido de gran ayuda en la administración de
                    proyectos tanto personales como en colaboración con equipos pequeños
                    de desarrollo.`,
            },
            {
                titulo: "Jira",
                desc: `Acostrumbrado a trabajar en equipo mediante metodologías ágiles
                    (scrum) en donde ha desatacado como integrante del equipo
                    de desarrollo.`,
            },
            {
                titulo: "Cloud",
                desc: `Ha desplegado contenedores Docker en lightsail AWS.`
            },
            {
                titulo: "Jest",
                desc: `Ha incorporado a sus habilidades el manejo de pruebas unitarias con Jest
                    lo que permite desarrollar código eficaz y con menor incidencia
                    de bugs.`
            }
        ]
    },
    {
        nombreSeccion: "OTRAS ACTIVIDADES",
        data: [
            {
                titulo: "Docencia",
                desc: `Desde 1997 hasta 2010 (14 años) fue profesor
                    de Matemáticas en las universidades: UNITEC Cuitlahuac,
                    UVM Lomas Verdes, ENCB-IPN y la UAM Azcapotzalco`,
            },
            {
                titulo: "Comercio Electrónico",
                desc: `Durante la pandemia debida al Covid 19 se aventuró en ésta disciplina.
                    Empleando shopify montó una tienda en línea (Tecnoprenda)
                    en donde se vendieron distintos tipos de wearables para lo cual
                    se desarrollaron campañas publicitarias en google adds.`,
            }
        ]
    }
];


let count = 0;
let seccionCount = 0;
for (const s of secciones) {
    s.id = ++seccionCount;
    for (const d of s.data) {
        d.id = ++count;
    }
}

export const data = secciones;


export const about = {
    titulo: "ABOUT ME",
    descripcion: [
        {
            id: 1,
            parrafo: `Soy desarrollador web, especializado en javascript.
            He colaborado en muchos proyectos que van desde aplicaciones
            web sencillas (CRUD) para automatizar procesos básicos hasta
            participar en el diseño y desarrollo de un core bancario.
            Sigo las normas y técnicas aceptadas en esta profesión,
            diariamente me documento para estar al día y mantengo una
            posición abierta al dialogo para la colaboración en equipo.`
        },
        {
            id: 2,
            parrafo: `Estudié Física y Ciencias de la Computación en la Facultad
            de Ciencias de la UNAM. Fui profesor universitario
            durante 14 años y soy desarrollador web desde el 2011.
            He pasado por varias tecnologías, desde php, java y javascript.
            Actualmente vivo en la CDMX.`
        }
    ]
}

export const contacto = {
    titulo: "CONTACTO",
    descripcion: `¿Te interesa mi perfil como desarrollador?
        Me puedes contactar a través de mi correo:`,
    email: 'rob.mirandam@gmail.com'
}


export const portfolio = {
    titulo: "PORTAFOLIO",
    data: [
        {
            id: 1,
            titulo: "Aclaración de Actas",
            link: "https://aclaraciones.ouo5u355t4u08.us-east-1.cs.amazonlightsail.com",
            descripcion: `Es una aplicación web para
            automatizar la solicitud de aclaración de actas en el
            Registro Civil de la CDMX. La app es desplegada en los
            servidores de la institución y no tiene dominio público,
            sin embargo puedes revisar el prototipo siguiendo
            el link.`
        }
    ]
}


export const bgImageName = 'cdmx1.png';