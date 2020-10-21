<template>
  <div v-if="screenWidth != nm" class="TeachersSelectCourse container-fluid d-flex flex-column px-0" style="height:100vh;min-height:480px;max-height:600px;position:relative">
    <TheNavbarMobile mySidebarId="111" mySidebarSearchId="111" title="Docentes" fontColor="#280071" backgroundColor="white" iconsColor="blue" />
    <div id="example" class="px-2" style="height:80vh;min-height:392px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh;">
      <carousel-3d :space="carousel3d.space" :width="carousel3d.width" :height="carousel3d.height" :slide-border="0">
        <slide v-for="curso in courses" :index="curso.id" style="height:425px">
          <div class="px-0 w-100 h-100 m-0">
            <div class="d-flex h-100">
              <div class="d-flex flex-column pt-0 text-center">
                <div class="ci1 w-100 h-50 pt-0 d-flex flex-column justify-content-end">
                  <div class="w-100 d-flex justify-content-start">
                  </div>
                </div>
                <div class="card-text w-100 h-50 d-flex flex-column justify-content-start pb-4 px-4">
                  <span class="cursos-title text-left pt-4  pl-2 m-0 pr-5">Lourdes Flores Nano</span>
                  <span class="cursos-subtitle text-left pl-2">Abogada y Política peruana.</span>
                  <p class="cursos-text text-left pl-2 m-0">
                    m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                </div>
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
  @import 'assets/scss/variables';
  @import 'node_modules/bootstrap/scss/mixins/breakpoints';
  $ds:768px;
  $dm:1024px;
  $r:1440px;
  $ds2:896px;
  $dm2:1232px;
  $r2:2000px;
  .TeachersSelectCourse {
    .carousel-3d-container {
      background-color: white;
      .carousel-3d-slide {
      background-color: white;

        border: none;
      }
    }

      background-color: white;
    font-family: 'Merriweather',
    serif;
    text-shadow: none;
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
    .carousel {
      margin-right: 5%;
      margin-left: 5%;
      max-width: 1200px;
      @media screen and (min-width: $r) {
        margin-right:auto;
        margin-left: auto;
      }
    }
    .title-text {
      .text {
        color: #280071;
        font-family: FABRIK;
        font-size: 18px;
        line-height: 20px;
      }
      .title {
        color: #F9423A;
        font-family: TIEMPO;
      }
    }
    .text_container {
      max-width: 400px;
      margin-left: 10%;
    }
    .title {
      color: #43398a;
      font-weight: bold;
      text-shadow: none;
    }
    .img-fluid {
      height: 100%;
      visibility: hidden;
      border-color: transparent;
    }
    .ci1 {
      background-image: url(/docentes/1.png);
      background-size: cover;
      background-position: center;
    }
    .ci2 {
      background-image: url(/docentes/2.png);
      background-size: cover;
      background-position: center;
    }
    .ci3 {
      background-image: url(/docentes/3.png);
      background-size: cover;
      background-position: center;
    }
    .ci4 {
      background-image: url(/docentes/5.png);
      background-size: cover;
      background-position: center;
    }
    .cursos-title {
      color: #fb4030;
      font-size: 13px;
      padding-right: 15%;
      line-height: 15px;
      text-shadow: none;
      font-family: TIEMPO;
      @media screen and (min-width: $dm) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .cursos-title-2 {
      color: #fb4030;
      font-size: 15px;
      line-height: 19px;
      text-shadow: none;
    }
    .card-text {
      padding-right: 15%;
      background-color: #DCEBEC;
      font-family: FABRIK;
    }
    .cursos-text {
      color: #43398a;
      font-size: 10px;
      line-height: 10px;
      text-shadow: none;
      @media screen and (min-width: $dm) {
        font-size: 13px;
        line-height: 15px;
      }
    }
    .cursos-subtitle {
      color: #fb4030;
      font-size: 10px;
      line-height: 12px;
      text-shadow: none;
      @media screen and (min-width: $dm) {
        font-size: 13px;
        line-height: 15px;
      }
    }
    .carousel-caption {
      height: 100%;
      text-shadow: none;
    }
    .cursos-button {
      background-color: #dcecec;
      color: #43398a;
      font-size: 13px;
      letter-spacing: 3px;
      text-shadow: none;
    }
    .carousel-control-prev,
    .carousel-control-next {
      .carousel-control-prev-icon {
        display: none;
      }
      .carousel-control-next-icon {
        display: none;
      }
      z-index: 15;
      top: 50%;
      height:20px;
      width:20px;
      opacity: 1;
      background-size: cover;
    }
    .carousel-control-prev {
      background-image: url(/r2.png);
    }
    .carousel-control-next {
      background-image: url(/r1.png);
    }
  }
</style>
