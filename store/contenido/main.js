export const state = () => ({
    heroMainSlides: [{
            text: "IDEM es una organización sin fines de lucro que tiene como misión descentralizar lacalidad educativa.",
            imageUrl: "/Home/Fotos-IDEM--01.png"
        },
        {
            text: "Logramos nuestro objetivo mediante el desarrollo de cursos presenciales en provincia y cursos online.",
            imageUrl: "/Home/Fotos-IDEM--02.png"
        },
        {
            text: "Nuestros cursos se encuentran especializados en negocios y áreas afines como contabilidad, derecho, economía, entre otros.",
            imageUrl: "/Home/Fotos-IDEM--03.png"
        },
    ],
    Beneficts: [{
            id: 0,
            text: "Aprenderas a tu propio ritmo",
            imageUrl: "/beneficios/1.png"
        },
        {
            id: 1,
            text: "Los mejores profecionales te enseñarán",
            imageUrl: "/beneficios/2.png"
        },
        {
            id: 2,
            text: "Obtendrás un certificado oficial.",
            imageUrl: "/beneficios/3.png"
        },
        {
            id: 3,
            text: "Formarás parte de una comunidad que genera el cambio.",
            imageUrl: "/beneficios/4.png"
        }
    ],
    Testimonials: [{
            text: "Pude culminar mis estudios sin tener que viajar”",
            author: "Jorge Castro"
        },
        {
            text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
            author: "Christian Paredes"
        },
    ],
    blogNews: [{
            name: 'page_1',
            content: [{
                    title: "NOTICIA 2",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                },
                {
                    title: "NOTICIA 2",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                },
                {
                    title: "NOTICIA 5",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                },

            ]
        },
        {
            name: 'page_2',
            content: [{
                title: "NOTICIA 3",
                text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
            }, ]
        }
    ],

    Aliados: [{
            name: 'page_1',
            content: [{
                    title: "LA IBERICA",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                    img: "ci1"
                },
                {
                    title: "RODRIGUEZ ELIAS EMDRANO",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                    img: "ci2",
                },
                {
                    title: "UTP",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                    img: "ci3",
                },

            ]
        },
        {
            name: 'page_2',
            content: [{
                    title: "ECHECOPAR",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                    img: "ci4",
                },
                {
                    title: "VINATEA-TOYAMA",
                    text: "Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios",
                    img: "ci5",
                },

            ]
        }
    ],


})
export const getters = {
    getHeroMainSlides(state) {
        return state.heroMainSlides
    },
    getBenefitsInformation(state) {
        return state.Beneficts
    },
    getTestimonials(state) {
        return state.Testimonials
    },
    getblogNews(state) {
        return state.blogNews
    },
    getAliados(state) {
        return state.Aliados
    },
}