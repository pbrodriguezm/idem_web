<template>
<b-container fluid class="sonamos p-0">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide style="height:100vh;">
            <b-row class="h-100">
                <b-col class="uno h-100 col-12 p-0 d-flex flex-column justify-content-start p-5">
                    <div class="text d-flex flex-column p-5 ml-6">
                        <p class="hero-title px-3 m-0 p-0"> Soñamos con un</p>
                        <p class="hero-title px-3 "> futuro Utópico</p>
                    </div>
                </b-col>
            </b-row>
        </b-carousel-slide>
    </b-carousel>
    <!--hero-->
    <div class="franja-azul d-flex justify-content-end col-7 p-0">
        <b-col class="col-3 h-100 d-flex flex-column justify-content-center">Puno</b-col>
        <b-col class="col-3 h-100 d-flex flex-column justify-content-center">Arequipa</b-col>
        <b-col class="col-3 h-100 d-flex flex-column justify-content-center">Cusco</b-col>
    </div>
</b-container>
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

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.sonamos {
    position: relative;

    .carousel-caption {
        font-family: 'Merriweather', serif;
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
    }

    .uno {
        background-image: url("/Donaciones/Fotos-IDEM--21.png");
        background-size: cover;
    }

    .text {
        opacity: 1;
        color: #F8433C;
        text-align: left;
        font-size: 50px;
        font-weight: 100;
        z-index: 35;

        text-shadow: none;
        text-decoration: underline #F8433C;
        font-family: TIEMPO;

        .hero-title {
            color: $color-secondary;
            text-decoration: underline $color-secondary;
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 83%;
        background-color: #F8433C;
        max-height: 7%;
        max-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 58.5%;
    }

    .carousel-control-next {
        right: 31.5%;
    }

    .franja-azul {
        background-color: $color-secondary;
        position: absolute;
        font-family: FABRIK;
        bottom: 0;
        height: 10%;
        z-index: 25;
        margin-left: 1px;
        color: white;
    }

    .carousel-control-prev-icon {
        background-image: url("/back.png");
    }

    .carousel-control-next-icon {
        background-image: url("/front.png");
    }
}
</style>
