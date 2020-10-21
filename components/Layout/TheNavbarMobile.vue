<template>
  <div>
    <nav
      class="nav navbarmobile d-flex justify-content-between"
      :style="{color:fontColor,backgroundColor:backgroundColor}"
    >
      <div
        class="title d-flex h-100 flex-column justify-content-center px-3"
        :style="{color:fontColor}"
      >{{this.title}}</div>
      <div class="first-icon d-flex flex-column justify-content-center px-3">
        <a class="d-flex justify-content-center" @click="openNav()">
          <div class="nav-icon iconnav1" :style="{backgroundImage:`url(${menuImage})`}"/>
        </a>
        <a
          class="d-flex justify-content-center mt-3"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <div class="nav-icon iconnav2" :style="{backgroundImage: `url(${profileImage})`}"/>
        </a>
        <a class="d-flex justify-content-center mt-3" @click="openNavSearch()">
          <div class="nav-icon iconnav3" :style="{backgroundImage:`url(${searchImage})`}"/>
        </a>
      </div>
    </nav>
    <!--OPTIONS-->
    <div :id="mySidebarId" ref="this.mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
      <a
        href="/"
        v-if="appearWords"
        class="d-flex flex-column justify-content-center pr-4 pr-sm-0"
        style="height:20%"
      >
        <div class="w-100 d-flex justify-content-center">Inicio</div>
      </a>
      <a
        href="/nosotros"
        v-if="appearWords"
        class="d-flex flex-column justify-content-center pr-4 pr-sm-0"
        style="height:20%"
      >
        <div class="w-100 d-flex justify-content-center">Nosotros</div>
      </a>
      <a
        href="/cursos_online"
        v-if="appearWords"
        class="d-flex flex-column justify-content-center pr-4 pr-sm-0"
        style="height:20%"
      >
        <div class="w-100 d-flex justify-content-center">Cursos Online</div>
      </a>
      <!-- <a
        href="/#page_3"
        v-if="appearWords"
        class="d-flex flex-column justify-content-center pr-4 pr-sm-0"
        style="height:20%"
      > -->
      <!-- <a href="/donaciones" v-scroll-to="'#page_3'">
        <div class="w-100 d-flex justify-content-center">Cursos Presenciales</div> -->
      <!-- </a> -->
      <div class="d-flex flex-column justify-content-center pr-4 pr-sm-0" style="height:20%" @click="closeNav()">
        <nuxt-link :to="{path: '/', hash: '#page_3'}">
          <div class="w-100 d-flex justify-content-center">Cursos Presenciales</div>
        </nuxt-link>
      </div>

      <!-- </a> -->
      <a
        href="/donaciones"
        v-if="appearWords"
        class="d-flex flex-column justify-content-center pr-4 pr-sm-0"
        style="height:20%"
      >
        <div class="w-100 d-flex justify-content-center">Donaciones</div>
      </a>
    </div>
    <!--SERCH-->
    <div :id="mySidebarSearchId" ref="this.mySidebarSearch" class="sidebarsearch">
      <a href="javascript:void(0)" class="closebtn" @click="closeNavSearch()">×</a>
      <div class="d-flex justify-content-center w-100 h-100">
        <div class="d-flex flex-column justify-content-center">
          <div style="max-height:25%;">
            <label class="field a-field a-field_a1 page__field">
              <input class="field__input a-field__input" placeholder="e.g. Stanislav" required>
              <span class="a-field__label-wrap">
                <span class="a-field__label" style="font-size:25px;  color:#F9423A;">| Buscar</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!--INICIAR SECION-->
    <div
      class="modal fade w-75 h-100 m-0 p-0"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog p-0 m-0">
        <div class="registro modal-content w-100 h-100 p-2 p-sm-4">
          <div class="modal-header px-2 py-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="px-4">
            <div class="d-flex justify-content-center pb-4">
              <div>
                <div class="title">Regístrate</div>
                <input class="input" type="text" id="fname" name="fname" placeholder="username">
                <input class="input" type="text" id="fname" name="fname" placeholder="e-mail">
                <input class="input" type="password" id="fname" name="fname" placeholder="password">
                <div class="card px-2">
                  <label class="checkbox-label d-flex">
                    <input type="checkbox">
                    <span class="checkbox-custom rectangular"></span>
                  </label>
                  <div class="input-title">Estoy de acuerdo con todos los términos y condiciones</div>
                  <!-- <div class="clear"></div> -->
                </div>
                <a href="/mi_perfil">
                  <div class="Enter-button pt-2">Enter</div>
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-center py-4">
              <div class="w-100">
                <div class="title">Inicia Sesión</div>
                <input class="input" type="text" id="fname" name="fname" placeholder="username">
                <input class="input" type="password" id="fname" name="fname" placeholder="password">
                <a href="/mi_perfil" class="w-100">
                  <div class="Enter-button pt-2">Enter</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { responsiveMixin } from "~/utils/responsive";
export default {
  name: "TheNavbar",
  mixins: [responsiveMixin],
  data: () => ({
    menuImage: "",
    searchImage: "",
    profileImage: ""
  }),
  props: {
    mySidebarId: {
      type: String,
      default: "0"
    },
    mySidebarSearchId: {
      type: String,
      default: "0"
    },
    title: {
      type: String,
      default: "Unknown person"
    },
    fontColor: {
      type: String,
      default: "red"
    },
    backgroundColor: {
      type: String,
      default: "Unknown person"
    },
    iconsColor: {
      type: String,
      default: "Unknown person"
    },
    iconsColor: {
      type: String,
      default: "orange"
    },
    appearWords: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.asignIcons();
    if ($nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      var hash= $nuxt.$route.hash
      console.log('vemos rconchatumadre: ' + hash)
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    },
    openNav: function() {
      let id = this.mySidebarId;
      document.getElementById(id).style.width = "100%";
      setTimeout(() => (this.appearWords = true), 400);
    },
    openNavSearch: function() {
      let id = this.mySidebarSearchId;
      document.getElementById(id).style.width = "100%";
      setTimeout(() => (this.appearWords = true), 400);
    },
    closeNav: function() {
      this.appearWords = false;
      let id = this.mySidebarId;
      document.getElementById(id).style.width = "0";
    },
    closeNavSearch: function() {
      this.appearWords = false;
      let id = this.mySidebarSearchId;
      document.getElementById(id).style.width = "0";
    },
    asignIcons() {
      switch (this.iconsColor) {
        case "blue":
          this.menuImage = "/navbar/menu-blue.png";
          this.searchImage = "/navbar/search-blue.png";
          this.profileImage = "/navbar/profile-blue.png";
          break;
        case "white":
          this.menuImage = "/navbar/menu.png";
          this.searchImage = "/navbar/search.png";
          this.profileImage = "/navbar/profile.png";
          break;
        case "orange":
          this.menuImage = "/navbar/menu-orange.png";
          this.searchImage = "/navbar/search-orange.png";
          this.profileImage = "/navbar/profile-orange.png";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
$mm: 375px;
$ml: 425px;
$ds: 768px;
$dm: 1024px;
$r: 1440px;
$ds2: 896px;
$dm2: 1232px;
$r2: 2000px;
$maximum-breakpoint-before-expand: ml;
$minimum-breakpoint-before-contract: t;
$minimum-breakpoint-to-xl: xl;
$isDesktop: dm;
$dm: 1024px;
$orange-color: #fb4030;
$navbar-height: 110px;
$navbar-movile-height: 84px;
$navbar-light-toggler-icon-bg: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#FFFFFF' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");

.navbarmobile {
  height: 20vh;
  min-height: 96px;
  width: 100%;
  position: absolute;
  z-index: 28;
  top: 0;

  .title {
    color: white;
    font-family: TIEMPO;
    font-size: 18px;
  }

  .nav {
    height: 20vh;
    min-height: 96px;
    width: 100%;
    background-color: $orange-color;

    @media screen and (min-width: $dm) {
      width: 50px;
    }
  }

  .nav-icon {
    height: 15px;
    width: 15px;
  }

  .iconnav1 {
    background-size: cover;
  }

  .iconnav2 {
    background-size: cover;
  }

  .iconnav3 {
    background-size: cover;
  }

  .iconnav4 {
    background-image: url(/navbar/facebook.png);
    background-size: cover;
  }

  .iconnav5 {
    background-image: url(/LK.png);
    background-size: cover;
  }

  .iconnav6 {
    background-image: url(/navbar/instagram.png);
    background-size: cover;
  }
}

//sidebar
.sidebar {
  height: 100%;
  position: absolute;
  left: 0;
  width: 0;
  position: fixed;
  z-index: 500000;
  top: 0;
  left: 0;
  color: white;
  background-color: #280071;
  overflow-x: hidden;
  font-family: FABRIK;
  transition: 0.5s;
  padding-top: 20px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: white;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  color: white;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

//sidebarsearch
.sidebarsearch {
  height: 100%;
  position: absolute;
  left: 0;
  width: 0;
  position: fixed;
  z-index: 500000;
  top: 0;
  left: 0;
  color: black;
  background-color: #eff8f7;
  overflow-x: hidden;
  font-family: FABRIK;
  transition: 0.5s;
  padding-top: 20px;

  .field {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #f9423a);
  }

  .field__input {
    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    color: #f9423a;
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
  }

  .a-field .a-field__input {
    height: var(--uiFieldHeight);
    padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);
  }

  .a-field .a-field__input::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .a-field .a-field__input::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .a-field
    .a-field__input:not(:placeholder-shown)
    ~ .a-field__label-wrap
    .a-field__label {
    opacity: 0;
    bottom: var(--uiFieldPaddingBottom);
  }

  .a-field .a-field__input:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: 0.2s;
  }

  .a-field .a-field__input:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: 0.2s;
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
    bottom: calc(50% - 0.8em);

    line-height: 1;
    font-size: var(--uiFieldHintFontSize);

    pointer-events: none;
    transition: bottom 0.2s cubic-bezier(0.9, -0.15, 0.1, 1.15),
      opacity 0.2s ease-out;
    will-change: bottom, opacity;
  }

  .a-field .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
    opacity: 1;
    bottom: var(--uiFieldHeight);
  }

  /* a-field_a1 */

  .a-field_a1 .a-field__input {
    transition: border-color 0.2s ease-out;
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
    transition: width 0.285s ease-out;
  }

  .a-field_a2 .a-field__input:focus ~ .a-field__label-wrap:after {
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
    transition: height 0.2s ease-out, opacity 0.2s ease-out;
  }

  .a-field_a3 .a-field__input:focus ~ .a-field__label-wrap:after {
    height: 100%;
    opacity: 1;
  }

  .a-field_a3 .a-field__input:focus ~ .a-field__label-wrap .a-field__label {
    bottom: calc(var(--uiFieldHeight) + 0.5em);
  }

  /*
=====
LEVEL 4. SETTINGS
=====
*/

  .field {
    --fieldBorderColor: #f9423a;
    --fieldBorderColorActive: #f9423a;
    max-width: 250px;

    @media screen and (min-width: $mm) {
      max-width: 350px;
    }
  }

  .modal-dialog {
    .modal-header {
      /* display: flex; */
      /* align-items: flex-start; */
      /* justify-content: space-between; */
      border-bottom: transparent;
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;

      .close {
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: white;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.8;
      }
    }

    .registro {
      color: white;
      background-color: #280071;

      .title {
        font-family: TIEMPO;
        font-size: 30px;
        color: white;
      }

      .input {
        background-color: #280071;
        border-color: #dcebec;
        color: #dcebec;
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
        border: 1px solid #dcebec;
        -webkit-text-fill-color: #dcebec;
        -webkit-box-shadow: 0 0 0px 1000px #280071 inset;
        transition: background-color 5000s ease-in-out 0s;
      }

      .Enter-button {
        font-size: 20px;
        color: #f9423a;
        text-decoration: underline #f9423a;
      }
    }
  }
}

.sidebarsearch a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidebarsearch a:hover {
  color: white;
}

.sidebarsearch .closebtn {
  position: absolute;
  top: 0;
  color: #f9423a;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.modal-dialog {
  .modal-header {
    /* display: flex; */
    /* align-items: flex-start; */
    /* justify-content: space-between; */
    border-bottom: transparent;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;

    .close {
      float: right;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      color: white;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.8;
    }
  }

  .registro {
    color: white;
    background-color: #280071;

    .title {
      font-family: TIEMPO;
      font-size: 15px;
      color: white;
    }

    .input {
      background-color: #280071;
      border-color: #dcebec;
      color: #dcebec;
      width: 100%;
      margin-bottom: 7px;
      margin-top: 7px;
      padding-left: 5px;
      font-family: FABRIK;
      height: 20px;
      max-width: 320px;
      font-size: 10px;
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
      border: 1px solid #dcebec;
      -webkit-text-fill-color: #dcebec;
      -webkit-box-shadow: 0 0 0px 1000px #280071 inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    .Enter-button {
      font-size: 15px;
      color: #f9423a;
      text-decoration: underline #f9423a;
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
  padding: 0px 0px 0px 10px;
  font-size: 10px;
  margin: 0px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  text-decoration: underline rgba(255, 255, 255, 0.6);
}

/* Styling Checkbox Starts */
.checkbox-label {
  /* display: block; */
  /* position: relative; */
  /* margin: auto; */
  cursor: pointer;
  /* font-size: 22px; */
  line-height: 12px;
  height: 12px;
  width: 12px;
  /* clear: both; */
}

.checkbox-label input {
  opacity: 0;
  cursor: pointer;
}

.checkbox-label .checkbox-custom {
  position: absolute;
  top: 10px;
  left: 5px;
  height: 12px;
  width: 12px;
  background-color: transparent;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  border: 1px solid #ffffff;
}

.checkbox-label input:checked ~ .checkbox-custom {
  background-color: white;
  -webkit-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  opacity: 1;
  border: 1px solid #ffffff;
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

.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity: 1;
  left: 1px;
  top: 0px;
  width: 6px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}

/* For Ripple Effect */
.checkbox-label .checkbox-custom::before {
  position: absolute;
  content: "";
  left: 6px;
  top: 6px;
  width: 0px;
  height: 0px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.checkbox-label input:checked ~ .checkbox-custom::before {
  left: -3px;
  top: -3px;
  width: 10px;
  height: 10px;
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

@media screen and (max-height: 450px) {
  .sidebar {
  }

  .sidebar a {
    font-size: 18px;
  }

  .sidebarsearch {
  }

  .sidebarsearch a {
    font-size: 18px;
  }
}
</style>
