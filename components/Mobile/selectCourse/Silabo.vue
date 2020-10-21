<!-- eslint-disable -->
<template>
<div class="syllableSelectCourseMobile container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="432" mySidebarSearchId="432" title="" backgroundColor="transparent" iconsColor="orange" />
    <div class="contenido  d-flex flex-column justify-content-center h-100">
        <div class="contenidos h-100">
            <div class="h-100 title-wrapper d-flex flex-column justify-content-center" style="">
                <div class="d-flex w-100 h-50 flex-column justify-content-center">
                    <div class="title">información</div>
                </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <div class="squares_wrapper">
                    <div v-if="noclicked_1" class="px-2 card cuadrado_azul d-flex justify-content-between align-items-end pb-2" @click="click_slide1">
                        <span class="moduleNumber" style="color:white;font-family:FABRIK">Módulo 1</span>
                        <span><img class="flecha" src="/cursoSelect/flecharoja.png"></span>
                    </div>
                    <div v-else class="card__face--back card  d-flex flex-column cuadrado_naranja" style="color:white;" @click=" click_slide1">
                        <div><img class="flecha" src="/cursoSelect/flechamorada.png"></div>
                        <div class="moduleNumber" style="color:#280071;font-family:FABRIK">Módulo 1</div>
                        <div class="tituloCurso text-white">Aproximación al Derecho Concursal</div>
                        <div class="tituloCurso text-white">Profesor: Jose Antonio JImenez.</div>
                        <div class="descripcion pt-2 text-left text-white">
                            <div>1. Objetivos del derecho concursal: posiciones y desencuentros.</div>
                            <div>2. Principios rectores del derecho concursal.</div>
                            <div>3. Antecedentes y marco normartivo actual.</div>
                        </div>
                    </div>
                    <div v-if="noclicked_2" class="px-2 card cuadrado_azul d-flex justify-content-between align-items-end pb-2" @click="click_slide2">
                        <span class="moduleNumber" style="color:white;font-family:FABRIK">Módulo 2</span>
                        <span><img class="flecha" src="/cursoSelect/flecharoja.png"></span>
                    </div>
                    <div v-else class="card__face--back2 card  d-flex flex-column  cuadrado_naranja" style="color:white;" @click=" click_slide2">
                        <div><img class="flecha" src="/cursoSelect/flechamorada.png"></div>
                        <div class="moduleNumber" style="color:#280071;font-family:FABRIK">Módulo 2</div>
                        <div class="tituloCurso text-white">Aproximación al Derecho Concursal</div>
                        <div class="tituloCurso text-white">Profesor: Jose Antonio JImenez.</div>
                        <div class="descripcion pt-2 text-left text-white">
                            <div>1. Objetivos del derecho concursal: posiciones y desencuentros.</div>
                            <div>2. Principios rectores del derecho concursal.</div>
                            <div>3. Antecedentes y marco normartivo actual.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Text slides with image -->
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            noclicked_1: true,
            noclicked_2: true,
            noclicked_3: true,
            noclicked_4: true,
            noclicked_5: true,
            noclicked_6: true,
        }
    },
    methods: {
        click_slide1: function () {
            this.noclicked_1 = !this.noclicked_1;
        },
        click_slide2: function () {
            this.noclicked_2 = !this.noclicked_2;
        },
        click_slide3: function () {
            this.noclicked_3 = !this.noclicked_3;
        },
        click_slide4: function () {
            this.noclicked_4 = !this.noclicked_4;
        },
        click_slide5: function () {
            this.noclicked_5 = !this.noclicked_5;
        },
        click_slide6: function () {
            this.noclicked_6 = !this.noclicked_6;
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$mm:320px;
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.syllableSelectCourseMobile {
    background-color: #DCEBEC;

    .contenido {
        padding: 20px;

        @media screen and (min-width: $ml) {
            padding: 25px;
        }

        .title-wrapper {
            width: 50px;

            @media screen and (min-width: $mm) {
                width: 60px;
            }

            .title {
                color: #F8433C;
                -webkit-transform: rotate(-90deg);
                font-family: TIEMPO;
                margin: 0px;
                font-size: 25px;
                margin-top: 150%;

                @media screen and (min-width: $ml) {
                    margin-top: 220%;
                    font-size: 30px;
                }
            }
        }

        .contenidos {
            color: #280071;
            font-family: FABRIK;
            max-width: 230px;
            display: flex;

            @media screen and (min-width: $ml) {
                max-width: 280px;
            }

            //landscape iphnoe4 and 5
            @media only screen and (min-width: 425px) and (max-height: 425px) {
                max-width: 500px;
            }

            .squares_wrapper {
                height: 400px;
                width: 170px;

                //landscape iphnoe4 and 5
                //landscape iphnoe4 and 5
                @media only screen and (min-width: 425px) and (max-height: 425px) {
                    width: 400px;
                }

                @media only screen and (min-width: 425px) and (max-height: 320px) {
                    width: 320px;
                }

                .card {
                    position: relative;
                    transition: transform 1s;
                    transform-style: preserve-3d;
                    height: 50%;

                }

                .cuadrado_azul {
                    background-color: #280071;
                    border: solid 1px #DEECED;

                    .moduleNumber {
                        font-size: 15px;

                        @media screen and (min-width: $ml) {
                            font-size: 18px;
                        }

                        //landscape iphnoe4 and 5
                        @media only screen and (min-width: 425px) and (max-height: 425px) {
                            font-size: 18px;
                        }
                    }
                }

                .cuadrado_naranja {
                    background-color: #F9423A;
                    border: solid 1px #DEECED;
                    padding: 8px;

                    .moduleNumber {
                        font-size: 15px;

                        @media screen and (min-width: $ml) {
                            font-size: 18px;
                        }

                        //landscape iphnoe4 and 5
                        @media only screen and (min-width: 425px) and (max-height: 425px) {
                            font-size: 18px;
                        }
                    }

                    .tituloCurso {
                        font-size: 12px;
                        line-height: 12px;

                    }

                    .descripcion {
                        font-size: 10px;
                        line-height: 11px;

                    }
                }

                .card__face--back {
                    transform: rotateY(360deg);

                }

                .card__face--back2 {
                    transform: rotateY(360deg);
                }

                .flecha {
                    cursor: pointer;
                    width: 20px;

                    @media screen and (min-width: $ml) {
                        width: 28px;
                    }

                    //landscape iphnoe4 and 5
                    @media only screen and (min-width: 425px) and (max-height: 425px) {
                        max-width: 28px;
                    }
                }
            }
        }
    }
}
</style>
