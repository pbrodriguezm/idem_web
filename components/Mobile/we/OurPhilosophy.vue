<template>
<div v-if="screenWidth != nm" class="NuestraFilosofiaMobile container-fluid d-flex flex-column px-0" style="height:90vh;min-height:480px;position:relative">
    <TheNavbarMobile mySidebarId="OurPhilosophyNavbar" mySidebarSearchId="OurPhilosophyNavbarSearch" title="Nuestra Filosofía" fontColor="white" backgroundColor="#280071" iconsColor="white" />
    <div id="example" style="height:100%;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
        <carousel-3d :space="carousel3d.space" :width="carousel3d.width" :height="carousel3d.height" :slide-border="0">
            <slide v-for="curso in courses" class="d-flex flex-column justify-content-center" :index="curso.id" style="height:100%">
                <div class="h-100 px-0">
                    <div class="card mt-lg-5 d-flex flex-column">
                        <div class="card-image d-flex flex-column" />
                        <div class="card-text w-100 h-50 d-flex flex-column justify-content-start">
                            <span class="cursos-title text-left pt-3 pb-2 mb-0">Creemos en la Igualdad de Oportunidades</span>
                            <p class="cursos-text text-left py-2">
                                Es la mejor herramienta que tienen los jovenes para poder transformar su realidad y la de su comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel-3d>
    </div>
</div>
</template>

<script>
import {
    Carousel3d,
    Slide
} from 'vue-carousel-3d';
export default {
    components: {
        Carousel3d,
        Slide,
    },
    data: function () {
        return {
            screenWidth: 40,
            carousel3d: {
                height: 0,
                width: 0,
                space: 0,
            },
            slides: 7,
            courses: [{
                    id: 0,
                    type: 'NEGOCIOS',
                    name: 'Curso de derecho Concursal',
                    text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
                },
                {
                    id: 1,
                    type: 'NEGOCIOS',
                    name: 'Curso de derecho Financiero',
                    text: "El Curso de Derecho Financiero abordará en 5 módulos los siguientes temas: contratación con un banco de inversión, operaciones de financiamiento directo y cobertura de riesgo, operaciones de financiamiento mediante mercado de capitales, instituciones de inversión colectiva y fondos de pensiones y project finance."
                },
                {
                    id: 2,
                    type: 'NEGOCIOS',
                    name: 'Nosotoros',
                    text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
                }
            ]
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            var screenWidth = window.innerWidth;
            if (screenWidth < 320) {
                this.screenWidth = 'ms'
                this.carousel3d.height = 400
                this.carousel3d.width = 180
                this.carousel3d.space = 220
            }
            if (screenWidth >= 320 && screenWidth < 375) {
                this.screenWidth = 'mm'
                this.carousel3d.height = 400
                this.carousel3d.width = 190
                this.carousel3d.space = 250
            }
            if (screenWidth >= 375 && screenWidth < 425) {
                this.screenWidth = 'ml'
                this.carousel3d.height = 400
                this.carousel3d.width = 220
                this.carousel3d.space = 290
            }
            if (screenWidth >= 425 && screenWidth < 768) {
                this.screenWidth = 't'
                this.carousel3d.height = 400
                this.carousel3d.width = 300
                this.carousel3d.space = 390
            }
            if (screenWidth >= 768 && screenWidth < 1024) {
                // this.screenWidth = 'ds'
                this.screenWidth = 'nm'
            }
            if (screenWidth >= 1024 && screenWidth < 1440) {
                this.screenWidth = 'nm'
            }
            if (screenWidth >= 1440 && screenWidth < 2560) {
                this.screenWidth = 'nm'
            }
            if (screenWidth >= 2560) {
                this.screenWidth = 'nm'
            }
            console.log('asda' + this.screenWidth)
        },
        // changeCarouselProperties() {
        //   switch (this.screenWidth) {
        //     case 'ms':
        //       this.carousel3d.height = 700
        //       this.carousel3d.width = 170
        //       this.carousel3d.space = 190
        //       break;
        //     case 'mm':
        //       this.carousel3d.height = 700
        //       this.carousel3d.width = 400
        //       this.carousel3d.space = 500
        //       break;
        //     case 'ml':
        //       this.carousel3d.height = 700
        //       this.carousel3d.width = 400
        //       this.carousel3d.space = 100
        //       break;
        //     case 't':
        //       this.carousel3d.height = 700
        //       this.carousel3d.width = 400
        //       this.carousel3d.space = 500
        //       break;
        //       defalut: break;
        //   }
        // }
        // $mm:375px;
        // $ml:425px;
        // $ds:768px;
        // $dm:1024px;
        // $r:1440px;
        // $ds2:896px;
        // $dm2:1232px;
        // $r2:2000px;
    }
}
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.NuestraFilosofiaMobile {
    background-image: linear-gradient(to bottom, #280071, #280071 50%, white 50%);

    .carousel-3d-container {
        .carousel-3d-slide {
            background-color: white;
            border: none;
        }
    }

    .screen1 {
        z-index: -4;
        max-width: 5000px;
        color: #DCEBEC;
        background: linear-gradient(180deg, #280071 50%, white 50%);
        opacity: 1;
        font-size: 2.5vw;
        line-height: 2vw;
        text-shadow: none;
        font-family: TIEMPO;
    }

    .card {
        border: none;
        text-shadow: none;
        height: 100%;
        background-color:white;

        .card-image {
            min-height: 50%;
            width: 100%;
            background-image: url(/Nosotros/Fotos-IDEM--18.png);
            background-size: cover;
            background-position: left;
            background-position: center top 0%;
        }

        .card-image_2 {
            min-height: 65%;
            background-image: url(/Nosotros/Fotos-IDEM--17.png);
            background-size: cover;
            background-position: left;
            background-position: center top 0%;
        }

        .card-image_3 {
            min-height: 65%;
            background-image: url(/Nosotros/Fotos-IDEM--19.png);
            background-size: cover;
            background-position: center;
        }

        .cursos-title {
            color: #F8433C;
            padding: 10px;
             font-size: 12px;
            line-height: 14px;
            font-weight: bold;
            text-shadow: none;
            font-family: FABRIKBOLD;
        }

        .cursos-text {
            color: #F9423A;
            padding: 10px;
            font-size: 12px;
            line-height: 12px;
            text-shadow: none;
            font-family: FABRIK;
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 93%;
        background-color: #F8433C;
        height: 7%;
        max-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 33%;
    }

    .carousel-control-next {
        right: 57%;
    }

    html {
        font-size: 16px;
    }

    @media screen and (min-width: 320px) {
        html {
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (min-width: 1000px) {
        html {
            font-size: 22px;
        }
    }
}
</style>
