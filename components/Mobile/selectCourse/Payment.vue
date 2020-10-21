<template>
  <div class="payment container-fluid px-5" style="height:100vh; width:100%; background-color:#DCEBEC;">
    <div class="container h-100 w-100">
      <div class="row h-100 w-100 m-0">
        <div class="col-md-7 d-flex justify-content-center flex-column px-5">
          <div class="py-4 px-0 ml-5" style="background-color:white;">
            <div class="d-flex flex-column h-100 justify-content-center py-0 px-0">
              <div class="text-container container d-flex w-100 px-5 py-4">
                <div class="column w-50 h-100 d-flex flex-column justify-content-center">
                  <p class="litle-label d-flex pt-0 m-0">curso</p>
                  <div class="titulo">
                    <div>
                      <p class="m-0">Administración</p>
                    </div>
                    <div>de empresas</div>
                  </div>
                </div>
                <div class="column w-50 h-100 d-flex justify-content-end">
                  <div class="litle-label d-flex flex-column justify-content-center  px-3">Precio total:</div>
                  <span
                    class="d-flex flex-column justify-content-center"
                    style="font-family:TIEMPO; color:#fb4030;"
                  >s/00</span>
                </div>
              </div>



              <div class="metodos-row row p-0 m-0 px-3">
                <div class="p-0 litle-label justify-content-end d-flex flex-column pl-4" style="color:#280071">Métodos de pago</div>
                <div class="metodos-container d-flex p-0 container justify-content-center w-100">
                  <div class="metodo-wrapper p-1">
                    <div class="método d-flex justify-content-center m-0">
                      <div class="w-100 h-100 d-flex justify-content-center flex-center">
                        <div class="m1"/>
                      </div>
                    </div>
                  </div>
                  <div class="metodo-wrapper p-1">
                    <div class="método-off d-flex justify-content-center m-0">
                      <div class="w-100 h-100 d-flex justify-content-center flex-center">
                        <div class="m2"/>
                      </div>
                    </div>
                  </div>
                  <div class="metodo-wrapper p-1">
                    <div class="método-off d-flex justify-content-center m-0">
                      <div class="w-100 h-100 d-flex justify-content-center flex-center">
                        <div class="m3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row px-5">
                <div class="column col-12 px-2">
                  <label class="field a-field a-field_a1 page__field w-100">
                    <input
                      class="field__input a-field__input"
                      placeholder="Ingrese su número de tarjeta"
                      required
                    >
                    <span class="a-field__label-wrap w-100">
                      <span class="a-field__label datos">Número de tarjeta</span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row px-5">
                <div class="column col-6 px-2">
                  <label class="field a-field a-field_a1 page__field w-100">
                    <input class="field__input a-field__input" placeholder="MM/DD" required>
                    <span class="a-field__label-wrap">
                      <span class="a-field__label datos">Fecha de caducidad</span>
                    </span>
                  </label>
                </div>
                <div class="column col-6 px-2">
                  <label class="field a-field a-field_a1 page__field w-100">
                    <input class="field__input a-field__input" placeholder="CCV" required>
                    <span class="a-field__label-wrap">
                      <span class="a-field__label datos">Código de seguridad</span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row px-2"></div>
              <div class="row w-100 m-0 p-0">
                <div class="btn-wrapper d-flex justify-content-center w-100 py-3">
                <button class="btn btn-outline-danger agregar-btn"> Comprar Ahora</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center flex-column h-100 w-100 p-4 px-0 py-0">
          <div class="w-75 pr-5">
            <div class="titulo pb-3">
              ¿Qué incluye
              <div>nuestros cursos?</div>
            </div>
            <div class="row h-100">
              <div class="col-md-3 p-0 d-flex flex-column justify-content-center">
                <img src="/cursoSelect/icon.png" width="45px;">
              </div>
              <div class="col-md-9 p-0">
                <span class="litle-label">
                  holamundoholamundo
                  <div class="descripcion1 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </div>
                </span>
              </div>

              <div class="col-md-3 p-0  d-flex flex-column justify-content-center">
                <img src="/cursoSelect/icon.png" width="45px;">
              </div>
              <div class="col-md-9 p-0">
                <span class="litle-label">
                  holamundoholamundo
                  <div class="descripcion1 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </div>
                </span>
              </div>

              <div class="col-md-3 p-0  d-flex flex-column justify-content-center">
                <img src="/cursoSelect/icon.png" width="45px;">
              </div>
              <div class="col-md-9 p-0">
                <span class="litle-label">
                  holamundoholamundo
                  <div class="descripcion1 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex </div>
                </span>
              </div>

              <div class="col-md-3 p-0  d-flex flex-column justify-content-center">
                <img src="/cursoSelect/icon.png" width="45px;">
              </div>
              <div class="col-md-9 p-0">
                <span class="litle-label">
                  holamundoholamundo
                  <div class="descripcion1 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500ss </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Cuadro anaranjado-->
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<!-- eslint-disable -->
<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$sm: 769px;
$dm: 1024px;
$r: 1440px;
.payment{
.titulo {
  color: #fb4030;
  font-size: 30px;
  line-height: 32px;
  font-family: TIEMPO;

  @media screen and (min-width: 769px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 22px;
  }
}

.descripcion1 {
  color: #280071;
  font-family: FABRIK;

  @media screen and (min-width: 769px) {
    font-size: 12px;
    line-height: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-siz1e: 14px;
    line-height: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20;
    line-height: 22px;
  }
}
.titulo1 {
  color: #fb4030;
  font-family: FABRIK;
}
.title{
  color: #fb4030;
  font-family: FABRIK;
  font-size:14px;
  line-height: 14px;

}
.litle-label{
  color: #fb4030;
  font-family: FABRIK;
  font-size:11px;
}

.precio {
  color: #fb4030;
  font-family: FABRIK;
  font-size: 17px;
  line-height: 19px;
  @media screen and (min-width: 769px) {
    font-size: 10px;
    line-height: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
    line-height: 19px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 20px;
  }
}
.m1{
       background: url(/pasarela/1.png) no-repeat;
        background-repeat:no-repeat;
background-size:contain;
background-position:center;
        min-height: 60px;;
        min-width: 60px;;
}
.m2{
       background: url(/pasarela/2.png) no-repeat;
        background-repeat:no-repeat;
background-size:contain;
background-position:center;
        min-height: 70px;;
        min-width: 70px;;
}
.m3{
       background: url(/pasarela/3.png) no-repeat;
        background-repeat:no-repeat;
background-size:contain;
background-position:center;
        min-height: 70px;;
        min-width: 70px;;
}
.comprar-btn,
.agregar-btn {
  border-color: transparent;
  border-radius: 0px;
  font-family: FABRIK;
  font-size: 10px;
  @media screen and (min-width: $dm) {
    font-size: 15px;
    border-color: #f94139;
  }
}
.agregar-btn {
  background: #fb4030;
  color: white;
}

.datos {
  color: #280071;
  font-family: FABRIK;
}
.metodos-row{
    width: 100%;
  .metodos-container{
    width: 100%;
    height: 100px;;
    .metodo-wrapper{
      width: 30%;
      height: 100%;
      .método{
      height: 100%;
      background-color: #280071;
      }
      .método-off{
      height: 100%;
border:1px solid rgba(0,0,0,0.1);
      }
    }
  }
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
  --fieldBorderColor: #d1c4e9;
  --fieldBorderColorActive: #673ab7;
}
}
</style>
