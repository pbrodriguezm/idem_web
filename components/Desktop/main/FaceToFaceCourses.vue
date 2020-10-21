<template>
<b-container fluid class="cursospresenciales p-0">
    <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls background="#ababab" img-width="1024" img-height="480" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide  v-for="curso of cursos" :key="curso" style="height:100vh;" img-src="/CursosPresenciales/1.jpg">
            <b-row class="h-100">
                <b-col class="uno h-100 col-8 p-0">
                    <div class="container screen1 d-flex flex-column justify-content-center h-100 p-5 pb-0">
                        <b-col class="col-10 texto h-100 text-left d-flex flex-column justify-content-between">
                            <a :href="'/cursos_presenciales_selectos/'+ curso.idcursotexto">
                            <div class="d-flex flex-column justify-content-center">
                                <p v-if="new Date(curso.fechahorainicio) > new Date()" class="small-text proximamente">(*)Próximamente</p>

                                <span class="normal-text cursos-text d-flex">
                                    <div class="pin-icon mr-1" />
                                    {{curso.lugar}} / {{new Date(curso.fechahorainicio)  | dateFormat('MMM.DD', dateFormatConfig) }}
                                </span>
                                <div class="hero-title">{{curso.nombre}}</div>
                                <div class="linkto d-flex">
                                    <div class="d-flex flex-column py-1">
                                        <div class="flecha" />
                                    </div>
                                        <p class="small-text ver_mas">Ver mas</p>
                                </div>
                            </div>
                                    </a>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-column justify-content-center">
                                    <p class="normal-text ponente">Ponente</p>
                                    <div class="autor">Francisco Ruiz de Castilla</div>
                                    <div class="autor">Gustavo Herrán</div>
                                </div>
                                <div class="d-flex flex-column justify-content-center pt-4">
                                    <div class="autor">Roberto Polo</div>
                                    <div class="autor">Eder Fuentes</div>
                                </div>
                            </div>
                        </b-col>
                    </div>
                </b-col>
                <b-col class="h-100 col-4 p-0">
                    <div class="screen2 h-100 b-100 d-flex flex-column justify-content-center">
                        <div class="white-container d-flex flex-column justify-content-center">
                            <h4 class="section-title">Cursos Presenciales</h4>
                            <span class="normal-text cursos-text">Contamos también con los mejores cursos presenciales</span>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-carousel-slide>   
    </b-carousel>
</b-container>
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
            cursos: [],
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
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        },
        
        async getElements () {
            console.log('entro');
            this.loading = true 
            myApi.get('idem_cursos?idtipocurso=eq.1').then(response =>  {
            console.log(response.data);
            this.cursos = response.data;
            
        })
  
      this.loading = false

  
    }


    }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.cursospresenciales {
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
        font-size: 30px;
        max-width: 5000px;
        background-image: url(/Home/Fotos-IDEM--08.png);
        background-size: cover;
    }

    .texto {
        opacity: 1;
        color: #280071;
        font-size: 24px;
        font-weight: 100;
        font-family: TIEMPO;
        max-width: 400px;
        max-height: 600px;

        @media screen and (min-width: $dm2) {
            max-width: 500px;
        }

        @media screen and (min-width: $r) {
            max-width: 600px;
        }

        @media screen and (min-width: $r2) {
            max-width: 700px;
        }
    }

    .cursos-title {
        opacity: 1;
        color: #280071;
        font-weight: 100;
        text-decoration: none;
        font-family: TIEMPO;

        @media screen and (min-width: $ds) {
            font-size: 32px;
            line-height: 34px;
        }

        @media screen and (min-width: $dm) {
            font-size: 34px;
            line-height: 36px;
        }

        @media screen and (min-width: $r) {
            font-size: 45px;
            line-height: 47px;
        }

        @media screen and (min-width: $ds2) {
            font-size: 32px;
            line-height: 34px;
        }

        @media screen and (min-width: $dm2) {
            font-size: 35px;
            line-height: 37px;
        }

        @media screen and (min-width: $r2) {
            font-size: 50px;
            line-height: 52px;
        }
    }

    .screen2 {
        z-index: -4;
        background-color: #dbebeb;
    }

    .img-fluid {
        z-index: -5;
        height: 100%;
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: calc(50% + 100px);
        background-color: $color-primary;
        opacity: 1;
        max-height: 7%;
        max-width: 40px;

        @media screen and (min-width: $dm) {
            top: calc(50% + 125px);
            max-width: 50px;

        }

        @media screen and (min-width: $r) {
            top: calc(50% + 150px);
            max-width: 62px;
        }

        @media screen and (min-width: $r2) {
            top: calc(50% + 200px);
            max-width: 90px;
        }
    }

    .carousel-control-prev {
        left: calc(66.66% + 130px);

        @media screen and (min-width: $dm) {
            left: calc(66.66% + 155px);
        }

        @media screen and (min-width: $r) {
            left: calc(66.66% + 180px);
        }

        @media screen and (min-width: $r2) {
            left: calc(66.66% + 220px);
        }
    }

    .carousel-control-next {
        left: calc(66.66% + 165px);

        @media screen and (min-width: $dm) {
            left: calc(66.66% + 205px);
        }

        @media screen and (min-width: $r) {
            left: calc(66.66% + 240px);
        }

        @media screen and (min-width: $r2) {
            left: calc(66.66% + 310px);
        }
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }
    .white-container {
        text-align: left;
        margin-left: -100px;
        background-color: white;
        height: 200px;
        max-width: 300px;
        padding: 40px;

        @media screen and (min-width: $dm) {
            margin-left: -100px;
            background-color: white;
            height: 250px;
            max-width: 350px;
            padding: 40px;
        }

        @media screen and (min-width: $r) {
            margin-left: -100px;
            background-color: white;
            height: 300px;
            max-width: 400px;
            padding: 40px;
        }

        @media screen and (min-width: $r2) {
            margin-left: -100px;
            background-color: white;
            height: 400px;
            max-width: 500px;
            padding: 80px;
        }
    }

    .proximamente,
    .ponente {
        color: $color-secondary;
        margin-bottom: 8px;
    }

    .ver_mas {
        color: $color-secondary;
        text-decoration: underline $color-secondary;
        margin: 0;
        padding-left: 5px;
    }

    .pin-icon {
        height: 20px;
        width: 20px;
        background-image: url(/pin.png);
        background-size: cover;
    }

    .autor {
        @media screen and (min-width: $ds) {
            font-size: 12px;
            line-height: 20px;
        }

        @media screen and (min-width: $dm) {
            font-size: 17px;
            line-height: 24px;
        }

        @media screen and (min-width: $dm2) {
            font-size: 20px;
            line-height: 27px;
        }

        @media screen and (min-width: $r) {
            font-size: 24px;
            line-height: 44px;
        }

        @media screen and (min-width: $r2) {
            font-size: 24px;
            line-height: 41px;
        }
    }

    .flecha {
        height: 5px;
        width: 9px;
        background-image: url(/cursoSelect/flechaRoja.png);
        background-size: cover;
    }
}
</style>
