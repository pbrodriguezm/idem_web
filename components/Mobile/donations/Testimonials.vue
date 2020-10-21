<template>
<div v-if="screenWidth != nm" class="testimoniosMobile container-fluid d-flex flex-column justify-content-end px-0" style="height:90vh;min-height:480px;position:relative;">
    <TheNavbarMobile mySidebarId="556" mySidebarSearchId="556" title="Testimonios" fontColor="#280071" backgroundColor="white" />
    <div id="example" style="height:70vh;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
        <div class="container screen1 h-100 pb-0 d-flex justify-content-center">
            <div class="texto h-100 text-left d-flex justify-content-center">
                <div class="d-flex justify-content-center flex-column h-100">
                    <div class="text-container d-flex flex-column justify-content-center h-100">
                        <p class="comillas m-0 p-0" style="height:54px">“</p>
                        <p class="text">Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios"</p>
                        <p class="nombre pt-2">-Christian Paredes</p>
                    </div>
                </div>
            </div>
        </div>
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

.testimoniosMobile,
.donaciones_testimonios {
    .carousel-caption {
        font-family: "Merriweather", serif;
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        text-shadow: none;
    }

    .screen1 {
        z-index: -4;
        background-image: url("/Donaciones/testimonio_1_bg.png");
        background-size: cover;
        max-width: 5000px;
        font-size: 30px;

        .text-container {
            max-width: 250px;

            @media screen and (min-width: $t) {
                max-width: 400px;
            }

            .text {
                opacity: 1;
                color: #43398a;
                text-align: left;
                font-weight: 100;
                font-family: TIEMPO;
                z-index: 3;
                font-size: 25px;
                line-height: 28px;
                text-decoration: underline #43398a;

                @media screen and (min-width: $ds) {
                    font-size: 25px;
                    line-height: 28px;
                }

                @media screen and (min-width: $dm) {
                    font-size: 30px;
                    line-height: 33px;
                }

                @media screen and (min-width: $r) {
                    font-size: 45px;
                    line-height: 48px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 68px;
                    line-height: 75px;
                }
            }

            .comillas {
                color: #43398a;
                font-family: TIEMPO;
                font-size: 75px;

                @media screen and (min-width: $ds) {
                    font-size: 55px;
                }

                @media screen and (min-width: $dm) {
                    font-size: 60px;
                }

                @media screen and (min-width: $r) {
                    font-size: 80px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 100px;
                }
            }

            .nombre {
                font-family: FABRIK;
                text-align: left;
                color: #f9423a;
                text-decoration: none;
                font-size: 15px;
                line-height: 17px;

                @media screen and (min-width: $ds) {
                    font-size: 15px;
                    line-height: 17px;
                }

                @media screen and (min-width: $dm) {
                    font-size: 16px;
                    line-height: 18px;
                }

                @media screen and (min-width: $r) {
                    font-size: 18px;
                    line-height: 20px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 20px;
                    line-height: 22px;
                }
            }
        }
    }

    .screen-filter {
        background-color: rgba(127, 205, 199, 0.7);
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .screen2 {
        z-index: -4;
        background-color: #dcebec;

        .white-container {
            position: absolute;
            top: 32%;
            left: 55%;
            width: 100%;
            height: 36%;
            background-color: white;
            color: #280071;
            font-size: 25px;
            text-align: center;
            z-index: 3;

            .title {
                font-family: TIEMPO;

                @media screen and (min-width: $ds) {
                    font-size: 18px;
                    line-height: 19px;
                }

                @media screen and (min-width: $dm) {
                    font-size: 25px;
                    line-height: 19px;
                }

                @media screen and (min-width: $r) {
                    font-size: 40px;
                    line-height: 29px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 60px;
                    line-height: 58px;
                }
            }

            .text {
                font-family: FABRIK;
                font-size: 18px;
                line-height: 20px;
                text-align: left;
            }
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 68%;
        background-color: #280071;
        height: 7%;
        max-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 28.7%;
    }

    .carousel-control-next {
        right: 61.3%;
    }
}
</style>
