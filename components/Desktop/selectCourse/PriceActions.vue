<template>
<div class="comprar container-fluid w-100">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <div class="row">
        <div class="columna1 column col-6 d-flex justify-content-end">
            <div class="text-wrapper h-100 d-flex flex-column justify-content-center">
                <span class="hero-title">Curso de Derecho Concursal</span>
            </div>
        </div>
        <div class="columna2 column col-6 pt-5">
            <div class="formulario-general d-flex flex-column justify-content-center h-100 w-100">
                <div class="form d-flex justify-content-start pr-5" style="z-index:800;max-width:394px;">
                    <div class="btn-wrapper px-3">
                        <a href="/pasarela"><button class="btn btn-danger comprar-btn">Comprar ahora</button></a>
                    </div>
                    <div class="texto pt-2">
                        <div class="d-flex">
                            <p class="radio">Precio Total:</p>
                            <p class="px-2 radio-price">s/00</p>
                            <p class="radio-decimal">00</p>
                        </div>
                    </div>
                    <!-- <div class="btn-wrapper">
                      <button class="btn btn-outline-danger agregar-btn">Agregar</button>
                    </div> -->
                </div>
                <div class="d-flex justify-content-center pt-3 pl-2" style="z-index:800;max-width:394px;">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$t: 768px;
$dm: 1024px;

.comprar {
    height: 300px;
    background-color: #f9423a;
    font-family: 'Merriweather', serif;
    font-size: 12px;

    .columna1 {
        height: 300px;
        background-color: #f9423a;
        color: #DCEBEC;
    }

    .columna2 {
        color: #280071;
        font-size: 10px;
    }

    .text-wrapper {
        width: 85%;
        font-size: 12px;

        @media screen and (min-width: $dm) {
            width: 65%
        }

        .hero-title {
            color: $color-terceary;
            text-decoration: none;
            line-height: 35px;

            @media screen and (min-width: $dm) {
                line-height: 45px;
            }

            @media screen and (min-width: $r) {
                line-height: 55px;
            }

            @media screen and (min-width: $r2) {
                line-height: 65px;
            }
        }
    }

    .icon1 {
        height: 40px;
        width: 40px;
        background-image: url(/beneficios/vehicle-speedometer.png);
        background-size: cover;
    }

    .icon2 {
        height: 40px;
        width: 40px;
        background-image: url(/beneficios/medal.png);
        background-size: cover;
    }

    .icon3 {
        height: 40px;
        width: 40px;
        background-image: url(/beneficios/winner.png);
        background-size: cover;
    }

    .icon4 {
        height: 40px;
        width: 40px;
        background-image: url(/beneficios/team.png);
        background-size: cover;
    }

    .title {
        font-size: 35px;
        font-family: TIEMPO;
        text-decoration: underline #DCEBEC;
    }

    .p {
        font-size: 16px;
        line-height: 18px;
        font-family: FABRIK;
        text-align: left;
    }

    .icon-text {
        font-size: 10px;
        text-align: center;
        font-family: FABRIK;
        color: rgba(255, 255, 255, 0.8);
    }

    .formulario-general {
        .text {
            color: #280071;
            text-align: left;
            font-size: 28px;
            font-weight: 100;
            -webkit-margin-left: 30%;
            z-index: 35;
            font-family: TIEMPO;
            text-shadow: none;
            text-decoration: underline #280071;

            @media screen and (min-width: $dm) {
                font-size: 38px;
            }
        }

        .texto {
            font-size: 10px;
            font-family: FABRIK;
            text-shadow: none;
            color: #DCEBEC;
            text-decoration: none;

            .radio{
                        text-shadow: none;
                display:flex;
                flex-direction:column;
                justify-content:center;
                margin:0;
            }
            .radio-decimal {
                padding: 0;
                margin-top: 8px;
                margin-bottom: 0px;
                color: $color-terceary;

                @media screen and (min-width: $dm2) {
                    font-size: 12px;
                }

                @media screen and (min-width: $r) {
                    font-size: 18px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 22px;
                }
            }

            .radio-price {
                margin-top: 5px;
                margin-left: 2px;
                font-family: TIEMPO;
                font-size: 25px;
                margin-bottom: 0px;
                color: $color-terceary;

                @media screen and (min-width: $dm) {
                    font-size: 35px;
                }

                @media screen and (min-width: $r) {
                    font-size: 45px;
                }

                @media screen and (min-width: $r2) {
                    font-size: 55px;
                }
            }
        }

        .comprar-btn,
        .agregar-btn {
            border-color: transparent;
            border-radius: 0px;
            font-family: FABRIK;
            font-size: 10px;

            @media screen and (min-width: $dm) {
                font-size: 15px;
            }
        }

        .comprar-btn {
            background-color: #DCEBEC;
            color: #FB4030;
        }

        .agregar-btn {
            border-color: #DCEBEC;
            background-color: transparent;
        }

    }
}
</style>
