<template>
  <div v-if="screenWidth != nm" class="ComoFuncionaMobile container-fluid d-flex flex-column px-0" style="height:90vh;min-height:480px;position:relative">
    <TheNavbarMobile mySidebarId="123123" mySidebarSearchId="13123" title="¿Como Funciona?" fontColor="white" backgroundColor="#280071" />
    <div id="example" style="height:100%;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
      <carousel-3d :space="carousel3d.space" :width="carousel3d.width" :height="carousel3d.height" :slide-border="0">
        <slide v-for="curso in courses" class="d-flex flex-column justify-content-center" :index="curso.id" style="height:100%">
          <div class="w-100 h-100 d-flex  justify-content-center">
            <div class="d-flex justify-content-center h-100 flex-column">
              <div class="image-wrapper w-100  h-50 d-flex justify-content-center p-0">
                <div class="image w-100 h-100" />
              </div>
              <div class="text-container h-50 px-2 d-flex w-100 py-4">
                <div class="title px-0">1er paso</div>
                <div class="text">Encuentra más información sobre el trabajo de Idem en el siguiente <a href="/nosotros">link</a></div>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
  import {
    Carousel3d,
    Slide
  } from 'vue-carousel-3d';
  export default {
    components: {
      Carousel3d,
      Slide,
    },
    data: function() {
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
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        var screenWidth = window.innerWidth;
        if (screenWidth < 320) {
          this.screenWidth = 'ms'
          this.carousel3d.height = 400
          this.carousel3d.width = 180
          this.carousel3d.space = 220
        }
        if (screenWidth >= 320 && screenWidth < 375) {
          this.screenWidth = 'mm'
          this.carousel3d.height = 400
          this.carousel3d.width = 190
          this.carousel3d.space = 250
        }
        if (screenWidth >= 375 && screenWidth < 425) {
          this.screenWidth = 'ml'
          this.carousel3d.height = 400
          this.carousel3d.width = 220
          this.carousel3d.space = 290
        }
        if (screenWidth >= 425 && screenWidth < 768) {
          this.screenWidth = 't'
          this.carousel3d.height = 400
          this.carousel3d.width = 300
          this.carousel3d.space = 390
        }
        if (screenWidth >= 768 && screenWidth < 1024) {
          // this.screenWidth = 'ds'
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 1024 && screenWidth < 1440) {
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 1440 && screenWidth < 2560) {
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 2560) {
          this.screenWidth = 'nm'
        }
        console.log('asda' + this.screenWidth)
      },
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/variables";
  @import "node_modules/bootstrap/scss/mixins/breakpoints";
  $t:425px;
  $ds:768px;
  $dm:1024px;
  $r:1440px;
  $ds2:896px;
  $dm2:1232px;
  $r2:2000px;
  .ComoFuncionaMobile,
  {
    background-color: #280071;
    .carousel-3d-container {
      background-color: #280071;
      .carousel-3d-slide {
        background-color: #280071;
        border: none;
      }
    }
    .image-wrapper {
      background-color: #280071;
      background-color: white;
      .image {
        background: url(/Cursos_presenciales_selectos/grupo.png) no-repeat;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .text-container {
      background-color: #280071;
      color: white;
      .title {
        color: #FB4030;
        font-family: TIEMPO;
        font-size: 18px;
        line-height: 18px;
      }
      .text {
        padding-left: 15px;
        padding-right: 15px;
        font-family: FABRIK;
        font-size: 12px;
        line-height: 12px;
        text-align: left;
        opacity: 0.6
      }
    }
  }
</style>
