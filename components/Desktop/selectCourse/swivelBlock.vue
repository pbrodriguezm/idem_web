<!-- eslint-disable -->
<template>
<div v-if="noclicked" class="card cuadrado_azul d-flex justify-content-between align-items-end" @click="click_slide">
    <div class="normal-text module-number">Módulo {{id}}</div>
    <span><img class="flecha" src="/cursoSelect/flecharoja.png"></span>
</div>
<div v-else class="card__face--back card cuadrado_rojo" @click=" click_slide">
    <div class="flecha" />
    <div class="normal-text module-number">Módulo {{id}}</div>
    <div class="normal-text">{{this.name}}</div>
    <div class="normal-text">Profesor: {{this.docent}}</div>
    <div class="small-text">
        <div v-for="goal in goals">{{goal.content}}</div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        noclicked: {
            type: Boolean,
            default: true
        },
        id: {
            type: String,
            requiered: true
        },
        name: {
            type: String,
            default: 'vacio'
        },
        docent: {
            type: String,
            default: 'vacio'
        },
        goals: {
            type: Array,
            default: [1, 2, 3]
        }
    },
    methods: {
        click_slide: function () {
            this.noclicked = !this.noclicked;
        },
    }
}
</script>

<!-- eslint-disable -->

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$sm:769px;
$dm:1024px;
$r:1440px;

/*Estilos cuadro morado*/
.silabo-morado {
    background-color: $color-terceary;

    .principal {
        position: relative;
        padding-left: 50px;
        border: none;

        .title-container {
            position: absolute;
            top: 0%;
            left: 0%;
            width: 50px;
            height: 100%;

            .section-title {
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                color: $color-secondary;
            }

        }

        .cuadrado_azul {
            background-color: $color-primary;
            border: solid 1px #DEECED;

            .module-number {
                font-family: TIEMPO;
                color: $color-terceary;
            }

            .flecha {
                cursor: pointer;
                background-image: url("/cursoSelect/flecharoja.png");
                background-size: cover;
                height: 15px;
                width: 25px;
            }
        }

        .cuadrado_rojo {
            background-color: $color-secondary;
            border: solid 1px #DEECED;
            display: flex;
            flex-direction: column;

            .small-text {
                color: $color-terceary;
            }

            .module-number {
                font-family: TIEMPO;
                color: $color-primary;
            }

            .flecha {
                cursor: pointer;
                background-image: url("/cursoSelect/flechamorada.png");
                background-size: cover;
                height: 15px;
                width: 25px;
                margin-bottom: 15px;
            }
        }

    }
}

.card {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    padding: 10px;
    width: 100%;
    height: 100%;

    @media screen and (min-width: $ds2) {
        padding: 15px;
    }

    .normal-text {
        color: $color-terceary;
    }
}

.card__face--back {
    transform: rotateY(360deg);

}
</style>
