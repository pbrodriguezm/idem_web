<template>
<div class="navbar dropdown p-0">
    <!-- Modal --
    <div class=" modal fade m-0 p-0" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="registro modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="container">
                        <div class="row">
                            <div class="column col-6 p-5">
                                <div class="title pb-2">Regístrate</div>
                                <input class="input" type="text" id="fname" name="fname" placeholder="username">
                                <input class="input" type="text" id="fname" name="fname" placeholder="e-mail">
                                <input class="input" type="password" id="fname" name="fname" placeholder="password">

                                <div class="card">
                                    <label class="checkbox-label d-flex">
                                        <input type="checkbox">
                                        <span class="checkbox-custom rectangular"></span>
                                    </label>
                                    <div class="input-title">Estoy de acuerdo con todos los términos y condiciones</div>
                                    <!-- <div class="clear"></div>
                                </div>
                                <a href="/mi_perfil">
                                    <div class="Enter-button pt-3">Enter</div>
                                </a>
                            </div>
                            <div class="column col-6 p-5">
                                <div class="title pb-2">Inicia Sesión</div>
                                <input class="input" type="text" id="fname" name="fname" placeholder="username">
                                <input class="input" type="password" id="fname" name="fname" placeholder="password">
                                <a href="/mi_perfil">
                                    <div class="Enter-button pt-3">Enter</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <!--SEARCH
    <div class="collapse busqueda" id="collapseExample2" style="width:100%;">
        <div class="column dropdown_search_body card-body">
            <div class="row dropdown_option d-flex justify-content-center h-100 px-5">
                <label class="field a-field a-field_a1 page__field" style="width:600px;">
                    <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
                    <span class="a-field__label-wrap">
                        <span class="a-field__label" style="font-size:25px;  color:#F9423A;">| Buscar</span>
                    </span>
                </label>
            </div>
        </div>
    </div>
    -->
    <Navegation :appearWords="appearWords" v-on:appearWord="changeAW($event)"/>
    <a class="aaa d-flex justify-content-center ml-2" v-if="isapear" href="/">
        <div class="logo n7" />
    </a>
    <nav class="nav d-none d-md-flex flex-column justify-content-between py-4 px-0 ">
        <div class="first-icon d-flex flex-column justify-content-center">
            <a class="d-flex justify-content-center mt-4" @click="appearWords = !appearWords">
                <div class="nav-icon n1" />
            </a>
            <!--
            <a class="d-flex justify-content-center mt-4" data-toggle="modal" data-target="#exampleModal">
                <div class="nav-icon n2" />
            </a>
            <a class="d-flex justify-content-center mt-4" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" @click="scrollto0(collapseitsOpen)">
                <div class="nav-icon n3" />
            </a>
            -->
        </div>
        <div class="first-icon d-flex flex-column justify-content-center">
            <a class="d-flex justify-content-center mt-4" href="www.facebook.com">
                <div class="nav-icon n4" />
            </a>
            <a class="d-flex justify-content-center mt-4" href="www.facebook.com">
                <div class="nav-icon n5" />
            </a>
            <a class="d-flex justify-content-center mt-4" href="www.facebook.com">
                <div class="nav-icon n6" />
            </a>
        </div>
    </nav>
</div>
</template>

<script>
import {
    responsiveMixin
} from '~/utils/responsive'
import Navegation from '~/components/Layout/NavbarComponents/Desktop/Navegation'
export default {
    name: 'TheNavbar',
    mixins: [responsiveMixin],
    components: {
        Navegation,
    },
    data: () => ({
        scrollToElement: null,
        collapseitsOpen: false,
        isapear: true,
        cpid: 'cursospresenciales',
        appearWords: false,
        NavegationOpen: false,
    }),
    props: {
        mySidebarId: {
            type: String,
            default: '0'
        },

    },
    mounted() {
        window.addEventListener('load', () => {
            this.scrollToElement = require('scroll-to-element')
            document.documentElement.style.overflow = 'auto'
            this.collapseitsOpen = false;
        })
    },
    methods:{
        changeAW(value){
            this.appearWords = value
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

$mm:375px;
$ml:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;
$maximum-breakpoint-before-expand: ml;
$minimum-breakpoint-before-contract: t;
$minimum-breakpoint-to-xl: xl;
$isDesktop: dm;
$dm: 1024px;

$orange-color: $color-secondary;
$navbar-height: 110px;
$navbar-movile-height: 84px;

$navbar-light-toggler-icon-bg: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#FFFFFF' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");

.navbar {
    .dropdown_search_body {
        height: 100vh;
        z-index: 5000;
        color: #280071;
        background-color: $color-terceary;
        padding: 0;

        .dropdown_option {
            height: 20%;
            align-items: center;
            font-family: FABRIK;
            font-size: 30px;
        }

        .dropdown_option:hover {
            color: white;
        }

        .link {
            color: inherit;
            text-decoration: none;
        }
    }

    .dropdown_body {
        height: 100vh;
        z-index: 5000;
        color: rgba(255, 255, 255, 0.8);
        background-color: $color-primary;
        padding: 0;

        .dropdown_option {
            height: 20%;
            align-items: center;
            font-family: FABRIK;
            font-size: 35px;
            background-color: $color-primary;
        }

        .dropdown_option:hover {
            color: white;
            background-color: #39039E;
        }

        .link {
            color: inherit;
            text-decoration: none;
        }
    }

    .nav {
        position: fixed;
        top: 0;
        z-index: 5000000;
        right: 0px;
        height: 100vh;
        width: 35px;
        background-color: $color-secondary;

        @media screen and (min-width: $dm) {
            width: 50px;
        }
    }

    .nav-icon {
        height: 20px;
        width: 20px;
    }

    .logo {
        height: 60px;
        width: 40px;

        @media screen and (min-width: $dm) {
            height: 120px;
            width: 80px;
        }
    }

    .n1 {
        background-image: url(/navbar/menu.png);
        background-size: cover;
    }

    .n2 {
        background-image: url(/navbar/profile.png);
        background-size: cover;
    }

    .n3 {
        background-image: url(/navbar/search.png);
        background-size: cover;
    }

    .n4 {
        background-image: url(/navbar/facebook.png);
        background-size: cover;
    }

    .n5 {
        background-image: url(/LK.png);
        background-size: cover;
    }

    .n6 {
        background-image: url(/navbar/instagram.png);
        background-size: cover;
    }

    .n7 {
        background-image: url(/idem_logo.png);
        background-size: cover;
    }

    .aaa {
        margin: 0;
        position: absolute;
        z-index: 500;
        top: 0;
        left: 5%;
    }

    .field {
        --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #F9423A);
    }

    .field__input {
        background-color: transparent;
        border-radius: 0;
        border: none;

        -webkit-appearance: none;
        -moz-appearance: none;
        color: #F9423A;
        font-family: inherit;
        font-size: 25px;
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
        --uiFieldHeight: var(--fieldHeight, 50px);
        --uiFieldBorderWidth: var(--fieldBorderWidth, 3px);
        --uiFieldBorderColor: var(--fieldBorderColor);

        --uiFieldFontSize: var(--fieldFontSize, 25px);
        --uiFieldHintFontSize: var(--fieldHintFontSize, 25px);

        --uiFieldPaddingRight: var(--fieldPaddingRight, 0px);
        --uiFieldPaddingBottom: var(--fieldPaddingBottom, 0px);
        --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);
        font-family: TIEMPO;
        position: relative;
        box-sizing: border-box;
        font-size: var(--uiFieldFontSize);
        padding-top: 0px;
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
        --fieldBorderColor: #F9423A;
        --fieldBorderColorActive: #F9423A;
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
                color: white;
                text-shadow: 0 1px 0 #fff;
                opacity: .8;
            }
        }

        .registro {
            min-height: 400px;
            color: white;
            min-width: 800px;
            background-color: $color-primary;

            .title {
                font-family: TIEMPO;
                font-size: 30px;
                color: white;
            }

            .input {
                background-color: #280071;
                border-color: #DCEBEC;
                color: #DCEBEC;
                width: 100%;
                margin-bottom: 7px;
                margin-top: 7px;
                padding-left: 5px;
                font-family: FABRIK;
            }

            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus,
            select:-webkit-autofill,
            select:-webkit-autofill:hover,
            select:-webkit-autofill:focus {
                border: 1px solid #DCEBEC;
                -webkit-text-fill-color: #DCEBEC;
                -webkit-box-shadow: 0 0 0px 1000px #280071 inset;
                transition: background-color 5000s ease-in-out 0s;
            }

            .Enter-button {
                font-size: 20px;
                color: #F9423A;
                text-decoration: underline #F9423A;
            }
        }
    }

    .card {
        /* width: 500px; */
        /* margin: 50px auto; */
        /* clear: both; */
        /* display: block; */
        /* padding: 0px 0px; */
        background-color: #270172;
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
        color: rgba(255, 255, 255, .6);
        font-weight: 300;
        text-decoration: underline rgba(255, 255, 255, .6);
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
        border: 2px solid #FFFFFF;
    }

    .checkbox-label input:checked~.checkbox-custom {
        background-color: transparent;
        border-radius: 5px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #FFFFFF;
    }

    .checkbox-label .checkbox-custom::after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid white;
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
        border: solid white;
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
        border: 2px solid #FFFFFF;
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
}
</style>
