<!-- eslint-disable -->
<template>
<div class="container-fluid silabo-morado p-5" style="height:100vh; width:100%;">
    <div class="container principal py-0 pr-0 w-100 h-100">
        <div class="title-container d-flex flex-column justify-content-center">
            <p class="section-title  d-flex justify-content-center pt-0">Sílabo</p>
        </div>
        <div v-for="row in swivelBlocksRow" class="row w-100 h-50 m-0 p-0">
            <div v-for="block in row" class="col p-0">
                <SwivelBlock :noclicked="true" :name="block.name" :docent="block.docent" :id="block.id" :goals="block.goals" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SwivelBlock from '~/components/Desktop/selectCourse/swivelBlock'
export default {
    components: {
        SwivelBlock,
    },
    computed: {
        swivelBlocksRow() {
            let allswivelBlocks = this.$store.state.courses.onlineCourses.derechoConcursal.modules
            let modulesNumber = 0
            let swivelBlockRowElmNumber = Math.ceil((allswivelBlocks.length) / 2)
            let swivelBlocksRow = []
            let swivelBlocksRows = []
            for (let i = 0; i < allswivelBlocks.length; i++) {
                let elm = JSON.stringify(allswivelBlocks[i]);
                elm = JSON.parse(elm);
                swivelBlocksRow.push(elm)
                if (swivelBlocksRow.length == swivelBlockRowElmNumber) {
                    let elm2 = JSON.stringify(swivelBlocksRow);
                    elm2 = JSON.parse(elm2);
                    swivelBlocksRows.push(swivelBlocksRow)
                    swivelBlocksRow = []

                }
                if (i == allswivelBlocks.length - 1 && swivelBlocksRow.length > 0) {
                    let elm3 = JSON.stringify(swivelBlocksRow);
                    elm3 = JSON.parse(elm3);
                    swivelBlocksRows.push(swivelBlocksRow)
                }
            }
            return swivelBlocksRows
        },

    },
    methods: {}
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
