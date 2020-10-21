<template>
<div v-if="screenWidth != nm" class="ThHeroPriceFaceToFaceCourses container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="545" mySidebarSearchId="545" title="" backgroundColor="transparent" iconsColor="orange" />
    <a href="/">
        <div class="IDEM-icon" /></a>
    <div id="example" style="height:100vh;display:flex;flex-direction:column;">
        <div class="p-0 w-100 h-100" style="text-shadow: 1px 1px 2px #333;">
            <!-- Text slides with image -->
            <div class="container screen1 n1 h-100 d-flex flex-column justify-content-center">
                <div class=" px-lg-5 pt-5">
                    <div class="formulario-general h-100 w-100 d-flex flex-column justify-content-center">
                        <p class="text m-0">{{courseName}}</p>
                    </div>
                </div>
                <div class="buyactions-form d-flex ">
                    <div class="form d-flex justify-content-end pr-5 pt-sm-3" style="z-index:800;max-width:394px;">
                        <div class="btn-wrapper dx-flex justify-content-end">
                            <button class="btn btn-danger comprar-btn"> Comprar ahora </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pt-sm-4 pr-5" style="z-index:800;max-width:394px;">
                        <div class="d-flex flex-column justify-content-end">
                            <label class=" form radio m-0 d-flex ">
                                <div class="d-flex flex-column justify-content-center">
                                    <input type="radio" checked="checked" name="is_company">
                                    <span class="checkround"></span>
                                </div>
                                <div class="d-flex">
                                    <p class="radio m-0 d-flex flex-column justify-content-center">Precio estudiantes</p>
                                    <p class="px-1 radio-price">s/{{studentPrice}}</p>
                                    <p class="radio-decimal">.00</p>
                                </div>
                            </label>
                            <label class="radio m-0 d-flex ">
                                <div class="d-flex flex-column justify-content-center">
                                    <input type="radio" checked="checked" name="is_company">
                                    <span class="checkround"></span>
                                </div>
                                <div class="d-flex d-flex justify-content-start px-0">
                                    <p class="radio d-flex m-0 flex-column justify-content-center">Precio profesionales</p>
                                    <p class="px-1 radio-price">s/{{profetionalPrice}}</p>
                                    <p class="radio-decimal">.00</p>
                                </div>
                            </label>
                            <label class="radio d-flex ">
                                <div class="d-flex flex-column justify-content-center">
                                    <input type="radio" checked="checked" name="is_company">
                                    <span class="checkround"></span>
                                </div>
                                <div class="d-flex">
                                    <p class="radio m-0 d-flex flex-column justify-content-center">Precio coorporativo</p>
                                    <p class="px-1 radio-price">s/{{corporativePrice}}</p>
                                    <p class="radio-decimal">.00</p>
                                    <p class="radio" style="position:absolute;top:15px;;">(5 entradas)</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data: function () {
        return {
            screenWidth: 40,
        }
    },
    props: {
        courseName: {
            type: String,
            default: 'Seminario de Derecho Tributario'
        },
        studentPrice: {
            type: Number,
            default: '0'
        },
        profetionalPrice: {
            type: Number,
            default: '0'
        },
        corporativePrice: {
            type: Number,
            default: '0'
        },
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

.ThHeroPriceFaceToFaceCourses {
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
        height: 67px;
        width: 44px;
        z-index: 50;

        @media screen and (min-width: $ml) {
            height: 75px;
            width: 50px;
        }

        //iphnoe4 and 5
        @media only screen and (min-width: 425px) and (max-height: 320px) {
            height: 67px;
            width: 44px;
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
        background-size: cover;
        max-width: 10000px;
        background-image: url("/Cursos_presenciales_selectos/Fotos-IDEM--08.png");
        background-position: center;
        background-size: cover;

        .buyactions-form {
            flex-direction: column;

            //landscape
            @media only screen and (min-width: 425px) and (max-height: 425px) {
                flex-direction: row;
            }
        }
    }

    .text {
        color: #280071;
        text-align: left;
        font-size: 30px;
        line-height: 35px;
        font-weight: 100;
        font-family: TIEMPO;
        text-shadow: none;
        text-decoration: underline #280071;
        // max-width: 300px;

        @media screen and (min-width: $ml) {
            font-size: 35px;
            line-height: 44px;
        }

        @media screen and (min-width: $t) {
            max-width: 600px;
        }

        //Landscape
        @media only screen and (min-width: 425px) and (max-height: 425px) {
            font-size: 30px;
            max-width: 400px;
        }
    }

    /* The radio */
    .radio {
        display: block;
        position: relative;
        padding-left: 15px;
        margin-bottom: 12px;
        font-size: 10px;
        font-family: FABRIK;
        text-shadow: none;
        color: #F94139;
        text-decoration: none;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        @media screen and (min-width: $ml) {
            font-size: 12px;
            padding-left: 18px;
        }

        .radio-decimal {
            padding: 0;
            margin-top: 8px;
            margin-bottom: 0px;

            @media screen and (min-width: $ml) {
                font-size: 10px;
            }
        }

        .radio-price {
            margin-top: 5px;
            margin-left: 2px;
            font-family: TIEMPO;
            font-size: 15px;
            margin-bottom: 0px;

            @media screen and (min-width: $ml) {
                font-size: 17px;
            }

        }
    }

    /* Hide the browser's default radio button */
    .radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkround {
        height: 12px;
        width: 12px;
        background-color: transparent;
        border-color: #F94139;
        border-style: solid;
        border-width: 1.5px;
        border-radius: 50%;

        @media screen and (min-width: $ml) {
            left: 120px;
        }

        //Landscape
        @media only screen and (min-width: 425px) and (max-height: 425px) {
            left: 8px;
        }
    }

    /* When the radio button is checked, add a blue background */
    .radio input:checked~.checkround {
        background-color: transparent;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkround:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .radio input:checked~.checkround:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .radio .checkround:after {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #F94139;

    }

    /* The check */

    /* Hide the browser's default checkbox */

    /* Create a custom checkbox */

    /* When the checkbox is checked, add a blue background */
    .check input:checked~.checkmark {
        background-color: transparent;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .check input:checked~.checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */

    .comprar-btn,
    .agregar-btn {
        border-color: transparent;
        border-radius: 0px;
        font-family: FABRIK;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.8);

        @media screen and (min-width: $dm) {
            font-size: 20px;
        }
    }

    .comprar-btn {
        background-color: #F94139;

        @media screen and (min-width: $ml) {
            padding-left: 25px;
            padding-right: 25px;
        }
    }

    .agregar-btn {
        border-color: #F94139;
        background-color: transparent;
    }
}
</style>
