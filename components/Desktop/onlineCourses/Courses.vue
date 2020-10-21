<template>
<div class="cursosOnlineCODesktop container-fluid d-flex flex-column justify-content-center inf px-2 px-lg-5" style="height:100vh">
    <div class="d-flex justify-content-center py-0">
        <div class="text_container">
            <div class="title-text d-flex justify-content-between">
                    <div class="w-100 d-flex justify-content-center" style="align-items:center;">
                      <button class="btn btn-outline-danger agregar-btn-selected">Todos los cursos</button>
                      <button class="btn btn-outline-danger agregar-btn">Cursos de Negocios</button>
                      <button class="btn btn-outline-danger agregar-btn">Cursos de Tecnológia</button>
                    </div>
            </div>
        </div>
    </div>
    <div class="d-flex w-100 justify-content-center">
        <b-carousel id="carousel1" :interval="4000" class="carousel" controls>
            <b-carousel-slide style="height:80vh;">
                <div class="container d-flex justify-content-center w-100 h-100 px-0">
                    <div class="card-container px-0 w-100 h-100 m-0">
                        <div class="card-wrapper d-flex justify-content-center col-6 px-2 py-2">
                            <div class="card">
                                <div class="image">
                                    <div class="subtitle px-4 py-1  d-flex justify-content-center" style="position:absolute;left:0;bottom:0;">
                                        NEGOCIOS
                                    </div>
                                </div>
                                <div class="card-text">
                                    <div class="title-wrapper d-flex justify-content-start">
                                        <span class="text-left cursos-title px-0">Curso de derecho Concursal</span>
                                    </div>
                                    <div class="text-wrapper">
                                        <p class="small-text text-left pt-0 pl-lg-1">
                                            El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal,
                                            el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores,
                                            administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A.
                                        </p>
                                        <a href="/cursoSelect/">
                                            <div class="flecha" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-wrapper d-flex justify-content-center col-6 px-2 py-2">
                            <div class="card">
                                <div class="image">
                                    <div class="subtitle px-4 py-1  d-flex justify-content-center" style="position:absolute;left:0;bottom:0;">
                                        NEGOCIOS
                                    </div>
                                </div>
                                <div class="card-text">
                                    <div class="title-wrapper d-flex justify-content-start">
                                        <span class="text-left cursos-title px-0">Curso de derecho Concursal</span>
                                    </div>
                                    <div class="text-wrapper">
                                        <p class="small-text text-left pt-0 pl-lg-1">
                                            El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal,
                                            el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores,
                                            administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A.
                                        </p>
                                        <a href="/cursos_online">
                                            <div class="flecha" />
                                        </a>
                                    </div>
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
    data: function () {
        return {
            slides: 7
        }
    },
    components: {
        Carousel3d,
        Slide
    }
    // components: {
    //   'carousel-3d': Carousel3d.Carousel3d,
    //   'slide': Carousel3d.Slide
    // }
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.cursosOnlineCODesktop {
    a {
        color: inherit;
        text-decoration: none;
    }

    .text_container {
        width: 700px;
        padding-bottom:25px;

        @media screen and (min-width: $dm) {
            width: 900px;
        }

        @media screen and (min-width: $dm) {
            width: 1050px;
        }

        @media screen and (min-width: $r) {
            width: 1200px;
        }

        @media screen and (min-width: $r2) {
            width: 1400px;
        }
    }

    .carousel {
        width: 700px;

        @media screen and (min-width: $dm) {
            width: 900px;
        }

        @media screen and (min-width: $dm2) {
            width: 1050px;
        }

        @media screen and (min-width: $r) {
            width: 1250px;
        }

        @media screen and (min-width: $r2) {
            width: 1450px;
        }

        .carousel-caption {
            position: absolute;
            padding: 0;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 100%;

            @media screen and (min-width: $r) {
                max-width: 1250px;
            }

            @media screen and (min-width: $r2) {
                max-width: 1450px;
            }

            .card-container {
                max-width: 700px;
                display: flex;
                justify-content: center;

                @media screen and (min-width: $dm) {
                    max-width: 900px;
                }

                @media screen and (min-width: $dm2) {
                    max-width: 1050px;
                }

                @media screen and (min-width: $r) {
                    max-width: 1200px;
                }

                @media screen and (min-width: $r2) {
                    max-width: 1400px;
                }

                .card-wrapper {
                    max-width: 325px;

                    @media screen and (min-width: $dm) {
                        max-width: 420px;
                    }

                    @media screen and (min-width: $dm2) {
                        max-width: 470px;
                    }

                    @media screen and (min-width: $r) {
                        max-width: 580px;
                    }

                    @media screen and (min-width: $r2) {
                        max-width: 690px;
                    }

                    .card {
                        max-width: 320px;

                        @media screen and (min-width: $dm2) {
                            max-width: 400px;
                        }

                        @media screen and (min-width: $dm) {
                            max-width: 450px;
                        }

                        @media screen and (min-width: $r) {
                            max-width: 580px;
                        }

                        @media screen and (min-width: $r2) {
                            max-width: 690px;
                        }

                        .image {
                            background-image: url(/Home/Fotos-IDEM--15.png);
                            position: relative;
                            height: 60%;
                            width: 100%;
                            background-size: cover;
                            background-position: center;

                            .subtitle {
                                color: $color-primary;
                                font-family: FABRIK;
                                background-color: $color-terceary;
                                font-size: 10px;

                                @media screen and (min-width: $r) {
                                    font-size: 14px;
                                    line-height: 18px;
                                }

                                @media screen and (min-width: $r2) {
                                    font-size: 18px;
                                    line-height: 22px;
                                }
                            }
                        }

                        .card-text {
                            display: flex;
                            align-items: center;
                            background-color: $color-terceary;
                            height: 40%;
                            width: 100%;
                            font-family: FABRIK;

                            .title-wrapper {
                                min-width: 120px;
                                align-items: start;
                                height: 60%;
                                padding-left: 25px;
                                padding-right: 5px;

                                @media screen and (min-width: $dm) {
                                    min-width: 140px;
                                    height: 50%;
                                }

                                @media screen and (min-width: $dm2) {
                                    min-width: 180px;
                                    height: 50%;
                                }

                                @media screen and (min-width: $r) {
                                    min-width: 200px;
                                }

                                @media screen and (min-width: $r2) {
                                    min-width: 240px;
                                }

                                .cursos-title {
                                    color: $color-secondary;
                                    font-size: 14px;
                                    line-height: 15px;
                                    text-shadow: none;
                                    font-family: TIEMPO;

                                    @media screen and (min-width: $dm) {
                                        font-size: 16px;
                                        line-height: 18px;
                                    }

                                    @media screen and (min-width: $r) {
                                        font-size: 18px;
                                        line-height: 22px;
                                    }

                                    @media screen and (min-width: $r2) {
                                        font-size: 22px;
                                        line-height: 26px;
                                    }
                                }
                            }

                            .text-wrapper {
                                padding-right: 25px;
                                position: relative;
                                .flecha {
                                    background-image: url(/cursoSelect/flechaRoja.png);
                                    background-size: cover;
                                    position: absolute;
                                    right: 20px;
                                    bottom: -10px;
                                    height: 14px;
                                    width: 24px;

                                    @media screen and (min-width: $dm) {
                                        right: 20px;
                                        bottom: -20px;
                                        height: 16px;
                                        width: 28px;
                                    }

                                    @media screen and (min-width: $dm2) {
                                        right: 20px;
                                        bottom: -30px;
                                        height: 16px;
                                        width: 28px;
                                    }
                                    @media screen and (min-width: $r) {
                                        right: 20px;
                                        bottom: -40px;
                                        height: 22px;
                                        width: 36px;
                                    }
                                    @media screen and (min-width: $r2) {
                                        right: 20px;
                                        bottom: -40px;
                                        height: 22px;
                                        width: 36px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .cursos-button {
        background-color: #dcecec;
        color: #43398a;
        font-size: 13px;
        letter-spacing: 3px;
        text-shadow: none;
    }

    .carousel-control-prev,
    .carousel-control-next {
        .carousel-control-prev-icon {
            display: none;
        }

        .carousel-control-next-icon {
            display: none;
        }

        z-index: 15;
        top: 50%;
        height:20px;
        width:20px;
        opacity: 1;
        background-size: cover;

        @media screen and (min-width: $r) {
            height: 30px;
            width: 30px;
        }
    }

    .carousel-control-prev {
        background-image: url(/r2.png);
    }

    .carousel-control-next {
        background-image: url(/r1.png);
    }

    .agregar-btn-selected {
        max-height: 40px;
        font-size: 14px;
        border-color: #F94139;
        font-family: FABRIK;
        background-color: transparent;
        border-radius: 0;
    }

    .agregar-btn {
        max-height: 40px;
        border-color: transparent;
        font-size: 14px;
        font-family: FABRIK;
        background-color: transparent;
        border-radius: 0;
        color: #280071;
        min-width: 100px;
    }
}
</style>
