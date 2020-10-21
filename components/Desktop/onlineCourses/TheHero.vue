<template>
<b-container style="position:relative;" fluid class="HeroOnlineCourses p-0">
    <b-carousel id="carousel1" :interval="12000" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls>
        <b-carousel-slide v-for="(slide, index) in slides" :key="index" style="height:100vh;min-height:480pxs">
            <div class="row h-100">
                <div class="screen1 column h-100 col-12 col-md-8 p-0" :style="{backgroundImage:`url(${slide.imageUrl})`}">
                    <div class="slideText d-flex flex-column justify-content-center h-100 w-100 px-0">
                        <h3 class="hero-title"> {{slide.text}} </h3>
                    </div>
                </div>
                <div class="screen2 column h-100 col-0 col-md-4 p-0">
                    <div class="LogoBlanco" />
                </div>
            </div>
        </b-carousel-slide>
    </b-carousel>
    <!--hero-->
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
        slides: 'contenido/onlineCourses/getheroOnlineCoursesSlides',
    }),
    methods: {}
}
</script>

<style lang="scss">
@import 'assets/scss/main';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.HeroOnlineCourses {
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
            margin-left: 80%;
            max-width: 250px;

            @media screen and (min-width: $dm) {
                margin-left: 80%;
                max-width: 350px;
            }

            @media screen and (min-width: $r) {
                margin-left: 80%;
                max-width: 400px;
            }

            @media screen and (min-width: $r2) {
                margin-left: 80%;
                max-width: 540px;
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
}
</style>
