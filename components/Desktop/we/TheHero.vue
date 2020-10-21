<template>
<div class="TheHeroWeDesktop container-fluid p-0">
    <b-carousel id="carousel1" :interval="4000" controls>
        <b-carousel-slide v-for="slide in slides" style="height:100vh;">
            <div class="row h-100">
                <div class="column h-100 col-8 p-0">
                    <div class="screen1 h-100 d-flex justify-content-end" :style="{backgroundImage:`url(${slide.imageUrl})`}">
                        <div class="text-wrapper h-100 px-3">
                            <div class="hero-title">{{slide.text}}</div>
                            <a class="normal-text" href="/brochure/Brochure-IDEM-001.pdf" download="Brochure IDEM">
                                <div class="normal-text">> Descargar Brochure</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="column h-100 col-4 p-0">
                    <div class="screen2 h-100 b-100">
                        <div class="LogoBlanco" />
                    </div>
                </div>
            </div>
        </b-carousel-slide>
    </b-carousel>
    <!--hero-->
</div>
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
        slides: 'contenido/we/getheroWeSlides',
    }),
    methods: {}
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';

.TheHeroWeDesktop {

    .normal-text {
        padding-top: 25px;
        text-decoration: underline $color-primary;
    }

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
        background-color: rgba(127, 205, 199, 0.7);
        max-width: 10000px;
        background-size: cover;
    }

    .text-wrapper {
        position: absolute;
        left: 65%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 400px;

        @media screen and (min-width: $ds2) {
            min-width: 450px;
        }

        @media screen and (min-width: $dm) {
            min-width: 500px;
        }

        @media screen and (min-width: $r) {
            min-width: 600px;
        }

        @media screen and (min-width: $r2) {
            min-width: 700px;
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
            height: 185px;
            width: 169px;
            background-size: cover;

            @media screen and (min-width: $dm) {
                height: 285px;
                width: 269px;
            }
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 93%;
        background-color: #280071;
        max-height: 7%;
        min-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 57%;
             @media screen and (min-width: $r) {
                   left: 56.8%;
            }
    }

    .carousel-control-next {
        left: 62%;
             @media screen and (min-width: $r) {
                   left: 61.8%;
            }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        background-color: $color-primary;
        opacity: 1;
        max-height: 7%;
        top: 93%;
        max-width: 4.3%;
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }
}
</style>
