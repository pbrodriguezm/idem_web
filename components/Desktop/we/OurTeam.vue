<!-- eslint-disable -->
<template>
<div class="container-fluid NuestroEquipo p-0" style="height:100vh; width:100%;">

    <div class=" row h-100 w-100 m-0">
        <div class="column dos h-100 col-3 p-0">
            <div class="screen1 h-100 b-100">
                <div class="white-container  d-flex flex-column justify-content-center px-3">
                    <div class="section-title">Nuestro Equipo</div>
                    <div class="normal-text">
                        El equipo está compuesto por jóvenes profesionales apasionados por transformar nuestra realidad a través de la educación.
                    </div>
                </div>
            </div>
        </div>
        <div class=" column uno h-100 col-9 p-0">
            <div class="container screen2 h-100 d-flex justify-content-start">
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
            sliding: null
        }
    },
    methods: {
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

.NuestroEquipo {
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
        background-color: $color-terceary;

        .white-container {
            position: absolute;
            min-width: 210px;
            min-height: 190px;
            top: calc(50% - 115px);
            left: 50%;
            background-color: white;
            z-index: 5000;

            @media screen and (min-width: $ds2) {
                min-width: 280px;
                min-height: 220px;
                top: calc(50% - 110px);
            }

            @media screen and (min-width: $dm) {
                min-width: 320px;
                min-height: 250px;
                top: calc(50% - 125px);
            }

            @media screen and (min-width: $r) {
                min-width: 400px;
                min-height: 280px;
                top: calc(50% - 140px);
            }

            @media screen and (min-width: $r2) {
                min-width: 500px;
                min-height: 350px;
                top: calc(50% - 175px);
            }
        }
    }

    .screen2 {
        background-image: url("/team.jpg");
        background-size: cover;
        max-width: 5000px;
    }
}
</style>
