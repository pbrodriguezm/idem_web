<template>
  <div v-if="screenWidth != nm" class="NosotrosMobile container-fluid d-flex flex-column px-0" style="height:90vh;min-height:480px;position:relative">
    <TheNavbarMobile mySidebarId="OurTeamNavbar" mySidebarSearchId="OurTeamNavbarSearch" title="Nuestro Equipo" fontColor="#280071" backgroundColor="#DCEBEC" iconsColor="blue"/>
    <div id="example" style="height:100%;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
      <div class="uno h-100 p-0 ">
        <div class="screen1 h-100 d-flex justify-content-start">
        </div>
      </div>
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
  .NosotrosMobile {
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
      background-image: url("/team.jpg");
      background-size: cover;
      background-position:center;
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
      background-color: #DCEBEC;
      .white-container {
        position: absolute;
        min-width: 300px;
        top: 29%;
        left: 50%;
        width: 90%;
        height: 42%;
        background-color: white;
        color: #280071;
        font-size: 25px;
        text-align: center;
        z-index: 3;
      }
      .title {
        font-family: TIEMPO;
        font-size: 32px;
        line-height: 35px;
      }
      .text {
        font-family: FABRIK;
        font-size: 18px;
        line-height: 1.2vw;
        text-align: left;
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
  }
</style>
