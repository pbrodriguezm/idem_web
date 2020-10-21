<template>
<b-container style="position:relative;" fluid class="HeroMain p-0">
    <b-carousel id="carousel1" :interval="12000" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls>
        <b-carousel-slide v-for="(slide, index) in slides" :key="index" style="height:100vh;min-height:480pxs">
            <div class="row h-100">
                <div class="screen1 column h-100 col-12 col-md-8 p-0" :style="{backgroundImage:`url(${slide.imageUrl})`}">
                    <div class="slideText d-flex flex-column justify-content-center h-100 w-100 px-0">
                        <div class="hero-title"> {{slide.text}} </div>
                    </div>
                </div>
                <div class="screen2 column h-100 col-0 col-md-4 p-0">
                    <div class="LogoBlanco" />
                </div>
            </div>
        </b-carousel-slide>
    </b-carousel>
    <!--hero-->
    <div class="franja-azul d-flex justify-content-end col-9 col-md-7 p-0">
        <div class="px-4 franja-option h-100 d-flex flex-column justify-content-center">CURSOS DE NEGOCIOS</div>
        <div class="px-4 pr-5 franja-option h-100 d-flex flex-column justify-content-center">CURSOS DE TECNOLOGIA</div>
    </div>
</b-container>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapActions,
    mapMutations
} from 'vuex'

export default {
    computed: mapGetters({
        slides: 'contenido/main/getHeroMainSlides',
    }),
    methods: {}
}
</script>

<style lang="scss">
@import 'assets/scss/main';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.HeroMain {
    .carousel-caption {
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
    }

    .screen1 {
        background-size: cover;

        .slideText {
            margin-left: 60%;
            max-width: 450px;

            @media screen and (min-width: $dm) {
                margin-left: 60%;
                max-width: 550px;
            }

            @media screen and (min-width: $dm2) {
                margin-left: 60%;
                max-width: 650px;
            }

            @media screen and (min-width: $r) {
                margin-left: 60%;
                max-width: 800px;
            }

            @media screen and (min-width: $r2) {
                margin-left: 60%;
                max-width: 1000px;
            }
        }
    }

    .screen2 {
        z-index: -4;
        background-color: #DCEBEC;

        .LogoBlanco {
            position: absolute;
            top: 0;
            right: 0;
            background-image: url("/LogoBlanco.png");
            height: 120px;
            width: 100px;
            background-size: cover;

            @media screen and (min-width: $ds) {
                height: 185px;
                width: 169px;
            }

            @media screen and (min-width: $dm) {
                height: 285px;
                width: 269px;
            }

            @media screen and (min-width: $r) {
                height: 350px;
                width: 350px;
            }
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 80%;
        background-color: $color-primary;
        opacity: 1;
        max-height: 7%;
        max-width: 10%;

        @media screen and (min-width: $ds) {
            max-height: 7%;
            top: 83%;
            max-width: 4.3%;
        }
    }

    .carousel-control-prev {
        left: 80%;

        @media screen and (min-width: $ds) {
            left: 58.5%;
        }
    }

    .carousel-control-next {
        right: 0%;

        @media screen and (min-width: $ds) {
            right: 33%;
        }
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }
.franja-azul {
    background-color: $color-primary;
    position: absolute;
    bottom: 0;
    height: 10%;
    z-index: 10;
    margin-left: 1px;
    color: white;
    font-family: FABRIK;

    .franja-option {
        font-size: 10px;

        @media screen and (min-width: $dm) {
            font-size: 15px;
        }

        @media screen and (min-width: $r) {
            font-size: 20px;
        }

        @media screen and (min-width: $r2) {
            font-size: 25px;
        }
    }
}
}

</style>
