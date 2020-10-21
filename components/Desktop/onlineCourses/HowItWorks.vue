<!-- eslint-disable -->
<template>
<div class="container-fluid como_funciona p-0" style="height:100vh; width:100%;">
    <div class=" row h-100 w-100 m-0">
        <div class="column dos h-100 col-3 p-0">
            <div class="screen2 h-100 b-100">
                <div class="white-container  d-flex flex-column justify-content-center px-4">
                    <p class="section-title">¿Cómo funciona?</p>
                    <p class="normal-text">
                        Sigue estos tres sencillos pasos para hacer tu donación.
                    </p>
                </div>
            </div>
        </div>
        <div class="column uno h-100 col-9 p-0" style="padding-right:250px;">
            <div class="container p-5 screen1 d-flex flex-column h-100 p-0 d-flex justify-content-end">
                <div class="w-100 h-100 d-flex justify-content-center px-5 ml-5">
                    <div class="overflow d-flex flex-column justify-content-end h-100 px-0" id="style-2">
                        <div class=" h-75" style="display:flex;">
                            <div class="card d-flex justify-content-center w-100 flex-row" style="background-color:#DCEBEC;border:#DCEBEC;min-width:50%;height:100%;">
                                <div class="arrow"></div>
                                <div class="w-100 d-flex  justify-content-center">
                                    <div class="d-flex justify-content-center h-100 flex-column">
                                        <div class="w-100  d-flex justify-content-center p-4">
                                            <div class="image w-100" />
                                        </div>
                                        <div class="text-container  px-2 d-flex w-100 py-4">
                                            <div class="normal-text">1er paso</div>
                                            <div class="small-text">Encuentra más información sobre el trabajo de Idem en el siguiente <a href="/nosotros">link</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card d-flex justify-content-center w-100 flex-row" style="background-color:#DCEBEC;border:#DCEBEC;min-width:50%;height:100%;">
                                <div class="arrow"></div>
                                <div class="w-100 d-flex  justify-content-center">
                                    <div class="d-flex justify-content-center h-100 flex-column">
                                        <div class="w-100  d-flex justify-content-center p-4">
                                            <div class="image2 w-100" />
                                        </div>
                                        <div class="text-container  px-2 d-flex w-100 py-4">
                                            <div class="normal-text">2do paso</div>
                                            <div class="small-text">Inscríbete en el siguiente <a href="/pasarela">link</a> con tu tarjeta de crédito o débito para efectuar tu
                                                donación.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card d-flex justify-content-center w-100 flex-row" style="background-color:#DCEBEC;border:#DCEBEC;min-width:50%;height:100%;">
                                <div class="w-100 d-flex  justify-content-center">
                                    <div class="d-flex justify-content-center h-100 flex-column">
                                        <div class="w-100  d-flex justify-content-center p-4">
                                            <div class="image3 w-100" />
                                        </div>
                                        <div class="text-container  px-2 d-flex w-100 py-4">
                                            <div class="normal-text">3er paso</div>
                                            <div class="small-text">Recibe un correo de confirmación de tu donación. Si Tienes alguna duda o consulta
                                                sobre el proceso de donación escríbenos a: <a href="mailto:donaciones@idem.org.pe">donaciones@idem.org.pe</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="indicator-container d-flex w-100 px-5 py-3 justify-content-center">
                    <label @click="changeStatus(1)" class="switch" style="max-width:625px;">
                        <input type="checkbox" @change="changeStatus(1)">
                        <span class="slider round"></span>
                    </label>
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
            switch1: true
        }
    },
    methods: {
        changeStatus: function ($event, num) {
            this.switch1 = !this.switch1
            let content = document.querySelector('#style-2');
            var width = content.offsetWidth;
            if (this.switch1) {
                content.scrollLeft = 0;
            } else {
                content.scrollLeft += width;
            }
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
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.como_funciona {
    .carousel-caption {
        font-family: 'Merriweather', serif;
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
        background-color: #DCEBEC;
        background-size: cover;
        max-width: 5000px;
        font-size: 30px;

        .text {
            opacity: 1;
            color: #F8433C;
            text-align: left;
            font-size: 35px;
            font-weight: 100;
            z-index: 3;
            text-shadow: none;
            text-decoration: underline #F8433C;

        }
    }

    .screen2 {
        z-index: -4;
        background-color: #280071;

        .white-container {
            position: absolute;
            top: 32%;
            left: 30%;
            min-width: 260px;
            height: 150px;
            background-color: white;
            z-index: 3;

            @media screen and (min-width: $dm) {
                min-width: 320px;
                height: 190px;
            }

            @media screen and (min-width: $dm2) {
                min-width: 360px;
                height: 210px;
            }

            @media screen and (min-width: $r) {
                min-width: 400px;
                height: 260px;
            }

            @media screen and (min-width: $r2) {
                min-width: 500px;
                height: 360px;
            }

            .section-title {
                line-height: 30px;
                margin-bottom: 5px;

                @media screen and (min-width: $dm) {
                    line-height: 40px;
                }

                @media screen and (min-width: $dm2) {
                    line-height: 45px;
                }

                @media screen and (min-width: $r) {
                    line-height: 55px;
                }

                @media screen and (min-width: $r2) {
                    line-height: 65px;
                }
            }
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

    .overflow {
        overflow-x: hidden;
        overflow-y: hidden;
        width: 400px;
        display: flex;
        justify-content: end;

        @media screen and (min-width: $ds2) {
            width: 500px;
        }

        @media screen and (min-width: $dm) {
            width: 500px;
        }

        @media screen and (min-width: $dm2) {
            width: 600px;
        }

        @media screen and (min-width: $r) {
            width: 700px;
        }

        @media screen and (min-width: $r2) {
            width: 800px;
        }

        .card {
            .arrow {
                position: absolute;
                background-image: url(/r3.png);
                background-size: cover;
                top: calc(50% - 10px);
                right: 0px;
                height: 15px;
                width: 15px;
            }

            .image,
            .image2,
            .image3 {
                background: url(/Cursos_presenciales_selectos/grupo.png) no-repeat;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                min-height: 100px;
                min-width: 100px;

                @media screen and (min-width: $ds2) {
                    min-height: 100px;
                    min-width: 100px;
                }

                @media screen and (min-width: $dm) {
                    min-height: 150px;
                    min-width: 150px;
                }

                @media screen and (min-width: $dm2) {
                    min-height: 180px;
                    min-width: 180px;
                }

                @media screen and (min-width: $r) {
                    min-height: 220px;
                    min-width: 220px;
                }

                @media screen and (min-width: $r2) {
                    min-height: 270px;
                    min-width: 270px;
                }
            }

            .image2 {

                background: url(/Cursos_presenciales_selectos/mano.png) no-repeat;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;

            }

            .image3 {

                background: url(/Cursos_presenciales_selectos/check.png) no-repeat;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;

            }

            .text-container {
                .normal-text {
                    color: $color-secondary;
                    min-width: 60px;

                    @media screen and (min-width: $ds2) {
                          min-width: 60px;
                    }

                    @media screen and (min-width: $dm) {
                          min-width: 80px;
                    }

                    @media screen and (min-width: $dm2) {
                           min-width: 80px;
                    }

                    @media screen and (min-width: $r) {
                        min-width: 100px;
                    }

                }
            }
        }
    }

    .indicator-container {
        max-width: 5000px;
        min-width: 500px;
        ;
    }

    #style-2::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;

    }

    #style-2::-webkit-scrollbar {
        height: 7px;
        background-color: #F5F5F5;
    }

    #style-2::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #280071;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: calc(60px + 240px);
        height: calc(10px + 0px);
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 3px;
        width: 50%;
        left: 4px;
        bottom: 4px;
        background-color: #280071;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked+.slider {
        background-color: white;
    }

    input:focus+.slider {
        box-shadow: 0 0 1px white;
    }

    input:checked+.slider:before {
        -webkit-transform: translateX(250px);
        -ms-transform: translateX(26px);
        transform: translateX(95%);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {}
}
</style>
