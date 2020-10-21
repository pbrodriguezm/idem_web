<template>
<div class="container-fluid NuestraFilosofiaDesktop p-0" style="height:100vh; width:100%;">
    <div class="row h-100 w-100 m-0 p-0">
        <div class="column uno h-100 col-3 p-0">
            <div class="screen1 h-100 b-100 d-flex justify-content-center">
                <div class="h-50 d-flex flex-column justify-content-center">
                    <p class="section-title m-0">Nuestra</p>
                    <p class="section-title m-0">Filosofía</p>
                </div>
            </div>
        </div>
        <div class="column screen2 h-100 col-9 p-0">
            <div v-for="slide in slides" class="card">
                <div class="card-image" :style="{backgroundImage:`url(${slide.imageUrl})`}" />
                <div class="card-text w-100 d-flex flex-column justify-content-start">
                    <span class="normal-text cursos-title text-left pt-3 px-0 pb-2 mb-0">{{slide.title}}</span>
                    <p class="normal-text cursos-text text-left py-2 px-0">
                        {{slide.text}}
                    </p>
                </div>
            </div>
        </div>
    </div>
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
        slides: 'contenido/we/getOurPhilosophySlides',
    }),
    methods: {}
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.NuestraFilosofiaDesktop {
    .screen1 {
        z-index: -4;
        max-width: 5000px;
        background: linear-gradient(180deg, $color-primary 50%, white 50%);
        opacity: 1;
        text-shadow: none;

        .section-title {
            color: $color-terceary;
        }
    }

    .screen2 {
        display: flex;
        align-items: center;
        padding-right: 800px;
        background: linear-gradient(180deg, $color-primary 50%, white 50%);

        .card {
            border: none;
            text-shadow: none;
            height: 70%;
            width: 33%;
            display: flex;
            flex-direction: column;
            background-color: white;
            margin-right: 10px;

            @media screen and (min-width: $ds2) {
                width: 30%;
                margin-right: 10px;
            }

            @media screen and (min-width: $dm) {
                width: 30%;
                margin-right: 15px;
            }

            @media screen and (min-width: $r) {
                width: 30%;
                margin-right: 18px;
            }

            @media screen and (min-width: $r2) {
                width: 30%;
                margin-right: 22px;
            }

            .card-image {
                min-height: 65%;
                background-size: cover;
                background-position: center top 0%;
            }

            .cursos-title,
            .cursos-text {
                color: $color-secondary;
            }

            .cursos-title {
                font-family: FABRIKBOLD;
            }
        }
    }
}
</style>
