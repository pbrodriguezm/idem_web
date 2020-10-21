<!-- eslint-disable -->
<template>
<div class="InformationMobileFaceToFaceCourses container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="TheHeroNavbar" mySidebarSearchId="TheHeroNavbarSearch" title="" backgroundColor="transparent" iconsColor="orange" />
    <div class="contenido  d-flex flex-column justify-content-center h-100">
        <div class="contenidos h-100">
            <div class="h-100 title-wrapper d-flex flex-column justify-content-center" style="">
                <div class="d-flex w-100 h-50 flex-column justify-content-center">
                    <div class="title">información</div>
                </div>
            </div>
            <div class="contenidos p-0 d-flex" style="list-style-type: none;">
                <div class="clocks-wrapper contenido_reloj">
                    <div class="clocks-column">
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                    <div class="clocks-column">
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
                        <div class="icon-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="text pt-2 pb-2">Lorem Ipsupm dolor sip amet, consectetur adipiscing elit.</div>
                        </div>
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

.InformationMobileFaceToFaceCourses {
    background-color: #DCEBEC;

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
            max-width: 230px;
            display: flex;

            @media screen and (min-width: $ml) {
                max-width: 280px;
            }

            //landscape iphnoe4 and 5
            @media only screen and (min-width: 425px) and (max-height: 425px) {
                max-width: 500px;
            }

            .clocks-wrapper {
                display: flex;
                flex-direction: row;

                @media only screen and (min-width: 425px) and (max-height: 425px) {
                    flex-direction: column;
                }

                .clocks-column {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 50%;
                    height: 100%;

                    //landscape iphnoe4 and 5
                    @media only screen and (min-width: 425px) and (max-height: 425px) {
                        max-width: 500px;
                        flex-direction: row;
                        width: 100%;
                        height: 50%;
                    }

                    .icon-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 5px;

                        .clock-icon {
                            height: 50px;
                            width: 50px;

                            @media screen and (min-width: $ml) {
                                height: 70px;
                                width: 70px;
                            }

                            @media only screen and (min-width: 425px) and (max-height: 425px) {
                                height: 70px;
                                width: 70px;
                            }

                            @media only screen and (min-width: 425px) and (max-height: 320px) {
                                height: 50px;
                                width: 50px;
                            }
                        }

                        .text {
                            font-size: 10px;
                            line-height: 12px;
                            text-align: center;

                            @media screen and (min-width: $ml) {
                                font-size: 12px;
                                line-height: 14px;

                            }

                            @media only screen and (min-width: 425px) and (max-height: 425px) {
                                font-size: 12px;
                                line-height: 14px;
                            }

                            @media only screen and (min-width: 425px) and (max-height: 320px) {
                                font-size: 10px;
                                line-height: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
