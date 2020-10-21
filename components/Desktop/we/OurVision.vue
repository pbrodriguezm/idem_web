<!-- eslint-disable -->
<template>
<div class="OurVisionDesktop container-fluid p-6 p-md-0">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <b-carousel id="carousel1" :interval="4000" class="p-0 m-0" style="text-shadow: 1px 1px 2px #333;" controls>
        <!-- Text slides with image -->
        <b-carousel-slide v-for="slide in slides" style="height:100vh;">
            <div class=" row h-100">
                <div class="column dos h-100 col-4 p-0">
                    <div class="screen1 h-100 b-100">
                        <div class="white-container  d-flex flex-column justify-content-center">
                            <div class="section-title">Nuestra Visión</div>
                        </div>
                    </div>
                </div>
                <div class=" column uno h-100 col-8 p-0">
                    <div class="container screen2 n1 h-100 d-flex justify-content-start" :style="{backgroundImage:`url(${slide.imageUrl})`}">
                        <div class="text col-9 px-5 py-5 ml-5" style="z-index:2;">
                            <div class="hero-title">{{slide.text}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </b-carousel-slide>
    </b-carousel>
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
        slides: 'contenido/we/getOurVisionSlides',
    }),
    methods: {}
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.OurVisionDesktop {
    .carousel-caption {
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
        background-color: $color-primary;

        .white-container {
            position: absolute;
            top: 40%;
            left: 50%;
            width: 70%;
            height: 20%;
            font-family: TIEMPO;
            background-color: white;
            color: #280071;
            font-size: 30px;
            text-align: center;
            z-index: 3;

            .section-title {
                text-align: center;
            }
        }
    }

    .screen2 {
        background-size: cover;
        max-width: 5000px;

        .hero-title {
            color: $color-secondary;
            text-decoration: underline $color-secondary;

        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        background-color: $color-secondary;
        top: 93%;
        max-height: 7%;
        width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 32.96%;

        @media screen and (min-width: $r) {
            left: 32.99%;
        }

        @media screen and (min-width: $r) {
            left: 33.1%;
        }
    }

    .carousel-control-next {
        left: 37.96%;

        @media screen and (min-width: $r) {
            left: 38.1%;
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
