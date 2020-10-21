<!-- eslint-disable -->
<template>
<div class="container-fluid informationDesktop p-0" style="height:100vh; width:100%;">
    <div class=" row h-100 w-100 m-0">
        <div class="column dos h-100 col-8 col-lg-7 p-0">
            <div class="screen2 h-100 b-100">
                <div class="contenido d-flex flex-column justify-content-center h-100 p-5">
                    <div class="contenidos h-75 p-5 pl-0 pr-lg-5">
                        <div class="title" style="">
                            <div style="height:50px;">
                                <div class="section-title">información</div>
                            </div>
                        </div>
                        <ul style="list-style-type: none;">
                            <p class="normal-text m-0 mb-2">{{curso.descripcion}}</p>
                            
                        </ul>
                    </div>
                </div>
                <div class="white-container  d-flex flex-column justify-content-around px-3">
                    <div class="container-blue py-2 px-4 d-flex flex-column justify-content-center">
                        <div class="w-100 d-flex justify-content-center">
                            <div class="icon_1" />
                        </div>
                        <div class="contenido py-2">
                            <p class="normal-text m-0">  {{curso.lugar}}</p>
                        </div>
                    </div>
                    <div class="container-blue py-4  px-4 d-flex flex-column justify-content-center">
                        <div class="w-100  d-flex justify-content-center">
                            <div class="icon_2" />
                        </div>
                        <div class="contenido py-2">
                            <p class="normal-text m-0">{{new Date(curso.fechahorainicio)  | dateFormat('MMM.DD HH:MM', dateFormatConfig) }}</p>
                            <p class="normal-text m-0">{{new Date(curso.fechahorafin)  | dateFormat('MMM.DD HH:MM', dateFormatConfig) }}</p>
                            
                        </div>
                    </div>
                    <div class="container-blue p-4 d-flex flex-column justify-content-center">
                        <div class="w-100 d-flex justify-content-center">
                            <div class="icon_3" />
                        </div>
                        <div class="contenido py-2">
                            <p class="normal-text m-0"> Estudiante S/50.00</p>
                            <p class="normal-text m-0"> Profecional S/60.00</p>
                            <p class="normal-text m-0"> Corporativo S/200.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" column uno h-100 col-4 col-lg-5 p-0">
            <div class="container screen1 h-100 d-flex justify-content-start">
            </div>
        </div>
    </div>
</div>
<!-- Text slides with image -->
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
            curso: {descripcion:'', lugar:'', fechahorainicio:''},
            dateFormatConfig: {
                    dayOfWeekNames: [
                        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                        'Friday', 'Saturday'
                    ],
                    dayOfWeekNamesShort: [
                        'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
                    ],
                    monthNames: [
                        'Enero', 'Febrero', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
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
            //myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.'+this.$route.params.id).then(response =>  {
            myApi.get('idem_cursos?idtipocurso=eq.1&idcursotexto=eq.curso_prueba_3').then(response =>  {
                console.log(this.$route.params.id);
            
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
$dm:1024px;

.informationDesktop {

    .screen1 {
        z-index: -4;
        background-image: url("/Cursos_presenciales_selectos/Fotos-IDEM--01.png");
        background-size: cover;
        max-width: 5000px;
    }

    .screen2 {
        z-index: -4;
        background-color: $color-terceary;

        .contenido {
            .title {
                -webkit-transform: rotate(-90deg);
                display: flex;
                justify-content: center;
                width: 400px;
                height: 80px;
                position: absolute;
                left: -10px;

                @media screen and (min-width: $dm) {
                    left: 0px;
                }

                .section-title {
                    color: $color-secondary
                }
            }

            .contenidos {
                width: 75%;
                margin-left: 15%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }

        .white-container {
            position: absolute;
            min-width: 300px;
            top: 15%;
            left: calc(100% - 110px);
            height: 70%;
            font-size: 25px;
            text-align: center;
            z-index: 3;

            .container-blue {
                height: 28%;
                max-width: 180px;
                background-color: #280071;
                color: white;

                @media screen and (min-width: $dm) {
                    min-width: 220px;
                }

                @media screen and (min-width: $dm2) {
                    min-width: 220px;
                }

                @media screen and (min-width: $r) {
                    min-width: 320px;
                }

                @media screen and (min-width: $r2) {
                    min-width: 420px;
                }

                .normal-text {
                    color: $color-terceary;
                    text-align: center;
                }

                .icon_1 {
                    max-height: 30px;
                    max-width: 20px;
                    background-image: url("/Cursos_presenciales_selectos/icon_1.png");
                    background-size: cover;

                    @media screen and (min-width: $dm) {
                        height: 40px;
                        width: 25px;
                    }

                    @media screen and (min-width: $dm2) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r2) {
                        height: 35px;
                        width: 30px;
                    }
                }

                .icon_2 {
                       max-height: 32px;
                    max-width: 41px;
                    background-image: url("/Cursos_presenciales_selectos/icon_2.png");
                    background-size: cover;

                    @media screen and (min-width: $dm) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $dm2) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r2) {
                        height: 35px;
                        width: 30px;
                    }
                }

                .icon_3 {
                    max-height: 30px;
                    max-width: 24px;
                    background-image: url("/Cursos_presenciales_selectos/icon_3.png");
                    background-size: cover;

                    @media screen and (min-width: $dm) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $dm2) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r) {
                        height: 35px;
                        width: 30px;
                    }

                    @media screen and (min-width: $r2) {
                        height: 35px;
                        width: 30px;
                    }
                }

            }

        }

    }

}
</style>
