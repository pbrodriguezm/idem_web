<template>
  <div v-if="screenWidth != nm" class="beneficos-3d container-fluid d-flex flex-column px-0" style="height:100vh;min-height:480px;max-height:600px;position:relative">
    <TheNavbarMobile mySidebarId="222" mySidebarSearchId="222" title="Beneficios" fontColor="white" backgroundColor="#FB4030" iconsColor="white"/>
    <div id="example" class="d-flex flex-column w-100  px-2" style="height:100%;max-height:480px;margin-top:20vh;">
      <carousel-3d :space="carousel3d.space" :width="carousel3d.width" :height="carousel3d.height" :slide-border="0">
        <slide v-for="curso in courses" class="d-flex flex-column justify-content-center" :index="curso.id" style="height:100%">
          <div class="column d-flex flex-column w-100 h-100 justify-content-center">
            <div class="d-flex justify-content-center w-100 h-50 pb-2 p-lg-2">
              <div class="d-flex justify-content-center flex-column">
                <div class="icon1" />
              </div>
            </div>
            <div class="d-flex justify-content-center w-100 h-25 pb-2 p-lg-2">
              <span class="icon-text text-center px-lg-2 px-xl-3">Aprenderás a tu propio ritmo.</span>
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
      // changeCarouselProperties() {
      //   switch (this.screenWidth) {
      //     case 'ms':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 170
      //       this.carousel3d.space = 190
      //       break;
      //     case 'mm':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 500
      //       break;
      //     case 'ml':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 100
      //       break;
      //     case 't':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 500
      //       break;
      //       defalut: break;
      //   }
      // }
      // $mm:375px;
      // $ml:425px;
      // $ds:768px;
      // $dm:1024px;
      // $r:1440px;
      // $ds2:896px;
      // $dm2:1232px;
      // $r2:2000px;
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/variables';
  @import 'node_modules/bootstrap/scss/mixins/breakpoints';
  $ds:768px;
  $dm:1024px;
  $r:1440px;
  $ds2:896px;
  $dm2:1232px;
  $r2:2000px;
  .beneficos-3d {
    .carousel-3d-container {
      background-color: #FB4030;
      .carousel-3d-slide {
        background-color: #FB4030;
        border: none;
      }
    }
    height: 300px;
    background-color:  #FB4030;
    font-family: 'Merriweather',
    serif;
    font-size: 12px;
    .columna1 {
      height: 300px;
      background-color: white;
      color: #280071;
    }
    .columna2 {
      color: #280071;
      font-size: 10px;
    }
    .text-wrapper {
      width: 65%;
      font-size: 12px;
    }
    .icon1 {
      height: 120px;
      width: 120px;
      background-image: url(/beneficios/1.png);
      background-size: cover;
      @media screen and (min-width: $dm) {
        height: 40px;
        width: 40px;
      }
      @media screen and (min-width: $r) {
        height: 60px;
        width: 60px;
      }
      @media screen and (min-width: $r2) {
        height: 80px;
        width: 80px;
      }
    }
    .icon2 {
      height: 25px;
      width: 25px;
      background-image: url(/beneficios/2.png);
      background-size: cover;
      @media screen and (min-width: $dm) {
        height: 40px;
        width: 40px;
      }
      @media screen and (min-width: $r) {
        height: 60px;
        width: 60px;
      }
      @media screen and (min-width: $r2) {
        height: 80px;
        width: 80px;
      }
    }
    .icon3 {
      height: 25px;
      width: 25px;
      background-image: url(/beneficios/3.png);
      background-size: cover;
      @media screen and (min-width: $dm) {
        height: 40px;
        width: 40px;
      }
      @media screen and (min-width: $r) {
        height: 60px;
        width: 60px;
      }
      @media screen and (min-width: $r2) {
        height: 80px;
        width: 80px;
      }
    }
    .icon4 {
      height: 25px;
      width: 25px;
      background-image: url(/beneficios/team.png);
      background-size: cover;
      @media screen and (min-width: $dm) {
        height: 40px;
        width: 40px;
      }
      @media screen and (min-width: $r) {
        height: 60px;
        width: 60px;
      }
      @media screen and (min-width: $r2) {
        height: 80px;
        width: 80px;
      }
    }
    .title {
      font-size: 25px;
      font-family: TIEMPO;
      @media screen and (min-width: $dm) {
        font-size:30px;
      }
      @media screen and (min-width: $r) {
        font-size: 35px;
      }
      @media screen and (min-width: $r2) {
        font-size: 40px;
      }
    }
    .p {
      font-size: 12px;
      line-height: 14px;
      font-family: FABRIK;
      text-align: left;
      @media screen and (min-width: $dm) {
        font-size:14px;
        line-height: 16px;
      }
      @media screen and (min-width: $dm2) {
        font-size: 16px;
        line-height: 18px;
      }
      @media screen and (min-width: $r) {
        font-size: 18px;
        line-height: 21px;
      }
      @media screen and (min-width: $r2) {
        font-size: 22px;
        line-height: 25px;
      }
    }
    .icon-text {
      font-size: 20px;
      line-height: 22px;
      text-align: center;
      font-family: FABRIK;
      color: rgba(255, 255, 255, 0.8);
      @media screen and (min-width: $dm) {
        font-size:8px;
        line-height: 10px;
      }
      @media screen and (min-width: $dm2) {
        font-size: 10px;
        line-height: 12px;
      }
      @media screen and (min-width: $r) {
        font-size: 12px;
        line-height: 14px;
      }
      @media screen and (min-width: $r2) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
</style>
