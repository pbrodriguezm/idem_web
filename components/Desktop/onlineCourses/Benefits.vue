<template>
<div class="beneficiosOnlineCourses container-fluid w-100">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <div class="row">
        <div class="columna1 column col-4 col-lg-4 d-flex justify-content-end">
            <div class="text-wrapper h-100 d-flex flex-column justify-content-center p-lg-4">
                <h4 class="section-title title">Beneficios</h4>
                <span class="p normal-text">Cada curso online o presencial esta avaládo oficialmente por Idem, además formarás parte de una comunidad donde el dinero obtenido estará 100% destinados a proyectos educativos para las personas con menos recursos.</span>
            </div>
        </div>
        <div class="columna2 column col-8 col-lg-8">
            <div class="row icons-wrapper d-flex justify-content-center flex-column h-100 col-10 col-lg-8">
                <div class="w-100 d-flex">
                    <div v-for="Benefit in Benefits" class="column col-3 d-flex flex-column justify-content-start">
                        <div class="d-flex justify-content-center pb-2 p-lg-2">
                            <div class="icon1" :style="{backgroundImage:`url(${Benefit.imageUrl})`}" />
                        </div>
                        <p class="icon-text text-center small-text">{{Benefit.text}}</p>
                    </div>
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
        Benefits: 'contenido/main/getBenefitsInformation',
    }),
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.beneficiosOnlineCourses {
    height: 225px;
    background-color: #f9423a;
    font-family: 'Merriweather', serif;
    font-size: 12px;

    @media screen and (min-width: $dm) {
        height: 300px;
    }

    @media screen and (min-width: $r) {
        height: 400px;
    }

    @media screen and (min-width: $r2) {
        height: 500px;
    }

    .columna1 {
        height: 225px;
        background-color: white;
        color: #280071;

        @media screen and (min-width: $dm) {
            height: 300px;
        }

        @media screen and (min-width: $r) {
            height: 400px;
        }

        @media screen and (min-width: $r2) {
            height: 500px;
        }
    }

    .columna2 {
        color: #280071;
        font-size: 10px;
    }

    .text-wrapper {
        width: 100%;
        font-size: 12px;

        @media screen and (min-width: $dm2) {
            width: 80%;
        }
    }

    .icon1 {
        height: 25px;
        width: 25px;
        background-size: cover;

        @media screen and (min-width: $dm) {
            height: 40px;
            width: 40px;
        }

        @media screen and (min-width: $r) {
            height: 60px;
            width: 60px;
        }

        @media screen and (min-width: $r2) {
            height: 80px;
            width: 80px;
        }
    }

    .icon2 {
        height: 25px;
        width: 25px;
        background-size: cover;

        @media screen and (min-width: $dm) {
            height: 40px;
            width: 40px;
        }

        @media screen and (min-width: $r) {
            height: 60px;
            width: 60px;
        }

        @media screen and (min-width: $r2) {
            height: 80px;
            width: 80px;
        }
    }

    .icon3 {
        height: 25px;
        width: 25px;
        background-size: cover;

        @media screen and (min-width: $dm) {
            height: 40px;
            width: 40px;
        }

        @media screen and (min-width: $r) {
            height: 60px;
            width: 60px;
        }

        @media screen and (min-width: $r2) {
            height: 80px;
            width: 80px;
        }
    }

    .icon4 {
        height: 25px;
        width: 25px;
        background-size: cover;

        @media screen and (min-width: $dm) {
            height: 40px;
            width: 40px;
        }

        @media screen and (min-width: $r) {
            height: 60px;
            width: 60px;
        }

        @media screen and (min-width: $r2) {
            height: 80px;
            width: 80px;
        }
    }

    .title {
        text-decoration: none;
    }

    .icon-text {
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>
