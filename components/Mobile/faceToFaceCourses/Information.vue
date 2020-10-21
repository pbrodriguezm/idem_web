<!-- eslint-disable -->
<template>
<div class="InformationMobileFaceToFaceCourses container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="88" mySidebarSearchId="88" title="" backgroundColor="transparent" iconsColor="orange" />
    <div class="contenido  d-flex flex-column justify-content-center h-100">
        <div class="contenidos h-100">
            <div class="h-100 title-wrapper d-flex flex-column justify-content-center" style="">
                <div class="d-flex w-100 h-50 flex-column justify-content-center">
                    <div class="title">información</div>
                </div>
            </div>
            <ul class="contenidos p-0 d-flex flex-column justify-content-center" style="list-style-type: none;">
                <p class="m-0 mb-2">Se llevará a tratar temas como:</p>
                <li class="m-0">-La reforma Tributaria</li>
                <li class="m-0">-Los Problemas Tributarios Actuales, La Contabilidad y <br>
                    el Derecho Tributario, Los Procedimientos Tributarios.
                </li>
                <p class="m-0 mt-2">El objetivo del presente seminario es poder difundir el <br>
                    conocimiento sobre el sistema tributario en nuestro <br>
                    pais y sus instituciones, promoviendo un debate y la <br>
                    reflexión académica de las mismas como. Un aporte a <br>
                    la cultura tributaria en nuestro país. </p>
            </ul>
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
$mm:320px;
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.InformationMobileFaceToFaceCourses {
    background-color: white;

    .contenido {
        padding: 20px;

        @media screen and (min-width: $ml) {
            padding: 25px;
        }

        .title-wrapper {
            width: 50px;

            @media screen and (min-width: $mm) {
                width: 60px;
            }

            .title {
                color: #F8433C;
                -webkit-transform: rotate(-90deg);
                font-family: TIEMPO;
                margin: 0px;
                font-size: 25px;
                margin-top: 150%;

                @media screen and (min-width: $ml) {
                    margin-top: 220%;
                    font-size: 30px;
                }
            }
        }

        .contenidos {
            color: #280071;
            font-family: FABRIK;
            display: flex;
            font-size: 14px;
            line-height: 16px;



            //iphnoe4 and 5
            @media only screen and (min-width: 425px) and (max-height: 320px) {
                font-size: 15px;
                line-height: 17px;
            }
        }
    }
}
</style>
