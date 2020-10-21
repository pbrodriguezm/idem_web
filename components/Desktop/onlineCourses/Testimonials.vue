<!-- eslint-disable -->
<template>
<div class="container-fluid online_testimonials p-0">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <b-carousel id="carousel1" :interval="4000" class="p-0 m-0" style="text-shadow: 1px 1px 2px #333;" controls img-width="1024" img-height="480">
        <!-- Text slides with image -->
        <b-carousel-slide v-for="testimonial in Testimonials" style="height:100vh;">
            <div class="d-flex m-0 p-0 h-100 w-100">
                <div class="column  h-100 col-3 p-0">
                    <div class="screen1 h-100 b-100">
                        <div class="white_container">
                            <h4 class="section-title">Testimonios</h4>
                            <span class="normal-text">Hemos capacitado a miles de profesionales.</span>
                        </div>
                    </div>
                </div>
                <div class="column uno h-100 col-9 p-0">
                    <div class="container screen2 d-flex justify-content-center h-100 d-flex justify-content-start">
                        <div class="d-flex justify-content-center flex-column" style="z-index:2;">
                            <div class="text-container">
                                <div class="hero-title comillas">“</div>
                                <h3 class="hero-title">{{testimonial.text}}</h3>
                                <p class="normal-text nombre pt-2">-{{testimonial.author}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-carousel-slide>
        <!-- Text slides with image -->
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
        Testimonials: "contenido/main/getTestimonials"
    }),
    methods: {}
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$ds: 768px;
$dm: 1024px;
$r: 1440px;
$ds2: 896px;
$dm2: 1232px;
$r2: 2000px;

.online_testimonials {
    .carousel-caption {
        font-family: "Merriweather", serif;
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        text-shadow: none;
    }

    .screen2 {
        z-index: -4;
        background-image: url("/Donaciones/testimonio_1_bg.png");
        background-size: cover;
        max-width: 5000px;

        .text-container {
            padding:0px 50px 0px 30%;
               @media screen and (min-width: $dm2) {
                       padding:0px 20% 0px 25%;
                }
               @media screen and (min-width: $r2) {
                       padding:0px 25% 0px 25%;
                }
            .comillas {
                font-size: 155px;
                text-align:left;
                margin:0px;
                text-decoration:none;
                @media screen and (min-width: $dm) {
                     font-size: 155px;
                }

                @media screen and (min-width: $r) {
                    font-size: 80px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 100px;
                }
            }

            .nombre {
                font-family: FABRIK;
                text-align: left;
                color: $color-secondary;
                text-decoration: none;

                @media screen and (min-width: $ds) {
                    font-size: 15px;
                    line-height: 17px;
                }

                @media screen and (min-width: $dm) {
                    font-size: 16px;
                    line-height: 18px;
                }

                @media screen and (min-width: $r) {
                    font-size: 18px;
                    line-height: 20px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 20px;
                    line-height: 22px;
                }
            }
        }
    }

    .screen-filter {
        background-color: rgba(127, 205, 199, 0.7);
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .screen1 {
        z-index: -4;
        background-color: $color-terceary;

        .white_container {
            position: absolute;
            top: calc(50% - 75px);
            left: calc(100% - 105px);
            min-width: 250px;
            min-height: 160px;
            z-index: 8;
            background-color: white;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media screen and (min-width: $dm) {
                min-width: 300px;
                min-height: 200px;
                left: calc(100% - 135px);
            }

            @media screen and (min-width: $r) {
                top: calc(50% - 125px);
                min-width: 350px;
                min-height: 250px;
                left: calc(100% - 135px);
            }

            @media screen and (min-width: $r2) {
                top: calc(50% - 150px);
                min-width: 450px;
                min-height: 300px;
                left: calc(100% - 135px);
            }
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        position: absolute;
        z-index: 50000;
        top: calc(50% + 85px);
        opacity: 1;
        height: 7%;
        width: 40px;
        background-color: $color-primary;

        @media screen and (min-width: $dm) {
            top: calc(50% + 125px);
            min-width: 50px;

        }

        @media screen and (min-width: $r) {
            top: calc(50% + 125px);
            min-width: 62px;
        }

        @media screen and (min-width: $r2) {
            top: calc(50% + 150px);
            min-width: 90px;
        }
    }

    .carousel-control-prev {
        left: calc(30% + 20px);

        @media screen and (min-width: $dm) {
            left: calc(25% + 65px);
        }

        @media screen and (min-width: $r) {
            left: calc(25% + 94px);
        }

        @media screen and (min-width: $r2) {
            left: calc(25% + 135px);
        }
    }

    .carousel-control-next {
        left: calc(30% + 60px);

        @media screen and (min-width: $dm) {
            left: calc(25% + 115px);
        }

        @media screen and (min-width: $r) {
            left: calc(25% + 155px);
        }

        @media screen and (min-width: $r2) {
            left: calc(25% + 225px);
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
