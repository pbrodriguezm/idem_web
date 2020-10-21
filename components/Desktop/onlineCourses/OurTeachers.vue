<template>
<div class="nuestros_profesoresDesktop container-fluid d-flex flex-column justify-content-center pt-4 pb-5">
    <div class="carousel-wrapper w-100 d-flex flex-column justify-content-center px-0 h-100">
        <b-carousel class="carousel" id="carousel1" :interval="4000" controls>
            <b-carousel-slide class="firstRowSlide">
                <div class="firstRow">
                    <div class="big-card d-flex h-100">
                        <div class="ci1 w-50">
                            <div class="w-100 d-flex justify-content-start" />
                        </div>
                        <div class="card-text w-50 d-flex flex-column justify-content-center">
                            <div class="section-title">Nuestros Docentes</div>
                            <p class="normal-text">
                                m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide class="firstRowSlide">
                <div class="firstRow">
                    <div class="big-card d-flex h-100">
                        <div class="ci1 w-50">
                            <div class="w-100 d-flex justify-content-start" />
                        </div>
                        <div class="card-text w-50 d-flex flex-column justify-content-center">
                            <span class="section-title">Nuestros Docentes</span>
                            <p class="normal-text">
                                m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
        </b-carousel>
    </div>
    <div class="docents-wrapper w-100 d-flex flex-column justify-content-center px-0 h-100">
        <div class="dualDocentWrapper px-0 w-75  m-0 py-2 d-flex">
            <div class="card-wrapper d-flex col-6 px-1 pr-2  py-0 d-flex">
                <div class="carD">
                    <div class="ci2 w-50 h-100" />
                    <div class="card-text w-50 h-100">
                        <span class="cursos-title text-left ">Lourdes Flores Nano</span>
                        <span class="small-text subtitle">Abogada y política peruana</span>
                        <p class="small-text">
                            m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-wrapper d-flex col-6 px-1 pl-2 py-0">
                <div class="carD d-flex justify-content-start pt-0 text-center">
                    <div class="ci3 w-50 h-100">
                    </div>
                    <div class="card-text w-50 h-100">
                        <span class="cursos-title text-left">Esteban Chong</span>
                        <span class="small-text subtitle">Contador y Exsocio Principal de Pwc Perú </span>
                        <p class="small-text">
                            m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" dualDocentWrapper px-0 w-75 p-0 m-0 m-0 py-2 d-flex">
            <div class="card-wrapper d-flex col-6 px-1 pr-2 py-0">
                <div class="carD d-flex justify-content-start pt-0 text-center">
                    <div class="card-text w-50 h-100">
                        <span class="cursos-title text-left">María Tereza Quiñonez</span>
                        <span class="small-text subtitle">Abogada y socia del estudio Rodrigo,Elias & Medrano Abogados</span>
                        <p class="small-text">
                            m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        </p>
                    </div>
                    <div class="ci4 w-50 h-100" />
                </div>
            </div>
            <div class="card-wrapper d-flex col-6 px-1 pl-2 py-0">
                <div class=" carD d-flex justify-content-start pt-0 text-center">
                    <div class="card-text w-50 h-100">
                        <span class="cursos-title text-left">Samuel Abad</span>
                        <span class="small-text subtitle">Abogado y Socio del estudio Echecopar</span>
                        <p class="small-text">
                            m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra
                        </p>
                    </div>
                    <div class="ci5 w-50 h-100" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.nuestros_profesoresDesktop {
    font-family: 'Merriweather', serif;
    text-shadow: none;
    background-color: #DCEBEC;

    .carousel {
        width: 75%;
        padding: 0;

        .carousel-caption {
            position: absolute;
            right: 15%;
            bottom: 0px;
            left: 0%;
            width: 100%;
            z-index: 10;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #fff;
            height: 220px;
            text-align: center;

            @media screen and (min-width: $dm) {
                height: 260px;
            }

            @media screen and (min-width: $r) {
                height: 400px;
            }

            @media screen and (min-width: $r2) {
                height: 500px;
            }
        }
    }

    .firstRowSlide {
        height: 220px;

        @media screen and (min-width: $dm) {
            height: 260px;
        }

        @media screen and (min-width: $r) {
            height: 400px;
        }

        @media screen and (min-width: $r2) {
            height: 500px;
        }

        .firstRow {
            width: 100%;
            height: 100%;

            .big-card {
                min-height: 200px;

                @media screen and (min-width: $dm) {
                    min-height: 240px;
                }

                @media screen and (min-width: $r) {
                    min-height: 360px;
                }

                @media screen and (min-width: $r2) {
                    min-height: 430px;
                }

                .card-text {
                    padding: 15px;
                    background-color: white;

                    @media screen and (min-width: $dm) {
                        padding: 35px;
                    }

                    @media screen and (min-width: $r) {
                        padding: 45px;
                    }

                    @media screen and (min-width: $r2) {
                        padding: 55px;
                    }

                    .section-title {
                        color: $color-secondary;
                    }
                }
            }
        }

    }

    .carousel-wrapper {
        align-items: center;
        min-height: 220px;

        @media screen and (min-width: $dm) {
            height: 260px;
        }

        @media screen and (min-width: $r) {
            height: 400px;
        }

        @media screen and (min-width: $r2) {
            height: 500px;
        }
    }

    .docents-wrapper {
        align-items: center;

        .dualDocentWrapper {
            height: 220px;

            @media screen and (min-width: $dm) {
                height: 260px;
            }

            @media screen and (min-width: $r) {
                height: 400px;
            }

            @media screen and (min-width: $r2) {
                height: 500px;
            }

            .card-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 220px;

                @media screen and (min-width: $dm) {
                    height: 260px;
                }

                @media screen and (min-width: $r) {
                    height: 400px;
                }

                @media screen and (min-width: $r2) {
                    height: 500px;
                }

                .carD {
                    min-height: 200px;
                    display: flex;

                    @media screen and (min-width: $dm) {
                        height: 240px;
                    }

                    @media screen and (min-width: $r) {
                        height: 360px;
                    }

                    @media screen and (min-width: $r2) {
                        height: 430px;
                    }

                    .card-text {
                        display: flex;
                        flex-direction: column;
                        background-color: white;
                        justify-content: center;
                        padding: 12px;

                        @media screen and (min-width: $dm) {
                            padding: 15px;
                        }

                        @media screen and (min-width: $r) {
                            padding: 25px;
                        }

                        @media screen and (min-width: $r2) {
                            padding: 45px;
                        }

                        .subtitle {
                            color: $color-secondary;
                            padding-bottom: 5px;
                        }

                        .small-text {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }

    .ci1 {
        background-image: url(/CursosOnline/Fotos-IDEM--20.png);
        background-size: cover;
        background-position: right;
    }

    .ci2 {
        background-image: url(/docentes/1.png);
        background-size: cover;
        background-position: center;
    }

    .ci3 {
        background-image: url(/docentes/2.png);
        background-size: cover;
        background-position: center;
    }

    .ci4 {
        background-image: url(/docentes/3.png);
        background-size: cover;
        background-position: center;
    }

    .ci5 {
        background-image: url(/docentes/5.png);
        background-size: cover;
        background-position: center;
    }

    .cursos-title {
        color: #fb4030;
        font-size: 13px;
        padding-right: 15%;
        line-height: 15px;
        text-shadow: none;
        font-family: TIEMPO;

        @media screen and (min-width: $dm) {
            font-size: 16px;
            line-height: 20px;
        }

        @media screen and (min-width: $r) {
            font-size: 24px;
            line-height: 28px;
        }

        @media screen and (min-width: $r2) {
            font-size: 32px;
            line-height: 36px;
        }
    }

    .carousel-control-prev {
        left: 40%;
    }

    .carousel-control-next {
        left: 45%;
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 1500;
        background-color: $color-primary;
        opacity: 10;
        max-height: 15%;
        top: 85%;
        max-width: 5%;

        @media screen and (min-width: $r) {
            top: 80%;
        }

        @media screen and (min-width: $r2) {
            top: 81%;
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
