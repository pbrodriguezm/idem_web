<template>
<div class="InscriptionMobile container-fluid d-flex flex-column px-0" style="height:100vh;position:relative;">
    <TheNavbarMobile mySidebarId="5" mySidebarSearchId="5" title="" backgroundColor="transparent" iconsColor="orange" />
    <div id="example" class="d-flex justify-content-center" style="height:100vh;align-items: center;">
        <div class="white-container d-flex flex-column justify-content-center">
            <div class="title-wrapper d-flex justify-content-center">
                <p class="title">Inscripción</p>
            </div>
            <div class="fields-wrapper d-flex px-3">
                <div class="field-container">
                    <label class="field a-field a-field_a1 page__field w-100">
                        <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
                        <span class="a-field__label-wrap">
                            <span class="a-field__label">Nombre</span>
                        </span>
                    </label>
                </div>
                <div class="field-container">
                    <label class="field a-field a-field_a1 page__field  w-100">
                        <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
                        <span class="a-field__label-wrap">
                            <span class="a-field__label">Apellido</span>
                        </span>
                    </label>
                </div>
            </div>
            <div class="fields-wrapper d-flex  px-3">
                <div class="field-container">
                    <label class="field a-field a-field_a1 page__field w-100">
                        <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
                        <span class="a-field__label-wrap">
                            <span class="a-field__label">Celular</span>
                        </span>
                    </label>
                </div>
                <div class="field-container">
                    <label class="field a-field a-field_a1 page__field  w-100">
                        <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
                        <span class="a-field__label-wrap">
                            <span class="a-field__label">E-mail</span>
                        </span>
                    </label>
                </div>
            </div>
            <div class="  px-3">
                <div class="field-container">
                    <div class="select">
                        <select name="slct" id="slct" class="">
                            <option selected disabled>Curso/Seminario de interés</option>
                            <option value="1">Pure CSS</option>
                            <option value="2">No JS</option>
                            <option value="3">Nice!</option>
                        </select>
                    </div>
                </div>
                <div class="">
                    <div class="card">
                        <label class="checkbox-label d-flex">
                            <input type="checkbox">
                            <span class="checkbox-custom rectangular"></span>
                        </label>
                        <div class="input-title">Términos y condiciones</div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="btn-wrapper d-flex justify-content-center w-100 py-4">
                    <button class="btn btn-outline-danger agregar-btn py-0" style="min-width:100px;">Enviar</button>
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
            carousel3d: {
                height: 0,
                width: 0,
                space: 0,
            },
            slides: 7,
            courses: [{
                    id: 0,
                    type: 'NEGOCIOS',
                    name: 'Curso de derecho Concursal',
                    text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
                },
                {
                    id: 1,
                    type: 'NEGOCIOS',
                    name: 'Curso de derecho Financiero',
                    text: "El Curso de Derecho Financiero abordará en 5 módulos los siguientes temas: contratación con un banco de inversión, operaciones de financiamiento directo y cobertura de riesgo, operaciones de financiamiento mediante mercado de capitales, instituciones de inversión colectiva y fondos de pensiones y project finance."
                },
                {
                    id: 2,
                    type: 'NEGOCIOS',
                    name: 'Nosotoros',
                    text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
                }
            ]
        }
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

.InscriptionMobile {
    position: relative;
    background-image: url("/Home/Fotos-IDEM--08.png");

    .white-container {
        width: 250px;
        height: 370px;
        background-color: white;
        color: #280071;
        font-size: 25px;
        text-align: center;
        z-index: 3;

        .fields-wrapper {
            flex-direction: column;

            .field-container {
                @media only screen and (min-width: 425px) and (max-height: 425px) {
                    padding-right: 5px;
                    padding-left: 5px;
                }
            }

            @media only screen and (min-width: 425px) and (max-height: 320px) {
                flex-direction: row;
                max-height:45px;
            }
            @media only screen and (min-width: 425px) and (max-height: 425px) {
                flex-direction: row;
            }
        }

        @media screen and (min-width: $ml) {
            width: 335px;
            height: 450px;
            font-size: 39px;

        }

        @media only screen and (min-width: 425px) and (max-height: 425px) {
            height: 350px;
        }

        @media only screen and (min-width: 425px) and (max-height: 320px) {
            height: 300px;
        }

        .title-wrapper {
            position: relative;
            font-family: TIEMPO;
            font-size: 24px;
            line-height: 35px;
            margin: 0px;
            min-height: 70px;

            @media screen and (min-width: $ml) {
                font-size: 28px;

            }

            @media only screen and (min-width: 425px) and (max-height: 425px) {
                font-size: 28px;
            }

            @media only screen and (min-width: 425px) and (max-height: 320px) {
                font-size: 24px;
            }

            .title {
                position: absolute;
                top: 50%;
                margin: 0px;

                @media only screen and (min-width: 425px) and (max-height: 320px) {
                    top: 40%;
                }
            }
        }

        .text {
            font-family: FABRIK;
            font-size: 10px;
            line-height: 20px;
            text-align: left;
        }
    }

    .field {
        --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
    }

    .field__input {
        background-color: transparent;
        border-radius: 0;
        border: none;

        -webkit-appearance: none;
        -moz-appearance: none;

        font-family: inherit;
        font-size: 16px;
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

        --uiFieldFontSize: var(--fieldFontSize, 12px);
        --uiFieldHintFontSize: var(--fieldHintFontSize, 1em);

        --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
        --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
        --uiFieldPaddingLeft: var(--fieldPaddingLeft, 0px);
        font-family: FABRIK;
        position: relative;
        box-sizing: border-box;
        font-size: var(--uiFieldFontSize);
        padding-top: 10px;
        ;
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
        font-size: var(--uiFieldHintFontSize);

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
        font-family: FABRIK;
        font-size: 12px;
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
        top: -20%;
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
    font-family: FABRIK;

}

.input-title {
    clear: both;
    padding: 15px 0px 0px 10px;
    font-size: 10px;
    margin: 0px;
    color: #270172;
    font-weight: 300;
    text-decoration: underline#270172;
}

/* Styling Checkbox Starts */
.checkbox-label {
    /* display: block; */
    /* position: relative; */
    /* margin: auto; */
    cursor: pointer;
    /* font-size: 22px; */
    line-height: 24px;
    height: 24px;
    width: 24px;
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
    bottom: 3px;
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
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
            color: #270172;
            text-shadow: 0 1px 0 #270172;
            opacity: .8;
        }
    }
}
</style>
