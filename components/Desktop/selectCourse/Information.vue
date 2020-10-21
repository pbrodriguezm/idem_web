<!-- eslint-disable -->
<template>
<div class="container-fluid informacion_cursos p-0" style="height:75vh; width:100%;">
    <div class="row h-100 w-100 m-0">
        <div class="screen1 col-md-6 h-100 w-100">
            <div class="row h-100 w-100">
                <div class="col-md-4  d-flex align-items-center flex-column justify-content-center">
                    <div class="titulo_informacion section-title">Información</div>
                </div>
                <div class="col-md-8 d-flex align-items-center flex-column justify-content-center contenido_reloj">
                    <div class="row">
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                    </div>
                    <div class="row" style="">
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                        <div class="col-md-4 h-100 w-100 clock-wrapper">
                            <img class="clock-icon" src="/cursoSelect/icon.png" width="70px;">
                            <div class="small-text pt-2 pb-2">t is a long established fact that a reader will be distracted by the readable </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="screen2 col-md-6 h-100 w-100">
            <div class="row h-100 w-100">
                <div class="col-md-3 h-100 w-100 d-flex align-items-center flex-column justify-content-center">
                    <div class="title-container d-flex flex-column justify-content-center">
                        <p class="titulo_informacion section-title pt-4 d-flex justify-content-center pt-0" style="min-height:350px;min-width:350px;">Sobre el curso</p>
                    </div>
                </div>
                <div class="col-md-8 h-100 w-100 d-flex align-items-center flex-column justify-content-center text-left pl-0">
                    <div class="normal-text texto_descripcion_curso">
                        El curso de derecho concursal está compuesto por
                        6 modulos dictados por reconocidos abogados del Estudio
                        Rebaza Alcazar y De Las Casas. Cada uno de los módulos contará
                        con material de lectura asignado por el profesor encargado; asi
                        como, con una asesoría adicional para resolver dudas y/o
                        abordar comentarios sobre los temas propuestos. El curso cuenta
                        con una evaluación final, la misma que deberá ser aprobada de
                        manera satisfactoria por los alumnos, para poder recibir el certificado
                        correspondiente por los alumnos.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Text slides with image -->
</template>

<script>
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$dm:1024px;
$r:1440px;

.informacion_cursos {
    .screen1 {
        background-color: $color-terceary;

        .titulo_informacion {
            -webkit-transform: rotate(-90deg);
            transform: rotate(-90deg);
            color: $color-secondary;
        }

        .contenido_reloj {
            .clock-wrapper {
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                @media screen and (min-width: $dm) {
                    padding: 15px;
                }

                @media screen and (min-width: $dm2) {
                    padding: 20px;
                }

                @media screen and (min-width: $r) {
                    padding: 25px;
                }

                @media screen and (min-width: $r2) {
                    padding: 30px;
                }

                .clock-icon {
                    height: 50px;
                    width: 50px;

                    @media screen and (min-width: $dm) {
                        width: 60px;
                        height: 60px;
                    }

                    @media screen and (min-width: $dm2) {
                        width: 70px;
                        height: 70px;
                    }

                    @media screen and (min-width: $r) {
                        width: 80px;
                        height: 80px;
                    }

                    @media screen and (min-width: $r2) {
                        width: 100px;
                        height: 100px;
                    }
                }
            }
        }
    }

    .screen2 {
        background-color: $color-primary;

        .texto_descripcion_curso {
            color: $color-terceary;
        }

        .title-container {
            color: red;
            z-index: 2;
            width: 50px;
            height: 50%;
            border: none;

            @media screen and (min-width: $dm) {
                width: 100px;
            }
        }

        .titulo_informacion {
            -webkit-transform: rotate(-90deg);
            transform: rotate(-90deg);
            color: $color-secondary;
        }
    }
}
</style>
