<template>
<div v-if="screenWidth != nm" class="TheHeroDonations container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="66666" mySidebarSearchId="546546" title="" fontColor="#280071" backgroundColor="transparent" />
    <a href="/">
        <div class="IDEM-icon" /></a>
    <div id="example" style="height:100vh;display:flex;flex-direction:column;">
        <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide style="height:100%;">
                <div class="h-100">
                    <div class="uno h-100 p-0">
                        <div class="container screen1 n1 h-100 d-flex">
                            <div class=" h-100 pr-4 px-lg-5">
                                <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                                    <p class="text m-0">Capacítate con los mejores profesores, sin horarios, sin límites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide style="height:100%;">
                <div class="h-100">
                    <div class="uno h-100 p-0">
                        <div class="container screen1 n1 h-100 d-flex">
                            <div class=" h-100 pr-4 px-lg-5">
                                <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                                    <p class="text m-0">Capacítate con los mejores profesores, sin horarios, sin límites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide style="height:100%;">
                <div class="h-100">
                    <div class="uno h-100 p-0">
                        <div class="container screen1 n1 h-100 d-flex">
                            <div class=" h-100 pr-4 px-lg-5">
                                <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                                    <p class="text m-0">Capacítate con los mejores profesores, sin horarios, sin límites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
        </b-carousel>
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
    }
}
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.TheHeroDonations {
    position: relative;

    .carousel,
    .carousel-inner {
        height: 100%;
    }

    .IDEM-icon {
        position: absolute;
        top: 0;
        left: 20px;
        background-image: url("/idem_logo.png");
        background-size: cover;
        height: 67px;
        width: 44px;
        z-index: 50;

        @media screen and (min-width: $ml) {
            height: 75px;
            width: 50px;
        }

        //iphnoe4 and 5
        @media only screen and (min-width: 425px) and (max-height: 320px) {
            height: 67px;
            width: 44px;
        }

    }

    .carousel-caption {
        font-family: 'Merriweather', serif;
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
    }

    .screen1 {
        z-index: -4;
        font-size: 35px;
        text-decoration: underline #280071;
        background-size: cover;
        max-width: 10000px;
        background-image: url("/CursosOnline/Fotos-IDEM--13.png");
        background-size: cover;
        background-position: center;
    }

    .text {
        color: #280071;
        text-align: left;
        font-size: 36px;
        line-height: 44px;
        font-weight: 100;
        font-family: TIEMPO;
        text-shadow: none;
        text-decoration: underline #280071;
        max-width: 300px;

        @media screen and (min-width: $t) {
            max-width: 600px;
        }

        //Landscape
        @media only screen and (min-width: 425px) and (max-height: 425px) {
                 font-size: 30px;
                   max-width: 500px;
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 88%;
        background-color: #280071;
        height: 8%;
        max-height: 40px;
        max-width: 12%;
        opacity: 1;

        @media screen and (min-width: $t) {
            max-width: 10%;
        }

        //Landscape
        @media only screen and (min-width: 425px) and (max-height: 425px) {
            top: 84%;
            min-height: 40px;
        }

    }

    .carousel-control-prev {
        left: 76%;

        @media screen and (min-width: $t) {
            left: 80%;
        }
    }

    .carousel-control-next {
        left: 88%;

        @media screen and (min-width: $t) {
            left: 90%;
        }
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }

}
</style>
