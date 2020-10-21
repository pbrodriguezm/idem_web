<template>
<div class="ThHeroMobile container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="TheHeroNavbar" mySidebarSearchId="TheHeroNavbarSearch" title="" backgroundColor="transparent" iconsColor="orange" />
    <a href="/">
        <div class="IDEM-icon" /></a>
    <div id="example" style="height:100vh;display:flex;flex-direction:column;">
        <b-carousel id="carousel1" :interval="4000" class="p-0" style="text-shadow: 1px 1px 2px #333;" controls>
            <!-- Text slides with image -->
            <b-carousel-slide v-for="(slide,index) in heroMainSlides" :key="index" style="height:100%;">
                <div class="h-100">
                    <div class="uno h-100 p-0">
                        <div class="container screen1 n1 h-100 d-flex" :style="{backgroundImage:`url(${slide.imageUrl})`}">
                            <div class=" h-100 pr-4 px-lg-5">
                                <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                                    <div class="hero-title m-0">{{slide.text}}</div>
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
    components: {},
    computed: {
        heroMainSlides() {
            return this.$store.state.contenido.main.heroMainSlides
        }
    },
    created() {},
    destroyed() {},
    methods: {}
}
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$mm:320px;
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.ThHeroMobile {
    position: relative;

    .carousel,
    .carousel-inner {
        height: 100%;
    }

    .IDEM-icon {
        position: absolute;
        top: 0;
        left: 20px;
        background-image: url("/idem_logo.png");
        background-size: cover;
        height: 60px;
        width: 40px;
        z-index: 50;

        @media screen and (min-width: $ml) {
            height: 75px;
            width: 50px;
        }
        //Landscape
        //iphnoe4 and 5
        @media only screen and (min-width: 425px) and (max-height: 320px) {
            height: 60px;
            width: 40px;
        }

        //iphnoe 6/7/8
        @media only screen and (min-width: 660px) and (max-height: 375px) {
            height: 80px;
            width: 54px;
        }

        //iphnoe x
        @media only screen and (min-width: 811px) and (max-height: 375px) {
            height: 80px;
            width: 54px;
        }

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
        z-index: -4;
        font-size: 35px;
        text-decoration: underline #280071;
        background-size: cover;
        max-width: 10000px;
        background-image: url("/Home/Fotos-IDEM--01.png");
        background-position: center;
        background-size: cover;
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 88%;
        background-color: #280071;
        height: 8%;
        max-height: 40px;
        max-width: 12%;
        opacity: 1;

        @media screen and (min-width: $t) {
            max-width: 10%;
        }

        //Landscape
        @media only screen and (min-width: 425px) and (max-height: 425px) {
            top: 84%;
            min-height: 40px;
        }

    }

    .carousel-control-prev {
        left: 76%;

        @media screen and (min-width: $t) {
            left: 80%;
        }
    }

    .carousel-control-next {
        left: 88%;

        @media screen and (min-width: $t) {
            left: 90%;
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
