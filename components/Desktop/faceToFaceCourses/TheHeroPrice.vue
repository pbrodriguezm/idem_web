<template>
<b-container fluid class="cursos_presenciales_s_hero p-0">
    <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0 w-100" style="text-shadow: 1px 1px 2px #333;" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

        <!-- Text slides with image -->
        <b-carousel-slide style="height:100vh;">
            <b-row class="h-100">
                <b-col class="uno h-100 col-8 p-0">
                    <div class="container screen1 h-100 d-flex justify-content-end">
                        <b-col class="col-6 h-100 px-3 px-lg-5">
                            <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                                <p class="hero-title m-0">{{curso.nombre}}</p>
                                <div class="form d-flex justify-content-end pr-5" style="z-index:800;max-width:394px;">
                                    <div class="btn-wrapper px-2">
                                        <a :href="curso.urlexternocurso" class="btn btn-danger comprar-btn" target="_blank"> Programa </a>
                                        <button class="btn btn-danger comprar-btn"> Inscribete </button>
                                    </div>
                                </div>
                                <!--<div class="d-flex justify-content-end pt-4 pr-5" style="z-index:800;max-width:394px;">
                                    <div>
                                        <label class=" form radio m-0">
                                            <div class="d-flex">
                                                <p class="radio">Precio estudiantes</p>
                                                <p class="px-1 radio-price">s/50</p>
                                                <p class="radio-decimal">.00</p>
                                            </div>
                                            <input type="radio" checked="checked" name="is_company">
                                            <span class="checkround"></span>
                                        </label>
                                        <label class="radio m-0">
                                            <div class="d-flex">
                                                <p class="radio">Precio profesionales</p>
                                                <p class="px-1 radio-price">s/60</p>
                                                <p class="radio-decimal">.00</p>
                                            </div>
                                            <input type="radio" name="is_company">
                                            <span class="checkround"></span>
                                        </label>
                                        <label class="radio">
                                            <div class="d-flex">
                                                <p class="radio">Precio coorporativo</p>
                                                <p class="px-1 radio-price">s/200</p>
                                                <p class="radio-decimal">.00</p>
                                                <p class="radio" style="position:absolute;top:15px;;">(5 entradas)</p>
                                            </div>
                                            <input type="radio" name="is_company">
                                            <span class="checkround"></span>
                                        </label>
                                    </div>
                                </div>-->
                            </div>
                        </b-col>
                    </div>
                </b-col>
                <b-col class="dos h-100 col-4 p-0">
                    <div class="screen2 h-100 b-100">
                        <div class="LogoBlanco" />
                    </div>
                </b-col>
            </b-row>
        </b-carousel-slide>
    </b-carousel>
    <!--hero-->
</b-container>
</template>

<script>
import myApi from '../../../services/api'
import Axios from 'axios'
export default {
    data() {
       this.getElements();
        return {
            slide: 0,
            sliding: null,
            curso: {nombre:'', urlexternocurso:''}
        }
    },
    methods: {
        
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        async getElements () {
            this.loading = true 
            myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.'+this.$route.params.cursoId).then(response =>  {
            //myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.curso_prueba_3').then(response =>  {
            console.log("ENTRA->>",response);
            this.curso = response.data[0];
            })
         }
    }
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$t: 768px;
$dm: 1024px;

.cursos_presenciales_s_hero {
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
        background-image: url("/Cursos_presenciales_selectos/Fotos-IDEM--08.png");
        background-size: cover;
        max-width: 10000px;

        .formulario-general {
            position: absolute;
            left: 80%;

            .hero-title {
                line-height: 35px;

                @media screen and (min-width: $dm) {
                    line-height: 45px;
                }

                @media screen and (min-width: $r) {
                    line-height: 55px;
                }

                @media screen and (min-width: $r2) {
                   line-height: 65px;
                }
            }

            .text {
                color: #280071;
                text-align: left;
                font-size: 28px;
                font-weight: 100;
                -webkit-margin-left: 30%;
                z-index: 35;
                font-family: TIEMPO;
                text-shadow: none;
                text-decoration: underline #280071;

                @media screen and (min-width: $dm) {
                    font-size: 38px;
                }
            }

            .radio {
                font-size: 10px;
                font-family: FABRIK;
                text-decoration: underline transaprent;
                text-shadow: none;
                color: #F94139;
                text-decoration: none;

                .radio,
                .radio-decimal {
                    padding: 0;
                    margin-top: 8px;
                    margin-bottom: 0px;
                    color: $color-secondary;
                }

                .radio-price {
                    margin-top: 5px;
                    margin-left: 2px;
                    font-family: TIEMPO;
                    font-size: 15px;
                    margin-bottom: 0px;
                    color: $color-secondary;
                }
            }

            .comprar-btn,
            .agregar-btn {
                border-color: transparent;
                border-radius: 0px;
                font-family: FABRIK;
                font-size: 10px;

                @media screen and (min-width: $dm) {
                    font-size: 15px;
                }
            }

            .comprar-btn {
                background-color: #F94139;
            }

            .agregar-btn {
                border-color: #F94139;
                background-color: transparent;
            }
        }
    }

    .screen2 {
        z-index: -4;
        background-color: #DCEBEC;
background-image: url("/Cursos_presenciales_selectos/FOTOS-IDEM--10.png");
        .LogoBlanco {
            position: absolute;
            top: 0;
            right: 0;
            background-image: url("/LogoBlanco.png");
            height: 185px;
            width: 169px;
            background-size: cover;

            @media screen and (min-width: $dm) {
                height: 285px;
                width: 269px;
            }
        }
    }

    .img-fluid {
        z-index: -5;
        height: 100%;
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        display: none;
        top: 93%;
        background-color: #280071;
        max-height: 7%;
        max-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 58.5%;
    }

    .carousel-control-next {
        right: 31.5%;
    }

    /* The radio */
    .radio {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }

    /* Hide the browser's default radio button */
    .radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkround {

        position: absolute;
        top: 9.5px;
        left: 8px;
        height: 12px;
        width: 12px;
        background-color: transparent;
        border-color: #F94139;
        border-style: solid;
        border-width: 1.5px;
        border-radius: 50%;
    }

    /* When the radio button is checked, add a blue background */
    .radio input:checked~.checkround {
        background-color: transparent;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkround:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .radio input:checked~.checkround:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .radio .checkround:after {
        left: calc(50% - 3px);
        top: calc(50% - 3px);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #F94139;

    }

    /* The check */

    /* Hide the browser's default checkbox */

    /* Create a custom checkbox */

    /* When the checkbox is checked, add a blue background */
    .check input:checked~.checkmark {
        background-color: transparent;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .check input:checked~.checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */

}
</style>
