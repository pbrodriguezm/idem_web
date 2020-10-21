<template>
<div class="docentes container-fluid d-flex flex-column justify-content-center inf px-2 px-lg-5" style="height:100vh; width:100%;">
    <div class="py-5">
        <div class="text_container">
            <div class="title-text">
                <div class="hero-title">
                    Docentes
                </div>
                <p class="normal-text m-0"> Lorem ipsum dolor sit amet, consectetur .</p>
                <p class="m-0 normal-text"> Lorem ipsum dolor sit amet, consectetur adipis</p>
            </div>
        </div>
    </div>
    <div>
        <b-carousel id="carousel1" :interval="4000" controls>
            <b-carousel-slide v-for="pairs in pairedTeachers" style="height:50vh;;">
                <div class="w-100 h-100 px-0">
                    <div class="px-0 w-100 h-100 m-0 px-4 d-flex justify-content-center">
                        <div v-for="docent in pairs" class="d-flex w-50 px-2 py-4">
                            <div class="d-flex justify-content-start pt-0 text-center">
                                <div class="image w-100 pt-0 d-flex flex-column justify-content-center" :style="{backgroundImage:`url(${docent.imageUrl})`}">
                                    <div class="w-100 d-flex justify-content-start" />
                                </div>
                                <div class="card-text w-100 d-flex flex-column justify-content-center">
                                    <div class="cursos-title text-left">{{docent.name}}</div>
                                    <p class="small-text subtitle text-left">{{docent.subtitle}}</p>
                                    <p class="small-text text-left">
                                        {{docent.description}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        pairedTeachers() {
            let allTeachers = this.$store.state.docents.docents.Docents
            let pairedArray = []
            let pairAuxArray = []
            for (let i = 0; i < allTeachers.length; i++) {
                let elm = JSON.stringify(allTeachers[i]);
                elm = JSON.parse(elm);
                pairAuxArray.push(elm)
                if (pairAuxArray.length == 2) {
                    let elm2 = JSON.stringify(pairAuxArray);
                    elm2 = JSON.parse(elm2);
                    pairedArray.push(elm2)
                    pairAuxArray = []
                }
                if (i == allTeachers.length - 1 && pairAuxArray.length > 0) {
                    let elm3 = JSON.stringify(pairAuxArray);
                    elm3 = JSON.parse(elm3);
                    pairedArray.push(elm3)
                }
            }
            return pairedArray
        },
    },
    methods: {}
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$r:1440px;
$dm:1024px;

.docentes {
    font-family: 'Merriweather', serif;
    text-shadow: none;

    .carousel {
        margin-right: 5%;
        margin-left: 5%;
        max-width: 1200px;

        @media screen and (min-width: $r) {
            margin-right: auto;
            margin-left: auto;
            max-width: 1600px;
        }

        @media screen and (min-width: $r2) {
            max-width: 1800px;
        }

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

    }

    .title-text {
        .text {
            color: #280071;
            font-family: FABRIK;
            font-size: 18px;
            line-height: 20px;
        }

        .title {
            color: #F9423A;
            font-family: TIEMPO;
        }
    }

    .text_container {
        max-width: 400px;
        margin-left: 10%;

        @media screen and (min-width: $r) {
            max-width: 600px;
            margin-left: 5%;
        }

        @media screen and (min-width: $r2) {
            max-width: 800px;
        }
    }

    .hero-title {
        color: $color-secondary;
        text-decoration: none;

    }

    .img-fluid {
        height: 100%;
        visibility: hidden;
        border-color: transparent;
    }

    .image {
        background-size: cover;
        background-position: center;
    }

    .cursos-title {
        color: #fb4030;
        font-size: 13px;
        padding-right: 15%;
        line-height: 15px;
        text-shadow: none;
        font-family: TIEMPO;

        @media screen and (min-width: $dm) {
            font-size: 16px;
            line-height: 20px;
        }

        @media screen and (min-width: $r) {
            font-size: 24px;
            line-height: 28px;
        }

        @media screen and (min-width: $r2) {
            font-size: 32px;
            line-height: 36px;
        }
    }

    .cursos-title-2 {
        color: #fb4030;
        font-size: 15px;

        line-height: 19px;
        text-shadow: none;
    }

    .card-text {
        background-color: #DCEBEC;
        padding: 20px;

        @media screen and (min-width: $dm) {
            padding: 30px;
        }

        @media screen and (min-width: $r) {
            padding: 40px;
        }

        @media screen and (min-width: $r2) {
            padding: 50px;
        }
    }

    .cursos-text {
        color: #43398a;
        font-size: 10px;
        line-height: 12px;
        text-shadow: none;

        @media screen and (min-width: $dm) {
            font-size: 13px;
            line-height: 15px;
        }

    }

    .subtitle {
        color: $color-secondary;
    }

    .carousel-caption {
        height: 100%;
        text-shadow: none;
    }

    .cursos-button {
        background-color: #dcecec;
        color: #43398a;
        font-size: 13px;
        letter-spacing: 3px;
        text-shadow: none;
    }

    .carousel-control-prev,
    .carousel-control-next {
        .carousel-control-prev-icon {
            display: none;
        }

        .carousel-control-next-icon {
            display: none;
        }

        z-index: 15;
        top: 50%;
        height:20px;
        width:20px;
        opacity: 1;
        background-size: cover;
    }

    .carousel-control-prev {
        background-image: url(/r2.png);
    }

    .carousel-control-next {
        background-image: url(/r1.png);
    }

}
</style>
