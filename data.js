const secciones = [
    {
        nombreSeccion: "EXPERIENCIA",
        data : [
            {
                titulo: "Más de 10 Años de Expericencia",
                desc: `Empezando como programador java y php en el 2011 he
                    colaborado en distintos proyectos asumiendo diferentes
                    roles (desarrollador y líder de proyecto). Cuento con
                    buena disposición para trabajar en equipo mediante
                    metodologías ágiles (scrum) y mantengo una posición
                    abierta al diálogo.`
            },
            {
                titulo: "Sector Gobierno",
                desc: `Trabajé durante 7 años en el Registro Civil de la CDMX.
                    Desarrollé apps para automatizar los procesos de trabajo
                    en la institución y colaboré con otras instituciones
                    gubernamentales para la interconexión de sistemas. Mensualmente
                    recabé datos estadísticos para los reportes del INEGI.`
            },
            {
                titulo: "Sector Bancario",
                desc: `Colaboré en el diseño de la arquitectura (microservicios)
                    para el nuevo core bancario del Grupo Financiero Banorte en
                    donde también desarrollé los principales
                    componentes.`
            }
        ]
    },
    {
        nombreSeccion: "FULL STACK",
        data: [
            {
                titulo: "Backend",
                desc: `4 años de experiencia programando en Nodejs.
                    Amplio conocimiento de los frameworks Express y Koa.`,
            },
            {
                titulo: "Frontend",
                desc: `Desarrollo con tecnologías javascript: ES6,
                    Typescript, React y los frameworks Next y Gatsby`,
            }
        ]
    },
    {
        nombreSeccion: "OTRAS TECNOLOGÍAS",
        data: [
            {
                titulo: "Bases de Datos",
                desc: `Cuento con experiencia en los principales manejadores
                    de Bases de datos relacionales: PostgreSQL, MySQL
                    y SQLite, y las bases de datos NoSQL: MongoDB y Redis`,
            },
            {
                titulo: "Git",
                desc: `Uso diario de Git y GitHub para el manejo de versiones
                    de mis proyectos personales y aquellos en los que colaboro
                    como desarrollador.`
            },
            {
                titulo: "Docker",
                desc: `He empleado extensamente el uso de Docker para el
                    despliegue de aplicaciones dentro de contenedores.`,
            },
            {
                titulo: "CSS",
                desc: `Para dar estilo a las páginas web tengo
                    experiencia en el manejo de los
                    frameworks: Bootstrap, Reactstrap y MUI.`,
            },
            {
                titulo: "Trello",
                desc: `El uso de trello ha sido de gran ayuda en la administración de
                    proyectos tanto personales como en colaboración con equipos pequeños.`
            },
            {
                titulo: "Jira",
                desc: `Acostrumbrado a trabajar en equipo mediante metodologías ágiles
                    (scrum) en donde he destacado como integrante del equipo
                    de desarrollo.`,
            },
            {
                titulo: "Cloud",
                desc: `He desplegado contenedores Docker en Lightsail AWS.`
            },
            {
                titulo: "Jest",
                desc: `Manejo de pruebas unitarias con Jest
                    para desarrollo de código eficaz y con menor incidencia
                    de bugs.`
            }
        ]
    },
    {
        nombreSeccion: "OTRAS ACTIVIDADES",
        data: [
            {
                titulo: "Docencia",
                desc: `Desde 1997 hasta 2010 (14 años) fui profesor
                    de Matemáticas en las universidades: UNITEC Cuitlahuac,
                    UVM Lomas Verdes, ENCB-IPN y la UAM Azcapotzalco`,
            },
            {
                titulo: "Comercio Electrónico",
                desc: `Durante la pandemia debida al Covid 19 me aventuré en ésta disciplina.
                    Empleando shopify monté una tienda en línea (Tecnoprenda)
                    en donde se vendieron distintos tipos de wearables para lo cual
                    desarrollé campañas publicitarias en google adds.`,
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
            He colaborado en proyectos que van desde aplicaciones
            web (CRUD) para automatizar procesos de trabajo hasta
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
            sin embargo puedes revisar el prototipo haciendo click en
            el link.`
        }
    ]
}


export const bgImageName = 'cdmx1.png';
