<!-- eslint-disable -->
<template>
<div class="InformationTablesMobileFaceToFaceCourses container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="4" mySidebarSearchId="4" title="" backgroundColor="transparent" iconsColor="orange" />
    <div class="contenido  d-flex flex-column justify-content-center h-100">
        <div class="contenidos d-flex h-100">
            <div class="h-100 title-wrapper d-flex flex-column justify-content-center" style="">
                <div class="d-flex w-100 h-50 flex-column justify-content-center">
                    <div class="title">información</div>
                </div>
            </div>
            <div class="white-container  d-flex  justify-content-center">
                <div class="container-blue py-2 px-2 d-flex flex-column justify-content-center">
                    <div class="w-100 d-flex justify-content-center">
                        <div class="icon_1" />
                    </div>
                    <div class="blue-text py-2">
                        <p class="m-0"> Aula Magna de la univesidad San augustin</p>
                    </div>
                </div>
                <div class="container-blue py-4  px-2 d-flex flex-column justify-content-center my-2">
                    <div class="w-100  d-flex justify-content-center">
                        <div class="icon_2" />
                    </div>
                    <div class="blue-text py-2">
                        <p class="m-0">28 set 6:00pm-9:30pm</p>
                        <p class="m-0"> 29 set 4:00pm-8:00pm</p>
                    </div>
                </div>
                <div class="container-blue py-4 px-2 d-flex flex-column justify-content-center">
                    <div class="w-100 d-flex justify-content-center">
                        <div class="icon_3" />
                    </div>
                    <div class="blue-text py-2">
                        <p class="m-0"> Estudiante S/50.00</p>
                        <p class="m-0"> Profecional S/60.00</p>
                        <p class="m-0"> Corporativo S/200.00</p>
                    </div>
                </div>
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
$mm:320px;
$ml:375px;
$t:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.InformationTablesMobileFaceToFaceCourses {
    .contenido {
        background-color: #DCEBEC;
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
    }

    .white-container {
        text-align: center;
        flex-direction: column;

        @media only screen and (min-width: 425px) and (max-height: 425px) {
            flex-direction: row;
            align-items: center;

        }

        .container-blue {
            height: 90px;
            max-width: 160px;
            background-color: #280071;
            color: rgba(255, 255, 255, 0.8);

            @media screen and (min-width: $ml) {
                height: 120px;
                width: 200px;
            }

            @media only screen and (min-width: 425px) and (max-height: 320px) {
                height: 120px;
                width: 120px;
                margin-right: 10px;
            }

            @media only screen and (min-width: 569px) and (max-height: 425px) {
                height: 120px;
                max-width: 160px;
                margin-right: 20px;
            }

            .icon_1 {
                height: 25px;
                width: 16px;
                background-image: url("/Cursos_presenciales_selectos/icon_1.png");
                background-size: cover;
            }

            .icon_2 {
                height: 22px;
                width: 21px;
                background-image: url("/Cursos_presenciales_selectos/icon_2.png");
                background-size: cover;
            }

            .icon_3 {
                height: 24px;
                width: 20px;
                background-image: url("/Cursos_presenciales_selectos/icon_3.png");
                background-size: cover;
            }

            .blue-text {
                font-size: 10px;
                line-height: 12px;

                @media screen and (min-width: $ml) {
                    font-size: 14px;
                    line-height: 16px;
                }

                @media only screen and (min-width: 425px) and (max-height: 320px) {
                    font-size: 10px;
                    line-height: 12px;
                }

                @media only screen and (min-width: 569px) and (max-height: 425px) {
                    font-size: 14px;
                    line-height: 16px;
                }
            }
        }

    }
}
</style>
