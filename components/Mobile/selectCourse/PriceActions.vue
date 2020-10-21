<template>
<div class="PriceActions container-fluid justify-content-center d-flex flex-column px-0" style="position:relative;">
    <TheNavbarMobile mySidebarId="321" mySidebarSearchId="321" title="" backgroundColor="transparent" iconsColor="white" />
    <div class="general-wrapper">
        <div class="d-flex justify-content-center">
            <div class=" d-flex  justify-content-center px-4 py-2">
                <div class="title">Curso de Derecho Concursal</div>
            </div>
        </div>
        <div class="columna2">
            <div class="formulario-general d-flex flex-column justify-content-center h-100 w-100">
                <div class="form d-flex flex-column">
                    <div class="btn-wrapper d-flex justify-content-center px-3 pt-2 pb-2">
                        <a href="/pasarela"><button class="PriceActions-btn btn  btn-danger comprar-btn">Comprar ahora</button></a>
                    </div>
                    <div class="texto pt-2 d-flex justify-content-center">
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
$mm:320px;
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.PriceActions {
    height: 300px;
    background-color: #f9423a;
    height: 80vh;

    @media only screen and (min-width: 425px) and (max-height: 425px) {
        height: 100vh;
    }

    .general-wrapper {
        @media only screen and (min-width: 425px) and (max-height: 425px) {
            margin-top: 50px;
        }

        .title {
            color: #DCEBEC;
            font-family: TIEMPO;
            text-decoration: underline #DCEBEC;
            text-align: left;
            font-size: 30px;
            line-height: 35px;
            font-weight: 100;
            font-family: TIEMPO;
            text-shadow: none;
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

        .formulario-general {

            .radio,
            .radio-decimal {
                padding: 0;
                margin-top: -10px;
                margin-left: 2px;
                margin-top: 8px;
                margin-bottom: 0px;
            }

            .radio-price {
                margin-top: -10px;
                margin-left: 2px;
                font-family: TIEMPO;
                font-size: 30px;
                margin-bottom: 0px;
            }

            .radio-decimal {
                margin-top: -5px;
                margin-left: -2px;
                font-family: TIEMPO;
                margin-bottom: 0px;
            }
        }

        .texto {
            font-size: 10px;
            font-family: FABRIK;
            text-shadow: none;
            color: #DCEBEC;
            text-decoration: none;
        }

        .PriceActions-btn,
        .agregar-btn {
            border-color: #DCEBEC;
            border-radius: 0px;
            font-family: FABRIK;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.8);

            @media screen and (min-width: $dm) {
                font-size: 20px;
            }
        }

        .PriceActions-btn {
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
