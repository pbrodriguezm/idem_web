<template>
  <div v-if="screenWidth != nm" class="NuestraVisionMobile container-fluid d-flex flex-column px-0" style="height:90vh;min-height:480px;position:relative">
    <TheNavbarMobile mySidebarId="OurVisionNavbar" mySidebarSearchId="OurVisionNavbarSearch" title="Nuestra Vision" fontColor="#280071" backgroundColor="white" iconsColor="blue" />
    <div id="example" style="height:100%;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
      <b-carousel id="carousel1" :interval="4000" v-model="slide" class="p-0 m-0" style="text-shadow: 1px 1px 2px #333;" controls img-width="1024" img-height="480" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide style="height:100%;">
          <div class="h-100">
            <div class="uno h-100 p-0">
              <div class="container screen1 n1 h-100 d-flex justify-content-start">
                <div class="text w-80 py-5 d-flex flex-column justify-content-center" style="z-index:2;">
                  Convertirnos en el mejor instituto de educaciòn superior del Perú.
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <!-- Text slides with image -->
      </b-carousel>
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
  @import "assets/scss/variables";
  @import "node_modules/bootstrap/scss/mixins/breakpoints";
  $t:425px;
  $ds:768px;
  $dm:1024px;
  $r:1440px;
  $ds2:896px;
  $dm2:1232px;
  $r2:2000px;
  .NuestraVisionMobile {
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
      background-size: cover;
      max-width: 5000px;
      font-size: 30px;
      .text {
        opacity: 1;
        color: #F8433C;
        text-align: left;
        font-size: 25px;
        font-weight: 100;
        z-index: 3;
        font-family: TIEMPO;
        text-shadow: none;
        text-decoration: underline #F8433C;
      }
    }
    .n1 {
      background-image: url("/Nosotros/Fotos-IDEM--06.png");
      background-size: cover;
    }
    .n2 {
      background-image: url("/Nosotros/Fotos-IDEM--07.png");
      background-size: cover;
    }
    .screen-filter {
      background-color: rgba(127, 205, 199, 0.7);
      position: absolute;
      top: 0;
      z-index: 1;
    }
    .screen2 {
      z-index: -4;
      background-color: #280071;
      .white-container {
        position: absolute;
        top: 40%;
        left: 50%;
        width: 70%;
        height: 20%;
        font-family: TIEMPO;
        background-color: white;
        color: #280071;
        font-size: 30px;
        text-align: center;
        z-index: 3;
      }
    }
    .carousel-control-prev,
    .carousel-control-next {
      z-index: 15;
      top: 82%;
      background-color: #FF4036;
      max-height: 9%;
      max-height: 50px;
      max-width: 12%;
      opacity: 1;
    }
    .carousel-control-prev {
      left: 76%;
    }
    .carousel-control-next {
      left: 88%;
    }
    .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.carousel {
    height: 100%;
}
  }
</style>
