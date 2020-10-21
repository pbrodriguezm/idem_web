export const state = () => ({
    heroWeSlides: [{
            text: "Somos una entidad educativa que cree en la igualdad educativa.",
            imageUrl: "/Nosotros/Fotos-IDEM--04.png"
        },
        {
            text: " Nuestro sueño es transformar el Perú dando oportunidades de aceso a educación de calidad.",
            imageUrl: "/Nosotros/Fotos-IDEM--05.png"
        },
    ],
    OurVisionSlides: [{
            text: "Convertirnos en el mejor instituto de educaciòn superior del Perú.",
            imageUrl: "/Nosotros/Fotos-IDEM--06.png"
        },
        {
            text: "Y un referente en América Latina, al alcanze de los que menos tienen.",
            imageUrl: "/Nosotros/Fotos-IDEM--07.png"
        },
    ],
    OurPhilosophySlides: [{
            title: "Creemos en la educación",
            text: " Es la mejor herramienta que tienen los jovenes para poder transformar su realidad y la de su comunidad.",
            imageUrl: "/Nosotros/Fotos-IDEM--18.png"
        },
        {
            title: "Creemos en la igualdad de oportunidad",
            text: "La educación de calidad es un derecho que toda persona debe gozar, sin importar su nivel económico, social o el lugar donde nació.",
            imageUrl: "/Nosotros/Fotos-IDEM--17.png"
        },
        {
            title: "Creemos en los sueños",
            text: " La educación de calidad empodera a jóvenes idealistas para que puedan lograr sus sueños.",
            imageUrl: "/Nosotros/Fotos-IDEM--19.png"
        },
    ],
})
export const getters = {
    getheroWeSlides(state) {
        return state.heroWeSlides
    },
    getOurVisionSlides(state) {
        return state.OurVisionSlides
    },
    getOurPhilosophySlides(state) {
        return state.OurPhilosophySlides
    }
}