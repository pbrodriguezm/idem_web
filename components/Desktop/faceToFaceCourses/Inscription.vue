<!-- eslint-disable -->
<template>
<div class="container-fluid inscripcion p-0" style="height:100vh; width:100%;">
    <div class=" row h-100 w-100 m-0">
        <div class="column uno h-100 col-7 p-0">
            <div class="screen2 h-100 b-100">
                <div class="white-container d-flex flex-column justify-content-center py-3 px-4">
                    
                        <div class="hero-title d-flex px-3 pt-4">¿Deseas mayor información?</div>
                        <div style="font-size:12px">Dejanos tu información y nos pondremos en contacto contigo</div>
                    
                    <div class="row px-3">
                        <div class="column col-6 px-3">
                            <label class="field a-field a-field_a1 page__field w-100">
                                <input class="field__input a-field__input" placeholder="nombre" required>
                                <span class="a-field__label-wrap">
                                    <span class=" a-field__label normal-text">Nombre</span>
                                </span>
                            </label>
                        </div>
                        <div class="column col-6 px-3">
                            <label class="field a-field a-field_a1 page__field  w-100">
                                <input class="field__input a-field__input" placeholder="apellido" required>
                                <span class="a-field__label-wrap">
                                    <span class="normal-text a-field__label">Apellido</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="column col-6 px-3">
                            <label class="field a-field a-field_a1 page__field w-100">
                                <input class="field__input a-field__input" placeholder="ejem. 9xxxxxxx" required>
                                <span class="a-field__label-wrap">
                                    <span class="normal-text a-field__label">Celular</span>
                                </span>
                            </label>
                        </div>
                        <div class="column col-6 px-3">
                            <label class="field a-field a-field_a1 page__field  w-100">
                                <input class="field__input a-field__input" placeholder="ejem. hola@gmail.com" required>
                                <span class="a-field__label-wrap">
                                    <span class="normal-text a-field__label">E-mail</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="row px-3">
<!--
                        <div class="column col-6 px-3">
                            <div class="select">
                                <select class="small-text" name="slct" id="slct">
                                    <option selected disabled>Curso/Seminario de interés</option>
                                    <option value="1">Pure CSS</option>
                                    <option value="2">No JS</option>
                                    <option value="3">Nice!</option>
                                </select>
                            </div>
                        </div>
                        <div class="column col-6 px-3">
                            <div class="card">
                                <label class="checkbox-label d-flex">
                                    <input type="checkbox">
                                    <span class="checkbox-custom rectangular"></span>
                                </label>
                                <div class="input-title">
                                    <div class="small-text">Términos y condiciones</div>
                                </div>
                            </div>
                        </div>
                        -->
                    </div>
                    <div class="row">
                        <div class="btn-wrapper d-flex justify-content-center w-100 py-4">
                            <button class="btn btn-outline-danger agregar-btn py-0" style="min-width:100px;">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" column dos h-100 col-5 p-0">
            <div class="container screen1 h-100 d-flex justify-content-start">
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
$dm:1024px;

.inscripcion {
    .carousel-caption {
        font-family: 'Merriweather', serif;
        position: absolute;
        padding: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        text-shadow: none;
    }

    .screen1 {
        z-index: -4;
        background-color: #280071;
        background-size: cover;
        max-width: 5000px;
        font-size: 30px;

        .text {
            opacity: 1;
            color: #F8433C;
            text-align: left;
            font-size: 35px;
            font-weight: 100;
            z-index: 3;
            text-shadow: none;
            text-decoration: underline #F8433C;

        }
    }

    .screen2 {
        z-index: -4;
        
        background-image: url("/Cursos_presenciales_selectos/Fotos-IDEM--10.png");
        background-size: cover;

        .row {
            @media screen and (min-width: $dm) {
                padding-top: 15px;
            }

            @media screen and (min-width: $r) {
                padding-top: 25px;
            }

            @media screen and (min-width: $r2) {
                padding-top: 25px;
            }
        }

        .white-container {
            position: absolute;
            top: calc(50% - 175px);
            left: calc(80% - 300px);
            width: 600px;
            height: 350px;
            background-color: white;
            color: #280071;
            font-size: 25px;
            text-align: center;
            z-index: 3;

            @media screen and (min-width: $dm) {
                left: 60%;
                top: calc(50% - 200px);
                height: 400px;
            }

            @media screen and (min-width: $r) {
                top: calc(50% - 225px);
                height: 450px;
                width: 800px;
            }

            @media screen and (min-width: $r2) {
                top: calc(50% - 275px);
                height: 550px;
                width: 900px;
            }

            .hero-title {
                text-decoration: none;
            }
        }
    }

    .carousel-control-prev,
    .carousel-control-next {
        z-index: 15;
        top: 93%;
        background-color: #F8433C;
        height: 7%;
        max-width: 5%;
        opacity: 1;
    }

    .carousel-control-prev {
        left: 33%;
    }

    .carousel-control-next {
        right: 57%;
    }

    .comprar-btn,
    .agregar-btn {
        border-color: transparent;
        border-radius: 0px;
        font-family: FABRIK;
        font-size: 18px;

        @media screen and (min-width: $dm) {
            font-size: 18px;
        }

        @media screen and (min-width: $r) {
            font-size: 22px;
        }

        @media screen and (min-width: $r2) {
            font-size: 32px;
        }
    }

    .agregar-btn {
        border-color: #F94139;
        background-color: transparent;
    }

    //inputs
    /*
P.S: if you like my content maybe you will become a donator and donate some money? That helps me to create new awesome materials. https://www.paypal.me/melnik909
*/

    /*
=====
LEVEL 1. RESET STYLES
=====
*/

    .field {
        --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
    }

    .field__input {
        background-color: transparent;
        border-radius: 0;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .field__input:focus::-webkit-input-placeholder {
        color: var(--uiFieldPlaceholderColor);
    }

    .field__input:focus::-moz-placeholder {
        color: var(--uiFieldPlaceholderColor);
        opacity: 1;
    }

    /*
=====
LEVEL 2. CORE STYLES
=====
*/

    .a-field {
        display: inline-block;
    }

    .a-field__input {
        display: block;
        box-sizing: border-box;
        width: 100%;
    }

    .a-field__input:focus {
        outline: none;

    }

    /*
=====
LEVEL 3. PRESENTATION STYLES
=====
*/

    /* a-field */

    .a-field {
        --uiFieldHeight: var(--fieldHeight, 28px);
        --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
        --uiFieldBorderColor: var(--fieldBorderColor);

        --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
        --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
        --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);
        font-family: FABRIK;
        position: relative;
        box-sizing: border-box;

        @media screen and (min-width: $dm) {
            --uiFieldHeight: var(--fieldHeight, 38px);
        }

        @media screen and (min-width: $r) {
            --uiFieldHeight: var(--fieldHeight, 44px);
        }

        @media screen and (min-width: $r2) {
            --uiFieldHeight: var(--fieldHeight, 64px);
        }
    }

    .a-field .a-field__input {
        height: var(--uiFieldHeight);
        padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
        border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);
    }

    .a-field .a-field__input::-webkit-input-placeholder {
        opacity: 0;
        transition: opacity .2s ease-out;
    }

    .a-field .a-field__input::-moz-placeholder {
        opacity: 0;
        transition: opacity .2s ease-out;
    }

    .a-field .a-field__input:not(:placeholder-shown)~.a-field__label-wrap .a-field__label {
        opacity: 0;
        bottom: var(--uiFieldPaddingBottom);
    }

    .a-field .a-field__input:focus::-webkit-input-placeholder {
        opacity: 1;
        transition-delay: .2s;
    }

    .a-field .a-field__input:focus::-moz-placeholder {
        opacity: 1;
        transition-delay: .2s;
    }

    .a-field .a-field__label-wrap {
        box-sizing: border-box;
        width: 100%;
        height: var(--uiFieldHeight);

        pointer-events: none;
        cursor: text;

        position: absolute;
        bottom: 0;
        left: 0;
    }

    .a-field .a-field__label {
        position: absolute;
        left: var(--uiFieldPaddingLeft);
        bottom: calc(50% - .8em);

        line-height: 1;

        pointer-events: none;
        transition: bottom .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out;
        will-change: bottom, opacity;
    }

    .a-field .a-field__input:focus~.a-field__label-wrap .a-field__label {
        opacity: 1;
        bottom: var(--uiFieldHeight);
    }

    /* a-field_a1 */

    .a-field_a1 .a-field__input {
        transition: border-color .2s ease-out;
        will-change: border-color;
    }

    .a-field_a1 .a-field__input:focus {
        border-color: var(--fieldBorderColorActive);
    }

    /* a-field_a2 */

    .a-field_a2 .a-field__label-wrap:after {
        content: "";
        box-sizing: border-box;
        width: 0;
        height: var(--uiFieldBorderWidth);
        background-color: var(--fieldBorderColorActive);

        position: absolute;
        bottom: 0;
        left: 0;

        will-change: width;
        transition: width .285s ease-out;
    }

    .a-field_a2 .a-field__input:focus~.a-field__label-wrap:after {
        width: 100%;
    }

    /* a-field_a3 */

    .a-field_a3 {
        padding-top: 1.5em;
    }

    .a-field_a3 .a-field__label-wrap:after {
        content: "";
        box-sizing: border-box;
        width: 100%;
        height: 0;

        opacity: 0;
        border: var(--uiFieldBorderWidth) solid var(--fieldBorderColorActive);

        position: absolute;
        bottom: 0;
        left: 0;

        will-change: opacity, height;
        transition: height .2s ease-out, opacity .2s ease-out;
    }

    .a-field_a3 .a-field__input:focus~.a-field__label-wrap:after {
        height: 100%;
        opacity: 1;
    }

    .a-field_a3 .a-field__input:focus~.a-field__label-wrap .a-field__label {
        bottom: calc(var(--uiFieldHeight) + .5em);
    }

    /*
=====
LEVEL 4. SETTINGS
=====
*/

    .field {
        --fieldBorderColor: #D1C4E9;
        --fieldBorderColorActive: #673AB7;
    }

    /*
.radio {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

/* Hide the browser's default radio button */
    /* Reset Select */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background: transparent;
        background-image: none;
        font-size: 10px;
        font-family: FABRIK;

        @media screen and (min-width: $dm) {
            font-size: 12px;
            line-height: 12px;
        }

        @media screen and (min-width: $r) {
            font-size: 15px;
            line-height: 20px;
        }

        @media screen and (min-width: $r2) {
            font-size: 18px;
            line-height: 23px;
        }

    }

    /* Remove IE arrow */
    select::-ms-expand {
        display: none;
    }

    /* Custom Select */
    .select {
        position: relative;
        display: flex;
        width: 100%;
        height: 50px;
        ;
        line-height: 2;
        background: trasnsparent;
        overflow: hidden;
        border-radius: 0;
    }

    select {
        flex: 1;
        padding: 0 .5em;
        color: #280071;

    }

    /* Arrow */
    .select::after {
        content: '\25BE';
        position: absolute;
        top: 0;
        right: 0;
        color: #280071;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }

    /* Transition */
    .select:hover::after {
        color: #F8433C;
    }

    .card {
        /* width: 500px; */
        /* margin: 50px auto; */
        /* clear: both; */
        /* display: block; */
        /* padding: 0px 0px; */
        background-color: white;
        /* border-radius: 4px; */
        border: transparent;
        flex-direction: row;
    }

    .input-title {
        text-decoration: underline $color-primary;
    }

    /* Styling Checkbox Starts */
    .checkbox-label {
        /* display: block; */
        /* position: relative; */
        /* margin: auto; */
        cursor: pointer;
        /* font-size: 22px; */

        /* clear: both; */
    }

    .checkbox-label input {

        opacity: 0;
        cursor: pointer;
    }

    .checkbox-label .checkbox-custom {
        position: absolute;
        top: 10px;
        left: 0px;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        border: 2px solid #270172;
    }

    .checkbox-label input:checked~.checkbox-custom {
        background-color: transparent;
        border-radius: 5px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #270172;
    }

    .checkbox-label .checkbox-custom::after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid #270172;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(0deg) scale(0);
        -ms-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0);
        opacity: 1;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }

    .checkbox-label input:checked~.checkbox-custom::after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8px;
        top: 3px;
        width: 6px;
        height: 12px;
        border: solid #270172;
        border-width: 0 2px 2px 0;
        background-color: transparent;
        border-radius: 0;
    }

    /* For Ripple Effect */
    .checkbox-label .checkbox-custom::before {
        position: absolute;
        content: "";
        left: 10px;
        top: 10px;
        width: 0px;
        height: 0px;
        border-radius: 5px;
        border: 2px solid #270172;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
    }

    .checkbox-label input:checked~.checkbox-custom::before {
        left: -3px;
        top: -3px;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        -webkit-transform: scale(3);
        -ms-transform: scale(3);
        transform: scale(3);
        opacity: 0;
        z-index: 999;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }

    .rectangle {
        height: 160px;
        width: 160px;
        background-color: #270172;
    }

    .modal-dialog {
        display: flex;
        justify-content: center;
        align-content: center;

        .modal-header {
            /* display: flex; */
            /* align-items: flex-start; */
            /* justify-content: space-between; */
            padding-right: 1rem;
            padding-top: 1rem;
            border-bottom: transparent;
            border-top-left-radius: .0rem;
            border-top-right-radius: .0rem;

            .close {
                float: right;
                font-weight: 700;
                line-height: 1;
                color: #270172;
                text-shadow: 0 1px 0 #270172;
                opacity: .8;
            }
        }
    }
}
</style>
