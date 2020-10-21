<!-- eslint-disable -->
<template>
<div class="container-fluid programa p-6 p-md-0">
    <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0 m-0" style="text-shadow: 1px 1px 2px #333;" controls img-width="1024" img-height="480" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide style="height:100vh;">
            <div class=" row h-100">
                <div class="column dos h-100 col-4 p-0">
                    <div class="screen2 h-100 b-100">
                        <div class="text d-flex flex-column justify-content-start">
                            <div class="hero-title">
                                {{programa.programa}}
                            </div>
                            <div class="normal-text">
                                 {{programa.descripcion}}
                            </div>
                        </div>
                        <div class="fecha">
                            <div class="number">{{new Date(programa.fecha)  | dateFormat('DD', dateFormatConfig) }} </div>
                            <div class="month">{{new Date(programa.fecha)  | dateFormat('MMMM', dateFormatConfig) }} </div>
                        </div>
                    </div>
                </div>
                <div class=" column uno h-100 col-8 p-0">
                    <div class="container screen1 n1 h-100 d-flex justify-content-start">
                        <img src="https://i.ibb.co/QkhzVpC/banner.png" width="100%">
                        <!-- <div class="text col-9 px-5 py-5 ml-5" style="z-index:2;">
               Convertirnos en el mejor instituto de educaciòn superior del Perú.
              </div> -->
                    </div>
                </div>
            </div>
        </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import myApi from '../../../services/api'
import Axios from 'axios'
import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format';
Vue.use(VueFilterDateFormat);

export default {
    data() {
        this.getElements();
        return {
            slide: 0,
            sliding: null,
            curso:null,
            programa:{programa:'', descripcion:''},
            dateFormatConfig: {
                    dayOfWeekNames: [
                        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                        'Friday', 'Saturday'
                    ],
                    dayOfWeekNamesShort: [
                        'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
                    ],
                    monthNames: [
                        'Enero', 'Febrero', 'March', 'April', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dociembre'
                    ],
                    monthNamesShort: [
                        'Ener', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                        'Jul', 'Agos', 'Sept', 'Oct', 'Nov', 'Dic'
                    ]
            }
            
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
            ////myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.'+this.$route.params.id).then(response =>  {
            myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.'+this.$route.params.cursoId).then(response =>  {
                console.log("ENTRA AQUIII", this.$route.params.cursoId);
            this.curso = response.data[0];            
                myApi.get('idem_curso_prese?idcurso=eq.'+this.curso.idcurso).then(response_ =>  {
                    this.programa = response_.data[0];            
                })
            
            
            })
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

.programa {
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

        background-size: cover;
        max-width: 5000px;
        font-size: 30px;

        .text {
            opacity: 1;
            color: #F8433C;
            text-align: left;
            font-size: 45px;
            font-weight: 100;
            z-index: 3;
            font-family: TIEMPO;
            text-shadow: none;
            text-decoration: underline #F8433C;
        }
    }

    .n1 {
        background-color: #270172;
        background-size: cover;
    }

    .n2 {
        background-color: #270172;
        background-size: cover;
    }

    .screen-filter {
        background-color: rgba(127, 205, 199, 0.7);
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .dos {
        background-color: #DCEBEC;

        .screen2 {
            z-index: -4;

            @media screen and (min-width: $dm) {}

            @media screen and (min-width: $dm2) {
                padding: 50px;
            }

            @media screen and (min-width: $r) {
                padding: 50px;
            }

            @media screen and (min-width: $r2) {
                padding: 50px;
            }

            .text {
                color: #270172;
                padding: 50px;

                .hero-title {
                    text-decoration: none;
                }
            }

            .fecha {
                color: #F8433C;

                .number {
                    font-family: FABRIKBOLD;
                    font-size: 100px;
                    margin: 0px;

                    @media screen and (min-width: $dm) {
                        font-size: 160px;
                    }

                    @media screen and (min-width: $dm2) {
                        font-size: 160px;
                    }

                    @media screen and (min-width: $r) {
                        font-size: 200px;
                    }

                    @media screen and (min-width: $r2) {
                        font-size: 260px;
                    }
                }

                .month {
                    font-family: FABRIKBOLD;
                    font-size: 20px;
                    margin-top: -35px;

                    @media screen and (min-width: $dm) {
                        font-size: 35px;
                        margin-top: -40px;
                    }

                    @media screen and (min-width: $dm2) {
                        font-size: 35px;
                        margin-top: -40px;
                    }

                    @media screen and (min-width: $r) {
                        font-size: 45px;
                        margin-top: -40px;
                    }

                    @media screen and (min-width: $r2) {
                        font-size: 60px;
                        margin-top: -40px;
                    }
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
        left: 23%;
    }

    .carousel-control-next {
        right: 67%;
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }
}
</style>
